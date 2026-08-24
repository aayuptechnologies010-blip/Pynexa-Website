import { motion } from 'framer-motion';
import { FiHeadphones, FiTrendingUp, FiLayout, FiCode, FiRefreshCw, FiArrowRight } from 'react-icons/fi';

const ProjectApproach = () => {
  const approaches = [
    {
      icon: <FiHeadphones />,
      title: "Listen First",
      desc: "Understand what the client actually needs."
    },
    {
      icon: <FiTrendingUp />,
      title: "Think Business",
      desc: "Connect features with business objectives."
    },
    {
      icon: <FiLayout />,
      title: "Design With Purpose",
      desc: "Create interfaces that are clear and useful."
    },
    {
      icon: <FiCode />,
      title: "Build With Quality",
      desc: "Focus on reliable and maintainable development."
    },
    {
      icon: <FiRefreshCw />,
      title: "Improve Continuously",
      desc: "Learn from feedback and refine the experience."
    }
  ];

  const flow = ["Business", "Requirements", "Strategy", "Design", "Development", "Launch", "Improvement"];

  return (
    <section className="py-24 bg-brand-light border-y border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/3">
            <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">THE APPROACH</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 tracking-tight">
              Every Project Starts With Understanding.
            </h3>
            <p className="text-gray-600 font-light text-lg leading-relaxed mb-8">
              Rather than beginning with technology, the process begins with the business problem that needs to be solved.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="text-sm font-bold text-brand-navy uppercase mb-4 tracking-wider">Process Flow</h4>
              <div className="flex flex-wrap gap-2 items-center">
                {flow.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-600">{step}</span>
                    {idx !== flow.length - 1 && <FiArrowRight className="text-brand-cyan text-xs" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {approaches.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:border-brand-primary/30 transition-colors group"
                >
                  <div className="w-12 h-12 bg-brand-primary/5 rounded-lg flex items-center justify-center text-brand-primary text-xl shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-navy mb-1">{item.title}</h4>
                    <p className="text-gray-500 font-light text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectApproach;
