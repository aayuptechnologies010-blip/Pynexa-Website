import HeroSection from '../components/HeroSection';
import TrustSection from '../components/TrustSection';
import ServicesSection from '../components/ServicesSection';
import BusinessRegistrationSection from '../components/BusinessRegistrationSection';
import HowWeWork from '../components/HowWeWork';
import WhyChooseUs from '../components/WhyChooseUs';
import PortfolioSection from '../components/PortfolioSection';
import Testimonials from '../components/Testimonials';
import AboutSection from '../components/AboutSection'; // This currently serves as the Founder section
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <div>
      {/* 1. Hero */}
      <HeroSection />
      
      {/* 2. Trust / Intro */}
      <TrustSection />
      
      {/* 3. Services (Core Web Solutions) */}
      <ServicesSection />

      {/* 3.1 Business Registration Services (Additional Value Added) */}
      <BusinessRegistrationSection />
      
      {/* 4. How We Work */}
      <HowWeWork />
      
      {/* 5. Why Choose Us */}
      <WhyChooseUs />
      
      {/* 6. Portfolio */}
      <PortfolioSection />
      
      {/* 7. Testimonials */}
      <Testimonials />
      
      {/* 8. Meet Founder */}
      <AboutSection />
      
      {/* 9. CTA */}
      <CTASection />
    </div>
  );
};

export default Home;
