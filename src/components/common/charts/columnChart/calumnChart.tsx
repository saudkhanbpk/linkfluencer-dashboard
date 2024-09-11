import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts'; // Assurez-vous d'importer les types corrects pour les options

interface ApexColumnChartProps {
  clickData: Record<string, number> | null; // Assurez-vous que clickData peut être null
}

const ApexColumnChart: React.FC<ApexColumnChartProps> = ({ clickData }) => {
  const [series, setSeries] = useState([{ name: 'Clicks', data: [] as number[] }]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    // Vérifiez si clickData est valide avant de le manipuler
    if (!clickData || Object.keys(clickData).length === 0) {
      setSeries([{ name: 'Clicks', data: [] }]);
      setCategories([]);
      return;
    }

    // Transforme les données de clickData en format pour ApexCharts
    const sortedData = Object.entries(clickData).sort(
      ([a], [b]) => new Date(a).getTime() - new Date(b).getTime()
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
    <div
      style={{
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        padding: 0,
        margin: 0,
      }}
    >
      <ReactApexChart options={options} series={series} type="bar" />
    </div>
  );
};

export default ApexColumnChart;
