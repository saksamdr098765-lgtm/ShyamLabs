"use client";


import { SITE_CONFIG } from "@/app/siteConfig";
import trackEvent from "@/app/utils/Analytics";

import Hero from "../components/Hero";
import HeroImage from "../components/HeroImage";
import Facts from "../components/Facts";
import Services from "../components/Services";

import PopularTests from "../components/PopularTests";
import CityOverview from "../components/CityOverview";
import CityDescription from "../components/CityDescription";
import ContentSection from "../components/ContentSection";
import AreaCovered from "../components/AreaCovered";
import HowItWorks from "../components/HowItWorks";
import Faqs from "../components/Faqs";
import Testimonials from "../components/Testimonials";
import RelatedLocations from "../components/RelatedLocations";
import WhyChooseUs from "../components/WhyChooseUs";
import HealthConditions from "../components/HealthConditions";
import WhoShouldGetThisTest from "../components/WhoShouldGetThisTest";
import PopularSearch from "../components/PopularSearch";

export default function LocationDetailPage({ location }) {
  const openWhatsApp = (message) => {
    trackEvent("whatsApp_click", {
      page_location: window.location.href,
    });

    window.open(
      `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <main className="bg-white min-h-screen ">

      {/* GRID BG */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0A4F8A 1px, transparent 1px), linear-gradient(90deg, #0A4F8A 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* HERO */}
     <Hero openWhatsApp={openWhatsApp} location={location} SITE_CONFIG={SITE_CONFIG}></Hero>

      {/* IMAGE */}
    <HeroImage location={location}/>

      {/* FACTS */}
    
<Facts location={location}></Facts>
<WhyChooseUs location={location}></WhyChooseUs>
      {/* SERVICES */}
  <Services location={location}></Services>
{/* POPULAR TESTS */}
<PopularTests location={location}></PopularTests>
{/* CITY OVERVIEW */}
<CityOverview location={location}></CityOverview>
{/* CITY DESCRIPTION */}
<CityDescription location={location}></CityDescription>
<HealthConditions location={location}></HealthConditions>
<WhoShouldGetThisTest location={location}></WhoShouldGetThisTest>
      {/* CONTENT SECTIONS */}
  <ContentSection location={location}></ContentSection>

      {/* AREAS COVERED */}
     <AreaCovered location={location}></AreaCovered>
{/* HOW IT WORKS */}
<HowItWorks></HowItWorks>
      {/* FAQ */}
   <Faqs location={location}></Faqs>
      {/* TESTIMONIALS */}
<Testimonials location={location}></Testimonials>
{/* RELATED LOCATIONS */}
<RelatedLocations location={location}></RelatedLocations>
<PopularSearch location={location}></PopularSearch>
    </main>
  );
}