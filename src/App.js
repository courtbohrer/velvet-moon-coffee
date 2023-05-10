import React from 'react';
import {
  ChakraProvider,
  extendTheme
} from '@chakra-ui/react';
import { AppContent } from './components/AppContent';
import '@fontsource/montserrat';
import '@fontsource/bowlby-one';
import "@fontsource/titan-one"

const theme = extendTheme({
  fonts: {
    heading: `"Titan One", cursive`,
    body: `'Montserrat', sans-serif`,
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppContent />
    </ChakraProvider>
  );
}

export default App;
