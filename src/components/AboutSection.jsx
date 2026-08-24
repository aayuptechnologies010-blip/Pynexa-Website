import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ownerImg from '../assets/owner.jpeg'; 

const AboutSection = () => {

  return (
    <section id="about" className="py-24 relative bg-brand-light text-brand-navy">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[2px] bg-brand-primary"></div>
              <h2 className="text-brand-primary font-bold tracking-widest uppercase text-sm">About PYNEXA</h2>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tighter text-brand-navy">
              Visionary Leadership for a <br/>
              <span className="text-brand-primary">Digital World</span>
            </h3>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed font-light">
              With a vision to make technology simple, accessible, and business-focused, we lead with a strong commitment to <strong className="text-brand-navy font-bold">innovation, quality, creativity, and customer satisfaction</strong>.
            </p>
            
            <p className="text-gray-600 mb-10 leading-relaxed font-light">
              Our approach goes beyond simply building websites. We focus on understanding each client's business, identifying their digital requirements, and creating solutions that are modern, responsive, user-friendly, scalable, and aligned with business objectives.
            </p>

            <Link 
              to="/about"
              className="inline-block px-8 py-4 bg-brand-navy hover:bg-brand-primary text-white font-bold uppercase tracking-widest transition-colors rounded-full shadow-lg"
            >
              Read Full Story
            </Link>
          </motion.div>

          {/* Image/Visual Column - Fixed Image Fit and Overflow */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative flex justify-center"
          >
            {/* Soft background shape */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-[110%] bg-white rounded-3xl shadow-xl -z-10 rotate-3"></div>
            
            <div className="relative z-10 p-2 w-full max-w-md">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                <img 
                  src={ownerImg} 
                  alt="Prem Chandra Gaur - Founder & CEO" 
                  className="w-full h-auto object-contain"
                />
              </div>
              
              {/* Floating Name Card */}
              <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-5 md:p-6 shadow-2xl border-l-4 border-brand-primary rounded-r-xl">
                <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-1 tracking-tight">Prem Chandra Gaur</h3>
                <p className="text-brand-primary font-bold tracking-widest uppercase text-xs">Founder & CEO</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
