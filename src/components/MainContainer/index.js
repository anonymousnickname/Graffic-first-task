import style from './style.module.css'

const MainContainer = ({ children }) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    );
}

export default MainContainer;