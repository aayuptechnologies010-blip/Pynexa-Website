import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import portfolioHeroImg from '../assets/portfolio_hero.jpg';

const PortfolioHero = () => {
  return (
    <section className="relative pt-32 pb-24 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary text-sm font-bold tracking-widest uppercase mb-8 border border-brand-primary/20">
              FEATURED PROJECTS
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6 tracking-tight leading-tight">
              Ideas We've Turned Into <span className="text-brand-primary">Digital Experiences.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 font-light mb-10 leading-relaxed max-w-xl">
              Explore selected website and web solutions designed and developed by PYNEXA Technologies for businesses, entrepreneurs, professionals, and growing brands.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/get-quote" className="px-8 py-4 bg-brand-primary hover:bg-brand-cyan text-white font-bold uppercase tracking-wider transition-colors shadow-lg rounded-full flex items-center justify-center gap-2">
                Start Your Project <FiArrowRight />
              </Link>
              <a href="#portfolio-grid" className="px-8 py-4 bg-brand-light text-brand-navy hover:bg-gray-200 font-bold uppercase tracking-wider transition-colors rounded-full flex items-center justify-center gap-2">
                Explore Projects <span className="rotate-90"><FiArrowRight /></span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative flex justify-center items-center h-[400px] lg:h-[500px]"
          >
            <div className="relative w-full max-w-lg">
              
              <div className="absolute inset-0 bg-brand-cyan/20 blur-[80px] rounded-full"></div>
              
              {/* Image Mockup */}
              <motion.img 
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                src={portfolioHeroImg}
                alt="PYNEXA Digital Experiences"
                className="relative z-10 w-full max-w-[500px] h-auto object-contain rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              />

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
