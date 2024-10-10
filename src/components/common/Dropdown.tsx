import React, { useState, useRef, useEffect } from 'react';

interface DropdownProps {
  label: React.ReactNode; // Allows the label to be any JSX element
  children: React.ReactNode; // This will be the dropdown items passed as children
  dropIcon?: boolean; // Determines if the dropdown icon should be displayed
  side?: string;
  disabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  children,
  dropIcon = false,
  side = 'left',
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`relative inline-block text-left ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
    >
      <span
        onClick={toggleDropdown}
        className={`inline-flex justify-between py-2 text-sm font-medium text-gray-700 focus:outline-none ${
          disabled ? 'text-gray-400' : 'text-gray-700'
        }`}
      >
        {label}
        {dropIcon && (
          <svg
            className="ml-2 -mr-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </span>
      {isOpen && !disabled && (
        <div
          className={`origin-top-right absolute ${side}-0 mt-2 ring-black ring-opacity-5 focus:outline-none z-50`}
        >
          <div className="" onClick={toggleDropdown}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
