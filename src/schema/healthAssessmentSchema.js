import SITE_CONFIG from "@/app/siteConfig";

export const healthAssessmentSchema = [
  {
    "@context": "https://schema.org",
    "@type": ["WebPage", "MedicalWebPage"],
    "@id": `${SITE_CONFIG.url}/health-assesment#webpage`,
    url: `${SITE_CONFIG.url}/health-assesment`,
    name: "Health Assessment",
    description:
      "Find the most suitable blood tests and health packages by selecting your symptoms or body part. Get personalized diagnostic recommendations from Shyam Labs.",
    isPartOf: {
      "@id": `${SITE_CONFIG.url}/#website`,
    },
    about: {
      "@id": `${SITE_CONFIG.url}/#medicalbusiness`,
    },
    inLanguage: "en-IN",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_CONFIG.url}/health-assesment#breadcrumb`,
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
        name: "Health Assessment",
        item: `${SITE_CONFIG.url}/health-assesment`,
      },
    ],
  },
];
