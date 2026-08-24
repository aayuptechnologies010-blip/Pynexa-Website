import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const Commitment = () => {
  const points = [
    "Clear Communication",
    "Requirement-Focused Development",
    "Professional Design",
    "Reliable Support"
  ];

  return (
    <section className="py-24 bg-[#EBF1FF]">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        <h2 className="text-sm font-bold text-brand-cyan uppercase tracking-widest mb-4">Our Commitment to You</h2>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-brand-navy mb-10 tracking-tight leading-tight max-w-4xl mx-auto"
        >
          Your Goals. Our Expertise. <br />
          <span className="text-brand-primary">One Digital Vision.</span>
        </motion.h3>

        <p className="text-gray-600 font-light text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-16">
          Every project we take on is approached with attention to detail, clear communication, and a commitment to delivering a solution that meets the client's requirements.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {points.map((point, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-sm border border-gray-100"
            >
              <FiCheckCircle className="text-brand-cyan text-xl" />
              <span className="font-bold text-brand-navy text-sm md:text-base">{point}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Commitment;
