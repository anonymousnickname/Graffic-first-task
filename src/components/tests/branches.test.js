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

const dfs = (adj, v, t) => {
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


let arrOfBranches = []
const findBranches = (nodeMap, arrAdjList, leaf) => {
    arrAdjList.forEach(el => {
        if (dfs(nodeMap, el, leaf)) {
            arrOfBranches.push(el)
            findBranches(nodeMap, nodeMap[el].adjList, leaf)
            return
        }
    })
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
const leafArr = findLeaves(nodeMap)

const makeArrOfBranches = () => {
    const resultArr = [];
    for (let i = 0; i < leafArr.length; i++) {
        findBranches(nodeMap, nodeMap[Object.keys(nodeMap)[0]].adjList, leafArr[i])
        arrOfBranches.unshift(Object.keys(nodeMap)[0])
        resultArr.push({ ...arrOfBranches });
        arrOfBranches = [];
    }
    return resultArr
}

const makeArrOfObjects = () => {
    let arrOfBranches = makeArrOfBranches();
    let resultArr = [];
    let branchObj = {};
    for (let i = 0; i < arrOfBranches.length; i++) {
        branchObj = {}
        for (let key in arrOfBranches[i]) {
            branchObj[arrOfBranches[i][key]] = nodeMap[arrOfBranches[i][key]]
        }
        resultArr.push(branchObj)
    }
    return resultArr
}

describe('Checking arr of branches', () => {
    test('This test should return arr of branches objects', () => {
        expect(makeArrOfBranches(nodeMap)).toStrictEqual([
            {
                "0": "node1",
                "1": "node2",
                "2": "node3",
            }, {
                "0": "node1",
                "1": "node2",
                "2": "nodeBranch2",
                "3": "nodeBranch3",
            }
        ])
    })
})


describe('Checking arr of objects of branches', () => {
    test('This test should return map list of our branches', () => {
        expect(makeArrOfObjects(nodeMap)).toStrictEqual([
            {
                "node1": {
                    label: "Contact Info",
                    value: 100,
                    type: "BASIC",
                    adjList: ["node2"],
                
                },
                "node2": {
                    label: "NemID",
                    value: 95,
                    type: "SERVICE",
                    adjList: ["node3", "nodeBranch2"],
                    visited: true
                },
                "node3": {
                    label: "Personal Address",
                    value: 95,
                    type: "BASIC",
                    adjList: [],
                    visited: true
                },
            }, {
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
                    adjList: ["node3", "nodeBranch2"],
                    visited: true
                },
                "nodeBranch2": {
                    label: "Branch 2",
                    value: 55,
                    type: "BASIC",
                    adjList: ["nodeBranch3"],
                    visited: true
                },
                "nodeBranch3": {
                    label: "Branch 3",
                    value: 25,
                    type: "BASIC",
                    adjList: [],
                    visited: false
                }
            }
        ])
    })
})
