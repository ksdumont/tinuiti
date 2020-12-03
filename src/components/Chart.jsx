import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

function Chart({ keyword, dailyRankings }) {
  const chartData = {
    labels: ['10/01/2020', '10/02/2020', '10/03/2020',
      '10/04/2020', '10/05/2020'],
    datasets: [
      {
        label: 'Keyword Rankings',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(102,0,204, 0.5)',
        borderColor: '#4178cf',
        borderWidth: 5,
        data: dailyRankings === undefined ? [] : dailyRankings.map((r) => r.rank),
      },
    ],
  };

  return (
    <div className="chart-container">
      <Line
        data={chartData}
        options={{
          title: {
            display: true,
            text: `Keywords Used: ${keyword}`,
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </div>
  );
}

Chart.propTypes = {
  keyword: PropTypes.string,
  dailyRankings: PropTypes.instanceOf(Array),
};
Chart.defaultProps = {
  keyword: '',
  dailyRankings: [],
};

export default Chart;
