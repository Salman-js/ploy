import { Route, Routes, useLocation } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.tsx';
import { ROUTES } from './constants.ts';
import Home from '@/Pages/Home/index.tsx';
import Search from '@/Pages/Search/index.tsx';
import Sidebar from '@/components/ui/main.sidebar.tsx';
import SearchSidebar from '@/components/Search/search.sidebar.tsx';
import BottomNav from '@/components/ui/bottom.nav.tsx';
import Company from '@/Pages/Company/index.tsx';
import { Toaster } from '@/shad/ui/toaster.tsx';
import Application from '@/Pages/Applications/index.tsx';
import Header from '@/components/ui/ui.header.tsx';

const RoutesComponent = () => {
  const location = useLocation();
  const currentPathname = location.pathname;
  return (
    <div className='main-layout'>
      <Header />
      <Toaster />
      <div className='sidebar'>
        {currentPathname.includes('/search') ? <SearchSidebar /> : <Sidebar />}
      </div>
      <div className='main'>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SEARCH} element={<Search />} />
          <Route path={ROUTES.COMPANY} element={<Company />} />
          <Route path={ROUTES.APPLICATIONS} element={<Application />} />
          <Route element={<ProtectedRoute />}></Route>
        </Routes>
      </div>
      <BottomNav />
    </div>
  );
};

export default RoutesComponent;
