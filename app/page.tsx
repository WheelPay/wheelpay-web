import Hero from "./components/Hero";
import Stats from "./components/Stats";
import CostComparison from "./components/CostComparison";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import BuiltFor from "./components/BuiltFor";
import AppShowcase from "./components/AppShowcase";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <CostComparison />
      <HowItWorks />
      <Benefits />
      <BuiltFor />
      <AppShowcase />
      <Testimonials />
      <CTA />
    </>
  );
}
