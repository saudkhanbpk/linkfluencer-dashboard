import React, { useEffect } from "react";
import Avatar from "../common/Avatar";
import useDeviceDetect from "../../helpers/screens";
import Dropdown from "../common/Dropdown";
interface Props {

}

const Navbar: React.FC<Props> = () => {

  const screenSize = useDeviceDetect()

  useEffect(() => {
    console.log(screenSize);
  })
  return <nav className="w-full h-[68px] md:h-[96px] flex flex-row justify-between items-center">
    <div className="w-1/5 px-[24px] py-[16px]">
      <div className="w-full h-[64px] flex items-center">
        <img src="/assets/Logo.png" className="" alt="log" />
      </div>
    </div>
    {!screenSize.isMobile && <div className="w-4/5 flex justify-between px-[24px]">
      <div className="flex flex-col lg:flex-row items-center w-[375px] lg:h-[44px] lg:my-[26px]">
        <h1 className=" font-header text-[18px] lg:text-[24px] font-bold mr-[16px] text-[#113E53]">23 Clicks left</h1>
        <div className="w-[138px] h-[44px] rounded-full bg-primary flex justify-center items-center"><span>Boost Now</span></div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center w-[340px] h-[48px] rounded-full border px-[16px] pl-[14px] mr-[20px]">
          <img src="/assets/searchIcon.png" className="h-[20px] w-[20px] mr-2" alt="search-icon" />
          <input type="text" placeholder="Search" className="h-full rounded-none outline-none" />
        </div>

        <div className="flex items-center gap-3">
          {/* <img src="/assets/fi_bell.png" alt="bell-icon" className="h-[32px] w-[32px] object-fill p-1 cursor-pointer" />
          <img src="/assets/fi_help-circle.png" alt="help-icon" className="h-[32px] w-[32px] object-fill p-1 cursor-pointer" />
          <img src="/assets/fi_settings.png" alt="bell-icon" className="h-[32px] w-[32px] object-fill p-1 cursor-pointer" /> */}
          <img src="/assets/ion_wallet-outline.png" alt="wallet-icon" className="h-[32px] w-[32px] object-fill p-1 cursor-pointer" />
          <Dropdown label={<Avatar image="/assets/User 05a.png" />} children={<div>
              <ul className="w-[80px]">
                <li className="hover:bg-gray-100 p-2">Profile</li>
                <li className="hover:bg-gray-100 p-2">Logout</li>
              </ul>
            </div>}
            dropIcon={false}
            />
          <Dropdown label={<div className="flex items-center gap-2 ml-1 select-none cursor-pointer">
            <span>EN</span>
            <svg xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor"
              className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>}
            children={<div>
              <ul className="w-[70px]">
                <li className="hover:bg-gray-100 p-2">EN</li>
                <li className="hover:bg-gray-100 p-2">SP</li>
                <li className="hover:bg-gray-100 p-2">CN</li>
                <li className="hover:bg-gray-100 p-2">FR</li>
              </ul>
            </div>}
            dropIcon={false}
          />
        </div>
      </div>
    </div>}
    {screenSize.isMobile && <div className="px-[24px]">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </div>}
  </nav>
}

export default Navbar;