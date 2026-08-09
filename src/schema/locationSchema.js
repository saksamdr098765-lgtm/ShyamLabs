import SITE_CONFIG from "@/app/siteConfig";

export function getLocationSchema(location) {
  const url = `${SITE_CONFIG.url}/locations/${location.slug}`;

  const schemas = [
    // Medical Business
    {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "@id": `${url}#medicalclinic`,
      name: `${SITE_CONFIG.name} - ${location.city || "Panchkula"}`,
      url,
      image: `${SITE_CONFIG.url}${location.coverImage || "/logo.png"}`,
      description: location.shortDescription,
      telephone: SITE_CONFIG.phone,
      email: SITE_CONFIG.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: typeof SITE_CONFIG.address === "object" ? `${SITE_CONFIG.address.line1 || ""}` : SITE_CONFIG.address,
        addressLocality: typeof SITE_CONFIG.address === "object" ? SITE_CONFIG.address.city : "Panchkula",
        addressRegion: typeof SITE_CONFIG.address === "object" ? SITE_CONFIG.address.state : "Haryana",
        postalCode: typeof SITE_CONFIG.address === "object" ? SITE_CONFIG.address.postalCode : "134117",
        addressCountry: "IN",
      },
      openingHours: location.hours,
      areaServed: location.areas,
      priceRange: "₹₹",
      medicalSpecialty: "Diagnostic Laboratory",
    },
    // Medical WebPage
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": `${url}#webpage`,
      url,
      name: location.title,
      description: location.shortDescription,
      inLanguage: "en-IN",
      isPartOf: {
        "@id": `${SITE_CONFIG.url}/#website`,
      },
      about: {
        "@id": `${url}#medicalclinic`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}${location.coverImage || "/logo.png"}`,
      },
    },
    // Breadcrumb
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_CONFIG.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Locations",
          item: `${SITE_CONFIG.url}/locations`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: location.city || "Location",
          item: url,
        },
      ],
    },
    // Service
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#services`,
      serviceType: "Diagnostic Laboratory Services",
      provider: {
        "@id": `${url}#medicalclinic`,
      },
      areaServed: {
        "@type": "City",
        name: location.city || "Panchkula",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Diagnostic Services",
        itemListElement: (location.services || []).map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalTest",
            name: typeof service === "string" ? service.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) : "Diagnostic Test",
          },
        })),
      },
    },
  ];

  if (location.faq?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: location.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return schemas;
}
