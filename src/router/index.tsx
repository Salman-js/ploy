import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.tsx';
import { ROUTES } from './constants.ts';
import Home from '@/Pages/Home/index.tsx';
import Search from '@/Pages/Search/index.tsx';
import Company from '@/Pages/Company/index.tsx';
import Application from '@/Pages/Applications/index.tsx';
import Meetings from '@/Pages/Meetings/index.tsx';
import Notifications from '@/Pages/Notifications/index.tsx';
import Login from '@/Pages/Auth/index.tsx';
import AuthUiBoundary from '@/components/Auth/ui.auth.boundary.tsx';

const RoutesComponent = () => {
  return (
    <AuthUiBoundary>
      <div className='main'>
        <Routes>
          <Route path={ROUTES.AUTH} element={<Login />} />
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SEARCH} element={<Search />} />
          <Route path={ROUTES.COMPANY} element={<Company />} />
          <Route path={ROUTES.APPLICATIONS} element={<Application />} />
          <Route path={ROUTES.MEETINGS} element={<Meetings />} />
          <Route path={ROUTES.NOTIFICATIONS} element={<Notifications />} />
          <Route element={<ProtectedRoute />}></Route>
        </Routes>
      </div>
    </AuthUiBoundary>
  );
};

export default RoutesComponent;
