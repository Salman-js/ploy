import { BrowserRouter } from 'react-router-dom';
import Routes from './router';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { ChakraProvider } from '@chakra-ui/react';
import '@mantine/core/styles.css';

function App() {
  return (
    <>
      <ColorSchemeScript />
      <MantineProvider>
        <BrowserRouter>
          <ChakraProvider>
            <Routes />
          </ChakraProvider>
        </BrowserRouter>
      </MantineProvider>
    </>
  );
}

export default App;
