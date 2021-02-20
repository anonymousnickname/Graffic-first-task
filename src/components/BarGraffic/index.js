
import { useState, useEffect } from 'react'

import style from './style.module.css'
import DropDown from '../Dropdown'
import Chart from '../Chart'
import jsonData from '../../data.json'
import {loadData} from '../../helpers'
import listOfBranches from '../../functions/algorithm'

const BarGraffic = () => {
    const [dropDownOptions, setDroopDownOptions] = useState([{ value: 'All', title: 'All' }]); //OptionsForDropdown
    const [listOfData, setListOfData] = useState([]); // list which we should parsing after changes
    const [objOfSelectOption, setObjOfSelectOption] = useState({}); // object of selected option with branch name and data
    const nodeMap = loadData(jsonData);  // we imported json file and parse it

    const handleChange = (e) => { // if our option is one of generated branches then choose it or choose all
        if (e.target.value === 'All') {
            setListOfData(Object.values(nodeMap))
            return
        }
        for (let key in objOfSelectOption) {
            if (key === e.target.value) {
                setListOfData(Object.values(objOfSelectOption[key]))
                return
            }
        }
    }
    
    useEffect(() => {
        setListOfData(Object.values(nodeMap))   //set our list to nodeMap object as array for maping
        listOfBranches.forEach( (el, index) =>  objOfSelectOption[`branch${index + 1}`] = el) //listOfBranches we imported from algorithm file and generate names of our branches and set object
        setObjOfSelectOption(objOfSelectOption) // set our object of branches
        let allOptions = dropDownOptions;
        for (let key in objOfSelectOption) {
            allOptions.push({ value: key, title: key }) // push to our all option other options
        }
        setDroopDownOptions(allOptions) // setAllOptions of dropdown 
    }, [dropDownOptions])

    return (
        <div className={style.wrap}>
            <div className={style.dropDown}>
                <DropDown options={dropDownOptions} handleChange={handleChange} />
            </div>
            <div className={style.wrapInner}>
                {listOfData.map(el => <Chart key={Math.random()} data={el}/>)}
            </div>
        </div>
    );
}

export default BarGraffic;