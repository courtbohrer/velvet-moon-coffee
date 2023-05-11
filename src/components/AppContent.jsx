import { Container } from '@chakra-ui/react';
import { ContactSection } from './ContactSection';
import { HeroUnit } from './HeroUnit';
import { DrinkCardsSection } from './DrinkCardsSection';
import { AboutUsSection } from './AboutUsSection';
import { Navbar } from './Navbar';

export const AppContent = () => {
  return (
    <Container maxW="full" paddingX={0}>
      <HeroUnit />
      <Navbar />
      <AboutUsSection />
      <DrinkCardsSection />
      <ContactSection />
    </Container>
  );
};
