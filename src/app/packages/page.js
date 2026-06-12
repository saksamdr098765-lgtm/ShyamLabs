
import PackagesClient from "./PackagesClient";


export const metadata = {
  title: "Health Packages",
  description:
    "Explore affordable health checkup packages including full body test, diabetes test, and more at Shyam Labs.",
  keywords: [
  "health checkup packages Panchkula",
  "full body checkup price",
  "blood test packages",
  "diabetes test package",
  "liver function test package",
  "kidney function test",
  "thyroid test package",
  "affordable health packages",
  "diagnostic test packages near me",
  "lab test offers Panchkula",
],
  openGraph: {
    title: "Affordable Health Packages",
    description: "Best diagnostic packages at low cost",
    url: "https://www.shyambudgetfriendlylabs.com/packages",
    images: [
      {
        url: "https://www.shyambudgetfriendlylabs.com/logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
    alternates: {
      canonical: `https://www.shyambudgetfriendlylabs.com/packages`,
    },
  
};
export default function PackagesPage() {
  return (
  <PackagesClient></PackagesClient>
  );
}