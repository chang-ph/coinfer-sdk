class MessageHandler {
  constructor(public websocket: any, private names: any[] = []) { }

  public handle(m: any) {
    const message = m["message"]
    if (message["action"] === "experiment:event") {
      console.log(message['data'][0]['data'])
      console.assert(message["action"] === "experiment:event" && message["data"].length > 0 && message["data"][0]["data"].length > 0, message["action"] === "experiment:event", message["data"].length > 0, Object.keys(message["data"][0]["data"]).length > 0)
    }
    if (message["action"] === "experiment:event" && message["data"].length > 0 && Object.keys(message["data"][0]["data"]).length > 0) {
      console.log(`received ${message}`)
      const chain_name = this.names[0]["chain"]
      const names = this.names[0]["names"].slice(0, 1)
      const msg = this.make_unsub_msg(chain_name, names)
      console.log(`unsubscribing ${names} ${msg}`)
      this.websocket.send(msg)
      return true
    }
    else if (message["action"] === "names" && message["data"].length > 0 && message["data"][0]["names"].length > 0) {
      const is_empty_before = this.names.length === 0
      this.names = this.names.concat(message["data"])
      if (is_empty_before && this.names.length > 0) {
        const chain_name = this.names[0]["chain"]
        const names = this.names[0]["names"].slice(0, 1)
        const msg = this.make_sub_msg(chain_name, names)
        console.log(`subscribing ${names} ${msg}`)
        this.websocket.send(msg)
      }
    } else if (message["action"] === "experiment:output") {
      console.log("==>", message["data"].trimEnd())
    }
    return false
  }

  private make_sub_msg(chain_name: string, variable_names: string[]) {
    return JSON.stringify(
      {
        "action": "subscribe",
        "data": [{ "chain": chain_name, "variables": variable_names }],
      }
    )
  }

  private make_unsub_msg(chain_name: string, variable_names: string[]) {
    return JSON.stringify(
      {
        "action": "unsubscribe",
        "data": [{ "chain": chain_name, "variables": variable_names }],
      }
    )
  }
}

export async function wait_experiment_run(exp_id: string, endpoint: string, admin_utoken: string): Promise<WebSocket> {
  const socketExp = new WebSocket(endpoint.replace('http', 'ws') + `/mcmc/ws/sub/object/${exp_id}`)
  const handler = new MessageHandler(socketExp)
  let waiting_exp_data: boolean = true
  socketExp.addEventListener("message", event => {
    try {
      if (handler.handle(JSON.parse(event.data))) {
        waiting_exp_data = false;
      }
    } catch (e) {
      console.error(`[${exp_id}][on_message]`, e)
    }
  });

  socketExp.addEventListener("open", event => {
    console.warn(`[${exp_id}][on_open]`, event)
    socketExp.send(`{"action": "authorization", "token": "${admin_utoken}", "version": "1.0"}`)
  });

  socketExp.addEventListener("close", event => {
    console.warn(`[${exp_id}][on_close]`, event)
  });

  socketExp.addEventListener("error", event => {
    console.error(`[${exp_id}][on_errror]`, event)
  });

  while (waiting_exp_data) {
    await new Promise(resolve => setTimeout(resolve, 10000))
    console.log(`[${exp_id}] waiting 10s for exp data...`)
  }
  return socketExp
}

export async function createNotificationWS(endpoint: string, admin_utoken: string): Promise<WebSocket> {
  const socketNotification = new WebSocket(endpoint.replace('http', 'ws') + '/api/notification');
  // message is received
  socketNotification.addEventListener("message", event => {
    const message = JSON.parse(event.data);
    if (message["type"] == "on.notification") {
      const m = message["message"]
      console.log(`[on_notification] ${m["title"]} -- ${m["message"]}`)
    } else {
      console.log("[on_message]", event)
    }
  });

  // socket opened
  socketNotification.addEventListener("open", event => {
    console.warn("[on_open]", event)
    socketNotification.send(`{"action": "authorization", "token": "${admin_utoken}"}`)
  });

  // socket closed
  socketNotification.addEventListener("close", event => {
    console.warn("[on_close]", event)
  });

  // error handler
  socketNotification.addEventListener("error", event => {
    console.error("[on_errror]", event)
  });

  return socketNotification
}