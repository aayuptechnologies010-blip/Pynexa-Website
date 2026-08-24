import { motion } from 'framer-motion';

const PortfolioIntro = () => {
  const highlights = [
    { num: "01", title: "Business Focused" },
    { num: "02", title: "Modern & Responsive" },
    { num: "03", title: "Built Around Requirements" }
  ];

  return (
    <section className="py-24 bg-[#EBF1FF]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy tracking-tight leading-tight mb-6">
              Our Work Speaks <br />
              <span className="text-brand-primary">Through Results.</span>
            </h2>
            <p className="text-gray-600 font-light text-lg leading-relaxed max-w-xl">
              Every project starts with a unique business requirement. We focus on combining thoughtful design, responsive development, usability, and business objectives to create digital experiences that are both visually engaging and practical.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="flex flex-col gap-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-primary hover:shadow-md transition-all">
                  <span className="text-4xl font-bold text-brand-primary/20">{item.num}</span>
                  <h4 className="text-xl font-bold text-brand-navy tracking-wide">{item.title}</h4>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioIntro;
