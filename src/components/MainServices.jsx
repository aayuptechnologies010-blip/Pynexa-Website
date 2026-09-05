import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiGlobe, FiShoppingCart, FiLayout, FiSend, FiSettings, FiStar, FiCloud, FiTool } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const MainServices = () => {
  const services = [
    {
      id: "business-website-development",
      number: "01",
      icon: <FiGlobe />,
      title: "Business Website",
      desc: "Build a professional online presence with a responsive and modern business website designed around your brand and goals.",
      features: ["Custom UI/UX", "Responsive design", "Contact forms", "SEO-friendly structure"]
    },
    {
      id: "e-commerce-development",
      number: "02",
      icon: <FiShoppingCart />,
      title: "E-Commerce",
      desc: "Build a modern online store that allows customers to explore products, add them to cart, and place orders conveniently.",
      features: ["Product management", "Shopping cart", "Payment integration", "Admin dashboard"]
    },
    {
      id: "portfolio-development",
      number: "03",
      icon: <FiLayout />,
      title: "Portfolio Website",
      desc: "Showcase your work and build your personal brand with a clean, modern, and interactive digital portfolio.",
      features: ["Projects showcase", "Skills & Experience", "Testimonials", "Contact links"]
    },
    {
      id: "landing-page-development",
      number: "04",
      icon: <FiSend />,
      title: "Landing Page",
      desc: "High-impact, conversion-focused landing pages for marketing campaigns, advertisements, and business promotions.",
      features: ["Conversion-focused design", "Lead forms", "Fast loading", "Analytics-ready"]
    },
    {
      id: "custom-web-development",
      number: "05",
      icon: <FiSettings />,
      title: "Custom Development",
      desc: "Have a unique business requirement? We can develop custom web solutions according to your workflow and functionality.",
      features: ["CRM & Dashboards", "Booking systems", "Customer portals", "Custom APIs"]
    },
    {
      id: "website-redesign",
      number: "06",
      icon: <FiStar />,
      title: "Website Redesign",
      desc: "Transform an outdated website into a modern, responsive, user-friendly digital experience that performs better.",
      features: ["Modern UI upgrade", "Better UX flow", "Mobile responsive", "Performance boost"]
    },
    {
      id: "domain-hosting-setup",
      number: "07",
      icon: <FiCloud />,
      title: "Domain & Hosting",
      desc: "From domain configuration to hosting and deployment, we help get your website ready for the internet securely.",
      features: ["Domain setup", "Hosting setup", "SSL configuration", "Deployment"]
    },
    {
      id: "maintenance-support",
      number: "08",
      icon: <FiTool />,
      title: "Maintenance & Support",
      desc: "Keep your website updated, secure, functional, and performing well with ongoing maintenance and technical support.",
      features: ["Content updates", "Bug fixing", "Security updates", "Backup support"]
    }
  ];

  return (
    <section id="services-list" className="pt-32 md:pt-36 pb-20 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-primary/10 rounded-full text-brand-primary text-xs font-bold tracking-widest uppercase mb-4 border border-brand-primary/20">
            SERVICES DIRECTORY
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-brand-navy tracking-tight leading-tight mb-6">
            Complete Website & Web Solutions for <span className="text-brand-primary">Modern Businesses</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-3">
            <a 
              href="#services-list" 
              className="px-5 py-2.5 rounded-full bg-brand-primary text-white text-xs font-bold uppercase tracking-wider shadow-md"
            >
              🌐 Web Solutions (8)
            </a>
            <a 
              href="#registration-services" 
              className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-gray-200 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              🛡️ Business Registrations (4)
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Hover background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-light to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              {/* Border glow on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-primary/20 rounded-2xl transition-colors duration-300 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300 origin-bottom-left" style={{ textShadow: "0 0 20px rgba(0, 198, 255, 0.4)" }}>
                    {service.icon}
                  </div>
                  <div className="text-gray-300 font-bold text-2xl group-hover:text-brand-primary/30 transition-colors">
                    {service.number}
                  </div>
                </div>

                <h4 className="text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-primary transition-colors">{service.title}</h4>
                <p className="text-gray-600 font-light mb-8 flex-grow leading-relaxed">
                  {service.desc}
                </p>

                <div className="space-y-3 mb-10">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                      <FiCheck className="text-brand-cyan shrink-0 text-lg" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link 
                  to={`/services/${service.id}`}
                  className="mt-auto inline-flex items-center gap-2 text-brand-navy font-bold uppercase tracking-widest text-sm group-hover:text-brand-primary transition-colors w-max"
                >
                  Learn More 
                  <FiArrowRight className="transform group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainServices;
