import style from './style.module.css'
import MainContainer from '../MainContainer'
import Header from '../Header'
import Information from '../Information'
import MainGraffic from '../MainGraffic'
import BarGraffic from '../BarGraffic'

const App = () => {

  return (
    <div className='app'>
      <MainContainer>
        <Header />
        <div className={style.flexWrap}>
          <Information />
          <div className={style.widthGraffic}>
            <MainGraffic />
          </div>
        </div>
        <BarGraffic />
      </MainContainer>
    </div>
  );
}

export default App;