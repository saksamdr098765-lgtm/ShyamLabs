import React from 'react'
import ServiceDetailPage from './ServicesClient'
import { services } from '@/app/services';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}
export async function generateMetadata({ params }) {
const { slug } = await params;

const service = services.find(
(item) => item.slug === slug
);

if (!service) {
return {
title: "Service Not Found | Shyam Budget Friendly Labs",
description: "The requested diagnostic test page could not be found.",
};
}

const serviceUrl = `https://www.shyambudgetfriendlylabs.com/services/${slug}`;

return {
title: `${service.title} | Shyam Budget Friendly Labs`,


description:
  service.description ||
  `Book ${service.title} online with home sample collection and fast report delivery.`,

keywords: [
  service.title,
  service.subtitle,
  ...(service.keywords || []),
  `${service.title} Price`,
  `${service.title} Near Me`,
  `${service.title} Home Collection`,
  "Blood Test",
  "Diagnostic Centre",
  "Pathology Lab",
  "Health Checkup",
  "Shyam Budget Friendly Labs",
],

openGraph: {
  title: service.title,

  description:
    service.description ||
    `Book ${service.title} online with home sample collection.`,

  url: serviceUrl,

  siteName: "Shyam Budget Friendly Labs",

  images: [
    {
      url: service.image
        ? `https://www.shyambudgetfriendlylabs.com${service.image}`
        : "https://www.shyambudgetfriendlylabs.com/logo.png",

      width: 1200,
      height: 630,
      alt: service.title,
    },
  ],

  locale: "en_IN",
  type: "website",
},

twitter: {
  card: "summary_large_image",

  title: service.title,

  description:
    service.description ||
    `Book ${service.title} online.`,

  images: [
    service.image
      ? `https://www.shyambudgetfriendlylabs.com${service.image}`
      : "https://www.shyambudgetfriendlylabs.com/logo.png",
  ],
},

alternates: {
  canonical: serviceUrl,
},



};
}

export default async function Page ({params}) {
     const {slug}=await params;
      const service = services.find(
        (item) => item.slug === slug
      );
    
      if (!service) {
      
        notFound(); 
      }
  return (
    <>
     {service.faqs?.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: service.faqs.map((faq) => ({
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
          name: "Services",
          item: "https://www.shyambudgetfriendlylabs.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.title,
          item: `https://www.shyambudgetfriendlylabs.com/services/${service.slug}`,
        },
      ],
    }),
  }}
/>
  
    <ServiceDetailPage service={service}></ServiceDetailPage>
    </>
  )
}
