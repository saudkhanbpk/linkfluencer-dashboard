import { useState } from 'react';
import LinkSquare from '../components/common/cards/LinkSquare';
import ApexChart from '../components/common/charts/LineChart/DashboardChart';
import IndicateUp from '../components/common/cards/IndicateUp';
import IndicateDown from '../components/common/cards/indicateDown';
import useDeviceDetect from '../helpers/screens';
import Dropdown from '../components/common/Dropdown';
import { DotIcon, FilterIcon, Link45Icon } from '../svg';
import Model from '../components/common/models/Model';
import LinkEditCard from '../components/common/cards/LinkEdit';
import LinkDetailsCard from '../components/common/cards/LinkDetails';
import DashboardColumnChart from '../components/common/charts/columnChart/DashboardChart';
import DashboardCircleChart from '../components/common/charts/CircleChart/DashboardCircleChart';

const Dashboard2: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [minimize] = useState(false);
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
      id:1,
      logo: '/assets/youtubeLogo.svg',
      link: 'https://linkfluencerstg.addwebprojects.com/nextdor',
      label: 'Youtube',
      tags: '#Educational #Sciences',
      totalClicks: 200,
      percent: 18,
      indicateUp: true,
    },
    {
      id:2,
      logo: '/assets/amazonLogo.svg',
      link: 'https://linkfluencerstg.addwebprojects.com/nextdor',
      label: 'Amazon',
      tags: '#Educational #Physic',
      totalClicks: 140,
      percent: 22,
      indicateUp: false,
    },
    {
      id:3,
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

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [edit, setEdit] = useState<any>({
    logo: '',
    channel: '',
    link: '',
    tags: [],
  });
  const [details, setDetails] = useState<any>({
    logo: '',
    channel: '',
    link: '',
    tags: [],
  });
  const editModalOpen = (value: any) => {
    setIsEditModalOpen(true);
    const data = Links.find((val, index) => {
      return val.id === value;
    });
    setEdit({
      logo: data?.logo ?? '',
      channel: data?.label ?? '',
      link: data?.link ?? '',
      tags: data?.tags ?? [],
    });
  };
  const detailsModelOpen = (value: any) => {
    const data = Links.find((val, index) => {
      return val.id === value;
    });
    setDetails({
      logo: data?.logo ?? '',
      channel: data?.label ?? '',
      link: data?.link ?? '',
      tags: data?.tags ?? [],
    });
    setIsDetailsModalOpen(true);
  };
  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  const handleDetailsModalClose = () => {
    setIsDetailsModalOpen(false);
  };
  return (
    <div>
      <Model isOpen={isEditModalOpen} onClose={handleEditModalClose}>
        <LinkEditCard data={edit} handleModalClose={handleEditModalClose} />
      </Model>
      <Model isOpen={isDetailsModalOpen} onClose={handleDetailsModalClose}>
        <LinkDetailsCard
          data={details}
          handleDetailsModalClose={handleDetailsModalClose}
        />
      </Model>
      <div className="p-[12px] sm:p-[24px]">
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
            <Link45Icon className={'size-5 text-gray-400'} />
          </div>
          <button className="w-full mt-[16px] md:mt-0 md:ml-2 ml-0 md:w-[189px] border-[1px] border-[#113E53] font-bold bg-[#113E53] rounded-full px-[20px] py-[12px] text-white font-header">
            Create Smart Link
          </button>
        </div>
      </div>
      <div className="bg-white p-[12px] sm:p-[24px]">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-[600] font-content">My Links</h1>
          {!isMobile ? (
            <ul className="flex flex-row items-center gap-8 select-none">
              {tabs.map((val, index) => {
                return (
                  <li
                    key={index}
                    className={`border-b-[3px] text-[#252C32] text-[14px] ${
                      selectedTab === index
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
                <DotIcon className="size-8" />
                <span className="font-[600] font-content">
                  {' '}
                  {tabs[selectedTab].label}
                </span>
              </span>
              <Dropdown
                label={<FilterIcon className="size-6" />}
                side="right"
                children={
                  <ul className="bg-white w-auto shadow-md border-0.5 rounded-lg py-2 border">
                    {tabs.map((val, index) => {
                      return (
                        <li
                          key={index}
                          className={`text-[#252C32] text-[14px] px-3 py-2 border-b ${
                            selectedTab === index ? 'font-[600]' : 'font-[400]'
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
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Links.map((val, index) => {
            return (
              <div key={index} className="mt-4 lg:mt-0">
                <LinkSquare
                  link={val?.link}
                  totalClicks={val?.totalClicks}
                  tags={val.tags}
                  logo={val?.logo}
                  percent={val.percent}
                  indicateUp={val.indicateUp}
                  minimize={minimize}
                  // isDelete={isDelete}
                  id={val.id}
                  editModalOpen={editModalOpen}
                  detailsModelOpen={detailsModelOpen}

                />
              </div>
            );
          })}
        </div>
        <div className="mt-12">
          <h1 className="font-[600] font-content">Analytics</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
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
            <div className="border h-[300px] flex flex-col justify-between items-start rounded-2xl w-full overflow-hidden">
              <span className="text-[#4C4C4C] font-content whitespace-nowrap p-[18px]">
                Top Sources
              </span>
              <div className="flex justify-between w-full h-full pr-2">
                <DashboardColumnChart/>
              </div>
            </div>
            <div className="border h-[300px] p-[24px] rounded-2xl relative">
              <span className="text-[#4C4C4C] font-content whitespace-nowrap">
                Users traffic by region
              </span>
              <div className="h-full mt-4">
                <DashboardCircleChart/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
