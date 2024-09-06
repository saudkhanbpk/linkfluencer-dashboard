import { createContext, useState, useEffect, ReactNode } from 'react';
import { fetchUser } from '../services/userService';
import { IUser } from '../interfaces/User';

interface UserContextType {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const userData = await fetchUser();
      setUser(userData);
    };

    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};