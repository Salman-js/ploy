import { BrowserRouter } from 'react-router-dom';
import Routes from './router';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { ChakraProvider } from '@chakra-ui/react';
import '@mantine/core/styles.css';
import { ConfigProvider } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { getAntdThemeConfig } from './utils/themeOptions';

function App() {
  const { theme } = useSelector((state: RootState) => state.theme);
  return (
    <MantineProvider>
      <ColorSchemeScript />
      <BrowserRouter>
        <ChakraProvider>
          <ConfigProvider theme={getAntdThemeConfig(theme)}>
            <Routes />
          </ConfigProvider>
        </ChakraProvider>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
