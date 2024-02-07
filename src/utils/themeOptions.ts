import { Theme, ThemeConfig } from 'antd/es/config-provider/context';

export const ployTheme = {
  colors: {
    darkBg: 'rgb(31 41 55)',
  },
  calendarConfig: {},
};

export const getCalendarConfig = (theme: 'dark' | 'light') => {
  const config = {
    Calendar: {
      fullBg: theme === 'dark' ? ployTheme.colors.darkBg : 'white',
      colorBgContainer: theme === 'dark' ? ployTheme.colors.darkBg : 'white',
      itemActiveBg: theme === 'dark' ? 'rgb(82, 105, 138)' : 'white',
      colorText: theme === 'dark' ? 'rgb(221, 227, 236)' : 'black',
      colorTextDisabled: theme === 'dark' ? 'rgb(133, 134, 135)' : '#b6b4b4',
    },
    Select: {
      selectorBg: theme === 'dark' ? 'rgb(82, 105, 138)' : 'white',
      colorBorder:
        theme === 'dark' ? 'rgb(82, 105, 138)' : 'rgb(180, 171, 230)',
      colorPrimary: theme === 'dark' ? 'rgb(221, 227, 236)' : 'black',
      colorText: theme === 'dark' ? 'rgb(221, 227, 236)' : 'black',
      colorBgElevated: theme === 'dark' ? ployTheme.colors.darkBg : 'white',
      optionSelectedBg: theme === 'dark' ? 'rgb(82, 105, 138)' : 'white',
    },
    Radio: {
      buttonBg: theme === 'dark' ? 'rgb(82, 105, 138)' : 'white',
      buttonCheckedBg: theme === 'dark' ? 'rgb(15, 47, 92)' : 'white',
      colorBorder:
        theme === 'dark' ? 'rgb(82, 105, 138)' : 'rgb(180, 171, 230)',
      colorText: theme === 'dark' ? 'rgb(221, 227, 236)' : 'black',
      colorPrimary: theme === 'dark' ? 'rgb(221, 227, 236)' : '#1677ff',
      buttonSolidCheckedColor:
        theme === 'dark' ? 'rgb(221, 227, 236)' : 'black',
    },
  };
  return config;
};

export const getAntdThemeConfig = (theme: 'dark' | 'light'): ThemeConfig => {
  const config: ThemeConfig = {
    components: {
      Modal: {
        contentBg: theme === 'dark' ? 'rgb(51 65 85)' : 'white',
        colorBgElevated: theme === 'dark' ? 'rgb(51 65 85)' : 'white',
      },
      Drawer: {
        colorBgElevated: theme === 'dark' ? 'rgb(51 65 85)' : 'white',
      },
      Dropdown: {
        colorBgElevated: theme === 'dark' ? 'rgb(51 65 85)' : 'white',
      },
      Checkbox: {
        colorPrimary: 'rgb(51 65 85)',
        colorPrimaryHover: 'rgb(51 65 85)',
      },
      Segmented: {
        itemActiveBg: 'transparent',
        itemSelectedBg: theme === 'dark' ? 'rgb(36, 46, 60)' : 'white',
        itemSelectedColor: theme === 'dark' ? 'white' : 'rgb(51 65 85)',
        colorBgContainer: theme === 'dark' ? 'white' : 'rgb(91, 113, 144)',
      },
      Tabs: {
        itemColor: theme === 'dark' ? '#8cc1e0' : 'rgb(51 65 85)',
        colorBorder: theme === 'dark' ? 'rgb(51 65 85)' : 'white',
      },
      List: {
        colorText: theme === 'dark' ? 'white' : 'rgb(51 65 85)',
        colorTextDescription: theme === 'dark' ? '#d2d1d1' : 'rgb(76, 95, 122)',
      },
    },
  };
  return config;
};
