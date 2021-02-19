const nodeMap = {
    "node1": {
        label: "Contact Info",
        value: 100,
        type: "BASIC",
        adjList: ["node2"]
    },
    "node2": {
        label: "NemID",
        value: 95,
        type: "SERVICE",
        adjList: ["node3", "nodeBranch2"]
    },
    "node3": {
        label: "Personal Address",
        value: 95,
        type: "BASIC",
        adjList: []
    },
    "nodeBranch2": {
        label: "Branch 2",
        value: 55,
        type: "BASIC",
        adjList: ["nodeBranch3"]
    },
    "nodeBranch3": {
        label: "Branch 3",
        value: 25,
        type: "BASIC",
        adjList: []
    }
}

const  dfs = (adj, v, t) => {
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

describe('Checking if nodes are on the same branch', () => {
    test('These nodes are on the same branches and should return true', () => {
        expect(dfs(nodeMap, "node1", "nodeBranch3")).toBe(true)
        expect(dfs(nodeMap, "node2", "nodeBranch2")).toBe(true)
        expect(dfs(nodeMap, "node1", "node3")).toBe(true)
    })
    test('These nodes are not on the same branches and should return false', () => {
        expect(dfs(nodeMap, "node3", "nodeBranch3")).toBe(false)
        expect(dfs(nodeMap, "node3", "nodeBranch2")).toBe(false)
    })
})

