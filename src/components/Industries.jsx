import { motion } from 'framer-motion';
import { FiBriefcase, FiShoppingBag, FiBookOpen, FiHeart, FiAward, FiHome, FiSend, FiUser } from 'react-icons/fi';

const Industries = () => {
  const industries = [
    { icon: <FiBriefcase />, title: "Corporate & Business" },
    { icon: <FiShoppingBag />, title: "E-Commerce" },
    { icon: <FiBookOpen />, title: "Professionals" },
    { icon: <FiHeart />, title: "Healthcare" },
    { icon: <FiAward />, title: "Education" },
    { icon: <FiHome />, title: "Real Estate" },
    { icon: <FiSend />, title: "Startups" },
    { icon: <FiUser />, title: "Personal Brands" }
  ];

  return (
    <section className="py-24 bg-[#EBF1FF]">
      <div className="container mx-auto px-6 md:px-12 text-center">
        
        <h2 className="text-sm font-bold text-brand-cyan uppercase tracking-widest mb-4">Industries</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-brand-navy tracking-tight leading-tight mb-16">
          Industries We Build <span className="text-brand-primary">Solutions For</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {industries.map((ind, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center gap-3 hover:border-brand-primary transition-colors cursor-default"
            >
              <div className="text-3xl">{ind.icon}</div>
              <h4 className="text-brand-navy font-bold text-sm text-center">{ind.title}</h4>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;
