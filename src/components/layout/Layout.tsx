import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

import { useMinimizeContext } from '../../context/LayoutContext';
import useDeviceDetect from '../../helpers/screens';

const Layout = () => {
  const { minimize } = useMinimizeContext();
  const { isMobile } = useDeviceDetect();

  return (
    <div className="w-full h-dvh">
      <Navbar />
      <div className="md:flex w-full">
        {!isMobile && (
          <div
            className={`${minimize ? 'min-w-[95px] w-[95px]' : 'xl:w-1/5 w-2/6'}  transition-all duration-500 ease-in-out`}
          >
            <Sidebar />
          </div>
        )}
        <div
          // className=" p-[24px] bg-[#F0F5FF] h-full"
          className={`${minimize ? 'w-full' : 'lg:w-4/5 md:w-4/6, w-full'} bg-[#F0F5FF] md:overflow-y-scroll h-full md:h-[90vh]`}
        >
          {/* <Content /> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
