
import ownerImg from '../../assets/owner.jpeg';

const FounderMessage = () => {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-gray-100 relative">
          
          {/* Decorative quote mark */}
          <div className="absolute top-8 left-8 text-6xl text-brand-primary/10 font-serif leading-none">
            "
          </div>
          
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-brand-primary uppercase tracking-widest mb-2">FROM THE FOUNDER</h2>
            <h3 className="text-3xl font-bold text-brand-navy">A Note From Prem</h3>
          </div>

          <div className="space-y-6 text-gray-600 font-light text-lg md:text-xl leading-relaxed relative z-10">
            <p>
              "At PYNEXA Technologies, our goal is not simply to create websites. We want to understand the ideas, requirements, and goals behind every project and transform them into digital experiences that create real value.
            </p>
            <p>
              I believe technology should be simple, purposeful, and aligned with business needs. As PYNEXA grows, our focus will remain on quality, innovation, transparent communication, and building long-term relationships with the businesses we work with."
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 pt-10 border-t border-gray-100">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-brand-primary shrink-0 shadow-md">
              <img src={ownerImg} alt="Prem Chandra Gaur" className="w-full h-full object-cover object-top" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-brand-navy text-xl font-serif italic mb-1">Prem Chandra Gaur</h4>
              <p className="text-brand-primary text-xs font-bold tracking-widest uppercase">Founder & CEO</p>
              <p className="text-gray-400 text-xs mt-1">PYNEXA Technologies</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
