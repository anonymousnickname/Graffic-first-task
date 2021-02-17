import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import style from './style.module.css'

const DayGraffic = () => {
    const [chartData, setChartData] = useState({})

    const chart = () => {
        setChartData({
            labels: ["06:00", "", "12:00", "", "18:00", "", "24:00"],
            datasets: [
                {
                    label: "Thursday",
                    fill: false,
                    borderColor: "pink",
                    borderCapStyle: "square",
                    borderDash: [],
                    borderWidth: 5,
                    lineTension: 0.3,
                    borderDashOffset: 0.0,
                    borderJoinStyle: "round",
                    data: [
                        { x: 0, y: 20 },
                        { x: 1, y: 10 },
                        { x: 2, y: 22 },
                        { x: 3, y: 41 },
                        { x: 4, y: 34 },
                        { x: 4, y: 22 },
                        { x: 4, y: 12 },
                    ],
                }
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [])
    return (
        <div className={style.wrap}>
            <Line data={chartData}
                options={{

                    elements: {
                        point: {
                            radius: 0
                        }
                    },
                    scales: {
                        yAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",
                                borderDash: [4],
                                color: "#e8eaed",
                                drawBorder: false
                            },
                            ticks: {
                                beginAtZero: true,
                                callback: function (value) {
                                    if (value == 0) {
                                        return ''
                                    }
                                    if (value % 2 == 0) {
                                        return `${value}`;
                                    }

                                },
                                padding: 10
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                color: "rgba(0, 0, 0, 0)",

                            },
                            ticks: {
                                padding: 0
                            }
                        }],
                    }
                }} />
        </div>
    );
}

export default DayGraffic;