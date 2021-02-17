import style from './style.module.css'

const Information = () => {
    return (
        <div className={style.wrap}>
            <div className={style.info}>1327</div>
            <div className={style.title}>Sign-ups completed</div>
            <p className={style.description}>You have a 11% growth in comparison with previous month.</p>
        </div>
    );
}

export default Information;