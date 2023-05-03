import { Box, Heading, Container, Text, Button, Stack } from '@chakra-ui/react';
import '@fontsource/lobster';
import '@fontsource/montserrat';

export const HeroUnit = () => {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 4, md: 8 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={400}
            fontSize={{ base: '4xl', sm: '6xl', md: '8xl' }}
            fontFamily={`'Lobster', cursive`}
            lineHeight={'50%'}
            color={'purple.400'}
          >
            Velvet Moon <br />
            <Text
              as={'span'}
              color={'gray'}
              fontWeight={600}
              fontFamily={`'Montserrat', sans-serif`}
              fontSize={{ base: '2xl', sm: '2xl', md: '4xl' }}
            >
              COFFEE
            </Text>
          </Heading>
          <Text color={'gray'} fontFamily={`'Montserrat', sans-serif`}>
            Coffee Pop-Ups and Event Catering
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Button
              colorScheme={'purple.400'}
              bg={'navy'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'purple.400',
              }}
              onClick={e => {
                window.location.href = 'mailto:hello@velvetmooncoffee.com';
                e.preventDefault();
              }}
            >
              Book Us
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
