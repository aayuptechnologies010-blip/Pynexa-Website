import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ownerImg from '../../assets/owner.jpeg';

const FounderHero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 bg-white overflow-hidden flex items-center">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-cyan/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-light border border-gray-200 rounded-full text-brand-primary text-sm font-bold tracking-widest uppercase mb-8">
              MEET THE FOUNDER
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-navy mb-4 tracking-tight leading-none">
              Prem Chandra Gaur
            </h1>
            
            <h2 className="text-xl md:text-2xl text-brand-primary font-bold tracking-widest uppercase mb-8">
              Founder & CEO, PYNEXA Technologies
            </h2>

            <blockquote className="text-2xl md:text-3xl text-gray-700 font-light italic leading-relaxed mb-8 border-l-4 border-brand-cyan pl-6">
              "Turning ideas into digital experiences that help businesses grow."
            </blockquote>

            <p className="text-lg text-gray-600 font-light mb-12 leading-relaxed max-w-xl">
              Prem Chandra Gaur is the Founder & CEO of PYNEXA Technologies, leading the company with a vision to make modern, professional, and business-focused digital solutions accessible to startups, entrepreneurs, and businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#about-founder" className="px-8 py-4 bg-brand-navy hover:bg-gray-800 text-white font-bold uppercase tracking-wider transition-colors shadow-lg rounded-full flex items-center justify-center gap-2 group">
                Know My Story <FiArrowDown className="group-hover:translate-y-1 transition-transform" />
              </a>
              <Link to="/contact" className="px-8 py-4 bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/20 font-bold uppercase tracking-wider transition-colors rounded-full flex items-center justify-center gap-2 group">
                Connect With PYNEXA <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"
          >
            {/* Visual Frame */}
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-brand-cyan/20 rounded-2xl transform rotate-3 scale-105 blur-sm z-0"></div>
              <div className="absolute -inset-4 bg-white/50 border border-gray-100 rounded-2xl backdrop-blur-sm z-0"></div>
              
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden group">
                <img 
                  src={ownerImg} 
                  alt="Prem Chandra Gaur" 
                  className="w-full h-auto aspect-[4/5] object-cover object-top rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-lg shadow-lg border border-gray-100">
                  <p className="text-brand-navy font-black tracking-widest uppercase text-sm">FOUNDER</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FounderHero;
