import { Flex, Image, Stack, IconButton } from '@chakra-ui/react';
import { BsInstagram } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

export const Navbar = () => {
  return (
    <Flex
      align="center"
      position="fixed"
      top={0}
      justify="center"
      width={'full'}
      boxSize="full"
      bg="#F8F1E5"
      height={32}
      hidden={true} // TODO: show on scroll
    >
      <Stack direction={'row'}>
        <Image src={require('../images/moon_vmc.png')} height={20} />
        <IconButton
          rounded={'full'}
          aria-label="Instagram"
          onClick={() => {
            window.location.href = `https://www.instagram.com/velvetmooncoffee/`;
          }}
          icon={<BsInstagram color="#F8F1E5" size="20px" />}
          _hover={{
            bg: '#8c3839',
          }}
          backgroundColor={'#d49c7f'}
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
            bg: '#8c3839',
          }}
          backgroundColor={'#d49c7f'}
        />
      </Stack>
    </Flex>
  );
};
