import { dfs, findLeaves } from './index'

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
let arrOfBranches = []
const leafArr = findLeaves(nodeMap) // create an array of all leaves of our tree

const findBranches = (nodeMap, arrAdjList, leaf) => {  // find nodes and push them into array 
    arrAdjList.forEach(el => {
        if (dfs(nodeMap, el, leaf)) {
            arrOfBranches.push(el)
            findBranches(nodeMap, nodeMap[el].adjList, leaf)
            return
        }
    })
}

const makeArrOfBranches = () => { // create arrays from needed branches
    const resultArr = [];
    for (let i = 0; i < leafArr.length; i++) {
        findBranches(nodeMap, nodeMap[Object.keys(nodeMap)[0]].adjList, leafArr[i])
        arrOfBranches.unshift(Object.keys(nodeMap)[0])
        resultArr.push({ ...arrOfBranches });
        arrOfBranches = [];
    }
    return resultArr
}

const makeArrOfObjects = () => { // create a map of branches
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

const listOfBranches = makeArrOfObjects(nodeMap)
export default listOfBranches