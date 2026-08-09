import { tests } from "./tests";

export const prices = [
  {
    slug: "blood-test-price-panchkula",
    seo: {
      title: "Blood Test Price in Panchkula | Full Price List",
      description:
        "Check blood test prices in Panchkula — CBC, Thyroid, Diabetes, Lipid Profile, Vitamin D & more, starting from ₹99, with doorstep home sample collection.",
      keywords: [
        "blood test price panchkula",
        "blood test cost panchkula",
        "blood test price list panchkula",
        "cheap blood test near me panchkula",
      ],
    },
    hero: {
      badge: "NABL Quality Standards",
      title: "Blood Test Price in Panchkula",
      subtitle:
        "Compare prices on 100+ blood tests in Panchkula with high-accuracy automated testing and doorstep home sample collection.",
      image: "/prices/blood-test.webp",
    },
    priceCard: {
      actualPrice: 400,
      offerPrice: 300,
      offerText: "Starting Price",
      reportTime: "Same Day (12-24 Hrs)",
      fasting: "Varies by Test",
      sampleType: "Blood",
      homeCollection: true,
      labVisit: true,
      includes: {
        title: "Every Booking Includes",
        items: [
          "Free Doorstep Home Sample Collection",
          "Digital Report on WhatsApp & Email",
          "No Advance Payment Required",
        ],
      },
    },
    whyGetTest: {
      title: "Why Get a Blood Test in Panchkula",
      description:
        "Regular blood testing helps detect health conditions early and supports timely medical decisions for you and your family.",
      reasons: [
        {
          title: "Early Detection of Health Issues",
          description: "Identifies diabetes, anemia, thyroid disorders, and infections before symptoms worsen.",
        },
        {
          title: "Monitor Ongoing Conditions",
          description: "Track chronic conditions like diabetes and thyroid disorders with regular follow-up testing.",
        },
        {
          title: "Convenient & Affordable",
          description: "Home sample collection and transparent pricing make routine screening accessible for every family.",
        },
      ],
    },
    faqs: [
      {
        question: "How much does a blood test cost in Panchkula?",
        answer: "Individual blood tests in Panchkula start from ₹49, with routine tests priced affordably at Shyam Budget Friendly Labs.",
      },
      {
        question: "Is home sample collection available in Panchkula?",
        answer: "Yes, our trained phlebotomists provide doorstep home sample collection across Panchkula at no extra charge.",
      },
    ],
    relatedTests: [
      "thyroid-profile-test",
      "platelet-count",
      "blood-sugar-test"
    ],
    interlinks: {
      badge: "Included Services & Local Availability",
      heading: "What's Included & Nearby Availability",
      description: "Checking blood test prices? Explore what is included in this price and verify local availability near you in Panchkula.",
      items: [
        {
          title: "What's Included in This Price?",
          subtitle: "Blood Test Service Details",
          description: "Understand everything included in our blood testing service — from sterile sample collection to automated laboratory analysis",
          href: "/services/blood-tests",
          icon: "FiActivity",
          badge: "Service Details",
          badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
          btnText: "Explore Service Included",
          tracking: "price-interlink-service",
        },
        {
          title: "Available Near You in Panchkula",
          subtitle: "Location & Home Collection",
          description: "Check our diagnostic lab center, doorstep home sample collection coverage across Panchkula.",
          href: "/locations/blood-test-in-panchkula",
          icon: "FiMapPin",
          badge: "Panchkula Location",
          badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
          btnText: "Visit Panchkula Hub",
          tracking: "price-interlink-location",
        },
      ],
    },
    cta: {
      title: "Book Your Blood Test in Panchkula Today",
      description: "Affordable pricing, fast digital reports, and doorstep home sample collection across Panchkula.",
      offerPrice: 300,
      actualPrice: 400,
      buttonText: "Book a Test",
      testName: "Blood Test",
      blogUrl: "/blogs/list-of-blood-tests",
      serviceUrl: "/services/blood-tests",
      locationUrl: "/locations/blood-test-in-panchkula",
      packageUrl: "/packages",
      highlights: ["Home Sample Collection", "Digital Report", "Affordable Rate", "Fast Turnaround"],
    },
  },

  /*
  // Additional Price Entries (Commented out template)
  {
    slug: "cbc-test-price-panchkula",
    ...
  }
  */
];
