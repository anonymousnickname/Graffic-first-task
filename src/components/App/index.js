import {useState} from 'react'

import style from './style.module.css'

import MainContainer from '../MainContainer'
import Header from '../Header'
import Information from '../Information'
import MainGraffic from '../MainGraffic'
import DayGraffic from '../DayGraffic'

const App = () => {

  const [value, setValue] = useState('days')

  const handleChange = (value) => {
      setValue(value)

  }

  return (
    <div className='app'>
      <MainContainer>
        <Header handleChange={handleChange}/>
        <div className={style.flexWrap}>
          <Information />
          <div className={style.widthGraffic}>
            {value === 'days' ? <MainGraffic /> :  <DayGraffic />}
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default App;