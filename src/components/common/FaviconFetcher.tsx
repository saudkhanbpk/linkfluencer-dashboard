import React, { useEffect } from 'react';
import supportedApps from '../../data/supportedApps.json';
import { defaultFavicon } from '../../utils/iconUtils';

interface FaviconLoaderProps {
  originalUrl: string;
  setFavicon: (url: string) => void;
  target?: string;
}

const FaviconLoader: React.FC<FaviconLoaderProps> = ({
  originalUrl,
  setFavicon,
  target,
}) => {
  useEffect(() => {
    const loadFavicon = async () => {
      try {
        if (target) {
          const app = target && supportedApps.find(
            (app) => app.label.toLowerCase() === target.toLowerCase()
          );

          if (app) {
            setFavicon(app.value);
            return;
          }
        }

        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = new URL('/favicon.ico', originalUrl).href;

        const img = new Image();
        img.src = link.href;
        img.onload = () => setFavicon(link.href);
        img.onerror = () => setFavicon(defaultFavicon);
      } catch (error) {
        console.error('Error loading favicon:', error);
        setFavicon(defaultFavicon);
      }
    };

    loadFavicon();
  }, [originalUrl, setFavicon, target]);

  return null;
};

export default FaviconLoader;
