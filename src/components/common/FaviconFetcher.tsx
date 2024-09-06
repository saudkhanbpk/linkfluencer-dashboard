// components/common/FaviconLoader.tsx
import React, { useEffect } from 'react';

interface FaviconLoaderProps {
  originalUrl: string;
  setFavicon: (url: string) => void;
}

const FaviconLoader: React.FC<FaviconLoaderProps> = ({
  originalUrl,
  setFavicon,
}) => {
  useEffect(() => {
    const loadFavicon = async () => {
      try {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = new URL('/favicon.ico', originalUrl).href;

        const img = new Image();
        img.src = link.href;
        img.onload = () => setFavicon(link.href);
        img.setAttribute('style', 'width:32px;height:32px;');
        img.onerror = () => setFavicon('');
      } catch (error) {
        console.error('Error loading favicon:', error);
        setFavicon('');
      }
    };

    loadFavicon();
  }, [originalUrl, setFavicon]);

  return null; // Ce composant n'a pas de rendu visuel, il gère uniquement le chargement
};

export default FaviconLoader;
