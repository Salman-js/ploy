import { RootState } from '@/store/store';
import useDarkMode from '@/utils/useDarkTheme';
import { Button, Switch } from 'antd';
import { MoonStar, SunIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const App = () => {
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
    <Switch
      checkedChildren={
        <MoonStar
          size={21}
          style={{
            color: theme === 'dark' ? 'rgb(221, 227, 236)' : 'black',
          }}
        />
      }
      unCheckedChildren={
        <SunIcon
          size={22}
          style={{
            color: theme === 'dark' ? 'rgb(221, 227, 236)' : '#494b4d',
          }}
        />
      }
      checked={theme === 'dark'}
      onChange={toggleDarkMode}
    />
  );
};

export default App;
