import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const FounderCTA = () => {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="text-sm font-bold text-brand-cyan uppercase tracking-widest mb-4">LET'S BUILD TOGETHER</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight max-w-3xl mx-auto">
          Have an Idea? Let's Turn It Into Something Meaningful.
        </h3>
        
        <p className="text-lg text-gray-400 font-light mb-12 max-w-2xl mx-auto">
          Whether you're starting a new business, building your first website, or looking for a custom digital solution, let's discuss how PYNEXA Technologies can help.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/get-quote" className="px-8 py-4 bg-brand-primary hover:bg-brand-cyan text-white font-bold uppercase tracking-wider transition-colors shadow-lg shadow-brand-primary/20 rounded-full flex items-center justify-center gap-2 group">
            Start Your Project <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/services" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-wider transition-colors rounded-full flex items-center justify-center border border-white/10">
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FounderCTA;
