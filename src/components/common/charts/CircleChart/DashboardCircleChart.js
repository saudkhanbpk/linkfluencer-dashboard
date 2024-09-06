// Chart.js
import React from 'react';

const data = [
  { country: 'USA', value: 100 },
  { country: 'France', value: 90 },
  { country: 'China', value: 80 },
  { country: 'Brazil', value: 70 },
  { country: 'USA', value: 60 },
  { country: 'France', value: 50 },
  { country: 'China', value: 40 },
  { country: 'Brazil', value: 30 },
];

const Circle = ({ value, maxValue }) => {
  // Calculate opacity based on value
  const opacity = (value / maxValue).toFixed(2);

  return (
    <div
      className="w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center"
      style={{
        backgroundColor: `#30009C`, opacity: `${opacity}`, // Example color
      }}
    >
      {/* <span className="text-white font-semibold">{value}</span> */}
    </div>
  );
};

const DashboardCircleChart = () => {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="flex flex-col space-y-4">
      <div className="grid grid-cols-2 gap-y-4 gap-x-[40px] lg:gap-x-[80px] ">
        {data.map((d) => (
          <div
            key={d.country}
            className="flex items-center justify-between"
          >
            <span>{d.country}</span>
            <Circle value={d.value} maxValue={maxValue} />
          </div>
        ))}
      </div>
      {/* <div className="flex flex-wrap gap-4">
        {data.map((d, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Rectangle value={parseInt(count)} maxValue={maxValue} />
            <span>{num}</span>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default DashboardCircleChart;
