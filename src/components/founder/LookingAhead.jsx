import { motion } from 'framer-motion';

const LookingAhead = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">LOOKING AHEAD</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-brand-navy mb-8 tracking-tight">
              Building PYNEXA for the Future.
            </h3>
            
            <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
              <p>
                The journey of PYNEXA Technologies is focused on continuous growth — expanding capabilities, improving solutions, adopting better technologies, and building meaningful relationships with businesses.
              </p>
              <p>
                The long-term goal is to establish PYNEXA as a trusted technology partner that businesses can rely on throughout their digital journey.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center relative">
            {/* Abstract Graphic */}
            <div className="relative w-full max-w-md h-80 flex items-center justify-center">
              {/* Glows */}
              <div className="absolute inset-0 bg-brand-primary/10 rounded-full blur-[80px]"></div>
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                className="absolute inset-0 border border-brand-cyan/20 rounded-full border-dashed"
              ></motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                className="absolute inset-10 border border-brand-primary/30 rounded-full"
              ></motion.div>
              
              <div className="relative bg-white rounded-full p-8 shadow-2xl border border-gray-100 flex items-center justify-center">
                <div className="text-brand-navy text-3xl font-black tracking-widest uppercase">
                  GROWTH
                </div>
              </div>
              
              {/* Floating tech elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-0 right-10 bg-brand-light p-3 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="w-8 h-2 bg-brand-cyan/40 rounded"></div>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute bottom-10 left-0 bg-brand-navy p-4 rounded-lg shadow-xl"
              >
                <div className="flex gap-1 items-end h-8">
                  <div className="w-2 bg-brand-primary h-1/3 rounded-t"></div>
                  <div className="w-2 bg-brand-primary h-2/3 rounded-t"></div>
                  <div className="w-2 bg-brand-cyan h-full rounded-t"></div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LookingAhead;
