import { Routes, Route, useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Dashboard from '../pages/Dashboard';
import MyLinks from '../pages/MyLinks';
import BulkUpload from '../pages/BulkUpload';
import Analytics from '../pages/Analytics';
import { ROUTES } from './constants';
import UserManagement from '../pages/UserManagement';
import Pricing from '../pages/Plans';
import Profile from '../pages/profile/Profile';
import MyWallet from '../pages/MyWallet';
import { Checkout } from '../pages/stripe/checkout';
import { useEffect } from 'react';
import ProtectedRoutes from './ProtectedRoutes';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import SignupInfluencer from '../pages/SignupInfluencer';
import ForgetPassword from '../pages/ForgetPassword';
import Redirect from '../pages/redirect';
import { UserProvider } from '../context/UserContext';

const RoutesConfig = () => {
  // console.log(ROUTES.CHECKOUT);
  const { label } = useParams();
  // console.log('this is plan', label);
  useEffect(() => {
    // console.log(ROUTES.CHECKOUT);
    // const { plan } = useParams();
    // console.log({plan});
  });
  return (
      <UserProvider>
        <Routes>
          <Route path={ROUTES.SIGNIN} element={<Signin />} />
          <Route path={ROUTES.SIGNUP} element={<Signup />} />
          <Route path={ROUTES.SIGNUP_INFLUENCER} element={<SignupInfluencer />} />
          <Route path={ROUTES.FORGET_PASSWORD} element={<ForgetPassword />} />
          <Route path={ROUTES.REDIRECT} element={<Redirect />} />
          <Route element={<ProtectedRoutes />}>
              <Route path={ROUTES.HOME} element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path={ROUTES.MY_LINKS} element={<MyLinks />} />
                <Route path={ROUTES.BULK_UPLOAD} element={<BulkUpload />} />
                <Route path={ROUTES.ANALYTICS} element={<Analytics />} />
                <Route path={ROUTES.USER_MANAGEMENT} element={<UserManagement />} />
                <Route path={ROUTES.PROFILE} element={<Profile />} />
                <Route path={ROUTES.WALLET} element={<MyWallet />} />
                <Route path={ROUTES.PLANS} element={<Pricing />} />
                <Route path={ROUTES.CHECKOUT} element={<Checkout />} />
              </Route>
          </Route>
        </Routes>
    
    </UserProvider>
  );
};

export default RoutesConfig;
