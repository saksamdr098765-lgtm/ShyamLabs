
import AboutClient from "./AboutClient";
export const metadata = {
  title: "About Us",
  description:
    "Learn about Shyam Budget Friendly Labs, our mission, accuracy, and affordable diagnostic services.",
  keywords:[
  "trusted pathology lab Panchkula",
  "about diagnostic centre",
  "affordable lab services Haryana",
  "accurate blood test reports",
  "modern pathology lab",
  "reliable diagnostic centre",
  "Shyam Budget Friendly Labs about",
  "lab mission and vision",
],
  openGraph: {
    title: "About Shyam Labs",
    description: "Trusted and affordable pathology lab",
    url: "https://www.shyambudgetfriendlylabs.com/about",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};
export default function AboutPage() {


  return (
   <AboutClient></AboutClient>
  );
}