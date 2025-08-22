import { Metadata } from 'next';
import React from 'react'
import Statistics from './components/Statistics';
import MissionVision from './components/MissionVision';
import WhyUs from './components/WhyUs';
import OurValues from './components/ourValues';
import Challenges from './components/Challenges';
import ContactUs from '@/components/ContactUs';
import { Quote } from 'lucide-react';
import Hero from './components/Hero';

export const metadata: Metadata = {
  title: "Classy Endeavours",
  keywords: [
    "Classy Endeavours",
    "IT Company",
    "SaaS Innovation",
    "Software Solutions",
    "Digital Transformation",
    "Business Operations",
  ],
  description:
    "Classy Endeavours is an IT company leading in SaaS innovation. We create cutting-edge, scalable software solutions that transform business operations, fueling success in the digital era.",
};

const AboutUsPage = () => {
  return (
    <>
      <Hero />
      <Statistics />
      <MissionVision />
      <WhyUs />
      <Challenges />
      <OurValues />
      <ContactUs />
    </>
  )
}

export default AboutUsPage