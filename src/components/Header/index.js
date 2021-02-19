import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import style from './style.module.css'
import DropDown from '../Dropdown'
import * as actions from '../../redux/actions';

const Header = props => {

  const handleChange = e => {
    // depend on which option we have we dispatch actions from redux 
    if (e.target.value === 'days') {
      props.setDay({
        labels: ["Oct 02", "", "", "", "", "Oct 09", "", "", "", "Oct 17", "", "", "", "", "Oct 24", "", "", "", "Oct 31", "", ""],
        data: [{ x: 0, y: 2.8 },
        { x: 1, y: 2.9 },
        { x: 2, y: 3.3 },
        { x: 3, y: 3.0 },
        { x: 4, y: 2.1 },
    
        { x: 5, y: 2.1 },
        { x: 6, y: 2.3 },
        { x: 7, y: 2.8 },
        { x: 8, y: 3.2 },
        { x: 9, y: 3.6 },
    
        { x: 10, y: 3.9 },
        { x: 11, y: 4.1 },
        { x: 12, y: 5 },
        { x: 13, y: 6 },
        { x: 14, y: 7 },
    
        { x: 15, y: 7 },
        { x: 16, y: 6 },
        { x: 17, y: 5.8 },
        { x: 18, y: 6 },
        { x: 19, y: 6.5 },
        { x: 20, y: 6 },
    
        { x: 21, y: 8 }],
        specialString: 'k'
    })
    } else {
      props.setMounth({
        specialString: '', labels: ["06:00", "", "12:00", "", "18:00", "", "24:00"], data: [
          { x: 0, y: 20 },
          { x: 1, y: 28},
          { x: 2, y: 22 },
          { x: 3, y: 41 },
          { x: 4, y: 44 },
          { x: 4, y: 52 },
          { x: 4, y: 42 },
      ]
      })
    }
}

const options = [
  {value: 'days', title: '30 days'},
  {value: 'hours', title: 'Thursday'}
]

  return (
    <header className={style.header}>
        <div className={style.headerTitle}>Completed sign-ups over time</div>
        <div className={style.headerDropdown}>
          <DropDown handleChange={handleChange} options={options}/>
        </div>
    </header>
  );
}

const mapDispatchToProps = dispatch => { 
  return bindActionCreators(actions, dispatch)
}

export default connect(null, mapDispatchToProps)(Header);