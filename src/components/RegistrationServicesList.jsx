import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FiFileText, 
  FiAward, 
  FiBriefcase, 
  FiCheckSquare, 
  FiCheck, 
  FiClock, 
  FiArrowRight, 
  FiShield, 
  FiFilePlus,
  FiHelpCircle
} from 'react-icons/fi';
import { registrationServices } from '../data/registrationServicesData';

const iconMap = {
  "gst-registration": <FiFileText className="text-3xl" />,
  "msme-udyam-registration": <FiAward className="text-3xl" />,
  "company-incorporation": <FiBriefcase className="text-3xl" />,
  "fssai-registration": <FiCheckSquare className="text-3xl" />
};

const RegistrationServicesList = () => {
  return (
    <section id="registration-services" className="py-24 bg-gradient-to-b from-slate-50 to-white relative border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-4">
            <FiShield /> Legal & Regulatory Support
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-navy tracking-tight leading-tight">
            Business Registration & <span className="text-emerald-600">Compliance Services</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg mt-4 font-light leading-relaxed">
            Along with our core Website and Web Solutions, we offer end-to-end documentation, filing, and advisory to get your venture legally established and 100% compliant.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {registrationServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-400"></div>

              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                    {iconMap[service.id]}
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {service.badge}
                    </span>
                    <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                      <FiClock className="text-emerald-600" /> {service.turnaround}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-brand-navy mb-2">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">
                  {service.desc}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                    What We Take Care Of:
                  </h4>
                  <div className="space-y-2.5">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-700 font-medium">
                        <FiCheck className="text-emerald-500 shrink-0 text-base mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Documents Checklist preview box */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-8">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-navy mb-2">
                    <FiFilePlus className="text-emerald-600" /> Key Documents Needed:
                  </div>
                  <ul className="text-[11px] text-gray-600 space-y-1 font-light list-disc list-inside">
                    {service.documentsRequired.slice(0, 3).map((doc, dIdx) => (
                      <li key={dIdx} className="truncate">{doc}</li>
                    ))}
                    {service.documentsRequired.length > 3 && (
                      <li className="text-emerald-700 font-medium list-none pt-0.5">
                        + {service.documentsRequired.length - 3} more (view details page)
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center justify-center gap-2 text-brand-navy hover:text-emerald-700 font-bold uppercase tracking-wider text-xs transition-colors py-2"
                >
                  Full Details & Process <FiArrowRight />
                </Link>
                <div className="flex items-center gap-2">
                  <a
                    href="https://wa.me/918081522864"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none text-center px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    WhatsApp
                  </a>
                  <Link
                    to="/get-quote"
                    className="flex-1 sm:flex-none text-center px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Get Consultation
                  </Link>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Assurance banner */}
        <div className="mt-16 p-8 rounded-3xl bg-brand-navy text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 text-emerald-400 flex items-center justify-center shrink-0 text-2xl">
              <FiHelpCircle />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1 text-white">Not sure which registration your business needs?</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed max-w-2xl">
                Connect with our advisory team. We evaluate your business model, turnover projections, and operational type to suggest the exact registrations required.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/918081522864"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-widest transition-all shadow-lg"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

export default RegistrationServicesList;
