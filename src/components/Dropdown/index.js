import style from './style.module.css'

const DropDown = ({handleChange, options}) => {
    return (
        <select className={style.select} onChange={handleChange}>
            {options.map(el => {
                return <option key={el.value + el.option} value={el.value}>{el.title}</option>
            })}
        </select>
    );
}

export default DropDown;