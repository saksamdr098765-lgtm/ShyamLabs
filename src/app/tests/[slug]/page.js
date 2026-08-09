import React from "react";
import Hero from "./components/Hero";
import QuickFacts from "./components/QuickFacts";
import WhyChooseUs from "./components/WhyChooseUs";
import TestDetails from "./components/TestDetails";
import Preparation from "./components/Preparation";
import BookingProcess from "./components/BookingProcess";
import PricePreview from "./components/PricePreview";
import RelatedTests from "./components/RelatedTest";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import { tests } from "@/app/data/tests";
import { notFound } from "next/navigation";
import SITE_CONFIG from "@/app/siteConfig";

export async function generateStaticParams() {
  return (tests || []).map((test) => ({
    slug: test.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const test = (tests || []).find((t) => t.slug === slug);

  if (!test) return {};

  return {
    title: test.seo?.title || test.name || test.hero?.title,
    description: test.seo?.description || test.shortDescription || test.hero?.description,
  };
}

export default async function TestSlugPage({ params }) {
  const { slug } = await params;
  const test = (tests || []).find((t) => t.slug === slug);

  if (!test) {
    notFound();
  }

  return (
    <main className="bg-white">
      <Hero hero={test.hero} slug={slug} testName={test.name} />
      <QuickFacts quickFacts={test.quickFacts} />
      <WhyChooseUs whyChooseUs={test.whyChooseUs} />
      <TestDetails testDetails={test.testDetails} />
      <Preparation preparation={test.preparation} />
      <BookingProcess bookingProcess={test.bookingProcess} />
      <PricePreview pricePreview={test.pricePreview} slug={slug} />
      <RelatedTests relatedTests={test.relatedTests} />
      <FAQ faq={test.faq} />
      <CTA cta={test.cta} slug={slug} testName={test.name} />
    </main>
  );
}
