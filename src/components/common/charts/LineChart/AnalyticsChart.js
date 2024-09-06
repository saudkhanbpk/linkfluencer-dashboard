import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = ({ indicateUp = true }) => {
  const color = indicateUp ? '#00AE3E' : '#AE0000';

  const options = {
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      },
      height: 'auto', // Set height to auto to respect the container's height
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
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: {
        style: {
          colors: '#666',
          fontSize: '12px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
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
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      strokeDashArray: 4,
    },
  };

  const series = [
    {
      name: 'series1',
      data: [0, 35, 12, 45, 32, 55],
    },
  ];

  return (
    // <div className="areachar w-full border" style={{ height: 'calc(100vw * 0.5)', maxHeight: '400px' }}>
    //   <ReactApexChart
    //     options={options}
    //     series={series}
    //     type="area"
    //     width="100%"
    //     height="100%"
    //   />
    // </div>
    <div className="areachar w-full h-[100%] max-h-[600px] md:max-h-[320px] pb-2">
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      width="100%"
      height="100%"
    />
  </div>
  );
};

export default LineChart;
