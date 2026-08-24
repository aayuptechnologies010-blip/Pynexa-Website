import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Business-Oriented Approach",
      desc: "We don't just build websites; we understand your business goals."
    },
    {
      title: "Modern UI/UX",
      desc: "Clean and professional interfaces designed for users."
    },
    {
      title: "Fully Responsive",
      desc: "Optimized for desktop, tablet and mobile."
    },
    {
      title: "Performance Focused",
      desc: "Fast-loading and optimized websites."
    },
    {
      title: "Custom Solutions",
      desc: "Solutions based on your actual requirements."
    },
    {
      title: "Long-Term Support",
      desc: "Support even after your website goes live."
    }
  ];

  return (
    <section className="py-24 bg-brand-navy text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-1/3">
            <h2 className="text-sm font-bold text-brand-cyan uppercase tracking-widest mb-4">Why Choose PYNEXA</h2>
            <h3 className="text-4xl md:text-5xl font-medium leading-tight tracking-tighter mb-8">
              We don't just build websites.<br />
              <span className="text-brand-primary font-bold">We build digital identities.</span>
            </h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Technology should solve business problems — not create them. Partner with us for reliable, scalable, and modern digital solutions.
            </p>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {reasons.map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 bg-brand-primary/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <FiCheck className="text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{reason.title}</h4>
                    <p className="text-gray-400 font-light text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
