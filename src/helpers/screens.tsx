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
    // Check on mount
    checkDeviceType();

    // Add event listener for window resize
    window.addEventListener('resize', checkDeviceType);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', checkDeviceType);
  }, [checkDeviceType]);

  return { isMobile, width };
};

export default useDeviceDetect;
