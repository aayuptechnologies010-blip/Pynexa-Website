import FounderHero from '../components/founder/FounderHero';
import AboutFounder from '../components/founder/AboutFounder';
import VisionBehind from '../components/founder/VisionBehind';
import FoundersVision from '../components/founder/FoundersVision';
import CoreExpertise from '../components/founder/CoreExpertise';
import LeadershipPhilosophy from '../components/founder/LeadershipPhilosophy';
import ProjectApproach from '../components/founder/ProjectApproach';
import CorePrinciples from '../components/founder/CorePrinciples';
import FounderMessage from '../components/founder/FounderMessage';
import PynexaPhilosophy from '../components/founder/PynexaPhilosophy';
import LookingAhead from '../components/founder/LookingAhead';
import ConnectFounder from '../components/founder/ConnectFounder';
import FounderCTA from '../components/founder/FounderCTA';

const Founder = () => {
  return (
    <div className="bg-white">
      <FounderHero />
      <AboutFounder />
      <VisionBehind />
      <FoundersVision />
      <CoreExpertise />
      <LeadershipPhilosophy />
      <ProjectApproach />
      <CorePrinciples />
      <FounderMessage />
      <PynexaPhilosophy />
      <LookingAhead />
      <ConnectFounder />
      <FounderCTA />
    </div>
  );
};

export default Founder;
