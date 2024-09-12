import React from 'react';

interface RectangleProps {
  value: number;
  maxValue: number;
}

const Rectangle: React.FC<RectangleProps> = ({ value, maxValue }) => {
  const opacity = value / maxValue;

  return (
    <div
      className="w-12 h-2"
      style={{
        backgroundColor: '#30009C',
        opacity,
      }}
      aria-label={`Legend value: ${value}`}
    />
  );
};

export default React.memo(Rectangle);
