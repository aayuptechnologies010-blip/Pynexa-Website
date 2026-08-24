import { motion } from 'framer-motion';

const CoreValues = () => {
  const values = [
    {
      title: "Innovation",
      desc: "We continuously explore better ways to solve digital challenges."
    },
    {
      title: "Quality",
      desc: "We believe quality should be visible in every detail."
    },
    {
      title: "Transparency",
      desc: "Clear communication and honest collaboration."
    },
    {
      title: "Customer Focus",
      desc: "Your business goals remain at the center of our work."
    },
    {
      title: "Continuous Improvement",
      desc: "We believe every digital product can become better."
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-1/3">
            <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">Our Core Values</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6 tracking-tight leading-tight">
              The principles behind every PYNEXA project.
            </h3>
            <div className="w-16 h-1 bg-brand-cyan mb-8"></div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {values.map((val, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-brand-light p-8 rounded-xl border-l-4 border-brand-primary hover:border-brand-cyan transition-colors"
                >
                  <h4 className="text-xl font-bold text-brand-navy mb-3">{val.title}</h4>
                  <p className="text-gray-600 font-light leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreValues;
