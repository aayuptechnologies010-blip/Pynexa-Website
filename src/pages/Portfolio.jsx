import PortfolioHero from '../components/PortfolioHero';
import PortfolioIntro from '../components/PortfolioIntro';
import FeaturedProjects from '../components/FeaturedProjects';
import ProjectGrid from '../components/ProjectGrid';
import WhatWeCanBuild from '../components/WhatWeCanBuild';
import OurProcess from '../components/OurProcess';
import WhyOurWorkIsDifferent from '../components/WhyOurWorkIsDifferent';
import Industries from '../components/Industries';
import CTASection from '../components/CTASection';

const Portfolio = () => {
  return (
    <div className="bg-white">
      {/* 01. Portfolio Hero */}
      <PortfolioHero />

      {/* 02. Portfolio Intro */}
      <PortfolioIntro />

      {/* 04. Featured Projects */}
      <FeaturedProjects />

      {/* 03 & 05. Project Filters & Grid */}
      <ProjectGrid />

      {/* 07. What We Can Build */}
      <WhatWeCanBuild />

      {/* 08. Our Process (Reused) */}
      <div className="bg-[#EBF1FF]">
        <OurProcess />
      </div>

      {/* 09. Why Our Work Is Different */}
      <WhyOurWorkIsDifferent />

      {/* 10. Industries */}
      <Industries />

      {/* 11. Final CTA */}
      <CTASection />
    </div>
  );
};

export default Portfolio;
