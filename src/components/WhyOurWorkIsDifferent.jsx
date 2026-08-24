import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const WhyOurWorkIsDifferent = () => {
  const points = [
    {
      title: "Business First",
      desc: "We build around the actual business requirement."
    },
    {
      title: "Design With Purpose",
      desc: "Every design element has a role."
    },
    {
      title: "User Focused",
      desc: "Simple and intuitive experiences."
    },
    {
      title: "Future Ready",
      desc: "Solutions designed to evolve with the business."
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-brand-navy tracking-tight leading-tight mb-16"
        >
          Built With Purpose. <br className="hidden md:block" />
          <span className="text-brand-primary">Designed For People.</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {points.map((point, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6">
                <FiCheckCircle className="text-brand-primary text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-3">{point.title}</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyOurWorkIsDifferent;
