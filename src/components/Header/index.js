import style from './style.module.css'

const Header = ({handleChange}) => {

  const options = [
    { value: '30days', label: '30days' },
    { value: 'Hours', label: 'Hours' },
  ]

  return (
    <header className={style.header}>
        <div className={style.headerTitle}>Completed sign-ups over time</div>
        <div className={style.headerDropdown}>
        <select  onChange={(e) => handleChange(e.target.value)}>
            <option value="days">30days</option>
            <option value="hours">Hours</option>
        </select>
        </div>
    </header>
  );
}

export default Header;