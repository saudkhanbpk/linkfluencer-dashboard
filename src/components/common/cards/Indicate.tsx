import React from 'react';

interface IndicateProps {
  percent: number;
  color: string;
  direction: 'up' | 'down';
}

const Indicate: React.FC<IndicateProps> = ({ percent, color, direction }) => {
  const arrowPath =
    direction === 'up'
      ? 'M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18'
      : 'M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3';

  return (
    <div
      className={`flex items-center bg-[${color}20] rounded-full px-2 py-1 h-[24px]`}
    >
      <span className={`text-[12px] text-[${color}] font-[600]`}>
        {percent}%
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`size-3 text-[${color}]`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={arrowPath} />
      </svg>
    </div>
  );
};

export default Indicate;
