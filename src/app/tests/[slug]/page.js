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
  return (tests || [])
    .filter((test) => test.status === "published")
    .map((test) => ({
      slug: test.slug,
    }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const test = (tests || []).find((t) => t.slug === slug && t.status === "published");

  if (!test) return {};

  const url = `${SITE_CONFIG.url}/tests/${test.slug}`;
  const title = test.seo?.title || test.name || test.hero?.title;
  const description = test.seo?.description || test.shortDescription || test.hero?.description || test.description;
  const image = test.hero?.image ? `${SITE_CONFIG.url}${test.hero.image}` : `${SITE_CONFIG.url}/logo.png`;

  return {
    title,
    description,
    keywords: test.seo?.keywords || [],
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: test.hero?.imageAlt || test.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function TestSlugPage({ params }) {
  const { slug } = await params;
  const test = (tests || []).find((t) => t.slug === slug && t.status === "published");

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
