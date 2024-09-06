import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="w-full mt-[16px] md:mt-0 md:ml-2 ml-0 md:w-[189px] border-[1px] border-[#113E53] font-bold bg-[#113E53] rounded-full px-[20px] py-[12px] text-white font-header"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;