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
    "vitamin-d-test",
    "vitamin-b12-test",
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
  parameterCount: 6,
  fasting: true,
  homeCollection: true,
  popular: true,
  description:
    "Comprehensive liver profile that evaluates liver enzymes, bilirubin and protein levels.",
  price: 350,
  reportTime: "24 Hours",
   status:"draft"
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
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Detects antibodies against Salmonella bacteria to help diagnose typhoid fever.",
  price: 200,
  reportTime: "24 Hours",
   status:"draft"
},
//done

{
  slug: "typhidot-test",
  name: "Typhidot Test",
  shortName: "Typhidot",
  category: "Serology",
  organ: "Immune System",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Rapid blood test for detecting IgM and IgG antibodies against typhoid infection.",
  price: 400,
  reportTime: "24 Hours",
   status:"draft"
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
  name: "Dengue Test",
  shortName: "Dengue",
  category: "Infectious Disease",
  organ: "Immune System",
  sampleType: "Blood",
  parameterCount: 1,
  fasting: false,
  homeCollection: true,
  popular: true,
  description:
    "Detects dengue infection for early diagnosis and treatment.",
  price: 600,
  reportTime: "24 Hours",
   status:"draft"
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