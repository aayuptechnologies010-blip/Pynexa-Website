import { motion } from 'framer-motion';

const WhatWeBelieve = () => {
  const beliefs = [
    {
      title: "Design Should Communicate",
      desc: "A good design should clearly communicate a brand's identity and message."
    },
    {
      title: "Technology Should Simplify",
      desc: "Technology should make business processes and customer experiences easier."
    },
    {
      title: "Digital Presence Should Grow",
      desc: "A website should help businesses build credibility, reach customers, and grow online."
    }
  ];

  return (
    <section className="py-32 bg-brand-navy text-white border-t border-b border-gray-800 relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand-cyan uppercase tracking-widest mb-6"
          >
            What We Believe
          </motion.h2>
          <motion.blockquote 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-light italic leading-relaxed md:leading-tight"
          >
            "A website should not just look good. <br className="hidden md:block" />
            It should create <span className="font-bold text-brand-primary">value</span> for your business."
          </motion.blockquote>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {beliefs.map((belief, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (idx * 0.1) }}
              className="border-t border-brand-primary/30 pt-6"
            >
              <h3 className="text-xl font-bold mb-4 text-white">{belief.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {belief.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBelieve;
