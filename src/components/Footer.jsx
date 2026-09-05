import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-light pt-20 pb-10 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Col 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <img src="/header_logo.png" alt="PYNEXA Logo" className="h-10 md:h-12 w-auto object-contain" />
            </Link>
            <p className="text-gray-600 font-light max-w-sm mb-6 leading-relaxed text-sm">
              Empowering businesses with simple, powerful, and professional web solutions alongside seamless legal registration services.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/share/1K1uFNLgZs/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-xl flex items-center justify-center text-white bg-[#1877F2] hover:bg-[#1877F2]/80 transition-all duration-300 shadow-sm hover:-translate-y-1">
                <FaFacebookF size={14} />
              </a>
              <a href="https://www.instagram.com/pynexatechnologies?igsi=NjVmNnk0bmxwaHJj&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-xl flex items-center justify-center text-white bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] hover:opacity-90 transition-all duration-300 shadow-sm hover:-translate-y-1">
                <FaInstagram size={15} />
              </a>
              <a href="https://www.linkedin.com/in/prem-chandra-gaur-3a68b1430" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-xl flex items-center justify-center text-white bg-[#0A66C2] hover:bg-[#0A66C2]/80 transition-all duration-300 shadow-sm hover:-translate-y-1">
                <FaLinkedinIn size={14} />
              </a>
              <a href="https://youtube.com/@pynexa.a?si=-zxgjXVUChfSV62U" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-xl flex items-center justify-center text-white bg-[#FF0000] hover:bg-[#FF0000]/80 transition-all duration-300 shadow-sm hover:-translate-y-1">
                <FaYoutube size={15} />
              </a>
            </div>
          </div>

          {/* Col 2: Company */}
          <div>
            <h4 className="text-brand-navy font-bold mb-5 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-3 font-light text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-brand-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-[2px] bg-brand-primary"></span> Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-brand-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-[2px] bg-brand-primary"></span> About Us</Link></li>
              <li><Link to="/founder" className="text-gray-600 hover:text-brand-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-[2px] bg-brand-primary"></span> Meet Founder</Link></li>
              <li><Link to="/portfolio" className="text-gray-600 hover:text-brand-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-[2px] bg-brand-primary"></span> Portfolio</Link></li>
              <li><Link to="/why-us" className="text-gray-600 hover:text-brand-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-[2px] bg-brand-primary"></span> Why Choose Us</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-brand-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-[2px] bg-brand-primary"></span> Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Col 3: Web Solutions */}
          <div>
            <h4 className="text-brand-navy font-bold mb-5 uppercase tracking-wider text-xs">Web Solutions</h4>
            <ul className="space-y-3 font-light text-sm">
              <li><Link to="/services/business-website-development" className="text-gray-600 hover:text-brand-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-[2px] bg-brand-cyan"></span> Business Website</Link></li>
              <li><Link to="/services/e-commerce-development" className="text-gray-600 hover:text-brand-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-[2px] bg-brand-cyan"></span> E-Commerce Store</Link></li>
              <li><Link to="/services/custom-web-development" className="text-gray-600 hover:text-brand-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-[2px] bg-brand-cyan"></span> Custom Web Apps</Link></li>
              <li><Link to="/services/landing-page-development" className="text-gray-600 hover:text-brand-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-[2px] bg-brand-cyan"></span> Landing Pages</Link></li>
              <li><Link to="/services/website-redesign" className="text-gray-600 hover:text-brand-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-[2px] bg-brand-cyan"></span> Website Redesign</Link></li>
            </ul>
          </div>

          {/* Col 4: Registrations */}
          <div>
            <h4 className="text-brand-navy font-bold mb-5 uppercase tracking-wider text-xs">Registrations</h4>
            <ul className="space-y-3 font-light text-sm">
              <li><Link to="/services/gst-registration" className="text-gray-600 hover:text-emerald-600 transition-colors flex items-center gap-2"><span className="w-1.5 h-[2px] bg-emerald-500"></span> GST Registration</Link></li>
              <li><Link to="/services/msme-udyam-registration" className="text-gray-600 hover:text-emerald-600 transition-colors flex items-center gap-2"><span className="w-1.5 h-[2px] bg-emerald-500"></span> MSME / Udyam</Link></li>
              <li><Link to="/services/company-incorporation" className="text-gray-600 hover:text-emerald-600 transition-colors flex items-center gap-2"><span className="w-1.5 h-[2px] bg-emerald-500"></span> Incorporation</Link></li>
              <li><Link to="/services/fssai-registration" className="text-gray-600 hover:text-emerald-600 transition-colors flex items-center gap-2"><span className="w-1.5 h-[2px] bg-emerald-500"></span> FSSAI Food License</Link></li>
              <li><Link to="/get-quote" className="text-gray-600 hover:text-emerald-600 transition-colors flex items-center gap-2"><span className="w-1.5 h-[2px] bg-emerald-500"></span> Get Free Quote</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">
            &copy; {currentYear} PYNEXA Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500 font-medium">
            <Link to="/services" className="hover:text-brand-primary transition-colors">All Services</Link>
            <Link to="/contact" className="hover:text-brand-primary transition-colors">Contact Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
