import Hero from '../components/Hero';
import Pain from '../components/Pain';
import SystemsOverview from '../components/SystemsOverview';
import ResultsBar from '../components/ResultsBar';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Pain />
      <SystemsOverview />
      <ResultsBar />
      <CTASection />
    </main>
  );
}