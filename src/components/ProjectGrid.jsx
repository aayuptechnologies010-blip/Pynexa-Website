import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

const ProjectGrid = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Business', 'E-Commerce', 'Portfolio', 'Landing Pages', 'Custom Web', 'Redesign'];

  const filteredProjects = filter === 'All' 
    ? portfolioData 
    : portfolioData.filter(p => p.category === filter);

  return (
    <section id="portfolio-grid" className="py-24 bg-[#EBF1FF]">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy tracking-tight leading-tight mb-4">
              Selected <span className="text-brand-primary">Projects</span>
            </h2>
            <p className="text-gray-600 font-light text-lg">A collection of websites and digital solutions.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-full border ${
                  filter === cat 
                  ? 'bg-brand-primary text-white border-brand-primary shadow-lg' 
                  : 'bg-white text-brand-navy border-transparent hover:border-gray-300 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Image Area */}
                <div className="relative h-64 bg-gray-900 overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-gray-800"></div>
                      {/* Abstract placeholder visual */}
                      <div className="absolute inset-0 flex items-center justify-center text-white/10 text-8xl font-black transition-transform duration-700 group-hover:scale-110">
                        {project.title.charAt(0)}
                      </div>
                    </>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm z-10">
                    <Link 
                      to={`/portfolio/${project.id}`}
                      className="px-6 py-3 bg-white text-brand-navy font-bold uppercase tracking-widest text-sm rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      View Details <FiArrowRight />
                    </Link>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 relative z-20 bg-white">
                  <div className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                    {project.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] font-bold text-gray-400 uppercase tracking-wider border border-gray-100 bg-gray-50 px-2 py-1 rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl text-gray-400 font-light">No projects found in this category yet.</h3>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProjectGrid;
