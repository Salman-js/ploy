import { SidebarUserCard } from '../ui/SideBarComponents';
import React from 'react';
import { MainFilterComp } from './FilterComponents';

const SearchSidebar = () => {
  return (
    <div className='sidebar-content p-2 pt-20'>
      <SidebarUserCard />
      <div className='sidebar-menu-container'>
        <MainFilterComp />
      </div>
    </div>
  );
};

export default SearchSidebar;
