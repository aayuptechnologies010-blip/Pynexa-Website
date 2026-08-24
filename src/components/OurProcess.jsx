import { motion } from 'framer-motion';
import { FiSearch, FiEdit, FiLayout, FiCode, FiCheckSquare, FiSend } from 'react-icons/fi';

const OurProcess = () => {
  const steps = [
    { id: "01", title: "DISCOVER", sub: "Understand", icon: <FiSearch />, desc: "We understand your business, audience and requirements." },
    { id: "02", title: "PLAN", sub: "Requirements", icon: <FiEdit />, desc: "We define features, structure and project scope." },
    { id: "03", title: "DESIGN", sub: "UI/UX", icon: <FiLayout />, desc: "We create the visual experience and UI/UX." },
    { id: "04", title: "DEVELOP", sub: "Build", icon: <FiCode />, desc: "We turn the design into a functional web solution." },
    { id: "05", title: "TEST", sub: "Quality Check", icon: <FiCheckSquare />, desc: "We test responsiveness, functionality and usability." },
    { id: "06", title: "LAUNCH", sub: "Go Live", icon: <FiSend />, desc: "We deploy the website and help you get started." }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">Our Development Process</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-navy tracking-tight leading-tight mb-6">
            How We Turn Your Requirements Into <span className="text-brand-primary">Reality</span>
          </h3>
          <p className="text-gray-600 font-light text-lg">A simple and transparent process from idea to launch.</p>
        </div>

        {/* Timeline Desktop */}
        <div className="hidden lg:block relative max-w-5xl mx-auto mb-20">
          {/* Connecting Line */}
          <div className="absolute top-[30px] left-0 w-full h-[2px] bg-gray-200">
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-full bg-brand-primary"
            ></motion.div>
          </div>

          <div className="grid grid-cols-6 gap-4">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative flex flex-col items-center group"
              >
                {/* Node */}
                <div className="w-[60px] h-[60px] rounded-full bg-white border-4 border-gray-200 group-hover:border-brand-primary text-gray-400 group-hover:text-brand-primary flex items-center justify-center text-xl mb-6 relative z-10 transition-colors duration-300">
                  {step.icon}
                </div>
                
                <div className="text-center">
                  <div className="text-brand-cyan font-bold text-xs mb-1">{step.id}</div>
                  <h4 className="text-brand-navy font-bold tracking-widest uppercase text-sm mb-1">{step.title}</h4>
                  <p className="text-gray-500 font-medium text-xs uppercase tracking-wider">{step.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed Descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className="bg-brand-light p-8 rounded-xl border-l-4 border-transparent hover:border-brand-primary transition-colors"
            >
              <div className="text-brand-cyan font-bold text-sm mb-2">{step.id} — {step.title}</div>
              <p className="text-gray-600 font-light leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurProcess;
