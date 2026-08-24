import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteRight, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Amit Sharma',
      role: 'Founder, E-Commerce Startup',
      text: 'Working with PYNEXA Technologies was a game-changer for us. They built a robust, scalable e-commerce platform that increased our sales by 40% in just three months. Highly recommended for their professionalism and technical expertise!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Neha Verma',
      role: 'Marketing Director, TechCorp',
      text: 'The team at PYNEXA perfectly understood our vision. The corporate website they designed is not only visually stunning but also highly optimized and fast. It has significantly improved our brand presence online.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Rahul Desai',
      role: 'Freelance Consultant',
      text: 'I needed a premium portfolio website to showcase my services, and PYNEXA delivered beyond my expectations. The design is sleek, modern, and perfectly captures my personal brand. Great communication throughout the project.',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-brand-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-cyan/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-full text-brand-primary text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
            Client Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy tracking-tight mb-4">
            What Our Clients <span className="text-brand-primary">Say</span>
          </h2>
          <p className="text-gray-500 font-light text-lg">
            Don't just take our word for it. Here's what businesses have to say about working with PYNEXA Technologies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          
          {/* Main Slider Container */}
          <div className="bg-white rounded-3xl p-8 md:p-14 shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-8 right-8 text-6xl text-brand-primary/10">
              <FaQuoteRight />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="text-lg" />
                  ))}
                </div>

                <p className="text-xl md:text-3xl text-brand-navy font-medium leading-relaxed mb-10">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold text-xl">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-navy">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-brand-primary font-bold tracking-wider uppercase">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-navy hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 shadow-sm"
            >
              <FiChevronLeft className="text-xl" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'w-8 bg-brand-primary' : 'bg-gray-300 hover:bg-brand-primary/50'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-navy hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 shadow-sm"
            >
              <FiChevronRight className="text-xl" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
