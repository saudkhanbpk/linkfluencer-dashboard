interface Props {}

const User: React.FC<Props> = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col md:flex-row items-center">
        <div className=" bg-[#F0F5FF] md:w-2/4 rounded-3xl flex flex-row items-center p-4">
          <div className="p-1">
            <div className=" w-[80px] h-[80px] rounded-full">
              <img
                src="/assets/profileImg.svg"
                alt=""
                className="h-full w-full"
              />
            </div>
          </div>
          <div className="px-2">
            <h1 className="text-[24px] font-header mb-1">Manager</h1>
            <p className=" leading-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              reiciendis minima molestias nesciunt enim quas vero quo nulla eius
              nostrum, ipsum.
            </p>
          </div>
        </div>
        <div className="md:w-2/4 mt-5 md:mt-0 md:pl-6 w-full">
          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded-full border border-[#B3B3B2] w-full mb-4 outline-none"
          />
          <input
            type="text"
            value="EKG6459678N17"
            disabled
            placeholder="Name"
            className="p-3 rounded-full border border-[#B3B3B2] w-full outline-none"
          />
        </div>
      </div>
      <div className="flex mt-6 justify-end gap-4">
        <button className="md:mt-0 md:ml-2 ml-0 border-[1px] w-[120px] font-bold bg-[#F1F5F9] rounded-full px-[20px] py-[8px] text-[#113E53] font-header">
          Cancel
        </button>
        <button className="md:mt-0 md:ml-2 ml-0 border-[1px] w-[120px] border-[#113E53] font-bold bg-[#113E53] rounded-full px-[20px] py-[8px] text-white font-header">
          Save
        </button>
      </div>
      <div className="flex flex-col mt-6 gap-4">
        <h1 className="text-4 font-[600] text-[#172B4D]">Password Set-up</h1>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="password"
            placeholder="Old Password"
            className="p-3 rounded-full border border-[#B3B3B2] w-6/6 md:w-2/6"
          />
          <input
            type="password"
            placeholder="Old Password"
            className="p-3 rounded-full border border-[#B3B3B2] w-6/6 md:w-2/6"
          />
          <input
            type="password"
            placeholder="New Password"
            className="p-3 rounded-full border border-[#B3B3B2] w-6/6 md:w-2/6"
          />
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <button className="md:mt-0 md:ml-2 ml-0 border-[1px] w-[120px] font-bold bg-[#F1F5F9] rounded-full px-[20px] py-[8px] text-[#113E53] font-header">
          Cancel
        </button>
        <button className="md:mt-0 md:ml-2 ml-0 border-[1px] w-[120px] border-[#113E53] font-bold bg-[#113E53] rounded-full px-[20px] py-[8px] text-white font-header">
          Save
        </button>
      </div>
    </div>
  );
};

export default User;
