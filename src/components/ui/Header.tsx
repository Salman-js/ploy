import React from 'react';
import { Search } from 'lucide-react';
import { Button } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';
import ThemeSwitcher from './ToggleTheme';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='main-header'>
      <div>
        <p className='logo'>Ploy</p>
      </div>
      <div className='flex flex-row space-x-3'>
        <Button
          icon={<Search />}
          onClick={() => navigate('/search')}
          type='text'
          shape='circle'
          className='btm-nav-btn'
          size='large'
        />
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Header;
