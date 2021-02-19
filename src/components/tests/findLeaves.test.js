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

const nodeMap2 = {
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
        adjList: ["nodeBranch3", "nodeBranch4"]
    },
    "nodeBranch3": {
        label: "Branch 3",
        value: 25,
        type: "BASIC",
        adjList: []
    },
    "nodeBranch4" : {
        label: "Branch 4",
        value: 55,
        type: "BASIC",
        adjList: []
    }
}

const nodeMap3 = {
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
        adjList: ["nodeBranch3", "nodeBranch4", "nodeBranch5"]
    },
    "nodeBranch3": {
        label: "Branch 3",
        value: 25,
        type: "BASIC",
        adjList: []
    },
    "nodeBranch4" : {
        label: "Branch 4",
        value: 55,
        type: "BASIC",
        adjList: []
    },
    "nodeBranch5" : {
        label: "Branch 5",
        value: 64,
        type: "BASIC",
        adjList: []
    }
}

const findLeaves = (nodeMap) => {
    const leafArr = []
    for (let key in nodeMap) {
        if (!nodeMap[key].adjList.length) {
            leafArr.push(key)
        }
    }
    return leafArr
}

describe('Checking functions for our algorithm searching branches from tree', () => {
    test('Should return all leaves of our', () => {
        expect(findLeaves(nodeMap)).toStrictEqual(["node3", "nodeBranch3"])
        expect(findLeaves(nodeMap2)).toStrictEqual(["node3", "nodeBranch3", "nodeBranch4"])
        expect(findLeaves(nodeMap3)).toStrictEqual(["node3", "nodeBranch3", "nodeBranch4", "nodeBranch5"])
    })

})
