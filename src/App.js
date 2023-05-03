import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { HeroUnit } from './components/HeroUnit';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HeroUnit />
      <ColorModeSwitcher />
    </ChakraProvider>
  );
}

export default App;
