import {
  Heading,
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Image,
  IconButton,
} from '@chakra-ui/react';
import '@fontsource/montserrat';
import '@fontsource/bowlby-one';
import { BsInstagram } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { BsChevronCompactDown } from 'react-icons/bs';

export const HeroUnit = () => {
  return (
    <Flex
      w={'full'}
      h={'75vh'}
      // backgroundImage={
      //   'url(https://images.unsplash.com/photo-1606306279930-8b1a0bb73386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80)'
      // }
      // backgroundSize={'cover'}
      // backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        //bgGradient={'linear(to-r, blackAlpha.800,#39315d86)'}
        backgroundColor={'#F8F1E5'}
      >
        <Stack maxW={'9xl'} align={'flex-start'} spacing={6} textAlign="center">
          <Image src={require('../images/VMCWavy.png')} maxH={260} />
          {/* <Text
            color={'white'}
            fontFamily={`'Montserrat', sans-serif`}
            fontWeight={'bold'}
            textAlign={'center'}
            alignSelf={'center'}
            fontSize={'large'}
          >
            Pop-up Coffee Shop & Event Catering
          </Text> */}

          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
            gap={8}
          >
            <Stack direction={'row'}>
              <IconButton
                rounded={'full'}
                aria-label="Instagram"
                onClick={() => {
                  window.location.href = `https://www.instagram.com/velvetmooncoffee/`;
                }}
                icon={<BsInstagram color="#F8F1E5" size="20px" />}
                _hover={{
                  bg: '#d49c7f',
                }}
                backgroundColor={'#8c3839'}
              />
              <IconButton
                rounded={'full'}
                aria-label="Email"
                onClick={e => {
                  window.location.href = `mailto:hello@velvetmooncoffee.com`;
                  e.preventDefault();
                }}
                icon={<MdEmail color="#F8F1E5" size="20px" />}
                _hover={{
                  bg: '#d49c7f',
                }}
                backgroundColor={'#8c3839'}
              />
            </Stack>
            {/* TODO: add hash scroll setup, then make the hero unit 100 again
            <IconButton
              colorScheme={'#a35428'}
              bg={'#d49c7f'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: '#8c3839',
              }}
              icon={<BsChevronCompactDown />}
            /> */}
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};
