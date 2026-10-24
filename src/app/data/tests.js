import { FaBolt, FaNotesMedical, FaSyringe, FaVenusMars } from "react-icons/fa";
import {
  FaDroplet,
  FaHeartPulse,
  FaBrain,
  FaBone,
  FaDna,
  FaVirus,
  FaShieldVirus,


  FaCapsules,

  FaBottleDroplet,
  FaStethoscope,
  FaVials,
} from "react-icons/fa6";
import { GiKidneys, GiLungs, GiStomach } from "react-icons/gi";
export const tests = [
  // =========================
  // HAEMATOLOGY
  // =========================
  {
    slug: "mp-antigen-test",
    name: "MP Antigen Test",
    shortName: "MP Antigen",
    category: "Haematology",
    organ: "Blood",
    sampleType: "Blood",
    parameterCount: 1,
    fasting: false,
    homeCollection: true,
    popular: false,
    description:
      "Detects malaria parasite antigen for early diagnosis of malaria infection.",
    price: 150,
    reportTime: "24 Hours",
    status:"draft"
  },
   {
    slug: "esr-test",
    name: "Erythrocyte Sedimentation Rate",
    shortName: "ESR",
    category: "Haematology",
    organ: "Blood",
    sampleType: "Blood",
    parameterCount: 1,
    fasting: false,
    homeCollection: true,
    popular: true,
    description:
      "Measures inflammation in the body associated with infections and autoimmune diseases.",
    price: 90,
    reportTime: "24 Hours",
       status:"draft"
  },
  //done

  {
    slug: "platelet-count",
    name: "Platelet Count",
    shortName: "Platelet",
    category: "Haematology",
    organ: "Blood",
    sampleType: "Blood",
    parameterCount: 1,
    fasting: false,
    homeCollection: true,
    popular: true,
    description:
      "Measures platelet count to evaluate blood clotting disorders and dengue-related thrombocytopenia.",
    price: 150,
    reportTime: "24 Hours",
  },

  {
    slug: "absolute-eosinophil-count",
    name: "Absolute Eosinophil Count",
    shortName: "AEC",
    category: "Haematology",
    organ: "Blood",
    sampleType: "Blood",
    parameterCount: 1,
    fasting: false,
    homeCollection: true,
    popular: false,
    description:
      "Measures eosinophil levels to help diagnose allergies, asthma and parasitic infections.",
    price: 150,
    reportTime: "24 Hours",
     status:"draft"
  },
{
  slug: "vitamin-d-test",
  name: "Vitamin D Test (25-OH)",
  shortName: "Vitamin D",
  category: "Vitamin Test",
  organ: "Nutrition",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,

  description:
    "Vitamin D Test (25-Hydroxy Vitamin D) measures the level of vitamin D in your blood to check for deficiency, insufficiency, or excess.",

  price: 450,
  reportTime: "24 Hours",
  status: "published",

  seo: {
    // 51 characters
    title: "Vitamin D Test in Chandigarh - Price & Normal Range",
    // 121 characters
    description:
      "Book vitamin D test (25-OH) in Chandigarh with home sample collection. Check vitamin D test price, normal range & levels.",
    keywords: [
      "vitamin d test",
      "vitamin d test price",
      "25 hydroxy vitamin d test",
      "vitamin d blood test",
      "vitamin d3 test",
      "vitamin d test chandigarh",
      "vitamin d test near me",
      "vitamin d test at home",
      "vitamin d normal range ng ml",
      "vitamin d test cost",
      "vitamin d total test",
      "vitamin d test in pregnancy",
    ],
  },

  hero: {
    badge: "Home Sample Collection Available",

    title: "Vitamin D Test (25-OH) in Chandigarh",

    description:
      "Book a Vitamin D Test in Chandigarh and the Tricity with fast report delivery, professional sample collection, and convenient doorstep home collection from Shyam Labs. No fasting needed. Check the latest vitamin D test price and book online.",

    image: "/tests/vitamin-d.webp",

    imageAlt: "Vitamin D Blood Test (25-OH Vitamin D) in Chandigarh",

    reportTime: "24 Hours",

    homeCollection: "Available",

    trustPoints: [
      "Professional Sample Collection",
      "Digital Reports",
      "Affordable Vitamin D Test Price",
      "Quality-Controlled Testing",
    ],

    bookButton: "Book Vitamin D Test",

    bookingUrl: "/prices/vitamin-d-test-price-chandigarh",

    phone: "tel:+919914899300",
  },

  quickFacts: {
    sample: "Blood Sample",
    reportTime: "24 Hours",
    fasting: "Not Required",
    homeCollection: "Available",
    ageGroup: "Adults & Children",
  },

  whyChooseUs: {
    title: "Why Choose Shyam Labs for Your Vitamin D Test?",

    description:
      "Get a dependable vitamin D test in Chandigarh and the Tricity with easy booking, professional sample collection, convenient home collection, and quick access to your digital report.",

    items: [
      {
        title: "Professional Sample Collection",
        description:
          "Every blood draw follows proper collection procedures for a comfortable, low-discomfort experience.",
      },
      {
        title: "Standardised Testing Process",
        description:
          "Your vitamin D sample is analysed on calibrated equipment following standard laboratory protocols.",
      },
      {
        title: "Fast Digital Reports",
        description:
          "Your vitamin D report is shared digitally as soon as testing is complete — no waiting in line to collect a printout.",
      },
      {
        title: "Home Collection Across Chandigarh & Tricity",
        description:
          "Book a vitamin D test with convenient home sample collection across Chandigarh and nearby Tricity areas, subject to service availability.",
      },
    ],
  },

  testDetails: {
    title: "About the Vitamin D Test (25-Hydroxy Vitamin D)",

    description: [
      "The vitamin D test measures 25-hydroxy vitamin D (25-OH vitamin D), the main form of vitamin D circulating in your blood and the best indicator of your vitamin D status. It is also listed as 'Vitamin D Total' or 'Vitamin D3' by many labs — these usually refer to the same blood test.",
      "Vitamin D helps your body absorb calcium for strong bones, and also supports muscle function and immunity. The test shows whether your level is deficient, insufficient, sufficient, or unusually high. It cannot tell you why your level is low — your doctor works that out from your history, diet, sun exposure, and other tests such as calcium.",
    ],

    included: [
      "25-Hydroxy Vitamin D (Total)",
    ],
  },

  preparation: {
    title: "Preparation Before Your Vitamin D Test",

    description:
      "A vitamin D test needs almost no preparation — here's what to keep in mind before your appointment.",

    items: [
      {
        title: "Vitamin D Test Fasting Requirement",
        description:
          "Fasting is not required. You can eat and drink normally and have the test at any time of day.",
      },
      {
        title: "Mention Supplements You Take",
        description:
          "Tell the phlebotomist if you are taking vitamin D tablets or sachets, as your result reflects your current level. Do not stop prescribed supplements unless your doctor advises it.",
      },
      {
        title: "Mention Biotin or Hair-Skin-Nail Supplements",
        description:
          "High-dose biotin can interfere with some lab assays. If you take it, let the lab know when you book.",
      },
    ],
  },

  bookingProcess: {
    title: "How to Book Your Vitamin D Test in Chandigarh",

    description:
      "Booking a vitamin D test with Shyam Labs takes just a few minutes, with convenient home sample collection available across Chandigarh and the Tricity.",

    steps: [
      {
        title: "Book Test",
        description:
          "Select the Vitamin D Test and submit your booking request online or over a call.",
      },
      {
        title: "Schedule Sample Collection",
        description:
          "Choose a convenient collection time and provide your Chandigarh or Tricity address.",
      },
      {
        title: "Laboratory Testing",
        description:
          "Your sample is processed using standard laboratory procedures.",
      },
      {
        title: "Receive Report",
        description:
          "Your digital vitamin D report is sent to you within 24 hours of collection.",
      },
    ],
  },

  pricePreview: {
    title: "Vitamin D Test Price",

    description:
      "Check the latest vitamin D test price in Chandigarh and book with convenient home sample collection.",

    price: 450,

    priceUrl: "/prices/vitamin-d-test-price-chandigarh",
  },

  relatedTests: [
    "vitamin-b12-test",
    "serum-calcium",
    "alkaline-phosphatase-test",
    "thyroid-profile-test",
    "cbc-test",
  ],

  faq: {
    title: "Frequently Asked Questions",

    description:
      "Answers to the questions patients in Chandigarh and the Tricity most often ask about the vitamin D test, its results, and booking.",

    items: [
      {
        question: "What is a vitamin D test, and what is it called?",
        answer:
          "It is a blood test that measures 25-hydroxy vitamin D (25-OH vitamin D), often reported as 'Vitamin D Total'. It shows whether your vitamin D level is low, normal, or high.",
      },
      {
        question: "Is the vitamin D test the same as the vitamin D3 test?",
        answer:
          "In most labs, yes — both refer to the 25-hydroxy vitamin D blood test. Some reports list 'Total (D2 + D3)' while others list D3 only, so check which one your report names.",
      },
      {
        question: "What is the normal range for vitamin D?",
        answer:
          "In ng/mL, below 20 is deficient, 20-29 is insufficient, 30-100 is generally sufficient, and above 100 may be too high. In nmol/L, multiply ng/mL by 2.5. Always check the range on your own report.",
      },
      {
        question: "Is a vitamin D level of 44 low?",
        answer:
          "No. If the value is in ng/mL, 44 falls within the usual sufficient range of 30-100. If your report is in nmol/L, 44 nmol/L would be low, so check the unit.",
      },
      {
        question: "Is a vitamin D level of 6 or 8 dangerous?",
        answer:
          "A level of 6-8 ng/mL is severely low. It is not usually an emergency, but it needs treatment under a doctor's guidance, because long-term severe deficiency can weaken bones and muscles.",
      },
      {
        question: "Is fasting required for a vitamin D test?",
        answer:
          "No. You can eat and drink normally and have the test at any time of day.",
      },
      {
        question: "Why is a vitamin D test costly compared to basic blood tests?",
        answer:
          "It uses specialised analyser reagents and is run in smaller volumes than routine tests like blood sugar or CBC. At Shyam Labs we keep the price affordable and include home collection.",
      },
      {
        question: "What are the symptoms of low vitamin D?",
        answer:
          "Fatigue, bone or back pain, muscle weakness or cramps, frequent infections, and low mood are common. Mild deficiency often has no symptoms, which is why a blood test is the only reliable way to check.",
      },
      {
        question: "Can vitamin D levels be checked without a blood test?",
        answer:
          "Not reliably. Symptoms, sun exposure, or diet can suggest a risk but cannot tell you your actual level — only the blood test can.",
      },
      {
        question: "Does a CBC test check vitamin D?",
        answer:
          "No. A CBC measures blood cells and hemoglobin. Vitamin D needs its own 25-OH vitamin D test.",
      },
      {
        question: "How often should I get a vitamin D test?",
        answer:
          "If you are deficient, doctors commonly recheck after about 3 months of treatment. Otherwise, people at higher risk often test once a year, as your doctor advises.",
      },
      {
        question: "Is home sample collection available for vitamin D test in Chandigarh?",
        answer:
          "Yes, Shyam Labs provides home sample collection services for Chandigarh and nearby Tricity areas, subject to service availability.",
      },
      {
        question: "What is the vitamin D test price in Chandigarh?",
        answer:
          "Check our pricing page for the current vitamin D test price and book online with home sample collection.",
      },
    ],
  },

  cta: {
    title: "Book Your Vitamin D Test in Chandigarh Today",

    description:
      "Get convenient home sample collection, reliable vitamin D testing, and fast access to your digital report with Shyam Labs serving Chandigarh and the Tricity.",

    highlights: [
      "Home Sample Collection Available",
      "Fast Report Delivery",
      "Professional Collection Process",
    ],

    price: "450",

    priceText: "Check detailed vitamin D test pricing and booking options.",

    bookingUrl: "/prices/vitamin-d-test-price-chandigarh",

    phone: "tel:+919914899300",

    buttonText: "Book Vitamin D Test",
  },
},
{
  slug: "vitamin-b12-test",
  name: "Vitamin B12 Test (Serum Cobalamin)",
  shortName: "Vitamin B12",
  category: "Vitamin Test",
  organ: "Nutrition",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,

  description:
    "Vitamin B12 test measures the level of B12 (cobalamin) in your blood to check for deficiency, which can cause fatigue, anemia, numbness, and memory problems.",

  price: 400,
  reportTime: "24 Hours",
  status: "published",

  seo: {
    // 52 characters
    title: "Vitamin B12 Test in Chandigarh - Price & Normal Range",
    // 120 characters
    description:
      "Book vitamin B12 test in Chandigarh with home sample collection. Check B12 test price, normal range & deficiency levels.",
    keywords: [
      "vitamin b12 test",
      "vitamin b12 test price",
      "vitamin b12 test cost",
      "vitamin b12 normal range",
      "vitamin b12 blood test",
      "serum vitamin b12 test",
      "cobalamin test",
      "vitamin b12 test chandigarh",
      "vitamin b12 test near me",
      "vitamin b12 test at home",
      "low vitamin b12 level",
      "vitamin b12 and vitamin d test",
    ],
  },

  hero: {
    badge: "Home Sample Collection Available",

    title: "Vitamin B12 Test in Chandigarh",

    description:
      "Book a Vitamin B12 Test in Chandigarh and the Tricity with fast report delivery, professional sample collection, and convenient doorstep home collection from Shyam Labs. Check the latest vitamin B12 test price and book online.",

    image: "/tests/vitamin-b12.webp",

    imageAlt: "Vitamin B12 Blood Test (Serum Cobalamin) in Chandigarh",

    reportTime: "24 Hours",

    homeCollection: "Available",

    trustPoints: [
      "Professional Sample Collection",
      "Digital Reports",
      "Affordable Vitamin B12 Test Price",
      "Quality-Controlled Testing",
    ],

    bookButton: "Book Vitamin B12 Test",

    bookingUrl: "/prices/vitamin-b12-test-price-chandigarh",

    phone: "tel:+919914899300",
  },

  quickFacts: {
    sample: "Blood Sample",
    reportTime: "24 Hours",
    fasting: "Usually Not Required",
    homeCollection: "Available",
    ageGroup: "Adults & Children",
  },

  whyChooseUs: {
    title: "Why Choose Shyam Labs for Your Vitamin B12 Test?",

    description:
      "Get a dependable vitamin B12 test in Chandigarh and the Tricity with easy booking, professional sample collection, convenient home collection, and quick access to your digital report.",

    items: [
      {
        title: "Professional Sample Collection",
        description:
          "Every blood draw follows proper collection procedures for a comfortable, low-discomfort experience.",
      },
      {
        title: "Standardised Testing Process",
        description:
          "Your B12 sample is analysed on calibrated equipment following standard laboratory protocols.",
      },
      {
        title: "Fast Digital Reports",
        description:
          "Your vitamin B12 report is shared digitally as soon as testing is complete — no waiting in line to collect a printout.",
      },
      {
        title: "Home Collection Across Chandigarh & Tricity",
        description:
          "Book a vitamin B12 test with convenient home sample collection across Chandigarh and nearby Tricity areas, subject to service availability.",
      },
    ],
  },

  testDetails: {
    title: "About the Vitamin B12 Test (Serum Cobalamin)",

    description: [
      "The vitamin B12 test measures the amount of B12 (also called cobalamin) in your blood. B12 helps make red blood cells, keeps nerves healthy, and supports memory and mood, and your body cannot make it — it comes only from animal foods, fortified foods, and supplements.",
      "Low B12 is common in vegetarians, older adults, people on long-term metformin or acid-reducing medicines, and anyone with an absorption problem. A result in the borderline range can still be linked with symptoms, in which case doctors may add tests such as homocysteine or MMA, and a CBC to look for B12-related anemia.",
    ],

    included: [
      "Serum Vitamin B12 (Cobalamin)",
    ],
  },

  preparation: {
    title: "Preparation Before Your Vitamin B12 Test",

    description:
      "A vitamin B12 test needs very little preparation — here's what to keep in mind before your appointment.",

    items: [
      {
        title: "Vitamin B12 Test Fasting Requirement",
        description:
          "Fasting is usually not required, though some labs advise an 6-8 hour fast. Our team will confirm when you book, especially if other tests are booked with it.",
      },
      {
        title: "Tell the Lab About B12 Supplements or Injections",
        description:
          "A recent B12 tablet or injection raises your blood level for days to weeks and can hide a true deficiency. Mention it, and don't stop prescribed treatment unless your doctor advises.",
      },
      {
        title: "Mention Biotin or Hair-Skin-Nail Supplements",
        description:
          "High-dose biotin can interfere with some lab assays, including B12. If you take it, let the lab know when you book.",
      },
    ],
  },

  bookingProcess: {
    title: "How to Book Your Vitamin B12 Test in Chandigarh",

    description:
      "Booking a vitamin B12 test with Shyam Labs takes just a few minutes, with convenient home sample collection available across Chandigarh and the Tricity.",

    steps: [
      {
        title: "Book Test",
        description:
          "Select the Vitamin B12 Test and submit your booking request online or over a call.",
      },
      {
        title: "Schedule Sample Collection",
        description:
          "Choose a convenient collection time and provide your Chandigarh or Tricity address.",
      },
      {
        title: "Laboratory Testing",
        description:
          "Your sample is processed using standard laboratory procedures.",
      },
      {
        title: "Receive Report",
        description:
          "Your digital vitamin B12 report is sent to you within 24 hours of collection.",
      },
    ],
  },

  pricePreview: {
    title: "Vitamin B12 Test Price",

    description:
      "Check the latest vitamin B12 test price in Chandigarh and book with convenient home sample collection.",

    price: 400,

    priceUrl: "/prices/vitamin-b12-test-price-chandigarh",
  },

  relatedTests: [
    "vitamin-d-test",
    "cbc-test",
    "peripheral-blood-film",
    "hba1c-test",
    "thyroid-profile-test",
  ],

  faq: {
    title: "Frequently Asked Questions",

    description:
      "Answers to the questions patients in Chandigarh and the Tricity most often ask about the vitamin B12 test, its results, and booking.",

    items: [
      {
        question: "What is a vitamin B12 test, and what is it called?",
        answer:
          "It is a blood test that measures serum vitamin B12, also called cobalamin. It shows whether your B12 level is low, borderline, normal, or high.",
      },
      {
        question: "What is the normal vitamin B12 range?",
        answer:
          "Many labs use about 200-900 pg/mL (roughly 148-664 pmol/L) as the normal range. Below 200 pg/mL is generally considered deficient and 200-300 pg/mL is borderline. Always check the range on your own report.",
      },
      {
        question: "Is a B12 level of 200 or 300 normal?",
        answer:
          "200 pg/mL sits at the lower limit and is often treated as deficient or borderline. 300 is at the low end of normal, but if you have symptoms your doctor may still check homocysteine or MMA to be sure.",
      },
      {
        question: "What are the first signs of B12 deficiency?",
        answer:
          "Tiredness, weakness, pale skin, tingling or numbness in the hands and feet, a sore tongue, and trouble concentrating. Mild deficiency can have no symptoms.",
      },
      {
        question: "Is fasting required for a vitamin B12 test?",
        answer:
          "Usually not, though some labs advise a short fast. Tell the lab about any B12 supplements or injections, and about biotin, which can interfere with the test.",
      },
      {
        question: "Does a CBC test check vitamin B12?",
        answer:
          "No. A CBC can show anemia with large red cells (high MCV), which suggests B12 or folate deficiency, but only the B12 test confirms it.",
      },
      {
        question: "Which test is done to confirm B12 deficiency?",
        answer:
          "Serum vitamin B12 is the standard first test. If the result is borderline, doctors may add MMA or homocysteine, which rise when B12 is truly low.",
      },
      {
        question: "What does a high vitamin B12 level mean?",
        answer:
          "Most often it comes from supplements or injections. A high level with no supplement use is worth discussing with a doctor, as it can occasionally relate to liver or kidney disease or certain blood disorders.",
      },
      {
        question: "Why do vegetarians and people on metformin get low B12?",
        answer:
          "B12 comes only from animal foods and fortified foods, so vegetarians and vegans are at risk. Long-term metformin and acid-reducing medicines can reduce B12 absorption.",
      },
      {
        question: "What is the B12 and D3 test?",
        answer:
          "It is a combined check of vitamin B12 and vitamin D (D3), two nutrients that are commonly low and whose deficiency symptoms overlap, such as tiredness and weakness.",
      },
      {
        question: "Can I check B12 at home?",
        answer:
          "Symptoms can't confirm B12 deficiency, only a blood test can. You can book home sample collection so the blood is collected at your doorstep and tested at the lab.",
      },
      {
        question: "How long does the vitamin B12 report take?",
        answer:
          "Reports are usually available within 24 hours of sample collection.",
      },
      {
        question: "Is home sample collection available for vitamin B12 test in Chandigarh?",
        answer:
          "Yes, Shyam Labs provides home sample collection services for Chandigarh and nearby Tricity areas, subject to service availability.",
      },
      {
        question: "What is the vitamin B12 test price in Chandigarh?",
        answer:
          "Check our pricing page for the current vitamin B12 test price and book online with home sample collection.",
      },
    ],
  },

  cta: {
    title: "Book Your Vitamin B12 Test in Chandigarh Today",

    description:
      "Get convenient home sample collection, reliable vitamin B12 testing, and fast access to your digital report with Shyam Labs serving Chandigarh and the Tricity.",

    highlights: [
      "Home Sample Collection Available",
      "Fast Report Delivery",
      "Professional Collection Process",
    ],

    price: "400",

    priceText: "Check detailed vitamin B12 test pricing and booking options.",

    bookingUrl: "/prices/vitamin-b12-test-price-chandigarh",

    phone: "tel:+919914899300",

    buttonText: "Book Vitamin B12 Test",
  },
},
 {
  slug: "thyroid-profile-test",
  name: "Thyroid Profile Test",
  shortName: "Thyroid Profile",
  category: "Thyroid Function",
  organ: "Thyroid",
  sampleType: "Blood",
  parameterCount: 5,
  fasting: false,
  homeCollection: true,
  popular: true,


  price: 360,
  reportTime: "24 Hours",
  status: "published",

  seo: {
    // 52 characters
    title: "Thyroid Test in Chandigarh - Price, TSH Normal Range",
    // 131 characters
    description:
      "Book thyroid test (T3, T4, TSH) in Chandigarh with home sample collection from Shyam Labs. Check thyroid test price & normal range.",
    keywords: [
      "thyroid test",
      "tsh test",
      "t3 t4 tsh test",
      "tsh normal range",
      "thyroid test chandigarh",
      "thyroid test panchkula",
      "thyroid test mohali",
      "thyroid profile test",
      "thyroid blood test",
      "thyroid test near me",
      "thyroid test price chandigarh",
      "anti tpo test",
    ],
  },

  hero: {
    badge: "Home Sample Collection Available",

    title: "Thyroid Profile Test - T3, T4 & TSH in Chandigarh",

    description:
      "Book a Thyroid Profile Test in Chandigarh and the Tricity with fast report delivery, professional sample collection, and convenient doorstep home collection from Shyam Labs. Check the latest thyroid test price and book online.",

    image: "/tests/thyroid.webp",

    imageAlt: "Thyroid Profile Blood Test - T3, T4, TSH in Chandigarh",

    reportTime: "24 Hours",

    homeCollection: "Available",

    trustPoints: [
      "Professional Sample Collection",
      "Digital Reports",
      "Affordable Thyroid Test Price",
      "Quality-Controlled Testing",
    ],

    bookButton: "Book Thyroid Test",

    bookingUrl: "/prices/thyroid-test-price-chandigarh",

    phone: "tel:+919914899300",
  },

  quickFacts: {
    sample: "Blood Sample",
    reportTime: "24 Hours",
    fasting: "Not Required",
    homeCollection: "Available",
    ageGroup: "Adults & Children",
  },

  whyChooseUs: {
    title: "Why Choose Shyam Labs for Your Thyroid Test?",

    description:
      "Get a dependable thyroid profile test in Chandigarh and the Tricity with easy booking, professional sample collection, convenient home collection, and quick access to your digital report.",

    items: [
      {
        title: "Professional Sample Collection",
        description:
          "Every blood draw follows proper collection procedures for a comfortable, low-discomfort experience.",
      },
      {
        title: "Standardised Testing Process",
        description:
          "Your thyroid sample is analysed on calibrated equipment following standard laboratory protocols.",
      },
      {
        title: "Fast Digital Reports",
        description:
          "Your thyroid report is shared digitally as soon as testing is complete — no waiting in line to collect a printout.",
      },
      {
        title: "Home Collection Across Chandigarh & Tricity",
        description:
          "Book a thyroid test with convenient home sample collection across Chandigarh and nearby Tricity areas, subject to service availability.",
      },
    ],
  },

  testDetails: {
    title: "About the Thyroid Profile Test (TSH, T3 & T4)",

    description: [
      "A Thyroid Profile Test measures the hormones your thyroid gland produces — primarily TSH (Thyroid Stimulating Hormone), Total T3, and Total T4 — to check whether your thyroid is underactive, overactive, or working normally.",
      "TSH is the main screening value: it rises when your thyroid is underperforming and falls when it's overactive, which is why doctors usually look at it first before T3 and T4. A more detailed profile can add Free T3, Free T4, and Anti-TPO Antibody for autoimmune thyroid conditions like Hashimoto's or Graves' disease.",
    ],

    included: [
      "TSH (Thyroid Stimulating Hormone)",
      "Total T3 (Triiodothyronine)",
      "Total T4 (Thyroxine)",
    ],
  },

  preparation: {
    title: "Preparation Before Your Thyroid Test",

    description:
      "A thyroid test needs almost no preparation — here's what to keep in mind before your appointment.",

    items: [
      {
        title: "Thyroid Test Fasting Requirement",
        description:
          "Fasting is not required for a thyroid test. It can be done at any time of day, though morning samples are sometimes preferred for consistency between repeat tests.",
      },
      {
        title: "Continue Thyroid Medicines Only as Advised",
        description:
          "If you're already on thyroid medication, follow your doctor's instructions about whether to take it before or after the blood draw.",
      },
      {
        title: "Inform About Other Medications",
        description:
          "Mention any medicines or supplements you're currently taking to the phlebotomist before sample collection.",
      },
    ],
  },

  bookingProcess: {
    title: "How to Book Your Thyroid Test in Chandigarh",

    description:
      "Booking a thyroid test with Shyam Labs takes just a few minutes, with convenient home sample collection available across Chandigarh and the Tricity.",

    steps: [
      {
        title: "Book Test",
        description:
          "Select the Thyroid Profile Test and submit your booking request online or over a call.",
      },
      {
        title: "Schedule Sample Collection",
        description:
          "Choose a convenient collection time and provide your Chandigarh or Tricity address.",
      },
      {
        title: "Laboratory Testing",
        description:
          "Your sample is processed using standard laboratory procedures.",
      },
      {
        title: "Receive Report",
        description:
          "Your digital thyroid report is sent to you within 24 hours of collection.",
      },
    ],
  },

  pricePreview: {
    title: "Thyroid Test Price",

    description:
      "Check the latest thyroid test price in Chandigarh and book with convenient home sample collection.",

    price: 360,

    priceUrl: "/prices/thyroid-test-price-chandigarh",
  },

  relatedTests: [
    "hba1c-test",
    "lipid-profile",
    "kidney-function-test",
    "liver-function-test",
  ],

  faq: {
    title: "Frequently Asked Questions",

    description:
      "Answers to the questions patients in Chandigarh and the Tricity most often ask about the thyroid test, its results, and booking.",

    items: [
      {
        question: "What is a thyroid test, and what does TSH stand for?",
        answer:
          "A thyroid test checks how well your thyroid gland is working by measuring hormones in your blood. TSH stands for Thyroid Stimulating Hormone — the main value doctors check first, since it's the most sensitive indicator of thyroid function.",
      },
      {
        question: "What are the main tests included in a thyroid profile?",
        answer:
          "A standard thyroid profile includes TSH, Total T3, and Total T4. An advanced profile can add Free T3, Free T4, and Anti-TPO Antibody for autoimmune thyroid conditions.",
      },
      {
        question: "What is the normal range for TSH, T3, and T4?",
        answer:
          "TSH is typically 0.4–4.5 mIU/L, Total T3 is around 80–200 ng/dL, and Total T4 is around 5.0–12.0 µg/dL, though ranges vary slightly by lab, age, and sex — always check the range printed on your own report.",
      },
      {
        question: "Is fasting required before a thyroid test?",
        answer:
          "No, fasting is not required. You can eat and drink normally before the test and have it done at any time of day.",
      },
      {
        question: "What is the best time of day for a thyroid test?",
        answer:
          "Since fasting isn't required, a thyroid test can be done any time. Morning samples are sometimes preferred for consistency between repeat tests, but it isn't medically required.",
      },
      {
        question: "What are the warning signs of a thyroid problem?",
        answer:
          "Common signs include fatigue, unexplained weight gain or loss, hair thinning, cold or heat intolerance, irregular periods, mood changes, dry skin, a noticeably fast or slow heartbeat, muscle weakness, and constipation or diarrhea. Having one or two of these doesn't confirm a thyroid issue — a blood test is what actually tells you.",
      },
      {
        question: "What is a 'positive' thyroid test result?",
        answer:
          "Thyroid tests don't usually come back 'positive' or 'negative' the way an infection test does — they report numeric hormone levels that are then compared against a reference range. An 'abnormal' result just means a value falls outside that range and needs your doctor's interpretation.",
      },
      {
        question: "Which is more important — TSH, T3, or T4?",
        answer:
          "TSH is considered the most important screening value because it's the most sensitive and usually the first to shift when thyroid function changes. T3 and T4 are checked alongside it to understand the full picture.",
      },
      {
        question: "What is considered a dangerously high TSH level?",
        answer:
          "There's no single universal cutoff, but a TSH well above 10 mIU/L is generally considered significant and is usually a reason for your doctor to start or adjust treatment. Any high reading should be reviewed with a doctor rather than compared to online numbers alone.",
      },
      {
        question: "Can I get a thyroid test done without a doctor's prescription?",
        answer:
          "Yes, you can book a thyroid test directly for preventive screening. However, interpreting the results and deciding on any treatment should involve a doctor.",
      },
      {
        question: "How long is a thyroid test report valid?",
        answer:
          "There's no fixed expiry, but thyroid hormone levels can shift over weeks to months, so doctors often ask for a fresh test every few months when monitoring a condition or medication dose.",
      },
      {
        question: "Is home sample collection available for thyroid test in Chandigarh?",
        answer:
          "Yes, Shyam Labs provides home sample collection services for Chandigarh and nearby Tricity areas, subject to service availability.",
      },
      {
        question: "What is the thyroid test price in Chandigarh?",
        answer:
          "Check our pricing page for the current thyroid test price and book online with home sample collection.",
      },
    ],
  },

  cta: {
    title: "Book Your Thyroid Test in Chandigarh Today",

    description:
      "Get convenient home sample collection, reliable thyroid testing, and fast access to your digital report with Shyam Labs serving Chandigarh and the Tricity.",

    highlights: [
      "Home Sample Collection Available",
      "Fast Report Delivery",
      "Professional Collection Process",
    ],

    price: "360",

    priceText: "Check detailed thyroid test pricing and booking options.",

    bookingUrl: "/prices/thyroid-test-price-chandigarh",

    phone: "tel:+919914899300",

    buttonText: "Book Thyroid Test",
  },
},

{
  slug: "cbc-test",
  name: "Complete Blood Count",
  shortName: "CBC",
  category: "Haematology",
  organ: "Blood",
  sampleType: "Blood",
  parameterCount: 24,
  fasting: false,
  homeCollection: true,
  popular: true,

  description:
    "CBC (Complete Blood Count) test measures red blood cells, white blood cells, platelets, and hemoglobin to give a complete picture of your blood health in one report.",

  price: 200,
  reportTime: "24 Hours",
  status: "published",

  seo: {
    title: "CBC Test in Chandigarh - Price, Normal Range & Full Form",

    description:
      "Book CBC test in Chandigarh with home sample collection from Shyam Labs. Check CBC test price, normal range & get digital reports.",

    keywords: [
      "cbc test",
      "cbc test chandigarh",
      "cbc blood test chandigarh",
      "cbc test price chandigarh",
      "cbc test near me",
      "cbc test normal range",
      "cbc test in chandigarh",
      "complete blood count test chandigarh",
      "cbc test panchkula",
      "cbc test mohali",
      "cbc test tricity",
      "cbc test full form",
      "cbc test fasting",
      "cbc panel test",
    ],
  },

  hero: {
    badge: "Home Sample Collection Available",

    title: "CBC Blood Test - Complete Blood Count in Chandigarh",

    description:
      "Book a CBC Test in Chandigarh and the Tricity with fast report delivery, professional sample collection, and convenient doorstep home collection from Shyam Labs. Check the latest CBC test price and book online.",

    image: "/tests/cbc.webp",

    imageAlt:
      "CBC Blood Test - Complete Blood Count Test in Chandigarh",

    reportTime: "24 Hours",

    homeCollection: "Available",

    trustPoints: [
      "Professional Sample Collection",
      "Digital Reports",
      "Affordable CBC Test Price",
      "Quality-Controlled Testing",
    ],

    bookButton: "Book CBC Test",

    bookingUrl: "/prices/cbc-test-price-chandigarh",

    phone: "tel:+919914899300",
  },

  quickFacts: {
    sample: "Blood Sample",
    reportTime: "24 Hours",
    fasting: "Not Required",
    homeCollection: "Available",
    ageGroup: "Adults & Children",
  },

  whyChooseUs: {
    title: "Why Choose Shyam Labs for Your CBC Test?",

    description:
      "Get a dependable CBC test in Chandigarh and the Tricity with easy booking, professional sample collection, convenient home collection, and quick access to your digital report.",

    items: [
      {
        title: "Professional Sample Collection",
        description:
          "Every blood draw follows proper collection procedures for a comfortable, low-discomfort experience.",
      },
      {
        title: "Standardised Testing Process",
        description:
          "Your CBC sample is analysed on calibrated equipment following standard laboratory protocols.",
      },
      {
        title: "Fast Digital Reports",
        description:
          "Your CBC report is shared digitally as soon as testing is complete — no waiting in line to collect a printout.",
      },
      {
        title: "Home Collection Across Chandigarh & Tricity",
        description:
          "Book a CBC test with convenient home sample collection across Chandigarh and nearby Tricity areas, subject to service availability.",
      },
    ],
  },

  testDetails: {
    title: "About the CBC Blood Test (Full Form: Complete Blood Count)",

    description: [
      "CBC test full form is Complete Blood Count — a routine blood test that measures the different cells circulating in your blood, including red blood cells, white blood cells, hemoglobin, hematocrit, and platelets.",
      "It helps evaluate your general health, screen for anemia and infection, and flag patterns that may need a doctor's closer attention — though a CBC on its own does not check liver or kidney function; those need a separate LFT or KFT.",
    ],

    included: [
      "Hemoglobin Level",
      "Red Blood Cell (RBC) Count",
      "White Blood Cell (WBC) Count",
      "Platelet Count",
      "Hematocrit (PCV)",
      "MCV, MCH, MCHC Indices",
    ],
  },

  preparation: {
    title: "Preparation Before Your CBC Blood Test",

    description:
      "A CBC test needs almost no preparation — here's what to keep in mind before your appointment.",

    items: [
      {
        title: "CBC Test Fasting Requirement",
        description:
          "Fasting is not required for a CBC test. If it's booked alongside a fasting test like blood sugar, follow the fasting instructions given for that test instead.",
      },
      {
        title: "Stay Hydrated",
        description:
          "Drinking enough water beforehand makes the vein easier to locate and the draw more comfortable.",
      },
      {
        title: "Inform About Medications",
        description:
          "Mention any medicines or supplements you're currently taking to the phlebotomist before sample collection.",
      },
    ],
  },

  bookingProcess: {
    title: "How to Book Your CBC Blood Test in Chandigarh",

    description:
      "Booking a CBC test with Shyam Labs takes just a few minutes, with convenient home sample collection available across Chandigarh and the Tricity.",

    steps: [
      {
        title: "Book Test",
        description:
          "Select the CBC test and submit your booking request online or over a call.",
      },
      {
        title: "Schedule Sample Collection",
        description:
          "Choose a convenient collection time and provide your Chandigarh or Tricity address.",
      },
      {
        title: "Laboratory Testing",
        description:
          "Your sample is processed using standard laboratory procedures.",
      },
      {
        title: "Receive Report",
        description:
          "Your digital CBC report is sent to you within 24 hours of collection.",
      },
    ],
  },

  pricePreview: {
    title: "CBC Blood Test Price",

    description:
      "Check the latest CBC test price in Chandigarh and book with convenient home sample collection.",

    price: 200,

    priceUrl: "/prices/cbc-test-price-chandigarh",
  },

  relatedTests: [
    "platelet-count",
    "absolute-eosinophil-count",
    "esr-test",
    "peripheral-blood-film",
    "bleeding-time-clotting-time",
    "blood-group-test",
    "dengue-test",
    "mp-antigen-test",
  ],

  faq: {
    title: "Frequently Asked Questions",

    description:
      "Answers to the questions patients in Chandigarh and the Tricity most often ask about the CBC test, its results, and booking.",

    items: [
      {
        question: "What is the full form of CBC test in medical terms?",
        answer:
          "CBC stands for Complete Blood Count — a blood test that measures red blood cells, white blood cells, hemoglobin, hematocrit, and platelets in a single panel.",
      },
      {
        question: "What does a CBC test check for?",
        answer:
          "A CBC checks red blood cells, white blood cells, platelets, and hemoglobin to evaluate anemia, infection, clotting ability, and overall blood health.",
      },
      {
        question: "What if CBC is high or low?",
        answer:
          "It depends on which value is abnormal — for example, low hemoglobin may point to anemia, while a high WBC count often points to infection. Abnormal results should always be reviewed with a doctor alongside your symptoms.",
      },
      {
        question: "Does a CBC test check liver or kidney function?",
        answer:
          "No. A CBC only evaluates blood cells and hemoglobin — it does not directly assess liver or kidney health. Your doctor would order a separate Liver Function Test (LFT) or Kidney Function Test (KFT) for that.",
      },
      {
        question: "What diseases can a CBC test detect?",
        answer:
          "A CBC can help identify anemia, infections, clotting disorders, and dehydration, and — as a screening indicator only, not a diagnosis — certain blood cancers such as leukemia.",
      },
      {
        question: "Can a CBC test detect infection?",
        answer:
          "Yes, changes in your white blood cell count and differential are one of the most common ways a CBC flags a possible bacterial or viral infection.",
      },
      {
        question: "What does a CBC test indicate about cancer?",
        answer:
          "A CBC alone cannot diagnose cancer. Certain abnormal patterns — such as unusually high or low white cell counts — may prompt a doctor to order further tests, but the CBC itself is only a screening clue, not a diagnosis.",
      },
      {
        question: "What is the normal range for a CBC test?",
        answer:
          "Normal ranges vary slightly by age, sex, and pregnancy status — for example, hemoglobin is typically 13.5–17.5 g/dL in men and 12–15.5 g/dL in women. Always check the reference range printed on your own report.",
      },
      {
        question: "Is fasting required for a CBC Blood Test?",
        answer:
          "No, fasting is generally not required. If other tests are booked together, follow any fasting instructions given for those specific tests.",
      },
      {
        question: "When should I worry about my CBC results?",
        answer:
          "A single abnormal value flagged 'H' or 'L' isn't automatically a cause for alarm. Persistent abnormalities, or several parameters out of range together, are what your doctor will want to investigate further.",
      },
      {
        question: "What is a CBC differential, and what does an abnormal one mean?",
        answer:
          "A CBC with differential breaks the WBC count into neutrophils, lymphocytes, monocytes, eosinophils, and basophils. An abnormal differential can help a doctor tell whether an infection is likely bacterial, viral, or allergic in origin.",
      },
      {
        question: "What is the best time of day for a CBC test?",
        answer:
          "Since fasting isn't required, a CBC can be done at any time of day. Morning appointments are popular simply for convenience, not because they're medically necessary.",
      },
      {
        question: "How long does it take to receive the CBC test report?",
        answer:
          "CBC reports are usually available within 24 hours of sample collection.",
      },
      {
        question: "Is home sample collection available for CBC test in Chandigarh?",
        answer:
          "Yes, Shyam Labs provides home sample collection services for Chandigarh and nearby Tricity areas, subject to service availability. You can book online and choose a convenient collection time.",
      },
      {
        question: "What is the CBC test price in Chandigarh?",
        answer:
          "The CBC test is priced at ₹200. Check our pricing page for the latest offers and book online with home sample collection.",
      },
    ],
  },

  cta: {
    title: "Book Your CBC Blood Test in Chandigarh Today",

    description:
      "Get convenient home sample collection, reliable CBC testing, and fast access to your digital report with Shyam Labs serving Chandigarh and the Tricity.",

    highlights: [
      "Home Sample Collection Available",
      "Fast Report Delivery",
      "Professional Collection Process",
    ],

    price: "200",

    priceText:
      "Check detailed CBC test pricing and booking options.",

    bookingUrl: "/prices/cbc-test-price-chandigarh",

    phone: "tel:+919914899300",

    buttonText: "Book CBC Test",
  },
},


  {
    slug: "peripheral-blood-film",
    name: "Peripheral Blood Film",
    shortName: "PBF",
    category: "Haematology",
    organ: "Blood",
    sampleType: "Blood",
    parameterCount: 1,
    fasting: false,
    homeCollection: true,
    popular: false,
    description:
      "Microscopic examination of blood cells for diagnosing anemia, leukemia and blood disorders.",
    price: 300,
    reportTime: "24 Hours",
      status:"draft"
  },

  {
    slug: "bleeding-time-clotting-time",
    name: "Bleeding Time & Clotting Time",
    shortName: "BT / CT",
    category: "Haematology",
    organ: "Blood",
    sampleType: "Blood",
    parameterCount: 2,
    fasting: false,
    homeCollection: true,
    popular: false,
    description:
      "Evaluates blood clotting function and helps diagnose bleeding disorders.",
    price: 100,
    reportTime: "24 Hours",
     status:"draft"
  },

  // =========================
  // BIOCHEMISTRY
  // =========================

  {
    slug: "glucose-tolerance-test",
    name: "Glucose Tolerance Test",
    shortName: "GTT",
    category: "Biochemistry",
    organ: "Pancreas",
    sampleType: "Blood",
    parameterCount: 4,
    fasting: true,
    homeCollection: true,
    popular: false,
    description:
      "Measures how the body processes glucose to diagnose diabetes and prediabetes.",
    price: 300,
    reportTime: "24 Hours",
     status:"draft"
  },

  {
    slug: "glucose-challenge-test",
    name: "Glucose Challenge Test",
    shortName: "GCT",
    category: "Biochemistry",
    organ: "Pancreas",
    sampleType: "Blood",
    parameterCount: 2,
    fasting: false,
    homeCollection: true,
    popular: false,
    description:
      "Screening test for gestational diabetes during pregnancy.",
    price: 100,
    reportTime: "24 Hours",
     status:"draft"
  },

{
  slug: "blood-sugar-test",
 
  name: "Blood Sugar Test",
 
  shortName: "FBS / PPBS / RBS",
 
  category: "Biochemistry",
 
  organ: "Pancreas",
 
  sampleType: "Blood",
 
  parameterCount: 1,
 
  fasting: false,
  // Set at test level as "not always required" since Random Blood
  // Sugar (the most commonly booked variant) needs no fasting.
  // Fasting/PP-specific rules are called out in `preparation` below.
 
  homeCollection: true,
 
  popular: true,
 
  description:
    "Blood Sugar test measures glucose levels in your blood — as Fasting, Post-Prandial, or Random Sugar — to screen for and monitor diabetes.",
 
  price: 49,
 
  reportTime: "24 Hours",
 
  status: "published",
 
  seo: {
    title: "Blood Sugar Test - Price, Normal Range | Book Sugar Test",
    // 58 chars
 
    description:
      "Book a Blood Sugar test (Fasting/Random/PP) with home sample collection. Check blood sugar test price, normal range, and same-day digital reports.",
    // 150 chars
 
    keywords: [
      "blood sugar test",
      "blood sugar test price",
      "fasting blood sugar test",
      "random blood sugar test",
      "post prandial blood sugar test",
      "blood sugar test near me",
      "blood sugar normal range",
      "blood sugar test at home",
      "sugar test price",
      "diabetes blood test",
    ],
  },
 
  hero: {
    badge: "Home Sample Collection Available",
 
    title: "Blood Sugar Test - Fasting, Random & PP",
 
    description:
      "Book a Blood Sugar Test near you with fast report delivery, professional sample collection, and convenient home collection services. Check blood sugar test price and book online.",
 
    image: "/tests/blood-sugar.webp",
 
    imageAlt: "Blood Sugar Test - Fasting, Random & Post-Prandial",
 
    reportTime: "24 Hours",
 
    homeCollection: "Available",
 
    trustPoints: [
      "Professional Sample Collection",
      "Digital Reports",
      "Affordable Blood Sugar Test Price",
      "Quality-Controlled Testing",
    ],
 
    bookButton: "Book Blood Sugar Test",
 
    bookingUrl: "/prices/blood-sugar-hba1c-test-price-garhshankar",
 
    phone: "tel:+918968038602",
  },
 
  quickFacts: {
    sample: "Blood Sample",
 
    reportTime: "24 Hours",
 
    fasting: "Required for Fasting Sugar Only",
 
    homeCollection: "Available",
 
    ageGroup: "Adults & Children",
  },
 
  whyChooseUs: {
    title: "Why Choose Our Blood Sugar Test Service?",
 
    description:
      "Get a reliable blood sugar test near you with convenient booking, professional sample collection, and easy access to digital reports.",
 
    items: [
      {
        title: "Professional Sample Collection",
        description:
          "Samples are collected using proper procedures for a comfortable testing experience.",
      },
      {
        title: "Quality Testing Process",
        description:
          "Your blood sugar test is processed using standardized laboratory procedures for accurate results.",
      },
      {
        title: "Fast Digital Reports",
        description:
          "Receive your blood sugar test report conveniently after completion of testing.",
      },
      {
        title: "Home Collection Available",
        description:
          "Book blood sugar test home sample collection from your home at a convenient time.",
      },
    ],
  },
 
  testDetails: {
    title: "About Blood Sugar Test (Fasting, Random & Post-Prandial)",
 
    description: [
      "A Blood Sugar test measures the amount of glucose circulating in your blood at the time of sample collection. It can be taken as Fasting Blood Sugar (FBS, after 8-12 hours without food), Random Blood Sugar (RBS, any time of day), or Post-Prandial Blood Sugar (PPBS, 2 hours after a meal).",
 
      "This test helps healthcare professionals screen for and monitor diabetes and prediabetes, and is often ordered alongside HbA1c for a complete picture of both current and long-term blood sugar control.",
    ],
 
    included: [
      "Fasting Blood Sugar (FBS)",
      "Random Blood Sugar (RBS)",
      "Post-Prandial Blood Sugar (PPBS)",
      "Glucose Level (mg/dL)",
    ],
  },
 
  preparation: {
    title: "Preparation Before Blood Sugar Test",
 
    description:
      "Preparation depends on which type of sugar test is ordered — follow these instructions for a smooth sample collection experience.",
 
    items: [
      {
        title: "Fasting Blood Sugar Requirement",
        description:
          "Fasting for 8-12 hours (water is fine) is required before a Fasting Blood Sugar test. No fasting is needed for Random Blood Sugar or HbA1c.",
      },
      {
        title: "Post-Prandial Timing",
        description:
          "For a Post-Prandial (PP) test, the sample is collected exactly 2 hours after starting a meal — note your meal start time when booking.",
      },
      {
        title: "Inform About Medications",
        description:
          "Inform the healthcare professional about any diabetes medication, insulin, or supplements you are taking, as timing can affect results.",
      },
    ],
  },
 
  bookingProcess: {
    title: "How to Book Your Blood Sugar Test",
 
    description:
      "Book your blood sugar test easily with a simple process and get your sample collected at your preferred time.",
 
    steps: [
      {
        title: "Book Test",
        description:
          "Choose Fasting, Random, or PP Blood Sugar and submit your booking request online or contact our team.",
      },
      {
        title: "Sample Collection",
        description:
          "Our trained professional collects the sample safely from your location, at the correct fasting or post-meal timing.",
      },
      {
        title: "Laboratory Testing",
        description:
          "Your sample is processed using standard laboratory procedures.",
      },
      {
        title: "Receive Report",
        description:
          "Get your digital blood sugar test report after the test is completed.",
      },
    ],
  },
 
  pricePreview: {
    title: "Blood Sugar Test Price",
 
    description:
      "Check the latest blood sugar test price near you and book your test with convenient home sample collection.",
 
    price: 49,
 
    priceUrl: "/prices/blood-sugar-hba1c-test-price-garhshankar",
  },
 
  relatedTests: [
    "hba1c-test",
    "lipid-profile",
    "kidney-function-test",
    "liver-function-test",
    "thyroid-profile-test",
    "urine-examination",
  ],
 
  faq: {
    title: "Frequently Asked Questions",
 
    description:
      "Find answers to common questions about the blood sugar test, its price, results, and booking.",
 
    items: [
      {
        question: "What is the normal blood sugar range?",
        answer:
          "Normal Fasting Blood Sugar is 70-100 mg/dL, and normal Random or Post-Prandial Blood Sugar is below 140 mg/dL. Values above these ranges may indicate prediabetes or diabetes.",
      },
      {
        question: "Do I need to fast before a blood sugar test?",
        answer:
          "Fasting for 8-12 hours is required only for a Fasting Blood Sugar test. Random Blood Sugar can be done any time without fasting, and Post-Prandial is timed 2 hours after a meal instead.",
      },
      {
        question: "What is the difference between FBS, RBS, and PPBS?",
        answer:
          "FBS (Fasting Blood Sugar) is measured after 8-12 hours without food, RBS (Random Blood Sugar) can be measured at any time, and PPBS (Post-Prandial Blood Sugar) is measured 2 hours after eating.",
      },
      {
        question: "Is a blood sugar level of 140 normal?",
        answer:
          "A reading of 140 mg/dL sits at the upper edge of normal for a random or post-meal test, but would be considered high if taken fasting. Share the test type and timing with your doctor for accurate interpretation.",
      },
      {
        question: "How long does it take to receive the blood sugar test report?",
        answer:
          "Blood sugar reports are usually available within 24 hours after sample collection and laboratory processing, often much sooner for routine bookings.",
      },
      {
        question: "Is home sample collection available for blood sugar test?",
        answer:
          "Yes, home sample collection is available for Fasting, Random, and Post-Prandial Blood Sugar tests. You can book an appointment and choose a convenient collection time.",
      },
      {
        question: "What is the blood sugar test price?",
        answer:
          "You can check the latest blood sugar test price on our pricing page and book online with home sample collection.",
      },
      {
        question: "Should I get HbA1c along with a blood sugar test?",
        answer:
          "Many doctors recommend HbA1c alongside a blood sugar test since HbA1c reflects your 3-month average, while blood sugar shows your level at that specific moment — together they give a fuller picture of diabetes control.",
      },
    ],
  },
 
  cta: {
    title: "Book Your Blood Sugar Test Today",
 
    description:
      "Get convenient sample collection, reliable blood sugar testing, and easy access to your reports.",
 
    highlights: [
      "Home Sample Collection Available",
      "Fast Report Delivery",
      "Professional Collection Process",
    ],
 
    price: "49",
 
    priceText: "Check detailed blood sugar test pricing and booking options.",
 
    bookingUrl: "/prices/blood-sugar-hba1c-test-price-garhshankar",
 
    phone: "tel:+918968038602",
 
    buttonText: "Book Blood Sugar Test",
  },
},
  // =========================
// KIDNEY FUNCTION TEST (KFT)
// =========================

{
  slug: "kidney-function-test",
  name: "Kidney Function Test",
  shortName: "RFT/KFT",
  category: "Kidney Function",
  organ: "Kidney",
  sampleType: "Blood",
  parameterCount: 6,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Comprehensive kidney profile to evaluate kidney function, electrolyte balance and overall renal health.",
  price: 500,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "blood-urea",
  name: "Blood Urea",
  shortName: "Urea",
  category: "Kidney Function",
  organ: "Kidney",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures blood urea levels to assess kidney function and protein metabolism.",
  price: 100,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "serum-creatinine",
  name: "Serum Creatinine",
  shortName: "Creatinine",
  category: "Kidney Function",
  organ: "Kidney",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Measures creatinine levels to evaluate kidney filtration and renal function.",
  price: 100,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "uric-acid-test",
  name: "Uric Acid Test",
  shortName: "Uric Acid",
  category: "Kidney Function",
  organ: "Kidney",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Measures uric acid levels to diagnose gout and monitor kidney health.",
  price: 80,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "total-protein-test",
  name: "Total Protein Test",
  shortName: "Protein",
  category: "Kidney Function",
  organ: "Kidney",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures total protein concentration to assess nutritional status and kidney function.",
  price: 100,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "serum-albumin",
  name: "Serum Albumin",
  shortName: "Albumin",
  category: "Kidney Function",
  organ: "Kidney",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures albumin levels to evaluate liver and kidney function and nutritional health.",
  price: 100,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "serum-globulin",
  name: "Serum Globulin",
  shortName: "Globulin",
  category: "Kidney Function",
  organ: "Kidney",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures globulin proteins to help diagnose immune, liver and kidney disorders.",
  price: 100,
  reportTime: "24 Hours",
   status:"draft"
},

// =========================
// LIPID PROFILE
// =========================

{
  slug: "lipid-profile",
  name: "Lipid Profile",
  shortName: "Lipid Profile",
  category: "Cholesterol Test",
  organ: "Heart",
  sampleType: "Blood",
  parameterCount: 5,
  fasting: true,
  homeCollection: true,
  popular: true,
 
  description:
    "Lipid Profile test measures Total Cholesterol, LDL, HDL, Triglycerides, and VLDL to assess your cardiovascular disease risk in one report.",
 
  price: 450,
  reportTime: "24 Hours",
  status: "published",
 
  seo: {
    // 55 characters
    title: "Lipid Profile Test in Chandigarh - Price & Normal Range",
    // 134 characters
    description:
      "Book lipid profile (cholesterol) test in Chandigarh with home sample collection. Check price, normal range & LDL, HDL, triglycerides.",
    keywords: [
      "lipid profile test",
      "cholesterol test",
      "lipid profile test price",
      "lipid profile test chandigarh",
      "lipid profile test near me",
      "lipid profile test normal range",
      "cholesterol test near me",
      "ldl cholesterol test",
      "hdl cholesterol test",
      "triglycerides test",
      "lipid panel test",
      "lipid profile test fasting",
    ],
  },
 
  hero: {
    badge: "Home Sample Collection Available",
 
    title: "Lipid Profile (Cholesterol) Test in Chandigarh",
 
    description:
      "Book a Lipid Profile Test in Chandigarh and the Tricity with fast report delivery, professional sample collection, and convenient doorstep home collection from Shyam Labs. Check the latest lipid profile test price and book online.",
 
    image: "/tests/lipid-profile.webp",
 
    imageAlt: "Lipid Profile Blood Test - Cholesterol, LDL, HDL in Chandigarh",
 
    reportTime: "24 Hours",
 
    homeCollection: "Available",
 
    trustPoints: [
      "Professional Sample Collection",
      "Digital Reports",
      "Affordable Lipid Profile Price",
      "Quality-Controlled Testing",
    ],
 
    bookButton: "Book Lipid Profile Test",
 
    bookingUrl: "/prices/lipid-profile-test-price-chandigarh",
 
    phone: "tel:+919914899300",
  },
 
  quickFacts: {
    sample: "Blood Sample",
    reportTime: "24 Hours",
    fasting: "9-12 Hours Recommended",
    homeCollection: "Available",
    ageGroup: "Adults",
  },
 
  whyChooseUs: {
    title: "Why Choose Shyam Labs for Your Lipid Profile Test?",
 
    description:
      "Get a dependable lipid profile test in Chandigarh and the Tricity with easy booking, professional sample collection, convenient home collection, and quick access to your digital report.",
 
    items: [
      {
        title: "Professional Sample Collection",
        description:
          "Every blood draw follows proper collection procedures for a comfortable, low-discomfort experience.",
      },
      {
        title: "Standardised Testing Process",
        description:
          "Your lipid sample is analysed on calibrated equipment following standard laboratory protocols.",
      },
      {
        title: "Fast Digital Reports",
        description:
          "Your lipid profile report is shared digitally as soon as testing is complete — no waiting in line to collect a printout.",
      },
      {
        title: "Home Collection Across Chandigarh & Tricity",
        description:
          "Book a lipid profile test with convenient home sample collection across Chandigarh and nearby Tricity areas, subject to service availability.",
      },
    ],
  },
 
  testDetails: {
    title: "About the Lipid Profile Test (Cholesterol Panel)",
 
    description: [
      "A Lipid Profile test measures the different types of fat circulating in your blood — Total Cholesterol, LDL ('bad' cholesterol), HDL ('good' cholesterol), Triglycerides, and VLDL — to help assess your risk of heart disease and stroke.",
      "It's one of the most commonly recommended preventive tests because high cholesterol usually has no symptoms. The test alone can't show whether an artery is actually blocked — that needs imaging such as an angiography — but it flags the risk factors a doctor would want to act on before that happens.",
    ],
 
    included: [
      "Total Cholesterol",
      "LDL Cholesterol",
      "HDL Cholesterol",
      "Triglycerides",
      "VLDL Cholesterol",
    ],
  },
 
  preparation: {
    title: "Preparation Before Your Lipid Profile Test",
 
    description:
      "Unlike most routine blood tests, a lipid profile is usually done fasting — here's what to keep in mind before your appointment.",
 
    items: [
      {
        title: "Fast for 9-12 Hours",
        description:
          "Avoid food for 9-12 hours before the test, as this is the conventional recommendation for accurate triglyceride and LDL readings. Plain water is fine during this window.",
      },
      {
        title: "Avoid Alcohol Beforehand",
        description:
          "Avoid alcohol for at least 24 hours before the test, since it can temporarily raise triglyceride levels.",
      },
      {
        title: "Continue Medicines Only as Advised",
        description:
          "If you're on cholesterol-lowering medication, don't stop it before the test unless your doctor tells you to — mention it to the phlebotomist instead.",
      },
    ],
  },
 
  bookingProcess: {
    title: "How to Book Your Lipid Profile Test in Chandigarh",
 
    description:
      "Booking a lipid profile test with Shyam Labs takes just a few minutes, with convenient home sample collection available across Chandigarh and the Tricity.",
 
    steps: [
      {
        title: "Book Test",
        description:
          "Select the Lipid Profile Test and submit your booking request online or over a call.",
      },
      {
        title: "Schedule Sample Collection",
        description:
          "Choose an early-morning fasting slot and provide your Chandigarh or Tricity address.",
      },
      {
        title: "Laboratory Testing",
        description:
          "Your sample is processed using standard laboratory procedures.",
      },
      {
        title: "Receive Report",
        description:
          "Your digital lipid profile report is sent to you within 24 hours of collection.",
      },
    ],
  },
 
  pricePreview: {
    title: "Lipid Profile Test Price",
 
    description:
      "Check the latest lipid profile test price in Chandigarh and book with convenient home sample collection.",
 
    price: 450,
 
    priceUrl: "/prices/lipid-profile-test-price-chandigarh",
  },
 
  relatedTests: [
    "total-cholesterol",
    "triglycerides-test",
    "hdl-cholesterol",
    "ldl-cholesterol",
    "vldl-cholesterol",
  ],
 
  faq: {
    title: "Frequently Asked Questions",
 
    description:
      "Answers to the questions patients in Chandigarh and the Tricity most often ask about the lipid profile test, its results, and booking.",
 
    items: [
      {
        question: "What is a lipid profile test, and what does it check?",
        answer:
          "A lipid profile is a blood test that measures Total Cholesterol, LDL, HDL, Triglycerides, and VLDL to evaluate your risk of heart disease and stroke.",
      },
      {
        question: "Is fasting required for a lipid profile test?",
        answer:
          "Yes, 9-12 hours of fasting is the conventional recommendation for the most accurate triglyceride and LDL readings, though your doctor may sometimes order a non-fasting version depending on the purpose of the test.",
      },
      {
        question: "Can I drink water before the test?",
        answer:
          "Yes, plain water is fine during the fasting period — avoid only food, tea, coffee, and sugary or alcoholic drinks.",
      },
      {
        question: "What is the normal range for a lipid profile?",
        answer:
          "General guidelines: Total Cholesterol under 200 mg/dL, LDL under 100 mg/dL, HDL above 40 mg/dL (men) or 50 mg/dL (women), and Triglycerides under 150 mg/dL. Always check the exact range printed on your own report.",
      },
      {
        question: "Which is bad, HDL or LDL?",
        answer:
          "LDL is often called 'bad' cholesterol because high levels contribute to plaque buildup in arteries. HDL is called 'good' cholesterol because it helps clear excess cholesterol from the bloodstream.",
      },
      {
        question: "What is the danger zone for LDL cholesterol?",
        answer:
          "As a general guide, LDL of 160-189 mg/dL is considered high and 190 mg/dL or above is considered very high. These are population-level guidelines — your own risk depends on other factors your doctor will weigh in too.",
      },
      {
        question: "Can a lipid profile test detect blockage or fatty liver?",
        answer:
          "No. A lipid profile only measures cholesterol and triglyceride levels in your blood — it doesn't visualize arteries or the liver. Detecting an actual blockage needs imaging like an angiography, and fatty liver needs a liver function test or ultrasound.",
      },
      {
        question: "What happens if my lipid profile is high or abnormal?",
        answer:
          "High LDL or triglycerides generally raise cardiovascular risk, while low HDL removes a protective factor. Your doctor interprets the full panel together with your age, lifestyle, and other risk factors before recommending diet changes or medication.",
      },
      {
        question: "At what age should I start checking my lipid profile?",
        answer:
          "Routine screening is commonly recommended from around age 20, and more frequently for people with diabetes, high blood pressure, obesity, or a family history of heart disease.",
      },
      {
        question: "Is a lipid profile test painful?",
        answer:
          "No more than a standard blood draw — a small needle prick to collect the sample, with mild and brief discomfort.",
      },
      {
        question: "How long does it take to receive the lipid profile report?",
        answer:
          "Reports are usually available within 24 hours of sample collection.",
      },
      {
        question: "Is home sample collection available for lipid profile test in Chandigarh?",
        answer:
          "Yes, Shyam Labs provides home sample collection services for Chandigarh and nearby Tricity areas, subject to service availability.",
      },
      {
        question: "What is the lipid profile test price in Chandigarh?",
        answer:
          "Check our pricing page for the current lipid profile test price and book online with home sample collection.",
      },
    ],
  },
 
  cta: {
    title: "Book Your Lipid Profile Test in Chandigarh Today",
 
    description:
      "Get convenient home sample collection, reliable cholesterol testing, and fast access to your digital report with Shyam Labs serving Chandigarh and the Tricity.",
 
    highlights: [
      "Home Sample Collection Available",
      "Fast Report Delivery",
      "Professional Collection Process",
    ],
 
    price: "450",
 
    priceText: "Check detailed lipid profile test pricing and booking options.",
 
    bookingUrl: "/prices/lipid-profile-test-price-chandigarh",
 
    phone: "tel:+919914899300",
 
    buttonText: "Book Lipid Profile Test",
  },
},

{
  slug: "total-cholesterol",
  name: "Total Cholesterol",
  shortName: "Cholesterol",
  category: "Cholesterol Test",
  organ: "Heart",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: true,
  homeCollection: true,
  popular: false,
  description:
    "Measures total cholesterol levels to evaluate heart health.",
  price: 90,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "triglycerides-test",
  name: "Triglycerides Test",
  shortName: "Triglycerides",
  category: "Cholesterol Test",
  organ: "Heart",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: true,
  homeCollection: true,
  popular: false,
  description:
    "Measures triglyceride levels to assess cardiovascular risk.",
  price: 150,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "hdl-cholesterol",
  name: "HDL Cholesterol",
  shortName: "HDL",
  category: "Cholesterol Test",
  organ: "Heart",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: true,
  homeCollection: true,
  popular: false,
  description:
    "Measures good cholesterol that helps protect against heart disease.",
  price: 100,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "ldl-cholesterol",
  name: "LDL Cholesterol",
  shortName: "LDL",
  category: "Cholesterol Test",
  organ: "Heart",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: true,
  homeCollection: true,
  popular: false,
  description:
    "Measures bad cholesterol responsible for plaque formation in arteries.",
  price: 60,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "vldl-cholesterol",
  name: "VLDL Cholesterol",
  shortName: "VLDL",
  category: "Cholesterol Test",
  organ: "Heart",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: true,
  homeCollection: true,
  popular: false,
  description:
    "Measures very low-density lipoprotein cholesterol associated with triglyceride transport.",
  price: 60,
  reportTime: "24 Hours",
   status:"draft"
},

// =========================
// LIVER FUNCTION TEST (LFT)
// =========================

{
  slug: "liver-function-test",
  name: "Liver Function Test",
  shortName: "LFT",
  category: "Liver Function",
  organ: "Liver",
  sampleType: "Blood",
  parameterCount: 10,
  fasting: false,
  homeCollection: true,
  popular: true,

  description:
    "Liver Function Test (LFT) measures liver enzymes (SGOT, SGPT, ALP), bilirubin, and proteins like albumin to show how well your liver is working.",

  price: 350,
  reportTime: "24 Hours",
  status: "published",

  seo: {
    // 56 characters
    title: "Liver Function Test in Chandigarh - Price & Normal Range",
    // 128 characters
    description:
      "Book LFT (liver function test) in Chandigarh with home sample collection. Check LFT price, normal range, SGOT, SGPT & bilirubin.",
    keywords: [
      "liver function test",
      "lft test",
      "lft test price",
      "liver function test price",
      "liver function test chandigarh",
      "liver function test near me",
      "liver profile test",
      "sgot sgpt test",
      "sgpt normal range",
      "sgot normal range",
      "bilirubin test",
      "liver function test normal range",
    ],
  },

  hero: {
    badge: "Home Sample Collection Available",

    title: "Liver Function Test (LFT) in Chandigarh",

    description:
      "Book a Liver Function Test in Chandigarh and the Tricity with fast report delivery, professional sample collection, and convenient doorstep home collection from Shyam Labs. Check the latest LFT price and book online.",

    image: "/tests/liver-function-test.webp",

    imageAlt: "Liver Function Test (LFT) - SGOT, SGPT, Bilirubin in Chandigarh",

    reportTime: "24 Hours",

    homeCollection: "Available",

    trustPoints: [
      "Professional Sample Collection",
      "Digital Reports",
      "Affordable LFT Price",
      "Quality-Controlled Testing",
    ],

    bookButton: "Book LFT Test",

    bookingUrl: "/prices/liver-function-test-price-chandigarh",

    phone: "tel:+919914899300",
  },

  quickFacts: {
    sample: "Blood Sample",
    reportTime: "24 Hours",
    fasting: "Usually Not Required",
    homeCollection: "Available",
    ageGroup: "Adults & Children",
  },

  whyChooseUs: {
    title: "Why Choose Shyam Labs for Your Liver Function Test?",

    description:
      "Get a dependable LFT in Chandigarh and the Tricity with easy booking, professional sample collection, convenient home collection, and quick access to your digital report.",

    items: [
      {
        title: "Professional Sample Collection",
        description:
          "Every blood draw follows proper collection procedures for a comfortable, low-discomfort experience.",
      },
      {
        title: "Standardised Testing Process",
        description:
          "Your LFT sample is analysed on calibrated equipment following standard laboratory protocols.",
      },
      {
        title: "Fast Digital Reports",
        description:
          "Your LFT report is shared digitally as soon as testing is complete — no waiting in line to collect a printout.",
      },
      {
        title: "Home Collection Across Chandigarh & Tricity",
        description:
          "Book an LFT with convenient home sample collection across Chandigarh and nearby Tricity areas, subject to service availability.",
      },
    ],
  },

  testDetails: {
    title: "About the Liver Function Test (LFT Full Form: Liver Function Test)",

    description: [
      "A Liver Function Test (LFT), also called a liver profile or liver panel, is a group of blood tests that measure liver enzymes, bilirubin, and proteins to show how well your liver is working and whether it may be inflamed or damaged.",
      "An LFT can point towards conditions such as hepatitis, fatty liver, alcohol-related liver disease, bile duct problems, or drug-related liver stress. It cannot confirm fatty liver on its own, though — that needs an ultrasound or elastography — and viral hepatitis needs specific virus tests such as HBsAg or anti-HCV.",
    ],

    included: [
      "SGOT (AST)",
      "SGPT (ALT)",
      "Alkaline Phosphatase (ALP)",
      "Total Bilirubin",
      "Direct Bilirubin",
      "Indirect Bilirubin",
      "Total Protein",
      "Serum Albumin",
      "Serum Globulin",
      "A/G Ratio",
    ],
  },

  preparation: {
    title: "Preparation Before Your Liver Function Test",

    description:
      "An LFT needs very little preparation — here's what to keep in mind before your appointment.",

    items: [
      {
        title: "Liver Function Test Fasting Requirement",
        description:
          "Fasting is usually not required, though some labs advise 8-12 hours of fasting, especially if the LFT is booked with blood sugar or a lipid profile. Our team will confirm when you book.",
      },
      {
        title: "Avoid Alcohol Beforehand",
        description:
          "Avoid alcohol for at least 24 hours before the test, as it can temporarily raise liver enzymes such as SGOT and GGT.",
      },
      {
        title: "Inform About Medications & Supplements",
        description:
          "Mention any medicines, herbal products, or supplements you take — some painkillers, antibiotics, and supplements can affect liver values. Don't stop prescribed medicines unless your doctor tells you to.",
      },
    ],
  },

  bookingProcess: {
    title: "How to Book Your Liver Function Test in Chandigarh",

    description:
      "Booking an LFT with Shyam Labs takes just a few minutes, with convenient home sample collection available across Chandigarh and the Tricity.",

    steps: [
      {
        title: "Book Test",
        description:
          "Select the Liver Function Test and submit your booking request online or over a call.",
      },
      {
        title: "Schedule Sample Collection",
        description:
          "Choose a convenient collection time and provide your Chandigarh or Tricity address.",
      },
      {
        title: "Laboratory Testing",
        description:
          "Your sample is processed using standard laboratory procedures.",
      },
      {
        title: "Receive Report",
        description:
          "Your digital LFT report is sent to you within 24 hours of collection.",
      },
    ],
  },

  pricePreview: {
    title: "Liver Function Test Price",

    description:
      "Check the latest LFT price in Chandigarh and book with convenient home sample collection.",

    price: 350,

    priceUrl: "/prices/liver-function-test-price-chandigarh",
  },

  relatedTests: [
    "sgot-test",
    "sgpt-test",
    "bilirubin-total",
    "alkaline-phosphatase-test",
    "serum-albumin",
    "kidney-function-test",
    "hbsag-test",
    "hcv-test",
  ],

  faq: {
    title: "Frequently Asked Questions",

    description:
      "Answers to the questions patients in Chandigarh and the Tricity most often ask about the liver function test, its results, and booking.",

    items: [
      {
        question: "What is the full form of LFT test?",
        answer:
          "LFT stands for Liver Function Test — a group of blood tests that measure liver enzymes, bilirubin, and proteins to check how well your liver is working.",
      },
      {
        question: "What tests are included in a liver function test?",
        answer:
          "A standard LFT includes SGOT (AST), SGPT (ALT), ALP, total, direct and indirect bilirubin, total protein, albumin, globulin, and the A/G ratio. GGT is sometimes added separately.",
      },
      {
        question: "What is the SGOT and SGPT normal range?",
        answer:
          "As a general guide, SGOT (AST) is about 10-40 U/L and SGPT (ALT) is about 7-56 U/L in adults, though ranges vary by lab and sex. Always check the range printed on your own report.",
      },
      {
        question: "What is the normal range for bilirubin, albumin, and ALP?",
        answer:
          "Typical adult ranges are total bilirubin about 0.2-1.2 mg/dL, direct bilirubin up to 0.3 mg/dL, albumin about 3.5-5.0 g/dL, and ALP about 44-147 U/L. Lab ranges differ slightly, so rely on your report.",
      },
      {
        question: "Is fasting required for a liver function test?",
        answer:
          "Usually not. Some labs advise 8-12 hours of fasting, particularly if the LFT is combined with blood sugar or a lipid profile. Avoid alcohol for 24 hours beforehand.",
      },
      {
        question: "Can an LFT confirm fatty liver?",
        answer:
          "No. Raised SGPT, SGOT, or GGT can point towards fatty liver, but many people with fatty liver have normal LFT values. An ultrasound or elastography is used to confirm it.",
      },
      {
        question: "What if my LFT is high?",
        answer:
          "A high enzyme value means your liver may be inflamed or stressed, which has many possible causes — fatty liver, alcohol, viral hepatitis, medicines, or gallbladder problems. Your doctor looks at which values are raised, by how much, and your symptoms before advising next steps.",
      },
      {
        question: "When should I worry about my liver function test?",
        answer:
          "Mildly raised values are common and often temporary. Values several times above the upper limit, high bilirubin with yellow eyes or skin, or abnormal results alongside symptoms like dark urine, pale stools, or abdominal swelling deserve prompt medical attention.",
      },
      {
        question: "What are the signs of poor liver function?",
        answer:
          "Yellowing of the eyes or skin (jaundice), dark urine, pale stools, persistent fatigue, nausea or loss of appetite, itching, abdominal pain or swelling, and easy bruising. Early liver disease often has no symptoms, which is why testing matters.",
      },
      {
        question: "Can I check liver function at home?",
        answer:
          "Symptoms alone can't tell you how your liver is working — only a blood test can. You can, however, book home sample collection so a phlebotomist collects the blood at your doorstep and the test is run at the lab.",
      },
      {
        question: "What is the difference between a CBC and an LFT?",
        answer:
          "A CBC measures your blood cells (red cells, white cells, platelets, hemoglobin), while an LFT measures liver enzymes, bilirubin, and proteins. They check different things and are often ordered together.",
      },
      {
        question: "How long does it take to get liver function test results?",
        answer:
          "LFT reports are usually available within 24 hours of sample collection.",
      },
      {
        question: "Is home sample collection available for liver function test in Chandigarh?",
        answer:
          "Yes, Shyam Labs provides home sample collection services for Chandigarh and nearby Tricity areas, subject to service availability.",
      },
      {
        question: "What is the LFT test price in Chandigarh?",
        answer:
          "Check our pricing page for the current liver function test price and book online with home sample collection.",
      },
    ],
  },

  cta: {
    title: "Book Your Liver Function Test in Chandigarh Today",

    description:
      "Get convenient home sample collection, reliable LFT testing, and fast access to your digital report with Shyam Labs serving Chandigarh and the Tricity.",

    highlights: [
      "Home Sample Collection Available",
      "Fast Report Delivery",
      "Professional Collection Process",
    ],

    price: "350",

    priceText: "Check detailed LFT pricing and booking options.",

    bookingUrl: "/prices/liver-function-test-price-chandigarh",

    phone: "tel:+919914899300",

    buttonText: "Book LFT Test",
  },
},
//done

{
  slug: "bilirubin-total",
  name: "Serum Bilirubin Total",
  shortName: "Total Bilirubin",
  category: "Liver Function",
  organ: "Liver",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures total bilirubin to assess liver function and jaundice.",
  price: 100,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "bilirubin-direct",
  name: "Serum Bilirubin Direct",
  shortName: "Direct Bilirubin",
  category: "Liver Function",
  organ: "Liver",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures direct bilirubin to diagnose liver and bile duct disorders.",
  price: 100,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "bilirubin-indirect",
  name: "Serum Bilirubin Indirect",
  shortName: "Indirect Bilirubin",
  category: "Liver Function",
  organ: "Liver",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures indirect bilirubin to evaluate hemolysis and liver disease.",
  price: 100,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "sgot-test",
  name: "SGOT (AST)",
  shortName: "SGOT",
  category: "Liver Function",
  organ: "Liver",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Measures AST enzyme to detect liver and muscle injury.",
  price: 120,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "sgpt-test",
  name: "SGPT (ALT)",
  shortName: "SGPT",
  category: "Liver Function",
  organ: "Liver",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Measures ALT enzyme to evaluate liver inflammation and damage.",
  price: 120,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "alkaline-phosphatase-test",
  name: "Alkaline Phosphatase",
  shortName: "ALP",
  category: "Liver Function",
  organ: "Liver",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures ALP enzyme to assess liver, bile duct and bone disorders.",
  price: 100,
  reportTime: "24 Hours",
   status:"draft"
},
// =========================
// SEROLOGY
// =========================

{
  slug: "widal-test",
  name: "Widal Test",
  shortName: "Widal",
  category: "Serology",
  organ: "Immune System",
  sampleType: "Blood",
  parameterCount: 4,
  fasting: false,
  homeCollection: true,
  popular: true,

  description:
    "Widal test measures antibody titres against Salmonella Typhi and Paratyphi to support the diagnosis of typhoid (enteric) fever.",

  price: 200,
  reportTime: "24 Hours",
  status: "published",

  seo: {
    // 55 characters
    title: "Widal Test in Chandigarh - Price, Titre Chart & Meaning",
    // 128 characters
    description:
      "Book Widal test in Chandigarh with home sample collection. Check Widal test price, normal range, titre chart & positive meaning.",
    keywords: [
      "widal test",
      "widal test price",
      "widal test normal range",
      "widal test positive meaning",
      "widal test titre chart",
      "widal test full form",
      "widal test accuracy",
      "widal test false positive",
      "widal vs typhidot",
      "widal test chandigarh",
      "typhoid blood test",
      "typhoid test near me",
    ],
  },

  hero: {
    badge: "Home Sample Collection Available",

    title: "Widal Test for Typhoid in Chandigarh",

    description:
      "Book a Widal Test in Chandigarh and the Tricity with fast report delivery, professional sample collection, and convenient doorstep home collection from Shyam Labs. Check the latest Widal test price and book online.",

    image: "/tests/widal.webp",

    imageAlt: "Widal Test for Typhoid Fever in Chandigarh",

    reportTime: "24 Hours",

    homeCollection: "Available",

    trustPoints: [
      "Professional Sample Collection",
      "Digital Reports",
      "Affordable Widal Test Price",
      "Quality-Controlled Testing",
    ],

    bookButton: "Book Widal Test",

    bookingUrl: "/prices/typhoid-test-price-chandigarh",

    phone: "tel:+919914899300",
  },

  quickFacts: {
    sample: "Blood Sample",
    reportTime: "24 Hours",
    fasting: "Not Required",
    homeCollection: "Available",
    ageGroup: "Adults & Children",
  },

  whyChooseUs: {
    title: "Why Choose Shyam Labs for Your Widal Test?",

    description:
      "Get a dependable Widal test in Chandigarh and the Tricity with easy booking, professional sample collection, convenient home collection, and quick access to your digital report.",

    items: [
      {
        title: "Professional Sample Collection",
        description:
          "Every blood draw follows proper collection procedures for a comfortable, low-discomfort experience.",
      },
      {
        title: "Standardised Testing Process",
        description:
          "Your Widal sample is analysed following standard laboratory protocols.",
      },
      {
        title: "Fast Digital Reports",
        description:
          "Your Widal report is shared digitally as soon as testing is complete — no waiting in line to collect a printout.",
      },
      {
        title: "Home Collection Across Chandigarh & Tricity",
        description:
          "Book a Widal test with convenient home sample collection across Chandigarh and nearby Tricity areas, subject to service availability.",
      },
    ],
  },

  testDetails: {
    title: "About the Widal Test (Typhoid Antibody Titre)",

    description: [
      "The Widal test is named after the French physician Georges Fernand Widal, so it has no abbreviation or 'full form'. It is an agglutination test that measures antibodies your body makes against Salmonella Typhi (the typhoid bacterium) and Salmonella Paratyphi, reported as titres such as 1:80, 1:160, or 1:320.",
      "A Widal test supports a typhoid diagnosis but cannot confirm it on its own. Antibodies only rise after about a week of fever, past infections and vaccination can cause positive results, and normal baseline titres are higher in areas where typhoid is common. Doctors read the titre together with your symptoms and, where needed, other tests such as Typhidot or blood culture.",
    ],

    included: [
      "Salmonella Typhi 'O' (TO) Titre",
      "Salmonella Typhi 'H' (TH) Titre",
      "Salmonella Paratyphi 'AH' Titre",
      "Salmonella Paratyphi 'BH' Titre",
    ],
  },

  preparation: {
    title: "Preparation Before Your Widal Test",

    description:
      "A Widal test needs no special preparation — here's what to keep in mind before your appointment.",

    items: [
      {
        title: "Widal Test Fasting Requirement",
        description:
          "Fasting is not required. You can eat and drink normally, and the test can be done at any time of day.",
      },
      {
        title: "Note How Many Days You Have Had Fever",
        description:
          "Widal is most useful after the first week of fever. Tell the phlebotomist or your doctor the day your fever started, since a very early test can come back negative.",
      },
      {
        title: "Mention Past Typhoid, Vaccination, or Antibiotics",
        description:
          "A previous infection or typhoid vaccine can leave raised titres, so let the lab and your doctor know to help interpret the result correctly.",
      },
    ],
  },

  bookingProcess: {
    title: "How to Book Your Widal Test in Chandigarh",

    description:
      "Booking a Widal test with Shyam Labs takes just a few minutes, with convenient home sample collection available across Chandigarh and the Tricity.",

    steps: [
      {
        title: "Book Test",
        description:
          "Select the Widal Test and submit your booking request online or over a call.",
      },
      {
        title: "Schedule Sample Collection",
        description:
          "Choose a convenient collection time and provide your Chandigarh or Tricity address.",
      },
      {
        title: "Laboratory Testing",
        description:
          "Your sample is processed using standard laboratory procedures.",
      },
      {
        title: "Receive Report",
        description:
          "Your digital Widal report is sent to you within 24 hours of collection.",
      },
    ],
  },

  pricePreview: {
    title: "Widal Test Price",

    description:
      "Check the latest Widal test price in Chandigarh and book with convenient home sample collection.",

    price: 200,

    priceUrl: "/prices/typhoid-test-price-chandigarh",
  },

  relatedTests: [
    "typhidot-test",
    "cbc-test",
    "dengue-test",
    "mp-antigen-test",
    "stool-examination",
    "liver-function-test",
  ],

  faq: {
    title: "Frequently Asked Questions",

    description:
      "Answers to the questions patients in Chandigarh and the Tricity most often ask about the Widal test, its results, and booking.",

    items: [
      {
        question: "What is the full form of the Widal test?",
        answer:
          "Widal is not an abbreviation. It is named after French physician Georges Fernand Widal, who described the agglutination test used to support the diagnosis of typhoid fever.",
      },
      {
        question: "What does the Widal test measure?",
        answer:
          "It measures antibody titres against Salmonella Typhi 'O' and 'H' antigens and Salmonella Paratyphi 'AH' and 'BH' antigens, reported as dilutions such as 1:80 or 1:160.",
      },
      {
        question: "What is the normal range of the Widal test?",
        answer:
          "Typically a titre below 1:80 is considered negative. In areas where typhoid is common, low titres of 1:80 can be present in healthy people, so labs and doctors usually look for 1:160 or higher. Cut-offs vary by lab and region.",
      },
      {
        question: "Is 1:80, 1:160, or 1:320 positive on the Widal test?",
        answer:
          "1:80 is often a borderline or baseline value. 1:160 is considered significant by many labs, and 1:320 or higher is more strongly suggestive of typhoid when you also have fever and symptoms. Your doctor interprets it with your clinical picture.",
      },
      {
        question: "What does a positive Widal test mean?",
        answer:
          "It means antibodies against typhoid bacteria are present at a significant level, which supports typhoid in someone with a compatible fever. It cannot confirm typhoid alone, because past infection or vaccination can also cause a positive result.",
      },
      {
        question: "After how many days of fever should the Widal test be done?",
        answer:
          "Antibodies usually become detectable only after about 7-10 days of fever, so a test in the first few days can be falsely negative. If it was done early, your doctor may repeat it after a few days.",
      },
      {
        question: "Can the Widal test give a false positive?",
        answer:
          "Yes. Past typhoid, typhoid vaccination, other infections like malaria or dengue, and normal baseline antibodies in endemic areas can all raise titres without current typhoid.",
      },
      {
        question: "Which is better, Widal or Typhidot?",
        answer:
          "Neither is perfect. Typhidot can turn positive earlier and gives a quick result, while Widal is useful after the first week, and a rising titre on repeat testing is more meaningful. Blood culture is the most reliable confirmation. Your doctor chooses based on how many days of fever you have had.",
      },
      {
        question: "Is fasting required for the Widal test?",
        answer:
          "No. You can eat and drink normally and have the test at any time of day.",
      },
      {
        question: "How long does the Widal test take?",
        answer:
          "Blood collection takes a couple of minutes, and the report is usually ready the same day or within 24 hours.",
      },
      {
        question: "Is home sample collection available for the Widal test in Chandigarh?",
        answer:
          "Yes, Shyam Labs provides home sample collection services for Chandigarh and nearby Tricity areas, subject to service availability.",
      },
      {
        question: "What is the Widal test price in Chandigarh?",
        answer:
          "Check our pricing page for the current Widal test price and book online with home sample collection.",
      },
    ],
  },

  cta: {
    title: "Book Your Widal Test in Chandigarh Today",

    description:
      "Get convenient home sample collection, reliable Widal testing, and fast access to your digital report with Shyam Labs serving Chandigarh and the Tricity.",

    highlights: [
      "Home Sample Collection Available",
      "Fast Report Delivery",
      "Professional Collection Process",
    ],

    price: "200",

    priceText: "Check detailed typhoid test pricing and booking options.",

    bookingUrl: "/prices/typhoid-test-price-chandigarh",

    phone: "tel:+919914899300",

    buttonText: "Book Widal Test",
  },
},


{
  slug: "typhidot-test",
  name: "Typhidot Test (IgM & IgG)",
  shortName: "Typhidot",
  category: "Serology",
  organ: "Immune System",
  sampleType: "Blood",
  parameterCount: 2,
  fasting: false,
  homeCollection: true,
  popular: true,

  description:
    "Typhidot test detects IgM and IgG antibodies against Salmonella Typhi, giving a rapid result to help diagnose typhoid fever early.",

  price: 400,
  reportTime: "24 Hours",
  status: "published",

  seo: {
    // 53 characters
    title: "Typhidot Test in Chandigarh - Price & IgM IgG Meaning",
    // 114 characters
    description:
      "Book Typhidot test in Chandigarh with home sample collection. Check Typhidot price, IgM IgG meaning & report time.",
    keywords: [
      "typhidot test",
      "typhidot test price",
      "typhidot igm positive meaning",
      "typhidot igg positive meaning",
      "typhidot test normal range",
      "typhoid igm igg test",
      "typhoid rapid test",
      "typhoid antigen test",
      "typhidot test chandigarh",
      "typhidot vs blood culture",
      "typhoid blood test",
      "typhoid test near me",
    ],
  },

  hero: {
    badge: "Home Sample Collection Available",

    title: "Typhidot Test (IgM & IgG) for Typhoid in Chandigarh",

    description:
      "Book a Typhidot Test in Chandigarh and the Tricity with fast report delivery, professional sample collection, and convenient doorstep home collection from Shyam Labs. Check the latest Typhidot test price and book online.",

    image: "/tests/typhidot.webp",

    imageAlt: "Typhidot IgM IgG Test for Typhoid Fever in Chandigarh",

    reportTime: "24 Hours",

    homeCollection: "Available",

    trustPoints: [
      "Professional Sample Collection",
      "Digital Reports",
      "Affordable Typhidot Test Price",
      "Quality-Controlled Testing",
    ],

    bookButton: "Book Typhidot Test",

    bookingUrl: "/prices/typhoid-test-price-chandigarh",

    phone: "tel:+919914899300",
  },

  quickFacts: {
    sample: "Blood Sample",
    reportTime: "24 Hours",
    fasting: "Not Required",
    homeCollection: "Available",
    ageGroup: "Adults & Children",
  },

  whyChooseUs: {
    title: "Why Choose Shyam Labs for Your Typhidot Test?",

    description:
      "Get a dependable Typhidot test in Chandigarh and the Tricity with easy booking, professional sample collection, convenient home collection, and quick access to your digital report.",

    items: [
      {
        title: "Professional Sample Collection",
        description:
          "Every blood draw follows proper collection procedures for a comfortable, low-discomfort experience.",
      },
      {
        title: "Standardised Testing Process",
        description:
          "Your Typhidot sample is analysed following standard laboratory protocols.",
      },
      {
        title: "Fast Digital Reports",
        description:
          "Your Typhidot report is shared digitally as soon as testing is complete — no waiting in line to collect a printout.",
      },
      {
        title: "Home Collection Across Chandigarh & Tricity",
        description:
          "Book a Typhidot test with convenient home sample collection across Chandigarh and nearby Tricity areas, subject to service availability.",
      },
    ],
  },

  testDetails: {
    title: "About the Typhidot Test (Typhoid IgM & IgG)",

    description: [
      "The Typhidot test is a rapid blood test that detects IgM and IgG antibodies against a protein of Salmonella Typhi, the bacterium that causes typhoid fever. It can turn positive earlier than the Widal test, often within the first 2-3 days of fever, and gives a result quickly.",
      "IgM suggests a recent infection, IgG alone suggests past exposure, and both together point to an acute or early infection. Typhidot supports a diagnosis but does not replace blood culture, which is the most reliable confirmation. IgM can also stay positive for weeks after recovery, so your doctor reads the result with your symptoms.",
    ],

    included: [
      "Typhoid IgM Antibody",
      "Typhoid IgG Antibody",
    ],
  },

  preparation: {
    title: "Preparation Before Your Typhidot Test",

    description:
      "A Typhidot test needs no special preparation — here's what to keep in mind before your appointment.",

    items: [
      {
        title: "Typhidot Test Fasting Requirement",
        description:
          "Fasting is not required. You can eat and drink normally, and the test can be done at any time of day.",
      },
      {
        title: "Note How Many Days You Have Had Fever",
        description:
          "Tell the phlebotomist or your doctor the day your fever started, since it helps interpret IgM and IgG results.",
      },
      {
        title: "Mention Antibiotics or a Past Typhoid Episode",
        description:
          "Recent antibiotics, a previous typhoid infection, or vaccination can affect interpretation, so share them when you book.",
      },
    ],
  },

  bookingProcess: {
    title: "How to Book Your Typhidot Test in Chandigarh",

    description:
      "Booking a Typhidot test with Shyam Labs takes just a few minutes, with convenient home sample collection available across Chandigarh and the Tricity.",

    steps: [
      {
        title: "Book Test",
        description:
          "Select the Typhidot Test and submit your booking request online or over a call.",
      },
      {
        title: "Schedule Sample Collection",
        description:
          "Choose a convenient collection time and provide your Chandigarh or Tricity address.",
      },
      {
        title: "Laboratory Testing",
        description:
          "Your sample is processed using standard laboratory procedures.",
      },
      {
        title: "Receive Report",
        description:
          "Your digital Typhidot report is sent to you within 24 hours of collection.",
      },
    ],
  },

  pricePreview: {
    title: "Typhidot Test Price",

    description:
      "Check the latest Typhidot test price in Chandigarh and book with convenient home sample collection.",

    price: 400,

    priceUrl: "/prices/typhoid-test-price-chandigarh",
  },

  relatedTests: [
    "widal-test",
    "cbc-test",
    "dengue-test",
    "mp-antigen-test",
    "stool-examination",
    "liver-function-test",
  ],

  faq: {
    title: "Frequently Asked Questions",

    description:
      "Answers to the questions patients in Chandigarh and the Tricity most often ask about the Typhidot test, its results, and booking.",

    items: [
      {
        question: "What is the Typhidot test?",
        answer:
          "It is a rapid blood test that detects IgM and IgG antibodies against Salmonella Typhi to help diagnose typhoid fever early. Typhidot is the name of the test, while typhoid is the disease.",
      },
      {
        question: "Are typhoid and Typhidot the same?",
        answer:
          "No. Typhoid is the illness caused by Salmonella Typhi. Typhidot is one of the blood tests used to help detect it.",
      },
      {
        question: "What does a positive Typhidot IgM mean?",
        answer:
          "It suggests a recent or current typhoid infection, especially with fever and typical symptoms. It is not a final confirmation, because IgM can stay positive for weeks and other infections can occasionally cross-react. Your doctor decides on treatment.",
      },
      {
        question: "What does a positive Typhidot IgG mean?",
        answer:
          "IgG alone usually points to past exposure or an older infection. IgM and IgG both positive suggests an acute or early infection.",
      },
      {
        question: "What does a negative Typhidot result mean?",
        answer:
          "It means no typhoid antibodies were detected. If you are tested in the first day or two of fever it can still be falsely negative, so your doctor may repeat it or advise a blood culture if symptoms continue.",
      },
      {
        question: "What is the normal range for the Typhidot test?",
        answer:
          "Normal is negative (non-reactive) for both IgM and IgG. Some reports show a grade such as 1+ or 2+, with higher grades meaning a stronger reaction.",
      },
      {
        question: "Does a positive Typhidot IgM confirm typhoid?",
        answer:
          "It strongly supports it when combined with symptoms, but blood culture is the confirmatory test. Doctors usually start treatment based on the clinical picture plus the test result.",
      },
      {
        question: "Typhidot vs blood culture: which is better?",
        answer:
          "Typhidot is fast and turns positive early but is less specific. Blood culture identifies the bacteria and shows which antibiotics work, but takes 2-5 days and works best in the first week before antibiotics. They complement each other.",
      },
      {
        question: "After how many days of fever should I do the Typhidot test?",
        answer:
          "It can turn positive within about 2-3 days of fever, earlier than Widal. Don't wait if you have a fever lasting more than 3 days with weakness, headache, or stomach upset.",
      },
      {
        question: "Is fasting required for the Typhidot test?",
        answer:
          "No. You can eat and drink normally and have the test at any time of day.",
      },
      {
        question: "How long does the Typhidot test take?",
        answer:
          "Rapid testing gives a result within hours, and the digital report is usually ready the same day or within 24 hours.",
      },
      {
        question: "Is home sample collection available for the Typhidot test in Chandigarh?",
        answer:
          "Yes, Shyam Labs provides home sample collection services for Chandigarh and nearby Tricity areas, subject to service availability.",
      },
      {
        question: "What is the Typhidot test price in Chandigarh?",
        answer:
          "Check our pricing page for the current Typhidot test price and book online with home sample collection.",
      },
    ],
  },

  cta: {
    title: "Book Your Typhidot Test in Chandigarh Today",

    description:
      "Get convenient home sample collection, reliable Typhidot testing, and fast access to your digital report with Shyam Labs serving Chandigarh and the Tricity.",

    highlights: [
      "Home Sample Collection Available",
      "Fast Report Delivery",
      "Professional Collection Process",
    ],

    price: "400",

    priceText: "Check detailed typhoid test pricing and booking options.",

    bookingUrl: "/prices/typhoid-test-price-chandigarh",

    phone: "tel:+919914899300",

    buttonText: "Book Typhidot Test",
  },
},

// {
//   slug: "crp-test",
//   name: "C-Reactive Protein",
//   shortName: "CRP",
//   category: "Serology",
//   organ: "Immune System",
//   sampleType: "Blood",
//   parameterCount: 1,
//   fasting: false,
//   homeCollection: true,
//   popular: true,
//   description:
//     "Measures inflammation in the body caused by infections, autoimmune disorders or tissue injury.",
//   price: 200,
//   reportTime: "24 Hours",
// },

{
  slug: "crp-quantitative-test",
  name: "C-Reactive Protein Quantitative",
  shortName: "CRP Quantitative",
  category: "Serology",
  organ: "Immune System",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Provides an exact CRP value to evaluate inflammation severity and monitor treatment.",
  price: 400,
  reportTime: "24 Hours",
   status:"draft"
},

// {
//   slug: "aso-test",
//   name: "Anti Streptolysin O",
//   shortName: "ASO",
//   category: "Serology",
//   organ: "Immune System",
//   sampleType: "Blood",
//   parameterCount: 1,
//   fasting: false,
//   homeCollection: true,
//   popular: false,
//   description:
//     "Detects antibodies produced after Streptococcus infection to help diagnose rheumatic fever.",
//   price: 200,
//   reportTime: "24 Hours",
// },

{
  slug: "aso-quantitative-test",
  name: "Anti Streptolysin O Quantitative",
  shortName: "ASO Quantitative",
  category: "Serology",
  organ: "Immune System",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures ASO antibody concentration to evaluate recent streptococcal infection.",
  price: 400,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "vdrl-test",
  name: "VDRL Test",
  shortName: "VDRL",
  category: "Serology",
  organ: "Immune System",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Screening test used for the detection of syphilis infection.",
  price: 150,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "hiv-1-2-test",
  name: "HIV I & II Test",
  shortName: "HIV I & II",
  category: "Serology",
  organ: "Immune System",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Detects antibodies against HIV Type 1 and Type 2 viruses.",
  price: 300,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "hbsag-test",
  name: "HBsAg Test",
  shortName: "HBsAg",
  category: "Serology",
  organ: "Liver",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Detects Hepatitis B surface antigen for early diagnosis of Hepatitis B infection.",
  price: 200,
  reportTime: "24 Hours",
   status:"draft"
},
{
  slug: "hba1c-test",
  name: "HbA1c Test (Glycated Hemoglobin)",
  shortName: "HbA1c",
  category: "Biochemistry",
  organ: "Pancreas",
  sampleType: "Blood",
  parameterCount: 2,
  fasting: false,
  homeCollection: true,
  popular: true,

  description:
    "HbA1c test shows your average blood sugar over the past 2-3 months and is used to diagnose prediabetes and diabetes and to monitor diabetes control.",

  price: 350,
  reportTime: "24 Hours",
  status: "published",

  seo: {
    // 47 characters
    title: "HbA1c Test in Chandigarh - Price & Normal Range",
    // 120 characters
    description:
      "Book HbA1c test in Chandigarh with home sample collection. No fasting needed. Check HbA1c price, normal range & meaning.",
    keywords: [
      "hba1c test",
      "hba1c test price",
      "hba1c test cost",
      "hba1c normal range",
      "hba1c test near me",
      "hba1c test at home",
      "hba1c test chandigarh",
      "glycated hemoglobin test",
      "hba1c blood test",
      "hba1c normal range chart",
      "diabetes blood test",
      "hba1c test full form",
    ],
  },

  hero: {
    badge: "Home Sample Collection Available",

    title: "HbA1c Test (Glycated Hemoglobin) in Chandigarh",

    description:
      "Book an HbA1c Test in Chandigarh and the Tricity with fast report delivery, professional sample collection, and convenient doorstep home collection from Shyam Labs. No fasting needed. Check the latest HbA1c test price and book online.",

    image: "/tests/hba1c.webp",

    imageAlt: "HbA1c Blood Test for Diabetes in Chandigarh",

    reportTime: "24 Hours",

    homeCollection: "Available",

    trustPoints: [
      "Professional Sample Collection",
      "Digital Reports",
      "Affordable HbA1c Test Price",
      "Quality-Controlled Testing",
    ],

    bookButton: "Book HbA1c Test",

    bookingUrl: "/prices/hba1c-test-price-chandigarh",

    phone: "tel:+919914899300",
  },

  quickFacts: {
    sample: "Blood Sample",
    reportTime: "24 Hours",
    fasting: "Not Required",
    homeCollection: "Available",
    ageGroup: "Adults & Children",
  },

  whyChooseUs: {
    title: "Why Choose Shyam Labs for Your HbA1c Test?",

    description:
      "Get a dependable HbA1c test in Chandigarh and the Tricity with easy booking, professional sample collection, convenient home collection, and quick access to your digital report.",

    items: [
      {
        title: "Professional Sample Collection",
        description:
          "Every blood draw follows proper collection procedures for a comfortable, low-discomfort experience.",
      },
      {
        title: "Standardised Testing Process",
        description:
          "Your HbA1c sample is analysed on calibrated equipment following standard laboratory protocols.",
      },
      {
        title: "Fast Digital Reports",
        description:
          "Your HbA1c report is shared digitally as soon as testing is complete — no waiting in line to collect a printout.",
      },
      {
        title: "Home Collection Across Chandigarh & Tricity",
        description:
          "Book an HbA1c test with convenient home sample collection across Chandigarh and nearby Tricity areas, subject to service availability.",
      },
    ],
  },

  testDetails: {
    title: "About the HbA1c Test (Glycated Hemoglobin)",

    description: [
      "HbA1c (also called glycated or glycosylated hemoglobin, or A1c) shows the percentage of your hemoglobin that has sugar attached to it. Because red blood cells live for about three months, the result reflects your average blood sugar over roughly the past 2-3 months, not just today.",
      "That makes it useful for diagnosing prediabetes and diabetes and for checking how well diabetes is controlled. It does not show day-to-day swings or low sugar episodes, and conditions such as anemia or hemoglobin variants can make it read falsely high or low, so doctors often use it alongside fasting and post-meal sugar tests.",
    ],

    included: [
      "HbA1c (Glycated Hemoglobin) %",
      "Estimated Average Glucose (eAG)",
    ],
  },

  preparation: {
    title: "Preparation Before Your HbA1c Test",

    description:
      "An HbA1c test needs no special preparation — here's what to keep in mind before your appointment.",

    items: [
      {
        title: "HbA1c Test Fasting Requirement",
        description:
          "Fasting is not required. You can eat and drink normally, including water, and the test can be done at any time of day.",
      },
      {
        title: "Continue Your Medicines",
        description:
          "Take your diabetes medicines as usual unless your doctor tells you otherwise, since the test is meant to show your real day-to-day control.",
      },
      {
        title: "Mention Anemia, Recent Blood Loss, or Transfusion",
        description:
          "Iron deficiency, other anemias, recent blood loss or transfusion, and hemoglobin conditions can affect HbA1c, so tell the lab and your doctor.",
      },
    ],
  },

  bookingProcess: {
    title: "How to Book Your HbA1c Test in Chandigarh",

    description:
      "Booking an HbA1c test with Shyam Labs takes just a few minutes, with convenient home sample collection available across Chandigarh and the Tricity.",

    steps: [
      {
        title: "Book Test",
        description:
          "Select the HbA1c Test and submit your booking request online or over a call.",
      },
      {
        title: "Schedule Sample Collection",
        description:
          "Choose a convenient collection time — no fasting needed — and provide your Chandigarh or Tricity address.",
      },
      {
        title: "Laboratory Testing",
        description:
          "Your sample is processed using standard laboratory procedures.",
      },
      {
        title: "Receive Report",
        description:
          "Your digital HbA1c report is sent to you within 24 hours of collection.",
      },
    ],
  },

  pricePreview: {
    title: "HbA1c Test Price",

    description:
      "Check the latest HbA1c test price in Chandigarh and book with convenient home sample collection.",

    price: 350,

    priceUrl: "/prices/hba1c-test-price-chandigarh",
  },

  relatedTests: [
    "blood-sugar-test",
    "glucose-tolerance-test",
    "kidney-function-test",
    "lipid-profile",
    "urine-examination",
    "thyroid-profile-test",
  ],

  faq: {
    title: "Frequently Asked Questions",

    description:
      "Answers to the questions patients in Chandigarh and the Tricity most often ask about the HbA1c test, its results, and booking.",

    items: [
      {
        question: "What is the HbA1c test, and what is its full form?",
        answer:
          "HbA1c stands for hemoglobin A1c, also called glycated (or glycosylated) hemoglobin. It shows your average blood sugar over the past 2-3 months.",
      },
      {
        question: "What is the normal HbA1c range?",
        answer:
          "Below 5.7% is normal, 5.7-6.4% is prediabetes, and 6.5% or above is in the diabetes range. These ranges are the same for men and women.",
      },
      {
        question: "What does an HbA1c of 5.7 or 6.5 mean?",
        answer:
          "5.7% is the lower edge of prediabetes. 6.5% is the diagnostic threshold for diabetes, usually confirmed with a repeat test. In someone already treated for diabetes, 6.5% is good control.",
      },
      {
        question: "What HbA1c is good for a person with diabetes?",
        answer:
          "For many adults the usual goal is below 7%, but your doctor sets a personal target. Older adults or people with other illnesses may have a slightly higher target, such as 7.5-8%.",
      },
      {
        question: "Is HbA1c 7.2, 7.6, or 9.5 normal?",
        answer:
          "None of these is in the non-diabetic range. 7.2% is slightly above the usual 7% goal for people with diabetes, 7.6% is a little higher, and 9.5% means poor control that needs prompt medical review.",
      },
      {
        question: "What is a dangerously high HbA1c?",
        answer:
          "There is no single cut-off, but values above about 9% show poor control and values of 10-12% or more carry a high risk of complications. Seek urgent care with extreme thirst, vomiting, drowsiness, or confusion, whatever the number.",
      },
      {
        question: "Is fasting required for the HbA1c test?",
        answer:
          "No. You can eat and drink normally, including water, and have the test at any time of day.",
      },
      {
        question: "How often should HbA1c be tested?",
        answer:
          "Typically every 3 months if your treatment changed or targets aren't met, at least twice a year if stable, yearly with prediabetes, and about every 3 years for routine screening if normal.",
      },
      {
        question: "What time period does HbA1c show?",
        answer:
          "About the past 2-3 months, with the most recent 4-6 weeks counting the most.",
      },
      {
        question: "Can HbA1c be falsely high or low?",
        answer:
          "Yes. Iron deficiency and vitamin B12 deficiency can raise it, while recent blood loss, hemolytic anemia, and some hemoglobin variants can lower it. Kidney disease and pregnancy also affect it.",
      },
      {
        question: "HbA1c vs fasting blood sugar: which is better?",
        answer:
          "They show different things. Fasting and post-meal sugar show your glucose at one moment, while HbA1c shows the 2-3 month average. Doctors often use them together.",
      },
      {
        question: "Can I test HbA1c at home?",
        answer:
          "You can book home sample collection so the blood is collected at your doorstep and tested at the lab. Home finger-prick kits exist, but a lab test is more reliable for diagnosis.",
      },
      {
        question: "How long does the HbA1c report take?",
        answer:
          "Reports are usually ready the same day or within 24 hours of sample collection.",
      },
      {
        question: "Is home sample collection available for HbA1c test in Chandigarh?",
        answer:
          "Yes, Shyam Labs provides home sample collection services for Chandigarh and nearby Tricity areas, subject to service availability.",
      },
      {
        question: "What is the HbA1c test price in Chandigarh?",
        answer:
          "Check our pricing page for the current HbA1c test price and book online with home sample collection.",
      },
    ],
  },

  cta: {
    title: "Book Your HbA1c Test in Chandigarh Today",

    description:
      "Get convenient home sample collection, reliable HbA1c testing, and fast access to your digital report with Shyam Labs serving Chandigarh and the Tricity.",

    highlights: [
      "Home Sample Collection Available",
      "Fast Report Delivery",
      "Professional Collection Process",
    ],

    price: "350",

    priceText: "Check detailed HbA1c test pricing and booking options.",

    bookingUrl: "/prices/hba1c-test-price-chandigarh",

    phone: "tel:+919914899300",

    buttonText: "Book HbA1c Test",
  },
},
{
  slug: "hcv-test",
  name: "Hepatitis C Virus Test",
  shortName: "HCV",
  category: "Serology",
  organ: "Liver",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Detects antibodies against Hepatitis C virus to diagnose HCV infection.",
  price: 350,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "blood-group-test",
  name: "Blood Group Test",
  shortName: "Blood Group",
  category: "Blood Test",
  organ: "Blood",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Determines ABO and Rh blood group for transfusion and medical purposes.",
  price: 50,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "mantoux-test",
  name: "Mantoux Test",
  shortName: "Mantoux",
  category: "Serology",
  organ: "Immune System",
  sampleType: "Skin Test",
  parameterCount: 1,
  fasting: false,
  homeCollection: false,
  popular: false,
  description:
    "Screening test used to detect tuberculosis (TB) infection.",
  price: 200,
  reportTime: "48-72 Hours",
   status:"draft"
},

// {
//   slug: "ra-factor-test",
//   name: "RA Factor Test",
//   shortName: "RA Factor",
//   category: "Serology",
//   organ: "Immune System",
//   sampleType: "Blood",
//   parameterCount: 1,
//   fasting: false,
//   homeCollection: true,
//   popular: true,
//   description:
//     "Detects rheumatoid factor antibodies used in the diagnosis of rheumatoid arthritis.",
//   price: 200,
//   reportTime: "24 Hours",
// },

{
  slug: "ra-factor-quantitative-test",
  name: "RA Factor Quantitative",
  shortName: "RA Quantitative",
  category: "Serology",
  organ: "Immune System",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures rheumatoid factor concentration for diagnosis and monitoring of autoimmune disorders.",
  price: 400,
  reportTime: "24 Hours",
   status:"draft"
},

// =========================
// ELECTROLYTES
// =========================

{
  slug: "electrolyte-profile",
  name: "Electrolyte Profile",
  shortName: "Electrolytes",
  category: "Electrolytes",
  organ: "Electrolytes",
  sampleType: "Blood",
  parameterCount: 4,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Measures essential electrolytes to assess hydration, kidney function and acid-base balance.",
  price: 600,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "serum-sodium",
  name: "Serum Sodium",
  shortName: "Sodium",
  category: "Electrolytes",
  organ: "Electrolytes",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures sodium levels to evaluate hydration and electrolyte balance.",
  price: 150,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "serum-potassium",
  name: "Serum Potassium",
  shortName: "Potassium",
  category: "Electrolytes",
  organ: "Electrolytes",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures potassium levels to assess muscle, nerve and heart function.",
  price: 150,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "serum-chloride",
  name: "Serum Chloride",
  shortName: "Chloride",
  category: "Electrolytes",
  organ: "Electrolytes",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures chloride levels to monitor fluid and acid-base balance.",
  price: 150,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "serum-calcium",
  name: "Serum Calcium",
  shortName: "Calcium",
  category: "Electrolytes",
  organ: "Bone",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Measures calcium levels to evaluate bone, muscle and nerve health.",
  price: 150,
  reportTime: "24 Hours",
   status:"draft"
},

// =========================
// ENZYMES
// =========================

{
  slug: "serum-amylase",
  name: "Serum Amylase",
  shortName: "Amylase",
  category: "Enzyme Test",
  organ: "Pancreas",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Measures amylase enzyme levels to diagnose pancreatic disorders.",
  price: 500,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "cpk-mb-test",
  name: "CPK-MB Test",
  shortName: "CPK-MB",
  category: "Cardiac Marker",
  organ: "Heart",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Measures cardiac muscle enzyme to help diagnose heart muscle injury.",
  price: 600,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "troponin-t-test",
  name: "Troponin-T Test",
  shortName: "Trop-T",
  category: "Cardiac Marker",
  organ: "Heart",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Highly sensitive cardiac marker used for diagnosing heart attack.",
  price: 1200,
  reportTime: "6-12 Hours",
   status:"draft"
},

{
  slug: "dengue-test",
  name: "Dengue Test (NS1, IgM & IgG)",
  shortName: "Dengue",
  category: "Infectious Disease",
  organ: "Immune System",
  sampleType: "Blood",
  parameterCount: 3,
  fasting: false,
  homeCollection: true,
  popular: true,

  description:
    "Dengue test detects dengue virus infection using NS1 antigen, IgM and IgG antibodies, helping confirm dengue early and tell recent infection from past exposure.",

  price: 600,
  reportTime: "24 Hours",
  status: "published",

  seo: {
    // 49 characters
    title: "Dengue Test in Chandigarh - NS1, IgM, IgG & Price",
    // 114 characters
    description:
      "Book dengue test (NS1, IgM, IgG) in Chandigarh with home sample collection. Check dengue test price & report time.",
    keywords: [
      "dengue test",
      "dengue fever test",
      "dengue blood test",
      "dengue test price",
      "dengue test near me",
      "dengue test chandigarh",
      "dengue ns1 antigen test",
      "dengue igm igg test",
      "dengue test at home",
      "dengue test home collection",
      "dengue rapid test",
      "dengue serology test",
    ],
  },

  hero: {
    badge: "Home Sample Collection Available",

    title: "Dengue Test (NS1, IgM & IgG) in Chandigarh",

    description:
      "Book a Dengue Test in Chandigarh and the Tricity with fast report delivery, professional sample collection, and convenient doorstep home collection from Shyam Labs. Check the latest dengue test price and book online.",

    image: "/tests/dengue.webp",

    imageAlt: "Dengue Blood Test - NS1, IgM, IgG in Chandigarh",

    reportTime: "24 Hours",

    homeCollection: "Available",

    trustPoints: [
      "Professional Sample Collection",
      "Digital Reports",
      "Affordable Dengue Test Price",
      "Quality-Controlled Testing",
    ],

    bookButton: "Book Dengue Test",

    bookingUrl: "/prices/dengue-test-price-chandigarh",

    phone: "tel:+919914899300",
  },

  quickFacts: {
    sample: "Blood Sample",
    reportTime: "24 Hours",
    fasting: "Not Required",
    homeCollection: "Available",
    ageGroup: "Adults & Children",
  },

  whyChooseUs: {
    title: "Why Choose Shyam Labs for Your Dengue Test?",

    description:
      "Get a dependable dengue test in Chandigarh and the Tricity with easy booking, professional sample collection, convenient home collection, and quick access to your digital report.",

    items: [
      {
        title: "Professional Sample Collection",
        description:
          "Every blood draw follows proper collection procedures for a comfortable, low-discomfort experience.",
      },
      {
        title: "Standardised Testing Process",
        description:
          "Your dengue sample is analysed following standard laboratory protocols.",
      },
      {
        title: "Fast Digital Reports",
        description:
          "Your dengue report is shared digitally as soon as testing is complete — no waiting in line to collect a printout.",
      },
      {
        title: "Home Collection Across Chandigarh & Tricity",
        description:
          "Book a dengue test with convenient home sample collection across Chandigarh and nearby Tricity areas, subject to service availability.",
      },
    ],
  },

  testDetails: {
    title: "About the Dengue Test (NS1 Antigen, IgM & IgG)",

    description: [
      "The dengue test checks your blood for signs of infection with the dengue virus. NS1 antigen is a viral protein found in the blood in the first few days of fever, while IgM and IgG are antibodies your body makes in response — IgM appears first and points to a recent infection, and IgG appears later and points to past exposure.",
      "Which marker is positive depends on how many days you have had fever, so the three are tested together. A dengue test confirms the infection; it does not show how severe it is. For that, doctors monitor your platelet count and hematocrit with a CBC, which is why a CBC and platelet count are commonly added.",
    ],

    included: [
      "Dengue NS1 Antigen",
      "Dengue IgM Antibody",
      "Dengue IgG Antibody",
    ],
  },

  preparation: {
    title: "Preparation Before Your Dengue Test",

    description:
      "A dengue test needs no special preparation — here's what to keep in mind before your appointment.",

    items: [
      {
        title: "Dengue Test Fasting Requirement",
        description:
          "Fasting is not required. You can eat and drink normally, and the test can be done at any time of day.",
      },
      {
        title: "Note the Day Your Fever Started",
        description:
          "Tell the phlebotomist or your doctor how many days you have had fever. It helps interpret which markers (NS1 or antibodies) should be positive.",
      },
      {
        title: "Stay Hydrated and Don't Delay",
        description:
          "Drink plenty of fluids and get tested early if fever has lasted more than 2 days with body ache, headache, or rash. Seek urgent care for severe stomach pain, repeated vomiting, or bleeding.",
      },
    ],
  },

  bookingProcess: {
    title: "How to Book Your Dengue Test in Chandigarh",

    description:
      "Booking a dengue test with Shyam Labs takes just a few minutes, with convenient home sample collection available across Chandigarh and the Tricity.",

    steps: [
      {
        title: "Book Test",
        description:
          "Select the Dengue Test and submit your booking request online or over a call.",
      },
      {
        title: "Schedule Sample Collection",
        description:
          "Choose a convenient collection time and provide your Chandigarh or Tricity address.",
      },
      {
        title: "Laboratory Testing",
        description:
          "Your sample is processed using standard laboratory procedures.",
      },
      {
        title: "Receive Report",
        description:
          "Your digital dengue report is sent to you within 24 hours of collection.",
      },
    ],
  },

  pricePreview: {
    title: "Dengue Test Price",

    description:
      "Check the latest dengue test price in Chandigarh and book with convenient home sample collection.",

    price: 600,

    priceUrl: "/prices/dengue-test-price-chandigarh",
  },

  relatedTests: [
    "platelet-count",
    "cbc-test",
    "mp-antigen-test",
    "typhidot-test",
    "widal-test",
    "esr-test",
  ],

  faq: {
    title: "Frequently Asked Questions",

    description:
      "Answers to the questions patients in Chandigarh and the Tricity most often ask about the dengue test, its results, and booking.",

    items: [
      {
        question: "What is a dengue test?",
        answer:
          "It is a blood test that looks for the dengue virus (NS1 antigen) or your body's antibodies against it (IgM and IgG) to confirm whether you have, or recently had, dengue.",
      },
      {
        question: "What tests are done for dengue?",
        answer:
          "The main tests are NS1 antigen, IgM, and IgG, often done together. A CBC with platelet count is also commonly done to monitor the illness, and PCR is a more specific lab test used in some cases.",
      },
      {
        question: "What do NS1, IgM, and IgG mean?",
        answer:
          "NS1 is a viral protein seen in the first days of fever and means current infection. IgM antibodies appear after about day 4-5 and point to a recent infection. IgG appears later and usually points to past exposure.",
      },
      {
        question: "When is the best time to get a dengue test?",
        answer:
          "NS1 works best in the first 5 days of fever, and antibody tests (IgM) become more useful after day 5. Don't wait — if fever has lasted more than 2 days with dengue-like symptoms, get tested.",
      },
      {
        question: "What does a positive dengue test mean?",
        answer:
          "NS1 positive means current dengue infection. IgM positive means a recent infection. IgG positive alone usually means past infection, but IgM and IgG together can suggest a recent or repeat infection. Your doctor interprets it with your symptoms.",
      },
      {
        question: "What if NS1 is positive and IgM and IgG are negative?",
        answer:
          "This is a typical pattern in the first few days of illness — the virus is detectable, but antibodies haven't formed yet. It still counts as a positive dengue result.",
      },
      {
        question: "Can a negative dengue test rule out dengue?",
        answer:
          "Not always. A test done too early (for antibodies) or too late (for NS1) can miss it. If symptoms continue, your doctor may repeat the test or use a different marker.",
      },
      {
        question: "Can a CBC confirm dengue?",
        answer:
          "No. A CBC can show low platelets, low white cells, and a raised hematocrit, which suggest dengue, but only NS1, IgM/IgG, or PCR confirms it. A CBC can also be normal in the early days.",
      },
      {
        question: "Is fasting required for a dengue test?",
        answer:
          "No. You can eat and drink normally and have the test at any time of day.",
      },
      {
        question: "How long does a dengue test take to give results?",
        answer:
          "Rapid card tests give results in under an hour at the lab, while lab-based reports are usually ready within 24 hours of sample collection.",
      },
      {
        question: "Can I test for dengue at home?",
        answer:
          "You can book home sample collection — a phlebotomist visits you, collects the blood, and the test is done at the lab. Rapid self-test kits exist, but a lab test is more reliable and should guide treatment.",
      },
      {
        question: "Should I get a platelet count along with the dengue test?",
        answer:
          "Yes, doctors commonly advise a CBC with platelet count together with the dengue test, since platelets and hematocrit show how the illness is progressing.",
      },
      {
        question: "Is home sample collection available for dengue test in Chandigarh?",
        answer:
          "Yes, Shyam Labs provides home sample collection services for Chandigarh and nearby Tricity areas, subject to service availability.",
      },
      {
        question: "What is the dengue test price in Chandigarh?",
        answer:
          "Check our pricing page for the current dengue test price and book online with home sample collection.",
      },
    ],
  },

  cta: {
    title: "Book Your Dengue Test in Chandigarh Today",

    description:
      "Get convenient home sample collection, reliable dengue testing, and fast access to your digital report with Shyam Labs serving Chandigarh and the Tricity.",

    highlights: [
      "Home Sample Collection Available",
      "Fast Report Delivery",
      "Professional Collection Process",
    ],

    price: "600",

    priceText: "Check detailed dengue test pricing and booking options.",

    bookingUrl: "/prices/dengue-test-price-chandigarh",

    phone: "tel:+919914899300",

    buttonText: "Book Dengue Test",
  },
},

{
  slug: "chikungunya-igm-test",
  name: "Chikungunya IgM Test",
  shortName: "Chikungunya IgM",
  category: "Infectious Disease",
  organ: "Immune System",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: false,
  description:
    "Detects IgM antibodies against Chikungunya virus indicating recent infection.",
  price: 1400,
  reportTime: "24 Hours",
   status:"draft"
},
// =========================
// URINE / STOOL / SPUTUM
// =========================

{
  slug: "urine-examination",
  name: "Urine Examination",
  shortName: "Urine Routine",
  category: "Urine Test",
  organ: "Kidney",
  sampleType: "Urine",
  parameterCount: 18,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Routine urine examination used to detect urinary tract infections, kidney disorders, diabetes and other metabolic conditions.",
  price: 110,
  reportTime: "24 Hours",
   status:"draft"
},
//done

{
  slug: "semen-examination",
  name: "Semen Examination",
  shortName: "Semen Analysis",
  category: "Fertility Test",
  organ: "Reproductive System",
  sampleType: "Semen",
  parameterCount: 12,
  fasting: false,
  homeCollection: false,
  popular: false,
  description:
    "Comprehensive semen analysis to evaluate sperm count, motility, morphology and male fertility.",
  price: 250,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "stool-examination",
  name: "Stool Examination",
  shortName: "Stool Routine",
  category: "Stool Test",
  organ: "Digestive System",
  sampleType: "Stool",
  parameterCount: 12,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Microscopic and physical examination of stool to diagnose infections, parasites, digestive disorders and gastrointestinal diseases.",
  price: 350,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "sputum-afb-test",
  name: "Sputum for AFB",
  shortName: "AFB Test",
  category: "Microbiology",
  organ: "Lungs",
  sampleType: "Sputum",
  parameterCount: 1,
  fasting: false,
  homeCollection: false,
  popular: true,
  description:
    "Detects Acid Fast Bacilli (AFB) in sputum for the diagnosis of tuberculosis (TB).",
  price: 300,
  reportTime: "24 Hours",
   status:"draft"
},

{
  slug: "gram-stain-test",
  name: "Gram Stain",
  shortName: "Gram Stain",
  category: "Microbiology",
  organ: "General",
  sampleType: "Urine / Sputum / Pus / Body Fluid",
  parameterCount: 1,
  fasting: false,
  homeCollection: false,
  popular: false,
  description:
    "Microscopic staining test used to identify bacteria and guide the diagnosis of bacterial infections.",
  price: 300,
  reportTime: "24 Hours",
   status:"draft"
},
];





