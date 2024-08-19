import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of the context value
interface MinimizeContextType {
  minimize: boolean;
  setMinimize: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with a default value
const MinimizeContext = createContext<MinimizeContextType | undefined>(undefined);

// A custom hook to access the context
export const useMinimizeContext = () => {
  const context = useContext(MinimizeContext);
  if (!context) {
    throw new Error('useMinimizeContext must be used within a MinimizeContextProvider');
  }
  return context;
};

// Defines the type for the props of the provider component.
interface MinimizeContextProviderProps {
  children: ReactNode;
}

export const MinimizeContextProvider: React.FC<MinimizeContextProviderProps> = ({ children }) => {
  const [minimize, setMinimize] = useState<boolean>(false); // Default to false

  // Run once on load to set minimize based on screen size
  useEffect(() => {
    const handleResize = () => {
      const minWidth = 850;
      const maxWidth = 1350;

      if (window.innerWidth >= minWidth && window.innerWidth <= maxWidth) {
        setMinimize(true);
      } else {
        setMinimize(false);
      }
    };

    handleResize(); // Call the function on load

    // Optionally, you can listen for resize events if you need to update state on window resize.
    // window.addEventListener('resize', handleResize);

    // Cleanup the event listener if added
    // return () => {
    //   window.removeEventListener('resize', handleResize);
    // };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <MinimizeContext.Provider value={{ minimize, setMinimize }}>
      {children}
    </MinimizeContext.Provider>
  );
};
