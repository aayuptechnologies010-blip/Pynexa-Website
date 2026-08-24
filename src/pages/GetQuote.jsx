import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

const GetQuote = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    details: '',
    name: '',
    email: '',
    phone: ''
  });

  const services = [
    'Business Website',
    'E-Commerce',
    'Portfolio',
    'Landing Page',
    'Custom Web Application',
    'Website Redesign',
    'Other'
  ];

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert("Quote request submitted! We will contact you soon.");
    setStep(1);
    setFormData({ service: '', details: '', name: '', email: '', phone: '' });
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-brand-light">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">Request a Free Quote</h1>
            <p className="text-gray-600 font-light text-lg">Tell us about your project and we'll get back to you with a detailed proposal.</p>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
            <div 
              className="absolute top-1/2 left-0 h-1 bg-brand-primary -z-10 transform -translate-y-1/2 transition-all duration-500"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            ></div>
            
            {[1, 2, 3].map(num => (
              <div 
                key={num}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 ${
                  step >= num ? 'bg-brand-primary text-white shadow-md' : 'bg-white text-gray-400 border-2 border-gray-200'
                }`}
              >
                {step > num ? <FiCheck /> : num}
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                
                {/* Step 1 */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-brand-navy mb-6">What do you need?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map(service => (
                        <div 
                          key={service}
                          onClick={() => setFormData({...formData, service})}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            formData.service === service 
                              ? 'border-brand-primary bg-brand-primary/5 text-brand-primary' 
                              : 'border-gray-100 hover:border-brand-cyan text-gray-600'
                          }`}
                        >
                          <span className="font-bold">{service}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-brand-navy mb-6">Tell us about your project</h3>
                    <textarea 
                      rows="6"
                      required
                      value={formData.details}
                      onChange={e => setFormData({...formData, details: e.target.value})}
                      placeholder="Describe your business, your goals, and what you want to achieve with this project..."
                      className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-brand-primary focus:ring-0 outline-none resize-none text-brand-navy"
                    ></textarea>
                  </motion.div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-brand-navy mb-6">Your Contact Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-600 mb-2">Full Name *</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                          className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-brand-primary outline-none text-brand-navy"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-600 mb-2">Email Address *</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                          className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-brand-primary outline-none text-brand-navy"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-600 mb-2">Phone Number *</label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                          className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-brand-primary outline-none text-brand-navy"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="mt-10 flex justify-between pt-6 border-t border-gray-100">
                {step > 1 ? (
                  <button 
                    type="button" 
                    onClick={handlePrev}
                    className="px-6 py-3 text-gray-500 font-bold uppercase tracking-wider hover:text-brand-navy transition-colors"
                  >
                    Back
                  </button>
                ) : <div></div>}
                
                {step < 3 ? (
                  <button 
                    type="button" 
                    onClick={handleNext}
                    disabled={step === 1 && !formData.service}
                    className={`px-8 py-3 bg-brand-navy text-white font-bold uppercase tracking-wider rounded-full flex items-center gap-2 transition-all ${
                      (step === 1 && !formData.service) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-brand-primary shadow-lg hover:shadow-brand-primary/30'
                    }`}
                  >
                    Next Step <FiArrowRight />
                  </button>
                ) : (
                  <button 
                    type="submit"
                    className="px-8 py-3 bg-brand-primary text-white font-bold uppercase tracking-wider rounded-full flex items-center gap-2 hover:bg-brand-cyan transition-all shadow-lg hover:shadow-brand-cyan/30"
                  >
                    Request Consultation <FiArrowRight />
                  </button>
                )}
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GetQuote;
