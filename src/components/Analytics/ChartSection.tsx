import React from 'react';
import ApexColumnChart from '../common/charts/columnChart/calumnChart';
import CircleChart from '../common/charts/CircleChart/CircleChart';
import Indicate from '../common/cards/Indicate';
import { CountryClicks } from '../../types/interfaces';

interface ChartSectionProps {
  limit: string;
  userVisit: Record<string, number> | null;
  topCountries?: CountryClicks[];
}

const ChartSection: React.FC<ChartSectionProps> = ({
  limit,
  userVisit,
  topCountries,
}) => {
  const totalUserVisits = userVisit
    ? Object.values(userVisit).reduce((total, count) => total + count, 0)
    : 0;

  return (
    <div>
      <h2 className="font-[500] mt-[16px] mb-[8px] text-[#121111]">
        Chart Analysis
      </h2>
      <div className="flex flex-col md:flex-row gap-[20px]">
        <div className="w-full md:w-1/2 border rounded-3xl h-[420px] bg-white flex flex-col justify-between relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:justify-between lg:items-center p-[18px]">
            <div className="w-full">
              <span className="text-[#9B919D]">User Visit</span>
              <div className="flex items-center">
                <h2 className="text-2xl text-[#292828] mr-2 font-semibold">
                  {totalUserVisits}
                </h2>
                <Indicate direction="up" percent={19} />
              </div>
            </div>
          </div>
          <div className="h-full mr-[18px]">
            <ApexColumnChart clickData={userVisit} />
          </div>
        </div>
        <div className="w-full md:w-1/2 border rounded-3xl h-[420px] bg-white p-[24px]">
          <h2 className="text-[24px] text-gray-700">Users Traffic By Region</h2>
          <div className="flex flex-col flex-wrap mt-6 h-full pb-4">
            <CircleChart countries={topCountries} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
