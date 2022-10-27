import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import { ROLE } from '../model/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import Loader from '../containers/Common/Loader';

const PrivateLayout = React.lazy(() => import('../containers/PrivateLayout'));
const Login = React.lazy(() => import('../pages/Login'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));

const Main = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<PublicRoute component={Login} />} />
        <Route path="/login" element={<PublicRoute component={Login} />} />
        <Route element={<PrivateLayout />}>
          <Route path="/dashboard" element={<PrivateRoute roles={[ROLE.USER]} component={Dashboard} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Suspense>
  );
};
export default Main;
