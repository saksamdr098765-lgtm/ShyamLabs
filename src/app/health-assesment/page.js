import React from "react";
import HealthAssessmentPage from "./HealthAssesmentClient";
import { healthAssessmentSchema } from "@/schema/healthAssessmentSchema";
import SITE_CONFIG from "@/app/siteConfig";

export const metadata = {
  title: `Health Assessment | Find the Right Blood Test | ${SITE_CONFIG.name}`,
  description:
    "Choose your symptoms, body part, or illness to receive personalized blood test recommendations and book your diagnostic tests online.",
  keywords: [
    "Health Assessment",
    "Blood Test Finder",
    "Diagnostic Test Recommendation",
    "Symptoms Checker",
    "Find Blood Test",
    "Blood Test Recommendation",
    "Health Packages",
    "Pathology Lab Panchkula",
    "Medical Test Guide",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/health-assesment`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `Health Assessment | ${SITE_CONFIG.name}`,
    description:
      "Find the right blood tests based on your symptoms, body part, or health concern.",
    url: `${SITE_CONFIG.url}/health-assesment`,
    siteName: SITE_CONFIG.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function page() {
  return (
    <main className="bg-white">
      {healthAssessmentSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <HealthAssessmentPage />
    </main>
  );
}
