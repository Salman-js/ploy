import { BrowserRouter } from 'react-router-dom';
import Routes from './router';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { ChakraProvider } from '@chakra-ui/react';
import '@mantine/core/styles.css';
import { ConfigProvider } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

function App() {
  const { theme } = useSelector((state: RootState) => state.theme);
  return (
    <MantineProvider>
      <ColorSchemeScript />
      <BrowserRouter>
        <ChakraProvider>
          <ConfigProvider
            theme={{
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
                  itemSelectedBg:
                    theme === 'dark' ? 'rgb(36, 46, 60)' : 'white',
                  itemSelectedColor:
                    theme === 'dark' ? 'white' : 'rgb(51 65 85)',
                  colorBgContainer:
                    theme === 'dark' ? 'white' : 'rgb(91, 113, 144)',
                },
              },
            }}
          >
            <Routes />
          </ConfigProvider>
        </ChakraProvider>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
