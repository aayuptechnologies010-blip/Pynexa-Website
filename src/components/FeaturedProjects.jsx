import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';
import projectImg from '../assets/project_img1.png';

const FeaturedProjects = () => {
  const featured = portfolioData.find(p => p.featured);

  if (!featured) return null;

  return (
    <section className="py-24 bg-white relative border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-navy tracking-tight leading-tight mb-4">
            Featured <span className="text-brand-primary">Concept</span>
          </h2>
          <p className="text-gray-600 font-light text-lg">A closer look at one of our premium digital solutions.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row group"
        >
          {/* Project Image */}
          <div className="w-full lg:w-3/5 h-[300px] lg:h-[500px] relative overflow-hidden bg-gray-100">
            <img 
              src={projectImg} 
              alt={featured.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>

          {/* Project Details */}
          <div className="w-full lg:w-2/5 p-10 lg:p-16 flex flex-col justify-center relative bg-white">
            <div className="inline-block px-4 py-1.5 bg-brand-cyan/10 text-brand-cyan font-bold uppercase tracking-widest text-xs rounded-full mb-6 w-max">
              {featured.category}
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-6 tracking-tight">
              {featured.title}
            </h3>
            
            <p className="text-gray-600 font-light text-lg leading-relaxed mb-8">
              {featured.shortDesc}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-12">
              {featured.tech.map((t, i) => (
                <span key={i} className="text-xs font-bold text-gray-400 uppercase tracking-wider border border-gray-200 px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
            
            <div className="mt-auto">
              <Link 
                to={`/portfolio/${featured.id}`} 
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-navy text-white font-bold uppercase tracking-widest hover:bg-brand-primary transition-colors rounded-full shadow-lg text-sm"
              >
                View Details <FiArrowRight />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
