import { RootState } from '@/store/store';
import useDarkMode from '@/utils/useDarkTheme';
import { Button } from 'antd';
import { MoonStar, SunIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  // Retrieve dark mode preference from local storage, default to true
  const { theme } = useSelector((state: RootState) => state.theme);
  const [setDarkMode] = useDarkMode();

  const toggleDarkMode = () => {
    setDarkMode();
  };

  useEffect(() => {
    // Apply dark mode styles dynamically
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Button
      icon={theme === 'dark' ? <SunIcon /> : <MoonStar />}
      type='text'
      shape='circle'
      className='btm-nav-btn'
      onClick={toggleDarkMode}
      size='large'
    />
  );
};

export default App;
