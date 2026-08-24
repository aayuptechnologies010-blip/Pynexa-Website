import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCheck, FiArrowRight } from 'react-icons/fi';
import CTASection from '../components/CTASection';

// Full service data matching the services page
const allServicesData = [
  {
    id: "business-website-development",
    icon: "🌐",
    title: "Business Website Development",
    tagline: "Professional Websites That Represent Your Business.",
    desc: "Build a professional online presence with a responsive and modern business website designed around your brand and goals.",
    features: [
      "Custom UI/UX Design",
      "Responsive Design (Mobile/Tablet/Desktop)",
      "Business Information Pages",
      "Contact Forms",
      "WhatsApp Integration",
      "Google Maps Integration",
      "SEO-Friendly Structure",
      "Deployment Support"
    ],
    whyUs: [
      "We understand your business before we design or develop anything.",
      "Every element is crafted to represent your brand professionally.",
      "We focus on user experience so visitors find and contact you easily."
    ]
  },
  {
    id: "e-commerce-development",
    icon: "🛒",
    title: "E-Commerce Website Development",
    tagline: "Turn Your Products Into an Online Business.",
    desc: "Build a modern online store that allows customers to explore products, add them to cart, and place orders conveniently.",
    features: [
      "Product Management",
      "Categories & Filters",
      "Shopping Cart",
      "Checkout Flow",
      "Payment Integration",
      "Order Management",
      "Customer Accounts",
      "Admin Dashboard"
    ],
    whyUs: [
      "We design e-commerce experiences optimized for conversions.",
      "Secure and reliable payment integration you can trust.",
      "Admin dashboards that make managing your store easy."
    ]
  },
  {
    id: "portfolio-development",
    icon: "🎨",
    title: "Portfolio Website Development",
    tagline: "Showcase Your Work. Build Your Personal Brand.",
    desc: "Create a stunning digital portfolio that showcases your skills, work, and experience to potential clients and employers.",
    features: [
      "About Me Section",
      "Skills Showcase",
      "Projects Gallery",
      "Work Experience Timeline",
      "Testimonials",
      "Contact Section",
      "Social Media Links",
      "Responsive Design"
    ],
    whyUs: [
      "We help you present your work in the most professional way.",
      "Clean, fast, and impressive interfaces that recruiters love.",
      "Completely custom designs that reflect your personal style."
    ]
  },
  {
    id: "landing-page-development",
    icon: "🚀",
    title: "Landing Page Development",
    tagline: "Focused Pages Designed to Convert Visitors.",
    desc: "High-impact landing pages for products, services, marketing campaigns, advertisements, and business promotions.",
    features: [
      "Conversion-Focused Design",
      "Strong CTA Sections",
      "Lead Capture Forms",
      "Fully Responsive Layout",
      "Fast Loading Performance",
      "WhatsApp Integration",
      "Analytics-Ready Structure",
      "A/B Test Friendly"
    ],
    whyUs: [
      "We design landing pages with one goal: converting visitors into leads.",
      "Every element is strategically placed to guide the user.",
      "Fast-loading pages that keep bounce rates low."
    ]
  },
  {
    id: "custom-web-development",
    icon: "⚙️",
    title: "Custom Web Development",
    tagline: "Web Solutions Built Around Your Requirements.",
    desc: "Have a unique business requirement? We can develop custom web solutions according to your workflow and functionality.",
    features: [
      "CRM Development",
      "Admin Dashboards",
      "Business Management Systems",
      "Booking Systems",
      "Customer Portals",
      "Custom APIs",
      "Web Applications",
      "Database Design"
    ],
    whyUs: [
      "We don't force you into a template — we build exactly what you need.",
      "Scalable architectures that grow with your business.",
      "Full transparency throughout the custom development process."
    ]
  },
  {
    id: "website-redesign",
    icon: "✨",
    title: "Website Redesign",
    tagline: "Give Your Existing Website a Modern Look.",
    desc: "Transform an outdated website into a modern, responsive, user-friendly digital experience that performs and converts better.",
    features: [
      "Modern UI Design Upgrade",
      "Improved User Experience (UX)",
      "Mobile Responsive Layout",
      "Performance Optimization",
      "Updated Content Structure",
      "SEO Improvements",
      "Speed Optimization",
      "Cross-Browser Compatibility"
    ],
    whyUs: [
      "We analyze what's not working on your current site before redesigning.",
      "We preserve your brand identity while modernizing the experience.",
      "The result is a site that feels fresh and performs better."
    ]
  },
  {
    id: "domain-hosting-setup",
    icon: "☁️",
    title: "Domain & Hosting Setup",
    tagline: "Get Your Website Online, Hassle-Free.",
    desc: "From domain configuration to hosting and deployment, we help get your website ready for the internet securely and reliably.",
    features: [
      "Domain Registration & Setup",
      "Hosting Setup & Configuration",
      "SSL Certificate Setup",
      "DNS Configuration",
      "Business Email Setup",
      "Website Deployment",
      "Basic Server Configuration",
      "Setup Documentation"
    ],
    whyUs: [
      "We handle all the technical details so you don't have to.",
      "We recommend reliable hosting based on your budget and needs.",
      "Complete handover with documentation so you stay informed."
    ]
  },
  {
    id: "maintenance-support",
    icon: "🔧",
    title: "Website Maintenance & Support",
    tagline: "We Don't Stop After Launch.",
    desc: "Keep your website updated, secure, functional, and performing well with our ongoing maintenance and technical support services.",
    features: [
      "Content Updates",
      "Bug Fixing",
      "Security Updates",
      "Performance Optimization",
      "Backup & Recovery Support",
      "Technical Assistance",
      "Feature Additions",
      "Regular Health Checks"
    ],
    whyUs: [
      "We treat your website as a long-term digital asset.",
      "Quick response times for critical issues and requests.",
      "Proactive monitoring to catch issues before they become problems."
    ]
  }
];

