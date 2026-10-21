import { getTestPrice, tests } from "./tests";

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
 {
   slug: "cbc-test-price-chandigarh",
 
   seo: {
     title: "CBC Test Price in Chandigarh | Book CBC Blood Test",
 
     description:
       `Check CBC test price in Chandigarh starting at ₹${getTestPrice('cbc-test')}, with home sample collection, digital reports & convenient online booking.`,
 
     keywords: [
       "cbc test price chandigarh",
       "cbc test cost chandigarh",
       "cbc blood test price chandigarh",
       "cbc test price near me",
       "affordable cbc test chandigarh",
       "cbc test price list chandigarh",
       "cbc test panchkula",
       "cbc test mohali",
       "cbc test tricity",
     ],
   },
 
   hero: {
     badge: "Quality Testing Standards",
 
     title: "CBC Test Price in Chandigarh",
 
     subtitle:
       "Check the CBC (Complete Blood Count) test price in Chandigarh with accurate testing and convenient doorstep home sample collection from Shyam Labs.",
 
     image: "/prices/cbc-test.webp",
   },
 
   priceCard: {
     actualPrice: 300,
     offerPrice: getTestPrice('cbc-test'),
     offerText: "Offer Price",
     reportTime: "24 Hours",
     fasting: "Not Required",
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
     title: "Why Get a CBC Test in Chandigarh",
 
     description:
       "A CBC test is one of the most useful starting points for understanding your overall blood health, whether you have symptoms or just want a routine check.",
 
     reasons: [
       {
         title: "Early Detection of Common Issues",
         description:
           "Helps identify anemia, infections, and clotting concerns before symptoms become serious.",
       },
       {
         title: "Useful for Routine & Pre-Surgery Screening",
         description:
           "Commonly ordered as part of an annual health checkup, before surgery, or during pregnancy monitoring.",
       },
       {
         title: "Convenient & Affordable",
         description:
           "Home sample collection and transparent pricing make it easy to get tested without visiting a lab in person.",
       },
     ],
   },
 
   faqs: [
     {
       question: "How much does a CBC test cost in Chandigarh?",
       answer:
         `The CBC test is available at an offer price of ₹${getTestPrice('cbc-test')} at Shyam Labs, with home sample collection available subject to service coverage.`,
     },
     {
       question: "Is home sample collection available in Chandigarh?",
       answer:
         "Yes, Shyam Labs provides doorstep home sample collection across Chandigarh and nearby Tricity areas, subject to service availability.",
     },
     {
       question: "Do I need to pay in advance to book a CBC test?",
       answer:
         "No advance payment is required — you can pay at the time of sample collection or according to the payment option provided during booking.",
     },
     {
       question: "How soon will I get my CBC report after booking?",
       answer:
         "Reports are typically delivered digitally within 24 hours of sample collection.",
     },
   ],
 
   relatedTests:[
    "cbc-test",
  "platelet-count",
  "absolute-eosinophil-count",
  "esr-test",
  "peripheral-blood-film",
  "bleeding-time-clotting-time",
  "blood-group-test",
  "dengue-test",
  "mp-antigen-test",
],
 
   interlinks: {
     badge: "Included Services & Chandigarh Availability",
 
     heading: "What's Included & Chandigarh Availability",
 
     description:
       "Checking the CBC test price? Explore what's included in this price and confirm home collection availability near you in Chandigarh and the Tricity.",
 
     items: [
       {
         title: "What's Included in This Price?",
         subtitle: "CBC Test Service Details",
 
         description:
           "See everything included in your CBC test — from sample collection to laboratory analysis and report delivery.",
 
         href: "/tests/cbc-test",
 
         icon: "FiActivity",
 
         badge: "Test Details",
 
         badgeColor:
           "bg-teal-100 text-teal-800 border-teal-200",
 
         btnText: "Explore Test Details",
 
         tracking: "price-interlink-service",
       },
 
       {
         title: "CBC Test Available in Chandigarh",
 
         subtitle: "Location & Home Collection",
 
         description:
           "Check CBC test home sample collection availability across Chandigarh and nearby Tricity areas.",
 
         href: "/locations/cbc-test-in-chandigarh",
 
         icon: "FiMapPin",
 
         badge: "Chandigarh Location",
 
         badgeColor:
           "bg-sky-100 text-sky-800 border-sky-200",
 
         btnText: "Visit Chandigarh Page",
 
         tracking: "price-interlink-location",
       },
     ],
   },
 
   cta: {
     title: "Book Your CBC Test in Chandigarh Today",
 
     description:
       "Affordable pricing, fast digital reports, and convenient doorstep home sample collection across Chandigarh and the Tricity.",
 
     offerPrice: getTestPrice('cbc-test'),
 
     actualPrice: 300,
 
     buttonText: "Book a Test",
 
     testName: "CBC Test",
 
     blogUrl: "/blogs/cbc-test-full-guide",
 
     serviceUrl: "/tests/cbc-test",
 
     locationUrl: "/locations/cbc-test-in-chandigarh",
 
     packageUrl: "/packages",
 
     highlights: [
       "Home Sample Collection",
       "Digital Report",
       "Affordable Rate",
       "Fast Turnaround",
     ],
   },
 },
 {
  slug: "thyroid-test-price-chandigarh",

  seo: {
    // 49 characters
    title: "Thyroid Test Price in Chandigarh | Book T3 T4 TSH",
    description: `Check thyroid test price in Chandigarh starting at ₹${getTestPrice('thyroid-profile-test')}, with home sample collection, digital reports & convenient online booking.`,
    keywords: [
      "thyroid test price chandigarh",
      "thyroid test cost chandigarh",
      "thyroid blood test price chandigarh",
      "thyroid test price near me",
      "affordable thyroid test chandigarh",
      "thyroid test price list chandigarh",
      "thyroid test panchkula",
      "thyroid test mohali",
      "thyroid test tricity",
    ],
  },

  hero: {
    badge: "Quality Testing Standards",

    title: "Thyroid Test Price in Chandigarh",

    subtitle:
      "Check the Thyroid Profile Test (TSH, T3, T4) price in Chandigarh with accurate testing and convenient doorstep home sample collection from Shyam Labs.",

    image: "/prices/thyroid-test.webp",
  },

  priceCard: {
    actualPrice: 549,
    offerPrice: getTestPrice('thyroid-profile-test'),
    offerText: "Offer Price",
    reportTime: "24 Hours",
    fasting: "Not Required",
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
    title: "Why Get a Thyroid Test in Chandigarh",
    description:
      "Thyroid disorders develop gradually and are easy to mistake for everyday tiredness — a simple blood test is the only reliable way to check.",

    reasons: [
      {
        title: "Catches Hidden Hormonal Imbalance",
        description:
          "Helps identify hypothyroidism or hyperthyroidism before symptoms become severe.",
      },
      {
        title: "Useful for Fatigue, Weight & Hair Concerns",
        description:
          "Commonly ordered when experiencing unexplained fatigue, weight changes, or hair fall.",
      },
      {
        title: "Convenient & Affordable",
        description:
          "Home sample collection and transparent pricing make it easy to get tested without visiting a lab in person.",
      },
    ],
  },

  faqs: [
    {
      question: "How much does a thyroid test cost in Chandigarh?",
      answer: `The thyroid profile test is available at an offer price of ₹${getTestPrice('thyroid-profile-test')} at Shyam Labs, with home sample collection available subject to service coverage.`,
    },
    {
      question: "Is home sample collection available in Chandigarh?",
      answer:
        "Yes, Shyam Labs provides doorstep home sample collection across Chandigarh and nearby Tricity areas, subject to service availability.",
    },
    {
      question: "Do I need to pay in advance to book a thyroid test?",
      answer:
        "No advance payment is required — you can pay at the time of sample collection or according to the payment option provided during booking.",
    },
    {
      question: "How soon will I get my thyroid report after booking?",
      answer:
        "Reports are typically delivered digitally within 24 hours of sample collection.",
    },
  ],

  relatedTests: [
    "thyroid-profile-test",
    "hba1c-test",
    "lipid-profile",
    "vitamin-d-test",
    "vitamin-b12-test",
    "kidney-function-test",
    "liver-function-test",
  ],

  interlinks: {
    badge: "Included Services & Chandigarh Availability",

    heading: "What's Included & Chandigarh Availability",

    description:
      "Checking the thyroid test price? Explore what's included in this price and confirm home collection availability near you in Chandigarh and the Tricity.",

    items: [
      {
        title: "What's Included in This Price?",
        subtitle: "Thyroid Test Service Details",
        description:
          "See everything included in your thyroid test — from sample collection to laboratory analysis and report delivery.",
        href: "/tests/thyroid-profile-test",
        icon: "FiActivity",
        badge: "Test Details",
        badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
        btnText: "Explore Test Details",
        tracking: "price-interlink-service",
      },
      {
        title: "Thyroid Test Available in Chandigarh",
        subtitle: "Location & Home Collection",
        description:
          "Check thyroid test home sample collection availability across Chandigarh and nearby Tricity areas.",
        href: "/locations/thyroid-test-in-chandigarh",
        icon: "FiMapPin",
        badge: "Chandigarh Location",
        badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
        btnText: "Visit Chandigarh Page",
        tracking: "price-interlink-location",
      },
    ],
  },

  cta: {
    title: "Book Your Thyroid Test in Chandigarh Today",

    description:
      "Affordable pricing, fast digital reports, and convenient doorstep home sample collection across Chandigarh and the Tricity.",

    offerPrice: getTestPrice('thyroid-profile-test'),

    actualPrice: 549,

    buttonText: "Book a Test",

    testName: "Thyroid Test",

    blogUrl: "/blogs/thyroid-test-symptoms-guide",

    serviceUrl: "/tests/thyroid-profile-test",

    locationUrl: "/locations/thyroid-test-in-chandigarh",

    packageUrl: "/packages",

    highlights: ["Home Sample Collection", "Digital Report", "Affordable Rate", "Fast Turnaround"],
  },
},
{
  slug: "lipid-profile-test-price-chandigarh",
 
  seo: {
    // 49 characters
    title: "Lipid Profile Test Price in Chandigarh | Book Now",
    description: `Check lipid profile test price in Chandigarh starting at ₹${getTestPrice('lipid-profile')}, with home sample collection, digital reports & fasting guidance.`,
    keywords: [
      "lipid profile test price chandigarh",
      "cholesterol test price chandigarh",
      "lipid profile test cost chandigarh",
      "lipid profile test price near me",
      "affordable lipid profile test chandigarh",
      "lipid profile test price list chandigarh",
      "lipid profile test panchkula",
      "lipid profile test mohali",
      "lipid profile test tricity",
    ],
  },
 
  hero: {
    badge: "Quality Testing Standards",
 
    title: "Lipid Profile Test Price in Chandigarh",
 
    subtitle:
      "Check the Lipid Profile (Cholesterol) test price in Chandigarh with accurate testing and convenient doorstep home sample collection from Shyam Labs.",
 
    image: "/prices/lipid-profile-test.webp",
  },
 
  priceCard: {
    actualPrice: 650,
    offerPrice: getTestPrice('lipid-profile'),
    offerText: "Offer Price",
    reportTime: "24 Hours",
    fasting: "9-12 Hours Recommended",
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
    title: "Why Get a Lipid Profile Test in Chandigarh",
    description:
      "High cholesterol has no symptoms, which makes the lipid profile one of the most useful preventive tests whether you have risk factors or just want a routine check.",
 
    reasons: [
      {
        title: "Catches Hidden Cardiovascular Risk",
        description:
          "Helps identify high LDL, low HDL, or elevated triglycerides before symptoms ever appear.",
      },
      {
        title: "Useful for Routine & Risk-Factor Screening",
        description:
          "Commonly ordered for annual checkups, diabetes, hypertension, or a family history of heart disease.",
      },
      {
        title: "Convenient & Affordable",
        description:
          "Home sample collection and transparent pricing make it easy to get tested without visiting a lab in person.",
      },
    ],
  },
 
  faqs: [
    {
      question: "How much does a lipid profile test cost in Chandigarh?",
      answer: `The lipid profile test is available at an offer price of ₹${getTestPrice('lipid-profile')} at Shyam Labs, with home sample collection available subject to service coverage.`,
    },
    {
      question: "Is fasting required before the lipid profile test?",
      answer:
        "Yes, 9-12 hours of fasting is recommended for accurate results. Our team will guide you on timing when you book.",
    },
    {
      question: "Is home sample collection available in Chandigarh?",
      answer:
        "Yes, Shyam Labs provides doorstep home sample collection across Chandigarh and nearby Tricity areas, subject to service availability.",
    },
    {
      question: "How soon will I get my lipid profile report after booking?",
      answer:
        "Reports are typically delivered digitally within 24 hours of sample collection.",
    },
  ],
 
  relatedTests: [
    "lipid-profile",
    "total-cholesterol",
    "triglycerides-test",
    "hdl-cholesterol",
    "ldl-cholesterol",
    "vldl-cholesterol",
  ],
 
  interlinks: {
    badge: "Included Services & Chandigarh Availability",
 
    heading: "What's Included & Chandigarh Availability",
 
    description:
      "Checking the lipid profile test price? Explore what's included in this price and confirm home collection availability near you in Chandigarh and the Tricity.",
 
    items: [
      {
        title: "What's Included in This Price?",
        subtitle: "Lipid Profile Test Service Details",
        description:
          "See everything included in your lipid profile test — from fasting guidance to sample collection and report delivery.",
        href: "/tests/lipid-profile",
        icon: "FiActivity",
        badge: "Test Details",
        badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
        btnText: "Explore Test Details",
        tracking: "price-interlink-service",
      },
      {
        title: "Lipid Profile Test Available in Chandigarh",
        subtitle: "Location & Home Collection",
        description:
          "Check lipid profile test home sample collection availability across Chandigarh and nearby Tricity areas.",
        href: "/locations/lipid-profile-test-in-chandigarh",
        icon: "FiMapPin",
        badge: "Chandigarh Location",
        badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
        btnText: "Visit Chandigarh Page",
        tracking: "price-interlink-location",
      },
    ],
  },
 
  cta: {
    title: "Book Your Lipid Profile Test in Chandigarh Today",
 
    description:
      "Affordable pricing, fast digital reports, and convenient doorstep home sample collection across Chandigarh and the Tricity.",
 
    offerPrice: getTestPrice('lipid-profile'),
 
    actualPrice: 650,
 
    buttonText: "Book a Test",
 
    testName: "Lipid Profile Test",
 
    blogUrl: "/blogs/cholesterol-lipid-profile-test-guide",
 
    serviceUrl: "/tests/lipid-profile",
 
    locationUrl: "/locations/lipid-profile-test-in-chandigarh",
 
    packageUrl: "/packages",
 
    highlights: ["Home Sample Collection", "Digital Report", "Affordable Rate", "Fast Turnaround"],
  },
},
{
  slug: "liver-function-test-price-chandigarh",

  seo: {
    // 49 characters
    title: "Liver Function Test Price in Chandigarh | Book LFT",
    description: `Check liver function test (LFT) price in Chandigarh starting at ₹${getTestPrice('liver-function-test')}, with home sample collection, digital reports & easy online booking.`,
    keywords: [
      "liver function test price chandigarh",
      "lft test price chandigarh",
      "liver function test cost chandigarh",
      "lft test price near me",
      "affordable liver function test chandigarh",
      "liver profile test price chandigarh",
      "liver function test panchkula",
      "liver function test mohali",
      "liver function test tricity",
    ],
  },

  hero: {
    badge: "Quality Testing Standards",

    title: "Liver Function Test (LFT) Price in Chandigarh",

    subtitle:
      "Check the Liver Function Test price in Chandigarh with accurate testing and convenient doorstep home sample collection from Shyam Labs.",

    image: "/prices/liver-function-test.webp",
  },

  priceCard: {
    actualPrice: 525,
    offerPrice: getTestPrice('liver-function-test'),
    offerText: "Offer Price",
    reportTime: "24 Hours",
    fasting: "Usually Not Required",
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
    title: "Why Get a Liver Function Test in Chandigarh",
    description:
      "Liver disease often causes no symptoms until it is advanced, which makes a simple blood test the most reliable way to check how your liver is doing.",

    reasons: [
      {
        title: "Catches Liver Stress Early",
        description:
          "Helps identify raised liver enzymes from fatty liver, alcohol, infection, or medicines before symptoms appear.",
      },
      {
        title: "Useful for Jaundice, Fatigue & Medication Monitoring",
        description:
          "Commonly ordered for yellow eyes, unexplained tiredness, abdominal discomfort, or when taking long-term medicines.",
      },
      {
        title: "Convenient & Affordable",
        description:
          "Home sample collection and transparent pricing make it easy to get tested without visiting a lab in person.",
      },
    ],
  },

  faqs: [
    {
      question: "How much does a liver function test cost in Chandigarh?",
      answer: `The liver function test is available at an offer price of ₹${getTestPrice('liver-function-test')} at Shyam Labs, with home sample collection available subject to service coverage.`,
    },
    {
      question: "What is included in the LFT price?",
      answer:
        "The LFT covers SGOT, SGPT, ALP, total, direct and indirect bilirubin, total protein, albumin, globulin, and the A/G ratio, along with a digital report.",
    },
    {
      question: "Is home sample collection available in Chandigarh?",
      answer:
        "Yes, Shyam Labs provides doorstep home sample collection across Chandigarh and nearby Tricity areas, subject to service availability.",
    },
    {
      question: "Do I need to pay in advance to book a liver function test?",
      answer:
        "No advance payment is required — you can pay at the time of sample collection or according to the payment option provided during booking.",
    },
    {
      question: "How soon will I get my LFT report after booking?",
      answer:
        "Reports are typically delivered digitally within 24 hours of sample collection.",
    },
  ],

  relatedTests: [
    "liver-function-test",
    "sgot-test",
    "sgpt-test",
    "bilirubin-total",
    "alkaline-phosphatase-test",
    "serum-albumin",
    "kidney-function-test",
    "hbsag-test",
  ],

  interlinks: {
    badge: "Included Services & Chandigarh Availability",

    heading: "What's Included & Chandigarh Availability",

    description:
      "Checking the LFT price? Explore what's included in this price and confirm home collection availability near you in Chandigarh and the Tricity.",

    items: [
      {
        title: "What's Included in This Price?",
        subtitle: "Liver Function Test Service Details",
        description:
          "See everything included in your LFT — from sample collection to laboratory analysis and report delivery.",
        href: "/tests/liver-function-test",
        icon: "FiActivity",
        badge: "Test Details",
        badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
        btnText: "Explore Test Details",
        tracking: "price-interlink-service",
      },
      {
        title: "Liver Function Test Available in Chandigarh",
        subtitle: "Location & Home Collection",
        description:
          "Check LFT home sample collection availability across Chandigarh and nearby Tricity areas.",
        href: "/locations/liver-function-test-in-chandigarh",
        icon: "FiMapPin",
        badge: "Chandigarh Location",
        badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
        btnText: "Visit Chandigarh Page",
        tracking: "price-interlink-location",
      },
    ],
  },

  cta: {
    title: "Book Your Liver Function Test in Chandigarh Today",

    description:
      "Affordable pricing, fast digital reports, and convenient doorstep home sample collection across Chandigarh and the Tricity.",

    offerPrice: getTestPrice('liver-function-test'),

    actualPrice: 525,

    buttonText: "Book a Test",

    testName: "Liver Function Test",

    blogUrl: "/blogs/liver-health-lft-test-guide",

    serviceUrl: "/tests/liver-function-test",

    locationUrl: "/locations/liver-function-test-in-chandigarh",

    packageUrl: "/packages",

    highlights: ["Home Sample Collection", "Digital Report", "Affordable Rate", "Fast Turnaround"],
  },
},
 {
  slug: "vitamin-d-test-price-chandigarh",

  seo: {
    // 47 characters
    title: "Vitamin D Test Price in Chandigarh | Book 25-OH",
    description: `Check vitamin D test price in Chandigarh starting at ₹${getTestPrice('vitamin-d-test')}, with home sample collection, digital reports & no fasting needed.`,
    keywords: [
      "vitamin d test price chandigarh",
      "vitamin d test cost chandigarh",
      "vitamin d3 test price chandigarh",
      "vitamin d test price near me",
      "affordable vitamin d test chandigarh",
      "25 hydroxy vitamin d test price",
      "vitamin d test panchkula",
      "vitamin d test mohali",
      "vitamin d test tricity",
    ],
  },

  hero: {
    badge: "Quality Testing Standards",

    title: "Vitamin D Test Price in Chandigarh",

    subtitle:
      "Check the Vitamin D (25-OH) test price in Chandigarh with accurate testing and convenient doorstep home sample collection from Shyam Labs.",

    image: "/prices/vitamin-d-test.webp",
  },

  priceCard: {
    actualPrice: 675,
    offerPrice: getTestPrice('vitamin-d-test'),
    offerText: "Offer Price",
    reportTime: "24 Hours",
    fasting: "Not Required",
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
    title: "Why Get a Vitamin D Test in Chandigarh",
    description:
      "Low vitamin D is very common and often silent. A simple blood test is the only reliable way to know your level before starting any supplement.",

    reasons: [
      {
        title: "Finds Hidden Deficiency",
        description:
          "Helps identify low vitamin D that may be behind tiredness, body ache, or bone pain.",
      },
      {
        title: "Guides Safe Supplementation",
        description:
          "Knowing your level helps your doctor choose the right dose and avoid taking too much.",
      },
      {
        title: "Convenient & Affordable",
        description:
          "Home sample collection, no fasting, and transparent pricing make it easy to get tested without visiting a lab.",
      },
    ],
  },

  faqs: [
    {
      question: "How much does a vitamin D test cost in Chandigarh?",
      answer: `The vitamin D test is available at an offer price of ₹${getTestPrice('vitamin-d-test')} at Shyam Labs, with home sample collection available subject to service coverage.`,
    },
    {
      question: "Why is a vitamin D test costlier than other basic tests?",
      answer:
        "It uses specialised analyser reagents and is run in smaller volumes than routine tests like CBC or blood sugar. We keep the price affordable and include home collection.",
    },
    {
      question: "Is fasting needed before the vitamin D test?",
      answer:
        "No, fasting is not required. You can have the test at any time of day.",
    },
    {
      question: "Is home sample collection available in Chandigarh?",
      answer:
        "Yes, Shyam Labs provides doorstep home sample collection across Chandigarh and nearby Tricity areas, subject to service availability.",
    },
    {
      question: "How soon will I get my vitamin D report after booking?",
      answer:
        "Reports are typically delivered digitally within 24 hours of sample collection.",
    },
  ],

  relatedTests: [
    "vitamin-d-test",
    "vitamin-b12-test",
    "serum-calcium",
    "alkaline-phosphatase-test",
    "thyroid-profile-test",
    "cbc-test",
  ],

  interlinks: {
    badge: "Included Services & Chandigarh Availability",

    heading: "What's Included & Chandigarh Availability",

    description:
      "Checking the vitamin D test price? Explore what's included in this price and confirm home collection availability near you in Chandigarh and the Tricity.",

    items: [
      {
        title: "What's Included in This Price?",
        subtitle: "Vitamin D Test Service Details",
        description:
          "See everything included in your vitamin D test — from sample collection to laboratory analysis and report delivery.",
        href: "/tests/vitamin-d-test",
        icon: "FiActivity",
        badge: "Test Details",
        badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
        btnText: "Explore Test Details",
        tracking: "price-interlink-service",
      },
      {
        title: "Vitamin D Test Available in Chandigarh",
        subtitle: "Location & Home Collection",
        description:
          "Check vitamin D test home sample collection availability across Chandigarh and nearby Tricity areas.",
        href: "/locations/vitamin-d-test-in-chandigarh",
        icon: "FiMapPin",
        badge: "Chandigarh Location",
        badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
        btnText: "Visit Chandigarh Page",
        tracking: "price-interlink-location",
      },
    ],
  },

  cta: {
    title: "Book Your Vitamin D Test in Chandigarh Today",

    description:
      "Affordable pricing, fast digital reports, and convenient doorstep home sample collection across Chandigarh and the Tricity.",

    offerPrice: getTestPrice('vitamin-d-test'),

    actualPrice: 675,

    buttonText: "Book a Test",

    testName: "Vitamin D Test",

    blogUrl: "/blogs/vitamin-d-test-guide",

    serviceUrl: "/tests/vitamin-d-test",

    locationUrl: "/locations/vitamin-d-test-in-chandigarh",

    packageUrl: "/packages",

    highlights: ["Home Sample Collection", "Digital Report", "Affordable Rate", "Fast Turnaround"],
  },
},
{
  slug: "dengue-test-price-chandigarh",

  seo: {
    // 50 characters
    title: "Dengue Test Price in Chandigarh | Book NS1 IgM IgG",
    description: `Check dengue test price in Chandigarh starting at ₹${getTestPrice('dengue-test')}, with home sample collection, digital reports & easy online booking.`,
    keywords: [
      "dengue test price chandigarh",
      "dengue test cost chandigarh",
      "dengue blood test price chandigarh",
      "ns1 antigen test price",
      "dengue test price near me",
      "dengue serology test cost",
      "dengue test panchkula",
      "dengue test mohali",
      "dengue test tricity",
    ],
  },

  hero: {
    badge: "Quality Testing Standards",

    title: "Dengue Test Price in Chandigarh",

    subtitle:
      "Check the Dengue Test (NS1, IgM & IgG) price in Chandigarh with accurate testing and convenient doorstep home sample collection from Shyam Labs.",

    image: "/prices/dengue-test.webp",
  },

  priceCard: {
    actualPrice: 900,
    offerPrice: getTestPrice('dengue-test'),
    offerText: "Offer Price",
    reportTime: "24 Hours",
    fasting: "Not Required",
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
    title: "Why Get a Dengue Test in Chandigarh",
    description:
      "Dengue can look like any other fever in the first days. A quick blood test confirms it early, so you can get the right care and monitoring in time.",

    reasons: [
      {
        title: "Confirms Dengue Early",
        description:
          "NS1 detects the virus in the first days of fever, before antibodies appear.",
      },
      {
        title: "Separates Dengue from Other Fevers",
        description:
          "Helps your doctor tell dengue apart from malaria, typhoid, or a common viral fever.",
      },
      {
        title: "Convenient & Affordable",
        description:
          "Home sample collection and transparent pricing mean you can get tested while resting at home.",
      },
    ],
  },

  faqs: [
    {
      question: "How much does a dengue test cost in Chandigarh?",
      answer: `The dengue test is available at an offer price of ₹${getTestPrice('dengue-test')} at Shyam Labs, with home sample collection available subject to service coverage.`,
    },
    {
      question: "What does the dengue test price include?",
      answer:
        "It covers dengue NS1 antigen, IgM, and IgG testing with a digital report. A CBC and platelet count are separate tests that doctors commonly add.",
    },
    {
      question: "Is home sample collection available in Chandigarh?",
      answer:
        "Yes, Shyam Labs provides doorstep home sample collection across Chandigarh and nearby Tricity areas, subject to service availability.",
    },
    {
      question: "Do I need to pay in advance to book a dengue test?",
      answer:
        "No advance payment is required — you can pay at the time of sample collection or according to the payment option provided during booking.",
    },
    {
      question: "How soon will I get my dengue report after booking?",
      answer:
        "Reports are typically delivered digitally within 24 hours of sample collection.",
    },
  ],

  relatedTests: [
    "dengue-test",
    "platelet-count",
    "cbc-test",
    "mp-antigen-test",
    "typhidot-test",
    "widal-test",
  ],

  interlinks: {
    badge: "Included Services & Chandigarh Availability",

    heading: "What's Included & Chandigarh Availability",

    description:
      "Checking the dengue test price? Explore what's included in this price and confirm home collection availability near you in Chandigarh and the Tricity.",

    items: [
      {
        title: "What's Included in This Price?",
        subtitle: "Dengue Test Service Details",
        description:
          "See everything included in your dengue test — from sample collection to laboratory analysis and report delivery.",
        href: "/tests/dengue-test",
        icon: "FiActivity",
        badge: "Test Details",
        badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
        btnText: "Explore Test Details",
        tracking: "price-interlink-service",
      },
      {
        title: "Dengue Test Available in Chandigarh",
        subtitle: "Location & Home Collection",
        description:
          "Check dengue test home sample collection availability across Chandigarh and nearby Tricity areas.",
        href: "/locations/dengue-test-in-chandigarh",
        icon: "FiMapPin",
        badge: "Chandigarh Location",
        badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
        btnText: "Visit Chandigarh Page",
        tracking: "price-interlink-location",
      },
    ],
  },

  cta: {
    title: "Book Your Dengue Test in Chandigarh Today",

    description:
      "Affordable pricing, fast digital reports, and convenient doorstep home sample collection across Chandigarh and the Tricity.",

    offerPrice: getTestPrice('dengue-test'),

    actualPrice: 900,

    buttonText: "Book a Test",

    testName: "Dengue Test",

    blogUrl: "/blogs/dengue-test-symptoms-guide",

    serviceUrl: "/tests/dengue-test",

    locationUrl: "/locations/dengue-test-in-chandigarh",

    packageUrl: "/packages",

    highlights: ["Home Sample Collection", "Digital Report", "Affordable Rate", "Fast Turnaround"],
  },
},
{
  slug: "typhoid-test-price-chandigarh",

  seo: {
    // 51 characters
    title: "Typhoid Test Price in Chandigarh | Widal & Typhidot",
    description: `Check typhoid test price in Chandigarh: Widal from ₹${getTestPrice('widal-test')}, Typhidot ₹${getTestPrice('typhidot-test')}, with home sample collection & digital reports.`,
    keywords: [
      "typhoid test price chandigarh",
      "typhoid test cost chandigarh",
      "widal test price chandigarh",
      "typhidot test price chandigarh",
      "typhoid blood test price",
      "typhoid test price near me",
      "typhoid test panchkula",
      "typhoid test mohali",
      "typhoid test tricity",
    ],
  },

  hero: {
    badge: "Quality Testing Standards",

    title: "Typhoid Test Price in Chandigarh",

    subtitle:
      "Check Widal and Typhidot typhoid test prices in Chandigarh with accurate testing and convenient doorstep home sample collection from Shyam Labs.",

    image: "/prices/typhoid-test.webp",
  },

  priceCard: {
    actualPrice: 300,
    offerPrice: getTestPrice('widal-test'),
    offerText: "Starting Price",
    reportTime: "24 Hours",
    fasting: "Not Required",
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
    title: "Why Get a Typhoid Test in Chandigarh",
    description:
      "A fever that lasts several days with weakness and stomach upset needs a proper test — typhoid is treatable, but it needs the right antibiotic at the right time.",

    reasons: [
      {
        title: "Confirms the Cause of a Long Fever",
        description:
          "Helps your doctor tell typhoid apart from dengue, malaria, or a common viral fever.",
      },
      {
        title: "Two Tests for Different Stages",
        description:
          "Typhidot can turn positive from about day 2-3 of fever, while Widal is more useful after about a week.",
      },
      {
        title: "Convenient & Affordable",
        description:
          "Home sample collection and transparent pricing mean you can get tested while resting at home.",
      },
    ],
  },

  faqs: [
    {
      question: "How much does a typhoid test cost in Chandigarh?",
      answer: `At Shyam Labs the Widal test is ₹${getTestPrice('widal-test')} and the Typhidot test is ₹${getTestPrice('typhidot-test')}, with home sample collection available subject to service coverage.`,
    },
    {
      question: "Which typhoid test should I choose, Widal or Typhidot?",
      answer:
        "Typhidot gives an earlier, quick result, while Widal is more useful after the first week of fever. Your doctor will advise based on how many days of fever you have had.",
    },
    {
      question: "Is a CBC included in the typhoid test price?",
      answer:
        "No, a CBC is a separate test that doctors commonly add to monitor the illness.",
    },
    {
      question: "Is home sample collection available in Chandigarh?",
      answer:
        "Yes, Shyam Labs provides doorstep home sample collection across Chandigarh and nearby Tricity areas, subject to service availability.",
    },
    {
      question: "Do I need to pay in advance to book a typhoid test?",
      answer:
        "No advance payment is required — you can pay at the time of sample collection or according to the payment option provided during booking.",
    },
    {
      question: "How soon will I get my typhoid test report after booking?",
      answer:
        "Reports are typically delivered digitally within 24 hours of sample collection.",
    },
  ],

  relatedTests: [
    "widal-test",
    "typhidot-test",
    "cbc-test",
    "dengue-test",
    "mp-antigen-test",
    "stool-examination",
  ],

  interlinks: {
    badge: "Included Services & Chandigarh Availability",

    heading: "What's Included & Chandigarh Availability",

    description:
      "Checking the typhoid test price? Explore both tests, what's included, and confirm home collection availability near you in Chandigarh and the Tricity.",

    items: [
      {
        title: "Widal Test Details",
        subtitle: "Widal Test Service Details",
        description:
          "See what the Widal test measures, the titre chart, and how to prepare.",
        href: "/tests/widal-test",
        icon: "FiActivity",
        badge: "Widal Test",
        badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
        btnText: "Explore Widal Test",
        tracking: "price-interlink-widal",
      },
      {
        title: "Typhidot Test Details",
        subtitle: "Typhidot IgM & IgG Service Details",
        description:
          "See what Typhidot IgM and IgG detect, how early it turns positive, and how to prepare.",
        href: "/tests/typhidot-test",
        icon: "FiActivity",
        badge: "Typhidot Test",
        badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
        btnText: "Explore Typhidot Test",
        tracking: "price-interlink-typhidot",
      },
      {
        title: "Typhoid Test Available in Chandigarh",
        subtitle: "Location & Home Collection",
        description:
          "Check typhoid test home sample collection availability across Chandigarh and nearby Tricity areas.",
        href: "/locations/typhoid-test-in-chandigarh",
        icon: "FiMapPin",
        badge: "Chandigarh Location",
        badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
        btnText: "Visit Chandigarh Page",
        tracking: "price-interlink-location",
      },
    ],
  },

  cta: {
    title: "Book Your Typhoid Test in Chandigarh Today",

    description:
      "Affordable pricing, fast digital reports, and convenient doorstep home sample collection across Chandigarh and the Tricity.",

    offerPrice: getTestPrice('widal-test'),

    actualPrice: 300,

    buttonText: "Book a Test",

    testName: "Typhoid Test",

    blogUrl: "/blogs/typhoid-test-symptoms-guide",

    serviceUrl: "/tests/widal-test",

    locationUrl: "/locations/typhoid-test-in-chandigarh",

    packageUrl: "/packages",

    highlights: ["Home Sample Collection", "Digital Report", "Affordable Rate", "Fast Turnaround"],
  },
},
{
  slug: "hba1c-test-price-chandigarh",

  seo: {
    // 44 characters
    title: "HbA1c Test Price in Chandigarh | Book Online",
    description: `Check HbA1c test price in Chandigarh starting at ₹${getTestPrice('hba1c-test')}, with home sample collection, no fasting needed & digital reports.`,
    keywords: [
      "hba1c test price chandigarh",
      "hba1c test cost chandigarh",
      "hba1c test price near me",
      "glycated hemoglobin test price",
      "affordable hba1c test chandigarh",
      "diabetes test price chandigarh",
      "hba1c test panchkula",
      "hba1c test mohali",
      "hba1c test tricity",
    ],
  },

  hero: {
    badge: "Quality Testing Standards",

    title: "HbA1c Test Price in Chandigarh",

    subtitle:
      "Check the HbA1c (glycated hemoglobin) test price in Chandigarh with accurate testing and convenient doorstep home sample collection from Shyam Labs.",

    image: "/prices/hba1c-test.webp",
  },

  priceCard: {
    actualPrice: 525,
    offerPrice: getTestPrice('hba1c-test'),
    offerText: "Offer Price",
    reportTime: "24 Hours",
    fasting: "Not Required",
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
    title: "Why Get an HbA1c Test in Chandigarh",
    description:
      "Diabetes and prediabetes often cause no symptoms. HbA1c is the simplest way to see your 2-3 month average sugar, with no fasting needed.",

    reasons: [
      {
        title: "Screens for Prediabetes and Diabetes",
        description:
          "Helps catch high blood sugar early, when lifestyle changes work best.",
      },
      {
        title: "Tracks Diabetes Control",
        description:
          "Shows whether your treatment is working over the past 2-3 months, not just on one day.",
      },
      {
        title: "Convenient & Affordable",
        description:
          "No fasting, home sample collection, and transparent pricing make it easy to test at a time that suits you.",
      },
    ],
  },

  faqs: [
    {
      question: "How much does an HbA1c test cost in Chandigarh?",
      answer: `The HbA1c test is available at an offer price of ₹${getTestPrice('hba1c-test')} at Shyam Labs, with home sample collection available subject to service coverage.`,
    },
    {
      question: "Is fasting needed before the HbA1c test?",
      answer:
        "No, fasting is not required. You can have the test at any time of day.",
    },
    {
      question: "Is home sample collection available in Chandigarh?",
      answer:
        "Yes, Shyam Labs provides doorstep home sample collection across Chandigarh and nearby Tricity areas, subject to service availability.",
    },
    {
      question: "Do I need to pay in advance to book an HbA1c test?",
      answer:
        "No advance payment is required — you can pay at the time of sample collection or according to the payment option provided during booking.",
    },
    {
      question: "How soon will I get my HbA1c report after booking?",
      answer:
        "Reports are typically delivered digitally within 24 hours of sample collection.",
    },
  ],

  relatedTests: [
    "hba1c-test",
    "blood-sugar-test",
    "glucose-tolerance-test",
    "kidney-function-test",
    "lipid-profile",
    "urine-examination",
  ],

  interlinks: {
    badge: "Included Services & Chandigarh Availability",

    heading: "What's Included & Chandigarh Availability",

    description:
      "Checking the HbA1c test price? Explore what's included in this price and confirm home collection availability near you in Chandigarh and the Tricity.",

    items: [
      {
        title: "What's Included in This Price?",
        subtitle: "HbA1c Test Service Details",
        description:
          "See everything included in your HbA1c test — from sample collection to laboratory analysis and report delivery.",
        href: "/tests/hba1c-test",
        icon: "FiActivity",
        badge: "Test Details",
        badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
        btnText: "Explore Test Details",
        tracking: "price-interlink-service",
      },
      {
        title: "HbA1c Test Available in Chandigarh",
        subtitle: "Location & Home Collection",
        description:
          "Check HbA1c test home sample collection availability across Chandigarh and nearby Tricity areas.",
        href: "/locations/hba1c-test-in-chandigarh",
        icon: "FiMapPin",
        badge: "Chandigarh Location",
        badgeColor: "bg-sky-100 text-sky-800 border-sky-200",
        btnText: "Visit Chandigarh Page",
        tracking: "price-interlink-location",
      },
    ],
  },

  cta: {
    title: "Book Your HbA1c Test in Chandigarh Today",

    description:
      "Affordable pricing, fast digital reports, and convenient doorstep home sample collection across Chandigarh and the Tricity.",

    offerPrice: getTestPrice('hba1c-test'),

    actualPrice: 525,

    buttonText: "Book a Test",

    testName: "HbA1c Test",

    blogUrl: "/blogs/hba1c-diabetes-test-guide",

    serviceUrl: "/tests/hba1c-test",

    locationUrl: "/locations/hba1c-test-in-chandigarh",

    packageUrl: "/packages",

    highlights: ["Home Sample Collection", "Digital Report", "Affordable Rate", "Fast Turnaround"],
  },
}
];


