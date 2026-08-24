import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ServicesHero = () => {
  const highlights = [
    "Modern Design",
    "Responsive",
    "Custom Solutions",
    "Business Focused"
  ];

  return (
    <section className="relative pt-32 pb-24 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary text-sm font-bold tracking-widest uppercase mb-8 border border-brand-primary/20">
              OUR SERVICES
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6 tracking-tight leading-tight">
              Digital Solutions Built Around <span className="text-brand-primary">Your Business.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 font-light mb-10 leading-relaxed max-w-xl">
              From professional business websites to custom web solutions, PYNEXA Technologies helps businesses build modern, responsive, and effective digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/get-quote" className="px-8 py-4 bg-brand-primary hover:bg-brand-cyan text-white font-bold uppercase tracking-wider transition-colors shadow-lg rounded-full flex items-center justify-center gap-2">
                Get a Free Quote <FiArrowRight />
              </Link>
              <a href="#services-list" className="px-8 py-4 bg-brand-light text-brand-navy hover:bg-gray-200 font-bold uppercase tracking-wider transition-colors rounded-full flex items-center justify-center gap-2">
                Explore Services <span className="rotate-90"><FiArrowRight /></span>
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                  <div className="w-5 h-5 rounded-full bg-brand-cyan/20 flex items-center justify-center">
                    <FiCheck className="text-brand-cyan text-xs" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative flex justify-center items-center h-auto min-h-[400px] lg:min-h-[500px]"
          >
            {/* Modern Web Development Visual Mockup */}
            <div className="relative w-full max-w-2xl flex justify-center items-center">
              
              {/* Abstract Glow Background */}
              <div className="absolute inset-0 bg-brand-primary/20 blur-[80px] rounded-full"></div>
              
              {/* Hero Image */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative z-10 w-full flex items-center justify-center"
              >
                <img 
                  src="/src/assets/service_hero.png" 
                  alt="PYNEXA Digital Services" 
                  className="w-full lg:scale-110 h-auto object-contain drop-shadow-[0_20px_50px_rgba(7,91,255,0.2)]"
                />
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
