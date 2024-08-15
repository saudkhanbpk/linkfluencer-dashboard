interface Props {

}
const Sidebar: React.FC<Props> = () => {
    const sidebarData = [
        {
        label: "Dashboard",
        icon: "/assets/dashboardIcon.png",
    },
    {
        label: "My Links",
        icon: "/assets/linkIcon.png",
    }, {
        label: "Bulk Upload",
        icon: "/assets/uploadIcon.png",
    }, {
        label: "Analytics",
        icon: "/assets/analyticsIcon.png",
    }, {
        label: "Campaign",
        icon: "/assets/compaignIcon.png",
    },
]
    return <div className="border p-[24px]">
        <ul className="">
            {sidebarData.map((val, index)=>{
                return (<li className={`flex items-center py-[12px] px-[20px] rounded-full  ${index === 0? "bg-gray-100":"bg-transparent"}`}>
                    <img src={val?.icon} alt="dashboard" className="h-[24px] w-[24px] mr-[12px] filter grayscale object-contain text-[#4D494F]" />
                    <span>{val?.label}</span>
                </li>)
            })}
        </ul>
        <div className="mt-[24px]">
            <div className="bg-[#F0F5FF] p-[24px] rounded-lg">
                <h1 className="font-header text-[24px] font-[700]">Hay Rahul</h1>
                <span className="text-[14px] mt-[10px]"> Your Profile is left Incomplete</span>
                <button className="w-[182px] border-2 border-gray-800 font-bold bg-white rounded-full px-[20px] py-[12px] mt-[24px]">Complete Profile</button>
            </div>
        </div>
        <div className="text-center mt-[24px]">
        <span className="text-[12px] text-gray-600">©️ 2024 Linkfluencer</span>
        </div>
    </div>
}

export default Sidebar