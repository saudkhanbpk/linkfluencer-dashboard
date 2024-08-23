import { useState } from 'react';
import LinkSquare from '../components/common/cards/LinkSquare';
import ApexChart from '../components/common/charts/AreaChatr';
import IndicateUp from '../components/common/cards/IndicateUp';
import IndicateDown from '../components/common/cards/indicateDown';
import CalumnChart from '../components/common/charts/columnChart';
import useDeviceDetect from '../helpers/screens';
import Dropdown from '../components/common/Dropdown';

const Dashboard2: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [minimize, setMinimize] = useState(false)
  const { isMobile } = useDeviceDetect();
  const tabs = [
    {
      label: 'Top Links',
    },
    {
      label: 'Newly Added',
    },
    {
      label: 'Old Links',
    },
    {
      label: 'Affiliated Links',
    },
  ];

  const Links = [
    {
      logo: '/assets/youtubeLogo.svg',
      link: 'https://linkfluencerstg.addwebprojects.com/nextdor',
      label: 'Youtube',
      tags: '#Educational #Sciences',
      totalClicks: 200,
      percent: 18,
      indicateUp: true,
    },
    {
      logo: '/assets/amazonLogo.svg',
      link: 'https://linkfluencerstg.addwebprojects.com/nextdor',
      label: 'Amazon',
      tags: '#Educational #Physic',
      totalClicks: 140,
      percent: 22,
      indicateUp: false,
    },
    {
      logo: '/assets/spotifyLogo.svg',
      link: 'https://linkfluencerstg.addwebprojects.com/nextdor',
      label: 'Spotify',
      tags: '#Educational #Music',
      totalClicks: 140,
      percent: 75,
      indicateUp: true,
    },
  ];

  const topSources = [
    {
      percent: 5,
      socialLogo: '/assets/amazonLogo.svg',
    },
    {
      percent: 5.7,
      socialLogo: '/assets/youtubeLogo.svg',
    },
    {
      percent: 3.2,
      socialLogo: '/assets/spotifyLogo.svg',
    },
    {
      percent: 7,
      socialLogo: '/assets/nLogo.svg',
    },
    {
      percent: 3,
      socialLogo: '/assets/VectorLogo.svg',
    },
    {
      percent: 2,
      socialLogo: '/assets/estyLogo.svg',
    },
  ];


  return (
    <div>
      <div className="p-[24px]">
        <div>
          <h4 className="text-gray-500 font-content">Rahul&rsquo;s</h4>
          <h1 className="text-2xl font-header">Dashboard</h1>
        </div>
        <div className="mt-[24px] flex md:flex-row flex-col items-center">
          <div className="flex items-center justify-between md:w-[340px] w-full h-[48px] rounded-full px-[16px] bg-white py-1">
            <input
              type="text"
              placeholder="Paste your link here"
              className="h-full rounded-none w-full outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>
          </div>
          <button className="w-full mt-[16px] md:mt-0 md:ml-2 ml-0 md:w-[189px] border-[1px] border-[#113E53] font-bold bg-[#113E53] rounded-full px-[20px] py-[12px] text-white font-header">
            Create Smart Link
          </button>
        </div>
      </div>
      <div className="bg-white p-[24px]">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-[600] font-content">My Links</h1>
          {!isMobile ? (
            <ul className="flex flex-row items-center gap-8 select-none">
              {tabs.map((val, index) => {
                return (
                  <li
                    key={index}
                    className={`border-b-[3px] text-[#252C32] text-[14px] ${
                      selectedTab == index
                        ? 'font-[600] border-[#252C32]'
                        : 'font-[400] border-transparent'
                    }  hover:border-black py-[8px] cursor-pointer duration-500 font-content`}
                    onClick={() => {
                      setSelectedTab(index);
                      console.log({ selectedTab, index });
                    }}
                  >
                    {val?.label}
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="flex items-center gap-2">
              <span
                className={`text-[#252C32] flex items-center text-[14px] py-[8px] cursor-pointer duration-500`}
              >
                <svg fill="currentColor" viewBox="0 0 16 16" className="size-8">
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <span className='font-[600] font-content'> {tabs[selectedTab].label}</span>
              </span>
              <Dropdown label={
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
                />
              </svg>
              }

              children={
                <ul className='bg-white w-auto shadow-md border-0.5 rounded-lg py-2'>
                  {tabs.map((val, index) => {
                return (
                  <li
                    key={index}
                    className={`text-[#252C32] text-[14px] px-3 py-2 border-b ${
                      selectedTab == index
                        ? 'font-[600]'
                        : 'font-[400]'
                    } py-[8px] cursor-pointer duration-500 font-content whitespace-nowrap hover:bg-gray-200`}
                    onClick={() => {
                      setSelectedTab(index);
                      console.log({ selectedTab, index });
                    }}
                  >
                    {val?.label}
                  </li>
                );
              })}
                </ul>
              }
              />
            </div>
          )}
        </div>
        <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Links.map((val, index) => {
            return (
              <div key={index} className="mt-8 lg:mt-0">
                <LinkSquare
                  link={val?.link}
                  totalClicks={val?.totalClicks}
                  tags={val.tags}
                  logo={val?.logo}
                  percent={val.percent}
                  indicateUp={val.indicateUp}
                  minimize={minimize}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-12">
          <h1 className="font-[600] font-content">Analytics</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="flex border h-[300px] flex-col relative items-center p-[20px] rounded-2xl w-full">
              <div className="relative flex w-full items-center h-full">
                <div className="h-full w-full flex flex-col justify-center">
                  <span className="text-[#4C4C4C] font-content whitespace-nowrap">
                    Youtube yearly earning
                  </span>
                  <h1 className="text-2xl font-content">$19,341.88</h1>
                  <div className="mt-4">
                    <IndicateUp percent={10} />
                  </div>
                </div>
                <div className="absolute -right-6 mt-12 m-[24px] w-[200px]">
                  <ApexChart indicateUp={true} />
                </div>
              </div>
              <div className="w-full border-[1.5px]"></div>
              <div className="relative flex w-full items-center h-full">
                <div className="h-full w-full flex flex-col justify-center">
                  <span className="text-[#4C4C4C] font-content whitespace-nowrap">
                    Youtube this Month earning
                  </span>
                  <h1 className="text-2xl font-content">$199</h1>
                  <div className="mt-4">
                    <IndicateDown percent={10} />
                  </div>
                </div>
                <div className="absolute -right-6 mt-12 m-[24px] w-[200px]">
                  <ApexChart indicateUp={false} />
                </div>
              </div>
            </div>
            <div className="border h-[300px] flex flex-col justify-between items-start px-[20px] py-[20px] rounded-2xl w-full">
              <span className="text-[#4C4C4C] font-content whitespace-nowrap">
                Top Sources
              </span>
              <div className="flex h-full gap-6">
                {topSources.map((val, index) => {
                  return (
                    <div key={index} className="relative h-full">
                      <CalumnChart
                        percent={val.percent}
                        logo={val.socialLogo}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="border h-[300px] flex flex-col justify-between items-start px-[20px] py-[20px] rounded-2xl w-full">
              <span className="text-[#4C4C4C] font-content whitespace-nowrap">
                Users traffic by region
              </span>
              <div className="flex h-full gap-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
