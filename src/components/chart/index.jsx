import React, { useState } from 'react'
import Chart from 'react-apexcharts'
// 人口数 都道府県
export default function MyChart() {
  const [prefectures, setPrefectures] = useState([])

  /* chart config */
  const options = {
    chart: {},
    stroke: {
      lineCap: 'butt'
    },
    xaxis: {
      type: 'category',
      show: true,
      categories: []
    },
    yaxis: {
      showAlways: true,
      categories: []
    },
    legend: {
      offsetY: 80,
      position: 'right'
    }
  }
  /* chart data */
  const [series, setSeries] = useState([
    { name: 'series1', data: [2, 4.5, 8, 9, 1] },
    { name: 'series2', data: [2, 1.5, 2, 5, 10] }
  ])

  const checkboxChecked = (e) => {
    const prefCode = e.target.id
    const prefName = e.target.value
    const checkStatus = e.target.checked
  }

  return (
    <>
      <div className="container ">
        <div className="card">
          <div id="chart">
            <Chart
              options={{ ...options }}
              series={series}
              height="100%"
              width="100%"
            />
          </div>
        </div>
      </div>
    </>
  )
}
