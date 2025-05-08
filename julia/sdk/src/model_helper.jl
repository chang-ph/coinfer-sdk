using Base64

function _get_child(children::Vector{ModelTreeNode}, name::String)
    for child in children
        if child.name == name
            return child
        end
    end
    return nothing
end

function dir_to_UMF(path::String)
    children = ModelTreeNode[]

    if !isdir(path)
        return children
    end

    for entry in readdir(path)
        entry_path = joinpath(path, entry)

        if isdir(entry_path)
            push!(children, ModelTreeNode(
                name=basename(entry_path), 
                type="folder", 
                children=dir_to_UMF(entry_path)
            ))
        else
            push!(children, ModelTreeNode(
                name=entry, 
                type="file", 
                content=base64encode(read(entry_path))
            ))
        end
    end

    return children
end

