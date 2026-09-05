import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiCheckCircle, 
  FiClock, 
  FiShield, 
  FiArrowRight, 
  FiFileText, 
  FiAward, 
  FiBriefcase, 
  FiCheckSquare 
} from 'react-icons/fi';
import { registrationServices } from '../data/registrationServicesData';

const iconMap = {
  "gst-registration": <FiFileText className="text-3xl" />,
  "msme-udyam-registration": <FiAward className="text-3xl" />,
  "company-incorporation": <FiBriefcase className="text-3xl" />,
  "fssai-registration": <FiCheckSquare className="text-3xl" />
};

const BusinessRegistrationSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 relative bg-slate-900 border-t border-b border-slate-800 text-white overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-brand-primary/10 blur-[130px] pointer-events-none rounded-full"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-emerald-400"></span>
              <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">
                Value-Added Business Services
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Business Registration & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Compliance Support
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed mb-3">
              While our primary expertise is building cutting-edge <strong className="text-white font-medium">Websites & Digital Solutions</strong>, we also help entrepreneurs establish their official legal identity without paperwork headaches.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold text-emerald-400">
              <span className="flex items-center gap-1.5"><FiCheckCircle /> 100% Online Filing</span>
              <span className="flex items-center gap-1.5"><FiShield /> Government Certified</span>
              <span className="flex items-center gap-1.5"><FiClock /> Fast Turnaround</span>
            </div>
          </div>
        </div>

        {/* Services 4-Card Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {registrationServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative bg-slate-800/70 hover:bg-slate-800 rounded-2xl p-7 border border-slate-700/80 hover:border-emerald-400/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-lg"
            >
              {/* Card top badges */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-900 transition-colors">
                    {iconMap[service.id]}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-300 bg-slate-700/80 px-2.5 py-1 rounded-full flex items-center gap-1 shrink-0">
                    <FiClock className="text-emerald-400" /> {service.turnaround}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-400 text-xs leading-relaxed mb-6 font-light">
                  {service.shortDesc}
                </p>

                <div className="space-y-2 mb-6 pt-4 border-t border-slate-700/60">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <FiCheckCircle className="text-emerald-400 text-sm shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <Link
                  to={`/services/${service.id}`}
                  className="text-xs font-bold text-emerald-400 hover:text-white uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  View Details <FiArrowRight />
                </Link>
                <Link
                  to="/get-quote"
                  className="text-[11px] font-bold px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-slate-900 transition-colors"
                >
                  Inquire Now
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-800/50 border border-slate-700/70 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-400/20 text-emerald-400 flex items-center justify-center shrink-0 text-xl font-bold">
              ✓
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                Need Both Web Development & Registration?
              </h4>
              <p className="text-xs text-slate-400 font-light mt-0.5">
                Save time and cost by bundling your website launch with complete business legal compliance.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="whitespace-nowrap px-6 py-2.5 rounded-full bg-white hover:bg-emerald-400 text-slate-900 font-bold text-xs uppercase tracking-wider transition-all shadow-md"
          >
            Consult With Our Experts →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BusinessRegistrationSection;
