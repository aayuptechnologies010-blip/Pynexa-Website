import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone, FiClock, FiSend } from 'react-icons/fi';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeInput, setActiveInput] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative pt-40 pb-32 bg-brand-navy overflow-hidden">
        {/* Background Gradients & Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-cyan/10 blur-[150px] rounded-full pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMGM2ZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyIvPjwvc3ZnPg==')] pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-brand-primary/10 border border-brand-primary/30 rounded-full text-brand-cyan text-sm font-bold tracking-widest uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span> Let's Connect
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-8">
              Ready to start your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-primary">
                Digital Journey?
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
              We'd love to hear from you. Whether you have a question about services, pricing, or anything else, our team is ready to answer all your questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 relative z-20 -mt-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 max-w-7xl mx-auto">
            
            {/* Left Column: Contact Cards */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-5/12 space-y-6"
            >
              {/* Card 1: Address */}
              <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-brand-primary/30 transition-all duration-300 group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-[30px] group-hover:bg-brand-primary/20 transition-all duration-500 transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="flex items-start gap-6 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#F5F8FF] text-brand-primary flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-sm">
                    <FiMapPin />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-navy mb-2">Visit Our Office</h4>
                    <p className="text-gray-500 font-light leading-relaxed">
                      Office No. 104, Tower B, 1st Floor<br />
                      Modern Apartment 2, Sector 73<br />
                      Noida, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Contact Methods */}
              <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 hover:border-brand-cyan/30 transition-all duration-300 group overflow-hidden relative">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-[30px] group-hover:bg-brand-cyan/20 transition-all duration-500 transform translate-x-1/2 translate-y-1/2"></div>
                
                <div className="space-y-8 relative z-10">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-full bg-[#F5F8FF] text-brand-primary flex items-center justify-center text-xl shrink-0">
                      <FiMail />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</p>
                      <a href="mailto:pynexatechnologies@gmail.com" className="text-sm md:text-base font-medium text-brand-navy hover:text-brand-primary transition-colors break-all">
                        pynexatechnologies@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-full bg-[#F5F8FF] text-brand-primary flex items-center justify-center text-xl shrink-0">
                      <FiPhone />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</p>
                      <a href="tel:+918081522864" className="text-lg font-medium text-brand-navy hover:text-brand-primary transition-colors">
                        +91 8081522864
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Socials or Hours */}
              <div className="bg-brand-navy p-8 rounded-3xl shadow-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-start gap-6 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-white/10 text-white flex items-center justify-center text-xl shrink-0">
                    <FiClock />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Business Hours</h4>
                    <p className="text-gray-300 font-light mb-1">Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-400 font-light text-sm">Weekend: Closed (Support Available)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full lg:w-7/12"
            >
              <div className="bg-white p-10 md:p-14 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100">
                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-brand-navy mb-3">Send us a Message</h3>
                  <p className="text-gray-500 font-light text-lg">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>
                
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#F5F8FF] border border-brand-primary/20 p-12 rounded-3xl text-center flex flex-col items-center justify-center h-[400px]"
                  >
                    <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center text-white text-4xl mb-6 shadow-xl shadow-brand-primary/30">
                      ✓
                    </div>
                    <h4 className="text-2xl font-bold text-brand-navy mb-4">Message Sent Successfully!</h4>
                    <p className="text-gray-600 font-light text-lg">Thank you for reaching out. One of our digital experts will contact you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${activeInput === 'name' || formData.name ? '-top-2.5 text-xs bg-white px-2 text-brand-primary font-bold' : 'top-4 text-gray-400'}`}>Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setActiveInput('name')}
                          onBlur={() => setActiveInput(null)}
                          required
                          className="w-full px-5 py-4 bg-transparent border-2 border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary transition-all font-medium text-brand-navy"
                        />
                      </div>
                      <div className="relative">
                        <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${activeInput === 'email' || formData.email ? '-top-2.5 text-xs bg-white px-2 text-brand-primary font-bold' : 'top-4 text-gray-400'}`}>Email Address</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setActiveInput('email')}
                          onBlur={() => setActiveInput(null)}
                          required
                          className="w-full px-5 py-4 bg-transparent border-2 border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary transition-all font-medium text-brand-navy"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${activeInput === 'phone' || formData.phone ? '-top-2.5 text-xs bg-white px-2 text-brand-primary font-bold' : 'top-4 text-gray-400'}`}>Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setActiveInput('phone')}
                          onBlur={() => setActiveInput(null)}
                          className="w-full px-5 py-4 bg-transparent border-2 border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary transition-all font-medium text-brand-navy"
                        />
                      </div>
                      <div className="relative">
                        <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${activeInput === 'service' || formData.service ? '-top-2.5 text-xs bg-white px-2 text-brand-primary font-bold z-10' : 'top-4 text-gray-400 z-10'}`}>Interested In</label>
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          onFocus={() => setActiveInput('service')}
                          onBlur={() => setActiveInput(null)}
                          required
                          className="w-full px-5 py-4 bg-transparent border-2 border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary transition-all font-medium text-brand-navy appearance-none relative z-0"
                        >
                          <option value="" disabled className="text-gray-300"></option>
                          <option value="Website Development">Website Development</option>
                          <option value="E-Commerce">E-Commerce Solution</option>
                          <option value="Portfolio">Portfolio Website</option>
                          <option value="Custom Web App">Custom Web App</option>
                          <option value="Other">Other Services</option>
                        </select>
                        <div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                          ▼
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${activeInput === 'message' || formData.message ? '-top-2.5 text-xs bg-white px-2 text-brand-primary font-bold' : 'top-4 text-gray-400'}`}>Your Message</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setActiveInput('message')}
                        onBlur={() => setActiveInput(null)}
                        required
                        rows="5"
                        className="w-full px-5 py-4 bg-transparent border-2 border-gray-200 rounded-xl focus:outline-none focus:border-brand-primary transition-all font-medium text-brand-navy resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-5 bg-brand-primary text-white font-bold uppercase tracking-widest hover:bg-brand-navy transition-all duration-300 rounded-xl shadow-[0_10px_30px_rgba(7,91,255,0.3)] hover:shadow-[0_10px_30px_rgba(10,25,47,0.3)] flex items-center justify-center gap-3 disabled:opacity-70 group"
                    >
                      {isSubmitting ? 'Sending Request...' : 'Send Message'} 
                      {!isSubmitting && <FiSend className="text-xl group-hover:translate-x-1 transition-transform" />}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Modern Map Section */}
      <section className="relative h-[500px] w-full bg-brand-light mt-10">
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_20px_40px_rgba(0,0,0,0.05)] z-10"></div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112151.78918237093!2d77.2974950582031!3d28.545722300000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87ce0eb!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1684949175402!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(0.5) contrast(1.2)' }} 
          allowFullScreen="" 
          loading="lazy"
          title="PYNEXA Technologies Location"
          className="relative z-0"
        ></iframe>
        
        {/* Floating Call to Action over Map */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 w-[90%] md:w-auto">
          <div className="bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-2xl border border-white flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-cyan/20 text-brand-cyan flex items-center justify-center">
                <FiMapPin />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-navy">We are based in</p>
                <p className="text-xs text-gray-500 font-light">Noida, UP, India</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-gray-200"></div>
            <Link to="/get-quote" className="text-sm font-bold text-brand-primary uppercase tracking-widest hover:text-brand-cyan transition-colors flex items-center gap-2">
              Start a Project <FiSend />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
