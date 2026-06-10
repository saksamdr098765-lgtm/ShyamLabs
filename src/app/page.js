
import CTA from "./components/CTA";
import DiagnosticTechnology from "./components/DaignosticTechnology";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

import PopularPackages from "./components/PopularPackages";

import TestCategories from "./components/TestCategories";
import Testimonials from "./components/Testimonials";
import WeekendOffers from "./components/WeekendOffers";
import WhyShyamLabs from "./components/WhyShyamLabs";
export const metadata = {
  title: "Shyam Budget Friendly Labs | Affordable Diagnostic Tests",
  description:
    "Get accurate and affordable pathology tests at Shyam Budget Friendly Labs. Blood tests, full body checkups, home sample collection available.",
  keywords: [
  "pathology lab in Panchkula",
  "blood test near me",
  "diagnostic centre in Panchkula",
  "affordable lab tests",
  "full body checkup Panchkula",
  "home sample collection Panchkula",
  "health checkup packages",
  "cheap blood test near me",
  "accurate blood test reports",
  "Shyam Budget Friendly Labs",
],
  openGraph: {
    title: "Shyam Budget Friendly Labs",
    description: "Affordable and accurate diagnostic services",
    url: "https://www.shyambudgetfriendlylabs.com/",
    siteName: "Shyam Budget Friendly Labs",
    images: [
      {
        url: "https://www.shyambudgetfriendlylabs.com/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};
export default function Home() {
  return (
  <>
  <Hero></Hero>
  <WeekendOffers></WeekendOffers>
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
