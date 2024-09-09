import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './LineChart.css';

const LineChart = ({ indicateUp = true }) => {
  const color = indicateUp ? '#00AE3E' : '#00AE3E';

  const options = {
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    colors: [color],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Days of the week on the x-axis
      title: {},
      labels: {
        show: false,
        style: {
          colors: '#666',
          fontSize: '12px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
        },
      },
      axisBorder: {
        show: false, // Hide the x-axis border line
      },
      axisTicks: {
        show: false, // Hide the x-axis ticks
      },
    },
    yaxis: {
      title: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (value) {
          return `$${value}`;
        },
        style: {
          colors: '#666',
          fontSize: '12px',
          fontFamily: 'Inter, sans-serif',
        },
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: false, // Show vertical grid lines
        },
      },
      yaxis: {
        lines: {
          show: false, // Hide horizontal grid lines
        },
      },
      strokeDashArray: 4, // Makes the vertical grid lines dashed
    },
  };

  const series = [
    {
      name: 'series1',
      data: [0, 35, 12, 45, 32, 55],
    },
  ];

  return (
    <div className="areachar w-full max-h-3/5">
      <ReactApexChart options={options} series={series} type="area" />
    </div>
  );
};

export default LineChart;
