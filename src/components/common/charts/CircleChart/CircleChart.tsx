import React, { useMemo } from 'react';
import { CountryClicks } from '../../../../types/interfaces';
import Circle from './Circles';
import Rectangle from './Rectangle';

interface CircleChartProps {
  countries?: CountryClicks[];
}

const CircleChart: React.FC<CircleChartProps> = ({ countries = [] }) => {
  const maxValue = useMemo(
    () =>
      countries.length > 0
        ? Math.max(...countries.map((country) => country.clicks))
        : 1,
    [countries],
  );

  const generateLegendValues = (max: number) => {
    if (max <= 1) return [1];
    const step = Math.ceil(max / 5);
    return Array.from({ length: 5 }, (_, index) => step * (index + 1));
  };

  const legendValues = generateLegendValues(maxValue);

  return (
    <div className="flex flex-col space-y-4 lg:space-y-6 h-full mb-10 justify-end">
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-y-4 gap-x-4 lg:gap-y-6 lg:gap-x-12">
        {countries.map((country) => (
          <div
            key={country.country}
            className="flex items-center justify-between lg:gap-6"
          >
            <span className="text-gray-700 lg:text-base">
              {country.country}
            </span>
            <Circle value={country.clicks} maxValue={maxValue} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 mt-4 lg:mt-6">
        {legendValues.map((val, index) => (
          <div key={index} className="flex flex-col items-center">
            <Rectangle value={val} maxValue={maxValue} />
            <span className="text-sm text-gray-500">
              {val >= 1000 ? `${val / 1000}k` : val}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircleChart;
