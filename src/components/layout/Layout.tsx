import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Content from "./Content"
import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import { useMinimizeContext } from "../../context/LayoutContext"
import useDeviceDetect from "../../helpers/screens"
interface Props {

}
const Layout: React.FC<Props> = () => {
    const { minimize} = useMinimizeContext();
    const {isMobile} = useDeviceDetect()

    useEffect(()=>{
            console.log(minimize);
            
    },[])
    return <div className="w-full">
        <Navbar />
        <div className="flex w-full">
            {!isMobile && <div className={`${minimize?"w-auto":"lg:w-1/5 w-2/6"}  transition-all duration-500 ease-in-out`}>
                <Sidebar />
            </div>}
            <div 
            // className=" p-[24px] bg-[#F0F5FF] h-full"
            className={`${minimize?"w-full":"lg:w-4/5 md:w-4/6, w-full"}  p-[24px] bg-[#F0F5FF] h-full`}
            >
                {/* <Content /> */}
                <Outlet/>
            </div>
        </div>
    </div>
}

export default Layout