const ServiceDetail = () => {
  const { id } = useParams();
  const service = allServicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div className="pt-32 pb-24 text-center min-h-screen bg-brand-light">
        <h2 className="text-3xl text-brand-navy font-bold mb-4">Service Not Found</h2>
        <Link to="/services" className="text-brand-primary hover:underline font-bold">← Return to Services</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      
      {/* Page Header */}
      <div className="bg-brand-navy pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/5 blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-brand-cyan hover:text-white transition-colors mb-10 font-bold tracking-widest uppercase text-sm"
          >
            <FiArrowLeft /> Back to Services
          </Link>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="text-5xl mb-6">{service.icon}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 leading-tight">
              {service.tagline}
            </h1>
            <p className="text-gray-400 font-light text-xl leading-relaxed max-w-2xl">
              {service.desc}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">

              {/* What's Included */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold text-brand-navy mb-8 uppercase tracking-widest">What's Included</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-brand-light p-4 rounded-xl border border-gray-100">
                      <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                        <FiCheck className="text-brand-primary text-sm" />
                      </div>
                      <span className="text-brand-navy font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Why Choose Us For This */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-brand-navy mb-8 uppercase tracking-widest">Why Choose PYNEXA For This?</h2>
                <div className="space-y-6">
                  {service.whyUs.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-6 rounded-xl border-l-4 border-brand-cyan bg-[#EBF1FF]">
                      <div className="w-8 h-8 rounded-full bg-brand-cyan/20 flex items-center justify-center shrink-0 text-brand-cyan font-bold text-sm mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-gray-700 font-light leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-brand-navy p-8 rounded-2xl text-white sticky top-32">
                <h3 className="text-xl font-bold mb-2">Ready to Start?</h3>
                <p className="text-gray-400 font-light text-sm mb-8 leading-relaxed">
                  Get a free consultation and customized quote for your project.
                </p>
                <Link 
                  to="/get-quote"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-brand-primary hover:bg-brand-cyan text-white font-bold uppercase tracking-widest rounded-full transition-colors shadow-lg text-sm"
                >
                  Get a Free Quote <FiArrowRight />
                </Link>
                <a 
                  href="https://wa.me/918081522864"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 mt-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold uppercase tracking-widest rounded-full transition-colors shadow-lg text-sm"
                >
                  WhatsApp Us
                </a>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-gray-400 text-sm font-light">Have questions? We're happy to discuss your requirements before you commit.</p>
                </div>
              </div>

              {/* Other Services */}
              <div>
                <h3 className="font-bold text-brand-navy tracking-widest uppercase text-sm mb-4">Other Services</h3>
                <div className="space-y-2">
                  {allServicesData
                    .filter(s => s.id !== id)
                    .slice(0, 4)
                    .map((s, idx) => (
                    <Link 
                      key={idx}
                      to={`/services/${s.id}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-brand-light transition-colors group"
                    >
                      <span className="text-xl">{s.icon}</span>
                      <span className="text-brand-navy font-medium text-sm group-hover:text-brand-primary transition-colors">{s.title}</span>
                      <FiArrowRight className="ml-auto text-gray-300 group-hover:text-brand-primary transition-colors" />
                    </Link>
                  ))}
                  <Link 
                    to="/services"
                    className="flex items-center gap-2 p-3 text-brand-primary font-bold text-sm hover:underline"
                  >
                    View All Services <FiArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <CTASection />
    </div>
  );
};

export default ServiceDetail;
