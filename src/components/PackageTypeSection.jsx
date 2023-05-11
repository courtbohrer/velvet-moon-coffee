import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

// interface CardProps {
//   heading: string;
//   description: string;
//   icon: ReactElement;
//   href: string;
// }

const Card = ({ heading, description, featureList }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      display={'flex'}
      flexDirection={'column'}
      paddingBottom={'32px'}
    >
      {/* <Stack align={'start'} spacing={2}> */}
      <Box mt={2} alignSelf={'flex-start'}>
        {/* TODO: add cute images */}
        <Heading size="md">{heading}</Heading>
        <Text
          mt={1}
          fontSize={'sm'}
          fontWeight={'medium'}
          paddingTop={4}
          paddingBottom={4}
        >
          {description}
        </Text>
        <Text
          mt={1}
          fontSize="small"
          fontWeight="bold"
          paddingTop={4}
          paddingBottom={2}
        >
          Includes:
        </Text>
      </Box>
      <Box alignSelf={'flex-end'}>
        {featureList}
        <Button
          variant={'link'}
          colorScheme={'blue'}
          size={'sm'}
          onClick={e => {
            window.location.href = 'mailto:hello@velvetmooncoffee.com';
            e.preventDefault();
          }}
        >
          Let's chat!
        </Button>
      </Box>
      {/* </Stack> */}
    </Box>
  );
};

export const PackageTypeSection = () => {
  return (
    <Box p={4} mt={22}>
      <Stack spacing={4} as={Container} maxW={'9xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Package Options
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          We are happy to customize our offerings to fit your event's needs and
          budget. We offer a wide range of options, but here are the three basic
          packages that we can use as a starting ground to build on.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Cold Brew Bar'}
            description={`Our light weight and affordable option. A fun treat to surprise your guests with a special cold brew pick me up! This includes our both a classic cold brew, as well as our house specialty New Orleans Style Cold Brew!`}
            featureList={
              <UnorderedList fontSize={'smaller'}>
                <ListItem>NOLA Cold Brew</ListItem>
                <ListItem>Standard Cold Brew</ListItem>
                <ListItem>Milk Options: Whole, Oat, Almond </ListItem>
                <ListItem>Professional Setup with Cups and Napkins</ListItem>
                <ListItem>Available as Self Service or with Barista</ListItem>
              </UnorderedList>
            }
          />
          <Card
            heading={'Pour Over Bar'}
            description={
              'Treat your guests to a luxury pour over experience with a personal experienced barista.  Our barista will hand pour coffee on site with high quality locally roasted beans. Cold brew is available as an add-on if you want a little hot & cold combo!'
            }
            featureList={
              <UnorderedList fontSize="smaller">
                <ListItem>Unlimited Hand Poured Coffee Service </ListItem>
                <ListItem>Professional Setup with Cups and Napkins</ListItem>
                <ListItem>Experienced Barista Service</ListItem>
              </UnorderedList>
            }
          />
          <Card
            heading={'Full Espresso Bar'}
            description={
              'All the goods! We will bring an espresso machine and full cart to your event. You set the time frame and we will provide unlimited drinks and barista service for your event. '
            }
            featureList={
              <UnorderedList fontSize={'smaller'}>
                <ListItem>Open Espresso Bar</ListItem>
                <ListItem>2 Homemade Specialty Syrups</ListItem>
                <ListItem>
                  Milk Selection: Whole, Oat, Almond (More available upon
                  request)
                </ListItem>
                <ListItem>Cups and Napkins</ListItem>
                <ListItem>Experienced Barista Service</ListItem>
              </UnorderedList>
            }
          />
        </Flex>
      </Container>
    </Box>
  );
};
