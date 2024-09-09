import { useState } from 'react';
import useDeviceDetect from '../helpers/screens';
import Dropdown from '../components/common/Dropdown';
import { DropIcon, FilterIcon } from '../svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Indicate from '../components/common/cards/Indicate';
import ApexColumnChart from '../components/common/charts/columnChart/calumnChart';
import LineChart from '../components/common/charts/LineChart/AnalyticsChart';
import CircleChart from '../components/common/charts/CircleChart';

const Analytics: React.FC = () => {
  const [limit, setLimit] = useState('Day');
  const { isMobile } = useDeviceDetect();

  return (
    <div className="min-h-full bg-gray-50">
      <div className="flex flex-col p-[24px]">
        <div>
          <h1 className="text-2xl font-header text-[#121111]">Analytics</h1>
          <div>
            <div className="flex items-center justify-between mt-[16px] mb-[8px]">
              <label className="font-content font-[500] text-[#121111]">
                Today&apos;s Activity
              </label>
              {!isMobile ? (
                <ul className="flex gap-3 items-center">
                  <li
                    onClick={() => {
                      setLimit('Day');
                    }}
                    className={`${limit === 'Day' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100`}
                  >
                    Day
                  </li>
                  <li
                    onClick={() => {
                      setLimit('Week');
                    }}
                    className={`${limit === 'Week' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100`}
                  >
                    Week
                  </li>
                  <li
                    onClick={() => {
                      setLimit('Month');
                    }}
                    className={`${limit === 'Month' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100`}
                  >
                    Month
                  </li>
                  <li
                    onClick={() => {
                      setLimit('Year');
                    }}
                    className={`${limit === 'Year' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100`}
                  >
                    Year
                  </li>
                </ul>
              ) : (
                <Dropdown
                  label={
                    <div className="flex gap-2 items-center">
                      <span className="text-[#4D494F] font-header">
                        {limit}
                      </span>
                      <FilterIcon className={'size-4'} />
                    </div>
                  }
                  side="right"
                >
                  <ul className="bg-white shadow-md border py-2 rounded-2xl font-content">
                    <li
                      onClick={() => {
                        setLimit('All');
                      }}
                      className={`${limit === 'All' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100`}
                    >
                      All
                    </li>
                    <li
                      onClick={() => {
                        setLimit('Week');
                      }}
                      className={`${limit === 'Week' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100`}
                    >
                      Week
                    </li>
                    <li
                      onClick={() => {
                        setLimit('Month');
                      }}
                      className={`${limit === 'Month' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100`}
                    >
                      Month
                    </li>
                    <li
                      onClick={() => {
                        setLimit('Year');
                      }}
                      className={`${limit === 'Year' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100`}
                    >
                      Year
                    </li>
                  </ul>
                </Dropdown>
              )}
            </div>
            <Swiper
              slidesPerView={5}
              spaceBetween={20}
              freeMode={true}
              breakpoints={{
                200: {
                  slidesPerView: 1, // When the window width is 600 or more
                },
                320: {
                  slidesPerView: 1.2,
                },
                500: {
                  slidesPerView: 2.1, // When the window width is 960 or more
                },
                690: {
                  slidesPerView: 2.7, // When the window width is 1200 or more
                },
                1080: {
                  slidesPerView: 3.4, // When the window width is 1200 or more
                },
                1300: {
                  slidesPerView: 3.8,
                },
                1400: {
                  slidesPerView: 5,
                },
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="border p-[24px] rounded-3xl bg-white max-h-[100px] h-[80px] ">
                <span className="text-xs font-content text-[#9B919D]">
                  Total Clicked
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[#292828] text-[24px] font-[500]">
                    2032
                  </span>
                  <Indicate direction="up" percent={10} />
                </div>
              </SwiperSlide>
              <SwiperSlide className="border p-[24px] rounded-3xl bg-white max-h-[100px] h-[80px] ">
                <span className="text-xs font-content text-[#9B919D]">
                  Best Performing Platform
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <img
                    src="/assets/amazonLogo.svg"
                    alt="amazon logo"
                    className="h-[24px] w-[24px]"
                  />
                  <Indicate direction="up" percent={10} />
                </div>
              </SwiperSlide>
              <SwiperSlide className="border p-[24px] rounded-3xl bg-white max-h-[100px] h-[80px] ">
                <span className="text-xs font-content text-[#9B919D]">
                  Top Country
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[#292828] text-[24px] font-[500]">
                    2032
                  </span>{' '}
                  <img
                    src="/assets/usaflag.svg"
                    alt="amazon logo"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="border p-[24px] rounded-3xl bg-white max-h-[100px] h-[80px] ">
                <span className="text-xs font-content text-[#9B919D]">
                  Top City
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[#292828] text-[24px] font-[500]">
                    New York
                  </span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="border p-[24px] rounded-3xl bg-white max-h-[100px] h-[80px] ">
                <span className="text-xs font-content text-[#9B919D]">
                  Best Time To Engage
                </span>
                <div className=" gap-2">
                  <span className="text-[#292828] text-[24px] font-[500]">
                    3-6pm
                  </span>{' '}
                  <span className="text-xs font-content text-[#9B919D]">
                    GM
                  </span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <h2 className="font-[500] mt-[16px] mb-[8px] text-[#121111]">
              Chart Analysis
            </h2>
            <div className="flex flex-col md:flex-row gap-[20px]">
              <div className="w-5/5 md:w-3/6 border rounded-3xl h-[420px] bg-white flex flex-col justify-between relative overflow-hidden">
                <div className="flex flex-col lg:flex-row items-start lg:justify-between lg:items-center p-[18px]">
                  <div className=" w-full">
                    <span className="text-[#9B919D]">User Visit</span>
                    <div className="flex items-center">
                      <h2 className="text-2xl text-[#292828] mr-2 font-semibold">
                        20k
                      </h2>
                      <Indicate direction="up" percent={19} />
                    </div>
                  </div>
                  <div className=" w-full flex justify-end">
                    <ul className="flex gap-1 md:gap-2 lg:gap-3 items-center">
                      <li
                        onClick={() => {
                          setLimit('Day');
                        }}
                        className={`${limit === 'Day' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100 text-sm`}
                      >
                        Day
                      </li>
                      <li
                        onClick={() => {
                          setLimit('Week');
                        }}
                        className={`${limit === 'Week' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100 text-sm`}
                      >
                        Week
                      </li>
                      <li
                        onClick={() => {
                          setLimit('Month');
                        }}
                        className={`${limit === 'Month' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100 text-sm`}
                      >
                        Month
                      </li>
                      <li
                        onClick={() => {
                          setLimit('Year');
                        }}
                        className={`${limit === 'Year' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100 text-sm`}
                      >
                        Year
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="h-full mr-[18px]">
                  <ApexColumnChart />
                </div>
              </div>
              <div className="w-5/5 md:w-3/6 border rounded-3xl h-[420px] bg-white p-[24px]">
                <div className="">
                  <h2 className="text-[24px] text-gray-700">
                    Users Trafic By Region
                  </h2>
                </div>
                <div className="flex flex-col flex-wrap mt-6">
                  <CircleChart />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-[500] mt-[16px] mb-[8px] text-[#121111]">
              Top Sources
            </h2>
            <Swiper
              slidesPerView={5}
              spaceBetween={20}
              freeMode={true}
              breakpoints={{
                200: {
                  slidesPerView: 1, // When the window width is 600 or more
                },
                320: {
                  slidesPerView: 1.2,
                },
                500: {
                  slidesPerView: 2.1, // When the window width is 960 or more
                },
                690: {
                  slidesPerView: 2.7, // When the window width is 1200 or more
                },
                1080: {
                  slidesPerView: 3.4, // When the window width is 1200 or more
                },
                1300: {
                  slidesPerView: 3.8,
                },
                1400: {
                  slidesPerView: 5,
                },
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="border px-[16px] py-[24px] rounded-3xl bg-white">
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/instagram.svg"
                    alt="amazon logo"
                    className="h-[24px] w-[24px]"
                  />
                  <label>Instagram</label>
                  <Indicate direction="up" percent={54} />
                </div>
              </SwiperSlide>
              <SwiperSlide className="border px-[16px] py-[24px] rounded-3xl bg-white">
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/facebook.svg"
                    alt="amazon logo"
                    className="h-[24px] w-[24px]"
                  />
                  <label>Facebook</label>
                  <Indicate direction="up" percent={23} />
                </div>
              </SwiperSlide>
              <SwiperSlide className="border px-[16px] py-[24px] rounded-3xl bg-white">
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/X.svg"
                    alt="amazon logo"
                    className="h-[24px] w-[24px]"
                  />
                  <label>X</label>
                  <Indicate direction="down" percent={19} />
                </div>
              </SwiperSlide>
              <SwiperSlide className="border px-[16px] py-[24px] rounded-3xl bg-white">
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/ticktok.svg"
                    alt="amazon logo"
                    className="h-[24px] w-[24px]"
                  />
                  <label>TikTok</label>
                  <Indicate direction="down" percent={19} />
                </div>
              </SwiperSlide>
              <SwiperSlide className="border px-[16px] py-[24px] rounded-3xl bg-white">
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/youtube.svg"
                    alt="amazon logo"
                    className="h-[24px] w-[24px]"
                  />
                  <label>Youtube</label>
                  <Indicate direction="up" percent={47} />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <h2 className="font-[500] mt-[16px] mb-[8px] text-[#121111]">
              Youtube Data
            </h2>
            <div className="flex flex-col md:flex-row gap-[20px]">
              <div className="w-4/4 md:w-2/4 rounded-3xl h-[420px] border bg-white flex flex-col justify-between">
                <div className="flex flex-col lg:flex-row items-start lg:justify-between lg:items-center p-[18px]">
                  <div className="w-full">
                    <div>
                      <Dropdown
                        label={
                          <div className="flex flex-row items-center">
                            <span className="text-[#9B919D] text-xs">
                              Revenue
                            </span>
                            <DropIcon
                              className={'size-3 ml-2'}
                              onClick={() => {}}
                            />
                          </div>
                        }
                        children={<></>}
                      />
                    </div>
                    <div className="flex items-center">
                      <h2 className="text-2xl text-[#292828] mr-2 font-semibold">
                        20k
                      </h2>
                      <Indicate direction="up" percent={19} />
                    </div>
                  </div>
                  <div className="w-full flex justify-end">
                    <ul className="flex gap-1 md:gap-2 lg:gap-3 items-center">
                      <li
                        onClick={() => {
                          setLimit('Day');
                        }}
                        className={`${limit === 'Day' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100 text-sm`}
                      >
                        Day
                      </li>
                      <li
                        onClick={() => {
                          setLimit('Week');
                        }}
                        className={`${limit === 'Week' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100 text-sm`}
                      >
                        Week
                      </li>
                      <li
                        onClick={() => {
                          setLimit('Month');
                        }}
                        className={`${limit === 'Month' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100 text-sm`}
                      >
                        Month
                      </li>
                      <li
                        onClick={() => {
                          setLimit('Year');
                        }}
                        className={`${limit === 'Year' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100 text-sm`}
                      >
                        Year
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full h-full px-4 overflow-hidden">
                  <LineChart indicateUp={true} />
                </div>
              </div>
              <div className="w-4/4 md:w-2/4 rounded-3xl h-[420px] border bg-white flex flex-col justify-between">
                {/* <div className="flex justify-between items-center px-[30px] py-2 absolute w-full">
                  <div>
                    <Dropdown
                      label={
                        <div className="flex flex-row items-center">
                          <span className="text-[#9B919D] text-xs">
                            Revenue
                          </span>
                          <DropIcon
                            className={'size-3 ml-2'}
                            onClick={() => {}}
                          />
                        </div>
                      }
                      children={<></>}
                    />
                    <div className="flex items-center">
                      <h2 className="text-2xl text-[#292828] mr-2 font-semibold">
                        1.1m
                      </h2>
                      <Indicate direction="up" percent={19} />
                    </div>
                  </div>
                  <div className="">
                    <ul className="flex md:gap-3 items-center text-xs overflow-hidden">
                      <li
                        onClick={() => {
                          setLimit('Day');
                        }}
                        className={`${limit === 'Day' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100 text-sm`}
                      >
                        Day
                      </li>
                      <li
                        onClick={() => {
                          setLimit('Week');
                        }}
                        className={`${limit === 'Week' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100 text-sm`}
                      >
                        Week
                      </li>
                      <li
                        onClick={() => {
                          setLimit('Month');
                        }}
                        className={`${limit === 'Month' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100 text-sm`}
                      >
                        Month
                      </li>
                      <li
                        onClick={() => {
                          setLimit('Year');
                        }}
                        className={`${limit === 'Year' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100 text-sm`}
                      >
                        Year
                      </li>
                    </ul>
                  </div>
                </div> */}
                <div className="flex flex-col lg:flex-row items-start lg:justify-between lg:items-center p-[18px]">
                  <div className=" w-full">
                    <div>
                      <Dropdown
                        label={
                          <div className="flex flex-row items-center">
                            <span className="text-[#9B919D] text-xs">
                              Revenue
                            </span>
                            <DropIcon
                              className={'size-3 ml-2'}
                              onClick={() => {}}
                            />
                          </div>
                        }
                        children={<></>}
                      />
                    </div>
                    <div className="flex items-center">
                      <h2 className="text-2xl text-[#292828] mr-2 font-semibold">
                        1.1m
                      </h2>
                      <Indicate direction="up" percent={19} />
                    </div>
                  </div>
                  <div className="w-full flex justify-end">
                    <ul className="flex gap-1 md:gap-2 lg:gap-3 items-center">
                      <li
                        onClick={() => {
                          setLimit('Day');
                        }}
                        className={`${limit === 'Day' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100 text-sm`}
                      >
                        Day
                      </li>
                      <li
                        onClick={() => {
                          setLimit('Week');
                        }}
                        className={`${limit === 'Week' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100 text-sm`}
                      >
                        Week
                      </li>
                      <li
                        onClick={() => {
                          setLimit('Month');
                        }}
                        className={`${limit === 'Month' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100 text-sm`}
                      >
                        Month
                      </li>
                      <li
                        onClick={() => {
                          setLimit('Year');
                        }}
                        className={`${limit === 'Year' ? 'text-blue-500' : 'text-[#9B919D]'} cursor-pointer duration-150 px-2 py-1 hover:bg-gray-100 text-sm`}
                      >
                        Year
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full h-full px-4 overflow-hidden">
                  <LineChart indicateUp={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
