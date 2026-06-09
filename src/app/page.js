
import CTA from "./components/CTA";
import DiagnosticTechnology from "./components/DaignosticTechnology";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

import PopularPackages from "./components/PopularPackages";

import TestCategories from "./components/TestCategories";
import Testimonials from "./components/Testimonials";
import WhyShyamLabs from "./components/WhyShyamLabs";

export default function Home() {
  return (
  <>
  <Hero></Hero>
  <PopularPackages></PopularPackages>
  <TestCategories></TestCategories>
  <WhyShyamLabs></WhyShyamLabs>
  <DiagnosticTechnology></DiagnosticTechnology>

<Testimonials></Testimonials>
<CTA></CTA>
<Footer></Footer>
  </>
  );
}
