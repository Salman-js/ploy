import { Button } from 'antd';
import { MoonStar, SunIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const App = () => {
  // Retrieve dark mode preference from local storage, default to true
  const storedDarkMode = JSON.parse(localStorage.getItem('darkMode')) ?? true;
  const [isDarkMode, setIsDarkMode] = useState(storedDarkMode);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Save dark mode preference to local storage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    // Apply dark mode styles dynamically
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <Button
      icon={isDarkMode ? <SunIcon /> : <MoonStar />}
      type='text'
      shape='circle'
      className='btm-nav-btn'
      onClick={toggleDarkMode}
      size='large'
    />
  );
};

export default App;
