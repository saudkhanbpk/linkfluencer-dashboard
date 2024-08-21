<<<<<<< HEAD
import { useState } from "react";
import LinkSquar from "../components/common/cards/LinkSquar";
import ApexChart from "../components/common/charts/AreaChatr";
import IndicateUp from "../components/common/cards/IndicateUp";
import IndicateDown from "../components/common/cards/indicateDown";

interface Props {}

const Dashboard2: React.FC<Props> = () => {
=======
import { useState } from 'react';
import LinkSquare from '../components/common/cards/LinkSquare';

const Dashboard2 = () => {
>>>>>>> 218aa8ce88990bcb2cc297c79fb6a3d12ead02ba
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
<<<<<<< HEAD
      logo: "/assets/youtubeLogo.svg",
      link: "https://linkfluencerstg.addwebprojects.com/nextdor",
      label: "Youtube",
      tags: "#Educational #Sciences",
=======
      logo: '/assets/youtubeLogo.svg',
      link: 'https://linkfluencerstg.addwebprojects.com/nextdor',
      label: 'Youtube',
      tags: '#Educational Physic',
>>>>>>> 218aa8ce88990bcb2cc297c79fb6a3d12ead02ba
      totalClicks: 200,
      percent: 18,
      indicateUp: true,
    },
    {
<<<<<<< HEAD
      logo: "/assets/amazonLogo.svg",
      link: "https://linkfluencerstg.addwebprojects.com/nextdor",
      label: "Amazon",
      tags: "#Educational #Physic",
=======
      logo: '/assets/amazonLogo.svg',
      link: 'https://linkfluencerstg.addwebprojects.com/nextdor',
      label: 'Amazon',
      tags: '#Educational Physic',
>>>>>>> 218aa8ce88990bcb2cc297c79fb6a3d12ead02ba
      totalClicks: 140,
      percent: 22,
      indicateUp: false,
    },
<<<<<<< HEAD
    {
      logo: "/assets/spotifyLogo.svg",
      link: "https://linkfluencerstg.addwebprojects.com/nextdor",
      label: "Spotify",
      tags: "#Educational #Music",
      totalClicks: 140,
      percent: 75,
      indicateUp: true,
    },
=======
>>>>>>> 218aa8ce88990bcb2cc297c79fb6a3d12ead02ba
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
<<<<<<< HEAD
                  className={`border-b-[3px] text-[#252C32] text-[14px] ${
                    selectedTab == index
                      ? "font-[600] border-[#252C32]"
                      : "font-[400] border-transparent"
                  }  hover:border-black py-[8px] cursor-pointer duration-500`}
                  onClick={() => {
                    setSelectedTab(index);
                    console.log({ selectedTab, index });
=======
                  className={`border-b-[3px] text-[#252C32] text-[14px] ${selectedTab === index ? 'font-[600] border-[#252C32]' : 'font-[400]'} border-transparent hover:border-black py-[8px] cursor-pointer duration-500`}
                  onClick={() => {
                    setSelectedTab(index);
>>>>>>> 218aa8ce88990bcb2cc297c79fb6a3d12ead02ba
                  }}
                >
                  {val?.label}
                </li>
              );
            })}
          </ul>
        </div>
<<<<<<< HEAD
        <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Links.map((val, index) => {
            return (
              <div className="mt-8 lg:mt-0">
                <LinkSquar
                  link={val?.link}
                  totalClicks={val?.totalClicks}
                  tags={val.tags}
                  logo={val?.logo}
                  percent={val.percent}
                  indicateUp={val.indicateUp}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-12">
          <h1>Analytics</h1>
          <div className="grid md:grid-cols-3 h-[300px]">
            <div className="flex border flex-col relative items-center p-[20px] rounded-2xl w-full">
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
                <ApexChart indicateUp={true}/>
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
                <ApexChart  indicateUp={false}/>
              </div>
            </div>
            </div>
          </div>
=======
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
>>>>>>> 218aa8ce88990bcb2cc297c79fb6a3d12ead02ba
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
