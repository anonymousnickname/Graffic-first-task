import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import style from './style.module.css'

const MainGraffic = () => {
    const [chartData, setChartData] = useState({})

    const chart = () => {
        setChartData({
            labels: ["Oct 02", "", "", "", "", "Oct 09", "", "", "", "Oct 17", "", "", "", "", "Oct 24", "", "", "",  "Oct 31", "", ""],
            datasets: [
                {
                    label: "Completed sign-ups over time",
                    fill: false,
                   
                    borderColor: "#4a90e2",
                    borderCapStyle: "square",
                    borderDash: [],
                    borderWidth: 5,
                    lineTension: 0.3,
                    borderDashOffset: 0.0,
                    borderJoinStyle: "round",
                    data: [
                    { x: 0, y: 2.8 },
                    { x: 1, y: 2.9 },
                    { x: 2, y: 3.3 },
                    { x: 3, y: 3.0 },
                    { x: 4, y: 2.1 },

                    { x: 5, y: 2.1 },
                    { x: 6, y: 2.3 },
                    { x: 7, y: 2.8 },
                    { x: 8, y: 3.2 },
                    { x: 9, y: 3.6},

                    { x: 10, y: 3.9 },
                    { x: 11, y: 4.1 },
                    { x: 12, y: 5 },
                    { x: 13, y: 6 },
                    { x: 14, y: 7},

                    { x: 15, y: 7 },
                    { x: 16, y: 6 },
                    { x: 17, y: 5.8 },
                    { x: 18, y: 6 },
                    { x: 19, y: 6.5},
                    { x: 20, y: 6},

                    { x: 21, y: 8},
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
                maintainAspectRatio: false,  
                bezierCurve: false,
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
                            color: "rgba(0, 0, 0, 0)",
                            borderDash: [3,],
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
                                    return `${value}k`;
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

export default MainGraffic;