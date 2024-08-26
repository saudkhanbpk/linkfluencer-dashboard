// import React from 'react';
// import ReactApexChart from 'react-apexcharts';
// import { ApexOptions } from 'apexcharts';

// const ChartComponent: React.FC = () => {
//   const options: ApexOptions = {
//     series: [
//       {
//         name: 'Net Profit',
//         data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
//       },
//       {
//         name: 'Revenue',
//         data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
//       },
//       {
//         name: 'Free Cash Flow',
//         data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
//       },
//     ],
//     chart: {
//       type: 'bar',
//       height: 350,
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         columnWidth: '55%',
//         borderRadius: 5,
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       show: true,
//       width: 2,
//       colors: ['transparent'],
//     },
//     xaxis: {
//       categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
//       labels: {
//         rotate: -45, // Rotate labels if necessary to fit
//         style: {
//           fontSize: '12px',
//         },
//       },
//     },
//     yaxis: {
//       title: {
//         text: '$ (thousands)',
//       },
//     },
//     fill: {
//       opacity: 1,
//     },
//     tooltip: {
//       y: {
//         formatter: function (val: number) {
//           return "$ " + 1 + " thousands";
//         },
//       },
//     },
//   };

//   return (
//     <div id="chart">
//       <ReactApexChart options={options} series={options.series} type="bar" height={350} />
//     </div>
//   );
// };

// export default ChartComponent;

import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
// import './style.css';

const ColumnChartMWD = ({ indicateUp = true }) => {
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
        type: 'bar',
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
    <div>
      <ReactApexChart
        options={chartOptions.options}
        series={chartOptions.series}
        type="bar"
        height={150}
      />
    </div>
  );
};

export default ColumnChartMWD;
