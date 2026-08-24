import ServicesHero from '../components/ServicesHero';
import WhatWeOffer from '../components/WhatWeOffer';
import MainServices from '../components/MainServices';
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
      {/* 01. Services Hero */}
      <ServicesHero />

      {/* 02. What We Offer */}
      <WhatWeOffer />

      {/* 03. Main Services (8 cards) */}
      <MainServices />

      {/* 04. Why Choose PYNEXA */}
      <WhyChooseUs />

      {/* 05. Our Development Process */}
      <OurProcess />

      {/* 06. Technologies */}
      <Technologies />

      {/* 07. Who We Serve */}
      <WhoWeServe />

      {/* 08. Find Your Solution */}
      <FindYourSolution />

      {/* 09. FAQ */}
      <FAQSection />

      {/* 10. Final CTA */}
      <CTASection />
    </div>
  );
};

export default Services;
