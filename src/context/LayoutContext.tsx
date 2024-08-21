import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

// Define the shape of the context value
interface MinimizeContextType {
  minimize: boolean;
  setMinimize: Dispatch<SetStateAction<boolean>>;
}

// Create the context with a default value
const MinimizeContext = createContext<MinimizeContextType | undefined>(
  undefined,
);

// A custom hook to access the context
export const useMinimizeContext = (): MinimizeContextType => {
  const context = useContext(MinimizeContext);
  if (!context) {
    throw new Error(
      'useMinimizeContext must be used within a MinimizeContextProvider',
    );
  }
  return context;
};

// Provider component
interface MinimizeContextProviderProps {
  children: ReactNode;
}

export const MinimizeContextProvider: React.FC<
  MinimizeContextProviderProps
> = ({ children }) => {
  const [minimize, setMinimize] = useState<boolean>(false);

  const value = useMemo(() => ({ minimize, setMinimize }), [minimize]);

  return (
    <MinimizeContext.Provider value={value}>
      {children}
    </MinimizeContext.Provider>
  );
};
