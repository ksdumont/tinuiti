import React from 'react'
import {Line} from 'react-chartjs-2';

function Chart(props) {
const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      fill: false,
      lineTension: 0.5,
      backgroundColor: '#6600cc',
      borderColor: '#4178cf',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

  return (
    <div className="chart-container">
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
  )
}

export default Chart
