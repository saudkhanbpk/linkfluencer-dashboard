import { empty_dashboard } from '../sampleData';

const Dashboard: React.FC = () => {
  return (
    <div className="p-[24px]">
      <div>
        <h4 className="text-gray-500 font-content">Rahul&rsquo;s</h4>
        <h1 className="text-2xl font-header">Dashboard</h1>
      </div>
      <div className="mt-[24px] flex md:flex-row flex-col items-center">
        <div className="flex items-center justify-between md:w-[340px] w-full h-[48px] rounded-full px-[16px] bg-white py-1">
          <input
            type="text"
            placeholder="Search"
            className="h-full rounded-none w-full outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
        </div>
        <button className="w-full mt-[16px] md:mt-0 md:ml-2 ml-0 md:w-[189px] border-[1px] border-[#113E53] font-bold bg-[#113E53] rounded-full px-[20px] py-[12px] text-white font-header">
          Create Smart Link
        </button>
      </div>
      <div className="relative bg-primary my-[20px] rounded-lg flex flex-col-reverse lg:flex-row gap-[13px]">
        <img
          src="/assets/dashboard/socialLabels.svg"
          className="absolute bottom-0 hidden lg:block right-0 h-[120px] md:w-[400px] md:h-[150px] lg:w-[490px] lg:h-[190px]"
          alt="social-labels"
        />
        <div className="w-5/5 lg:w-1/5 p-[20px] ">
          <img
            src="/assets/dashboard/first.svg"
            alt="dashboard-girl"
            className="w-full object-cover h-[170px] rounded-lg"
          />
          <div className="bg-white rounded-full flex items-center py-[8px] px-[10px] my-[14px]">
            <img
              src="/assets/instagram.svg"
              alt="instagram-logo"
              className="mr-[6px]"
            />
            <span className=" font-header font-bold text-[9px] overflow-hidden">
              instagram.linkfluencer.io/thenomadalice
            </span>
          </div>
          <div className="bg-[#FFE9F7] rounded-lg h-[170px] flex flex-col justify-center items-center">
            <img
              src="/assets/profileImg.svg"
              alt="profile-image"
              className="rounded-full"
            />
            <label>@thenomadalice</label>
            <button className="w-[60px] font-content bg-[#74265A] rounded-full h-[20px] text-[8px] text-white">
              follow
            </button>
          </div>
        </div>
        <div className="w-5/5 lg:w-4/5">
          <div className="px-[20px] py-[10px]">
            <h1 className=" font-header font-bold text-[25px] lg:text-[32px]">
              {empty_dashboard?.title}
            </h1>
            <p className="font-content text-[12] lg:text-[16px] font-[400] my-[10px]">
              {empty_dashboard?.description}
            </p>
          </div>
          <div className="flex justify-end">
            <img
              src="/assets/dashboard/socialLabels.svg"
              className="right-0 w-[280px] h-[120px] lg:hidden md:w-[400px] md:h-[150px] lg:w-[490px] lg:h-[190px] mb-[10px]"
              alt="social-icons"
            />
          </div>
          <div className="w-full flex flex-wrap">
            {empty_dashboard?.blocks.map((val, index) => (
              <div key={index} className="w-full md:w-1/3 p-4">
                <h3 className="font-content font-bold">{val.title}</h3>
                <p className="text-[12] lg:text-[16px] font-content">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
