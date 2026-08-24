import { motion } from 'framer-motion';

const Technologies = () => {
  const techStack = {
    "Frontend": ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS"],
    "Backend": ["Node.js", "PHP", ".NET"],
    "Database": ["MongoDB", "MySQL", "SQL Server"],
    "Tools & Platforms": ["Git", "GitHub", "Cloud Hosting", "REST APIs"]
  };

  return (
    <section className="py-24 bg-[#EBF1FF]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-navy tracking-tight leading-tight">
            Technologies Behind <br className="hidden md:block" />
            <span className="text-brand-primary">Our Solutions</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {Object.entries(techStack).map(([category, items], idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-brand-navy font-bold tracking-widest uppercase mb-6 flex items-center gap-4">
                {category}
                <div className="flex-grow h-px bg-gray-300"></div>
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((tech, tIdx) => (
                  <div 
                    key={tIdx} 
                    className="px-5 py-2.5 bg-white rounded-full shadow-sm border border-gray-100 text-brand-navy font-bold text-sm tracking-wide hover:border-brand-primary hover:text-brand-primary transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
