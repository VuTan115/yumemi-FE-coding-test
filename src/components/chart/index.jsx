import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'
import instance from '../../../api/axios'
import endPoints from '../../enums/endpoints'

// 人口数 都道府県
export default function MyChart() {
  const [prefectures, setPrefectures] = useState([])

  /* chart config */
  const options = {
    chart: {
      // redrawOnParentResize: true,
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true,
          customIcons: []
        },
        autoSelected: 'none'
      }
    },
    stroke: {
      lineCap: 'butt'
    },
    xaxis: {
      type: 'category',
      show: true,
      categories: [],
      labels: {
        show: true,
        offsetX: 0,
        style: {
          cssClass: 'xaxis-label'
        }
      },
      title: {
        text: '年度',
        offsetX: 0,
        offsetY: 0,
        style: {
          cssClass: 'xaxis-title axis-title'
        }
      }
    },
    yaxis: {
      type: 'category',
      show: true,
      showAlways: true,
      categories: [],
      title: {
        rotate: 360,
        text: '人口数',
        style: {
          cssClass: 'yaxis-title axis-title'
        }
      }
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
  useEffect(async () => {
    try {
      const response = await instance.get(endPoints.PREFECTURES)
      setPrefectures(response.data.result)
      return ''
    } catch (error) {
      return error
    }
  }, [])

  return (
    <>
      <div className="container ">
        <div className="card">
          <div className="filter" onChange={checkboxChecked}>
            {prefectures.map((prefecture) => (
              <label
                className="filter-items"
                htmlFor={prefecture.prefCode}
                key={prefecture.prefCode}
              >
                <input
                  type="checkbox"
                  name="filter-items"
                  id={prefecture.prefCode}
                  value={prefecture.prefName}
                  defaultChecked={prefecture.prefCode === 1}
                />
                <span className="label">{prefecture.prefName}</span>
              </label>
            ))}
          </div>
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
