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
          Drink Options
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
            description="For our full espresso bar service, we will provide unlimited espresso drinks to your guests, freshly ground and pulled onsite by an experienced barista."
          />
          <Card
            heading={'Standard Cold Brew'}
            icon={<Icon as={FcLike} w={10} h={10} />}
            description={
              'The ultimate pick me up! Available as an addition to an espresso package. Also offered as a Self Service Cold Brew Bar for a more affordable alternative.'
            }
          />
          <Card
            heading={'Decaf Espresso Drinks'}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={`For the guests that can't risk the late night caffiene, we are happy to bring an extra grinder of decaf beans with our espresso setup.`}
          />
          <Card
            heading={'New Orleans Style Cold Brew'}
            icon={<Icon as={FcLike} w={10} h={10} />}
            description={
              'This special style of cold brew has been a long time favorite in our house and we are so excited to share it with you! This style of cold brew is brewed with chicory, giving it a rich chocolate flavor. It is then sweetened with simple syrup and cut with your favorite milk.'
            }
          />
          <Card
            heading={'Cascara Soda'}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={`This refreshing soda is made from Cascara, the cherry of the coffee plant. The plant has floral fruity notes that more closely resemble tea. We create a syrup from the cascara and combine with soda water, to make a light refreshing beverage that is less caffinated than it's coffee bean based siblings. This is a great option for warm day events. Or as an N/A beverage option for the sober guests at your party.`}
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
          <Card
            heading={'Specialty Syrups'}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={`We are proud to offer a variety of syrups made in house. Our typical espresso station comes with 2 homemade syrups. We are happy to work with you to craft a special syrup for the season and your personal taste.  `}
          />
        </Flex>
      </Container>
    </Box>
  );
};
