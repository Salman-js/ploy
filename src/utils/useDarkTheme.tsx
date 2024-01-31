import { changeTheme } from '@/store/slices/theme.slice';
import { RootState } from '@/store/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useDarkMode = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  const setDarkMode = () => {
    dispatch(changeTheme());
  };
  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    theme === 'dark' ? bodyClass.add(className) : bodyClass.remove(className);
  }, [theme]);
  return [setDarkMode];
};

export default useDarkMode;
