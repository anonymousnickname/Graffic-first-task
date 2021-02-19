
import style from './style.module.css'
import { useState, useEffect } from 'react'
import DropDown from '../Dropdown'
import {dfs, findLeaves} from '../../helpers'
const BarGraffic = () => {
    const [options, setOptions] = useState([{value: 'All', title: 'All'}]);
    const [list, setList] = useState([])
    const [nodeMap, setNodeMap] = useState({
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
    })
    const [obj, setObj] = useState({})
    
const leafArr = findLeaves(nodeMap)
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

const makeArrOfBranches = () => {
    const resultArr = [];
    for (let i = 0; i < leafArr.length; i++) {
        findBranches(nodeMap, nodeMap[Object.keys(nodeMap)[0]].adjList, leafArr[i])
        arrOfBranches.unshift(Object.keys(nodeMap)[0])
        resultArr.push({...arrOfBranches});
        arrOfBranches = [];
    }
    return resultArr
}

const  makeArrOfObjects = () => {
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

    const handleChange = (e) => {
        for (let key in obj) {
            if (key === e.target.value) {
                setList(Object.values(obj[key]))
                return
            } 
        }
         setList(Object.values(nodeMap))
    }

    useEffect(() => { 
        const arrOfBranches = makeArrOfObjects(nodeMap);
        setList(Object.values(nodeMap))
        for (let i = 0; i < arrOfBranches.length; i++) {
            obj[`branch${i+1}`] = arrOfBranches[i];
        }
        console.log(123)
        setObj(obj)
        let allOptions = options;
        for (let key in obj) {
            allOptions.push({value: key, title: key})
        }
        setOptions(allOptions)
    }, [])

    return (
        <div className={style.wrap}>
            <div className={style.dropDown}>
                <DropDown options={options} handleChange={handleChange}/>
            </div>
            <div className={style.wrapInner}>
                {list.map(el => {
                    return (
                        <div key={Math.random()} className={style.block}>
                            <div className={style.barBlockWrap}>
                                <div className={style.barBlock} style={{ height: el.value + '%', backgroundColor: el.type === 'BASIC' ? '#d7ebff' : '#d4eeea' }}>
                                    <div className={style.title}>{el.label}</div>
                                </div>
                            </div>
                            <div className={style.percentageBlock}>{el.value}%</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default BarGraffic;