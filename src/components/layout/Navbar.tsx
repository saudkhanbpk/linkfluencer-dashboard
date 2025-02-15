import { useContext, useEffect, useState, useCallback } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Avatar from '../common/Avatar';
import Dropdown from '../common/Dropdown';
import ProgressBar from '../common/ProgressBar';
import { sidebarData, COUNTRIES } from '../../config/sidebarData';
import { LogoutIcon, SinglePersonIcon } from '../../svg';
import { ClickLeft, ProfileCompletion } from '../../services/userService';
import { UserContext } from '../../context/UserContext';
import useDeviceDetect from '../../helpers/screens';
import { handleLogout } from '../../config/axiosConfig';

const Navbar = () => {
  const navigate = useNavigate();
  const { isMobile } = useDeviceDetect();
  const [expand, setExpand] = useState<boolean>(false);
  const [clicksLeft, setClicksLeft] = useState<number | null>(null);
  const userContext = useContext(UserContext);
  const [completion, setCompletion] = useState(0);
  const [search, _setSearch] = useState('');

  if (!userContext) {
    throw new Error('useContext must be used within a UserProvider');
  }

  const { user } = userContext;

  useEffect(() => {
    const fetchClicksLeft = async () => {
      if (user) {
        const data = await ClickLeft(user._id);

        data && setClicksLeft(data.clicksLeft);
      }
    };
    const fetchProfileCompletion = async () => {
      if (!user) return;
      const data = await ProfileCompletion(user._id);

      setCompletion(data);
    };
    fetchProfileCompletion();
    fetchClicksLeft();
  }, [user]);

  const toggleExpand = useCallback(() => {
    setExpand((prevExpand) => !prevExpand);
  }, []);

  const handleBoostClick = () => {
    navigate('/plans');
  };

  const handleCompleteProfileClick = () => {
    navigate('/profile');
  };

  const logout = () => {
    handleLogout();
  };

  const renderClicksLeft = () => (
    <div className="flex flex-col lg:flex-row items-center w-[375px] lg:h-[44px] lg:my-[26px]">
      <h1 className="font-header text-[18px] lg:text-[20px] font-bold mr-[16px] text-[#113E53]">
        {clicksLeft !== null ? `${clicksLeft} Clicks left` : 'Loading...'}
      </h1>
      <div
        className="w-[138px] h-[44px] rounded-full bg-primary flex justify-center items-center cursor-pointer"
        onClick={handleBoostClick}
      >
        <span>Boost Now</span>
      </div>
    </div>
  );

  const renderProfileDropdown = () => (
    <Dropdown label={<Avatar image="/assets/User 05a.png" />} side="right">
      <ul className="w-[150px] flex flex-col items-center bg-white border shadow-lg rounded-lg py-2">
        <li className="hover:bg-gray-100 w-full">
          <Link to="/profile" className="flex items-center p-2">
            <SinglePersonIcon
              className="size-5 mr-2"
              onClick={() => {
                console.log('Profile clicked');
              }}
            />
            <span>Profile</span>
          </Link>
        </li>
        <li className="hover:bg-gray-100 w-full p-2 flex items-center"  onClick={logout}>
          <LogoutIcon className="size-5 mr-2" onClick={undefined} />
          <span>Logout</span>
        </li>
      </ul>
    </Dropdown>
  );

  const renderLanguageDropdown = () => (
    <Dropdown
      side="right"
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
      <ul className="w-[50px] flex flex-col items-center bg-white border shadow-lg rounded-full py-4">
        {COUNTRIES.map((val, index) => (
          <li key={index} className="hover:bg-gray-100 w-full p-1 text-center">
            {val.name}
          </li>
        ))}
      </ul>
    </Dropdown>
  );

  return (
    <nav className="w-full flex flex-row justify-between items-center z-50 border-b">
      {!isMobile && (
        <>
          <div className="w-1/5 px-[24px] py-[16px]">
            <Link to="/">
              <img
                src="/assets/Logo.svg"
                className="min-w-[150px] w-[190px] min-h-[40px] h-[28px] object-contain"
                alt="logo"
              />
            </Link>
          </div>
          <div className="w-4/5 flex justify-between px-[24px]">
            {renderClicksLeft()}
            <div className="flex items-center gap-2">
              <div className="flex items-center w-[340px] h-[48px] rounded-full border px-[16px] pl-[14px] mr-[20px]">
                <img
                  src="/assets/searchIcon.svg"
                  className="h-[20px] w-[20px] mr-2"
                  alt="search-icon"
                />
                <input
                  type="text"
                  placeholder="Search"
                  autoComplete="off" 
                  value={search}
                  className="h-full rounded-none outline-none"
                />
              </div>
              <Link to="/wallet">
                <img
                  src="/assets/walletIcon.svg"
                  alt="wallet-icon"
                  className="h-[32px] w-[32px] object-contain p-1 cursor-pointer"
                />
              </Link>
              {renderProfileDropdown()}
              {renderLanguageDropdown()}
            </div>
          </div>
        </>
      )}

      {isMobile && (
        <div className="w-full px-[12px] sm:px-[20px] rounded-b-md">
          <div
            className={`w-full ${expand ? 'h-[680px]' : 'h-[60px]'} transition-all ease-in-out duration-500 relative overflow-hidden bg-white`}
          >
            <div className="flex justify-between items-center h-[68px] w-full">
              <img
                src="/assets/Logo.svg"
                className="min-w-[150px] w-[150px] min-h-[40px] h-[40px] object-contain select-none"
                alt="logo"
              />
              <button onClick={toggleExpand} className="size-6 cursor-pointer">
                {expand ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 rounded-md"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
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
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
            {expand && (
              <div className="mt-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/walletIcon.svg"
                    alt="wallet-icon"
                    className="h-[32px] w-[32px] object-contain p-1 cursor-pointer"
                  />
                  {renderProfileDropdown()}
                  {renderLanguageDropdown()}
                </div>
                <ul className="mt-4">
                  {sidebarData.map((val, index) => (
                    <li key={index}>
                      {val.route ? (
                        <NavLink
                          to={val.route}
                          onClick={toggleExpand}
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
                            <span className="text-primary font-bold">
                              SOON!
                            </span>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="bg-[#F0F5FF] p-[24px] rounded-lg mt-4">
                  <h1 className="font-header text-[24px] font-[700]">
                    Hey {user?.firstName}
                  </h1>
                  <span className="text-[14px] mt-[10px] leading-none font-content">
                    Your Profile is left Incomplete
                  </span>
                  <div className="my-[24px]">
                    <ProgressBar completed={completion} />
                  </div>
                  <button
                    className="w-full border-[1px] border-[#113E53] font-bold bg-white rounded-full px-[20px] py-[12px] text-[#113E53] font-header"
                    onClick={handleCompleteProfileClick}
                  >
                    Complete Profile
                  </button>
                </div>
                <div className="text-center mt-[24px]">
                  <span className="text-[12px] text-gray-600 font-content">
                    ©️ 2024 Linkfluencer
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
