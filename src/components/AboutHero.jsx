import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import aboutHeroImage from '../assets/about_hero.png';

const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-24 bg-brand-light overflow-hidden">
      {/* Subtle Blue Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary text-sm font-bold tracking-widest uppercase mb-8 border border-brand-primary/20">
              ABOUT PYNEXA TECHNOLOGIES
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6 tracking-tight leading-tight">
              Building Digital Experiences That <br className="hidden md:block"/>
              <span className="text-brand-primary">Move Businesses Forward.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 font-light mb-10 leading-relaxed max-w-xl">
              PYNEXA Technologies is a modern Website & Web Solutions company helping startups, entrepreneurs, professionals, and businesses build a strong, professional, and impactful digital presence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services" className="px-8 py-4 bg-brand-primary hover:bg-brand-cyan text-white font-bold uppercase tracking-wider transition-colors shadow-lg rounded-full flex items-center justify-center gap-2">
                Explore Our Services <FiArrowRight />
              </Link>
              <Link to="/get-quote" className="px-8 py-4 border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-bold uppercase tracking-wider transition-colors rounded-full flex items-center justify-center gap-2">
                Talk to Us <FiArrowRight />
              </Link>
            </div>
          </motion.div>

          {/* Right Technology Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Glow Behind Image */}
              <div className="absolute inset-0 bg-brand-primary/20 rounded-full blur-[80px]"></div>
              
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img 
                  src={aboutHeroImage} 
                  alt="Software Development Technology" 
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl drop-shadow-[0_20px_50px_rgba(7,91,255,0.2)] border border-gray-100"
                />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
