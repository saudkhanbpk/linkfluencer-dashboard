import React from 'react';
import { Link45Icon } from '../../svg';

const InputWithIcon: React.FC = () => {
  return (
    <div className="flex items-center justify-between md:w-[340px] w-full h-[48px] rounded-full px-[16px] bg-white py-1">
      <input
        type="text"
        placeholder="Paste your link here"
        className="h-full rounded-none w-full outline-none"
      />
      <Link45Icon className={'size-5 text-gray-400'} />
    </div>
  );
};

export default InputWithIcon;