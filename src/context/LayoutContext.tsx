import React, { createContext, useContext, useState, ReactNode } from 'react';

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

//Defines the type for the props of the provider component.
interface MinimizeContextProviderProps {
  children: ReactNode;
}

//
export const MinimizeContextProvider: React.FC<MinimizeContextProviderProps> = ({ children }) => {
  const [minimize, setMinimize] = useState<boolean>(false); // Default to false

  return (
    <MinimizeContext.Provider value={{ minimize, setMinimize }}>
      {children}
    </MinimizeContext.Provider>
  );
};
