// import React from 'react';
// import Indicate from './Indicate';

// const IndicateDown: React.FC<{ percent: number }> = ({ percent }) => {
//   return <Indicate percent={percent} color="#AE0000" direction="down" />;
// };

// export default IndicateDown;

interface Props {
  percent: number
}
const IndicateDown: React.FC<Props> = ({percent}) => {
return (
  <span className="flex items-center justify-center bg-[#F8E6E6] rounded-full px-2 py-1 h-[24px] w-[65px]">
    <span className="text-[12px] text-[#AE0000] font-[600]">{percent}%</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-3 text-[#AE0000]"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d='M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3'
      />
    </svg>
  </span>
);
};

export default IndicateDown;
