import { useState } from 'react';
import useDeviceDetect from '../helpers/screens';
import Dropdown from '../components/common/Dropdown';
import { FilterIcon } from '../svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Indicate from '../components/common/cards/Indicate';

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
                  children={
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
                  }
                />
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
                320:{
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
                1300:{
                  slidesPerView:3.8
                },
                1400:{
                  slidesPerView:5
                }
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
            <h2 className="font-[500] mt-[16px] mb-[8px] text-[#121111]">Chart Analysis</h2>
            <div className="flex flex-col md:flex-row gap-[20px]">
              <div className="w-5/5 md:w-2/5 border rounded-3xl h-[420px] bg-white"></div>
              <div className="w-5/5 md:w-3/5 border rounded-3xl h-[420px] bg-white"></div>
            </div>
          </div>
          <div>
            <h2 className="font-[500] mt-[16px] mb-[8px] text-[#121111]">Top Sources</h2>
            <Swiper
              slidesPerView={5}
              spaceBetween={20}
              freeMode={true}
              breakpoints={{
                200: {
                  slidesPerView: 1, // When the window width is 600 or more
                },
                320:{
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
                1300:{
                  slidesPerView:3.8
                },
                1400:{
                  slidesPerView:5
                }
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
            <h2 className="font-[500] mt-[16px] mb-[8px] text-[#121111]">Youtube Data</h2>
            <div className="flex flex-col md:flex-row gap-[20px]">
              <div className="w-4/4 md:w-2/4 border rounded-3xl h-[420px] bg-white"></div>
              <div className="w-4/4 md:w-2/4 border rounded-3xl h-[420px] bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
