import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMenu, 
  FiX, 
  FiChevronDown, 
  FiGlobe, 
  FiShield, 
  FiFileText, 
  FiAward, 
  FiShoppingBag, 
  FiCode, 
  FiArrowRight 
} from 'react-icons/fi';

const webServices = [
  { name: 'Business Websites', path: '/services/business-website-development', desc: 'Corporate, startup & company web presence' },
  { name: 'E-Commerce Solutions', path: '/services/e-commerce-development', desc: 'Online stores with cart & payment gateways' },
  { name: 'Custom Web Apps', path: '/services/custom-web-development', desc: 'Tailored portals, dashboards & workflows' },
  { name: 'Landing Pages', path: '/services/landing-page-development', desc: 'High-converting pages for marketing & ads' },
  { name: 'Website Redesign', path: '/services/website-redesign', desc: 'Modern UX/UI makeover & performance boost' },
];

const registrationServices = [
  { name: 'GST Registration', path: '/services/gst-registration', desc: 'Official GSTIN with complete documentation' },
  { name: 'MSME / Udyam', path: '/services/msme-udyam-registration', desc: 'Government subsidies, loans & tender benefits' },
  { name: 'Company Incorporation', path: '/services/company-incorporation', desc: 'Pvt Ltd, LLP, OPC setup with DIN, MOA & AOA' },
  { name: 'FSSAI Registration', path: '/services/fssai-registration', desc: 'Mandatory food safety license & certificate' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 150);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', isDropdown: true },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Founder', path: '/founder' },
    { name: 'Contact', path: '/contact' },
  ];

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white border-b border-gray-200 shadow-sm ${
        isScrolled ? 'py-2 shadow-md' : 'py-3 md:py-4'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.img
            src="/header_logo.png"
            alt="PYNEXA Technologies Logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7 lg:gap-8">
          {navLinks.map((link, index) => {
            if (link.isDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={link.path}
                    className={`text-sm font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors py-2 ${
                      isServicesActive ? 'text-brand-primary' : 'text-brand-navy hover:text-brand-primary'
                    }`}
                  >
                    <span>{link.name}</span>
                    <FiChevronDown 
                      className={`text-xs transition-transform duration-200 ${
                        isServicesDropdownOpen ? 'rotate-180 text-brand-primary' : ''
                      }`} 
                    />
                  </Link>

                  {/* Mega Dropdown */}
                  <AnimatePresence>
                    {isServicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 mt-1"
                      >
                        <div className="p-6 grid grid-cols-2 gap-6 bg-gradient-to-b from-slate-50/60 to-white">
                          
                          {/* Category 1: Web & Digital Solutions (Primary Core) */}
                          <div className="border-r border-gray-100 pr-4">
                            <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
                              <div className="flex items-center gap-2">
                                <span className="p-1.5 rounded-lg bg-brand-primary/10 text-brand-primary text-sm">
                                  <FiGlobe />
                                </span>
                                <span className="text-xs font-extrabold uppercase tracking-wider text-brand-navy">
                                  Web & Digital Solutions
                                </span>
                              </div>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-primary text-white tracking-wider">
                                CORE
                              </span>
                            </div>

                            <div className="space-y-2">
                              {webServices.map((ws) => (
                                <Link
                                  key={ws.name}
                                  to={ws.path}
                                  className="group block p-2.5 rounded-xl hover:bg-brand-primary/5 transition-all"
                                >
                                  <div className="text-xs font-bold text-brand-navy group-hover:text-brand-primary transition-colors flex items-center justify-between">
                                    <span>{ws.name}</span>
                                    <FiArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-primary text-xs" />
                                  </div>
                                  <p className="text-[11px] text-gray-500 font-light mt-0.5 line-clamp-1">
                                    {ws.desc}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Category 2: Business Registration Services (Separate Category) */}
                          <div className="pl-2">
                            <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
                              <div className="flex items-center gap-2">
                                <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 text-sm">
                                  <FiShield />
                                </span>
                                <span className="text-xs font-extrabold uppercase tracking-wider text-brand-navy">
                                  Business Registration
                                </span>
                              </div>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white tracking-wider">
                                COMPLIANCE
                              </span>
                            </div>

                            <div className="space-y-2">
                              {registrationServices.map((rs) => (
                                <Link
                                  key={rs.name}
                                  to={rs.path}
                                  className="group block p-2.5 rounded-xl hover:bg-emerald-50/60 transition-all"
                                >
                                  <div className="text-xs font-bold text-brand-navy group-hover:text-emerald-700 transition-colors flex items-center justify-between">
                                    <span>{rs.name}</span>
                                    <FiArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-600 text-xs" />
                                  </div>
                                  <p className="text-[11px] text-gray-500 font-light mt-0.5 line-clamp-1">
                                    {rs.desc}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>

                        </div>

                        {/* Dropdown Bottom Banner */}
                        <div className="bg-slate-900 px-6 py-3 flex items-center justify-between text-xs text-white">
                          <span className="text-slate-300">
                            Launch your business online & stay 100% compliant under one roof.
                          </span>
                          <Link 
                            to="/services" 
                            className="font-bold text-brand-cyan hover:text-white flex items-center gap-1.5 tracking-wider uppercase text-[11px]"
                          >
                            Explore All Services <FiArrowRight />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            const isActive = location.pathname === link.path;
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link
                  to={link.path}
                  className={`text-sm font-bold uppercase tracking-wider transition-colors py-2 ${
                    isActive ? 'text-brand-primary' : 'text-brand-navy hover:text-brand-primary'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/get-quote"
              className="px-6 py-2 rounded-full bg-brand-primary text-white font-bold hover:bg-brand-cyan transition-all duration-300 active:scale-95 cursor-pointer uppercase tracking-wider text-xs shadow-md block"
            >
              Get a Quote
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-brand-navy hover:text-brand-primary focus:outline-none p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col px-6 py-4 gap-2">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-brand-navy hover:text-brand-primary text-base py-2.5 border-b border-gray-100 uppercase tracking-wider font-bold"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-brand-navy hover:text-brand-primary text-base py-2.5 border-b border-gray-100 uppercase tracking-wider font-bold"
              >
                About
              </Link>

              {/* Mobile Services Accordion */}
              <div className="border-b border-gray-100 py-2">
                <div 
                  className="flex items-center justify-between text-brand-navy text-base py-1 uppercase tracking-wider font-bold cursor-pointer"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  <span className={isServicesActive ? 'text-brand-primary' : ''}>Services</span>
                  <FiChevronDown className={`transition-transform ${isMobileServicesOpen ? 'rotate-180 text-brand-primary' : ''}`} />
                </div>

                {isMobileServicesOpen && (
                  <div className="mt-3 pl-2 space-y-4 pb-2">
                    {/* Web Solutions Group */}
                    <div>
                      <div className="text-[11px] font-extrabold uppercase tracking-widest text-brand-primary mb-2 flex items-center gap-1.5">
                        <FiGlobe className="text-xs" /> Web & Digital Solutions
                      </div>
                      <div className="space-y-1.5 pl-3 border-l-2 border-brand-primary/20">
                        {webServices.map((ws) => (
                          <Link
                            key={ws.name}
                            to={ws.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-sm text-gray-700 hover:text-brand-primary py-1 font-medium"
                          >
                            {ws.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Registration Group */}
                    <div>
                      <div className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-600 mb-2 flex items-center gap-1.5">
                        <FiShield className="text-xs" /> Business Registration
                      </div>
                      <div className="space-y-1.5 pl-3 border-l-2 border-emerald-500/20">
                        {registrationServices.map((rs) => (
                          <Link
                            key={rs.name}
                            to={rs.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-sm text-gray-700 hover:text-emerald-700 py-1 font-medium"
                          >
                            {rs.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/services"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-primary hover:underline pt-1"
                    >
                      View All Services Overview →
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/portfolio"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-brand-navy hover:text-brand-primary text-base py-2.5 border-b border-gray-100 uppercase tracking-wider font-bold"
              >
                Portfolio
              </Link>
              <Link
                to="/why-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-brand-navy hover:text-brand-primary text-base py-2.5 border-b border-gray-100 uppercase tracking-wider font-bold"
              >
                Why Us
              </Link>
              <Link
                to="/founder"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-brand-navy hover:text-brand-primary text-base py-2.5 border-b border-gray-100 uppercase tracking-wider font-bold"
              >
                Founder
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-brand-navy hover:text-brand-primary text-base py-2.5 border-b border-gray-100 uppercase tracking-wider font-bold"
              >
                Contact
              </Link>

              <Link
                to="/get-quote"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-3 text-center px-6 py-3 rounded-full bg-brand-primary text-white font-bold uppercase tracking-wider text-sm shadow-md block"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
