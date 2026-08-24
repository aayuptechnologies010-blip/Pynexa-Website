import { motion } from 'framer-motion';
import { FiMonitor, FiGlobe, FiShoppingCart, FiLayout, FiSettings, FiSend, FiCloud, FiTool } from 'react-icons/fi';

const CoreExpertise = () => {
  const expertise = [
    {
      icon: <FiMonitor />,
      title: "Website & Web Development",
      desc: "Modern and responsive web experiences."
    },
    {
      icon: <FiGlobe />,
      title: "Business Website Development",
      desc: "Professional websites for businesses and organizations."
    },
    {
      icon: <FiShoppingCart />,
      title: "E-Commerce Solutions",
      desc: "Digital storefronts for businesses selling online."
    },
    {
      icon: <FiLayout />,
      title: "UI/UX & Responsive Design",
      desc: "Clean and user-focused interfaces."
    },
    {
      icon: <FiSettings />,
      title: "Custom Web Solutions",
      desc: "Solutions designed around unique requirements."
    },
    {
      icon: <FiSend />,
      title: "Landing Page Development",
      desc: "Focused pages for products, campaigns, and services."
    },
    {
      icon: <FiCloud />,
      title: "Domain & Hosting Setup",
      desc: "Helping businesses take their websites live."
    },
    {
      icon: <FiTool />,
      title: "Website Maintenance & Support",
      desc: "Ongoing improvements and technical assistance."
    }
  ];

  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">EXPERTISE</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6 tracking-tight">
            Areas of Focus
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed font-light">
            Combining technology, design, and business understanding to create effective digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary text-2xl mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-brand-navy mb-3">{item.title}</h4>
              <p className="text-gray-500 font-light text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreExpertise;
