import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  { year: '2014', title: 'Beginning of Organizational Legacy', description: 'The foundation of our organization was laid, starting a journey of growth.' },
  { year: '2015', title: 'Acquired Supportive - NBFC License', description: 'Achieved a major milestone by acquiring the NBFC License.' },
  { year: '2016', title: 'Commencement of Small Ticket Size', description: 'Started secured and unsecured products to serve diverse needs.' },
  { year: '2017', title: 'Partnered with True South', description: 'Secured partnership with True South as an Investor.' },
  { year: '2018', title: 'Milestone of Rs. 0.15 Mn Loan Book', description: 'Successfully grew the loan book, reflecting our rapid expansion.' },
  { year: '2019', title: 'Launched Co-Lending Business', description: 'Expanded business operations into the co-lending space.' },
  { year: '2020 & 2021', title: 'Digital Transformation', description: 'COVID FACED - Stop Working & Initiated Digital Transformation Journey.' },
  { year: '2022', title: 'Venture Into New Loans', description: 'Continuing the journey venture into Secured, Unsecured & Vehicles Loan.' },
  { year: '2023', title: 'Awarded ISI/IEC 27001:2024', description: 'Also recognized as a Great Place to Work.' },
  { year: '2024', title: "NuoG's Group Merger", description: "Merger of AFPL & NGCPL with NuoG's In Oct 2024." },
  { year: '2025', title: 'Launched New Services', description: 'Launched Rental & Societies Management, Multi-Single EMI & Salary Advance Loan.' },
  { year: '2026', title: 'Crossed 45 Mn Loan Book', description: 'Established 17+ Branches and reached a huge milestone in loan book size.' }
];

const OurJourney = () => {
  return (
    <section id="our-journey" className="py-24 bg-brand-light relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4"
          >
            HAUS NUO-Pay Journey
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-brand-navy tracking-tight"
          >
            Our Milestones
          </motion.h3>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-brand-cyan/30 h-full hidden md:block"></div>
          
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center justify-between w-full">
                <div className="hidden md:block w-5/12"></div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="z-20 flex items-center bg-brand-primary shadow-xl w-16 h-16 rounded-full border-4 border-white justify-center text-white font-bold mb-4 md:mb-0"
                >
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full md:w-5/12 bg-white p-6 rounded-2xl shadow-xl border-t-4 border-brand-cyan hover:shadow-2xl transition-shadow"
                >
                  <span className="text-brand-primary font-black text-xl mb-2 block">{item.year}</span>
                  <h4 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed font-light">{item.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;


