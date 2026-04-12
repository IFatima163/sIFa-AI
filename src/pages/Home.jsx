import Hero from '../components/Hero';
import Pain from '../components/Pain';
import SystemsOverview from '../components/SystemsOverview';
import Pricing from '../components/Pricing';
import CTASection from '../components/CTASection';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <Pain />
      <SystemsOverview />
      <Testimonials />
      <Pricing />
      <CTASection />
    </main>
  );
}