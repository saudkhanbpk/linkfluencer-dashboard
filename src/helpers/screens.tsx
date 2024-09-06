import { useState, useEffect, useCallback } from 'react';

const MOBILE_WIDTH = 850;

const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [width, setWidth] = useState(0);

  const checkDeviceType = useCallback(() => {
    const screenWidth = window.innerWidth;
    setWidth(screenWidth);
    setIsMobile(screenWidth < MOBILE_WIDTH);
  }, []);

  useEffect(() => {
    checkDeviceType();

    window.addEventListener('resize', checkDeviceType);

    return () => window.removeEventListener('resize', checkDeviceType);
  }, [checkDeviceType]);

  return { isMobile, width };
};

export default useDeviceDetect;
