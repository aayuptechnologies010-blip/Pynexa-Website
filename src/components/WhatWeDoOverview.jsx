import { motion } from 'framer-motion';
import { FiMonitor, FiShoppingCart, FiLayout, FiCode, FiFileText, FiTool } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const WhatWeDoOverview = () => {
  const capabilities = [
    {
      title: "Website Development",
      desc: "Professional business and corporate websites.",
      icon: <FiMonitor className="text-3xl text-brand-primary" />
    },
    {
      title: "E-Commerce Solutions",
      desc: "Modern online stores designed for selling online.",
      icon: <FiShoppingCart className="text-3xl text-brand-cyan" />
    },
    {
      title: "UI/UX & Web Design",
      desc: "User-focused and responsive digital interfaces.",
      icon: <FiLayout className="text-3xl text-brand-primary" />
    },
    {
      title: "Custom Web Solutions",
      desc: "Web solutions built around specific business requirements.",
      icon: <FiCode className="text-3xl text-brand-cyan" />
    },
    {
      title: "Landing Pages",
      desc: "Focused landing pages for campaigns, products and services.",
      icon: <FiFileText className="text-3xl text-brand-primary" />
    },
    {
      title: "Website Support",
      desc: "Maintenance, updates and ongoing technical support.",
      icon: <FiTool className="text-3xl text-brand-cyan" />
    }
  ];

  return (
    <section className="py-24 bg-[#EBF1FF]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">What We Do</h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            We provide end-to-end website and web solutions designed around the unique needs of modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-6 bg-brand-light w-14 h-14 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">{item.title}</h3>
              <p className="text-gray-500 font-light text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services" className="inline-block px-8 py-4 border-2 border-brand-navy text-brand-navy font-bold uppercase tracking-widest rounded-full hover:bg-brand-navy hover:text-white transition-colors shadow-sm">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoOverview;
