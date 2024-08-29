import { useState } from "react";

const Analytics: React.FC = () => {
  const [limit, setLimit] = useState('All')
  return (
    <div className="h-full bg-white">
      <div className="flex flex-col p-[24px]">
        <div>
          <h1 className="text-2xl font-header">Analytics</h1>
          <div className="flex items-center justify-between my[16px]">
          <label>Today’s Activity</label>
            <ul className="flex gap-4 items-center">
              <li
                onClick={() => {
                  setLimit('All');
                }}
                className={`${limit === 'All' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100`}
              >
                All
              </li>
              <li
                onClick={() => {
                  setLimit('Week');
                }}
                className={`${limit === 'Week' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100`}
              >
                Week
              </li>
              <li
                onClick={() => {
                  setLimit('Month');
                }}
                className={`${limit === 'Month' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100`}
              >
                Month
              </li>
              <li
                onClick={() => {
                  setLimit('Year');
                }}
                className={`${limit === 'Year' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100`}
              >
                Year
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
