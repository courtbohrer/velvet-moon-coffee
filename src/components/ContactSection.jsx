import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

// NOTE TO SELF: need to set up email api link to send email directly

export const ContactSection = () => {
  // const formResponse = {
  //   name: document.getElementById('form-name')?.value || '',
  //   replyTo: document.getElementById('form-email')?.value || '',
  //   message: document.getElementById('form-message')?.value || '',
  // };

  const form = useRef();

  const handleSubmit = () => {
    emailjs
      .sendForm(
        'service_yfo34zt',
        'template_835iphs',
        form,
        'jEZiruA2PhO22W-WP'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container
      backgroundImage={
        'url(https://images.unsplash.com/photo-1606306279930-8b1a0bb73386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
    >
      <Flex>
        <Box
          bg="#8c3839c5"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 4, md: 10, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>CONTACT</Heading>
                  <Text
                    mt={{ sm: 3, md: 4, lg: 8 }}
                    color="gray.100"
                    maxWidth={'400px'}
                    fontWeight={'semibold'}
                  >
                    Interested? We would love to chat about your event and come
                    up with a custom package for you!
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="100%"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #CEDEEB' }}
                        leftIcon={<MdEmail color="#CEDEEB" size="20px" />}
                        justifyContent={'start'}
                        onClick={e => {
                          window.location.href = `mailto:hello@velvetmooncoffee.com`;
                          e.preventDefault();
                        }}
                      >
                        hello@velvetmooncoffee.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="100%"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #CEDEEB' }}
                        leftIcon={<BsInstagram color="#CEDEEB" size="20px" />}
                        justifyContent={'start'}
                        onClick={e => {
                          window.location.href = `https://www.instagram.com/courtbohrer/`;
                        }}
                      >
                        @velvetmooncoffee
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="100%"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #CEDEEB' }}
                        leftIcon={<MdPhone color="#CEDEEB" size="20px" />}
                        justifyContent={'start'}
                        href="tel:+18458530388"
                      >
                        (845) 853-0388
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  ></HStack>
                </Box>
              </WrapItem>
              {/* <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5} ref={form}>
                      <FormControl id="form-name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="form-email">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="form-message">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="submit" float="right">
                        <Button
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}
                          onClick={e => {
                            e.preventDefault();
                            handleSubmit();
                          }}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem> */}
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};
