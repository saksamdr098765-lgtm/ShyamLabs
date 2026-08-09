import { notFound } from "next/navigation";
import SITE_CONFIG from "@/app/siteConfig";
import { services } from "@/app/data/services";
import { getServiceSchema } from "@/schema/serviceSchema";

import ServiceHero from "./components/Hero";
import ServiceOverview from "./components/ServiceOverview";
import ServiceInterlinking from "./components/ServiceInterlinking";
import WhyServiceMatters from "./components/WhyServiceMatters";
import WhoNeedsService from "./components/WhoNeedService";
import ServiceIncludes from "./components/ServiceIncludes";
import ServiceProcess from "./components/ServiceProcess";
import WhyChooseLab from "./components/WhyChooseLab";
import ServiceAreasWeServe from "./components/ServiceAreasWeServe";
import RelatedPackages from "./components/RelatedPackages";
import RelatedBlogs from "./components/RelatedBlogs";
import ServiceFAQ from "./components/ServiceFAQ";
import ServiceCTA from "./components/ServiceCTA";
import RelatedTests from "./components/RelatedTest";

export async function generateStaticParams() {
  return (services || []).map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = (services || []).find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  const url = `${SITE_CONFIG.url}/services/${service.slug}`;

  return {
    title: service.seo?.title || service.title,
    description: service.seo?.description || service.shortDescription,
    keywords: service.seo?.keywords,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: service.seo?.title || service.title,
      description: service.seo?.description || service.shortDescription,
      url,
      siteName: SITE_CONFIG.name,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: `${SITE_CONFIG.url}${service.coverImage || "/logo.png"}`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.seo?.title || service.title,
      description: service.seo?.description || service.shortDescription,
      images: [`${SITE_CONFIG.url}${service.coverImage || "/logo.png"}`],
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = (services || []).find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const schemas = getServiceSchema(service);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      <main className="bg-white py-10">
        <ServiceHero service={service} />
        <ServiceOverview service={service} />
        <ServiceInterlinking service={service} />
        <RelatedTests relatedTests={service.relatedTests} />
        <WhyServiceMatters service={service} />
        <WhoNeedsService service={service} />
        <ServiceIncludes service={service} />
        <ServiceProcess service={service} />
        <WhyChooseLab service={service} />
        <ServiceAreasWeServe service={service} />
        <RelatedPackages service={service} />
        <RelatedBlogs service={service} />
        <ServiceFAQ service={service} />
        <ServiceCTA />
      </main>
    </>
  );
}
