import { motion } from 'framer-motion';
import { FiGlobe, FiShoppingCart, FiBarChart2, FiUsers, FiSmartphone, FiSettings } from 'react-icons/fi';

const WhatWeCanBuild = () => {
  const capabilities = [
    { icon: <FiGlobe />, title: "Business Websites", desc: "Corporate and professional websites." },
    { icon: <FiShoppingCart />, title: "E-Commerce", desc: "Online stores and shopping platforms." },
    { icon: <FiBarChart2 />, title: "Dashboards", desc: "Admin panels and business dashboards." },
    { icon: <FiUsers />, title: "Customer Portals", desc: "User and customer management systems." },
    { icon: <FiSmartphone />, title: "Responsive Web Experiences", desc: "Mobile-first responsive websites." },
    { icon: <FiSettings />, title: "Custom Web Applications", desc: "Business-specific web applications." }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-navy tracking-tight leading-tight mb-16">
          What We Can <span className="text-brand-primary">Build</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {capabilities.map((cap, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-light p-8 rounded-2xl border border-transparent hover:border-brand-primary/20 hover:shadow-lg transition-all text-left flex flex-col items-start gap-4"
            >
              <div className="text-4xl">{cap.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{cap.title}</h3>
                <p className="text-gray-600 font-light text-sm">{cap.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeCanBuild;
