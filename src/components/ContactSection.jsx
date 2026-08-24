import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiMessageCircle, FiArrowRight } from 'react-icons/fi';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative bg-brand-light text-brand-navy">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-brand-primary"></div>
            <h2 className="text-brand-primary font-bold tracking-widest uppercase text-sm">Contact Us</h2>
            <div className="w-12 h-[2px] bg-brand-primary"></div>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-brand-navy tracking-tighter mb-4">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h3>
          <p className="text-gray-600 text-lg font-light">
            Ready to transform your digital presence? Reach out to us today to discuss your next big idea.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 bg-white p-10 border border-gray-200 shadow-xl"
          >
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-brand-light border border-brand-primary/30 flex items-center justify-center text-brand-primary shrink-0">
                  <FiMapPin className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-brand-navy font-bold uppercase tracking-wider mb-2">Office Address</h4>
                  <p className="text-gray-600 font-light leading-relaxed">Office No. 104, Tower B, 1st Floor,<br />Modern Apartment 2, Sector 73,<br />Noida, Uttar Pradesh, India</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-brand-light border border-brand-primary/30 flex items-center justify-center text-brand-primary shrink-0">
                  <FiPhone className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-brand-navy font-bold uppercase tracking-wider mb-2">Phone Number</h4>
                  <p className="text-gray-600 font-light">8081522864</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-brand-light border border-brand-primary/30 flex items-center justify-center text-brand-primary shrink-0">
                  <FiMail className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-brand-navy font-bold uppercase tracking-wider mb-2">Email Address</h4>
                  <p className="text-gray-600 font-light">pynexatechnologies@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0">
                  <FiMessageCircle className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-brand-navy font-bold uppercase tracking-wider mb-2">WhatsApp</h4>
                  <a href="https://wa.me/918081522864" target="_blank" rel="noreferrer" className="text-gray-600 font-light hover:text-[#25D366] transition-colors border-b border-transparent hover:border-[#25D366]">
                    8081522864 (Click to chat)
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-7/12 bg-white p-10 border border-gray-200 shadow-xl relative"
          >
            {/* Geometric Accent */}
            <div className="absolute top-0 left-0 w-1/2 h-1 bg-gradient-to-r from-brand-primary to-brand-cyan"></div>

            <h3 className="text-2xl font-bold text-brand-navy mb-8 uppercase tracking-wide">Send us a message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-widest text-brand-primary uppercase">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-300 px-0 py-3 text-brand-navy focus:outline-none focus:border-brand-primary transition-all placeholder-gray-400 font-light" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold tracking-widest text-brand-primary uppercase">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-gray-300 px-0 py-3 text-brand-navy focus:outline-none focus:border-brand-primary transition-all placeholder-gray-400 font-light" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-widest text-brand-primary uppercase">Subject</label>
                <input type="text" className="w-full bg-transparent border-b border-gray-300 px-0 py-3 text-brand-navy focus:outline-none focus:border-brand-primary transition-all placeholder-gray-400 font-light" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-widest text-brand-primary uppercase">Message</label>
                <textarea rows="4" className="w-full bg-transparent border-b border-gray-300 px-0 py-3 text-brand-navy focus:outline-none focus:border-brand-primary transition-all resize-none placeholder-gray-400 font-light" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="group flex items-center gap-4 bg-brand-navy hover:bg-brand-primary text-white px-8 py-4 font-bold uppercase tracking-widest transition-all duration-300 mt-4 rounded-full shadow-lg">
                Send Message
                <FiArrowRight className="transform group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
