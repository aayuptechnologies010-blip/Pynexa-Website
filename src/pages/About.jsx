import AboutHero from '../components/AboutHero';
import WhoWeAre from '../components/WhoWeAre';
import WhatWeBelieve from '../components/WhatWeBelieve';
import MissionVision from '../components/MissionVision';
import HowWeWork from '../components/HowWeWork';
import WhatWeDoOverview from '../components/WhatWeDoOverview';
import WhyChooseUs from '../components/WhyChooseUs';
import CoreValues from '../components/CoreValues';
import Commitment from '../components/Commitment';
import CTASection from '../components/CTASection';
import OurJourney from '../components/OurJourney';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ownerImg from '../assets/owner.jpeg';

// Internal component for Founder Overview to match the exact spec
const FounderOverview = () => {
  return (
    <section className="py-24 bg-[#F5F8FF]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 flex justify-center relative"
          >
            {/* Glowing background behind image */}
            <div className="absolute inset-0 bg-brand-primary/20 blur-[80px] rounded-full"></div>
            
            <div className="relative z-10 w-full max-w-sm">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-cyan/30 p-2 bg-white relative">
                <img 
                  src={ownerImg} 
                  alt="Prem Chandra Gaur" 
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-brand-navy p-4 rounded-xl shadow-xl border-b-4 border-brand-cyan">
                <p className="text-white font-bold tracking-widest uppercase text-xs">Founder & CEO</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3"
          >
            <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">Meet the Founder</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-navy mb-2 tracking-tight">Prem Chandra Gaur</h3>
            <h4 className="text-xl text-gray-500 font-bold tracking-widest uppercase mb-8">Founder & CEO, PYNEXA Technologies</h4>
            
            <blockquote className="text-2xl text-gray-700 font-light italic leading-relaxed mb-8 border-l-4 border-brand-cyan pl-6">
              "Turning ideas into digital experiences that help businesses grow."
            </blockquote>
            
            <p className="text-gray-600 text-lg leading-relaxed font-light mb-10">
              Prem Chandra Gaur is the Founder & CEO of PYNEXA Technologies, a modern Website & Web Solutions company focused on helping startups, entrepreneurs, and businesses establish a strong digital presence.
            </p>

            <Link to="/founder" className="inline-block px-8 py-4 bg-brand-navy text-white font-bold uppercase tracking-widest hover:bg-brand-primary transition-colors rounded-full shadow-lg">
              Meet the Founder
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <div className="bg-brand-light">
      {/* 01. Hero */}
      <AboutHero />

      {/* 02. Who We Are */}
      <WhoWeAre />

      {/* 03. What We Believe */}
      <WhatWeBelieve />

      {/* 04 & 05. Mission & Vision */}
      <MissionVision />

      {/* 06. Our Approach */}
      <HowWeWork />

      {/* 07. What We Do */}
      <WhatWeDoOverview />

      {/* 08. Why Choose PYNEXA */}
      <WhyChooseUs />

      {/* 09. Meet The Founder */}
      <FounderOverview />

      {/* 10. Our Core Values */}
      <CoreValues />

      {/* 11. Our Commitment */}
      <Commitment />

      {/* Our Journey */}
      <OurJourney />

      {/* 12. Final CTA */}
      <CTASection />
    </div>
  );
};

export default About;

