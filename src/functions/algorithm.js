import { dfs, findLeaves, loadData } from '../helpers'
import jsonData from '../data.json';
const nodeMap = loadData(jsonData)
    
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
    
    const  makeArrOfObjects = (nodeMap) => { // create a map of branches
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