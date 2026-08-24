import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Business', 'E-Commerce', 'Portfolio', 'Landing Page'];
  
  const projects = portfolioData.slice(0, 3); // Take first 3 projects for the home section

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">Our Digital Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-navy tracking-tight">Concept Demonstrations</h3>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === cat 
                  ? 'bg-brand-primary text-white shadow-lg' 
                  : 'bg-white text-gray-500 hover:text-brand-navy hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <Link to={`/portfolio/${project.id}`} className="px-6 py-3 bg-brand-primary text-white font-bold uppercase tracking-widest text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Details <FiArrowRight />
                    </Link>
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-brand-cyan font-bold text-xs uppercase tracking-widest mb-2 block">{project.category}</span>
                  <h4 className="text-xl font-bold text-brand-navy mb-4">{project.title}</h4>
                  <Link to={`/portfolio/${project.id}`} className="text-brand-primary font-bold text-sm uppercase tracking-wider flex items-center gap-1 hover:gap-3 transition-all">
                    View Concept <FiArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <Link to="/portfolio" className="inline-block px-8 py-4 bg-brand-navy text-white font-bold uppercase tracking-widest hover:bg-brand-primary transition-colors rounded-full shadow-lg">
            Explore All Concepts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
