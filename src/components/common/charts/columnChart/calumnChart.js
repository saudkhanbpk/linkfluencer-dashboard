import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexColumnChart = () => {
  const [series] = useState([
    {
      name: "Series 1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ]);

  const [options] = useState({
    chart: {
      type: "bar",
      toolbar: {
        show: false, // Hide the toolbar
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "30%", // Width of the columns
        endingShape: "rounded", // Rounded ends for bars
        borderRadius: 10, // Rounded corners for bars
        distributed: false, // Distribute columns equally
        colors: {
          backgroundBarColors: [], // No background bar color
          backgroundBarOpacity: 1,
          hover: {
            opacity: 0.9, // Slightly reduce opacity on hover (or remove if you want no change)
          },
        },
      },
      
    },

    dataLabels: {
        enabled: false,
        // style: {
        //   fontSize: "14px",
        //   colors: ["#000"],
        // },
        // offsetY: 20, // Moves labels above the bars
        // position: "top", // Position the labels at the top of the bars
        // formatter: function (val) {
        //   return val.toFixed(0); // Format the label value
        // },
      },
    stroke: {
      show: true,
      width: 0, // No border stroke
      colors: ["transparent"], // Transparent border stroke
    },
    xaxis: {
      categories: ["M", "T", "W", "T", "F", "S", "S"],
      labels: {
        show: true, // Show x-axis labels
      },
      axisBorder: {
        show: false, // Hide x-axis border
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
    },
    yaxis: {
      labels: {
        show: true, // Show y-axis labels
      },
      axisBorder: {
        show: false, // Hide y-axis border
      },
      axisTicks: {
        show: false, // Hide y-axis ticks
      },
    },
    grid: {
      show: true, // Show grid lines
      borderColor: "#E3CCF4", // Light gray grid lines
      strokeDashArray: 4, // Dotted grid lines
      row: {
        colors: [], // Alternate row colors
        opacity: 0.2, // Row opacity
      },
      column: {
        colors: [], // Alternate column colors
        opacity: 1, // Column opacity
      },
    },
    fill: {
      colors: ["#E3CCF4"], // Solid color for the columns
      opacity: 1, // Full opacity
    },
    tooltip: {
      enabled: true,
    },
    states: {
      hover: {
        filter: {
          type: "none", // Disable hover effect filter
        },
      },
      active: {
        filter: {
          type: "none", // Disable active effect filter
        },
      },
    },
  });

  return (
    <div
      style={{
        height: "100%", // Fixed height
        width: "100%", // Full width of the container
        overflow: "hidden", // Hide overflow
      }}
    >
      <ReactApexChart options={options} series={series} type="bar" />
    </div>
  );
};

export default ApexColumnChart;
