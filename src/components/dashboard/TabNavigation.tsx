import React from 'react';
import { DotIcon, FilterIcon } from '../../svg';
import Dropdown from '../common/Dropdown';
import useDeviceDetect from '../../helpers/screens';

interface Tab {
  label: string;
}

interface TabNavigationProps {
  tabs: Tab[];
  selectedTab: number;
  setSelectedTab: (index: number) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  selectedTab,
  setSelectedTab,
}) => {
  const { isMobile } = useDeviceDetect();

  return !isMobile ? (
    <ul className="flex flex-row items-center gap-8 select-none">
      {tabs.map((tab, index) => (
        <li
          key={index}
          className={`border-b-[3px] text-[#252C32] text-[14px] ${
            selectedTab === index
              ? 'font-[600] border-[#252C32]'
              : 'font-[400] border-transparent'
          } hover:border-black py-[8px] cursor-pointer duration-500 font-content`}
          onClick={() => setSelectedTab(index)}
        >
          {tab.label}
        </li>
      ))}
    </ul>
  ) : (
    <div className="flex items-center gap-2">
      <span className="text-[#252C32] flex items-center text-[14px] py-[8px] cursor-pointer duration-500">
        <DotIcon className="size-8" />
        <span className="font-[600] font-content">
          {tabs[selectedTab].label}
        </span>
      </span>
      <Dropdown
        label={<FilterIcon className="size-6" />}
        side="right"
        children={
          <ul className="bg-white w-auto shadow-md border-0.5 rounded-lg py-2 border">
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={`text-[#252C32] text-[14px] px-3 py-2 border-b ${
                  selectedTab === index ? 'font-[600]' : 'font-[400]'
                } py-[8px] cursor-pointer duration-500 font-content whitespace-nowrap hover:bg-gray-200`}
                onClick={() => setSelectedTab(index)}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        }
      />
    </div>
  );
};

export default TabNavigation;
