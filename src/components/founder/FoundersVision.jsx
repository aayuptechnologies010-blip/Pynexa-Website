import { motion } from 'framer-motion';

const FoundersVision = () => {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold text-brand-cyan uppercase tracking-widest mb-6">
            FOUNDER'S VISION
          </h2>
          <h3 className="text-2xl md:text-3xl text-gray-300 font-light mb-12">
            Building a Technology-Driven Company for Modern Businesses.
          </h3>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <blockquote className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              <span className="text-brand-primary">"</span>To build a technology-driven company that empowers businesses with <span className="text-brand-cyan">simple, powerful, and professional</span> digital solutions.<span className="text-brand-primary">"</span>
            </blockquote>
          </motion.div>
          
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
            Prem believes that every business, regardless of its size or stage, deserves a strong digital identity. Through PYNEXA Technologies, he aims to make high-quality web solutions accessible while creating digital experiences that deliver genuine value to clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoundersVision;
