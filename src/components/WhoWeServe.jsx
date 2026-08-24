import { motion } from 'framer-motion';
import { FiSend, FiBriefcase, FiUser, FiShoppingBag, FiStar, FiTrendingUp } from 'react-icons/fi';

const WhoWeServe = () => {
  const audiences = [
    { icon: <FiSend />, title: "Startups", desc: "Build your digital presence from day one." },
    { icon: <FiBriefcase />, title: "Small & Medium Businesses", desc: "Create a professional online identity." },
    { icon: <FiUser />, title: "Entrepreneurs", desc: "Showcase your services and expertise." },
    { icon: <FiShoppingBag />, title: "Online Sellers", desc: "Start and grow your online store." },
    { icon: <FiStar />, title: "Professionals", desc: "Build your personal brand and portfolio." },
    { icon: <FiTrendingUp />, title: "Growing Businesses", desc: "Upgrade your existing digital presence." }
  ];

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-navy tracking-tight leading-tight mb-16">
          Solutions For Businesses <br className="hidden md:block"/>
          <span className="text-brand-cyan">At Every Stage.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {audiences.map((aud, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-light p-8 rounded-2xl border border-transparent hover:border-brand-primary/20 hover:shadow-lg transition-all text-left flex flex-col items-start gap-4"
            >
              <div className="text-4xl">{aud.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{aud.title}</h3>
                <p className="text-gray-600 font-light text-sm">{aud.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
