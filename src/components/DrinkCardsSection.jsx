import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
  FcLike,
} from 'react-icons/fc';

const Card = ({ heading, description, icon }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      // borderColor={'#d49c7f'}
      // borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={8}
      backgroundColor={'#F8F1E5'}
    >
      <Stack align={'start'} spacing={2}>
        {/* <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}
        >
          {icon}
        </Flex> */}
        <Box mt={2} gap={6}>
          <Heading size="md" color={'#a35428'} fontWeight={'light'}>
            {heading}
          </Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export const DrinkCardsSection = () => {
  return (
    <Box p={4} marginY={'24px'}>
      <Stack spacing={4} as={Container} maxW={'5xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Menu Options
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'md' }}>
          Here are a few of our drink and experience offerings. We are happy to
          mix and match to create a custom experience for your event and budget.
          We can set up a self serve Cold Brew Bar, or we can have a full open
          espresso bar with custom syrups and all the works! We would love to
          work with you to add a special touch to your next event.
        </Text>
      </Stack>

      <Container maxW={'8xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Full Espresso Bar'}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description="Get the full coffee shop experience, right at your event! Your favorite espresso drinks prepared on site by our professional baristas with love and care."
          />
          <Card
            heading={'Standard Cold Brew'}
            icon={<Icon as={FcLike} w={10} h={10} />}
            description={`The ultimate pick me up! Available as an addition to an espresso package. Can also be paired with our specialty NOLA cold brew and offered as a Self Service Cold Brew Bar for a more casual and affordable alternative.`}
          />

          <Card
            heading={'New Orleans Style Cold Brew'}
            icon={<Icon as={FcLike} w={10} h={10} />}
            description={
              'This special style of cold brew has been a long time favorite in our house and we are so excited to share it with you! This cold brew is brewed with chicory, giving it a rich chocolate flavor. It is then sweetened and cut with your favorite milk.'
            }
          />
          {/* <Card
            heading={'Decaf Espresso Drinks'}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={`For the guests that can't risk the late night caffeine, we are happy to offer decaf espresso as an added option.`}
          /> */}
          <Card
            heading={'Cascara Soda'}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={`This refreshing soda is made from Cascara, the cherry of the coffee plant that encases the bean we all know and love. Brewed cascara more closely resembles tea, with delicate floral and fruit notes, which we distill into a syrup and serve over ice with sparkling water. It’s a light and refreshing beverage that is less caffeinated your usual coffee drink. This is a great option for warm day events. Or as a non-alcoholic beverage option for sober guests.`}
          />
          {/* <Card
            heading={'Chai'}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={'We are proud to offer high quality '}
          /> */}

          {/* <Card
            heading={'Event Branding'}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={`We are happy to offer a selection of customization options to add a special touch to your event. `}
          /> */}
          {/* <Card
            heading={'Specialty Syrups'}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={`We are proud to offer a variety of syrups made in house. Our typical espresso station comes with 2 homemade syrups. We are happy to work with you to craft a special syrup for the season and your personal taste.  `}
          /> */}
        </Flex>
      </Container>
    </Box>
  );
};
