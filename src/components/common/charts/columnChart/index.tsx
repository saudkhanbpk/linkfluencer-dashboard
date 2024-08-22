import React from 'react';
import './columnChart.css';

const Index: React.FC<{ percent: number, logo:string }> = ({ percent, logo }) => {
  const heightPercentage = `${percent * 10}%`;
  return (
    <div className="h-full flex flex-col justify-end items-center">
      <span className=' text-gray-500 text-sm font-[400] font-content'>{percent}%</span>
      <div
        className="w-[20px] rounded-2xl bg-[#E3CCF4]"
        style={{ height: heightPercentage }}
      >
      </div>
      <img src={logo} alt='social logo' className='mt-2 h-[20px] w-[20px]'/>
    </div>
  );
};
export default Index;