import React from 'react';

interface UploadButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'outline';
}

const UploadButton: React.FC<UploadButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
}) => {
  const buttonClass =
    variant === 'primary'
      ? 'bg-[#113E53] text-white'
      : 'bg-[#F1F5F9] text-[#113E53] border-[#113E53]';

  return (
    <button
      className={`border-[1px] rounded-full px-[20px] mt-4 py-[12px] font-header ${buttonClass} whitespace-nowrap`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default UploadButton;
