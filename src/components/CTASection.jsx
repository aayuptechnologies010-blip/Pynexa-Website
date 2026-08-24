import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const CTASection = () => {
  return (
    <section className="relative py-24 bg-brand-navy overflow-hidden">
      {/* Tech Abstract Pattern Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMGM2ZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] pointer-events-none"></div>
      
      {/* Subtle Blue Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Have an Idea? <br/>
            <span className="text-brand-cyan">Let's Build It Together.</span>
          </h2>
          <p className="text-xl text-gray-300 font-light mb-12 leading-relaxed">
            Tell us about your business and let us help you turn your idea into a powerful digital experience.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/get-quote" 
              className="w-full sm:w-auto px-10 py-5 bg-brand-primary hover:bg-brand-cyan text-white font-bold uppercase tracking-wider transition-colors shadow-[0_0_20px_rgba(7,91,255,0.4)] flex items-center justify-center gap-2 rounded-full"
            >
              Start Your Project <FiArrowRight />
            </Link>
            
            <a 
              href="https://wa.me/918081522864" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(37,211,102,0.4)] rounded-full"
            >
              <FaWhatsapp className="text-2xl" /> WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
