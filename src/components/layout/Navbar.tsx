import { useState } from 'react';
import Avatar from '../common/Avatar';
import { Link, NavLink } from 'react-router-dom';
import useDeviceDetect from '../../helpers/screens';
import Dropdown from '../common/Dropdown';
import ProgressBar from '../common/ProgressBar';
import { sidebarData, COUNTRIES } from '../../config/sidebarData';
import { LogoutIcon, SinglePersonIcon } from '../../svg';

const Navbar = () => {
  const { isMobile } = useDeviceDetect();
  const [expand, setExpand] = useState<boolean>(false);
  return (
    <nav className="w-full flex flex-row justify-between items-center z-50 border-b">
      {!isMobile && (
        <div className="w-1/5 px-[24px] py-[16px]">
          <div className="w-full h-[64px] flex items-center">
           <Link to={"/test-dashboard"}>
           <img
              src="/assets/Logo.svg"
              className="min-w-[150px] w-[190px] min-h-[40px] h-[28px] object-contain"
              alt="logo"
            />
           </Link>
          </div>
        </div>
      )}
      {!isMobile && (
        <div className="w-4/5 flex justify-between px-[24px]">
          <div className="flex flex-col lg:flex-row items-center w-[375px] lg:h-[44px] lg:my-[26px]">
            <h1 className="font-header text-[18px] lg:text-[20px] font-bold mr-[16px] text-[#113E53]">
              23 Clicks left
            </h1>
            <div className="w-[138px] h-[44px] rounded-full bg-primary flex justify-center items-center">
              <span>Boost Now</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center w-[340px] h-[48px] rounded-full border px-[16px] pl-[14px] mr-[20px]">
              <img
                src="/assets/searchIcon.svg"
                className="h-[20px] w-[20px] mr-2"
                alt="search-icon"
              />
              <input
                type="text"
                placeholder="Search"
                className="h-full rounded-none outline-none"
              />
            </div>

            <div className="flex items-center gap-3">
              <Link to="/wallet">
              <img
                src="/assets/walletIcon.svg"
                alt="wallet-icon"
                className="h-[32px] w-[32px] object-contain p-1 cursor-pointer"
              />
              </Link>
              <Dropdown label={<Avatar image="/assets/User 05a.png" />}side='right'>
                <div>
                  <ul className="w-[150px] flex justify-center flex-col items-center bg-white border shadow-lg rounded-lg py-2">
                    <li className="hover:bg-gray-100 w-full">
                      <Link to={'/profile'} className="flex items-center p-2">
                        <SinglePersonIcon
                          className={'size-5 mr-2'}
                          onClick={() => {}}
                        />
                        <span>Profile</span>
                      </Link>
                    </li>
                    <li className="hover:bg-gray-100 w-full p-2 flex items-cente">
                      <LogoutIcon
                        className={'size-5 mr-2'}
                        onClick={() => {}}
                      />
                      <span>Logout</span>
                    </li>
                  </ul>
                </div>
              </Dropdown>
              <Dropdown
              side='right'
                label={
                  <div className="flex items-center gap-2 ml-1 select-none cursor-pointer">
                    <span>EN</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                }
              >
                <div>
                  <ul className="w-[50px] flex justify-center flex-col items-center bg-white border shadow-lg rounded-full py-4">
                    {COUNTRIES.map((val, index) => (
                      <li
                        key={index}
                        className="hover:bg-gray-100 w-full p-1 text-center"
                      >
                        {val.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="w-full px-[12px] sm:px-[20px] rounded-b-md">
          <div
            className={`w-full ${
              expand ? 'h-[680px]' : 'h-[60px]'
            } transition-all ease-in-out duration-500 relative overflow-hidden bg-white`}
          >
            <div className="flex justify-between items-center h-[68px] w-full">
              <div className="flex items-center">
                <img
                  src="/assets/Logo.svg"
                  className="min-w-[150px] w-[150px] min-h-[40px] h-[40px] object-contain select-none"
                  alt="logo"
                />
              </div>
              {!expand ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  onClick={() => setExpand(!expand)}
                  className="size-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  onClick={() => setExpand(!expand)}
                  className="size-6 cursor-pointer rounded-md"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>
            <div className="">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/walletIcon.svg"
                  alt="wallet-icon"
                  className="h-[32px] w-[32px] object-contain p-1 cursor-pointer"
                />
                <div className="flex flex-grow">
                  <Dropdown label={<Avatar image="/assets/User 05a.png" />} side='left'>
                    <div>
                      <ul className="w-[150px] flex justify-center flex-col items-center bg-white border shadow-lg rounded-lg py-2">
                      <li className="hover:bg-gray-100 w-full">
                      <Link to={"/profile"} className='flex items-center p-2'>
                      <SinglePersonIcon className={'size-5 mr-2'} onClick={()=>{}}/>
                      <span>Profile</span>
                      </Link>
                    </li>
                    <li className="hover:bg-gray-100 w-full p-2 flex items-cente">
                      <LogoutIcon className={'size-5 mr-2'} onClick={()=>{}}/>
                      <span>Logout</span>
                      </li>
                      </ul>
                    </div>
                  </Dropdown>
                </div>
                <Dropdown
                  label={
                    <div className="flex items-center gap-2 ml-1 select-none cursor-pointer">
                      <span>EN</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  }
                >
                  <div>
                    <ul className="w-[50px] flex justify-center flex-col items-center bg-white border shadow-lg rounded-full py-4">
                      {COUNTRIES.map((val, index) => (
                        <li
                          key={index}
                          className="hover:bg-gray-100 w-full p-1 text-center"
                        >
                          {val.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Dropdown>
              </div>
            </div>
            <ul className="mt-4">
              {sidebarData.map((val, index) => (
                <li key={index}>
                  {val.route ? (
                    <NavLink
                      to={val.route}
                      onClick={() => setExpand(false)}
                      className={({ isActive }) =>
                        `flex items-center cursor-pointer py-[12px] rounded-full font-content ${
                          isActive
                            ? 'bg-gray-100 text-black'
                            : 'bg-transparent text-[#4D494F]'
                        }`
                      }
                    >
                      <img
                        src={val?.icon}
                        alt={val?.label}
                        className="ml-[10px] mr-[12px]"
                      />
                      <span>{val?.label}</span>
                    </NavLink>
                  ) : (
                    <div className="flex items-center cursor-pointer py-[12px] rounded-full font-content bg-transparent text-[#afafaf]">
                      <img
                        src={val?.icon}
                        alt={val?.label}
                        className="ml-[10px] mr-[12px]"
                      />
                      <div className="lg:flex">
                        <span className="mr-2">{val?.label}</span>
                        <span className="text-primary font-bold">SOON!</span>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="bg-[#F0F5FF] p-[24px] rounded-lg mt-4">
              <h1 className="font-header text-[24px] font-[700]">Hey Rahul</h1>
              <span className="text-[14px] mt-[10px] leading-none font-content">
                Your Profile is left Incomplete
              </span>
              <div className="my-[24px]">
                <ProgressBar completed={74} />
              </div>
              <button className="w-full border-[1px] border-[#113E53] font-bold bg-white rounded-full px-[20px] py-[12px] text-[#113E53] font-header">
                Complete Profile
              </button>
            </div>
            <div className="text-center mt-[24px]">
              <span className="text-[12px] text-gray-600 font-content">
                ©️ 2024 Linkfluencer
              </span>
            </div>
          </div>
          <div
            className={`${expand ? 'hidden' : 'block'} transition-all ease-in-out`}
          >
            <div className="flex flex-row items-center justify-between mb-4">
              <h1 className="font-header text-[14px] font-bold mr-[16px] text-[#113E53]">
                23 Clicks left
              </h1>
              <div className="w-[138px] h-[40px] rounded-full bg-primary flex justify-center items-center">
                <span>Boost Now</span>
              </div>
            </div>
            <div className="flex items-center w-full h-[48px] rounded-full border border-[#B3B3B2] px-[16px] pl-[14px] mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-gray-400 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="h-full rounded-none outline-none"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
