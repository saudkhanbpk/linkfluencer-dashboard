import { createContext, useState, useEffect, ReactNode } from 'react';
import { fetchUser } from '../services/userService';
import { IUser } from '../interfaces/User';
import { useNavigate } from 'react-router-dom';

interface UserContextType {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      console.log('Fetching user...');
      try {
        const userData = await fetchUser();
        if (!userData) {
          navigate('/signin');
          return;
        }
        setUser(userData);
      } catch (err) {
        navigate('/');
      }
    };

    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
