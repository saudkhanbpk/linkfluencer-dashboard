import React from 'react';
import { Link45Icon } from '../../svg';

interface InputWithIconProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWithIcon: React.FC<InputWithIconProps> = ({ value, onChange }) => {
  return (
    <div className="flex items-center justify-between md:w-[340px] w-full h-[48px] rounded-full px-[16px] bg-white py-1">
      <input
        type="text"
        placeholder="Paste your link here"
        className="h-full rounded-none w-full outline-none"
        value={value}
        onChange={onChange}
      />
      <Link45Icon className={'size-5 text-gray-400'} />
    </div>
  );
};

export default InputWithIcon;
