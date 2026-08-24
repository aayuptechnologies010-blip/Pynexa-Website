import { FiLinkedin } from 'react-icons/fi';

const ConnectFounder = () => {
  return (
    <section className="py-20 bg-brand-light border-y border-gray-100 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-brand-navy mb-4">Connect With Prem</h2>
        <p className="text-gray-500 font-light max-w-md mx-auto mb-8">
          Follow the journey, ideas, and updates behind PYNEXA Technologies.
        </p>
        
        <div className="flex justify-center gap-4">
          <a 
            href="https://www.linkedin.com/in/prem-chandra-gaur-3a68b1430" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#0A66C2] text-white px-6 py-3 rounded-full font-bold hover:bg-[#004182] transition-colors shadow-md"
          >
            <FiLinkedin className="text-xl" />
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConnectFounder;
