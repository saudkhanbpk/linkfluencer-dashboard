import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './AreaChart.css';

const ApexChart = ({ indicateUp = true }) => {
  const color = indicateUp ? '#00FF00' : '#AE0000';

  const [chartOptions, setChartOptions] = useState({
    series: [
      {
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      // You can add more series here if needed
    ],
    options: {
      chart: {
        type: 'area',
        border: 'solid green 2px', // This property is for the container, not the chart itself
      },
      colors: [color], // Set the color of the chart line to green (use '#FF0000' for red)
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    },
  });

  return (
    <div className='areachart'>
      <ReactApexChart
        options={chartOptions.options}
        series={chartOptions.series}
        type="area"
        height={150}
      />
    </div>
  );
};

export default ApexChart;
