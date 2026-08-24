import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "How much does a website cost?",
      a: "Website pricing depends on the project requirements, features, design, and functionality. We provide customized quotations based on your needs."
    },
    {
      q: "How long does website development take?",
      a: "Project timelines depend on the complexity and scope of the website. The timeline is discussed and agreed upon before development begins."
    },
    {
      q: "Do you provide website hosting?",
      a: "Yes, domain and hosting setup assistance is available as part of our services."
    },
    {
      q: "Can you redesign my existing website?",
      a: "Yes. We can redesign outdated websites with a modern, responsive, and user-friendly interface that better represents your business."
    },
    {
      q: "Do you provide maintenance after launch?",
      a: "Yes. Website maintenance and technical support can be provided after the website goes live, keeping it updated and performing well."
    },
    {
      q: "Can you build a custom web application?",
      a: "Yes. Custom web solutions can be developed according to your specific business requirements and workflows."
    },
    {
      q: "Will my website work on mobile?",
      a: "Yes. All websites are designed to provide a fully responsive experience across mobile, tablet, and desktop devices."
    },
    {
      q: "How can I start a project?",
      a: "Simply contact us or submit a project inquiry through our Get a Quote page, and we will get back to you to discuss your requirements."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-4">FAQ</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-navy tracking-tight leading-tight">
            Frequently Asked <span className="text-brand-primary">Questions</span>
          </h3>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${openIdx === idx ? 'border-brand-primary shadow-md' : 'border-gray-200'}`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between gap-4 px-8 py-6 text-left"
              >
                <h4 className={`font-bold text-lg transition-colors ${openIdx === idx ? 'text-brand-primary' : 'text-brand-navy'}`}>
                  {faq.q}
                </h4>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIdx === idx ? 'bg-brand-primary text-white' : 'bg-brand-light text-gray-400'}`}>
                  {openIdx === idx ? <FiChevronUp /> : <FiChevronDown />}
                </div>
              </button>

              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-gray-600 font-light leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
