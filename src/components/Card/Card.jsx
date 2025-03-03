import React from 'react'
import {motion, AnimateSharedLayout} from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Card.css'
import { UilTimes } from '@iconscout/react-unicons'
import Chart from 'react-apexcharts'

const Card = (props) => {

  const [expanded, setExpanded] = React.useState(false)


  return (
    <AnimateSharedLayout>
      {
        expanded? (
          <ExpandedCard param = {props} setExpanded = {() => setExpanded(false)} />
        ):
        <CompactCard param = {props} setExpanded = {() => setExpanded(true)} />
      }
    </AnimateSharedLayout>
  )
}



//Compact Card
function CompactCard({param, setExpanded}){
const Png = param.png

  return (
    <motion.div className="CompactCard" 
    style={{
      background : param.color.background,
      boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
      >
      <div className="radialBar">
        <CircularProgressbar value={param.Value} text={`${param.barValue}%`} />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png/>
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  )
}

//Expanded Card
function ExpandedCard({param, setExpanded}){

  const data = {
    options: {
      chart:{
        type: 'area',
        height: 'auto',
      },

      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.35,
      },
      fill: {
        colors: ['#fff'],
        type: 'gradient',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        colors: ['white'],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
      grid: {
        show: true,
      },

      xaxis: {
        type: 'datetime',
        categories: [
          '2021-09-19T00:00:00',
          '2021-09-19T01:30:00',
          '2021-09-19T02:30:00',
          '2021-09-19T03:30:00',
          '2021-09-19T04:30:00',
          '2021-09-19T05:30:00',
          '2021-09-19T06:30:00'
        ],
      },

      }
    }

  return (
    <motion.div className="ExpandedCard" 
    style={{
      background : param.color.background,
      boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"

      >
        <div style={{
            alignSelf: 'flex-end',
            cursor: 'pointer',
            color: 'white',
        }}>
          <UilTimes onClick={setExpanded}          />
        </div>
        <span>{param.title}</span>
        <div className="chartContainer">
          <Chart series = {param.series} type = "area" options={data.options} />
        </div>
        <span>Last 24</span>
      </motion.div>
  )
}
export default Card
