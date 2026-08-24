import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiMonitor, 
  FiShoppingCart, 
  FiLayout, 
  FiCode, 
  FiTarget, 
  FiServer, 
  FiSettings 
} from 'react-icons/fi';

const servicesData = [
  {
    id: "business-websites",
    title: "Business & Corporate Websites",
    description: "Professional, scalable websites designed to establish your corporate identity and drive business growth.",
    icon: <FiMonitor className="text-3xl" />,
    details: "Our business websites are built to convert visitors into customers. We focus on fast loading speeds, SEO-friendly structures, and a design that perfectly encapsulates your brand identity."
  },
  {
    id: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    description: "Robust online stores with secure payment gateways, inventory management, and seamless user experiences.",
    icon: <FiShoppingCart className="text-3xl" />,
    details: "Launch your online store with our comprehensive e-commerce solutions. We provide secure payment integrations, easy-to-manage product catalogs, and conversion-optimized checkout flows."
  },
  {
    id: "ui-ux-design",
    title: "UI/UX & Responsive Design",
    description: "Beautiful, intuitive interfaces that look and work perfectly across all devices, from mobile to desktop.",
    icon: <FiLayout className="text-3xl" />,
    details: "User experience is at the heart of everything we build. We design interfaces that are not only visually stunning but also highly intuitive, ensuring your users find exactly what they need effortlessly."
  },
  {
    id: "custom-web-solutions",
    title: "Custom Web Solutions",
    description: "Tailored web applications built specifically to address your unique business challenges and workflows.",
    icon: <FiCode className="text-3xl" />,
    details: "Have a unique requirement? We build bespoke web applications tailored to your specific workflows, integrating custom logic and databases to solve complex business problems."
  },
  {
    id: "landing-pages",
    title: "Landing Page Development",
    description: "High-converting landing pages optimized for marketing campaigns, lead generation, and product launches.",
    icon: <FiTarget className="text-3xl" />,
    details: "Maximize your marketing ROI with highly optimized landing pages. We focus on clear calls-to-action, persuasive copywriting structures, and A/B testing capabilities."
  },
  {
    id: "domain-hosting",
    title: "Domain & Hosting Setup",
    description: "End-to-end assistance with securing your domain name and setting up reliable, high-performance hosting.",
    icon: <FiServer className="text-3xl" />,
    details: "We handle the technical heavy lifting. From securing the perfect domain name to configuring high-speed, secure hosting environments with SSL certificates."
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    description: "Ongoing support, security updates, and performance optimization to keep your website running smoothly.",
    icon: <FiSettings className="text-3xl" />,
    details: "Your website needs constant care. Our maintenance packages include regular backups, security patches, plugin updates, and performance monitoring."
  }
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="py-24 relative bg-brand-navy overflow-hidden text-brand-light">
      {/* Geometric background element */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-navy/50 rotate-45 transform origin-top-left -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-white/10 pb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[2px] bg-brand-cyan"></div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-brand-cyan font-bold tracking-widest uppercase text-sm"
              >
                Core Expertise
              </motion.h2>
            </div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white tracking-tighter"
            >
              Digital Solutions That <br />
              <span className="text-gradient">Deliver Value</span>
            </motion.h3>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <p className="text-gray-400 text-lg max-w-md font-light border-l border-brand-cyan/30 pl-6">
              Every business deserves a strong digital identity. We provide comprehensive web services tailored to your specific needs.
            </p>
            <Link to="/services" className="text-brand-cyan font-bold uppercase tracking-widest hover:text-white transition-colors text-sm">
              View All Services →
            </Link>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesData.slice(0, 6).map((service) => (
            <Link to={`/services/${service.id}`} key={service.id}>
              <motion.div 
                variants={itemVariants}
                className="group h-full bg-brand-navy/80 p-10 border border-white/5 hover:border-brand-cyan hover:bg-brand-navy transition-all duration-300 relative overflow-hidden cursor-pointer"
              >
                {/* Geometric Hover Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-brand-cyan opacity-0 group-hover:opacity-10 transform translate-x-8 -translate-y-8 rotate-45 transition-all duration-300"></div>
                
                <div className="w-14 h-14 bg-brand-navy border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-8 group-hover:bg-brand-cyan group-hover:text-brand-navy transition-colors duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-brand-cyan transition-colors">{service.title}</h4>
                <p className="text-gray-400 font-light leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 text-brand-cyan text-sm font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More →
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
