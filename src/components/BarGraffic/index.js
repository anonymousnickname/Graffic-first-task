
import style from './style.module.css'
import { useState, useEffect } from 'react'
import DropDown from '../Dropdown'
import listOfBranches from '../../helpers/algorithm'
const BarGraffic = () => {
    const [dropDownOptions, setDownOptions] = useState([{ value: 'All', title: 'All' }]); //setOptionsForDropdown
    const [listOfData, setListOfData] = useState([]) // all list of data
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
    const [objOfSelectOption, setObjOfSelectOption] = useState({})

    const handleChange = (e) => { // if our option is one of generated branches then choose it or choose all
        for (let key in objOfSelectOption) {
            if (key === e.target.value) {

                setListOfData(Object.values(objOfSelectOption[key]))
                return
            }
        }
        setListOfData(Object.values(nodeMap))
    }

    useEffect(() => {
        setListOfData(Object.values(nodeMap))   //our list equals to nodemap
        for (let i = 0; i < listOfBranches.length; i++) {  //listOfBranches we imported form algorithm file and generate names of our branches and set object
            objOfSelectOption[`branch${i + 1}`] = listOfBranches[i];
        }
        setObjOfSelectOption(objOfSelectOption)
        let allOptions = dropDownOptions;
        for (let key in objOfSelectOption) {
            allOptions.push({ value: key, title: key })
        }
        setDownOptions(allOptions)
    }, [dropDownOptions])

    return (
        <div className={style.wrap}>
            <div className={style.dropDown}>
                <DropDown options={dropDownOptions} handleChange={handleChange} />
            </div>
            <div className={style.wrapInner}>
                {listOfData.map(el => {
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