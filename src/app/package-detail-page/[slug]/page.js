

import { notFound } from "next/navigation";
import PackageDetailPage from "./packagedetailpageClient";
import packagesData from "@/app/packagesData";
export async function generateStaticParams() {
  return packagesData.map((pac) => ({
    slug: pac.slug,
  }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const packageData = packagesData.find(
    (pkg) => pkg.slug === slug
  );

  if (!packageData) {
    return {
      title: "Package Not Found",
    };
  }

  return {
    title: `${packageData.title} | Shyam Budget Friendly Labs`,
    description:
      packageData.description ||
      `Book ${packageData.title} at affordable prices. Fast reports, accurate diagnostics, and trusted pathology services.`,

    keywords: [
      packageData.title,
      "pathology lab",
      "diagnostic tests",
      "health checkup",
      "blood test",
      "Shyam Budget Friendly Labs",
    ],

    openGraph: {
      title: packageData.title,
      description:
        packageData.description ||
        `Book ${packageData.title} online.`,
      url: `https://www.shyambudgetfriendlylabs.com/package-detail-page/${slug}`,
      siteName: "Shyam Budget Friendly Labs",
      images: [
        {
          url:
           
            "https://www.shyambudgetfriendlylabs.com/logo.png",
          width: 1200,
          height: 630,
          alt: packageData.title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: packageData.title,
      description:
        packageData.description ||
        `Book ${packageData.title} online.`,
      images: [
          "https://www.shyambudgetfriendlylabs.com/og-image.jpg",
      ],
    },

    alternates: {
      canonical: `https://www.shyambudgetfriendlylabs.com/package-detail-page/${slug}`,
    },
  };
}
export default async function Page({ params }) {
 const {slug}=await params;
  const packageData = packagesData.find(
    (pkg) => pkg.slug === slug
  );

  if (!packageData) {
  
    notFound();
  }

  return(
   <>
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
          name: "Health Packages",
          item: "https://www.shyambudgetfriendlylabs.com/package-detail-page",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: packageData.title,
          item: `https://www.shyambudgetfriendlylabs.com/package-detail-page/${packageData.slug}`,
        },
      ],
    }),
  }}
/>
   <PackageDetailPage packageData={packageData}></PackageDetailPage>
   </> 
  )
}