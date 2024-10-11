// src/components/Tooltip.js

import React from 'react';

const Tooltip = ({ children, text }) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {text}
      </div>
    </div>
  );
};


export const SidebarTooltip = ({ children, text }) => {
  return (
    <div className="group z-50 flex items-center">
      {children}
      <div style={{marginLeft:"50px"}} className="absolute z-50 bg-white shadow-lg border border-neutral-100 text-gray-800 text-sm rounded py-2 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
