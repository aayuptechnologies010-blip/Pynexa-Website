import { motion } from 'framer-motion';

const CorePrinciples = () => {
  const principles = [
    {
      title: "Innovation",
      desc: "Explore better ways to solve digital challenges."
    },
    {
      title: "Quality",
      desc: "Pay attention to the details that shape the final experience."
    },
    {
      title: "Transparency",
      desc: "Maintain clear and straightforward communication."
    },
    {
      title: "Customer Focus",
      desc: "Keep client requirements and business objectives at the center."
    },
    {
      title: "Continuous Improvement",
      desc: "Always look for opportunities to learn and improve."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[80px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-cyan uppercase tracking-widest mb-4">CORE PRINCIPLES</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6 tracking-tight">
            The Values Behind the Work.
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {principles.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-navy p-8 rounded-2xl shadow-xl flex-grow md:w-[calc(33.333%-1.5rem)] text-center group border border-gray-800 hover:border-brand-primary/50 transition-colors"
            >
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">{item.title}</h4>
              <p className="text-gray-400 font-light text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePrinciples;
