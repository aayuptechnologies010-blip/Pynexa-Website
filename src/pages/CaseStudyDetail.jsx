import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCheck, FiArrowRight } from 'react-icons/fi';

import { portfolioData } from '../data/portfolioData';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const project = portfolioData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="pt-32 pb-24 text-center min-h-screen bg-brand-light">
        <h2 className="text-3xl text-brand-navy font-bold mb-4">Project Not Found</h2>
        <Link to="/portfolio" className="text-brand-primary hover:underline font-bold">← Return to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      
      {/* Project Hero */}
      <div className="bg-brand-navy pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/10 blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          <Link 
            to="/portfolio" 
            className="inline-flex items-center gap-2 text-brand-cyan hover:text-white transition-colors mb-10 font-bold tracking-widest uppercase text-sm"
          >
            <FiArrowLeft /> Back to Portfolio
          </Link>
          
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full lg:w-1/2"
            >
              <div className="inline-block px-4 py-1.5 bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan font-bold uppercase tracking-widest text-xs rounded-full mb-6">
                {project.category}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-gray-400 font-light text-xl leading-relaxed max-w-xl">
                {project.shortDesc}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              {/* Large Mockup Graphic */}
              <div className="w-full aspect-video bg-gray-900 rounded-xl border border-gray-700 shadow-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-transparent mix-blend-overlay"></div>
                <div className="flex items-center justify-center h-full text-white/5 font-black text-[150px] select-none group-hover:scale-110 transition-transform duration-700">
                  {project.title.charAt(0)}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Case Study Content */}
      <div className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto space-y-20">

            {/* Overview / Challenge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-brand-cyan uppercase tracking-widest mb-2">The Concept</h2>
              <h3 className="text-3xl font-bold text-brand-navy mb-6">The Problem Addressed</h3>
              <p className="text-gray-600 font-light text-lg leading-relaxed">
                {project.problem}
              </p>
            </motion.div>

            {/* Our Solution */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-2">The Solution Concept</h2>
              <h3 className="text-3xl font-bold text-brand-navy mb-6">How it works</h3>
              <p className="text-gray-600 font-light text-lg leading-relaxed p-6 bg-[#EBF1FF] rounded-xl border-l-4 border-brand-primary">
                {project.solution}
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-brand-navy mb-8">Conceptual Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-brand-primary/30 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                      <FiCheck className="text-brand-primary" />
                    </div>
                    <span className="text-brand-navy font-bold">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* UI/UX Showcase */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-brand-cyan uppercase tracking-widest mb-2">Visualizing the Layout</h2>
              <h3 className="text-3xl font-bold text-brand-navy mb-8">UI / UX Showcase</h3>
              <div className="space-y-8">
                {/* Simulated Screenshots */}
                <div className="w-full aspect-[16/9] bg-gray-100 rounded-xl border border-gray-200 flex flex-col overflow-hidden">
                   <div className="h-8 bg-gray-200 border-b border-gray-300 flex items-center px-4 gap-2">
                     <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                     <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                     <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                   </div>
                   <div className="flex-grow flex items-center justify-center text-gray-400 font-light">
                     Main Dashboard View
                   </div>
                </div>
                <div className="w-full aspect-[16/9] bg-gray-100 rounded-xl border border-gray-200 flex flex-col overflow-hidden">
                   <div className="h-8 bg-gray-200 border-b border-gray-300 flex items-center px-4 gap-2">
                     <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                     <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                     <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                   </div>
                   <div className="flex-grow flex items-center justify-center text-gray-400 font-light">
                     Mobile Responsive View
                   </div>
                </div>
              </div>
            </motion.div>

            {/* Technology Stack */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-brand-navy mb-8">Technology Stack</h2>
              <div className="flex flex-wrap gap-4">
                {project.tech.map((t, idx) => (
                  <div key={idx} className="px-6 py-3 bg-brand-light text-brand-navy font-bold rounded-lg border border-gray-200">
                    {t}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* The Outcome */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-navy p-10 md:p-16 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 blur-[80px] rounded-full pointer-events-none"></div>
              <h2 className="text-sm font-bold text-brand-cyan uppercase tracking-widest mb-4 relative z-10">Value Proposition</h2>
              <p className="text-white text-xl md:text-2xl font-light leading-relaxed relative z-10">
                "{project.outcome}"
              </p>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Similar Project CTA */}
      <div className="bg-[#EBF1FF] py-24 border-t border-gray-200">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-navy tracking-tight mb-6">Have a Similar Project?</h2>
          <p className="text-gray-600 font-light text-lg mb-10">Let's build a digital solution tailored specifically to your business requirements.</p>
          <Link 
            to="/get-quote"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary hover:bg-brand-navy text-white font-bold uppercase tracking-widest transition-colors rounded-full shadow-lg"
          >
            Start Your Project <FiArrowRight />
          </Link>
        </div>
      </div>

    </div>
  );
};

export default CaseStudyDetail;
