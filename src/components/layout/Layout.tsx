import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"

import { useMinimizeContext } from "../../context/LayoutContext"
import useDeviceDetect from "../../helpers/screens"
interface Props {

}
const Layout: React.FC<Props> = () => {
    const { minimize} = useMinimizeContext();
    const {isMobile} = useDeviceDetect()

    return <div className="w-full">
        <Navbar />
        <div className="flex w-full z-50">
            {!isMobile && <div className={`${minimize?"min-w-[95px] w-[95px]":"lg:w-1/5 w-2/6"}  transition-all duration-500 ease-in-out`}>
                <Sidebar />
            </div>}
            <div 
            // className=" p-[24px] bg-[#F0F5FF] h-full"
            className={`${minimize?"w-full":"lg:w-4/5 md:w-4/6, w-full"}  p-[24px] bg-[#F0F5FF] h-[85vh] overflow-y-scroll`}
            >
                {/* <Content /> */}
                <Outlet/>
            </div>
        </div>
    </div>
}

export default Layout