import React from 'react';
import Hero from '../components/Hero';
import ServiceSection from '../components/ServiceSection';
import Process from '../components/Process';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import { SERVICES } from '../data/servicesData';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Services / Selected Work */}
      <div id="services">
        {SERVICES.map((service, index) => (
          <ServiceSection
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </div>

      {/* 3. Simple Process */}
      <Process />

      {/* 4. Final CTA */}
      <FinalCTA />

      {/* 5. Footer */}
      <Footer />
    </main>
  );
}
