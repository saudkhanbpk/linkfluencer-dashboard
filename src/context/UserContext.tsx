import { createContext, useState, useEffect, ReactNode } from 'react';
import { fetchUser } from '../services/userService';
import { IUser } from '../interfaces/User';
import { useNavigate, useLocation } from 'react-router-dom';
import Loading from '../components/common/Loading';

interface UserContextType {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  loading: boolean;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

const PUBLIC_ROUTES = [
  '/signin',
  '/signup',
  '/signup-influencer',
  '/signup-brand',
  '/forget-password',
];

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      try {
        const userData = await fetchUser();
        if (!userData && !PUBLIC_ROUTES.includes(location.pathname)) {
          navigate('/signin');
          return;
        }
        setUser(userData);
      } catch (err) {
        if (!PUBLIC_ROUTES.includes(location.pathname)) {
          navigate('/signin');
        }
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [location.pathname, navigate]);

  if (loading) {
    return <Loading />;
  }

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};
