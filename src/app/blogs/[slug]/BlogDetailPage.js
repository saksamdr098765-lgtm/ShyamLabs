"use client";

import Image from "next/image";
import { SITE_CONFIG } from "@/app/siteConfig";
import trackEvent from "@/app/utils/Analytics";
import {
FaArrowRight,
FaPhoneAlt,
FaCheckCircle,
FaQuestionCircle,
} from "react-icons/fa";
import Hero from "./Hero";
import HeroImage from "./HeroImage";
import QuickSummary from "./QuickSummary";
import Facts from "./Facts";
import Symptoms from "./Symptoms";
import TableOfContent from "./TableOfContent";
import Benefits from "./Benefits";
import NormalRange from "./NormalRange";
import Content from "./Content";
import Faqs from "./Faqs";
import RelatedBlogs from "./RelatedBlogs";
import RelatedTest from "./RelatedTest";
import Tags from "./Tags";
import CTA from "./CTA";


export default function BlogDetailPage({ blog }) {
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
   <main className="bg-white min-h-screen py-16 ">


  {/* Background Grid */}
  <div
    className="fixed inset-0 opacity-[0.03] pointer-events-none"
    style={{
      backgroundImage:
        "linear-gradient(#0A4F8A 1px, transparent 1px), linear-gradient(90deg, #0A4F8A 1px, transparent 1px)",
      backgroundSize: "70px 70px",
    }}
  />


<Hero blog={blog} openWhatsApp={openWhatsApp} SITE_CONFIG={SITE_CONFIG} trackEvent={trackEvent}></Hero>


<HeroImage blog={blog}></HeroImage>
<QuickSummary blog={blog}></QuickSummary>
 <Facts blog={blog}></Facts>
<Symptoms blog={blog}></Symptoms>
<TableOfContent blog={blog}></TableOfContent>
<Benefits blog={blog}></Benefits>
<NormalRange blog={blog}></NormalRange>
<Content blog={blog}></Content>
<Faqs blog={blog}></Faqs>
<RelatedBlogs blog={blog}></RelatedBlogs>


<RelatedTest blog={blog}></RelatedTest>
<Tags blog={blog}></Tags>
<CTA blog={blog} SITE_CONFIG={SITE_CONFIG} openWhatsApp={openWhatsApp} trackEvent={trackEvent}></CTA>

</main>


);
}
