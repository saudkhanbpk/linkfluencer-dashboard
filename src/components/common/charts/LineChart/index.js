import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './LineChart.css';

const ApexChart = ({ indicateUp = true }) => {
  const color = indicateUp ? '#00FF00' : '#AE0000';

  const [chartOptions] = useState({
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
        toolbar: {
          show: false, // Hide the toolbar
        },
      },
      colors: [color], // Set the color of the chart line to green (use '#FF0000' for red)
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      grid: {
        show: false,
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        margin: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
      },
      xaxis: {
        labels:{
          show:false
        },
        axisTicks: {
          show: false, // Hide x-axis ticks
        },
      },
      yaxis:{
        labels:{
          show:false
        }
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          // gradientToColors: ['#00c6ff'],
          shadeIntensity: 1,
          type: 'vertical',
          opacityFrom: 0.8, // Adjust this to change how the gradient impacts the smoothness visually
          opacityTo: 0.1,
          stops: [0, 100],
        },}
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
