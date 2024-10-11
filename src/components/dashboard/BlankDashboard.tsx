import { empty_dashboard } from '../../sampleData';

const BlankDashboard: React.FC = () => {
  return (
    <div className="">
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

export default BlankDashboard;