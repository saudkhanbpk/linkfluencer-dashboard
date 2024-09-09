import React from 'react';

const BlankDashboard: React.FC = () => {
  return (
    <div className="relative bg-primary my-[20px] rounded-lg flex flex-col-reverse lg:flex-row gap-[13px]">
      <img
        src="/assets/dashboard/socialLabels.svg"
        className="absolute bottom-0 hidden lg:block right-0 h-[120px] md:w-[400px] md:h-[150px] lg:w-[490px] lg:h-[190px]"
        alt="social-labels"
      />
      <div className="w-5/5 lg:w-1/5 p-[20px]">
        <img
          src="/assets/dashboard/first.svg"
          alt="dashboard-girl"
          className="w-full object-cover h-[170px] rounded-lg"
        />
        <div className="bg-white rounded-full flex items-center py-[8px] px-[10px] my-[14px]">
          <img
            src="/assets/instagram.svg"
            alt="instagram-logo"
            className="mr-[6px]"
          />
        </div>
      </div>
    </div>
  );
};

export default BlankDashboard;
