

import ContactClient from "./ContactClient";
export const metadata = {
  title: "Contact Us",
  description:
    "Contact Shyam Budget Friendly Labs for booking tests, home collection, and support.",
    keywords : [
  "lab contact Panchkula",
  "pathology lab contact number",
  "book blood test at home",
  "home sample collection booking",
  "diagnostic centre contact",
  "Shyam Labs contact",
  "lab near Sector 21 Panchkula",
  "blood test booking phone number",
],
  openGraph: {
    title: "Contact Shyam Labs",
    description: "Get in touch for test booking and support",
    url: "https://www.shyambudgetfriendlylabs.com/contact",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};
export default function ContactPage() {

  return (
  <ContactClient></ContactClient>
  );
}