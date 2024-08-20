import { useState } from 'react';
import LinkSquare from '../components/common/cards/LinkSquare';

const Dashboard2 = () => {
  const [selectedTab, setSelectedTab] = useState(0);
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
      tags: '#Educational Physic',
      totalClicks: 200,
      percent: 18,
      indicateUp: true,
    },
    {
      logo: '/assets/amazonLogo.svg',
      link: 'https://linkfluencerstg.addwebprojects.com/nextdor',
      label: 'Amazon',
      tags: '#Educational Physic',
      totalClicks: 140,
      percent: 22,
      indicateUp: false,
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
        <div className="flex flex-row justify-between">
          <h1 className="font-[600] font-content">My Links</h1>
          <ul className="flex flex-row items-center gap-8 select-none">
            {tabs.map((val, index) => {
              return (
                <li
                  key={index}
                  className={`border-b-[3px] text-[#252C32] text-[14px] ${selectedTab === index ? 'font-[600] border-[#252C32]' : 'font-[400]'} border-transparent hover:border-black py-[8px] cursor-pointer duration-500`}
                  onClick={() => {
                    setSelectedTab(index);
                  }}
                >
                  {val?.label}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="my-4 flex gap-4">
          {Links.map((val, index) => {
            return (
              <LinkSquare
                link={val?.link}
                totalClicks={val?.totalClicks}
                tags={val.tags}
                logo={val?.logo}
                percent={val.percent}
                indicateUp={val.indicateUp}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
