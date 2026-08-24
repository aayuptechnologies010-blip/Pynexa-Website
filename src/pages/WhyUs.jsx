import { motion } from 'framer-motion';
import { FiTarget, FiCode, FiLayout, FiSmartphone, FiMessageCircle, FiLifeBuoy } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const WhyUs = () => {
  const differences = [
    {
      title: "Business Understanding",
      desc: "We don't just write code; we take the time to understand your business model, target audience, and long-term goals to build a solution that drives actual results.",
      icon: <FiTarget className="text-4xl text-brand-cyan" />
    },
    {
      title: "Custom Development",
      desc: "No cookie-cutter templates. Every website and web application we build is custom-designed and developed specifically for your unique requirements.",
      icon: <FiCode className="text-4xl text-brand-primary" />
    },
    {
      title: "Modern Design",
      desc: "First impressions matter. We create clean, premium, and professional user interfaces that instantly build trust and credibility with your visitors.",
      icon: <FiLayout className="text-4xl text-brand-cyan" />
    },
    {
      title: "Responsive Experience",
      desc: "With mobile traffic dominating the web, we ensure your digital solution looks and performs flawlessly across smartphones, tablets, and desktop computers.",
      icon: <FiSmartphone className="text-4xl text-brand-primary" />
    },
    {
      title: "Transparent Communication",
      desc: "No confusing technical jargon. We keep you updated throughout the entire development process with clear, honest, and proactive communication.",
      icon: <FiMessageCircle className="text-4xl text-brand-cyan" />
    },
    {
      title: "Long-Term Support",
      desc: "Our relationship doesn't end at launch. We provide ongoing maintenance, security updates, and technical support to keep your business running smoothly.",
      icon: <FiLifeBuoy className="text-4xl text-brand-primary" />
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-brand-light">
      
      {/* Hero */}
      <section className="bg-brand-navy py-24 border-b border-gray-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Why <span className="text-brand-cyan">PYNEXA?</span>
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed border-l-4 border-brand-primary pl-6 text-left md:text-center md:border-l-0 md:pl-0"
          >
            "Technology should solve business problems — not create them."
          </motion.h2>
        </div>
      </section>

      {/* Our Difference */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy tracking-tight">Our Difference</h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {differences.map((diff, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-xl shadow-brand-navy/5 border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="mb-6">{diff.icon}</div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4 tracking-tight">{diff.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{diff.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <Link to="/get-quote" className="inline-block px-10 py-5 bg-brand-navy text-white font-bold uppercase tracking-widest hover:bg-brand-primary transition-colors shadow-xl rounded-full">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WhyUs;
