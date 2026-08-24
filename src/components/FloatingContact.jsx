import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Call Button */}
      <motion.a
        href="tel:+918081522864"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 1.2
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all cursor-pointer relative"
        style={{ boxShadow: '0 4px 14px 0 rgba(7, 91, 255, 0.39)' }}
      >
        <FaPhoneAlt className="text-2xl" />
        {/* Ripple Effect */}
        <span className="absolute inset-0 rounded-full border border-brand-primary animate-ping opacity-75"></span>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/918081522864?text=Hello%20PYNEXA%20Technologies,%20I%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 1
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all cursor-pointer relative"
        style={{ boxShadow: '0 4px 14px 0 rgba(37, 211, 102, 0.39)' }}
      >
        <FaWhatsapp className="text-3xl" />
        {/* Ripple Effect */}
        <span className="absolute inset-0 rounded-full border border-[#25D366] animate-ping opacity-75"></span>
      </motion.a>
    </div>
  );
};

export default FloatingContact;
