import { motion } from 'framer-motion';

const WhoWeAre = () => {
  const highlights = [
    { title: "Modern Design", desc: "Clean and professional interfaces." },
    { title: "Responsive Experience", desc: "Optimized across all devices." },
    { title: "Custom Solutions", desc: "Built according to business requirements." },
    { title: "Business Focused", desc: "Technology aligned with business goals." }
  ];

  return (
    <section className="py-24 bg-[#EBF1FF] text-brand-navy">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter mb-8">
              A Digital Partner for <br className="hidden md:block" />
              <span className="text-brand-primary">Businesses Ready to Grow.</span>
            </h3>
            
            <div className="space-y-6 text-gray-700 font-light text-lg leading-relaxed">
              <p>
                PYNEXA Technologies is a modern Website & Web Solutions company focused on helping businesses establish a strong and professional presence in the digital world.
              </p>
              <p>
                We create websites and web solutions that combine modern design, responsive experiences, clean development, and business-focused thinking.
              </p>
              <p>
                From a simple business website to a customized web solution, our approach is centered around understanding the client's requirements and transforming their ideas into practical digital experiences.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <h4 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h4>
                  <p className="text-gray-600 font-light text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