export const testTheme = {
  Blood: {
    icon: FaDroplet,
    color: "red",
    iconBg: "bg-red-100",
    iconText: "text-red-600",
    badgeBg: "bg-red-50",
    badgeText: "text-red-700",
    cardBg: "bg-gradient-to-br from-red-50 via-white to-red-100",
    border: "hover:border-red-200",
    glow: "hover:shadow-red-100",
  },

  Heart: {
    icon: FaHeartPulse,
    color: "rose",
    iconBg: "bg-rose-100",
    iconText: "text-rose-600",
    badgeBg: "bg-rose-50",
    badgeText: "text-rose-700",
    cardBg: "bg-gradient-to-br from-rose-50 via-white to-rose-100",
    border: "hover:border-rose-200",
    glow: "hover:shadow-rose-100",
  },

  Kidney: {
    icon: GiKidneys,
    color: "cyan",
    iconBg: "bg-cyan-100",
    iconText: "text-cyan-600",
    badgeBg: "bg-cyan-50",
    badgeText: "text-cyan-700",
    cardBg: "bg-gradient-to-br from-cyan-50 via-white to-cyan-100",
    border: "hover:border-cyan-200",
    glow: "hover:shadow-cyan-100",
  },

  Liver: {
    icon: FaBottleDroplet,
    color: "emerald",
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",
    badgeBg: "bg-emerald-50",
    badgeText: "text-emerald-700",
    cardBg: "bg-gradient-to-br from-emerald-50 via-white to-emerald-100",
    border: "hover:border-emerald-200",
    glow: "hover:shadow-emerald-100",
  },

  Thyroid: {
    icon: FaDna,
    color: "indigo",
    iconBg: "bg-indigo-100",
    iconText: "text-indigo-600",
    badgeBg: "bg-indigo-50",
    badgeText: "text-indigo-700",
    cardBg: "bg-gradient-to-br from-indigo-50 via-white to-indigo-100",
    border: "hover:border-indigo-200",
    glow: "hover:shadow-indigo-100",
  },

  Immune: {
    icon: FaShieldVirus,
    color: "orange",
    iconBg: "bg-orange-100",
    iconText: "text-orange-600",
    badgeBg: "bg-orange-50",
    badgeText: "text-orange-700",
    cardBg: "bg-gradient-to-br from-orange-50 via-white to-orange-100",
    border: "hover:border-orange-200",
    glow: "hover:shadow-orange-100",
  },

  "Immune System": {
    icon: FaShieldVirus,
    color: "orange",
    iconBg: "bg-orange-100",
    iconText: "text-orange-600",
    badgeBg: "bg-orange-50",
    badgeText: "text-orange-700",
    cardBg: "bg-gradient-to-br from-orange-50 via-white to-orange-100",
    border: "hover:border-orange-200",
    glow: "hover:shadow-orange-100",
  },

  Infection: {
    icon: FaVirus,
    color: "amber",
    iconBg: "bg-amber-100",
    iconText: "text-amber-600",
    badgeBg: "bg-amber-50",
    badgeText: "text-amber-700",
    cardBg: "bg-gradient-to-br from-amber-50 via-white to-amber-100",
    border: "hover:border-amber-200",
    glow: "hover:shadow-amber-100",
  },

  Nutrition: {
    icon: FaCapsules,
    color: "yellow",
    iconBg: "bg-yellow-100",
    iconText: "text-yellow-700",
    badgeBg: "bg-yellow-50",
    badgeText: "text-yellow-700",
    cardBg: "bg-gradient-to-br from-yellow-50 via-white to-yellow-100",
    border: "hover:border-yellow-200",
    glow: "hover:shadow-yellow-100",
  },

  Brain: {
    icon: FaBrain,
    color: "violet",
    iconBg: "bg-violet-100",
    iconText: "text-violet-600",
    badgeBg: "bg-violet-50",
    badgeText: "text-violet-700",
    cardBg: "bg-gradient-to-br from-violet-50 via-white to-violet-100",
    border: "hover:border-violet-200",
    glow: "hover:shadow-violet-100",
  },

  Bone: {
    icon: FaBone,
    color: "stone",
    iconBg: "bg-stone-100",
    iconText: "text-stone-600",
    badgeBg: "bg-stone-50",
    badgeText: "text-stone-700",
    cardBg: "bg-gradient-to-br from-stone-50 via-white to-stone-100",
    border: "hover:border-stone-200",
    glow: "hover:shadow-stone-100",
  },

  Pancreas: {
    icon: FaSyringe,
    color: "pink",
    iconBg: "bg-pink-100",
    iconText: "text-pink-600",
    badgeBg: "bg-pink-50",
    badgeText: "text-pink-700",
    cardBg: "bg-gradient-to-br from-pink-50 via-white to-pink-100",
    border: "hover:border-pink-200",
    glow: "hover:shadow-pink-100",
  },

  Lungs: {
    icon: GiLungs,
    color: "sky",
    iconBg: "bg-sky-100",
    iconText: "text-sky-600",
    badgeBg: "bg-sky-50",
    badgeText: "text-sky-700",
    cardBg: "bg-gradient-to-br from-sky-50 via-white to-sky-100",
    border: "hover:border-sky-200",
    glow: "hover:shadow-sky-100",
  },

  "Digestive System": {
    icon: GiStomach,
    color: "lime",
    iconBg: "bg-lime-100",
    iconText: "text-lime-700",
    badgeBg: "bg-lime-50",
    badgeText: "text-lime-700",
    cardBg: "bg-gradient-to-br from-lime-50 via-white to-lime-100",
    border: "hover:border-lime-200",
    glow: "hover:shadow-lime-100",
  },

  "Reproductive System": {
    icon: FaVenusMars,
    color: "fuchsia",
    iconBg: "bg-fuchsia-100",
    iconText: "text-fuchsia-600",
    badgeBg: "bg-fuchsia-50",
    badgeText: "text-fuchsia-700",
    cardBg: "bg-gradient-to-br from-fuchsia-50 via-white to-fuchsia-100",
    border: "hover:border-fuchsia-200",
    glow: "hover:shadow-fuchsia-100",
  },

  "General Health": {
    icon: FaNotesMedical,
    color: "blue",
    iconBg: "bg-blue-100",
    iconText: "text-blue-600",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-700",
    cardBg: "bg-gradient-to-br from-blue-50 via-white to-blue-100",
    border: "hover:border-blue-200",
    glow: "hover:shadow-blue-100",
  },

  General: {
    icon: FaStethoscope,
    color: "blue",
    iconBg: "bg-blue-100",
    iconText: "text-blue-600",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-700",
    cardBg: "bg-gradient-to-br from-blue-50 via-white to-blue-100",
    border: "hover:border-blue-200",
    glow: "hover:shadow-blue-100",
  },
  Electrolytes: {
  icon: FaBolt,
  color: "teal",
  iconBg: "bg-teal-100",
  iconText: "text-teal-600",
  badgeBg: "bg-teal-50",
  badgeText: "text-teal-700",
  cardBg: "bg-gradient-to-br from-teal-50 via-white to-teal-100",
  border: "hover:border-teal-200",
  glow: "hover:shadow-teal-100",
},
};

export const defaultTheme = {
  icon: FaVials,
  color: "slate",
  iconBg: "bg-slate-100",
  iconText: "text-slate-600",
  badgeBg: "bg-slate-100",
  badgeText: "text-slate-700",
  cardBg: "bg-gradient-to-br from-slate-50 via-white to-slate-100",
  border: "hover:border-slate-200",
  glow: "hover:shadow-slate-100",
};

export const getTestPrice = (slug) => {
  const test = tests.find((t) => t.slug === slug);
  return test ? test.price : null;
};