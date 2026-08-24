import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import businessIcon from '../assets/business_website_icon.png';
import ecommerceIcon from '../assets/ecommerce_icon.png';
import portfolioIcon from '../assets/portfolio_icon.png';
import customWebIcon from '../assets/custom_web_icon.png';

const FindYourSolution = () => {
  const solutions = [
    {
      need: "I Need a New Website",
      solution: "Business Website",
      id: "business-website-development",
      icon: businessIcon
    },
    {
      need: "I Want to Sell Online",
      solution: "E-Commerce",
      id: "e-commerce-development",
      icon: ecommerceIcon
    },
    {
      need: "I Want to Showcase My Work",
      solution: "Portfolio Website",
      id: "portfolio-development",
      icon: portfolioIcon
    },
    {
      need: "I Need Something Custom",
      solution: "Custom Web Solution",
      id: "custom-web-development",
      icon: customWebIcon
    }
  ];

  return (
    <section className="py-24 bg-[#EBF1FF]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">Find Your Solution</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-navy tracking-tight leading-tight mb-6">
            Not Sure Which Service <span className="text-brand-primary">You Need?</span>
          </h3>
          <p className="text-gray-600 font-light text-lg leading-relaxed">
            Tell us about your business and we'll help you choose the right digital solution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link 
                to={`/services/${item.id}`}
                className="group flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-brand-primary/10 overflow-hidden p-2">
                  <img src={item.icon} alt={item.solution} className="w-full h-full object-contain drop-shadow-sm" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-gray-500 font-medium mb-1">{item.need}</p>
                  <div className="flex items-center gap-2">
                    <FiArrowRight className="text-brand-primary shrink-0" />
                    <h4 className="text-lg font-bold text-brand-navy group-hover:text-brand-primary transition-colors">{item.solution}</h4>
                  </div>
                </div>
                <FiArrowRight className="text-gray-300 group-hover:text-brand-primary group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/get-quote" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-navy text-white font-bold uppercase tracking-widest hover:bg-brand-primary transition-colors rounded-full shadow-lg"
          >
            Talk to Our Team <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FindYourSolution;
