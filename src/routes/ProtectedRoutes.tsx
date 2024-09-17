import { Outlet } from 'react-router-dom';
import { UserProvider } from '../context/UserContext';

const ProtectedRoutes = () => (
  <UserProvider>
    <Outlet />
  </UserProvider>
);

export default ProtectedRoutes;
