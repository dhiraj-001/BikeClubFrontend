import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MembershipSection from '@/components/MembershipSection';
import MerchandiseSection from '@/components/MerchandiseSection';
import EventsSection from '@/components/EventsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MembershipSection />
      <MerchandiseSection />
      <EventsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
