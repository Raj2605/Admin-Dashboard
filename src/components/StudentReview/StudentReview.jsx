import { colors } from '@mui/material'
import React from 'react'
import Chart from 'react-apexcharts'

const StudentReview = () => {

  const data = {
    series : [
      {
        name: "Review",
        data: [44, 55, 41, 64, 22, 43, 21],
  },
],
options: {
  chart: {
    type: 'area',
    height: "auto",
  },
  fill: {
    colors: ["#fff"],
    type: "gradient",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    colors: ["#ff929f"],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  grid: {
    show: false,
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2021-09-19T00:00:00",
      "2021-09-19T01:30:00",
      "2021-09-19T02:30:00",
      "2021-09-19T03:30:00",
      "2021-09-19T04:30:00",
      "2021-09-19T05:30:00",
      "2021-09-19T06:30:00",
    ],
  },
  yaxis: {
    show: false,
  },
  toolbar: {
    show: false,
  },
  }
}
  return (
    <div className="StudentsReview">
      <Chart series={data.series} options={data.options} type='area'/>
    </div>
  )
}

export default StudentReview
