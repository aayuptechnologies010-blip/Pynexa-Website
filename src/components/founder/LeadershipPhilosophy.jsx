import { motion } from 'framer-motion';

const LeadershipPhilosophy = () => {
  const steps = [
    {
      num: "01",
      title: "Understand",
      desc: "Every successful project starts with understanding the client's business, goals, audience, and requirements."
    },
    {
      num: "02",
      title: "Create",
      desc: "Transform those requirements into thoughtful, professional, and practical digital experiences."
    },
    {
      num: "03",
      title: "Improve",
      desc: "Test, refine, optimize, and continuously look for opportunities to make the solution better."
    },
    {
      num: "04",
      title: "Grow",
      desc: "Build digital solutions that can support the business as it evolves."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">LEADERSHIP PHILOSOPHY</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6 tracking-tight">
            Understand. Create. Improve. Grow.
          </h3>
        </div>

        {/* Desktop Horizontal / Mobile Vertical Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connector Line (Hidden on mobile) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 z-0"></div>
          
          <div className="flex flex-col md:flex-row justify-between gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center w-full md:w-1/4"
              >
                <div className="w-24 h-24 bg-brand-light rounded-full flex items-center justify-center border-4 border-white shadow-xl mb-6 text-2xl font-black text-brand-primary shrink-0 relative">
                  {step.num}
                  {/* Decorative dot */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-cyan rounded-full border-2 border-white"></div>
                </div>
                <h4 className="text-xl font-bold text-brand-navy mb-4">{step.title}</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipPhilosophy;
