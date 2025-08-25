
import React from 'react';
import AppLayout from '@/components/AppLayout';
import { AppProvider } from '@/contexts/AppContext';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutSection from '@/components/AboutSection';
import EmailSignup from '@/components/EmailSignup';

const Index: React.FC = () => {
  return (
    <AppProvider>
      <AppLayout>
        <HeroSection />
        <FeaturedProducts />
        <AboutSection />
        <EmailSignup />
      </AppLayout>
    </AppProvider>
  );
};

export default Index;
