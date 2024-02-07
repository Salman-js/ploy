import React from 'react';
import MainFilterComp from './filter';

const SearchSidebar = () => {
  return (
    <div className='sidebar-content'>
      <div className='sidebar-menu-container'>
        <MainFilterComp />
      </div>
    </div>
  );
};

export default SearchSidebar;
