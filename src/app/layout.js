import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Script from "next/script";
import { SITE_CONFIG } from "./siteConfig";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Shyam Budget Friendly Labs",
    template: "%s | Shyam Labs",
  },
  description:
    "Affordable and accurate pathology lab services. Blood tests, health packages, home sample collection.",
  metadataBase: new URL("https://www.shyambudgetfriendlylabs.com/"),
  keywords: [
    "pathology lab",
    "blood test",
    "health checkup",
    "diagnostic center",
  ],
  openGraph: {
    title: "Shyam Budget Friendly Labs",
    description: "Affordable diagnostic services with fast reporting",
    url: "https://www.shyambudgetfriendlylabs.com/",
    siteName: "Shyam Labs",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
         <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-GD0EY5KGY1`}
        strategy="afterInteractive"
      />

      <Script id="ga-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GD0EY5KGY1');
        `}
      </Script>
        <Navbar></Navbar>
        {children}
      
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: SITE_CONFIG.fullName,
          alternateName: SITE_CONFIG.name,
          url: "https://www.shyambudgetfriendlylabs.com/",
          telephone: SITE_CONFIG.phone,
          email: SITE_CONFIG.email,
          image: "https://www.shyambudgetfriendlylabs.com/logo.png",

          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Booth No. 199, Sector 21, Panchkula, Near Doon Public School",
            addressLocality: "Panchkula",
            postalCode: "134117",
            addressCountry: "IN",
          },

          geo: {
            "@type": "GeoCoordinates",
            latitude: 30.6758976,
            longitude: 76.8636953,
          },

          openingHours: "Mo-Sa 08:00-20:00",

          priceRange: "₹₹",

          sameAs: [
            SITE_CONFIG.social.instagram,
            SITE_CONFIG.social.facebook,
          ],
        }),
      }}
    />

        </body>
    </html>
  );
}
