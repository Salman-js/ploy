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
