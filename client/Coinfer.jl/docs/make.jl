using Documenter, Coinfer
using DocumenterMermaid
using DocumenterVitepress

cp("examples", "docs/src/examples"; force=true)
makedocs(;
    sitename="Coinfer Documentation",
    modules=[Coinfer],
    pages=["Coinfer.jl" => ["coinfer-jl-ref.md"]],
    format=DocumenterVitepress.MarkdownVitepress(;
        repo="github.com/vectorly-ai/server", build_vitepress=false, install_npm=false
    ),
)
