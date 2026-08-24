import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiLayout, FiCheckCircle, FiSend } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-brand-navy">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-cyan/5 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMGM2ZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyIvPjwvc3ZnPg==')] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 border border-brand-primary/30 rounded-full text-brand-cyan text-sm font-bold tracking-widest uppercase mb-8">
              <span><FiSend /></span> Website & Web Solutions
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-white">
              We Build Digital Experiences That <br className="hidden md:block" />
              <span className="text-brand-cyan">Help Businesses Grow.</span>
            </h1>
            
            <div className="flex flex-wrap items-center gap-3 text-brand-cyan text-sm md:text-base font-bold tracking-widest uppercase mb-6">
              <span>Ideas</span> <FiArrowRight className="text-gray-500" />
              <span>Design</span> <FiArrowRight className="text-gray-500" />
              <span>Develop</span> <FiArrowRight className="text-gray-500" />
              <span>Grow</span>
            </div>

            <p className="text-lg md:text-xl text-gray-400 mb-10 font-light leading-relaxed max-w-xl">
              PYNEXA Technologies helps startups, entrepreneurs and businesses build modern, responsive and professional digital solutions that create a strong online presence.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/get-quote"
                className="w-full sm:w-auto px-8 py-4 bg-brand-primary hover:bg-brand-cyan text-white font-bold uppercase tracking-wider transition-colors shadow-[0_0_20px_rgba(7,91,255,0.4)] flex items-center justify-center gap-2 rounded-full"
              >
                Get a Free Quote <FiArrowRight />
              </Link>
              <Link
                to="/portfolio"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/20 hover:bg-brand-cyan hover:border-brand-cyan text-white font-bold uppercase tracking-wider transition-colors flex items-center justify-center text-center rounded-full"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>

          {/* Right Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-full aspect-[4/3] flex items-center justify-center">
              {/* Decorative Circle */}
              <div className="absolute inset-0 bg-brand-primary/20 rounded-full blur-[80px]"></div>
              
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative z-10 w-full"
              >
                <img 
                  src="/src/assets/home_hero section.png" 
                  alt="PYNEXA Technologies Web Solutions" 
                  className="w-full h-auto object-contain rounded-2xl drop-shadow-[0_20px_50px_rgba(0,198,255,0.2)]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Small Stats Below Hero */}
        <div className="mt-20 border-t border-gray-800 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <FiCheckCircle className="text-brand-cyan text-3xl" />
              <div>
                <h4 className="text-white font-bold tracking-wider uppercase">Custom Solutions</h4>
                <p className="text-gray-500 text-sm font-light">Tailored to your needs</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <FiLayout className="text-brand-cyan text-3xl" />
              <div>
                <h4 className="text-white font-bold tracking-wider uppercase">Responsive Design</h4>
                <p className="text-gray-500 text-sm font-light">Flawless on all devices</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-end">
              <FiCode className="text-brand-cyan text-3xl" />
              <div>
                <h4 className="text-white font-bold tracking-wider uppercase">Business Focused</h4>
                <p className="text-gray-500 text-sm font-light">Built for growth</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
