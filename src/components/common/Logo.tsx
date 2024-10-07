import React from 'react';
import { useNavigate } from 'react-router-dom';
import mainLogo from '../../assets/main_logo.png';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <img
      src={mainLogo}
      alt="Logo"
      width={150}
      height={40}
      onClick={() => navigate('/')}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default Logo;