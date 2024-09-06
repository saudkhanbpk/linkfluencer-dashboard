import React from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({title, subtitle}) => {
  return (
    <div>
      <h4 className="text-gray-500 font-content">{title}</h4>
      <h1 className="text-2xl font-header">{subtitle}</h1>
    </div>
  );
};

export default Header;