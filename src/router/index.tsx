import { Route, Routes, useLocation } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.tsx';
import ErrorBoundary from '../components/Layout/Error.component.tsx';
import { ROUTES } from './constants.ts';
import Home from '../components/Home/index.tsx';
import Search from '../components/Search/index.tsx';
import Sidebar from '../components/ui/MainSideBar.tsx';
import Header from '../components/ui/Header.tsx';
import SearchSidebar from '../components/Search/components/SearchSidebar.tsx';
import BottomNav from '../components/ui/BottomNav.tsx';

const RoutesComponent = () => {
  const location = useLocation();
  const currentPathname = location.pathname;
  return (
    <div className='main-layout'>
      <Header />
      <div className='sidebar'>
        {currentPathname.includes('/search') ? <SearchSidebar /> : <Sidebar />}
      </div>
      <div className='main'>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SEARCH} element={<Search />} />
          <Route element={<ProtectedRoute />}></Route>
        </Routes>
      </div>
      <BottomNav />
    </div>
  );
};

export default RoutesComponent;
