import { motion } from 'framer-motion';
import { FiTarget, FiLayout, FiSettings } from 'react-icons/fi';

const WhatWeOffer = () => {
  const highlights = [
    {
      icon: <FiTarget className="text-3xl" />,
      title: "Business Focused",
      desc: "Solutions created around your actual business requirements."
    },
    {
      icon: <FiLayout className="text-3xl" />,
      title: "Design Driven",
      desc: "Modern and user-friendly interfaces that represent your brand."
    },
    {
      icon: <FiSettings className="text-3xl" />,
      title: "Technology Powered",
      desc: "Reliable and scalable development using modern technologies."
    }
  ];

  return (
    <section className="py-24 bg-[#EBF1FF]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-brand-navy mb-6 tracking-tight leading-tight"
          >
            Solutions That Turn Ideas Into <span className="text-brand-primary">Digital Experiences.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 font-light text-lg leading-relaxed"
          >
            Every business has different goals and requirements. We provide flexible website and web solutions that are designed around your business, audience, and objectives.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
