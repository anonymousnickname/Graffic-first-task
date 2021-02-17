import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import style from './style.module.css'
import { connect } from 'react-redux'

const MainGraffic = ({data, labels, specialString}) => {
    const [chartData, setChartData] = useState({})

    const chart = () => {
        setChartData({
            labels: labels,
            datasets: [
                {
                    label: "Completed sign-ups over time",
                    fill: false,
                    borderColor: "#4a90e2",
                    borderCapStyle: "round",
                    borderDash: [],
                    borderWidth: 5,
                    lineTension: 0.3,
                    borderDashOffset: 0.0,
                    borderJoinStyle: "round",
                    data: data,
                }
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [data, labels, specialString])
    return (
        <div className={style.wrap}>
            <Line data={chartData}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    bezierCurve: false,
                    layout: {
                        padding: {
                            top: 5,                      
                            bottom: 15
                        },
                    },                    
                    legend: {
                        display: false,
                    },
                    elements: {
                        point: {
                            radius: 0
                        }
                    },
                    scales: {
                        yAxes: [{
                            gridLines: {
                                drawBorder: false,
                                borderDash: [3,],
                                color: "#e8eaed",  
                                offsetGridLines: true
                            },
                            ticks: {
                                beginAtZero: true,
                                callback: function (value) {
                                    if (value == 0 || value == 10) {
                                        return ''
                                    }
                                    if (value % 2 == 0) {
                                        return `${value}${specialString}`;
                                    }

                                },
                                padding: 10
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                                offsetGridLines: true
                            },
                            ticks: {
                                padding: 20
                            }
                        }],
                    }
                }} />
        </div>
    );
}

const mapStateToProps = state => ({ 
    data: state.data,
    labels: state.labels,
    specialString: state.specialString
 })

export default connect(mapStateToProps)(MainGraffic);