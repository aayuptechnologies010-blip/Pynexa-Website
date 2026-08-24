import { motion } from 'framer-motion';

const AboutFounder = () => {
  return (
    <section id="about-founder" className="py-24 bg-brand-light">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="w-full lg:w-3/5">
            <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">THE PERSON BEHIND PYNEXA</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-brand-navy mb-8 tracking-tight leading-tight">
              Building Technology With a Business-First Mindset.
            </h3>
            
            <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
              <p>
                <strong className="text-brand-navy font-bold">Prem Chandra Gaur</strong> is the Founder & CEO of PYNEXA Technologies, a modern Website & Web Solutions company focused on helping startups, entrepreneurs, professionals, and businesses establish a strong and professional digital presence.
              </p>
              <p>
                With a vision to make technology simple, accessible, and business-focused, Prem leads PYNEXA with a strong commitment to innovation, quality, creativity, and customer satisfaction.
              </p>
              <p>
                His approach goes beyond simply building websites. He believes in understanding each client's business, identifying their digital requirements, and creating solutions that are modern, responsive, user-friendly, scalable, and aligned with their objectives.
              </p>
              <p>
                Through PYNEXA Technologies, his goal is to transform ideas into meaningful digital experiences and help businesses build a stronger presence in the digital world.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-2/5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-xl border-l-4 border-brand-primary relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-8xl font-serif text-brand-primary/5 leading-none select-none pointer-events-none">
                "
              </div>
              <p className="text-2xl font-bold text-brand-navy leading-relaxed italic mb-8 relative z-10">
                "Technology becomes valuable when it solves a real business problem."
              </p>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-1 bg-brand-cyan"></div>
                <div>
                  <h4 className="font-bold text-brand-navy text-lg">Prem Chandra Gaur</h4>
                  <p className="text-brand-primary text-sm font-bold tracking-widest uppercase">Founder & CEO</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
