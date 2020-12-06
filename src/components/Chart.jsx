import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

function Chart({ keyword, dailyRankings }) {
  const chartData = {
    labels: ['10/01/20', '10/02/20', '10/03/20', '10/04/20', '10/05/20'],
    datasets: [
      {
        label: 'SEO Rankings',
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
            text: `Keywords: ${keyword}`,
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
  keyword: 'tempor aliquip enim',
  dailyRankings: [{
    rank: 40,
    date: '2020-10-01',
  },
  {
    rank: 48,
    date: '2020-10-02',
  },
  {
    rank: 32,
    date: '2020-10-03',
  },
  {
    rank: 21,
    date: '2020-10-04',
  },
  {
    rank: 17,
    date: '2020-10-05',
  }],
};

export default Chart;
