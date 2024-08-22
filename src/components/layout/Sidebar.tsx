import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ProgressBar from '../common/ProgressBar';
import { useMinimizeContext } from '../../context/LayoutContext';
import { sidebarData } from '../../config/sidebarData';

const Sidebar = () => {
  const { minimize, setMinimize } = useMinimizeContext();

  useEffect(() => {
    console.log({ minimize });
  }, [minimize]);
  return (
    <div className="relative flex flex-col justify-between w-full border p-[24px] bg-[#FCFCFC] min-h-[90vh]">
      <ul className=" overflow-hidden">
        {sidebarData.map((val, index) => (
          <li key={index}>
            {val.route ? (
              <NavLink
                to={val.route}
                className={({ isActive }) =>
                  `flex items-center cursor-pointer py-[12px] ${
                    !minimize && 'px-[5px] lg:px-[20]'
                  } rounded-full font-content ${
                    isActive
                      ? 'bg-gray-100 text-black'
                      : 'bg-transparent text-[#4D494F]'
                  }`
                }
              >
                <img
                  src={val?.icon}
                  alt="dashboard"
                  className={`ml-[10px] mr-[12px]`}
                />
                <span
                  className={`${minimize ? 'hidden' : ''} whitespace-nowrap`}
                >
                  {val?.label}
                </span>
              </NavLink>
            ) : (
              <div
                className={`flex items-center cursor-pointer py-[12px] ${
                  !minimize && 'px-[5px] lg:px-[20]'
                } rounded-full font-content bg-transparent text-[#afafaf]`}
              >
                <img
                  src={val?.icon}
                  alt="dashboard"
                  className={`ml-[10px] mr-[12px]`}
                />
                <div className="flex flex-col lg:flex-row">
                  <span className={`${minimize ? 'hidden' : 'block'} mr-2`}>
                    {val?.label}
                  </span>
                  <span
                    className={`${
                      minimize ? 'hidden' : 'block'
                    } text-primary font-bold`}
                  >
                    SOON!
                  </span>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="">
        {!minimize && (
          <div className="mt-[24px]">
            <div className="bg-[#F0F5FF] p-[15px] rounded-lg overflow-hidden">
              <h1 className="font-header text-[24px] font-[700] whitespace-nowrap">
                Hi Rahul
              </h1>
              <span className="text-[14px] mt-[10px] leading-none font-content whitespace-nowrap">
                {' '}
                Your Profile is left Incomplete
              </span>
              <div className="my-[24px]">
                <ProgressBar completed={74} />
              </div>
              <button className="w-full whitespace-nowrap border-[1px] border-[#113E53] font-bold bg-white rounded-full px-[20px] py-[12px] text-[#113E53] font-header">
                Complete Profile
              </button>
            </div>
          </div>
        )}
        {!minimize && (
          <div className="text-center mt-[24px]">
            <span className="text-[12px] text-gray-600 font-content">
              ©️ 2024 Linkfluencer
            </span>
          </div>
        )}
      </div>
      <div
        className="absolute cursor-pointer -right-3 top-2/4 h-[80px] text-right rounded-2xl border-2 bg-white  border-gray-200 flex items-center"
        onClick={() => {
          setMinimize(!minimize);
        }}
      >
        {!minimize && (
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path d="M13.293 6.293L7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
          </svg>
        )}
        {minimize && (
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path d="M10.707 17.707L16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
