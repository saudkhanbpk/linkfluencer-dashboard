import { useState } from "react";

interface Props {}

const Profile: React.FC<Props> = () => {
    const [role, setRole] = useState('brand')
  return <div className="bg-white p-[12px] sm:p-[24px] h-full">
    <h1 className="font-header text-[24px] text-[#172B4D]">Profile</h1>
    <div className="my-[24px]">
        <ul className="flex items-center gap-3">
            <li 
            className={`border-b-[3px] ${role === 'brand'? 'border-[#252C32] font-[600]':'border-transparent'} text-[#252C32] cursor-pointer duration-300`}
            onClick={()=>{setRole('brand')}}
            >Brand</li>
            <li 
            className={`border-b-[3px] ${role === 'user'? 'border-[#252C32] font-[600]':'border-transparent'} text-[#252C32] cursor-pointer duration-300`}
            onClick={()=>{setRole('user')}}
            >User</li>
        </ul>
    </div>
  </div>;
};

export default Profile;
