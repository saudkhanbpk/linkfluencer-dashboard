import React from 'react';

interface CircleProps {
  value: number;
  maxValue: number;
}

const Circle: React.FC<CircleProps> = ({ value, maxValue }) => {
  const opacity = isNaN(value / maxValue) || maxValue === 0 ? 0 : value / maxValue;

  return (
    <div
      className="w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center border border-green-500"
      style={{
        backgroundColor: '#30009C',
        opacity,
      }}
      aria-label={`Click count: ${value}`}
    ></div>
  );
};

export default React.memo(Circle);
