import { SidebarUserCard } from '../ui/sidebar.components';
import React from 'react';
import { MainFilterComp } from './filter';

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
