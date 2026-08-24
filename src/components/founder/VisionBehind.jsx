import { motion } from 'framer-motion';

const VisionBehind = () => {
  const visions = [
    {
      number: "01",
      title: "Simplify Technology",
      desc: "Make digital solutions easier to understand and use."
    },
    {
      number: "02",
      title: "Empower Businesses",
      desc: "Help businesses establish and strengthen their digital identity."
    },
    {
      number: "03",
      title: "Create Real Value",
      desc: "Build solutions around actual business requirements rather than technology for technology's sake."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">THE VISION</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6 tracking-tight">
            Why PYNEXA Technologies?
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed font-light">
            PYNEXA Technologies was built around a simple idea — businesses should be able to access professional digital solutions without unnecessary complexity.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed font-light mt-4">
            The vision is to combine technology, thoughtful design, and business understanding to create digital solutions that not only look professional but also serve a meaningful purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visions.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-light p-10 rounded-2xl border border-gray-100 hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300 relative group"
            >
              <div className="text-5xl font-black text-brand-primary/10 mb-6 group-hover:text-brand-primary/20 transition-colors">
                {item.number}
              </div>
              <h4 className="text-xl font-bold text-brand-navy mb-4 relative z-10">{item.title}</h4>
              <p className="text-gray-600 font-light relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionBehind;
