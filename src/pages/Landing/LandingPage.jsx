import Hero from './sections/Hero';
import TrustBar from './sections/TrustBar';
import HowItWorks from './sections/HowItWorks';
import ProofExplainer from './sections/ProofExplainer';
import Benefits from './sections/Benefits';
import FinalCta from './sections/FinalCta';
import Footer from '../../components/Footer';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <HowItWorks />
      <ProofExplainer />
      <Benefits />
      <FinalCta />
      <Footer />
    </>
  );
}
