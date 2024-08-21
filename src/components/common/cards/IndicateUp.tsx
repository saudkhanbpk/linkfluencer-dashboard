<<<<<<< HEAD
interface Props {}
interface Props {
    percent: number
}
const IndicateUp: React.FC<Props> = ({percent}) => {
  return (
    <span className="flex items-center justify-center bg-[#E6F8F0] rounded-full px-2 py-1 h-[24px] w-[65px]">
      <span className="text-[12px] text-[#00AE3E] font-[600]">{percent}%</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-3 text-[#00AE3E]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
        />
      </svg>
    </span>
  );
=======
import React from 'react';
import Indicate from './Indicate';

const IndicateUp: React.FC<{ percent: number }> = ({ percent }) => {
  return <Indicate percent={percent} color="#00AE3E" direction="up" />;
>>>>>>> 218aa8ce88990bcb2cc297c79fb6a3d12ead02ba
};

export default IndicateUp;
