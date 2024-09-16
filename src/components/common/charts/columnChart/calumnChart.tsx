import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface ApexColumnChartProps {
  clickData: Record<string, number> | null;
}

const ApexColumnChart: React.FC<ApexColumnChartProps> = ({ clickData }) => {
  const [series, setSeries] = useState([
    { name: 'Clicks', data: [] as number[] },
  ]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    if (!clickData || Object.keys(clickData).length === 0) {
      setSeries([{ name: 'Clicks', data: [] }]);
      setCategories([]);
      return;
    }

    const sortedData = Object.entries(clickData).sort(
      ([a], [b]) => new Date(a).getTime() - new Date(b).getTime(),
    );

    const data = sortedData.map(([_, value]) => value);
    const labels = sortedData.map(([key]) => key);

    setSeries([{ name: 'Clicks', data }]);
    setCategories(labels);
  }, [clickData]);

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '30%',
        borderRadius: 10,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: categories,
      labels: {
        show: true,
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
        show: true,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    grid: {
      show: true,
      borderColor: '#E3CCF4',
      strokeDashArray: 4,
    },
    fill: {
      colors: ['#E3CCF4'],
      opacity: 1,
    },
    tooltip: {
      enabled: true,
    },
  };

  return (
    <div className="w-full" style={{ maxHeight: '60vh', height: '100%', position: 'relative' }}>
      <div style={{ width: '100%', height: '100%',}}>
      <ReactApexChart options={options} series={series} type="bar" />
    </div>
    </div>
  );
};

export default ApexColumnChart;
