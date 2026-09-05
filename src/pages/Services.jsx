import ServicesHero from '../components/ServicesHero';
import WhatWeOffer from '../components/WhatWeOffer';
import MainServices from '../components/MainServices';
import RegistrationServicesList from '../components/RegistrationServicesList';
import WhyChooseUs from '../components/WhyChooseUs';
import OurProcess from '../components/OurProcess';
import Technologies from '../components/Technologies';
import WhoWeServe from '../components/WhoWeServe';
import FindYourSolution from '../components/FindYourSolution';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const Services = () => {
  return (
    <div className="bg-white">
      {/* 01. Main Services (Web & Digital Solutions - 8 cards) */}
      <MainServices />

      {/* 02. Business Registration Services */}
      <RegistrationServicesList />

      {/* 03. Digital Solutions & Overview (Moved downside) */}
      <ServicesHero />

      {/* 04. What We Offer */}
      <WhatWeOffer />

      {/* 05. Why Choose PYNEXA */}
      <WhyChooseUs />

      {/* 06. Our Development Process */}
      <OurProcess />

      {/* 07. Technologies */}
      <Technologies />

      {/* 08. Who We Serve */}
      <WhoWeServe />

      {/* 09. Find Your Solution */}
      <FindYourSolution />

      {/* 10. FAQ */}
      <FAQSection />

      {/* 11. Final CTA */}
      <CTASection />
    </div>
  );
};

export default Services;
