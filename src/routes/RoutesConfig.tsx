import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Dashboard from '../pages/Dashboard';
import MyLinks from '../pages/MyLinks';
import BulkUpload from '../pages/BulkUpload';
import Analytics from '../pages/Analytics';
import Dashboard2 from '../pages/Dashboard2';
import { ROUTES } from './constants';
import UserManagement from '../pages/UserManagement';
import Pricing from '../pages/Pricing'
import Profile from '../pages/profile/Profile';
import MyWallet from '../pages/MyWallet';

const RoutesConfig = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path={ROUTES.TEST_DASHBOARD} element={<Dashboard2 />} />
      <Route path={ROUTES.MY_LINKS} element={<MyLinks />} />
      <Route path={ROUTES.BULK_UPLOAD} element={<BulkUpload />} />
      <Route path={ROUTES.ANALYTICS} element={<Analytics />} />
      <Route path={ROUTES.USER_MANAGEMENT} element={<UserManagement />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
      <Route path={ROUTES.WALLET} element={<MyWallet />} />
      <Route path={ROUTES.PRICING} element={<Pricing />} />
    </Route>
  </Routes>
);

export default RoutesConfig;
