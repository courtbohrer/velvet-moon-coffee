import { Flex, Image, Stack, IconButton } from '@chakra-ui/react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { useState } from 'react';
import { BsInstagram } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

export const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [showNav, setShowNav] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    setShowNav(latest > 0.15);
  });

  return (
    <AnimatePresence>
      {showNav && (
        <Flex
          align="center"
          position="fixed"
          top={0}
          justify="center"
          width={'full'}
          boxSize="full"
          bg="#F8F1E5"
          height={32}
        >
          <Stack direction={'row'}>
            <Image src={require('../images/moon_vmc.png')} height={20} />
            <Flex paddingTop={4} gap={4}>
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
            </Flex>
          </Stack>
        </Flex>
      )}
    </AnimatePresence>
  );
};
