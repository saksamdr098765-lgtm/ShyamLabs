import { locations } from "@/app/data/locations";
import { notFound } from "next/navigation";
import Hero from "./components/Hero";
import LocationOverview from "./components/LocationOverview";
import CentralHubLinks from "./components/CentralHubLinks";
import DiagnosticServices from "./components/DiagnosticServices";
import PopularTests from "./components/PopularTests";
import WhyChooseUs from "./components/WhyChooseUs";
import HealthPackages from "./components/HealthPackages";
import HomeCollection from "./components/HomeCollection";
import AreasWeServe from "./components/AreasWeServe";
import Process from "./components/Process";
import RelatedBlogs from "./components/RelatedBlogs";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import { getLocationSchema } from "@/schema/locationSchema";
import SITE_CONFIG from "@/app/siteConfig";

export async function generateStaticParams() {
  return (locations || []).map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = (locations || []).find((loc) => loc.slug === slug);

  if (!location) {
    return {
      title: `Location Not Found | ${SITE_CONFIG.name}`,
      description: "The requested location page could not be found.",
    };
  }

  const url = `${SITE_CONFIG.url}/locations/${location.slug}`;
  const image = `${SITE_CONFIG.url}${location.coverImage || "/logo.png"}`;

  return {
    title: location.seo?.title || location.title,
    description: location.seo?.description || location.shortDescription,
    keywords: location.seo?.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: location.seo?.title || location.title,
      description: location.seo?.description || location.shortDescription,
      url,
      siteName: SITE_CONFIG.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: location.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: location.seo?.title || location.title,
      description: location.seo?.description || location.shortDescription,
      images: [image],
    },
  };
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const location = (locations || []).find((loc) => loc.slug === slug);

  if (!location) {
    notFound();
  }
  const locationSchema = getLocationSchema(location);

  return (
    <>
      {locationSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      <main className="overflow-hidden bg-white py-20">
        <Hero location={location} />
        <LocationOverview location={location} />
        <CentralHubLinks location={location} />
        <DiagnosticServices location={location} />
        <PopularTests location={location} />
        <WhyChooseUs location={location} />
        <HealthPackages location={location} />
        <HomeCollection location={location} />
        <AreasWeServe location={location} />
        <Process location={location} />
        <RelatedBlogs location={location} />
        <FAQ location={location} />
        <CTA location={location} />
      </main>
    </>
  );
}