
import style from './style.module.css'
import { useState, useEffect } from 'react'
import DropDown from '../Dropdown'
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
    
    const algoritmResult = [
        {
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
        },
        {
            "node1": {
                label: "Contact Info",
                value: 100,
                type: "BASIC",
                adjList: ["node2"]
            },
            "node2": {
                label: "Contact Info",
                value: 100,
                type: "BASIC",
                adjList: ["node2"]
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
    ]

    useEffect(() => { 
        setList(Object.values(nodeMap))
        for (let i = 0; i < algoritmResult.length; i++) {
            obj[`branch${i+1}`] = algoritmResult[i];
        }
        setObj(obj)
        let allOptions = options;
        for (let key in obj) {
            allOptions.push({value: key, title: key})
        }
        setOptions(allOptions)
    }, [])

    const handleChange = (e) => {
        for (let key in obj) {
            if (key === e.target.value) {
                setList(Object.values(obj[key]))
                return
            } 
        }
         setList(Object.values(nodeMap))
    }

    return (
        <div className={style.wrap}>
            <div className={style.dropDown}>
                <DropDown options={options} handleChange={handleChange}/>
            </div>
            <div className={style.wrapInner}>
                {list.map((el, index) => {
                    return (
                        <div key={index + el.label} className={style.block}>
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