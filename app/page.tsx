import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Clients from "./components/sections/Clients";
import Portfolio from "./components/sections/Portfolio";
import Testimonials from "./components/sections/Testimonials";
import TeamSection from "./components/sections/TeamSection";
import CTASection from "./components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <Portfolio />
      <Testimonials />
      <TeamSection />
      <CTASection />
    </>
  );
}
