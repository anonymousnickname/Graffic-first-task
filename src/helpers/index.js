export const  dfs = (adj, v, t) => {
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

export const findLeaves = (nodeMap) => {
    const leafArr = []
    for (let key in nodeMap) {
        if (!nodeMap[key].adjList.length) {
            leafArr.push(key)
        }
    }
    return leafArr
}