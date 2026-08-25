import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-light pt-20 pb-10 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <img src="/header_logo.png" alt="PYNEXA Logo" className="h-10 md:h-14 w-auto object-contain" />
            </Link>
            <p className="text-gray-600 font-light max-w-sm mb-8 leading-relaxed">
              Empowering businesses with simple, powerful, and professional digital solutions to help them thrive in the digital world.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/share/1K1uFNLgZs/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl flex items-center justify-center text-white bg-[#1877F2] hover:bg-[#1877F2]/80 transition-all duration-300 shadow-sm hover:-translate-y-1">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/pynexatechnologies?igsi=NjVmNnk0bmxwaHJj&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl flex items-center justify-center text-white bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] hover:opacity-90 transition-all duration-300 shadow-sm hover:-translate-y-1">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/prem-chandra-gaur-3a68b1430" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl flex items-center justify-center text-white bg-[#0A66C2] hover:bg-[#0A66C2]/80 transition-all duration-300 shadow-sm hover:-translate-y-1">
                <FaLinkedinIn className="text-lg" />
              </a>
              <a href="https://youtube.com/@pynexa.a?si=-zxgjXVUChfSV62U" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl flex items-center justify-center text-white bg-[#FF0000] hover:bg-[#FF0000]/80 transition-all duration-300 shadow-sm hover:-translate-y-1">
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-brand-navy font-bold mb-6 uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-4 font-light">
              <li><Link to="/" className="text-gray-600 hover:text-brand-primary transition-colors flex items-center gap-2"><span className="w-2 h-[2px] bg-brand-primary"></span> Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-brand-primary transition-colors flex items-center gap-2"><span className="w-2 h-[2px] bg-brand-primary"></span> About Us</Link></li>
              <li><Link to="/founder" className="text-gray-600 hover:text-brand-primary transition-colors flex items-center gap-2"><span className="w-2 h-[2px] bg-brand-primary"></span> Meet Founder</Link></li>
              <li><Link to="/why-us" className="text-gray-600 hover:text-brand-primary transition-colors flex items-center gap-2"><span className="w-2 h-[2px] bg-brand-primary"></span> Why Choose Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-navy font-bold mb-6 uppercase tracking-widest text-sm">Explore</h4>
            <ul className="space-y-4 font-light">
              <li><Link to="/services" className="text-gray-600 hover:text-brand-primary transition-colors flex items-center gap-2"><span className="w-2 h-[2px] bg-brand-cyan"></span> Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-600 hover:text-brand-primary transition-colors flex items-center gap-2"><span className="w-2 h-[2px] bg-brand-cyan"></span> Portfolio</Link></li>
              <li><Link to="/get-quote" className="text-gray-600 hover:text-brand-primary transition-colors flex items-center gap-2"><span className="w-2 h-[2px] bg-brand-cyan"></span> Get a Quote</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-brand-primary transition-colors flex items-center gap-2"><span className="w-2 h-[2px] bg-brand-cyan"></span> Contact Us</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">
            &copy; {currentYear} PYNEXA Technologies. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
