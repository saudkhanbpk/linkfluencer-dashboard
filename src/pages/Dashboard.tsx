const Dashboard: React.FC = () => {
  return (
    <div className="">
      <div>
        <h4 className="text-gray-500">Rahul's</h4>
        <h1 className="text-2xl">Dashboard</h1>
      </div>
      <div className="mt-[24px] flex md:flex-row flex-col items-center">
        <div className="flex items-center justify-between md:w-[340px] w-full h-[48px] rounded-full border px-[16px] bg-white py-1">
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
    </div>
  );
};

export default Dashboard;
