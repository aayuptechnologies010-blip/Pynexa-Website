import { motion } from 'framer-motion';
import { FiCheckCircle, FiSmartphone, FiMonitor, FiShield } from 'react-icons/fi';

const TrustSection = () => {
  const features = [
    {
      title: "Business Focused",
      description: "Solutions designed around your business requirements.",
      icon: <FiCheckCircle className="text-3xl text-brand-primary" />
    },
    {
      title: "Responsive",
      description: "Perfect experience across mobile, tablet and desktop.",
      icon: <FiSmartphone className="text-3xl text-brand-primary" />
    },
    {
      title: "Modern",
      description: "Clean, modern and professional interfaces.",
      icon: <FiMonitor className="text-3xl text-brand-primary" />
    },
    {
      title: "Reliable",
      description: "Scalable and maintainable web solutions.",
      icon: <FiShield className="text-3xl text-brand-primary" />
    }
  ];

  return (
    <section className="py-20 bg-brand-light border-b border-gray-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6 tracking-tight">
            Your Business Deserves a Strong Digital Presence
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed font-light">
            From business websites to e-commerce platforms, PYNEXA Technologies creates digital solutions designed around your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow rounded-sm"
            >
              <div className="w-14 h-14 bg-brand-light flex items-center justify-center rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{feature.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
