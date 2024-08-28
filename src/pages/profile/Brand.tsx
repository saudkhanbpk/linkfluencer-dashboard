import Dropdown from "../../components/common/Dropdown"
import { DropIcon } from "../../svg"

interface Props {

}

const Brand:React.FC<Props> = () =>{
    return<div>
    <div className="gap-4 flex flex-col md:flex-row md:h-[250px] relative">
        <div className="border md:w-3/12 py-[12px] px-[24px] rounded-3xl flex justify-end flex-col bg-[#F0F5FF]">
          <div className="flex flex-col ">
            <img
              src="/assets/sampleProfile.svg"
              alt="profile-pic"
              className="h-[50px] w-[50px]"
            />
            <h2 className="font-header text-[20px] font-[500]">FLYBIRD</h2>
          </div>
          <span className="text-sm leading-none mt-4 mb-5 text-[#4F4949] font-content">
            Complete Your Profile for a Personalized Experience!
          </span>
          <button className=" border-[1px] w-[150px] text-sm md:w-auto border-[#113E53] font-bold bg-[#113E53] rounded-full px-[20px] py-[8px] text-white font-header">
            Upload Photo
          </button>
        </div>
        <div className="md:w-4/12 flex flex-col justify-between">
          <input
            type="text"
            placeholder="Brand Name"
            className="p-3 rounded-full border border-[#B3B3B2] w-full mb-4 outline-none"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="p-3 rounded-full border border-[#B3B3B2] w-full mb-4 outline-none"
          />
          <div className="rounded-full border border-[#B3B3B2] w-full mb-4 outline-none flex">
            <div className="border h-full rounded-l-full bg-gray-100 p-1 w-1/4 flex justify-center items-center gap-3 border-r border-gray-300">
              <Dropdown
                side="left"
                label={<span className="rounded-l-full">+92</span>}
                children={
                  <ul>
                    <li>+92</li>
                    <li>+93</li>
                    <li>+94</li>
                    <li>+95</li>
                    <li>+96</li>
                  </ul>
                }
              />
              <DropIcon className={'text-gray-500 size-4'} onClick={() => {}} />
            </div>
            <input
              type="text"
              placeholder="Mobile Number"
              className="border w-full rounded-r-full px-2"
            />
          </div>
          {/* <input type='text' placeholder='Email Address' className='p-3 rounded-full border border-[#B3B3B2] w-full mb-4 outline-none'/> */}
          <select className="p-3 rounded-full border border-[#B3B3B2] w-full">
            <option selected value="" disabled>
              Select Country
            </option>
          </select>
        </div>
        <div className="md:w-5/12 flex flex-col justify-between">
          <input
            type="text"
            placeholder="Postal Code"
            className="p-3 rounded-full border border-[#B3B3B2] w-full mb-4 outline-none"
          />
          <input
            type="text"
            placeholder="Enter Code"
            className="p-3 rounded-full border border-[#B3B3B2] w-full mb-4 outline-none"
          />
          {/* <input type='text' placeholder='Enter Address' className='p-3 h-[100px] rounded-3xl border border-[#B3B3B2] w-full mb-4 outline-none'/> */}
          <textarea
            placeholder="Enter Address"
            className="w-full h-[50px] md:h-full rounded-3xl border border-gray-400 outline-none resize-none p-3"
            cols={500}
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
}

export default Brand;