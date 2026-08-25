import { motion } from 'framer-motion';
import aboutS2Image from '../assets/about_s2.png';

const MissionVision = () => {
  return (
    <div className="bg-white">
      {/* Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">Our Mission</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6 tracking-tight leading-tight">
                To make professional digital solutions simple, accessible, and valuable for businesses of every size.
              </h3>
              <p className="text-gray-600 font-light text-lg leading-relaxed">
                We aim to understand the unique requirements of every client and deliver digital solutions that are practical, modern, user-friendly, and aligned with their business objectives.
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6">
              <div className="bg-brand-light p-6 rounded-xl border-l-4 border-brand-primary">
                <h4 className="text-lg font-bold text-brand-navy mb-2">Accessibility</h4>
                <p className="text-gray-600 font-light text-sm">Professional web solutions accessible to businesses of different sizes.</p>
              </div>
              <div className="bg-brand-light p-6 rounded-xl border-l-4 border-brand-cyan">
                <h4 className="text-lg font-bold text-brand-navy mb-2">Quality</h4>
                <p className="text-gray-600 font-light text-sm">Focus on design, performance and development quality.</p>
              </div>
              <div className="bg-brand-light p-6 rounded-xl border-l-4 border-brand-navy">
                <h4 className="text-lg font-bold text-brand-navy mb-2">Value</h4>
                <p className="text-gray-600 font-light text-sm">Solutions designed to create meaningful business impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-[#EBF1FF]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-sm font-bold text-brand-cyan uppercase tracking-widest mb-4">Our Vision</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6 tracking-tight leading-tight">
                To build a technology-driven company that empowers businesses with simple, powerful, and professional digital solutions.
              </h3>
              <p className="text-gray-600 font-light text-lg leading-relaxed">
                We envision PYNEXA Technologies as a trusted digital partner for businesses looking to transform their ideas into meaningful digital experiences.
              </p>
            </div>
            
            <div className="w-full lg:w-1/2 relative flex justify-center items-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 bg-brand-primary/10 rounded-full blur-[80px]"></div>
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
                  className="relative z-10"
                >
                  <img 
                    src={aboutS2Image} 
                    alt="PYNEXA Vision and Technology" 
                    className="w-full h-auto object-cover rounded-2xl shadow-2xl drop-shadow-[0_20px_50px_rgba(7,91,255,0.2)] border border-gray-100"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;
