import GalleryClient from "./GalleryClient";
export const metadata = {
  title: "Gallery",
  description:
    "View our lab facilities, equipment, and environment at Shyam Budget Friendly Labs.",
  keywords: [
  "lab infrastructure Panchkula",
  "pathology lab equipment",
  "modern diagnostic lab images",
  "clean lab facility",
  "testing laboratory setup",
  "Shyam Labs gallery",
  "medical lab environment",
],
  openGraph: {
    title: "Lab Gallery",
    description: "Modern diagnostic lab setup and facilities",
    url: "https://www.shyambudgetfriendlylabs.com/gallery",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function GalleryPage() {

  return (
   <GalleryClient></GalleryClient>
  );
}