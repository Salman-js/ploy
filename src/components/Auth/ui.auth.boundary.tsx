import { useLocation } from 'react-router-dom';
import Sidebar from '@/components/ui/main.sidebar.tsx';
import SearchSidebar from '@/components/Search/search.sidebar.tsx';
import BottomNav from '@/components/ui/bottom.nav.tsx';
import { Toaster } from '@/shad/ui/toaster.tsx';
import Header from '@/components/ui/ui.header.tsx';
import { ROUTES } from '@/router/constants.ts';

type authUiBoundaryProps = {
  children: React.ReactNode;
};

const AuthUiBoundary: React.FC<authUiBoundaryProps> = ({ children }) => {
  const location = useLocation();
  const currentPathname = location.pathname;
  return (
    <div className='main-layout'>
      {currentPathname.includes(ROUTES.AUTH) ? null : <Header />}
      <Toaster />
      {currentPathname.includes(ROUTES.AUTH) ? null : (
        <div className='sidebar'>
          {currentPathname.includes(ROUTES.SEARCH) ? (
            <SearchSidebar />
          ) : (
            <Sidebar />
          )}
        </div>
      )}
      {children}
      {currentPathname.includes(ROUTES.AUTH) ? null : <BottomNav />}
    </div>
  );
};

export default AuthUiBoundary;
