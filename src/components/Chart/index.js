import style from './style.module.css'

const Chart = ({data}) => {
    return (
        <div className={style.block}>
            <div className={style.barBlockWrap}>
                <div className={style.barBlock} style={{ height: data.value + '%', backgroundColor: data.type === 'BASIC' ? '#d7ebff' : '#d4eeea' }}>
                <div className={style.title}>{data.label}</div>
                </div>
            </div>
        <div className={style.percentageBlock}>{data.value}%</div>
    </div>
    );
}

export default Chart;