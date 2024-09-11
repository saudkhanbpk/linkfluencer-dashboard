import React from 'react';
import IndicateUp from '../common/cards/IndicateUp';
import IndicateDown from '../common/cards/indicateDown';
import ApexChart from '../common/charts/LineChart/DashboardChart';
import CalumnChart from '../common/charts/columnChart';
import Chart from '../common/charts/CircleChart';

interface Source {
  percent: number;
  socialLogo: string;
}

interface AnalyticsSectionProps {
  topSources: Source[];
}

const AnalyticsSection: React.FC<AnalyticsSectionProps> = ({ topSources }) => {
  return (
    <div className="mt-12">
      <h1 className="font-[600] font-content">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        <div className="flex border h-[300px] flex-col relative items-center p-[20px] rounded-2xl w-full">
          <div className="relative flex w-full items-center h-full">
            <div className="h-full w-full flex flex-col justify-center">
              <span className="text-[#4C4C4C] font-content whitespace-nowrap">
                Youtube yearly earning
              </span>
              <h1 className="text-2xl font-content">$19,341.88</h1>
              <div className="mt-4">
                <IndicateUp percent={10} />
              </div>
            </div>
            <div className="absolute -right-6 mt-12 m-[24px] w-[200px]">
              <ApexChart indicateUp={true} />
            </div>
          </div>
          <div className="w-full border-[1.5px]"></div>
          <div className="relative flex w-full items-center h-full">
            <div className="h-full w-full flex flex-col justify-center">
              <span className="text-[#4C4C4C] font-content whitespace-nowrap">
                Youtube this Month earning
              </span>
              <h1 className="text-2xl font-content">$199</h1>
              <div className="mt-4">
                <IndicateDown percent={10} />
              </div>
            </div>
            <div className="absolute -right-6 mt-12 m-[24px] w-[200px]">
              <ApexChart indicateUp={false} />
            </div>
          </div>
        </div>
        <div className="border h-[300px] flex flex-col justify-between items-start px-[20px] py-[20px] rounded-2xl w-full">
          <span className="text-[#4C4C4C] font-content whitespace-nowrap">
            Top Sources
          </span>
          <div className="flex justify-between w-full h-full gap-6">
            {topSources.map((source, index) => (
              <div key={index} className="relative h-full">
                <CalumnChart
                  percent={source.percent}
                  logo={source.socialLogo}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="border h-[300px] p-[24px] rounded-2xl relative">
          <span className="text-[#4C4C4C] font-content whitespace-nowrap">
            Users traffic by region
          </span>
          <div className="h-full mt-4">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSection;
