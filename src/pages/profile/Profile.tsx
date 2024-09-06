import { useState } from 'react';
import Brand from './Brand';
import User from './User';
import Influencer from './Influencer';

interface Props {}

const Profile: React.FC<Props> = () => {
  const [role, setRole] = useState('user');
  return (
    <div className="bg-white p-[12px] sm:p-[24px]">
      <h1 className="font-header text-[24px] text-[#172B4D]">Profile</h1>
     {role !== 'influencer' && <div className="my-[30px]">
        <ul className="flex items-center gap-4">
          <li
            className={`border-b-[3px] ${role === 'brand' ? 'border-[#252C32] font-[600]' : 'border-transparent'} text-[#252C32] cursor-pointer duration-300`}
            onClick={() => {
              setRole('brand');
            }}
          >
            Brand
          </li>
          <li
            className={`border-b-[3px] ${role === 'user' ? 'border-[#252C32] font-[600]' : 'border-transparent'} text-[#252C32] cursor-pointer duration-300`}
            onClick={() => {
              setRole('user');
            }}
          >
            User
          </li>
        </ul>
      </div>}
      {role === 'brand' && <Brand/>}
      {role === 'user' && <User/>}
      {role === 'influencer' && <Influencer/>}
    </div>
  );
};

export default Profile;
