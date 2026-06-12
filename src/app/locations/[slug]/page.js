

import { notFound } from "next/navigation";

import LocationDetailPage from "./LocationClient";
import { locations } from "@/app/locations";

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const location = locations.find(
    (loc) => loc.slug === slug
  );

  if (!location) {
    return {
      title: "Location Not Found | Shyam Budget Friendly Labs",
      description: "The requested location page could not be found.",
    };
  }

  const locationUrl = `https://www.shyambudgetfriendlylabs.com/locations/${slug}`;

  return {
    title: `${location.title} | Shyam Budget Friendly Labs`,

    description:
      location.description ||
      `Book pathology tests, blood tests, health checkups, and home sample collection services in ${location.city}.`,

    keywords: [
      location.title,
      ...(location.tags || []),
      `Pathology Lab in ${location.city}`,
      `Blood Test in ${location.city}`,
      `Health Checkup in ${location.city}`,
      "Diagnostic Centre",
      "Home Sample Collection",
      "Pathology Lab",
      "Shyam Budget Friendly Labs",
    ],

    openGraph: {
      title: location.title,

      description:
        location.description ||
        `Affordable pathology services in ${location.city}.`,

      url: locationUrl,

      siteName: "Shyam Budget Friendly Labs",

      images: [
        {
          url:
            location.image
              ? `https://www.shyambudgetfriendlylabs.com${location.image}`
              : "https://www.shyambudgetfriendlylabs.com/logo.png",

          width: 1200,
          height: 630,
          alt: location.title,
        },
      ],

      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title: location.title,

      description:
        location.description ||
        `Diagnostic services in ${location.city}.`,

      images: [
        location.image
          ? `https://www.shyambudgetfriendlylabs.com${location.image}`
          : "https://www.shyambudgetfriendlylabs.com/og-image.jpg",
      ],
    },

    alternates: {
      canonical: locationUrl,
    },
  };
}
export default async function Page({ params }) {
 const {slug}=await params;
  const location = locations.find(
    (loc) => loc.slug === slug
  );

  if (!location) {
  
    notFound();
  }

  return(
    <>
     {location.faqs?.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: location.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.shyambudgetfriendlylabs.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Locations",
          item: "https://www.shyambudgetfriendlylabs.com/locations",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: location.title,
          item: `https://www.shyambudgetfriendlylabs.com/locations/${location.slug}`,
        },
      ],
    }),
  }}
/>
    <LocationDetailPage location={location}></LocationDetailPage>
    </>
  )
}