export const  dfs = (adj, v, t) => {  // return true if nodes are on the same branch
    adj[v].visited = false
    if (v === t) return true
    if (adj[v].visited) return false
    adj[v].visited = true
    for (let neighbor of adj[v].adjList) {
        if (!neighbor.visited) { 
            let reached = dfs(adj, neighbor, t)
            if (reached) return true
        }
    }
    return false
}

export const findLeaves = (nodeMap) => {  // we find leaves in our tree
    const leafArr = []
    for (let key in nodeMap) {
        if (!nodeMap[key].adjList.length) {
            leafArr.push(key)
        }
    }
    return leafArr
}