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
    return <div className="relative border p-[24px]">
        <ul className="">
            {sidebarData.map((val, index) => {
                return (<li className={`flex items-center cursor-pointer py-[12px] px-[20px] rounded-full  ${index === 0 ? "bg-gray-100" : "bg-transparent"}`}>
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
        <div className="absolute cursor-pointer right-0 top-2/4 h-[80px] text-right rounded-l-2xl border-l-2 border-y-2  border-gray-200 flex items-center">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg> */}
             <svg
      viewBox="0 0 24 24"
      fill="currentColor"
    className="size-6 -mr-2"
    >
      <path d="M13.293 6.293L7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
    </svg>
        </div>
    </div>
}

export default Sidebar