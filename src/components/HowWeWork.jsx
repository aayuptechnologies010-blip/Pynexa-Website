import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

const HowWeWork = () => {
  const [activeTab, setActiveTab] = useState(0);

  const steps = [
    { id: "01", title: "DISCOVER", desc: "Understand Your Business" },
    { id: "02", title: "PLAN", desc: "Define Requirements" },
    { id: "03", title: "DESIGN", desc: "Create UI/UX" },
    { id: "04", title: "DEVELOP", desc: "Build Your Solution" },
    { id: "05", title: "LAUNCH", desc: "Deploy Your Website" },
    { id: "06", title: "GROW", desc: "Support & Improve" },
  ];

  const tabs = [
    { 
      label: "IDEA", 
      title: "Understand the vision",
      desc: "Every great digital experience begins with a clear understanding of the core concept. We take the time to listen, research, and align our strategy with your business goals before a single line of code is written."
    },
    { 
      label: "DESIGN", 
      title: "Shape the experience",
      desc: "We craft intuitive and visually stunning interfaces. Our design process focuses on user experience, ensuring that every interaction is meaningful, accessible, and perfectly reflects your brand identity."
    },
    { 
      label: "DEVELOP", 
      title: "Build the solution",
      desc: "Using modern, robust technologies, we turn designs into functional reality. We emphasize clean code, performance, and security to ensure your digital platform is scalable and reliable."
    },
    { 
      label: "GROW", 
      title: "Create lasting value",
      desc: "Launch is just the beginning. We build solutions designed to scale and adapt, helping you reach wider audiences and achieve measurable business growth over time."
    }
  ];

  return (
    <section className="py-24 bg-brand-light border-b border-gray-200 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4 tracking-tight">
            From Idea to Digital Growth
          </h2>
          <div className="w-20 h-1 bg-brand-primary"></div>
        </div>

        <div className="relative mb-32">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-[40px] left-0 w-full h-[2px] bg-gray-200 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-12 md:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col group relative w-5/6 md:w-full ${
                  idx % 2 === 0 
                    ? 'items-start text-left self-start md:items-center md:text-center md:self-auto' 
                    : 'items-end text-right self-end md:items-center md:text-center md:self-auto'
                }`}
              >
                <div className="w-20 h-20 bg-white border-4 border-brand-light shadow-md rounded-full flex items-center justify-center text-brand-navy text-2xl font-bold mb-6 group-hover:border-brand-primary group-hover:text-brand-primary transition-colors">
                  {step.id}
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-2 tracking-widest">{step.title}</h3>
                <p className="text-gray-600 font-light text-sm">{step.desc}</p>
                {idx < steps.length - 1 && (
                  <div className={`md:hidden absolute -bottom-10 text-brand-primary text-2xl opacity-50 ${
                    idx % 2 === 0 ? 'right-0' : 'left-0'
                  }`}>
                    <FiArrowDown style={{ transform: idx % 2 === 0 ? 'rotate(-30deg)' : 'rotate(30deg)' }} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Tabs Section */}
        <div className="max-w-4xl mx-auto pt-16 border-t border-gray-200">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-brand-navy tracking-tight">The PYNEXA Philosophy</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                  activeTab === idx 
                    ? "bg-brand-primary text-white shadow-lg scale-105" 
                    : "bg-white text-gray-400 hover:bg-gray-50 hover:text-brand-primary border border-gray-200 shadow-sm"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative bg-white border border-gray-100 rounded-3xl p-8 md:p-12 min-h-[250px] flex items-center justify-center shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 blur-[80px] rounded-full pointer-events-none"></div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center relative z-10"
              >
                <div className="text-brand-light text-6xl md:text-8xl font-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 select-none">
                  {tabs[activeTab].label}
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
                  {tabs[activeTab].title}
                </h4>
                <p className="text-gray-600 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                  {tabs[activeTab].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;
