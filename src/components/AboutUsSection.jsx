import {
  Flex,
  Image,
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react';

export const AboutUsSection = () => {
  return (
    <Flex
      justify="center"
      paddingTop={16}
      paddingBottom={16}
      flexDirection={'row'}
      margin={16}
    >
      <Flex
        flexWrap={{ base: 'nowrap', sm: 'wrap', md: 'nowrap', lg: 'nowrap' }}
        maxW={'6xl'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        // boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
        display={'flex'}
        backgroundColor={'#d49b7f53'}
        flexDirection={'row'}
        gap={16}
      >
        <Image
          borderRadius="full"
          boxSize="250px"
          src={require('../images/AboutUs.png')}
          alt="About Us Photo"
        />
        <Stack>
          <Heading color={'#8C3839'} fontWeight={'light'}>
            About Us
          </Heading>
          <Text flexShrink={1}>
            Hi there! 👋 We are Courtney and Colt of Velvet Moon Coffee. We
            provide specialty coffee catering services in the Catskills and
            greater Hudson Valley region of New York State. <br /> <br />
            We have a full mobile espresso bar that can accomodate any event. We
            are here to caffienate your wedding guests and get them back on the
            dance floor. Keep the juices flowing during an upstate corporate
            retreat. Really anywhere you have a need for craft coffee, we would
            love to be there for you!
            {/* <br /> We believe in coffee as a center for community and
            conversation. We are honored to be invited into your special moments
            and we take hospitality as seriously as our coffee. We will treat
            your guests with care, and provide the little caffiene boost they
            need to get back out on the dance floor! */}
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
};
