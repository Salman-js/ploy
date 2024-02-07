import { RootState } from '@/store/store';
import { Button, ButtonProps, ConfigProvider, Tooltip } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
type ployButtonProps = ButtonProps & {
  tooltip?: string;
};
export const PloyButton: React.FC<ployButtonProps> = (props) => {
  return (
    <ButtonConfigProvider>
      <Tooltip title={props.tooltip}>
        <Button {...props}>{props.children}</Button>
      </Tooltip>
    </ButtonConfigProvider>
  );
};
type configProviderProps = {
  children: React.ReactNode;
};
const ButtonConfigProvider: React.FC<configProviderProps> = ({ children }) => {
  const { theme } = useSelector((state: RootState) => state.theme);
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: theme === 'dark' ? 'rgb(51 65 85)' : '#1677ff',
            colorPrimaryHover:
              theme === 'dark' ? 'rgb(63, 80, 103)' : '#4096ff',
            colorPrimaryActive:
              theme === 'dark' ? 'rgb(63, 80, 103)' : '#4096ff',
            defaultBg: 'transparent',
            defaultBorderColor: 'rgb(63, 80, 103)',
            defaultColor: theme === 'dark' ? 'white' : 'rgb(51 65 85)',
            colorText: theme === 'dark' ? 'white' : 'rgb(51 65 85)',
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
