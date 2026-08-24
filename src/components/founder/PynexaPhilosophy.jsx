import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PynexaPhilosophy = () => {
  const [activeTab, setActiveTab] = useState(0);

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
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-cyan uppercase tracking-widest mb-4">THE PYNEXA WAY</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            From an Idea to Digital Growth.
          </h3>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Headers */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                  activeTab === idx 
                    ? "bg-brand-primary text-white shadow-[0_0_20px_rgba(7,91,255,0.4)] scale-105" 
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 min-h-[250px] flex items-center justify-center backdrop-blur-sm overflow-hidden">
            {/* Decorative background glow inside the box */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 blur-[80px] rounded-full pointer-events-none"></div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center relative z-10"
              >
                <div className="text-brand-primary/20 text-6xl md:text-8xl font-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 select-none">
                  {tabs[activeTab].label}
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  {tabs[activeTab].title}
                </h4>
                <p className="text-gray-300 text-lg font-light leading-relaxed max-w-2xl mx-auto">
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

export default PynexaPhilosophy;
