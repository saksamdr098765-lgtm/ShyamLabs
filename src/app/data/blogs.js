import SITE_CONFIG from "../siteConfig";

export const blogs = [
//new one blog 
// {
//     id: 2,
//     slug: "cbc-test",
//     title: "CBC Test: Full Form, Normal Range, Procedure & What It Detects",
//     excerpt:
//       "Learn everything about the CBC (Complete Blood Count) test, including its full form, normal range, procedure, fasting requirements, and what conditions it can detect.",
//     category: "Health Tips",
//     author: {
//       name: "Shyam Budget Friendly Labs",
//       image: "/logo.png",
//     },
//     publishedAt: "August 08, 2026",
//     readingTime: "9 min read",
//     coverImage: "/logo.png",
//     featured: true,
//     relatedPackages: ["swasthya-mitra-premium-package"],
//     relatedTests: [
//       { name: "CBC (Complete Blood Count) Test", price: 299, slug: "cbc-test-chandigarh" },
//     ],
//     seo: {
//       title: "CBC Test: Full Form, Normal Range, Procedure & What It Detects | Shyam Labs",
//       description:
//         "Everything you need to know about the CBC test — full form, normal range, procedure, fasting requirements, price, and what conditions it can detect. Expert health information from Shyam Labs.",
//       keywords: [
//         "CBC test",
//         "CBC test full form",
//         "what is CBC test",
//         "CBC test normal range",
//         "CBC test price",
//         "CBC test near me",
//         "Shyam Budget Friendly Labs",
//       ],
//     },
//     quickInfo: {
//       "What You Will Learn": "CBC (Complete Blood Count) Test",
//       price: "₹299",
//       sample: "Blood Sample",
//       fasting: "Not Required",
//       reportTime: "Same Day",
//       homeCollection: "Available",
//       recommendedFor: "Fatigue, Fever, Infection, Weakness, Routine Checkup",
//       booking: "Online / Phone / WhatsApp",
//     },
//     tags: [
//       "CBC Test",
//       "Complete Blood Count",
//       "Blood Tests",
//       "Diagnostics",
//       "Health Checkup",
//     ],
//     content: [
//       {
//         type: "paragraph",
//         text: "A CBC test, or Complete Blood Count test, is one of the most commonly prescribed blood tests. It gives doctors a detailed picture of your overall health by measuring different components of your blood, helping detect infections, anemia, and many other conditions early.",
//       },
//       {
//         type: "heading",
//         level: 2,
//         text: "What is a CBC Test?",
//       },
//       {
//         type: "paragraph",
//         text: "CBC stands for Complete Blood Count. It is a blood test that evaluates the cells circulating in your blood, including red blood cells (RBCs), white blood cells (WBCs), and platelets. It also measures hemoglobin, hematocrit, and related indices such as MCV, MCH, and MCHC.",
//       },
//       {
//         type: "heading",
//         level: 2,
//         text: "What is CBC in Detail?",
//       },
//       {
//         type: "paragraph",
//         text: "A Complete Blood Count (CBC) is a comprehensive blood test that analyzes the cellular components of your blood — red blood cells, white blood cells, and platelets — along with related measurements like hemoglobin and hematocrit. It's performed by drawing a small blood sample, usually from a vein in your arm, which is then run through an automated analyzer at the lab. The results give your doctor a broad snapshot of your overall health, immune function, and blood-related conditions.",
//       },
//       {
//         type: "heading",
//         level: 2,
//         text: "4 Main Components of a CBC Test",
//       },
//       {
//         type: "list",
//         items: [
//           "Red Blood Cells (RBC) — carry oxygen from lungs to the rest of the body",
//           "White Blood Cells (WBC) — fight infections and support immune response",
//           "Platelets — help blood clot and prevent excessive bleeding",
//           "Hemoglobin & Hematocrit — measure oxygen-carrying capacity and blood volume",
//         ],
//       },
//       {
//         type: "heading",
//         level: 2,
//         text: "CBC Test Normal Range",
//       },
//       {
//         type: "list",
//         items: [
//           "Hemoglobin: 13.5–17.5 g/dL (men), 12–15.5 g/dL (women)",
//           "WBC Count: 4,000–11,000 cells/mcL",
//           "Platelet Count: 150,000–450,000/mcL",
//           "RBC Count: 4.7–6.1 million cells/mcL (men), 4.2–5.4 million cells/mcL (women)",
//           "Hematocrit: 38.8–50% (men), 34.9–44.5% (women)",
//         ],
//       },
//       {
//         type: "heading",
//         level: 2,
//         text: "What Does a CBC Test Check For?",
//       },
//       {
//         type: "list",
//         items: [
//           "Anemia (low hemoglobin/RBC levels)",
//           "Infections (through WBC count changes)",
//           "Bleeding or clotting disorders (through platelet count)",
//           "Dehydration or fluid imbalance",
//           "Certain blood cancers (as an initial screening indicator)",
//         ],
//       },
//       {
//         type: "heading",
//         level: 2,
//         text: "5 Things a CBC Test Can Show Signs Of",
//       },
//       {
//         type: "list",
//         items: [
//           "Anemia (low RBC or hemoglobin)",
//           "Infection or inflammation (abnormal WBC count)",
//           "Bleeding or clotting disorders (abnormal platelet count)",
//           "Dehydration (elevated hematocrit)",
//           "Certain blood cancers like leukemia (as an early screening indicator)",
//         ],
//       },
//       {
//         type: "heading",
//         level: 2,
//         text: "Which Diseases Can CBC Detect?",
//       },
//       {
//         type: "list",
//         items: [
//           "Iron-deficiency and other types of anemia",
//           "Bacterial or viral infections",
//           "Dengue and typhoid (often shows characteristic patterns)",
//           "Blood clotting disorders",
//           "Leukemia and other blood cancers (screening indicator, not a confirmed diagnosis)",
//           "Autoimmune conditions affecting blood cells",
//         ],
//       },
//       {
//         type: "heading",
//         level: 2,
//         text: "When Do You Need a CBC Test?",
//       },
//       {
//         type: "paragraph",
//         text: "A CBC test is commonly recommended when you experience unexplained fatigue, fever, frequent infections, unusual bruising or bleeding, or during routine annual health checkups. Doctors also order it before surgery, during pregnancy, or to monitor existing conditions like anemia or ongoing treatments such as chemotherapy.",
//       },
//       {
//         type: "heading",
//         level: 2,
//         text: "Is CBC Test Done Fasting?",
//       },
//       {
//         type: "paragraph",
//         text: "In most cases, a CBC test does not require fasting. However, if it is being done alongside other tests like blood sugar or lipid profile, your doctor may advise fasting for 8-12 hours.",
//       },
//       {
//         type: "heading",
//         level: 2,
//         text: "What Happens if CBC is High or Low?",
//       },
//       {
//         type: "paragraph",
//         text: "A high WBC count can indicate infection, inflammation, or stress on the body, while a low WBC count may suggest a weakened immune system. High RBC/hemoglobin can point to dehydration or a condition called polycythemia, while low levels usually indicate anemia. High platelets can raise clotting risk; low platelets increase bleeding risk. Any high or low reading should be reviewed by a doctor alongside your symptoms, not interpreted alone.",
//       },
//       {
//         type: "heading",
//         level: 2,
//         text: "What is Alarming in a CBC Report?",
//       },
//       {
//         type: "paragraph",
//         text: "Results that typically need urgent medical attention include a very low platelet count (risk of spontaneous bleeding), a very high or very low WBC count (possible severe infection or immune suppression), a sharp drop in hemoglobin (severe anemia), or the presence of abnormal or immature blood cells flagged by the lab. These findings usually prompt further testing rather than an immediate diagnosis.",
//       },
//       {
//         type: "heading",
//         level: 2,
//         text: "Are There Any Risks in a CBC Test?",
//       },
//       {
//         type: "paragraph",
//         text: "A CBC test is very low-risk. It involves a standard blood draw, so you may experience minor bruising, slight pain at the needle site, or brief lightheadedness. Serious complications are extremely rare. No special recovery time is needed and you can resume normal activities immediately after the test.",
//       },
//       {
//         type: "heading",
//         level: 2,
//         text: "Why is a CBC Test Important?",
//       },
//       {
//         type: "paragraph",
//         text: "A CBC test is often the first step in diagnosing a wide range of conditions, from common infections to chronic illnesses. It's frequently included in routine health checkups because it offers a quick, affordable overview of your blood health.",
//       },
//      {
//         type: "heading",
//         level: 2,
//         text: "Key Takeaways",
//       },
//       {
//         type: "list",
//         items: [
//           "CBC (Complete Blood Count) measures RBCs, WBCs, platelets, hemoglobin, and hematocrit",
//           "Fasting is generally not required unless combined with other tests",
//           "It can help detect anemia, infections, clotting disorders, and act as an early screening indicator for blood cancers",
//           "Very high or very low results should always be reviewed by a doctor alongside your symptoms",
//           "The test is low-risk, affordable, and available with same-day reports and home sample collection",
//         ],
//       },
//      {
//       type: "interlinking",
//       title: "CBC Test — Areas We Serve",
//       description: "We provide CBC (Complete Blood Count) test with home sample collection across the following locations.",
//       items: [
//         {
//           title: "Chandigarh",
//           description: "CBC test with home sample collection.",
//           href: "/locations/cbc-test-in-chandigarh",
//         },
//         {
//           title: "Mohali",
//           description: "CBC test and diagnostic services with home collection.",
//           // href: "/locations/cbc-test-in-mohali",
//         },
//         {
//           title: "Panchkula",
//           description: "CBC test with same-day report and home collection.",
//           // href: "/locations/cbc-test-in-panchkula",
//         },
//         {
//           title: "Zirakpur",
//           description: "CBC test and pathology services.",
//           // href: "/locations/cbc-test-in-zirakpur",
//         },
       
//       ],
//     },
//       {
//       type: "references",
//       items: [
//         {
//           title: "Complete Blood Count (CBC)",
//           publisher: "MedlinePlus",
//           url: "https://medlineplus.gov/lab-tests/complete-blood-count-cbc/",
//         },
//         {
//           title: "CBC Blood Test",
//           publisher: "MedlinePlus Medical Encyclopedia",
//           url: "https://medlineplus.gov/ency/article/003642.htm",
//         },
//         {
//           title: "WBC Count",
//           publisher: "MedlinePlus Medical Encyclopedia",
//           url: "https://medlineplus.gov/ency/article/003643.htm",
//         },
//         {
//           title: "Complete Blood Count (CBC): What It Is & Normal Ranges",
//           publisher: "Cleveland Clinic",
//           url: "https://my.clevelandclinic.org/health/diagnostics/4053-complete-blood-count",
//         },
//         {
//           title: "Blood Tests",
//           publisher: "National Heart, Lung, and Blood Institute (NIH)",
//           url: "https://www.nhlbi.nih.gov/health/blood-tests",
//         },
//         {
//           title: "Understanding Your Lab Test Results",
//           publisher: "Mayo Clinic",
//           url: "https://www.mayoclinic.org/",
//         },
//       ],
//     },
//     ],
//     faq: [
//       {
//         question: "What is a CBC test?",
//         answer: "A CBC (Complete Blood Count) test measures red blood cells, white blood cells, platelets, and hemoglobin to give an overall picture of your blood health.",
//       },
//       {
//         question: "What is CBC full form?",
//         answer: "CBC stands for Complete Blood Count.",
//       },
//       {
//         question: "What are the 4 components of a CBC?",
//         answer: "The four main components are Red Blood Cells (RBC), White Blood Cells (WBC), Platelets, and Hemoglobin/Hematocrit.",
//       },
//       {
//         question: "What is a normal CBC level?",
//         answer: "Normal ranges vary by component — for example, hemoglobin is typically 13.5–17.5 g/dL in men and 12–15.5 g/dL in women. Your report will list the exact reference range used by the lab.",
//       },
//       {
//         question: "What does a CBC test check for?",
//         answer: "It checks for anemia, infections, clotting disorders, dehydration, and can flag early signs of certain blood-related conditions.",
//       },
//       {
//         question: "What are 5 things the CBC can show signs of?",
//         answer: "CBC can show signs of anemia, infection or inflammation, bleeding/clotting disorders, dehydration, and certain blood cancers like leukemia.",
//       },
//       {
//         question: "Which diseases can CBC detect?",
//         answer: "CBC can help detect anemia, infections, dengue, typhoid, clotting disorders, and act as an early screening indicator for leukemia and other blood cancers.",
//       },
//       {
//         question: "When should you take a CBC test?",
//         answer: "You should consider a CBC test if you have unexplained fatigue, fever, frequent infections, unusual bruising, or as part of a routine annual checkup or pre-surgery screening.",
//       },
//       {
//         question: "What CBC test is done during pregnancy?",
//         answer: "A standard CBC with differential is commonly done during pregnancy to monitor hemoglobin, platelet count, and detect anemia or infection risk.",
//       },
//       {
//         question: "Is CBC test done fasting?",
//         answer: "No, fasting is generally not required for a CBC test unless it's combined with other tests that need it.",
//       },
//       {
//         question: "What happens if a CBC is high?",
//         answer: "A high reading depends on which component is elevated — high WBC often points to infection or inflammation, high RBC/hemoglobin to dehydration, and high platelets to increased clotting risk. A doctor should interpret this alongside your symptoms.",
//       },
//       {
//         question: "What is alarming in a CBC report?",
//         answer: "Very low platelet counts, very high or very low WBC counts, a sharp drop in hemoglobin, or abnormal cell flags are typically considered alarming and warrant prompt medical review.",
//       },
//       {
//         question: "Are there any risks with a CBC test?",
//         answer: "CBC testing is very low-risk, involving only a standard blood draw. Minor bruising or brief discomfort at the needle site is possible, but serious complications are rare.",
//       },
//       {
//         question: "Why is CBC test important?",
//         answer: "It helps detect infections, anemia, and other conditions early, and is a standard part of routine health checkups.",
//       },
//       {
//         question: "Can I do a CBC test at home?",
//         answer: "Yes, home sample collection is available — a phlebotomist visits your location to collect the sample, which is then processed at the lab.",
//       },
//       {
//         question: "How much does a CBC test cost?",
//         answer: "Our CBC test is priced at ₹299, with same-day reports and free home sample collection available.",
//       },
//     ],
//     cta: {
//       title: "Book CBC Test",
//       description: "Get accurate CBC testing with doorstep sample collection and same-day reports.",
//       buttonText: "Book Test Now",
//       whatsappText: "Hi, I want to book a CBC test.",
//       features:["Experienced Lab", "100+ Tests", "Fast Reports", "Experienced Staff"]
//     },
//   },

  //old blogs

  {
  id: 1, 

  slug: "complete-blood-count-cbc-test", // kept old slug — no URL change needed here since content/URL are same topic; only add a redirect if you're actually renaming it

  title: "CBC Test Guide: Purpose, Normal Range, Results, Benefits & When You Need One",

  excerpt:
    "Learn everything about CBC testing, including RBC, WBC, hemoglobin, platelet counts, normal ranges, symptoms, preparation, and CBC testing in Panchkula.",

  category: "Health Tips",

  author: {
    name: SITE_CONFIG.fullName, // old schema had this as a plain string — now an object
    image: SITE_CONFIG.logo, // ⚠️ confirm this is the correct author image path used across other blogs
  },

  publishedAt: "June 01, 2026", // from datePublished, reformatted to match doc2's style

  readingTime: "5 min read",

  coverImage: "/blogs/cbc-test.jpg",

  featured: false, // ⚠️ set true if you want this one featured

  relatedPackages: [
    "essential-health-tests",
    "lipid-profile-test",
    "swasthya-mitra-premium-package"
  ], // ⚠️ old schema had no equivalent — add package slugs if relevant, e.g. ["full-body-checkup"]

  relatedTests: [],

  seo: {
    title: "CBC Test Guide: Normal Range, Results, Cost & CBC Test in Panchkula",
    description:
      "Learn about CBC Test normal ranges, hemoglobin levels, RBC, WBC, platelet counts, symptoms, benefits, preparation, and CBC testing in Panchkula with home sample collection.",
    keywords: [
      "CBC Test",
      "Complete Blood Count Test",
      "CBC Test Normal Range",
      "CBC Blood Test",
      "Hemoglobin Test",
      "Platelet Count Test",
      "CBC Test in Panchkula",
      "CBC Test Near Me",
      "WBC Count Test",
      "RBC Count Test",
      "Anemia Blood Test",
    ],
  },

  quickInfo: {
    "What You Will Learn": "CBC (Complete Blood Count) Test",
    sample: "Blood",
    fasting: "Usually Not Required",
    reportTime: "Same Day",
    homeCollection: "Available",
    recommendedFor: "Fatigue, Weakness, Frequent Infections, Dizziness, Routine Checkup",
    booking: "Online / Phone / WhatsApp",
    price:"₹200"
    // ⚠️ old schema had no price — add price: "₹XXX" if you charge for this test
  },

  tags: [
    "CBC Test",
    "Complete Blood Count",
    "Blood Test",
    "CBC Test Price",
    "CBC Normal Range",
    "Hemoglobin Test",
    "Red Blood Cell Count",
    "White Blood Cell Count",
    "Platelet Count Test",
    "Anemia Test",
    "Infection Detection Test",
    "Routine Health Checkup",
    "Pathology Lab",
    "Diagnostic Lab",
    "Blood Testing Services",
    "CBC Test Near Me",
    "CBC Test in Punjab",
    "CBC Test in Panchkula",
    "CBC Test in Chandigarh",
    "Same Day CBC Report",
    "Home Blood Collection",
  ],

  content: [
    {
      type: "paragraph",
      text: "A Complete Blood Count (CBC) is one of the most commonly recommended blood tests. It evaluates your overall health and helps detect disorders such as anemia, infections, inflammation, and blood-related conditions. Doctors often include CBC testing as part of routine health checkups.",
    },
    {
      type: "heading",
      level: 2,
      text: "What Does a CBC Measure?",
    },
    {
      type: "list",
      items: [
        "Red Blood Cells (RBC)",
        "White Blood Cells (WBC)",
        "Hemoglobin",
        "Hematocrit",
        "Platelets",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Who Should Get a CBC Test?",
    },
    {
      type: "paragraph",
      text: "A CBC Test may be recommended for people experiencing fatigue, weakness, dizziness, unexplained weight loss, recurrent infections, fever, excessive bleeding, or easy bruising. Doctors also recommend CBC testing during routine health checkups, before surgeries, and while monitoring chronic illnesses.",
    },
    {
      type: "heading",
      level: 2,
      text: "Symptoms Requiring CBC Testing",
    },
    {
      type: "list",
      items: [
        "Persistent fatigue",
        "Weakness",
        "Dizziness",
        "Frequent infections",
        "Fever",
        "Pale skin",
        "Shortness of breath",
        "Unexplained bruising",
        "Excessive bleeding",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Normal CBC Values",
    },
    {
      type: "list",
      items: [
        "Hemoglobin: 12–17 g/dL",
        "WBC: 4,000–11,000 /µL",
        "RBC: 4.2–6.1 million/µL",
        "Platelets: 150,000–450,000 /µL",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Understanding CBC Test Results",
    },
    {
      type: "paragraph",
      text: "Low hemoglobin or RBC levels may suggest anemia. High or low WBC levels can indicate infections, inflammation, immune disorders, or other medical conditions. Abnormal platelet counts may affect blood clotting and require further medical evaluation. Your doctor will interpret CBC results along with symptoms, medical history, and other investigations.",
    },
    {
      type: "heading",
      level: 2,
      text: "Benefits of Regular CBC Testing",
    },
    {
      type: "list",
      items: [
        "Early detection of anemia",
        "Identification of infections",
        "Monitoring chronic diseases",
        "Evaluating treatment response",
        "Assessing overall health status",
        "Supporting routine health checkups",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "How To Prepare For A CBC Test",
    },
    {
      type: "paragraph",
      text: "CBC testing usually requires minimal preparation. Most people do not need fasting before a CBC Test unless it is being performed alongside other tests that require fasting. Patients should stay hydrated and inform their doctor about any medications or ongoing medical conditions before sample collection.",
    },
    {
      type: "heading",
      level: 2,
      text: "CBC Test in Panchkula",
    },
    {
      type: "paragraph",
      text: "Shyam Pathology Lab provides accurate CBC Testing in Panchkula with convenient home blood sample collection services. Patients from Panchkula, Chandigarh, Mohali, Zirakpur, Sector 21 Panchkula, Karimpur, and nearby areas can book CBC testing from home and receive reliable reports quickly.",
    },
  
  
    // ⚠️ old schema had no "references" block — add real medical sources (MedlinePlus, Cleveland Clinic, etc.)
    // like your other blog does, if you want this one to carry the same authority/credibility signal
  ],

  faq: [
    {
      question: "Is fasting required for a CBC Test?",
      answer: "In most cases fasting is not required for a CBC Test unless your doctor has advised additional fasting tests.",
    },
    {
      question: "What diseases can a CBC Test detect?",
      answer: "A CBC Test can help identify anemia, infections, inflammation, blood disorders, nutritional deficiencies, and other health conditions.",
    },
    {
      question: "Can a CBC Test detect infection?",
      answer: "Yes. Changes in white blood cell counts may indicate bacterial, viral, or other infections.",
    },
    {
      question: "How long does a CBC Test take?",
      answer: "Blood collection usually takes only a few minutes and most reports are available the same day.",
    },
    {
      question: "Can I book a CBC Test at home in Panchkula?",
      answer: "Yes. Shyam Pathology Lab provides convenient home blood sample collection services in Panchkula and nearby areas.",
    },
    {
      question: "How often should I get a CBC Test?",
      answer: "The frequency depends on your health condition and your doctor's recommendation. Many people include CBC testing in annual health checkups.",
    },
  ],

  cta: {
    title: "Book Your CBC Test Today",
    description: "Get accurate CBC testing with home sample collection and fast reporting from Shyam Pathology Lab.",
    buttonText: "Book CBC Test",
    whatsappText: "Hi, I want to book a CBC test.", // ⚠️ old schema didn't have this — added to match new format
    features: ["Experienced Lab", "100+ Tests", "Fast Reports", "Experienced Staff"], // ⚠️ copied from your other blog's pattern — confirm these are accurate for this test/lab
  },
},

  {
    id: 2,
    slug: "thyroid-test-symptoms-guide",
    title: "Thyroid Test Guide: Symptoms, TSH Levels, Causes & When to Get Tested",
    excerpt: "Learn about thyroid symptoms, TSH, T3 and T4 hormone levels, hypothyroidism, hyperthyroidism, hair fall, weight changes, and thyroid testing in Panchkula.",
    category: "Health Tips",
     author: {
    name: SITE_CONFIG.fullName, // old schema had this as a plain string — now an object
    image: SITE_CONFIG.logo, // ⚠️ confirm this is the correct author image path used across other blogs
  },
    publishedAt: "June 12, 2026",
    readingTime: "8 min read",
    coverImage: "/blogs/thyroid-test.jpg",
    featured: false,
    relatedPackages: [],
    relatedTests: [
     
    ],
    seo: {
      title: "Thyroid Test Guide: Symptoms, TSH Levels, Causes & When to Get Tested",
      description: "Learn about thyroid symptoms, TSH, T3 and T4 hormone levels, hypothyroidism, hyperthyroidism, hair fall, weight changes, and thyroid testing in Panchkula.",
      keywords: [
        "Thyroid Test",
        "TSH Test",
        "Thyroid Profile Test",
        "Thyroid Blood Test",
        "Hypothyroidism Symptoms",
        "Hyperthyroidism Symptoms",
        "TSH Normal Range",
        "Hair Fall Thyroid",
        "Weight Gain Thyroid",
        "Thyroid Test in Panchkula",
        "Thyroid Test Near Me"
      ]
    },
    quickInfo: {
      "What You Will Learn": "Thyroid Test",
      sample: "Blood",
      fasting: "Not Required",
      reportTime: "Same Day",
      homeCollection: "Available",
      recommendedFor: "Unexplained weight gain, Hair loss, Fatigue, Mood swings, Cold sensitivity, Heat sensitivity, Irregular periods, Sleep disturbances",
      booking: "Online / Phone / WhatsApp"
    },
    tags: [
      "Thyroid Test",
      "TSH Test",
      "Thyroid Symptoms",
      "Hypothyroidism",
      "Hyperthyroidism",
      "Thyroid Blood Test",
      "Hormone Test",
      "Weight Gain Thyroid",
      "Hair Fall Thyroid",
      "Fatigue Causes",
      "Thyroid Test in Panchkula",
      "Thyroid Test in Chandigarh",
      "Thyroid Test Near Me",
      "TSH Normal Range",
      "Thyroid Profile Test",
      "Diagnostic Lab",
      "Pathology Lab",
      "Home Blood Collection",
      "Health Checkup",
      "Same Day Report"
    ],
    content: [
      {
        type: "heading",
        level: 2,
        text: "What Is a Thyroid Test?"
      },
      {
        type: "paragraph",
        text: "A thyroid test is a blood test used to evaluate how well your thyroid gland is functioning."
      },
      {
        type: "paragraph",
        text: "The thyroid gland produces hormones that regulate metabolism, energy production, body temperature, heart rate, and many other essential body functions."
      },
      {
        type: "paragraph",
        text: "A thyroid profile typically includes TSH (Thyroid Stimulating Hormone), T3, and T4 levels."
      },
      {
        type: "paragraph",
        text: "Abnormal thyroid hormone levels may indicate hypothyroidism, hyperthyroidism, or other thyroid-related disorders that require medical attention."
      },
      {
        type: "heading",
        level: 2,
        text: "What Does a Thyroid Test Measure?"
      },
      {
        type: "paragraph",
        text: "A thyroid blood test measures hormones that control metabolism and many important body functions."
      },
      {
        type: "paragraph",
        text: "The most common thyroid profile includes:"
      },
      {
        type: "list",
        items: [
          "TSH (Thyroid Stimulating Hormone)",
          "T3 (Triiodothyronine)",
          "T4 (Thyroxine)"
        ]
      },
      {
        type: "paragraph",
        text: "These hormones help regulate energy production, body temperature, heart rate, mood, and weight management."
      },
      {
        type: "paragraph",
        text: "Abnormal levels may indicate thyroid dysfunction and require further medical evaluation."
      },
      {
        type: "heading",
        level: 2,
        text: "Common Thyroid Symptoms"
      },
      {
        type: "paragraph",
        text: "Thyroid disorders often develop gradually and may remain unnoticed during the early stages."
      },
      {
        type: "paragraph",
        text: "Common symptoms include:"
      },
      {
        type: "list",
        items: [
          "Unexplained weight gain",
          "Unexplained weight loss",
          "Fatigue",
          "Hair fall",
          "Mood changes",
          "Anxiety",
          "Depression",
          "Irregular sleep patterns",
          "Sensitivity to cold or heat",
          "Irregular menstrual cycles"
        ]
      },
      {
        type: "paragraph",
        text: "Recognizing these symptoms early can help prevent complications."
      },
      {
        type: "heading",
        level: 2,
        text: "Hypothyroidism vs Hyperthyroidism"
      },
      {
        type: "paragraph",
        text: "Thyroid disorders are generally categorized as hypothyroidism or hyperthyroidism."
      },
      {
        type: "paragraph",
        text: "Hypothyroidism occurs when the thyroid gland produces insufficient hormones."
      },
      {
        type: "paragraph",
        text: "Common symptoms include:"
      },
      {
        type: "list",
        items: [
          "Weight gain",
          "Fatigue",
          "Hair fall",
          "Depression",
          "Cold intolerance",
          "Dry skin"
        ]
      },
      {
        type: "paragraph",
        text: "Hyperthyroidism occurs when the thyroid gland produces excessive hormones."
      },
      {
        type: "paragraph",
        text: "Common symptoms include:"
      },
      {
        type: "list",
        items: [
          "Weight loss",
          "Anxiety",
          "Rapid heartbeat",
          "Excessive sweating",
          "Heat intolerance",
          "Sleep disturbances"
        ]
      },
      {
        type: "paragraph",
        text: "Early testing helps identify the underlying condition and guides appropriate treatment."
      },
      {
        type: "heading",
        level: 2,
        text: "Who Should Get a Thyroid Test?"
      },
      {
        type: "paragraph",
        text: "A thyroid test may be recommended for individuals experiencing unexplained changes in weight, energy levels, mood, or menstrual cycles."
      },
      {
        type: "paragraph",
        text: "People who should consider testing include:"
      },
      {
        type: "list",
        items: [
          "Individuals with persistent fatigue",
          "Those experiencing hair thinning or hair loss",
          "People with unexplained weight gain or weight loss",
          "Women with irregular periods",
          "Individuals with a family history of thyroid disorders",
          "Pregnant women when recommended by their doctor"
        ]
      },
      {
        type: "paragraph",
        text: "Regular screening may help identify thyroid disorders before symptoms become severe."
      },
      {
        type: "heading",
        level: 2,
        text: "Understanding TSH, T3 and T4 Levels"
      },
      {
        type: "paragraph",
        text: "TSH is the primary screening marker used to evaluate thyroid function."
      },
      {
        type: "paragraph",
        text: "When thyroid hormone production decreases, TSH levels often rise."
      },
      {
        type: "paragraph",
        text: "When thyroid hormone production increases excessively, TSH levels may decrease."
      },
      {
        type: "paragraph",
        text: "Doctors evaluate TSH, T3, and T4 levels together to determine whether thyroid function is normal, underactive, or overactive."
      },
      {
        type: "paragraph",
        text: "Results should always be interpreted by a qualified healthcare professional."
      },
      {
        type: "heading",
        level: 2,
        text: "Benefits of Early Thyroid Testing"
      },
      {
        type: "paragraph",
        text: "Early thyroid testing can help detect hormonal imbalances before serious complications develop."
      },
      {
        type: "paragraph",
        text: "Benefits include:"
      },
      {
        type: "list",
        items: [
          "Early diagnosis of thyroid disorders",
          "Better symptom management",
          "Prevention of long-term complications",
          "Improved energy levels and metabolism",
          "Better treatment planning",
          "Monitoring ongoing thyroid treatment"
        ]
      },
      {
        type: "paragraph",
        text: "Regular thyroid testing supports long-term health and overall well-being."
      },
      {
        type: "heading",
        level: 2,
        text: "Thyroid Test in Panchkula"
      },
      {
        type: "paragraph",
        text: "Shyam Pathology Lab offers accurate Thyroid Testing in Panchkula with convenient home sample collection services."
      },
      {
        type: "paragraph",
        text: "Patients from Panchkula, Chandigarh, Mohali, Zirakpur, Sector 21 Panchkula, and nearby areas can book thyroid testing from home and receive reliable reports quickly."
      },
      {
        type: "paragraph",
        text: "Accurate hormone testing helps doctors diagnose thyroid disorders early and recommend appropriate treatment."
      },
   
    ],
    faq: [
      {
        question: "What does a thyroid test measure?",
        answer: "A thyroid test measures TSH, T3, and T4 hormone levels to evaluate thyroid gland function."
      },
      {
        question: "Is fasting required for a thyroid test?",
        answer: "No. Most thyroid blood tests do not require fasting."
      },
      {
        question: "Can thyroid problems cause hair fall?",
        answer: "Yes. Both hypothyroidism and hyperthyroidism may contribute to hair thinning and hair loss."
      },
      {
        question: "Can thyroid disorders affect weight?",
        answer: "Yes. An underactive thyroid may lead to weight gain, while an overactive thyroid may cause weight loss."
      },
      {
        question: "How often should thyroid testing be done?",
        answer: "The frequency depends on your symptoms, medical history, and your doctor's recommendation."
      },
      {
        question: "Can I book a thyroid test at home in Panchkula?",
        answer: "Yes. Home sample collection is available through Shyam Pathology Lab."
      }
    ],
    cta: {
      title: "Book Your Thyroid Test Today",
      description: "Get accurate thyroid testing with home sample collection and same-day reporting from Shyam Pathology Lab.",
      buttonText: "Book Thyroid Test",
      whatsappText: "Hi, I want to book a thyroid test.",
      features: [
        "Experienced Lab",
        "100+ Tests",
        "Fast Reports",
        "Experienced Staff"
      ]
    }
  },
  {
    id: 3,
    slug: "cholesterol-lipid-profile-test-guide",
    title: "Lipid Profile Test Guide: Cholesterol Levels, LDL, HDL & Heart Disease Risk",
    excerpt: "Learn about lipid profile testing, cholesterol levels, LDL, HDL, triglycerides, normal ranges, heart disease risk factors, and when to get a cholesterol test.",
    category: "Health Tips",
     author: {
    name: SITE_CONFIG.fullName, // old schema had this as a plain string — now an object
    image: SITE_CONFIG.logo, // ⚠️ confirm this is the correct author image path used across other blogs
  },
    publishedAt: "June 12, 2026",
    readingTime: "8 min read",
    coverImage: "/blogs/lipid-test.png",
    featured: false,
    relatedPackages: [],
    relatedTests: [
     
    ],
    seo: {
      title: "Lipid Profile Test Guide: Cholesterol Levels, LDL, HDL & Heart Health",
      description: "Understand cholesterol levels, LDL, HDL, triglycerides, normal lipid profile values, heart disease risk factors, and lipid profile testing in Panchkula.",
      keywords: [
        "Lipid Profile Test",
        "Cholesterol Test",
        "HDL LDL Test",
        "Triglycerides Test",
        "Heart Health Test",
        "Lipid Profile Normal Range",
        "High Cholesterol Symptoms",
        "LDL Cholesterol",
        "HDL Cholesterol",
        "Lipid Profile Test in Panchkula",
        "Cholesterol Test Near Me"
      ]
    },
    quickInfo: {
      "What You Will Learn": "Lipid Profile Test",
      sample: "Blood",
      fasting: "8–12 Hours Recommended",
      reportTime: "Same Day",
      homeCollection: "Available",
      recommendedFor: "High blood pressure, Weight gain, Chest discomfort, Fatigue, Family history of heart disease, No visible symptoms (silent condition)",
      booking: "Online / Phone / WhatsApp"
    },
    tags: [
      "Lipid Profile Test",
      "Cholesterol Test",
      "HDL LDL Test",
      "Heart Health Test",
      "Triglycerides Test",
      "Cardiac Risk",
      "Lipid Test Price",
      "High Cholesterol Symptoms",
      "Heart Disease Prevention",
      "Blood Test Panchkula",
      "Cholesterol Test Near Me",
      "Lipid Profile Chandigarh",
      "LDL Cholesterol",
      "HDL Cholesterol",
      "Total Cholesterol",
      "Cardiology Screening",
      "Diagnostic Lab",
      "Pathology Lab",
      "Home Sample Collection",
      "Same Day Report",
      "Health Checkup"
    ],
    content: [
      {
        type: "heading",
        level: 2,
        text: "What Is a Lipid Profile Test?"
      },
      {
        type: "paragraph",
        text: "A Lipid Profile Test is a blood test that measures different types of fats (lipids) present in your bloodstream."
      },
      {
        type: "paragraph",
        text: "The test evaluates cholesterol levels and helps determine your risk of developing heart disease, stroke, and other cardiovascular conditions."
      },
      {
        type: "paragraph",
        text: "Doctors commonly recommend lipid profile testing as part of routine preventive healthcare and cardiac risk assessment."
      },
      {
        type: "heading",
        level: 2,
        text: "What Does a Lipid Profile Measure?"
      },
      {
        type: "paragraph",
        text: "A complete lipid profile measures several important components:"
      },
      {
        type: "list",
        items: [
          "Total Cholesterol",
          "LDL (Low-Density Lipoprotein)",
          "HDL (High-Density Lipoprotein)",
          "Triglycerides",
          "VLDL (Very Low-Density Lipoprotein)",
          "Cholesterol/HDL Ratio"
        ]
      },
      {
        type: "paragraph",
        text: "These values help doctors evaluate your cardiovascular health and determine whether lifestyle changes or treatment may be required."
      },
      {
        type: "heading",
        level: 2,
        text: "Understanding LDL, HDL & Triglycerides"
      },
      {
        type: "paragraph",
        text: "LDL cholesterol is commonly known as \"bad cholesterol\" because high levels can lead to plaque buildup inside arteries."
      },
      {
        type: "paragraph",
        text: "HDL cholesterol is known as \"good cholesterol\" because it helps remove excess cholesterol from the bloodstream."
      },
      {
        type: "paragraph",
        text: "Triglycerides are another type of fat stored in the body for energy. Elevated triglyceride levels may increase the risk of heart disease, stroke, and metabolic disorders."
      },
      {
        type: "paragraph",
        text: "Maintaining healthy levels of LDL, HDL, and triglycerides is important for long-term cardiovascular health."
      },
      {
        type: "heading",
        level: 2,
        text: "Why Cholesterol Testing Is Important"
      },
      {
        type: "paragraph",
        text: "High cholesterol usually develops without noticeable symptoms."
      },
      {
        type: "paragraph",
        text: "Many people are unaware that their cholesterol levels are elevated until complications occur."
      },
      {
        type: "paragraph",
        text: "Regular lipid profile testing helps:"
      },
      {
        type: "list",
        items: [
          "Detect cardiovascular risk early",
          "Monitor treatment effectiveness",
          "Support preventive healthcare",
          "Guide dietary and lifestyle changes",
          "Reduce the risk of heart attack and stroke"
        ]
      },
      {
        type: "paragraph",
        text: "Early detection can significantly improve long-term health outcomes."
      },
      {
        type: "heading",
        level: 2,
        text: "Who Should Get a Lipid Profile Test?"
      },
      {
        type: "paragraph",
        text: "Doctors may recommend lipid profile testing for:"
      },
      {
        type: "list",
        items: [
          "Adults above 20 years of age",
          "People with diabetes",
          "Individuals with obesity",
          "Patients with high blood pressure",
          "Smokers",
          "Individuals with a family history of heart disease",
          "People with sedentary lifestyles"
        ]
      },
      {
        type: "paragraph",
        text: "Regular screening is especially important for individuals with cardiovascular risk factors."
      },
      {
        type: "heading",
        level: 2,
        text: "Normal Cholesterol Levels"
      },
      {
        type: "paragraph",
        text: "While reference ranges may vary slightly between laboratories, general guidelines include:"
      },
      {
        type: "list",
        items: [
          "Total Cholesterol: Less than 200 mg/dL",
          "LDL Cholesterol: Less than 100 mg/dL",
          "HDL Cholesterol: Above 40 mg/dL (men) and 50 mg/dL (women)",
          "Triglycerides: Less than 150 mg/dL"
        ]
      },
      {
        type: "paragraph",
        text: "Your doctor will interpret these values in the context of your overall health and risk profile."
      },
      {
        type: "heading",
        level: 2,
        text: "Benefits of Early Detection"
      },
      {
        type: "paragraph",
        text: "Regular lipid profile testing offers several benefits:"
      },
      {
        type: "list",
        items: [
          "Early identification of heart disease risk",
          "Better management of cholesterol levels",
          "Reduced risk of heart attack and stroke",
          "Monitoring of medication effectiveness",
          "Improved long-term cardiovascular health",
          "Support for preventive healthcare strategies"
        ]
      },
      {
        type: "paragraph",
        text: "Routine testing plays an important role in maintaining heart health."
      },
      {
        type: "heading",
        level: 2,
        text: "Lipid Profile Test in Panchkula"
      },
      {
        type: "paragraph",
        text: "Shyam Pathology Lab provides accurate Lipid Profile Testing in Panchkula with convenient home sample collection services."
      },
      {
        type: "paragraph",
        text: "Patients from Panchkula, Chandigarh, Mohali, Zirakpur, Sector 21 Panchkula, and nearby areas can book cholesterol testing from home and receive reliable reports quickly."
      },
      {
        type: "paragraph",
        text: "Early cholesterol screening helps identify cardiovascular risks and supports better heart health management."
      },
    
    ],
    faq: [
      {
        question: "What is a lipid profile test?",
        answer: "A lipid profile test measures cholesterol and triglyceride levels to assess cardiovascular health and heart disease risk."
      },
      {
        question: "What is LDL cholesterol?",
        answer: "LDL is often called bad cholesterol because high levels can contribute to plaque buildup in arteries."
      },
      {
        question: "What is HDL cholesterol?",
        answer: "HDL is known as good cholesterol because it helps remove excess cholesterol from the bloodstream."
      },
      {
        question: "Is fasting required for a lipid profile test?",
        answer: "Yes. Fasting for 8–12 hours is generally recommended for accurate lipid profile results."
      },
      {
        question: "How often should cholesterol be checked?",
        answer: "Adults should have their cholesterol checked periodically, especially if they have risk factors such as diabetes, obesity, or high blood pressure."
      },
      {
        question: "Can I book a lipid profile test at home in Panchkula?",
        answer: "Yes. Home sample collection is available through Shyam Pathology Lab."
      }
    ],
    cta: {
      title: "Book Your Lipid Profile Test Today",
      description: "Monitor your cholesterol levels with accurate testing, home sample collection, and fast reporting from Shyam Pathology Lab.",
      buttonText: "Book Lipid Profile Test",
      whatsappText: "Hi, I want to book a lipid profile test.",
      features: [
        "Experienced Lab",
        "100+ Tests",
        "Fast Reports",
        "Experienced Staff"
      ]
    }
  },
  {
    id: 4,
    slug: "liver-health-lft-test-guide",
    title: "Liver Function Test (LFT): Early Signs of Liver Damage You Should Know",
    excerpt: "Learn about liver function tests, symptoms of liver disease, and how early diagnosis can protect your liver health.",
    category: "Health Tips",
     author: {
    name: SITE_CONFIG.fullName, // old schema had this as a plain string — now an object
    image: SITE_CONFIG.logo, // ⚠️ confirm this is the correct author image path used across other blogs
  },
    publishedAt: "June 12, 2026",
    readingTime: "7 min read",
    coverImage: "/blogs/liver-test.jpg",
    featured: false,
    relatedPackages: [],
    relatedTests: [],
    seo: {
      title: "Liver Function Test (LFT): Early Signs of Liver Damage You Should Know",
      description: "Learn about liver function tests, symptoms of liver disease, and how early diagnosis can protect your liver health.",
      keywords: []
    },
    quickInfo: {
      "What You Will Learn": "Liver Function Test (LFT): Early Signs of Liver Damage You Should Know",
      sample: "Blood",
      fasting: "May Be Required",
      reportTime: "Same Day",
      homeCollection: "Available",
      recommendedFor: "Yellowing of eyes, Fatigue, Abdominal pain, Dark urine, Loss of appetite",
      booking: "Online / Phone / WhatsApp"
    },
    tags: [
      "Liver Function Test",
      "LFT Test",
      "Liver Health",
      "SGPT SGOT Test",
      "Bilirubin Test",
      "Fatty Liver",
      "Hepatitis Test",
      "Liver Disease Symptoms",
      "Liver Test Price",
      "LFT Panchkula",
      "Liver Test Near Me",
      "Diagnostic Lab",
      "Pathology Lab",
      "Home Collection",
      "Health Screening",
      "Same Day Report",
      "Blood Test",
      "Preventive Health"
    ],
    content: [
      {
        type: "heading",
        level: 2,
        text: "What is an LFT Test?"
      },
      {
        type: "paragraph",
        text: "A liver function test measures enzymes and proteins that show how well your liver is working."
      },
      {
        type: "paragraph",
        text: "It helps detect liver damage, infection, and inflammation."
      },
      {
        type: "heading",
        level: 2,
        text: "Why Liver Testing is Important"
      },
      {
        type: "paragraph",
        text: "The liver plays a key role in detoxification and digestion."
      },
      {
        type: "paragraph",
        text: "Regular testing helps detect problems early before serious damage occurs."
      },
      {
        type: "heading",
        level: 2,
        text: "Common Liver Diseases"
      },
      {
        type: "paragraph",
        text: "Fatty liver, hepatitis, and liver inflammation are commonly detected through LFT tests."
      }
    ],
    faq: [
      {
        question: "What does LFT measure?",
        answer: "It measures liver enzymes, bilirubin, and proteins."
      },
      {
        question: "Is fasting required?",
        answer: "Sometimes fasting is recommended."
      }
    ],
   cta: {
  title: "Book Your Liver Function Test Today",
  description:
    "Get accurate LFT testing with home sample collection, fast reporting, and experienced lab professionals from Shyam Pathology Lab.",
  buttonText: "Book LFT Test",
  whatsappText: "Hi, I want to book a liver function test.",
  features: [
    "Experienced Lab",
    "100+ Tests",
    "Fast Reports",
    "Experienced Staff"
  ]
}
  },
  {
    id: 5,
    slug: "vitamin-d-test-guide",
    title: "Vitamin D Test: Are Your Fatigue, Body Pain & Hair Fall Signs of Deficiency?",
    excerpt: "Feeling tired all the time? Learn how a Vitamin D test can help identify deficiencies causing fatigue, weak bones, muscle pain, and low immunity.",
    category: "Health Tips",
     author: {
    name: SITE_CONFIG.fullName, // old schema had this as a plain string — now an object
    image: SITE_CONFIG.logo, // ⚠️ confirm this is the correct author image path used across other blogs
  },
    publishedAt: "June 11, 2026",
    readingTime: "6 min read",
    coverImage: "/blogs/vitamin-d-test.jpg",
    featured: false,
    relatedPackages: [],
    relatedTests: [
      {
        name: "Fasting Blood Sugar",
        slug: "fasting-blood-sugar"
      },
      {
        name: "Monsoon Gastro Infection Panel",
        slug: "monsoon-gastro-infection-panel"
      },
      {
        name: "Paleo Profile Basic New",
        slug: "paleo-profile-basic-new"
      },
      {
        name: "Aarogyam XL Pro",
        slug: "aarogyam-xl-pro"
      },
      {
        name: "Aarogyam A Pro",
        slug: "aarogyam-a-pro"
      }
    ],
    seo: {
      title: "Vitamin D Test Guide: Symptoms, Deficiency, Normal Levels & Treatment",
      description: "Learn about Vitamin D deficiency symptoms, fatigue, hair fall, body pain, normal Vitamin D levels, treatment options, and when to get tested.",
      keywords: [
        "Vitamin D Test",
        "Vitamin D Deficiency",
        "25 OH Vitamin D Test",
        "Vitamin D Blood Test",
        "Low Vitamin D Symptoms",
        "Hair Fall Vitamin D",
        "Fatigue Vitamin D Deficiency",
        "Vitamin D Test in Panchkula",
        "Vitamin D Test Near Me",
        "Bone Health Test",
        "Vitamin D Normal Range"
      ]
    },
    quickInfo: {
      "What You Will Learn": "Vitamin D Test",
      sample: "Blood",
      fasting: "Not Required",
      reportTime: "Same Day",
      homeCollection: "Available",
      recommendedFor: "Constant fatigue, Body and muscle pain, Hair fall, Weak bones, Frequent illness, Low energy levels",
      booking: "Online / Phone / WhatsApp"
    },
    tags: [
      "Vitamin D Test",
      "Vitamin D Deficiency",
      "Vitamin D Symptoms",
      "25 OH Vitamin D Test",
      "Vitamin D Test Price",
      "Low Vitamin D Levels",
      "Vitamin D Normal Range",
      "Bone Health Test",
      "Hair Fall and Vitamin D",
      "Fatigue and Weakness",
      "Vitamin D Blood Test",
      "Immunity Health",
      "Pathology Lab",
      "Diagnostic Lab",
      "Vitamin D Test Near Me",
      "Vitamin D Test in Punjab",
      "Vitamin D Test in Panchkula",
      "Vitamin D Test in Haryana",
      "Vitamin D Test in Chandigarh",
      "Vitamin D Test in sec 21 panchkula",
      "Vitamin D Test in Karimpur",
      "Home Sample Collection",
      "Same Day Test Report",
      "Health Checkup Test"
    ],
    content: [
      {
        type: "heading",
        level: 2,
        text: "Always Feeling Tired? It Might Not Be Stress"
      },
      {
        type: "paragraph",
        text: "Do you wake up feeling exhausted even after a full night's sleep?"
      },
      {
        type: "paragraph",
        text: "Many people blame stress, work pressure, or lack of rest. However, one of the most overlooked causes of fatigue is Vitamin D deficiency."
      },
      {
        type: "paragraph",
        text: "Low Vitamin D levels can affect your energy, mood, immunity, muscles, and bone health."
      },
      {
        type: "paragraph",
        text: "A simple blood test can reveal whether your symptoms are linked to a Vitamin D deficiency."
      },
      {
        type: "heading",
        level: 2,
        text: "What is a Vitamin D Test?"
      },
      {
        type: "paragraph",
        text: "A Vitamin D test measures the level of Vitamin D present in your blood."
      },
      {
        type: "paragraph",
        text: "The most commonly recommended test is the 25-Hydroxy Vitamin D (25-OH Vitamin D) test."
      },
      {
        type: "paragraph",
        text: "This test helps doctors determine whether your Vitamin D levels are normal, insufficient, or deficient."
      },
      {
        type: "paragraph",
        text: "Early detection allows timely treatment before complications develop."
      },
      {
        type: "heading",
        level: 2,
        text: "Why is Vitamin D Important for Your Body?"
      },
      {
        type: "paragraph",
        text: "Vitamin D plays a critical role in maintaining strong bones, healthy muscles, and a properly functioning immune system."
      },
      {
        type: "paragraph",
        text: "It helps your body absorb calcium efficiently and supports overall health."
      },
      {
        type: "paragraph",
        text: "Without adequate Vitamin D, you may experience:"
      },
      {
        type: "list",
        items: [
          "Weak bones",
          "Muscle pain",
          "Increased fatigue",
          "Frequent infections",
          "Hair fall",
          "Reduced immunity"
        ]
      },
      {
        type: "paragraph",
        text: "Many people remain unaware of their deficiency for years."
      },
      {
        type: "heading",
        level: 2,
        text: "Who Should Consider a Vitamin D Test?"
      },
      {
        type: "paragraph",
        text: "You may benefit from testing if you experience:"
      },
      {
        type: "list",
        items: [
          "Persistent tiredness",
          "Bone or joint pain",
          "Hair thinning",
          "Muscle weakness",
          "Frequent illness",
          "Limited sun exposure"
        ]
      },
      {
        type: "paragraph",
        text: "Regular screening is especially useful for older adults, office workers, and individuals with known nutritional deficiencies."
      },
   
    ],
    faq: [
      {
        question: "Is fasting required for a Vitamin D test?",
        answer: "No. In most cases fasting is not required before a Vitamin D blood test."
      },
      {
        question: "How long does the test take?",
        answer: "The blood sample collection usually takes only a few minutes."
      },
      {
        question: "What is the normal Vitamin D range?",
        answer: "Normal ranges may vary by laboratory, but generally levels above 30 ng/mL are considered sufficient."
      },
      {
        question: "Can Vitamin D deficiency cause hair fall?",
        answer: "Yes. Low Vitamin D levels have been associated with increased hair thinning and hair loss in some individuals."
      }
    ],
   cta: {
  title: "Book Your Vitamin D Test Today",
  description:
    "Get accurate Vitamin D testing with home sample collection, fast reporting, and experienced lab professionals from Shyam Pathology Lab.",
  buttonText: "Book Vitamin D Test",
  whatsappText: "Hi, I want to book a Vitamin D test.",
  features: [
    "Experienced Lab",
    "100+ Tests",
    "Fast Reports",
    "Experienced Staff"
  ]
}
  },
 {
  id: 6,
  slug: "dengue-test-symptoms-guide",
  title: "Dengue Test Guide: Symptoms, NS1, IgM, IgG, Platelet Count & When to Get Tested",
  excerpt: "Learn everything about Dengue testing including NS1 Antigen, IgM, IgG, platelet count, symptoms, diagnosis, preparation, and Dengue testing in Panchkula.",
  category: "Health Tips",
  author: {
    name: SITE_CONFIG.fullName,
    image: SITE_CONFIG.logo,
  },
  publishedAt: "June 26, 2026",
  readingTime: "9 min read",
  coverImage: "/blogs/dengue-test.png",
  featured: false,
  relatedPackages: [],
  relatedTests: [], // ✅ emptied per request
  seo: {
    title: "Dengue Test Guide: Symptoms, NS1, IgM, IgG & Platelet Count",
    description: "Know the symptoms of Dengue, when to get tested, NS1 Antigen, IgM, IgG blood tests, platelet count, home sample collection, and Dengue testing in Panchkula.",
    keywords: [
      "Dengue Test",
      "NS1 Antigen Test",
      "Dengue Blood Test",
      "Dengue IgM Test",
      "Dengue IgG Test",
      "Platelet Count Test",
      "CBC Test for Dengue",
      "Dengue Symptoms",
      "Dengue Test in Panchkula",
      "Dengue Test Near Me",
      "Fever Blood Test"
    ]
  },
  quickInfo: {
    "What You Will Learn": "Dengue Test",
    sample: "Blood",
    fasting: "Not Required",
    reportTime: "Same Day",
    homeCollection: "Available",
    recommendedFor: "High fever, Severe headache, Pain behind the eyes, Joint pain, Muscle pain, Skin rash, Nausea, Vomiting, Extreme weakness, Low platelet count",
    booking: "Online / Phone / WhatsApp"
  },
  tags: [
    "Dengue Test", "NS1 Test", "IgM Dengue", "IgG Dengue", "Platelet Count",
    "CBC Test", "Dengue Symptoms", "High Fever", "Mosquito Borne Disease",
    "Blood Test", "Dengue Blood Test", "Diagnostic Lab", "Pathology Lab",
    "Same Day Report", "Home Sample Collection", "Dengue Test Near Me",
    "Dengue Test in Panchkula", "Dengue Test in Chandigarh", "Dengue Test in Mohali",
    "Dengue Test in Zirakpur", "Monsoon Diseases", "Seasonal Fever Test", "Viral Fever Test"
  ],
  content: [
    { type: "heading", level: 2, text: "What Is a Dengue Test?" },
    { type: "paragraph", text: "A Dengue Test is a blood test used to detect infection caused by the dengue virus." },
    { type: "paragraph", text: "Dengue is a mosquito-borne viral disease that spreads through the bite of infected Aedes mosquitoes." },
    { type: "paragraph", text: "Early diagnosis is important because dengue symptoms often resemble viral fever, typhoid, or malaria." },
    { type: "paragraph", text: "Doctors commonly recommend Dengue testing for individuals experiencing sudden high fever, severe body pain, headache, rash, or a rapidly falling platelet count." },
    { type: "paragraph", text: "Accurate testing allows doctors to begin appropriate treatment and monitor patients before serious complications develop." },
    { type: "heading", level: 2, text: "What Causes Dengue?" },
    { type: "paragraph", text: "Dengue is caused by the Dengue virus (DENV), which is transmitted through the bite of infected Aedes aegypti mosquitoes." },
    { type: "paragraph", text: "The disease spreads more frequently during the rainy and monsoon seasons when mosquito breeding increases." },
    { type: "paragraph", text: "Unlike the common cold, dengue does not spread directly from one person to another." },
    { type: "paragraph", text: "People living in mosquito-prone areas are at a higher risk, especially if stagnant water is present around homes or workplaces." },
    { type: "paragraph", text: "Preventing mosquito bites remains the most effective way to reduce dengue infections." },
    { type: "heading", level: 2, text: "Common Symptoms of Dengue" },
    { type: "paragraph", text: "Dengue symptoms usually begin four to ten days after being bitten by an infected mosquito." },
    { type: "paragraph", text: "Common symptoms include:" },
    { type: "list", items: ["High fever", "Severe headache", "Pain behind the eyes", "Muscle pain", "Joint pain", "Nausea", "Vomiting", "Skin rash", "Fatigue", "Weakness"] },
    { type: "paragraph", text: "Some patients may also experience bleeding gums, nosebleeds, abdominal pain, or a rapid drop in platelet count." },
    { type: "paragraph", text: "If severe symptoms develop, immediate medical attention is required." },
    { type: "heading", level: 2, text: "Types of Dengue Tests" },
    { type: "paragraph", text: "Several laboratory tests help diagnose Dengue depending on how many days symptoms have been present." },
    { type: "paragraph", text: "The most commonly recommended tests include:" },
    { type: "list", items: ["NS1 Antigen Test", "Dengue IgM Antibody Test", "Dengue IgG Antibody Test", "CBC Test", "Platelet Count"] },
    { type: "paragraph", text: "The NS1 Antigen Test is most useful during the first five days of illness." },
    { type: "paragraph", text: "IgM antibodies generally appear after the fifth day and indicate a recent infection." },
    { type: "paragraph", text: "IgG antibodies usually suggest a previous infection or a later stage of the disease." },
    { type: "paragraph", text: "Doctors often combine Dengue testing with CBC testing to monitor platelet count and white blood cell levels." },
    { type: "heading", level: 2, text: "When Should You Get Tested?" },
    { type: "paragraph", text: "Doctors may recommend Dengue testing if you have:" },
    { type: "list", items: ["Fever lasting more than two days", "Severe headache", "Muscle and joint pain", "Rash", "Pain behind the eyes", "Nausea or vomiting", "Recent mosquito exposure", "Sudden fall in platelet count"] },
    { type: "paragraph", text: "Early testing allows doctors to confirm the diagnosis and begin supportive treatment before complications develop." },
    { type: "paragraph", text: "People living in dengue-prone regions should not ignore persistent fever during the monsoon season." },
    { type: "heading", level: 2, text: "Platelet Count & CBC in Dengue" },
    { type: "paragraph", text: "One of the biggest concerns during Dengue infection is a falling platelet count." },
    { type: "paragraph", text: "Platelets help control bleeding, and a significant reduction may increase the risk of complications." },
    { type: "paragraph", text: "Doctors usually order a Complete Blood Count (CBC) along with Dengue testing to evaluate:" },
    { type: "list", items: ["Platelet Count", "White Blood Cell Count", "Hematocrit", "Hemoglobin"] },
    { type: "paragraph", text: "Platelet counts should always be interpreted by a healthcare professional because not every patient with a low platelet count requires platelet transfusion." },
    { type: "paragraph", text: "Regular monitoring helps doctors decide the appropriate course of treatment." },
    { type: "heading", level: 2, text: "Understanding Dengue Test Results" },
    { type: "paragraph", text: "A Dengue report should always be interpreted along with your symptoms, physical examination, and medical history." },
    { type: "paragraph", text: "Generally:" },
    { type: "list", items: ["NS1 Positive – Suggests an early dengue infection, usually within the first five days of illness."] },
    { type: "list", items: ["IgM Positive – Indicates a recent dengue infection. IgM antibodies generally become detectable after the fifth day of fever."] },
    { type: "list", items: ["IgG Positive – May indicate a previous dengue infection or a secondary dengue infection when present with IgM."] },
    { type: "list", items: ["CBC Findings – Dengue commonly causes a decrease in platelet count and white blood cells (leukopenia). In some patients, hematocrit levels may increase because of plasma leakage."] },
    { type: "paragraph", text: "Doctors may repeat CBC testing daily in moderate to severe dengue cases to monitor platelet trends and overall recovery." },
    { type: "paragraph", text: "Never rely solely on platelet count to determine the severity of dengue. Your doctor will evaluate all laboratory findings together with your symptoms." },
    { type: "heading", level: 2, text: "How To Prepare For A Dengue Test" },
    { type: "paragraph", text: "A Dengue blood test usually requires very little preparation." },
    { type: "paragraph", text: "Patients generally do not need to fast before testing." },
    { type: "paragraph", text: "For the most accurate diagnosis:" },
    { type: "list", items: ["Stay well hydrated.", "Inform your doctor about any medications you are taking.", "Mention the first day your fever started, as it helps determine whether NS1 or antibody testing is more appropriate.", "Wear loose-fitting clothing to make blood collection easier."] },
    { type: "paragraph", text: "The blood sample collection takes only a few minutes, and most reports are available on the same day." },
    { type: "heading", level: 2, text: "How Can You Prevent Dengue?" },
    { type: "paragraph", text: "Preventing mosquito bites is the best way to reduce the risk of dengue infection." },
    { type: "paragraph", text: "Simple preventive measures include:" },
    { type: "list", items: ["Avoid stagnant water around your home.", "Use mosquito repellents regularly.", "Wear full-sleeved clothing, especially during early morning and evening hours.", "Install window screens and mosquito nets.", "Cover water storage containers properly.", "Keep your surroundings clean to prevent mosquito breeding."] },
    { type: "paragraph", text: "Community awareness and early diagnosis play an important role in controlling dengue outbreaks during the monsoon season." },
    { type: "heading", level: 2, text: "Dengue Testing in Panchkula" },
    { type: "paragraph", text: "Shyam Pathology Lab provides reliable Dengue Testing in Panchkula with accurate reporting and convenient home blood sample collection." },
    { type: "paragraph", text: "Patients from Panchkula, Chandigarh, Mohali, Zirakpur, Sector 21 Panchkula, Karimpur, and nearby areas can easily book Dengue testing from home." },
    { type: "paragraph", text: "Our laboratory offers:" },
    { type: "list", items: ["NS1 Antigen Testing", "Dengue IgM & IgG Testing", "CBC Testing", "Platelet Count Monitoring", "Fast and Reliable Reports", "Home Sample Collection"] },
    { type: "paragraph", text: "Early diagnosis helps doctors monitor patients closely and reduces the risk of severe dengue complications." }
    // ✅ interlinking block removed
  ],
  faq: [
    { question: "When should I get a Dengue Test?", answer: "If you have high fever, severe body pain, headache, rash, or other symptoms suggestive of dengue, your doctor may recommend testing. Early testing improves diagnosis and treatment." },
    { question: "What is the NS1 Antigen Test?", answer: "The NS1 Antigen Test detects the dengue virus during the early stage of infection, usually within the first five days after symptoms begin." },
    { question: "Is fasting required before a Dengue Test?", answer: "No. Fasting is generally not required before a Dengue blood test." },
    { question: "Why is CBC recommended with a Dengue Test?", answer: "A CBC helps monitor platelet count, white blood cells, hemoglobin, and hematocrit, all of which are important during dengue infection." },
    { question: "Can a normal platelet count rule out Dengue?", answer: "No. Platelet counts may remain normal during the early stages of dengue. Doctors interpret platelet counts together with NS1, IgM, IgG results, symptoms, and physical examination." },
    { question: "How long does a Dengue Test take?", answer: "Blood sample collection usually takes only a few minutes, and most reports are available the same day depending on the test performed." },
    { question: "Can I book a Dengue Test at home in Panchkula?", answer: "Yes. Shyam Pathology Lab offers convenient home blood sample collection for Dengue testing in Panchkula and nearby areas." }
  ],
  cta: {
    title: "Book Your Dengue Test Today",
    description: "Get accurate Dengue testing with NS1, IgM, IgG, CBC, platelet count monitoring, home sample collection, and same-day reporting from Shyam Pathology Lab.",
    buttonText: "Book Dengue Test",
    whatsappText: "Hi, I want to book a dengue test.",
    features: ["Experienced Lab", "100+ Tests", "Fast Reports", "Experienced Staff"]
  }
},
 {
  id: 7,
  slug: "typhoid-test-symptoms-guide",
  title: "Typhoid Test Guide: Symptoms, Widal Test, Typhi Dot, Blood Culture & When to Get Tested",
  excerpt: "Learn everything about Typhoid testing including Widal Test, Typhi Dot, Blood Culture, symptoms, diagnosis, preparation, and Typhoid testing in Panchkula.",
  category: "Health Tips",
  author: {
    name: SITE_CONFIG.fullName,
    image: SITE_CONFIG.logo,
  },
  publishedAt: "June 26, 2026",
  readingTime: "9 min read",
  coverImage: "/blogs/typhoid-test.png",
  featured: false,
  relatedPackages: [],
  relatedTests: [], // ✅ emptied per request
  seo: {
    title: "Typhoid Test Guide: Widal Test, Typhi Dot, Symptoms & Blood Culture",
    description: "Know the symptoms of Typhoid fever, Widal Test, Typhi Dot, Blood Culture, preparation, home sample collection, and Typhoid testing in Panchkula.",
    keywords: [
      "Typhoid Test", "Widal Test", "Typhi Dot Test", "Typhoid Blood Test",
      "Blood Culture Test", "Typhoid Symptoms", "Typhoid Fever Test",
      "Typhoid Test in Panchkula", "Typhoid Test Near Me", "Persistent Fever Test", "Salmonella Test"
    ]
  },
  quickInfo: {
    "What You Will Learn": "Typhoid Test",
    sample: "Blood",
    fasting: "Not Required",
    reportTime: "Same Day",
    homeCollection: "Available",
    recommendedFor: "Persistent high fever, Headache, Loss of appetite, Weakness, Abdominal pain, Constipation, Diarrhea, Body ache, Nausea, Fatigue",
    booking: "Online / Phone / WhatsApp"
  },
  tags: [
    "Typhoid Test", "Typhoid Fever", "Widal Test", "Typhi Dot", "Blood Culture",
    "Salmonella Typhi", "Persistent Fever", "High Fever", "Blood Test",
    "Typhoid Blood Test", "Diagnostic Lab", "Pathology Lab", "Same Day Report",
    "Home Sample Collection", "Typhoid Test Near Me", "Typhoid Test in Panchkula",
    "Typhoid Test in Chandigarh", "Typhoid Test in Mohali", "Typhoid Test in Zirakpur",
    "Monsoon Diseases", "Seasonal Fever", "Fever Blood Test"
  ],
  content: [
    { type: "heading", level: 2, text: "What Is a Typhoid Test?" },
    { type: "paragraph", text: "A Typhoid Test is a blood test used to detect infection caused by Salmonella Typhi bacteria." },
    { type: "paragraph", text: "Typhoid fever is a bacterial infection that spreads through contaminated food and water." },
    { type: "paragraph", text: "Early diagnosis is important because typhoid symptoms often resemble dengue, malaria, and viral fever." },
    { type: "paragraph", text: "Doctors recommend Typhoid testing for people with persistent fever, weakness, abdominal discomfort, or digestive symptoms lasting several days." },
    { type: "paragraph", text: "Timely diagnosis helps doctors begin appropriate antibiotic treatment and prevents serious complications." },
    { type: "heading", level: 2, text: "What Causes Typhoid?" },
    { type: "paragraph", text: "Typhoid fever is caused by the bacterium Salmonella Typhi." },
    { type: "paragraph", text: "The infection spreads through contaminated food, unsafe drinking water, or poor hygiene." },
    { type: "paragraph", text: "People may become infected after consuming food prepared by someone carrying the bacteria or drinking contaminated water." },
    { type: "paragraph", text: "Maintaining proper hand hygiene, drinking clean water, and eating hygienically prepared food significantly reduce the risk of typhoid." },
    { type: "heading", level: 2, text: "Common Symptoms of Typhoid Fever" },
    { type: "paragraph", text: "Typhoid symptoms usually develop gradually over several days." },
    { type: "paragraph", text: "Common symptoms include:" },
    { type: "list", items: ["Persistent high fever", "Headache", "Weakness", "Fatigue", "Loss of appetite", "Abdominal pain", "Constipation or diarrhea", "Muscle pain", "Nausea", "Dry cough"] },
    { type: "paragraph", text: "Some patients may also experience confusion, dehydration, or intestinal complications if treatment is delayed." },
    { type: "heading", level: 2, text: "Types of Typhoid Tests" },
    { type: "paragraph", text: "Doctors may recommend different tests depending on the duration of illness." },
    { type: "paragraph", text: "Common Typhoid investigations include:" },
    { type: "list", items: ["Widal Test", "Typhi Dot IgM", "Typhi Dot IgG", "Blood Culture", "Complete Blood Count (CBC)"] },
    { type: "paragraph", text: "Blood culture is considered the gold standard during the early stage of infection." },
    { type: "paragraph", text: "Typhi Dot tests help detect antibodies against Salmonella Typhi, while the Widal Test may be used as an additional investigation depending on clinical findings." },
    { type: "paragraph", text: "Doctors often combine these tests with CBC to evaluate the patient's overall health." },
    { type: "heading", level: 2, text: "Who Should Get a Typhoid Test?" },
    { type: "paragraph", text: "A Typhoid Test may be recommended if you have:" },
    { type: "list", items: ["Fever lasting more than three days", "Persistent weakness", "Headache", "Abdominal pain", "Loss of appetite", "Diarrhea or constipation", "Recent consumption of contaminated food or water", "Travel to areas where typhoid is common"] },
    { type: "paragraph", text: "Early diagnosis helps prevent severe complications and improves recovery." },
    { type: "heading", level: 2, text: "Understanding Typhoid Test Results" },
    { type: "paragraph", text: "Typhoid test results should always be interpreted together with your symptoms, physical examination, and medical history." },
    { type: "paragraph", text: "Different laboratory tests provide different information:" },
    { type: "list", items: ["Blood Culture Positive – Confirms the presence of Salmonella Typhi bacteria and is considered the gold standard during the early stage of illness."] },
    { type: "list", items: ["Typhi Dot IgM Positive – Usually indicates a recent or active Typhoid infection."] },
    { type: "list", items: ["Typhi Dot IgG Positive – May indicate a previous infection or a later stage of illness."] },
    { type: "list", items: ["Widal Test – Measures antibodies against Salmonella Typhi. Results should always be interpreted carefully because previous infections, vaccinations, or other illnesses may affect antibody levels."] },
    { type: "paragraph", text: "Doctors may also review CBC findings because some patients develop reduced white blood cell counts during Typhoid fever." },
    { type: "paragraph", text: "Your healthcare provider will combine laboratory findings with your symptoms before confirming the diagnosis." },
    { type: "heading", level: 2, text: "Benefits of Early Diagnosis" },
    { type: "paragraph", text: "Early diagnosis plays a crucial role in preventing complications associated with Typhoid fever." },
    { type: "paragraph", text: "Benefits of early testing include:" },
    { type: "list", items: ["Timely antibiotic treatment", "Faster recovery", "Reduced risk of intestinal bleeding", "Lower risk of intestinal perforation", "Prevention of dehydration", "Reduced spread of infection to others", "Better monitoring of recovery"] },
    { type: "paragraph", text: "Delaying diagnosis may increase the likelihood of hospitalization and prolonged illness." },
    { type: "heading", level: 2, text: "How To Prepare For A Typhoid Test" },
    { type: "paragraph", text: "Typhoid testing usually requires very little preparation." },
    { type: "paragraph", text: "In most cases:" },
    { type: "list", items: ["Fasting is not required.", "Drink adequate water before sample collection.", "Inform your doctor about any antibiotics you have recently taken because they may affect Blood Culture results.", "Tell your healthcare provider when your fever started, as this helps determine which laboratory test is most appropriate."] },
    { type: "paragraph", text: "Blood sample collection generally takes only a few minutes, and most reports are available the same day depending on the test performed." },
    { type: "heading", level: 2, text: "How Can You Prevent Typhoid?" },
    { type: "paragraph", text: "Although Typhoid fever is treatable, prevention is always the best approach." },
    { type: "paragraph", text: "Simple preventive measures include:" },
    { type: "list", items: ["Drink clean and purified water.", "Wash hands thoroughly before eating.", "Avoid eating food from unhygienic places.", "Wash fruits and vegetables properly.", "Maintain good personal hygiene.", "Consume freshly cooked food whenever possible.", "Consider Typhoid vaccination if recommended by your doctor."] },
    { type: "paragraph", text: "Following these practices significantly reduces the risk of infection." },
    { type: "heading", level: 2, text: "Typhoid Testing in Panchkula" },
    { type: "paragraph", text: "Shyam Pathology Lab offers accurate Typhoid Testing in Panchkula with reliable reports and convenient home blood sample collection services." },
    { type: "paragraph", text: "Patients from Panchkula, Chandigarh, Mohali, Zirakpur, Sector 21 Panchkula, Karimpur, and nearby areas can easily book Typhoid testing from home." },
    { type: "paragraph", text: "Available investigations include:" },
    { type: "list", items: ["Blood Culture", "Widal Test", "Typhi Dot IgM & IgG", "CBC Test", "Home Sample Collection", "Same-Day Reporting for most tests"] },
    { type: "paragraph", text: "Accurate diagnosis allows doctors to begin treatment early and helps reduce the risk of serious complications." }
    // ✅ interlinking block removed
  ],
  faq: [
    { question: "When should I get a Typhoid Test?", answer: "A Typhoid Test is recommended if you have a persistent fever lasting more than three days, weakness, abdominal discomfort, headache, or digestive symptoms. Your doctor will decide which test is most appropriate based on your symptoms and illness duration." },
    { question: "Which test is best for Typhoid?", answer: "Blood Culture is considered the gold standard during the early stage of infection. Depending on the duration of illness, your doctor may also recommend Typhi Dot or Widal testing." },
    { question: "Is fasting required before a Typhoid Test?", answer: "No. Fasting is generally not required before Typhoid blood tests." },
    { question: "Can Typhoid and Dengue occur together?", answer: "Yes. In some cases, a person may have both infections simultaneously, especially during the monsoon season. Your doctor may recommend multiple blood tests to identify the exact cause of fever." },
    { question: "How long does a Typhoid Test take?", answer: "Blood sample collection usually takes only a few minutes. Report availability depends on the test performed, with many results available on the same day." },
    { question: "Can I book a Typhoid Test at home in Panchkula?", answer: "Yes. Shyam Pathology Lab provides convenient home blood sample collection services for Typhoid testing in Panchkula and nearby areas." },
    { question: "Can Typhoid be cured if detected early?", answer: "Yes. Early diagnosis and appropriate antibiotic treatment prescribed by a qualified doctor usually result in complete recovery and help prevent serious complications." }
  ],
  cta: {
    title: "Book Your Typhoid Test Today",
    description: "Get accurate Typhoid testing with Blood Culture, Widal Test, Typhi Dot, home sample collection, and fast reporting from Shyam Pathology Lab.",
    buttonText: "Book Typhoid Test",
    whatsappText: "Hi, I want to book a typhoid test.",
    features: ["Experienced Lab", "100+ Tests", "Fast Reports", "Experienced Staff"]
  }
},
{
  id: 8,
  slug: "hba1c-diabetes-test-guide",
  title: "HbA1c Test Guide: Normal Range, Diabetes Diagnosis, Results & When You Need One",
  excerpt: "Learn everything about the HbA1c blood test including normal HbA1c levels, diabetes diagnosis, preparation, interpretation, symptoms, and HbA1c testing in Panchkula.",
  category: "Health Tips",
  author: {
    name: SITE_CONFIG.fullName,
    image: SITE_CONFIG.logo,
  },
  publishedAt: "July 2, 2026",
  readingTime: "8 min read",
  coverImage: "/blogs/hba1c-test.png",
  featured: false,
  relatedPackages: [],
  relatedTests: [], // ✅ emptied per request
  seo: {
    title: "HbA1c Test Guide: Normal Range, Diabetes Test & HbA1c in Panchkula",
    description: "Know the HbA1c normal range, diabetes diagnosis, blood sugar monitoring, preparation, symptoms, and HbA1c testing in Panchkula with home sample collection.",
    keywords: [
      "HbA1c Test", "HbA1c Blood Test", "Diabetes Test", "Blood Sugar Test",
      "HbA1c Normal Range", "Diabetes Screening", "Diabetes Blood Test",
      "HbA1c Test in Panchkula", "HbA1c Test Near Me", "Sugar Test", "Diabetes Monitoring Test"
    ]
  },
  quickInfo: {
    "What You Will Learn": "HbA1c Test",
    sample: "Blood",
    fasting: "Usually Not Required",
    reportTime: "Same Day",
    homeCollection: "Available",
    recommendedFor: "Frequent urination, Excessive thirst, Blurred vision, Slow wound healing, Fatigue, Unexplained weight loss",
    booking: "Online / Phone / WhatsApp"
  },
  tags: [
    "HbA1c Test", "Diabetes Test", "Blood Sugar Test", "Diabetes Screening",
    "HbA1c Normal Range", "Sugar Test", "Blood Glucose Test", "Diabetes Monitoring",
    "Type 2 Diabetes", "Prediabetes", "HbA1c Test Near Me", "HbA1c Test in Panchkula",
    "HbA1c Test in Chandigarh", "HbA1c Test in Punjab", "Diagnostic Lab", "Pathology Lab",
    "Health Checkup", "Home Sample Collection", "Same Day Report"
  ],
  content: [
    { type: "heading", level: 2, text: "What Is an HbA1c Test?" },
    { type: "paragraph", text: "The HbA1c Test, also called the Glycated Hemoglobin Test, measures your average blood sugar level over the past two to three months." },
    { type: "paragraph", text: "Unlike a regular blood sugar test, HbA1c provides a long-term picture of glucose control and helps diagnose diabetes and prediabetes." },
    { type: "paragraph", text: "Doctors frequently recommend this test for diabetes screening and monitoring treatment effectiveness." },
    { type: "heading", level: 2, text: "Why Is HbA1c Important?" },
    { type: "paragraph", text: "High blood sugar often develops gradually and may not cause noticeable symptoms in the early stages." },
    { type: "paragraph", text: "The HbA1c Test helps detect elevated blood sugar before serious complications such as kidney disease, nerve damage, eye problems, and heart disease develop." },
    { type: "paragraph", text: "Regular monitoring allows timely lifestyle changes and treatment." },
    { type: "heading", level: 2, text: "Who Should Get an HbA1c Test?" },
    { type: "paragraph", text: "Doctors recommend HbA1c testing for adults over 35, individuals who are overweight, people with a family history of diabetes, pregnant women when advised, and anyone experiencing symptoms of high blood sugar." },
    { type: "paragraph", text: "Patients already diagnosed with diabetes should undergo regular HbA1c testing to monitor treatment response." },
    { type: "heading", level: 2, text: "Symptoms of High Blood Sugar" },
    { type: "paragraph", text: "Common symptoms include:" },
    { type: "list", items: ["Frequent urination"] },
    { type: "list", items: ["Excessive thirst"] },
    { type: "list", items: ["Increased hunger"] },
    { type: "list", items: ["Fatigue"] },
    { type: "list", items: ["Blurred vision"] },
    { type: "list", items: ["Slow wound healing"] },
    { type: "list", items: ["Frequent infections"] },
    { type: "list", items: ["Unexplained weight loss"] },
    { type: "paragraph", text: "Many people with diabetes may not notice symptoms until blood sugar becomes significantly elevated." },
    { type: "heading", level: 2, text: "HbA1c Normal Range" },
    { type: "paragraph", text: "General HbA1c reference values are:" },
    { type: "list", items: ["Below 5.7% — Normal"] },
    { type: "list", items: ["5.7% to 6.4% — Prediabetes"] },
    { type: "list", items: ["6.5% or above — Diabetes"] },
    { type: "paragraph", text: "Results should always be interpreted together with your symptoms and other blood sugar tests." },
    { type: "heading", level: 2, text: "Understanding HbA1c Results" },
    { type: "paragraph", text: "A higher HbA1c value indicates that blood sugar has remained elevated over the previous two to three months." },
    { type: "paragraph", text: "Doctors use HbA1c results to diagnose diabetes, evaluate treatment effectiveness, and adjust medications when necessary." },
    { type: "paragraph", text: "Regular monitoring helps reduce the risk of diabetes-related complications." },
    { type: "heading", level: 2, text: "Benefits of Regular HbA1c Testing" },
    { type: "paragraph", text: "Benefits include:" },
    { type: "list", items: ["Early diagnosis of diabetes"] },
    { type: "list", items: ["Better blood sugar control"] },
    { type: "list", items: ["Reduced risk of complications"] },
    { type: "list", items: ["Monitoring treatment effectiveness"] },
    { type: "list", items: ["Improved long-term health"] },
    { type: "paragraph", text: "Routine HbA1c testing is an essential part of preventive healthcare for individuals at risk of diabetes." },
    { type: "heading", level: 2, text: "How To Prepare For An HbA1c Test" },
    { type: "paragraph", text: "Most HbA1c tests do not require fasting." },
    { type: "paragraph", text: "Stay hydrated before the test and inform your doctor about any medications or medical conditions." },
    { type: "paragraph", text: "Blood sample collection usually takes only a few minutes." },
    { type: "heading", level: 2, text: "HbA1c Test in Panchkula" },
    { type: "paragraph", text: "Shyam Pathology Lab provides accurate HbA1c Testing in Panchkula with convenient home blood sample collection." },
    { type: "paragraph", text: "Patients from Panchkula, Chandigarh, Mohali, Zirakpur, Sector 21 Panchkula, Karimpur, and nearby areas can book diabetes testing from home and receive reliable same-day reports." },
    { type: "paragraph", text: "Early diagnosis helps prevent diabetes complications and supports better long-term health." }
    // ✅ interlinking block removed
  ],
  faq: [
    { question: "Is fasting required for an HbA1c Test?", answer: "No. In most cases fasting is not required before an HbA1c Test." },
    { question: "What does an HbA1c Test measure?", answer: "It measures your average blood sugar level over the previous two to three months." },
    { question: "Can HbA1c diagnose diabetes?", answer: "Yes. HbA1c is one of the standard tests used to diagnose diabetes and prediabetes." },
    { question: "How often should HbA1c be tested?", answer: "Most people with diabetes should have an HbA1c Test every three to six months as recommended by their doctor." },
    { question: "Can I book an HbA1c Test at home in Panchkula?", answer: "Yes. Shyam Pathology Lab provides home blood sample collection for HbA1c testing in Panchkula and nearby areas." },
    { question: "Is HbA1c more accurate than a fasting blood sugar test?", answer: "HbA1c reflects average blood sugar over several months, while fasting blood sugar measures glucose at a single point in time. Doctors often use both tests together." }
  ],
  cta: {
    title: "Book Your HbA1c Test Today",
    description: "Get accurate HbA1c testing with home sample collection and same-day reporting from Shyam Pathology Lab.",
    buttonText: "Book HbA1c Test",
    whatsappText: "Hi, I want to book a hba1c test.",
    features: ["Experienced Lab", "100+ Tests", "Fast Reports", "Experienced Staff"]
  }
},
{
  id: 9,
  slug: "vitamin-b12-test-guide",
  title: "Vitamin B12 Test Guide: Symptoms, Normal Range, Deficiency & When to Get Tested",
  excerpt: "Learn about Vitamin B12 deficiency symptoms, normal Vitamin B12 levels, causes, treatment, preparation, and Vitamin B12 testing in Panchkula.",
  category: "Health Tips",
  author: {
    name: SITE_CONFIG.fullName,
    image: SITE_CONFIG.logo,
  },
  publishedAt: "July 2, 2026",
  readingTime: "8 min read",
  coverImage: "/blogs/vitamin-b12-test.png",
  featured: false,
  relatedPackages: [],
  relatedTests: [], // ✅ emptied per request
  seo: {
    title: "Vitamin B12 Test Guide: Symptoms, Normal Range & Vitamin B12 Test",
    description: "Know Vitamin B12 deficiency symptoms, normal levels, fatigue, numbness, anemia, preparation, home sample collection, and Vitamin B12 testing in Panchkula.",
    keywords: [
      "Vitamin B12 Test", "Vitamin B12 Blood Test", "Vitamin B12 Deficiency",
      "Vitamin B12 Normal Range", "Vitamin B12 Test Near Me", "Vitamin B12 Test in Panchkula",
      "B12 Deficiency Symptoms", "Megaloblastic Anemia Test", "Vitamin B12 Levels",
      "Fatigue Blood Test", "Numbness Vitamin B12"
    ]
  },
  quickInfo: {
    "What You Will Learn": "Vitamin B12 Test",
    sample: "Blood",
    fasting: "Not Required",
    reportTime: "Same Day",
    homeCollection: "Available",
    recommendedFor: "Persistent fatigue, Weakness, Numbness in hands and feet, Memory problems, Pale skin, Difficulty walking, Shortness of breath, Mood changes",
    booking: "Online / Phone / WhatsApp"
  },
  tags: [
    "Vitamin B12 Test", "Vitamin B12 Deficiency", "Vitamin B12 Blood Test", "Vitamin B12 Levels",
    "Anemia Test", "Fatigue", "Numbness", "Memory Problems", "Vitamin B12 Test Near Me",
    "Vitamin B12 Test in Panchkula", "Vitamin B12 Test in Chandigarh", "Vitamin B12 Test in Punjab",
    "Diagnostic Lab", "Pathology Lab", "Health Checkup", "Blood Test", "Home Sample Collection", "Same Day Report"
  ],
  content: [
    { type: "heading", level: 2, text: "What Is a Vitamin B12 Test?" },
    { type: "paragraph", text: "A Vitamin B12 Test measures the amount of Vitamin B12 in your blood." },
    { type: "paragraph", text: "Vitamin B12 is essential for healthy nerve function, DNA production, and red blood cell formation." },
    { type: "paragraph", text: "Doctors commonly recommend this test to diagnose Vitamin B12 deficiency and certain types of anemia." },
    { type: "heading", level: 2, text: "Why Is Vitamin B12 Important?" },
    { type: "paragraph", text: "Vitamin B12 plays a vital role in maintaining healthy nerves, producing red blood cells, and supporting brain function." },
    { type: "paragraph", text: "Low Vitamin B12 levels may lead to fatigue, weakness, numbness, memory problems, and anemia." },
    { type: "paragraph", text: "Early detection helps prevent long-term neurological complications." },
    { type: "heading", level: 2, text: "Symptoms of Vitamin B12 Deficiency" },
    { type: "paragraph", text: "Common symptoms include:" },
    { type: "list", items: ["Fatigue"] },
    { type: "list", items: ["Weakness"] },
    { type: "list", items: ["Tingling or numbness"] },
    { type: "list", items: ["Difficulty walking"] },
    { type: "list", items: ["Pale skin"] },
    { type: "list", items: ["Memory loss"] },
    { type: "list", items: ["Depression"] },
    { type: "list", items: ["Shortness of breath"] },
    { type: "paragraph", text: "Some people may have deficiency without obvious symptoms." },
    { type: "heading", level: 2, text: "Who Should Get Tested?" },
    { type: "paragraph", text: "Vitamin B12 testing is recommended for older adults, vegetarians, vegans, people with digestive disorders, patients taking long-term metformin or acid-reducing medicines, and anyone experiencing symptoms of Vitamin B12 deficiency." },
    { type: "heading", level: 2, text: "Vitamin B12 Normal Range" },
    { type: "paragraph", text: "Typical reference ranges are:" },
    { type: "list", items: ["Above 200 pg/mL — Normal"] },
    { type: "list", items: ["150–200 pg/mL — Borderline"] },
    { type: "list", items: ["Below 150 pg/mL — Deficient"] },
    { type: "paragraph", text: "Results should always be interpreted by your healthcare provider." },
    { type: "heading", level: 2, text: "Understanding Test Results" },
    { type: "paragraph", text: "Low Vitamin B12 levels may indicate dietary deficiency, poor absorption, pernicious anemia, or gastrointestinal disorders." },
    { type: "paragraph", text: "Doctors may recommend additional tests such as folate, CBC, or methylmalonic acid depending on your condition." },
    { type: "heading", level: 2, text: "Benefits of Early Detection" },
    { type: "paragraph", text: "Early testing helps diagnose deficiency before permanent nerve damage develops." },
    { type: "paragraph", text: "Benefits include:" },
    { type: "list", items: ["Better energy"] },
    { type: "list", items: ["Healthy nerves"] },
    { type: "list", items: ["Improved brain function"] },
    { type: "list", items: ["Prevention of anemia"] },
    { type: "list", items: ["Monitoring treatment"] },
    { type: "heading", level: 2, text: "How To Prepare For A Vitamin B12 Test" },
    { type: "paragraph", text: "Usually no fasting is required." },
    { type: "paragraph", text: "Drink water normally and inform your doctor about Vitamin B12 supplements or injections before testing." },
    { type: "heading", level: 2, text: "Vitamin B12 Test in Panchkula" },
    { type: "paragraph", text: "Shyam Pathology Lab offers accurate Vitamin B12 Testing in Panchkula with home blood sample collection." },
    { type: "paragraph", text: "Patients from Panchkula, Chandigarh, Mohali, Zirakpur, Sector 21 Panchkula, Karimpur, and nearby areas can book testing from home and receive reliable same-day reports." }
    // ✅ interlinking block removed
  ],
  faq: [
    { question: "Is fasting required for a Vitamin B12 Test?", answer: "No. Fasting is usually not required." },
    { question: "Can Vitamin B12 deficiency cause fatigue?", answer: "Yes. Fatigue is one of the most common symptoms of Vitamin B12 deficiency." },
    { question: "Can low Vitamin B12 cause numbness?", answer: "Yes. Long-term deficiency may damage nerves and cause tingling or numbness." },
    { question: "Who is at risk of Vitamin B12 deficiency?", answer: "Older adults, vegetarians, vegans, and people with digestive disorders are at higher risk." },
    { question: "Can I book a Vitamin B12 Test at home in Panchkula?", answer: "Yes. Home sample collection is available through Shyam Pathology Lab." }
  ],
  cta: {
    title: "Book Your Vitamin B12 Test Today",
    description: "Get accurate Vitamin B12 testing with home sample collection and same-day reporting from Shyam Pathology Lab.",
    buttonText: "Book Vitamin B12 Test",
    whatsappText: "Hi, I want to book a vitamin b12 test.",
    features: ["Experienced Lab", "100+ Tests", "Fast Reports", "Experienced Staff"]
  }
},
 
{
  id: 10,
  slug: "kidney-function-test-kft-guide",
  title: "Kidney Function Test (KFT): Creatinine, Urea, eGFR, Normal Range & Kidney Health Guide",
  excerpt: "Learn everything about Kidney Function Tests including Creatinine, Blood Urea, eGFR, symptoms, preparation, normal ranges, kidney disease, and KFT testing in Panchkula.",
  category: "Health Tips",
  author: {
    name: SITE_CONFIG.fullName,
    image: SITE_CONFIG.logo,
  },
  publishedAt: "July 11, 2026",
  readingTime: "10 min read",
  coverImage: "/blogs/kidney-function-test.webp",
  featured: false,
  relatedPackages: [],
  relatedTests: [], // ✅ emptied per request
  seo: {
    title: "Kidney Function Test (KFT): Creatinine, Urea, eGFR & Kidney Test Guide",
    description: "Know Kidney Function Test normal ranges, Creatinine, Urea, eGFR, kidney disease symptoms, preparation, home sample collection, and Kidney Function Testing in Panchkula.",
    keywords: [
      "Kidney Function Test", "KFT Test", "Kidney Function Blood Test", "Kidney Profile Test",
      "Creatinine Test", "Blood Urea Test", "eGFR Test", "Renal Function Test",
      "Kidney Disease Test", "Kidney Test Near Me", "Kidney Function Test in Panchkula",
      "Creatinine Normal Range", "Kidney Health Test", "Chronic Kidney Disease Test",
      "Kidney Blood Test", "Best Kidney Test Lab"
    ]
  },
  quickInfo: {
    "What You Will Learn": "Kidney Function Test",
    sample: "Blood",
    fasting: "Usually Not Required",
    reportTime: "Same Day",
    homeCollection: "Available",
    recommendedFor: "Swelling of feet or ankles, Frequent urination, Reduced urine output, Foamy urine, Blood in urine, Persistent fatigue, Loss of appetite, Nausea, High blood pressure, Difficulty concentrating, Shortness of breath, Muscle cramps",
    booking: "Online / Phone / WhatsApp"
  },
  tags: [
    "Kidney Function Test", "KFT Test", "Kidney Test", "Renal Function Test", "Creatinine Test",
    "Blood Urea Test", "eGFR Test", "Kidney Disease", "Chronic Kidney Disease", "Kidney Failure",
    "Kidney Health", "Diabetes Kidney Disease", "High Blood Pressure Kidney", "Blood Test",
    "Diagnostic Lab", "Pathology Lab", "Kidney Test Near Me", "Kidney Test in Panchkula",
    "Kidney Test in Chandigarh", "Kidney Test in Mohali", "Kidney Test in Zirakpur",
    "Kidney Test in Karimpur", "Home Sample Collection", "Same Day Report", "Preventive Health Checkup"
  ],
  content: [
    { type: "heading", level: 2, text: "What Is a Kidney Function Test?" },
    { type: "paragraph", text: "A Kidney Function Test (KFT), also known as a Renal Function Test (RFT), is a group of blood tests that evaluates how efficiently your kidneys filter waste products and maintain the body's fluid and electrolyte balance." },
    { type: "paragraph", text: "Healthy kidneys remove toxins, excess water, and waste materials from the bloodstream while maintaining proper levels of minerals, salts, and blood pressure." },
    { type: "paragraph", text: "A Kidney Function Test commonly measures Creatinine, Blood Urea, Blood Urea Nitrogen (BUN), Uric Acid, and estimates the Glomerular Filtration Rate (eGFR)." },
    { type: "paragraph", text: "Doctors recommend this test to detect kidney disease early, monitor chronic kidney disorders, evaluate treatment response, and assess kidney damage caused by diabetes, hypertension, or certain medications." },
    { type: "paragraph", text: "Since kidney disease often develops silently without noticeable symptoms, regular Kidney Function Testing plays a vital role in preventive healthcare." },
    { type: "heading", level: 2, text: "Why Are Kidneys Important?" },
    { type: "paragraph", text: "The kidneys are two bean-shaped organs located on either side of the spine just below the rib cage." },
    { type: "paragraph", text: "Although small in size, they perform several life-sustaining functions every day." },
    { type: "paragraph", text: "Healthy kidneys continuously filter waste products, toxins, and excess fluid from your blood before converting them into urine." },
    { type: "paragraph", text: "They also regulate blood pressure, maintain electrolyte balance, produce hormones responsible for red blood cell production, activate Vitamin D for healthy bones, and help control the body's acid-base balance." },
    { type: "paragraph", text: "When kidney function declines, harmful waste begins to accumulate in the bloodstream, increasing the risk of serious complications such as chronic kidney disease, cardiovascular disease, anemia, electrolyte imbalance, and kidney failure." },
    { type: "paragraph", text: "Routine Kidney Function Testing helps identify problems before irreversible kidney damage occurs." },
    { type: "heading", level: 2, text: "What Does a Kidney Function Test Measure?" },
    { type: "paragraph", text: "A Kidney Function Test consists of several blood investigations that help doctors understand how efficiently your kidneys are working." },
    { type: "paragraph", text: "The most commonly measured parameters include:" },
    { type: "list", items: ["Serum Creatinine – A waste product produced by muscles. Healthy kidneys remove creatinine from the bloodstream. Elevated creatinine levels may indicate reduced kidney function."] },
    { type: "list", items: ["Blood Urea – Urea is produced when the body breaks down protein. High blood urea levels may suggest dehydration, kidney disease, or impaired kidney filtration."] },
    { type: "list", items: ["Blood Urea Nitrogen (BUN) – BUN provides additional information about kidney performance and hydration status."] },
    { type: "list", items: ["Estimated Glomerular Filtration Rate (eGFR) – eGFR estimates how well the kidneys are filtering blood. It is one of the most important indicators of kidney health."] },
    { type: "list", items: ["Uric Acid – Elevated uric acid levels may increase the risk of kidney stones, gout, and reduced kidney function."] },
    { type: "list", items: ["Electrolytes – Sodium, potassium, chloride, and bicarbonate may also be evaluated because kidney disease often affects electrolyte balance."] },
    { type: "paragraph", text: "Doctors interpret these results together rather than relying on a single value. Your age, sex, medical history, medications, hydration status, and other laboratory findings are considered before making a diagnosis." },
    { type: "paragraph", text: "A Kidney Function Test provides valuable information for diagnosing kidney disease, monitoring treatment, and preventing serious complications." },
    { type: "heading", level: 2, text: "Who Should Get a Kidney Function Test?" },
    { type: "paragraph", text: "Anyone can benefit from routine kidney screening, but certain individuals have a significantly higher risk of developing kidney disease." },
    { type: "paragraph", text: "Doctors commonly recommend a Kidney Function Test for:" },
    { type: "list", items: ["Adults above 40 years of age", "People with diabetes", "Individuals with high blood pressure", "Patients with heart disease", "People with obesity", "Individuals with recurrent kidney stones", "Patients with urinary tract infections", "People taking long-term painkillers or certain medications", "Individuals with a family history of kidney disease", "Smokers", "Older adults", "Anyone experiencing symptoms suggestive of kidney dysfunction"] },
    { type: "paragraph", text: "People living with diabetes and hypertension are particularly vulnerable because these conditions are among the leading causes of chronic kidney disease worldwide." },
    { type: "paragraph", text: "Routine testing allows kidney damage to be detected early—often before noticeable symptoms develop—giving doctors the opportunity to begin treatment that may slow or prevent further kidney damage." },
    { type: "paragraph", text: "Even healthy individuals should consider periodic Kidney Function Testing as part of a preventive health checkup, especially if they have lifestyle or family-related risk factors." },
    { type: "heading", level: 2, text: "Symptoms of Kidney Disease" },
    { type: "paragraph", text: "Kidney disease is often called a \"silent disease\" because many people experience no symptoms during its early stages." },
    { type: "paragraph", text: "As kidney function gradually declines, waste products begin accumulating in the bloodstream, leading to various symptoms." },
    { type: "paragraph", text: "Common signs that may require a Kidney Function Test include:" },
    { type: "list", items: ["Swelling of the feet, ankles, or face", "Persistent fatigue", "Weakness", "Reduced urine output", "Frequent urination, especially at night", "Foamy urine", "Blood in urine", "Difficulty concentrating", "Loss of appetite", "Nausea or vomiting", "Persistent itching", "Muscle cramps", "High blood pressure", "Shortness of breath", "Puffiness around the eyes"] },
    { type: "paragraph", text: "These symptoms do not always indicate kidney disease, but they should never be ignored." },
    { type: "paragraph", text: "Prompt laboratory testing helps doctors identify whether the kidneys are functioning normally or whether additional investigations are required." },
    { type: "paragraph", text: "Early diagnosis significantly improves treatment outcomes and reduces the risk of permanent kidney damage." },
    { type: "heading", level: 2, text: "Normal Kidney Function Test Values" },
    { type: "paragraph", text: "Kidney Function Test reports contain several important measurements that help evaluate kidney health." },
    { type: "paragraph", text: "Although reference ranges may vary slightly between laboratories, general guidelines include:" },
    { type: "list", items: ["Serum Creatinine (Male): 0.7–1.3 mg/dL", "Serum Creatinine (Female): 0.6–1.1 mg/dL", "Blood Urea: 15–40 mg/dL", "Blood Urea Nitrogen (BUN): 7–20 mg/dL", "eGFR: Above 90 mL/min/1.73m²", "Uric Acid (Male): 3.5–7.2 mg/dL", "Uric Acid (Female): 2.6–6.0 mg/dL"] },
    { type: "paragraph", text: "Values outside these ranges do not always mean serious kidney disease." },
    { type: "paragraph", text: "Temporary dehydration, medications, strenuous exercise, dietary protein intake, pregnancy, age, and certain medical conditions may also influence laboratory results." },
    { type: "paragraph", text: "For this reason, Kidney Function Test reports should always be interpreted by a qualified healthcare professional who considers your complete medical history and clinical condition." },
    { type: "heading", level: 2, text: "Understanding Creatinine, Urea & eGFR" },
    { type: "paragraph", text: "Creatinine, Blood Urea, and eGFR are among the most important indicators used to evaluate kidney function." },
    { type: "paragraph", text: "Serum Creatinine rises when the kidneys become less efficient at removing waste products from the bloodstream. Persistently elevated creatinine levels may indicate kidney damage or reduced filtration." },
    { type: "paragraph", text: "Blood Urea reflects the body's protein metabolism. Increased urea levels may occur because of kidney disease, dehydration, gastrointestinal bleeding, or excessive protein intake. Low levels are less common but may occur in certain liver disorders or poor nutritional status." },
    { type: "paragraph", text: "Estimated Glomerular Filtration Rate (eGFR) is calculated using serum creatinine along with age and sex. It estimates how effectively your kidneys filter blood." },
    { type: "paragraph", text: "General interpretation of eGFR includes:" },
    { type: "list", items: ["Above 90 — Normal kidney function", "60–89 — Mild reduction in kidney function", "30–59 — Moderate kidney disease", "15–29 — Severe kidney disease", "Below 15 — Kidney failure requiring urgent specialist care"] },
    { type: "paragraph", text: "Doctors never rely on a single laboratory value alone." },
    { type: "paragraph", text: "They evaluate creatinine, urea, eGFR, urine examination, blood pressure, diabetes status, imaging studies, symptoms, and previous reports together before confirming a diagnosis." },
    { type: "paragraph", text: "Regular monitoring of these values helps detect kidney disease early, assess treatment effectiveness, and reduce the risk of long-term complications such as chronic kidney disease or kidney failure." },
    { type: "heading", level: 2, text: "Common Causes of Kidney Damage" },
    { type: "paragraph", text: "Kidney disease can develop gradually over many years or occur suddenly because of injury, infection, or reduced blood flow." },
    { type: "paragraph", text: "Understanding the causes of kidney damage helps individuals take preventive measures and seek timely medical care." },
    { type: "paragraph", text: "Some of the most common causes include:" },
    { type: "list", items: ["Diabetes – High blood sugar can damage the tiny blood vessels responsible for filtering waste from the blood. Diabetes is the leading cause of chronic kidney disease worldwide."] },
    { type: "list", items: ["High Blood Pressure (Hypertension) – Persistently elevated blood pressure places excessive stress on kidney blood vessels, reducing their filtering ability over time."] },
    { type: "list", items: ["Kidney Stones – Recurrent kidney stones may block urine flow and increase the risk of kidney infection or long-term kidney damage if left untreated."] },
    { type: "list", items: ["Urinary Tract Infections (UTIs) – Severe or untreated urinary tract infections can spread to the kidneys, causing inflammation and permanent scarring."] },
    { type: "list", items: ["Glomerulonephritis – This condition involves inflammation of the kidney's filtering units (glomeruli) and may result from infections, autoimmune diseases, or unknown causes."] },
    { type: "list", items: ["Polycystic Kidney Disease (PKD) – An inherited disorder in which multiple fluid-filled cysts gradually replace healthy kidney tissue."] },
    { type: "list", items: ["Long-Term Use of Painkillers – Frequent use of certain pain-relieving medicines (NSAIDs) may reduce blood flow to the kidneys and contribute to chronic kidney damage."] },
    { type: "list", items: ["Dehydration – Severe or prolonged dehydration can temporarily reduce kidney function and may worsen existing kidney disease."] },
    { type: "list", items: ["Autoimmune Disorders – Diseases such as lupus may attack healthy kidney tissue, causing inflammation and impaired function."] },
    { type: "list", items: ["Heart Disease – Reduced blood circulation caused by heart disease may decrease blood supply to the kidneys, affecting their ability to filter waste."] },
    { type: "paragraph", text: "Maintaining healthy blood sugar, controlling blood pressure, drinking adequate water, avoiding unnecessary medications, eating a balanced diet, exercising regularly, and undergoing routine health checkups can significantly reduce the risk of kidney disease." },
    { type: "paragraph", text: "Early Kidney Function Testing allows doctors to detect abnormalities before permanent kidney damage develops." },
    { type: "heading", level: 2, text: "How To Prepare For A Kidney Function Test" },
    { type: "paragraph", text: "Most Kidney Function Tests require very little preparation." },
    { type: "paragraph", text: "However, following a few simple precautions helps ensure more accurate laboratory results." },
    { type: "paragraph", text: "Before your Kidney Function Test:" },
    { type: "list", items: ["Drink sufficient water unless your doctor has advised fluid restriction.", "Continue taking medications only as directed by your doctor.", "Inform the laboratory if you are taking medicines that may affect kidney function, including painkillers, antibiotics, blood pressure medications, or diuretics.", "Avoid strenuous exercise for 24 hours before the test because intense physical activity may temporarily increase creatinine levels.", "Avoid excessive alcohol consumption before sample collection.", "Inform your doctor if you are pregnant or have recently undergone radiological procedures involving contrast dye."] },
    { type: "paragraph", text: "In most cases, fasting is not required for a Kidney Function Test." },
    { type: "paragraph", text: "However, if your doctor has ordered additional investigations such as Blood Sugar or Lipid Profile along with Kidney Function Testing, fasting instructions may differ." },
    { type: "paragraph", text: "Blood sample collection usually takes only a few minutes, and most reports are available on the same day depending on the tests performed." },
    { type: "paragraph", text: "Following your healthcare provider's instructions helps ensure reliable and clinically useful results." },
    { type: "heading", level: 2, text: "Kidney Function Testing in Panchkula" },
    { type: "paragraph", text: "Shyam Pathology Lab provides accurate Kidney Function Testing (KFT) in Panchkula with reliable reporting and convenient home blood sample collection services." },
    { type: "paragraph", text: "Patients from Panchkula, Chandigarh, Mohali, Zirakpur, Sector 21 Panchkula, Karimpur, Pinjore, Kalka, and nearby areas can book Kidney Function Tests from the comfort of their homes." },
    { type: "paragraph", text: "Our laboratory offers comprehensive kidney health screening, including:" },
    { type: "list", items: ["Serum Creatinine", "Blood Urea", "Blood Urea Nitrogen (BUN)", "Estimated Glomerular Filtration Rate (eGFR)", "Uric Acid Testing", "Electrolyte Testing", "Home Sample Collection", "Same-Day Reporting for most investigations"] },
    { type: "paragraph", text: "Kidney diseases often progress silently without noticeable symptoms." },
    { type: "paragraph", text: "Regular Kidney Function Testing helps identify early abnormalities, supports timely medical intervention, and reduces the risk of chronic kidney disease and kidney failure." },
    { type: "paragraph", text: "Our experienced pathology team follows strict quality standards to provide accurate and dependable diagnostic reports that doctors can confidently use for treatment planning." }
    // ✅ interlinking block removed
  ],
  faq: [
    { question: "What is a Kidney Function Test?", answer: "A Kidney Function Test (KFT) is a group of blood tests that evaluate how well your kidneys remove waste products and maintain fluid and electrolyte balance." },
    { question: "Is fasting required before a Kidney Function Test?", answer: "Usually, fasting is not required. However, if other blood tests are being performed at the same time, your doctor may recommend fasting." },
    { question: "What does high creatinine indicate?", answer: "High creatinine levels may suggest reduced kidney function, dehydration, certain medications, or other medical conditions. Results should always be interpreted by your doctor." },
    { question: "What is eGFR?", answer: "Estimated Glomerular Filtration Rate (eGFR) measures how efficiently your kidneys filter blood and is one of the most important indicators of kidney health." },
    { question: "Who should get a Kidney Function Test?", answer: "People with diabetes, high blood pressure, kidney stones, urinary infections, heart disease, a family history of kidney disease, or symptoms such as swelling, fatigue, or abnormal urination should consider Kidney Function Testing." },
    { question: "Can kidney disease develop without symptoms?", answer: "Yes. Early kidney disease often develops silently, making routine Kidney Function Testing essential for early diagnosis." },
    { question: "How often should Kidney Function Tests be performed?", answer: "The frequency depends on your age, medical history, and risk factors. Individuals with diabetes, hypertension, or chronic kidney disease usually require regular monitoring as advised by their doctor." },
    { question: "Can I book a Kidney Function Test at home in Panchkula?", answer: "Yes. Shyam Pathology Lab offers convenient home blood sample collection for Kidney Function Testing in Panchkula and nearby areas." }
  ],
  cta: {
    title: "Book Your Kidney Function Test Today",
    description: "Monitor your kidney health with accurate Kidney Function Testing, home sample collection, and fast reporting from Shyam Pathology Lab.",
    buttonText: "Book Kidney Function Test",
    whatsappText: "Hi, I want to book a kidney function test.",
    features: ["Experienced Lab", "100+ Tests", "Fast Reports", "Experienced Staff"]
  }
},
{
  id: 11,
  slug: "malaria-test-symptoms-treatment-guide",
  title: "Malaria Test Guide: Symptoms, Causes, Diagnosis, Treatment & Prevention",
  excerpt: "Learn about malaria symptoms, causes, diagnosis, blood tests, treatment, prevention, complications, and malaria testing in Panchkula.",
  category: "Health Tips",
  author: {
    name: SITE_CONFIG.fullName,
    image: SITE_CONFIG.logo,
  },
  publishedAt: "July 11, 2026",
  readingTime: "11 min read",
  coverImage: "/blogs/malaria-test.webp",
  featured: false,
  relatedPackages: [],
  relatedTests: [], // ✅ emptied per request
  seo: {
    title: "Malaria Test Guide | Symptoms, Blood Test & Treatment",
    description: "Know malaria symptoms, mosquito transmission, malaria blood tests, diagnosis, treatment, prevention, and home sample collection in Panchkula.",
    keywords: [
      "Malaria Test", "Malaria Blood Test", "Malaria Symptoms", "Malaria Parasite Test",
      "Rapid Malaria Test", "MP Test", "Malaria Diagnosis", "Malaria Treatment",
      "Malaria Prevention", "Malaria Test Near Me", "Malaria Test in Panchkula",
      "Fever Blood Test", "Mosquito Borne Disease", "Plasmodium Infection",
      "Peripheral Smear Malaria", "Best Pathology Lab for Malaria Test"
    ]
  },
  quickInfo: {
    "What You Will Learn": "Malaria Test",
    sample: "Blood",
    fasting: "Not Required",
    reportTime: "Same Day",
    homeCollection: "Available",
    recommendedFor: "High Fever, Chills, Sweating, Headache, Body Pain, Muscle Pain, Fatigue, Vomiting, Nausea, Loss of Appetite, Abdominal Pain, Weakness",
    booking: "Online / Phone / WhatsApp"
  },
  tags: [
    "Malaria", "Malaria Test", "Malaria Blood Test", "Rapid Malaria Test", "MP Test",
    "Peripheral Smear", "Mosquito Disease", "Fever Test", "Blood Test", "Diagnostic Lab",
    "Pathology Lab", "Malaria Test Panchkula", "Malaria Test Chandigarh", "Malaria Test Mohali",
    "Malaria Test Zirakpur", "Home Sample Collection", "Same Day Report", "Monsoon Diseases",
    "Infectious Diseases", "Healthcare"
  ],
  content: [
    { type: "heading", level: 2, text: "What Is Malaria?" },
    { type: "paragraph", text: "Malaria is a serious mosquito-borne infectious disease caused by Plasmodium parasites. Humans become infected when bitten by an infected female Anopheles mosquito carrying the parasite." },
    { type: "paragraph", text: "Once inside the body, the parasite first infects the liver and then enters the bloodstream, where it destroys red blood cells. This leads to symptoms such as fever, chills, sweating, headache, fatigue, and body aches." },
    { type: "paragraph", text: "Malaria remains one of the most common infectious diseases in tropical and subtropical countries, including India. During the monsoon season, the number of malaria cases usually increases because stagnant water provides ideal breeding grounds for mosquitoes." },
    { type: "paragraph", text: "Early diagnosis using a Malaria Blood Test is extremely important because prompt treatment prevents severe complications such as cerebral malaria, anemia, kidney failure, breathing problems, and multi-organ damage." },
    { type: "paragraph", text: "If you experience recurrent fever with chills—especially during or after the rainy season—you should consult a healthcare professional and undergo malaria testing as soon as possible." },
    { type: "heading", level: 2, text: "How Does Malaria Spread?" },
    { type: "paragraph", text: "Malaria spreads primarily through the bite of an infected female Anopheles mosquito." },
    { type: "paragraph", text: "When the mosquito bites a person, Plasmodium parasites enter the bloodstream and travel to the liver, where they multiply before infecting red blood cells." },
    { type: "paragraph", text: "Malaria does not usually spread through casual contact such as shaking hands, sharing food, coughing, or sneezing." },
    { type: "paragraph", text: "In rare situations, malaria may also spread through infected blood transfusions, organ transplantation, contaminated needles, or from a pregnant mother to her baby." },
    { type: "paragraph", text: "Mosquitoes breed in stagnant water found around homes, construction sites, open containers, coolers, and drains. Eliminating mosquito breeding sites is one of the most effective ways to reduce malaria transmission." },
    { type: "paragraph", text: "Using mosquito nets, insect repellents, wearing full-sleeved clothing, and keeping surroundings clean are simple but highly effective preventive measures." },
    { type: "heading", level: 2, text: "Types of Malaria" },
    { type: "paragraph", text: "Malaria is caused by different species of the Plasmodium parasite. Although all types affect the red blood cells, some are more severe than others." },
    { type: "paragraph", text: "The five species known to infect humans include:" },
    { type: "list", items: ["Plasmodium falciparum – The most dangerous form of malaria. It can rapidly cause severe illness, cerebral malaria, organ failure, and even death if not treated promptly."] },
    { type: "list", items: ["Plasmodium vivax – The most common cause of malaria in India. It generally causes less severe disease than P. falciparum but has the ability to remain dormant in the liver, leading to relapses months after the initial infection."] },
    { type: "list", items: ["Plasmodium malariae – A less common species that may cause prolonged, mild infections lasting for several years if left untreated."] },
    { type: "list", items: ["Plasmodium ovale – Found mainly in parts of Africa and capable of causing relapsing malaria due to dormant liver stages."] },
    { type: "list", items: ["Plasmodium knowlesi – Primarily infects monkeys but can occasionally infect humans in certain parts of Southeast Asia. It can progress rapidly and requires prompt diagnosis."] },
    { type: "paragraph", text: "Identifying the specific Plasmodium species helps doctors select the most effective treatment and determine the likelihood of recurrence or complications." },
    { type: "paragraph", text: "Modern diagnostic laboratories use Rapid Malaria Antigen Tests along with Peripheral Blood Smear Examination to accurately identify malaria parasites." },
    { type: "heading", level: 2, text: "Symptoms of Malaria" },
    { type: "paragraph", text: "Malaria symptoms usually develop between 7 and 30 days after being bitten by an infected mosquito, although the incubation period may vary depending on the parasite species." },
    { type: "paragraph", text: "The classic symptom of malaria is a recurring cycle of chills, high fever, and heavy sweating. However, symptoms can differ from person to person." },
    { type: "paragraph", text: "Common symptoms include:" },
    { type: "list", items: ["High fever that may come and go", "Severe chills and shivering", "Excessive sweating", "Headache", "Muscle pain", "Joint pain", "Weakness and fatigue", "Nausea and vomiting", "Loss of appetite", "Abdominal pain", "Diarrhea in some patients", "Rapid heartbeat", "Pale skin due to anemia"] },
    { type: "paragraph", text: "Severe malaria may present with:" },
    { type: "list", items: ["Difficulty breathing", "Confusion", "Seizures", "Unconsciousness", "Jaundice", "Kidney failure", "Severe anemia", "Low blood pressure", "Bleeding disorders"] },
    { type: "paragraph", text: "Children, elderly individuals, pregnant women, and people with weakened immune systems are at greater risk of developing severe malaria." },
    { type: "paragraph", text: "Anyone experiencing high fever with chills, particularly during the rainy season or after traveling to a malaria-prone area, should seek immediate medical attention and undergo malaria testing." },
    { type: "heading", level: 2, text: "When Should You Get a Malaria Test?" },
    { type: "paragraph", text: "Early diagnosis is one of the most important factors in preventing serious complications from malaria." },
    { type: "paragraph", text: "Doctors recommend a Malaria Blood Test if you experience:" },
    { type: "list", items: ["Fever with chills", "Fever occurring every 48–72 hours", "Persistent headache with body pain", "Fever after mosquito exposure", "Fever after visiting a malaria-endemic region", "Unexplained fatigue", "Vomiting with fever", "Sudden weakness", "Low platelet count detected on a CBC", "Symptoms that resemble dengue or typhoid"] },
    { type: "paragraph", text: "Malaria shares many symptoms with dengue, typhoid, viral fever, influenza, and COVID-19. Because these illnesses require different treatments, laboratory confirmation is essential." },
    { type: "paragraph", text: "Doctors often recommend a combination of investigations such as:" },
    { type: "list", items: ["Malaria Parasite Test", "Rapid Malaria Antigen Test", "Complete Blood Count (CBC)", "Dengue NS1 Antigen Test", "Typhoid Test"] },
    { type: "paragraph", text: "Prompt testing allows treatment to begin before the infection progresses to severe malaria or causes complications affecting the brain, kidneys, liver, or lungs." },
    { type: "heading", level: 2, text: "Malaria Blood Tests" },
    { type: "paragraph", text: "Several laboratory tests are available to diagnose malaria accurately." },
    { type: "paragraph", text: "The most commonly used tests include:" },
    { type: "paragraph", text: "• Rapid Malaria Antigen Test (RMAT) This test detects malaria-specific proteins in the blood and produces results within a short time. It is widely used for rapid diagnosis." },
    { type: "paragraph", text: "• Peripheral Blood Smear Examination A laboratory specialist examines blood under a microscope to identify malaria parasites and determine the Plasmodium species responsible for infection. It remains the gold standard for malaria diagnosis." },
    { type: "paragraph", text: "• Complete Blood Count (CBC) Although CBC cannot diagnose malaria directly, it often reveals low platelet count, anemia, and reduced white blood cell counts that support the diagnosis." },
    { type: "paragraph", text: "• Polymerase Chain Reaction (PCR) PCR testing is highly sensitive and can detect very small amounts of parasite DNA. It is generally reserved for specialized laboratories." },
    { type: "paragraph", text: "• Quantitative Buffy Coat (QBC) Test Some laboratories use QBC technology for faster microscopic detection of malaria parasites." },
    { type: "paragraph", text: "Doctors may recommend repeating the malaria test if symptoms strongly suggest malaria but the initial report is negative, since parasite levels may be too low to detect during the early stage of infection." },
    { type: "paragraph", text: "Early laboratory confirmation enables faster treatment and greatly improves recovery outcomes." },
    { type: "heading", level: 2, text: "Difference Between Malaria, Dengue & Typhoid" },
    { type: "paragraph", text: "Malaria, dengue, and typhoid are among the most common causes of fever in India, particularly during the monsoon season. Since their early symptoms are often similar, it is difficult to distinguish between them without laboratory testing." },
    { type: "paragraph", text: "Although all three illnesses may cause fever, body aches, weakness, and headache, they are caused by completely different organisms and require different treatments." },
    { type: "paragraph", text: "Malaria is caused by Plasmodium parasites and spreads through the bite of infected female Anopheles mosquitoes." },
    { type: "paragraph", text: "Dengue is caused by the Dengue virus and spreads through Aedes mosquitoes that usually bite during the daytime." },
    { type: "paragraph", text: "Typhoid is caused by the bacterium Salmonella Typhi and spreads through contaminated food and drinking water." },
    { type: "paragraph", text: "Some key differences include:" },
    { type: "list", items: ["Malaria commonly causes recurring fever with chills, shivering, and heavy sweating."] },
    { type: "list", items: ["Dengue often presents with sudden high fever, severe headache, pain behind the eyes, muscle pain, skin rash, and a significant drop in platelet count."] },
    { type: "list", items: ["Typhoid usually causes gradually increasing fever, abdominal pain, constipation or diarrhea, weakness, and loss of appetite."] },
    { type: "paragraph", text: "Doctors often recommend a combination of investigations such as CBC, Malaria Parasite Test, Dengue NS1 Antigen Test, Dengue IgM/IgG Antibody Test, and Typhoid Test (Widal or TyphiDot) to identify the exact cause of fever." },
    { type: "paragraph", text: "Accurate diagnosis ensures appropriate treatment and prevents unnecessary medications or delayed care." },
    { type: "heading", level: 2, text: "Treatment for Malaria" },
    { type: "paragraph", text: "Malaria is a treatable disease when diagnosed early." },
    { type: "paragraph", text: "Treatment depends on several factors, including the Plasmodium species, severity of infection, patient age, pregnancy status, and local treatment guidelines." },
    { type: "paragraph", text: "Doctors usually prescribe antimalarial medications that effectively eliminate the parasite from the bloodstream. In some cases, additional medicines may be required to prevent relapse, especially for Plasmodium vivax infections." },
    { type: "paragraph", text: "Supportive treatment may include:" },
    { type: "list", items: ["Adequate hydration", "Medicines to reduce fever", "Rest", "Nutritional support", "Monitoring blood counts", "Hospitalization for severe malaria"] },
    { type: "paragraph", text: "Patients with severe malaria may require intravenous medications, oxygen therapy, blood transfusion, kidney support, or intensive care monitoring." },
    { type: "paragraph", text: "It is extremely important to complete the full course of prescribed medication even if symptoms improve within a few days." },
    { type: "paragraph", text: "Self-medication should be avoided because incorrect treatment may lead to drug resistance, treatment failure, or serious complications." },
    { type: "paragraph", text: "Anyone experiencing worsening symptoms such as confusion, breathing difficulty, seizures, persistent vomiting, or reduced urine output should seek emergency medical attention immediately." },
    { type: "heading", level: 2, text: "How Can Malaria Be Prevented?" },
    { type: "paragraph", text: "Preventing mosquito bites remains the most effective way to reduce the risk of malaria." },
    { type: "paragraph", text: "Simple preventive measures include:" },
    { type: "list", items: ["Sleep under mosquito nets, especially during the rainy season.", "Apply mosquito repellents to exposed skin.", "Wear full-sleeved clothing and long trousers in the evening and at night.", "Install mosquito screens on doors and windows.", "Remove stagnant water from coolers, flower pots, buckets, old tyres, and water tanks.", "Keep water storage containers properly covered.", "Maintain clean surroundings to prevent mosquito breeding.", "Use mosquito coils, vaporizers, or insecticide sprays where appropriate.", "Seek early medical evaluation for any unexplained fever."] },
    { type: "paragraph", text: "Travellers visiting malaria-endemic regions may also require preventive antimalarial medicines based on medical advice." },
    { type: "paragraph", text: "Community awareness, mosquito control measures, and prompt diagnosis remain essential for reducing malaria transmission and protecting public health." },
    { type: "heading", level: 2, text: "Malaria Testing in Panchkula" },
    { type: "paragraph", text: "Shyam Pathology Lab offers accurate and reliable Malaria Blood Testing in Panchkula with fast reporting and convenient home sample collection." },
    { type: "paragraph", text: "Our experienced laboratory team performs malaria investigations using modern diagnostic methods to ensure dependable results for patients and healthcare professionals." },
    { type: "paragraph", text: "We provide:" },
    { type: "list", items: ["Rapid Malaria Antigen Test", "Malaria Parasite (MP) Test", "Peripheral Blood Smear Examination", "Complete Blood Count (CBC)", "Platelet Count", "Dengue & Typhoid Fever Panels", "Home Blood Sample Collection", "Same-Day Reports for most routine investigations"] },
    { type: "paragraph", text: "Patients from Panchkula, Chandigarh, Mohali, Zirakpur, Pinjore, Kalka, Karimpur, and nearby areas can conveniently book malaria testing from home." },
    { type: "paragraph", text: "During the monsoon season, timely diagnosis becomes especially important because malaria cases often increase. Early testing allows prompt treatment and significantly reduces the risk of severe complications." },
    { type: "paragraph", text: "If you develop fever with chills, body pain, or excessive sweating, consult a healthcare professional and consider getting a Malaria Blood Test without delay." }
    // ✅ interlinking block removed
  ],
  faq: [
    { question: "What is a Malaria Test?", answer: "A Malaria Test is a blood test used to detect Plasmodium parasites or malaria antigens in the bloodstream for accurate diagnosis." },
    { question: "How is malaria diagnosed?", answer: "Malaria is diagnosed using Rapid Malaria Antigen Tests, Peripheral Blood Smear Examination, and other laboratory investigations recommended by your doctor." },
    { question: "Can malaria be cured completely?", answer: "Yes. Most malaria infections can be treated successfully when diagnosed early and managed with appropriate antimalarial medicines." },
    { question: "Is fasting required before a malaria blood test?", answer: "No. Fasting is generally not required before a Malaria Blood Test." },
    { question: "Can malaria and dengue occur together?", answer: "Yes. Although uncommon, a person may be infected with both malaria and dengue simultaneously, making laboratory testing extremely important." },
    { question: "How long does a malaria test take?", answer: "Rapid Malaria Tests provide results quickly, while microscopic examination and confirmatory investigations may take a few hours depending on the laboratory." },
    { question: "When should I get tested for malaria?", answer: "Anyone experiencing fever with chills, sweating, headache, or body aches—especially during the rainy season or after mosquito exposure—should consult a doctor and consider malaria testing." },
    { question: "Can I book a Malaria Test at home in Panchkula?", answer: "Yes. Shyam Pathology Lab provides home blood sample collection for Malaria Testing across Panchkula, Chandigarh, Mohali, Zirakpur, and nearby areas." }
  ],
  cta: {
    title: "Book Your Malaria Blood Test Today",
    description: "Get accurate Malaria Blood Testing with home sample collection, experienced laboratory professionals, and fast reporting from Shyam Pathology Lab.",
    buttonText: "Book Malaria Test",
    whatsappText: "Hi, I want to book a malaria test.",
    features: ["Experienced Lab", "100+ Tests", "Fast Reports", "Experienced Staff"]
  }
},
{
  id: 12,
  slug: "blood-sugar-test-guide",
  title: "Blood Sugar Test Guide: Normal Range, Fasting, PPBS, RBS & Diabetes Diagnosis",
  excerpt: "Learn everything about Blood Sugar Tests including Fasting Blood Sugar (FBS), Postprandial Blood Sugar (PPBS), Random Blood Sugar (RBS), normal ranges, diabetes symptoms, preparation, and Blood Sugar Testing in Panchkula.",
  category: "Health Tips",
  author: {
    name: SITE_CONFIG.fullName,
    image: SITE_CONFIG.logo,
  },
  publishedAt: "July 15, 2026",
  readingTime: "8 min read",
  coverImage: "/blogs/blood-sugar-test.webp",
  featured: false,
  relatedPackages: [],
  relatedTests: [], // ✅ emptied per request
  seo: {
    title: "Blood Sugar Test Guide: Fasting, PPBS, RBS, Normal Range & Diabetes Test",
    description: "Know Blood Sugar Test normal ranges, fasting sugar levels, PPBS, RBS, diabetes symptoms, preparation, home sample collection, and Blood Sugar Testing in Panchkula.",
    keywords: [
      "Blood Sugar Test", "Blood Glucose Test", "Fasting Blood Sugar Test", "FBS Test",
      "Postprandial Blood Sugar Test", "PPBS Test", "Random Blood Sugar Test", "RBS Test",
      "Diabetes Blood Test", "Blood Sugar Test in Panchkula", "Blood Sugar Test Near Me",
      "Blood Sugar Normal Range"
    ]
  },
  quickInfo: {
    "What You Will Learn": "Blood Sugar Test",
    sample: "Blood",
    fasting: "Required for FBS",
    reportTime: "Same Day",
    homeCollection: "Available",
    recommendedFor: "Frequent urination, Excessive thirst, Blurred vision, Fatigue, Slow wound healing, Unexplained weight loss, Frequent infections, Increased hunger",
    booking: "Online / Phone / WhatsApp"
  },
  tags: [
    "Blood Sugar Test", "Blood Glucose Test", "Fasting Blood Sugar", "FBS Test", "PPBS Test",
    "Random Blood Sugar", "RBS Test", "Diabetes Test", "Blood Sugar Normal Range",
    "Prediabetes Test", "Type 2 Diabetes", "Diabetes Screening", "Blood Sugar Test Near Me",
    "Blood Sugar Test in Panchkula", "Blood Sugar Test in Chandigarh", "Blood Sugar Test in Punjab",
    "Blood Test", "Diagnostic Lab", "Pathology Lab", "Health Checkup", "Home Sample Collection", "Same Day Report"
  ],
  content: [
    { type: "heading", level: 2, text: "What Is a Blood Sugar Test?" },
    { type: "paragraph", text: "A Blood Sugar Test, also known as a Blood Glucose Test, measures the amount of glucose present in your bloodstream." },
    { type: "paragraph", text: "Glucose is your body's primary source of energy. It comes from the food you eat and is regulated by the hormone insulin." },
    { type: "paragraph", text: "Doctors recommend Blood Sugar Testing to diagnose diabetes, identify prediabetes, monitor existing diabetes, and evaluate how effectively treatment is controlling blood sugar levels." },
    { type: "paragraph", text: "Because high blood sugar often develops silently, regular testing helps detect diabetes before serious complications occur." },
    { type: "heading", level: 2, text: "Types of Blood Sugar Tests" },
    { type: "paragraph", text: "Several blood sugar tests are available depending on your symptoms and your doctor's recommendation." },
    { type: "paragraph", text: "The most commonly performed tests include:" },
    { type: "list", items: ["Fasting Blood Sugar (FBS) – Measures blood glucose after fasting for 8–12 hours."] },
    { type: "list", items: ["Postprandial Blood Sugar (PPBS) – Measures blood sugar exactly two hours after a meal."] },
    { type: "list", items: ["Random Blood Sugar (RBS) – Can be performed at any time regardless of meals."] },
    { type: "list", items: ["HbA1c Test – Measures the average blood sugar level over the previous two to three months."] },
    { type: "paragraph", text: "Each test provides different information and helps doctors diagnose or monitor diabetes accurately." },
    { type: "heading", level: 2, text: "Who Should Get a Blood Sugar Test?" },
    { type: "paragraph", text: "A Blood Sugar Test is recommended for people who have symptoms of diabetes or are at increased risk." },
    { type: "paragraph", text: "Testing is commonly advised for:" },
    { type: "list", items: ["Adults over 35 years of age", "Individuals who are overweight or obese", "People with a family history of diabetes", "Individuals with high blood pressure or high cholesterol", "Pregnant women when advised by their doctor", "People with sedentary lifestyles", "Anyone experiencing symptoms of high blood sugar"] },
    { type: "paragraph", text: "Regular screening allows diabetes to be detected before complications develop." },
    { type: "heading", level: 2, text: "Symptoms of High Blood Sugar" },
    { type: "paragraph", text: "High blood sugar may not always cause noticeable symptoms during the early stages." },
    { type: "paragraph", text: "Common warning signs include:" },
    { type: "list", items: ["Frequent urination", "Excessive thirst", "Increased hunger", "Fatigue", "Blurred vision", "Slow wound healing", "Frequent infections", "Unexplained weight loss", "Tingling in the hands or feet"] },
    { type: "paragraph", text: "If you experience these symptoms, your doctor may recommend Blood Sugar Testing." },
    { type: "heading", level: 2, text: "Blood Sugar Normal Range" },
    { type: "paragraph", text: "Understanding your blood sugar report helps identify whether glucose levels are normal." },
    { type: "paragraph", text: "General reference values include:" },
    { type: "list", items: ["Fasting Blood Sugar: 70–99 mg/dL", "Prediabetes: 100–125 mg/dL", "Diabetes: 126 mg/dL or higher", "Postprandial Blood Sugar (2 Hours): Less than 140 mg/dL", "Random Blood Sugar: Usually below 200 mg/dL"] },
    { type: "paragraph", text: "Reference ranges may vary slightly between laboratories, and your doctor will interpret the results based on your symptoms and medical history." },
    { type: "heading", level: 2, text: "Understanding Blood Sugar Test Results" },
    { type: "paragraph", text: "Blood Sugar Test results should always be interpreted by a qualified healthcare professional." },
    { type: "paragraph", text: "Generally:" },
    { type: "list", items: ["Normal values indicate healthy glucose regulation."] },
    { type: "list", items: ["Prediabetes suggests blood sugar is higher than normal but not yet in the diabetic range."] },
    { type: "list", items: ["Diabetes is diagnosed when blood sugar exceeds recommended diagnostic limits or when confirmed with additional testing."] },
    { type: "paragraph", text: "Doctors may recommend repeat testing or an HbA1c Test to confirm the diagnosis and determine long-term blood sugar control." },
    { type: "heading", level: 2, text: "Benefits of Regular Blood Sugar Testing" },
    { type: "paragraph", text: "Routine Blood Sugar Testing provides several important health benefits." },
    { type: "paragraph", text: "These include:" },
    { type: "list", items: ["Early detection of diabetes", "Identification of prediabetes", "Better diabetes management", "Monitoring treatment effectiveness", "Reduced risk of complications affecting the heart, kidneys, eyes, and nerves", "Support for healthier lifestyle choices"] },
    { type: "paragraph", text: "Regular screening plays an important role in preventive healthcare." },
    { type: "heading", level: 2, text: "How To Prepare For A Blood Sugar Test" },
    { type: "paragraph", text: "Preparation depends on the type of Blood Sugar Test being performed." },
    { type: "list", items: ["Fasting Blood Sugar (FBS): Avoid eating or drinking anything except water for 8–12 hours before the test."] },
    { type: "list", items: ["Postprandial Blood Sugar (PPBS): Blood is collected exactly two hours after starting your meal."] },
    { type: "list", items: ["Random Blood Sugar (RBS): No fasting is required."] },
    { type: "paragraph", text: "Stay hydrated and inform your doctor about any medications you are taking, as some medicines may affect blood sugar levels." },
    { type: "heading", level: 2, text: "Blood Sugar Testing in Panchkula" },
    { type: "paragraph", text: "Shyam Pathology Lab provides accurate Blood Sugar Testing in Panchkula with reliable reports and convenient home blood sample collection." },
    { type: "paragraph", text: "Patients from Panchkula, Chandigarh, Mohali, Zirakpur, Sector 21 Panchkula, Karimpur, and nearby areas can easily book Blood Sugar Tests from home." },
    { type: "paragraph", text: "Available investigations include:" },
    { type: "list", items: ["Fasting Blood Sugar (FBS)", "Postprandial Blood Sugar (PPBS)", "Random Blood Sugar (RBS)", "HbA1c Test", "Home Sample Collection", "Same-Day Reporting for most tests"] },
    { type: "paragraph", text: "Early diagnosis helps prevent diabetes-related complications and supports better long-term health." }
    // ✅ interlinking block removed
  ],
  faq: [
    { question: "Is fasting required for a Blood Sugar Test?", answer: "Fasting is required only for a Fasting Blood Sugar (FBS) Test. Random Blood Sugar (RBS) and Postprandial Blood Sugar (PPBS) have different preparation requirements." },
    { question: "What is the normal fasting blood sugar level?", answer: "A normal fasting blood sugar level is generally between 70 and 99 mg/dL." },
    { question: "What is the difference between FBS and PPBS?", answer: "FBS measures blood sugar after fasting for 8–12 hours, while PPBS measures blood sugar two hours after eating a meal." },
    { question: "Can a Blood Sugar Test diagnose diabetes?", answer: "Yes. Blood Sugar Tests help diagnose diabetes and prediabetes. Your doctor may also recommend an HbA1c Test for confirmation." },
    { question: "How often should I check my blood sugar?", answer: "The frequency depends on your health condition and your doctor's advice. People with diabetes often require regular monitoring." },
    { question: "Can I book a Blood Sugar Test at home in Panchkula?", answer: "Yes. Shyam Pathology Lab offers convenient home blood sample collection for Blood Sugar Testing in Panchkula and nearby areas." }
  ],
  cta: {
    title: "Book Your Blood Sugar Test Today",
    description: "Get accurate Blood Sugar Testing with home sample collection, fast reporting, and trusted diagnostic services from Shyam Pathology Lab.",
    buttonText: "Book Blood Sugar Test",
    whatsappText: "Hi, I want to book a blood sugar test.",
    features: ["Experienced Lab", "100+ Tests", "Fast Reports", "Experienced Staff"]
  }
},
{
  id: 13,
  slug: "urine-routine-test-guide",
  title: "Urine Routine Test Guide: Normal Range, UTI, Kidney Health, Results & When You Need One",
  excerpt: "Learn everything about Urine Routine & Microscopy Tests including normal values, UTI symptoms, kidney disease, diabetes screening, urine test preparation, and urine testing in Panchkula.",
  category: "Health Tips",
  author: {
    name: SITE_CONFIG.fullName,
    image: SITE_CONFIG.logo,
  },
  publishedAt: "July 15, 2026",
  readingTime: "8 min read",
  coverImage: "/blogs/urine-routine-test.webp",
  featured: false,
  relatedPackages: [],
  relatedTests: [], // ✅ emptied per request
  seo: {
    title: "Urine Routine Test Guide: Normal Range, UTI Detection & Kidney Health",
    description: "Know urine routine test normal values, urine infection symptoms, kidney disease indicators, diabetes screening, home sample collection, and urine testing in Panchkula.",
    keywords: [
      "Urine Routine Test", "Urine Examination", "Urine Microscopy Test", "Routine Urine Test",
      "Urine Test for UTI", "Urine Test Normal Range", "Urine Protein Test", "Urine Sugar Test",
      "Urine Test in Panchkula", "Urine Test Near Me", "Kidney Urine Test", "Urine Infection Test"
    ]
  },
  quickInfo: {
    "What You Will Learn": "Urine Routine Test",
    sample: "Urine",
    fasting: "Not Required",
    reportTime: "Same Day",
    homeCollection: "Sample Can Be Collected at Home",
    recommendedFor: "Burning sensation while urinating, Frequent urination, Blood in urine, Cloudy urine, Lower abdominal pain, Back pain, Fever with urinary symptoms, Foamy urine",
    booking: "Online / Phone / WhatsApp"
  },
  tags: [
    "Urine Routine Test", "Urine Test", "Urine Microscopy", "Routine Urine Examination", "UTI Test",
    "Urine Infection Test", "Kidney Health", "Kidney Disease Test", "Urine Sugar Test",
    "Protein in Urine", "Blood in Urine", "Urine Test Near Me", "Urine Test in Panchkula",
    "Urine Test in Chandigarh", "Urine Test in Punjab", "Diagnostic Lab", "Pathology Lab",
    "Health Checkup", "Home Sample Collection", "Same Day Report"
  ],
  content: [
    { type: "heading", level: 2, text: "What Is a Urine Routine Test?" },
    { type: "paragraph", text: "A Urine Routine Test, also called a Routine Urine Examination (R/E) or Urinalysis, is one of the most commonly prescribed laboratory investigations." },
    { type: "paragraph", text: "It evaluates the physical appearance, chemical composition, and microscopic contents of urine to provide important information about your overall health." },
    { type: "paragraph", text: "Doctors commonly recommend this test to diagnose urinary tract infections (UTIs), kidney disorders, diabetes, dehydration, and several other medical conditions." },
    { type: "paragraph", text: "Since many diseases show early changes in urine, routine urine testing plays an important role in preventive healthcare." },
    { type: "heading", level: 2, text: "What Does a Urine Test Check?" },
    { type: "paragraph", text: "A Urine Routine Test evaluates multiple parameters to assess your urinary system and general health." },
    { type: "paragraph", text: "The examination typically includes:" },
    { type: "list", items: ["Color and Appearance", "Specific Gravity", "pH Level", "Protein", "Glucose (Sugar)", "Ketones", "Blood", "Bilirubin", "Nitrite", "Leukocyte Esterase", "Red Blood Cells (RBC)", "White Blood Cells (WBC)", "Epithelial Cells", "Casts", "Crystals", "Bacteria"] },
    { type: "paragraph", text: "Together, these findings help doctors identify infections, kidney disease, diabetes, dehydration, and other health conditions." },
    { type: "heading", level: 2, text: "Who Should Get a Urine Routine Test?" },
    { type: "paragraph", text: "Doctors may recommend a Urine Routine Test for individuals experiencing urinary symptoms or during routine health screening." },
    { type: "paragraph", text: "The test is commonly advised for:" },
    { type: "list", items: ["People with burning while urinating", "Frequent urination", "Blood in urine", "Lower abdominal pain", "Suspected urinary tract infection (UTI)", "Kidney disease evaluation", "Diabetes monitoring", "Pregnancy checkups", "Annual health checkups"] },
    { type: "paragraph", text: "Routine urine testing is often included in preventive health packages because it can detect several conditions before symptoms become severe." },
    { type: "heading", level: 2, text: "Common Symptoms That Need a Urine Test" },
    { type: "paragraph", text: "A Urine Routine Test may be recommended if you experience:" },
    { type: "list", items: ["Burning sensation while passing urine", "Frequent urge to urinate", "Blood in urine", "Cloudy or foul-smelling urine", "Lower abdominal pain", "Back or flank pain", "Fever with urinary symptoms", "Difficulty passing urine", "Swelling of legs or face", "Foamy urine"] },
    { type: "paragraph", text: "These symptoms may indicate urinary tract infections, kidney disorders, or other medical conditions requiring evaluation." },
    { type: "heading", level: 2, text: "Normal Urine Test Values" },
    { type: "paragraph", text: "Normal urine findings generally include:" },
    { type: "list", items: ["Color: Pale Yellow to Amber", "Appearance: Clear", "pH: 4.5–8.0", "Specific Gravity: 1.005–1.030", "Protein: Negative", "Glucose: Negative", "Ketones: Negative", "Blood: Negative", "Nitrite: Negative", "RBC: 0–2 /HPF", "WBC: 0–5 /HPF"] },
    { type: "paragraph", text: "Normal ranges may vary slightly between laboratories. Your doctor will interpret the report along with your symptoms and medical history." },
    { type: "heading", level: 2, text: "Understanding Urine Test Results" },
    { type: "paragraph", text: "A Urine Routine Test provides valuable information about your health." },
    { type: "paragraph", text: "Some common findings include:" },
    { type: "list", items: ["Protein in urine may indicate kidney disease.", "Glucose in urine can suggest diabetes.", "Increased WBCs or bacteria often indicate a urinary tract infection.", "Blood in urine may occur due to infection, kidney stones, or other medical conditions.", "Ketones may appear in uncontrolled diabetes or prolonged fasting.", "Crystals may suggest an increased risk of kidney stones."] },
    { type: "paragraph", text: "Abnormal findings should always be interpreted by a qualified healthcare professional." },
    { type: "heading", level: 2, text: "Benefits of Regular Urine Testing" },
    { type: "paragraph", text: "Routine urine testing offers several important health benefits." },
    { type: "paragraph", text: "These include:" },
    { type: "list", items: ["Early detection of urinary tract infections", "Identification of kidney disorders", "Screening for diabetes", "Monitoring kidney function", "Detecting dehydration", "Supporting routine health checkups", "Monitoring ongoing medical treatment"] },
    { type: "paragraph", text: "Because the test is simple, affordable, and non-invasive, it is one of the most frequently recommended laboratory investigations." },
    { type: "heading", level: 2, text: "How To Prepare For A Urine Test" },
    { type: "paragraph", text: "A Urine Routine Test usually requires very little preparation." },
    { type: "paragraph", text: "For the most accurate results:" },
    { type: "list", items: ["Collect a clean midstream urine sample whenever possible.", "Use a sterile urine container.", "Avoid contamination of the sample.", "Inform your doctor about any medications you are taking.", "Drink adequate water unless your doctor advises otherwise."] },
    { type: "paragraph", text: "In most cases, fasting is not required before a routine urine examination." },
    { type: "heading", level: 2, text: "Urine Testing in Panchkula" },
    { type: "paragraph", text: "Shyam Pathology Lab provides accurate Urine Routine & Microscopy Testing in Panchkula with reliable reporting and convenient home sample collection support." },
    { type: "paragraph", text: "Patients from Panchkula, Chandigarh, Mohali, Zirakpur, Sector 21 Panchkula, Karimpur, and nearby areas can easily book urine testing." },
    { type: "paragraph", text: "Our laboratory offers:" },
    { type: "list", items: ["Urine Routine Examination", "Urine Microscopy", "Urine Sugar Test", "Urine Protein Test", "Urine Pregnancy Test", "Urine Culture (when advised)", "Same-Day Reporting for most tests"] },
    { type: "paragraph", text: "Early diagnosis helps doctors identify infections, kidney disorders, and metabolic diseases before serious complications develop." }
    // ✅ interlinking block removed
  ],
  faq: [
    { question: "Is fasting required for a Urine Routine Test?", answer: "No. Fasting is generally not required before a Urine Routine Test." },
    { question: "Can a Urine Test detect a urinary tract infection (UTI)?", answer: "Yes. A Urine Routine Test can detect signs of infection such as increased white blood cells, bacteria, nitrites, and leukocyte esterase. Your doctor may recommend a urine culture for confirmation." },
    { question: "What does protein in urine indicate?", answer: "Protein in urine may indicate kidney disease, diabetes, high blood pressure, or other medical conditions that require further evaluation." },
    { question: "Can a Urine Test detect diabetes?", answer: "Yes. Glucose or ketones found in urine may suggest diabetes, although additional blood tests are usually required for confirmation." },
    { question: "How long does a Urine Routine Test take?", answer: "Providing the urine sample takes only a few minutes, and most reports are available on the same day." },
    { question: "Can I collect my urine sample at home?", answer: "Yes. You can collect the sample at home using a clean sterile container and submit it to the laboratory according to the instructions provided." }
  ],
  cta: {
    title: "Book Your Urine Routine Test Today",
    description: "Get accurate Urine Routine & Microscopy Testing with reliable reports, convenient sample collection, and trusted diagnostic services from Shyam Pathology Lab.",
    buttonText: "Book Urine Test",
    whatsappText: "Hi, I want to book a urine test.",
    features: ["Experienced Lab", "100+ Tests", "Fast Reports", "Experienced Staff"]
  }
},
{
  id: 14,
  slug: "why-is-my-hemoglobin-low",
  title: "Why Is My Hemoglobin Low? Causes, Symptoms, Diagnosis & Treatment Guide",
  excerpt: "Learn why hemoglobin becomes low, common symptoms of anemia, normal hemoglobin levels, diagnosis, treatment options, and when you should get a CBC blood test.",
  category: "Health Tips",
  author: {
    name: SITE_CONFIG.fullName,
    image: SITE_CONFIG.logo,
  },
  publishedAt: "July 20, 2026",
  readingTime: "10 min read",
  coverImage: "/blogs/low-hemoglobin-guide.webp",
  featured: false,
  relatedPackages: [],
  relatedTests: [], // ✅ emptied per request
  seo: {
    title: "Why Is My Hemoglobin Low? Causes, Symptoms & Treatment",
    description: "Know the common causes of low hemoglobin including iron deficiency, vitamin deficiency, blood loss, kidney disease, symptoms, diagnosis, treatment, and CBC testing.",
    keywords: [
      "Low Hemoglobin", "Hemoglobin Low", "Low Hb", "Anemia", "Iron Deficiency Anemia",
      "CBC Test", "Low Hemoglobin Symptoms", "Hemoglobin Normal Range", "Low Hemoglobin Causes",
      "Blood Test for Anemia", "Low Hb Treatment", "CBC Test in Panchkula"
    ]
  },
  quickInfo: {
    "What You Will Learn": "Low Hemoglobin",
    sample: "Blood",
    fasting: "Not Required",
    reportTime: "Same Day",
    homeCollection: "Available",
    recommendedFor: "Persistent fatigue, Weakness, Pale skin, Shortness of breath, Dizziness, Headache, Rapid heartbeat, Cold hands and feet",
    booking: "Online / Phone / WhatsApp"
  },
  tags: [
    "Low Hemoglobin", "Hemoglobin", "Low Hb", "Anemia", "Iron Deficiency", "Iron Deficiency Anemia",
    "CBC Test", "Blood Test", "Hemoglobin Test", "Anemia Symptoms", "Fatigue", "Iron Rich Foods",
    "Diagnostic Lab", "Pathology Lab", "CBC Test in Panchkula", "Blood Test Near Me",
    "Home Sample Collection", "Health Checkup", "Same Day Report", "Blood Disorders"
  ],
  content: [
    { type: "heading", level: 2, text: "What Is Hemoglobin?" },
    { type: "paragraph", text: "Hemoglobin is an iron-rich protein found inside red blood cells (RBCs). Its primary function is to carry oxygen from your lungs to every organ, muscle, and tissue in your body while transporting carbon dioxide back to the lungs to be exhaled." },
    { type: "paragraph", text: "Without adequate hemoglobin, your body's cells cannot receive enough oxygen to produce energy efficiently. As a result, people with low hemoglobin often experience fatigue, weakness, dizziness, and reduced physical performance." },
    { type: "paragraph", text: "Doctors usually measure hemoglobin as part of a Complete Blood Count (CBC), one of the most commonly prescribed blood tests. The result helps evaluate your overall health and detect anemia, nutritional deficiencies, blood disorders, chronic diseases, and many other medical conditions." },
    { type: "paragraph", text: "Maintaining healthy hemoglobin levels is essential because oxygen is required for nearly every function in the human body. Even a mild decrease may affect daily activities, while severe anemia can become life-threatening if left untreated." },
    { type: "heading", level: 2, text: "What Is Considered Low Hemoglobin?" },
    { type: "paragraph", text: "Normal hemoglobin levels vary depending on age, sex, pregnancy, and overall health. Healthcare providers compare your results with standard reference ranges before determining whether your hemoglobin level is low." },
    { type: "paragraph", text: "Generally, hemoglobin below 13.5 g/dL in adult men and below 12 g/dL in adult women is considered low. During pregnancy, slightly lower values may be expected because of normal physiological changes, although levels below 11 g/dL usually require medical evaluation." },
    { type: "paragraph", text: "Children have different normal ranges depending on their age, so pediatric results should always be interpreted using age-specific reference values." },
    { type: "paragraph", text: "A mildly reduced hemoglobin level may not produce noticeable symptoms, but moderate or severe anemia can significantly reduce oxygen delivery throughout the body. This often leads to tiredness, pale skin, breathlessness, dizziness, headaches, and reduced exercise tolerance." },
    { type: "paragraph", text: "Because low hemoglobin is a sign rather than a disease, doctors recommend identifying its underlying cause instead of treating the number alone." },
    { type: "heading", level: 2, text: "Common Causes of Low Hemoglobin" },
    { type: "paragraph", text: "Low hemoglobin is not a disease itself—it is usually a sign of an underlying health condition. Identifying the cause is essential because treatment depends on why your hemoglobin level has decreased." },
    { type: "paragraph", text: "The most common cause is iron deficiency. Iron is required by the body to produce hemoglobin. A diet low in iron, poor absorption of iron from food, or increased iron requirements during pregnancy can all lead to iron deficiency anemia." },
    { type: "paragraph", text: "Vitamin deficiencies are another frequent cause. Low levels of Vitamin B12 or folate reduce the body's ability to produce healthy red blood cells, resulting in decreased hemoglobin levels." },
    { type: "paragraph", text: "Blood loss is also a major contributor. Heavy menstrual bleeding, stomach ulcers, piles (hemorrhoids), injuries, surgeries, or internal bleeding can gradually lower hemoglobin without obvious symptoms." },
    { type: "paragraph", text: "Chronic medical conditions such as kidney disease, liver disease, cancer, rheumatoid arthritis, and chronic infections may reduce red blood cell production over time, leading to anemia." },
    { type: "paragraph", text: "Certain inherited blood disorders including thalassemia and sickle cell disease affect the structure or production of hemoglobin and often require lifelong medical management." },
    { type: "paragraph", text: "Bone marrow disorders, where the body cannot produce enough healthy blood cells, may also cause low hemoglobin, although these conditions are less common." },
    { type: "paragraph", text: "Some medications, chemotherapy treatments, and autoimmune diseases can also interfere with red blood cell production or increase their destruction." },
    { type: "paragraph", text: "Because there are many possible causes, doctors usually recommend additional investigations such as a Complete Blood Count (CBC), Iron Studies, Serum Ferritin, Vitamin B12 Test, Folate Test, Kidney Function Test (KFT), Liver Function Test (LFT), or other specialized investigations to determine the exact reason for low hemoglobin." },
    { type: "heading", level: 2, text: "Symptoms of Low Hemoglobin" },
    { type: "paragraph", text: "The symptoms of low hemoglobin often develop gradually, especially when anemia progresses slowly. In mild cases, many people may not notice any symptoms at all. As hemoglobin levels continue to decrease, the body's organs and tissues receive less oxygen, leading to noticeable health problems." },
    { type: "paragraph", text: "One of the earliest and most common symptoms is persistent fatigue. People with low hemoglobin often feel tired even after getting adequate rest because their muscles and organs are not receiving enough oxygen to function efficiently." },
    { type: "paragraph", text: "Weakness and reduced physical stamina are also common. Simple activities such as climbing stairs, walking long distances, or carrying groceries may become exhausting." },
    { type: "paragraph", text: "Many individuals experience shortness of breath, particularly during exercise or physical activity. In more severe cases, breathing difficulty may occur even while resting." },
    { type: "paragraph", text: "Pale skin, pale lips, or pale nail beds are classic signs of anemia. Reduced hemoglobin gives the skin less of its normal pink or red appearance." },
    { type: "paragraph", text: "Other common symptoms include dizziness, lightheadedness, headaches, cold hands and feet, rapid heartbeat (palpitations), difficulty concentrating, and reduced work performance." },
    { type: "paragraph", text: "Iron deficiency anemia may also cause brittle nails, hair loss, sore tongue, cracks at the corners of the mouth, and unusual cravings for ice or clay (pica)." },
    { type: "paragraph", text: "If these symptoms persist, a Complete Blood Count (CBC) should be performed to evaluate your hemoglobin level and determine whether additional testing is required." },
    { type: "heading", level: 2, text: "How Is Low Hemoglobin Diagnosed?" },
    { type: "paragraph", text: "Diagnosing low hemoglobin begins with understanding your symptoms, medical history, dietary habits, medications, and any recent illnesses or blood loss. A healthcare professional may also perform a physical examination to look for signs such as pale skin, rapid heartbeat, or other indicators of anemia." },
    { type: "paragraph", text: "The primary test used to diagnose low hemoglobin is the Complete Blood Count (CBC). This blood test measures your hemoglobin level along with red blood cell count (RBC), hematocrit (HCT), mean corpuscular volume (MCV), mean corpuscular hemoglobin (MCH), and several other blood parameters. These values help determine whether anemia is present and often provide clues about its underlying cause." },
    { type: "paragraph", text: "If the CBC confirms low hemoglobin, your doctor may recommend additional investigations including Iron Studies, Serum Ferritin, Vitamin B12 Test, Folate Test, Kidney Function Test (KFT), Liver Function Test (LFT), Peripheral Blood Smear, Reticulocyte Count, Stool Occult Blood Test, or Hemoglobin Electrophoresis depending on the suspected cause." },
    { type: "paragraph", text: "Doctors interpret your hemoglobin level together with other laboratory findings instead of relying on a single number. This comprehensive evaluation helps identify the exact cause and guides appropriate treatment." },
    { type: "heading", level: 2, text: "Treatment for Low Hemoglobin" },
    { type: "paragraph", text: "Treatment for low hemoglobin depends entirely on its underlying cause. Since low hemoglobin is a sign rather than a disease itself, identifying the reason behind it is the first and most important step." },
    { type: "paragraph", text: "If iron deficiency is responsible, doctors usually recommend iron-rich foods along with oral iron supplements. Foods such as spinach, lentils, beans, jaggery, dates, red meat, fish, eggs, and iron-fortified cereals can help improve iron intake. Vitamin C-rich foods like oranges, lemons, guava, and amla also improve iron absorption." },
    { type: "paragraph", text: "When Vitamin B12 or folate deficiency is diagnosed, supplementation and dietary changes are recommended. Foods including milk, eggs, fish, meat, leafy green vegetables, and fortified cereals help restore healthy red blood cell production." },
    { type: "paragraph", text: "If chronic diseases such as kidney disease, liver disease, inflammatory disorders, or cancer are causing anemia, treatment focuses on managing the underlying condition while monitoring hemoglobin levels regularly." },
    { type: "paragraph", text: "Patients experiencing significant blood loss due to heavy menstrual bleeding, stomach ulcers, surgery, or internal bleeding may require treatment to stop the bleeding before hemoglobin levels can recover." },
    { type: "paragraph", text: "In severe anemia, hospitalization, intravenous iron therapy, erythropoietin injections, or blood transfusions may be necessary depending on the patient's condition and the cause of anemia." },
    { type: "paragraph", text: "Self-medicating with iron supplements without proper diagnosis is not recommended. Excess iron can accumulate in the body and may become harmful. Always consult a qualified healthcare professional before starting treatment." },
    { type: "heading", level: 2, text: "Foods That Increase Hemoglobin" },
    { type: "paragraph", text: "Although diet alone cannot treat every type of anemia, consuming nutrient-rich foods plays an important role in maintaining healthy hemoglobin levels and supporting red blood cell production." },
    { type: "paragraph", text: "Iron-rich foods include spinach, fenugreek leaves, beetroot, lentils, chickpeas, kidney beans, soybeans, pumpkin seeds, sesame seeds, jaggery, raisins, dates, lean red meat, chicken liver, seafood, and eggs." },
    { type: "paragraph", text: "Vitamin B12 is found mainly in animal-based foods such as milk, yogurt, cheese, eggs, fish, chicken, and meat. Individuals following a vegetarian or vegan diet may require fortified foods or supplements if recommended by their doctor." },
    { type: "paragraph", text: "Folate-rich foods include green leafy vegetables, broccoli, asparagus, avocados, citrus fruits, peas, beans, and whole grains." },
    { type: "paragraph", text: "Vitamin C improves iron absorption, so combining iron-rich foods with oranges, lemons, amla, kiwi, strawberries, tomatoes, or bell peppers can increase the body's ability to absorb dietary iron." },
    { type: "paragraph", text: "At the same time, it is advisable to avoid drinking tea or coffee immediately before or after iron-rich meals because they can reduce iron absorption." },
    { type: "paragraph", text: "A balanced diet combined with appropriate medical treatment offers the best chance of restoring normal hemoglobin levels and preventing future anemia." },
    { type: "heading", level: 2, text: "When Should You See a Doctor?" },
    { type: "paragraph", text: "Occasional tiredness does not always indicate anemia, but persistent symptoms should never be ignored. If fatigue, weakness, dizziness, pale skin, or shortness of breath continue for several weeks, medical evaluation is recommended." },
    { type: "paragraph", text: "You should seek medical attention immediately if you experience chest pain, severe breathlessness, fainting, rapid heartbeat, blood in stool or urine, black-colored stools, heavy unexplained bleeding, or sudden worsening of symptoms." },
    { type: "paragraph", text: "Pregnant women, older adults, children, and individuals with chronic illnesses should not ignore even mild symptoms because anemia can affect growth, pregnancy outcomes, heart health, and overall quality of life." },
    { type: "paragraph", text: "People with a family history of blood disorders such as thalassemia or sickle cell disease should also undergo appropriate screening if advised by their healthcare provider." },
    { type: "paragraph", text: "Early diagnosis through a Complete Blood Count (CBC) and related laboratory investigations allows doctors to identify the cause quickly and begin effective treatment before complications develop." },
    { type: "heading", level: 2, text: "Hemoglobin Testing in Panchkula" },
    { type: "paragraph", text: "Shyam Pathology Lab offers accurate hemoglobin testing and Complete Blood Count (CBC) investigations in Panchkula with affordable pricing, experienced laboratory professionals, and convenient home sample collection services." },
    { type: "paragraph", text: "Our CBC test measures hemoglobin along with several important blood parameters including red blood cell count, white blood cell count, platelet count, hematocrit, MCV, MCH, and MCHC, providing a comprehensive overview of your blood health." },
    { type: "paragraph", text: "Patients from Panchkula, Chandigarh, Mohali, Zirakpur, Pinjore, Kalka, and nearby areas can easily book their blood tests online or schedule doorstep sample collection." },
    { type: "paragraph", text: "If your CBC indicates low hemoglobin, additional investigations such as Iron Studies, Serum Ferritin, Vitamin B12 Test, Folate Test, Kidney Function Test (KFT), and Liver Function Test (LFT) may be recommended to determine the underlying cause." },
    { type: "paragraph", text: "Early diagnosis helps prevent complications and allows timely treatment for anemia and other blood disorders." }
    // ✅ interlinking block removed
  ],
  faq: [
    { question: "What is considered a low hemoglobin level?", answer: "Generally, hemoglobin below 13.5 g/dL in adult men and below 12 g/dL in adult women is considered low. Normal ranges may vary slightly between laboratories." },
    { question: "What is the most common cause of low hemoglobin?", answer: "Iron deficiency is the most common cause of low hemoglobin worldwide. Other causes include vitamin B12 deficiency, folate deficiency, blood loss, chronic diseases, and inherited blood disorders." },
    { question: "Which test is used to check hemoglobin?", answer: "A Complete Blood Count (CBC) is the primary blood test used to measure hemoglobin levels and evaluate overall blood health." },
    { question: "Can low hemoglobin be treated naturally?", answer: "Mild iron deficiency may improve with an iron-rich diet, but treatment depends on the underlying cause. Medical evaluation is necessary before starting supplements." },
    { question: "What foods help increase hemoglobin?", answer: "Iron-rich foods such as spinach, lentils, beans, jaggery, dates, red meat, eggs, fish, and foods rich in Vitamin C can help support healthy hemoglobin production." },
    { question: "Is low hemoglobin dangerous?", answer: "Mild anemia may cause few symptoms, but severe or untreated low hemoglobin can reduce oxygen delivery to organs and lead to serious health complications." }
  ],
  cta: {
    title: "Book Your CBC Test to Check Hemoglobin Levels",
    description: "Get accurate hemoglobin testing with a Complete Blood Count (CBC), fast reports, affordable pricing, and convenient home sample collection from Shyam Pathology Lab.",
    buttonText: "Book CBC Test",
    whatsappText: "Hi, I want to book a cbc test.",
    features: ["Experienced Lab", "100+ Tests", "Fast Reports", "Experienced Staff"]
  }
},
{
  id: 15,
  slug: "what-causes-high-cholesterol",
  title: "What Causes High Cholesterol? Symptoms, Risk Factors, Prevention & Lipid Profile Guide",
  excerpt: "Learn what causes high cholesterol, its symptoms, risk factors, treatment options, normal cholesterol levels, and when you should get a Lipid Profile Test.",
  category: "Health Tips",
  author: {
    name: SITE_CONFIG.fullName,
    image: SITE_CONFIG.logo,
  },
  publishedAt: "July 21, 2026",
  readingTime: "9 min read",
  coverImage: "/blogs/high-cholesterol-guide.webp",
  featured: false,
  relatedPackages: [],
  relatedTests: [], // ✅ emptied per request
  seo: {
    title: "What Causes High Cholesterol? | Symptoms, Prevention & Lipid Profile",
    description: "Know the causes of high cholesterol, LDL, HDL, triglycerides, symptoms, prevention, and when to get a Lipid Profile Test.",
    keywords: [
      "What Causes High Cholesterol", "High Cholesterol", "High LDL", "Lipid Profile Test",
      "High Cholesterol Symptoms", "Causes of High Cholesterol", "Normal Cholesterol Levels",
      "High Triglycerides", "HDL Cholesterol", "LDL Cholesterol", "Heart Disease Risk",
      "Cholesterol Test", "Lipid Profile Test in Panchkula"
    ]
  },
  quickInfo: {
    "What You Will Learn": "What Causes High Cholesterol",
    sample: "Blood",
    fasting: "9-12 Hours (if advised)",
    reportTime: "Same Day",
    homeCollection: "Available",
    recommendedFor: "Usually no symptoms, Chest pain, Heart attack, Stroke, High blood pressure, Obesity, Diabetes, Family history of heart disease",
    booking: "Online / Phone / WhatsApp"
  },
  tags: [
    "High Cholesterol", "LDL Cholesterol", "HDL Cholesterol", "Triglycerides", "Lipid Profile",
    "Heart Health", "Heart Disease", "Cholesterol Test", "Lipid Profile Test", "Preventive Health",
    "Cardiovascular Health", "Blood Test", "Diagnostic Lab", "Health Checkup", "Panchkula", "Chandigarh", "Mohali"
  ],
  content: [
    { type: "heading", level: 2, text: "What Is High Cholesterol?" },
    { type: "paragraph", text: "High cholesterol is a condition in which there is an excessive amount of cholesterol circulating in your blood. Cholesterol is a waxy, fat-like substance that your body needs to build healthy cells, produce hormones, and make vitamin D. However, when cholesterol levels become too high, they can accumulate inside the walls of your arteries." },
    { type: "paragraph", text: "Over time, these deposits narrow the arteries and reduce blood flow to vital organs such as the heart and brain. This significantly increases the risk of heart attack, stroke, and other cardiovascular diseases." },
    { type: "paragraph", text: "One of the biggest concerns is that high cholesterol usually develops silently. Most people experience no symptoms until serious complications occur, making regular screening through a Lipid Profile Test extremely important." },
    { type: "heading", level: 2, text: "What Causes High Cholesterol?" },
    { type: "paragraph", text: "Several factors can contribute to high cholesterol levels. Poor dietary habits are among the leading causes. Foods rich in saturated fats, trans fats, processed meats, fried foods, bakery products, and sugary snacks can increase LDL (\"bad\") cholesterol while lowering HDL (\"good\") cholesterol." },
    { type: "paragraph", text: "A sedentary lifestyle also plays a major role. Lack of physical activity reduces the body's ability to remove excess cholesterol from the bloodstream. Obesity further increases LDL cholesterol and triglyceride levels while lowering protective HDL cholesterol." },
    { type: "paragraph", text: "Medical conditions such as diabetes, hypothyroidism, kidney disease, liver disorders, and polycystic ovary syndrome (PCOS) may also contribute to abnormal cholesterol levels. Smoking damages blood vessels and lowers HDL cholesterol, while excessive alcohol consumption can increase triglycerides." },
    { type: "paragraph", text: "In some individuals, genetics are responsible. Familial Hypercholesterolemia is an inherited condition that causes very high LDL cholesterol even in young adults." },
    { type: "heading", level: 2, text: "Who Is At Risk of High Cholesterol?" },
    { type: "paragraph", text: "Anyone can develop high cholesterol, but certain individuals have a greater risk." },
    { type: "paragraph", text: "People over the age of 40, individuals who are overweight or obese, smokers, people with diabetes, high blood pressure, hypothyroidism, chronic kidney disease, or a family history of heart disease should undergo regular cholesterol screening." },
    { type: "paragraph", text: "Individuals who consume a diet high in processed foods, fast food, butter, ghee, red meat, sugary drinks, and refined carbohydrates are also more likely to develop elevated cholesterol levels." },
    { type: "paragraph", text: "Even healthy-looking individuals can have high cholesterol because it often has no visible symptoms." },
    { type: "heading", level: 2, text: "Symptoms of High Cholesterol" },
    { type: "paragraph", text: "High cholesterol itself rarely produces symptoms. This is why it is often referred to as a \"silent condition.\"" },
    { type: "paragraph", text: "Many people only discover they have high cholesterol after undergoing routine blood testing or after experiencing complications such as chest pain, heart attack, or stroke." },
    { type: "paragraph", text: "Some warning signs associated with advanced cardiovascular disease include chest discomfort, shortness of breath, pain while walking, numbness in limbs, dizziness, and fatigue. However, these symptoms are caused by reduced blood flow rather than cholesterol itself." },
    { type: "paragraph", text: "Regular Lipid Profile testing is the only reliable way to detect high cholesterol before complications develop." },
    { type: "heading", level: 2, text: "Normal Cholesterol Levels" },
    { type: "paragraph", text: "Doctors evaluate cholesterol using a Lipid Profile Test, which measures Total Cholesterol, LDL Cholesterol, HDL Cholesterol, and Triglycerides." },
    { type: "paragraph", text: "General target values include:" },
    { type: "list", items: ["Total Cholesterol: Less than 200 mg/dL", "LDL Cholesterol: Less than 100 mg/dL", "HDL Cholesterol: Above 40 mg/dL in men and above 50 mg/dL in women", "Triglycerides: Less than 150 mg/dL"] },
    { type: "paragraph", text: "Individuals with diabetes, hypertension, previous heart attack, or kidney disease may require even lower LDL cholesterol targets as recommended by their physician." },
    { type: "heading", level: 2, text: "How Is High Cholesterol Diagnosed?" },
    { type: "paragraph", text: "High cholesterol is diagnosed through a simple blood test called a Lipid Profile or Lipid Panel. This test measures the different types of cholesterol and fats circulating in your blood." },
    { type: "paragraph", text: "A standard Lipid Profile includes:" },
    { type: "list", items: ["Total Cholesterol", "LDL (Low-Density Lipoprotein) Cholesterol", "HDL (High-Density Lipoprotein) Cholesterol", "Triglycerides", "VLDL Cholesterol (in many laboratories)"] },
    { type: "paragraph", text: "Some healthcare providers may recommend fasting for 9–12 hours before the test, especially when triglyceride levels need to be measured accurately. However, non-fasting lipid profiles are also commonly used depending on your medical condition." },
    { type: "paragraph", text: "Doctors interpret the results along with your age, weight, blood pressure, diabetes status, smoking history, family history of heart disease, and overall cardiovascular risk. Based on these findings, they may recommend lifestyle modifications, repeat testing, or medication if necessary." },
    { type: "paragraph", text: "Regular cholesterol screening is recommended for adults over 20 years of age, particularly those with diabetes, obesity, hypertension, or a family history of cardiovascular disease." },
    { type: "heading", level: 2, text: "How To Reduce High Cholesterol Naturally" },
    { type: "paragraph", text: "Managing cholesterol often begins with healthy lifestyle changes. Even small improvements in daily habits can significantly lower LDL cholesterol and improve heart health." },
    { type: "paragraph", text: "Some of the most effective ways to reduce cholesterol include:" },
    { type: "list", items: ["Eat more fruits and vegetables every day.", "Increase your intake of oats, whole grains, beans, and fiber-rich foods.", "Replace butter and ghee with healthier oils in moderation.", "Choose lean proteins such as fish, chicken, pulses, and legumes.", "Reduce fried foods, bakery products, processed snacks, and sugary beverages.", "Exercise for at least 30 minutes on most days of the week.", "Maintain a healthy body weight.", "Quit smoking.", "Limit alcohol consumption.", "Control diabetes and high blood pressure."] },
    { type: "paragraph", text: "For individuals with significantly elevated cholesterol or existing heart disease, lifestyle changes alone may not be enough. Doctors may prescribe cholesterol-lowering medications such as statins along with regular follow-up testing." },
    { type: "paragraph", text: "The key is consistency. Healthy eating and regular physical activity provide long-term protection against heart attacks and strokes." },
    { type: "heading", level: 2, text: "Foods That Increase and Lower Cholesterol" },
    { type: "paragraph", text: "Diet plays one of the biggest roles in cholesterol management." },
    { type: "paragraph", text: "Foods that may increase LDL cholesterol include:" },
    { type: "list", items: ["Fried foods", "Fast food", "Processed meat", "Butter", "Ghee (in excess)", "Cheese", "Cream", "Bakery products", "Cakes and pastries", "Packaged snacks", "Sugary beverages", "Trans-fat-containing foods"] },
    { type: "paragraph", text: "Foods that help improve cholesterol levels include:" },
    { type: "list", items: ["Oats", "Whole grains", "Fruits", "Green leafy vegetables", "Nuts", "Seeds", "Beans", "Lentils", "Fatty fish rich in Omega-3", "Olive oil", "Avocados"] },
    { type: "paragraph", text: "Replacing unhealthy fats with healthier alternatives while increasing dietary fiber can substantially reduce cardiovascular risk over time." },
    { type: "heading", level: 2, text: "Cholesterol Testing in Panchkula" },
    { type: "paragraph", text: "Shyam Pathology Lab offers accurate Lipid Profile Testing in Panchkula with affordable pricing, experienced laboratory professionals, and convenient home sample collection services." },
    { type: "paragraph", text: "Patients from Panchkula, Chandigarh, Mohali, Zirakpur, Pinjore, Kalka, and surrounding areas can easily book cholesterol testing online or by phone." },
    { type: "paragraph", text: "Our laboratory provides:" },
    { type: "list", items: ["Complete Lipid Profile", "Total Cholesterol", "LDL Cholesterol", "HDL Cholesterol", "Triglycerides", "VLDL Cholesterol", "Preventive Heart Health Packages", "Home Blood Sample Collection", "Same-Day Reports for most routine investigations"] },
    { type: "paragraph", text: "Regular cholesterol testing allows early detection of cardiovascular risk factors, enabling timely lifestyle changes and medical treatment before serious complications occur." }
    // ✅ interlinking block removed
  ],
  faq: [
    { question: "What causes high cholesterol?", answer: "High cholesterol can result from unhealthy eating habits, obesity, lack of exercise, smoking, diabetes, hypothyroidism, kidney disease, excessive alcohol consumption, and inherited genetic conditions." },
    { question: "Can high cholesterol cause symptoms?", answer: "Usually no. High cholesterol rarely causes symptoms until it leads to complications such as heart attack or stroke. Regular Lipid Profile testing is the best way to detect it early." },
    { question: "How often should I check my cholesterol?", answer: "Healthy adults should generally have their cholesterol checked every 4–6 years, while people with diabetes, heart disease, high blood pressure, obesity, or a family history of heart disease may require more frequent testing as advised by their doctor." },
    { question: "Is fasting necessary before a Lipid Profile Test?", answer: "Many doctors recommend fasting for 9–12 hours before a Lipid Profile, especially when triglycerides are being measured. However, non-fasting lipid tests are also commonly performed depending on clinical requirements." },
    { question: "Can exercise lower cholesterol?", answer: "Yes. Regular physical activity helps lower LDL cholesterol, increase HDL cholesterol, reduce triglycerides, improve circulation, and decrease the risk of heart disease." },
    { question: "Which foods help lower cholesterol?", answer: "Oats, whole grains, fruits, vegetables, beans, lentils, nuts, seeds, olive oil, and fatty fish rich in Omega-3 fatty acids can help improve cholesterol levels when combined with a healthy lifestyle." }
  ],
  cta: {
    title: "Book Your Lipid Profile Test Today",
    description: "Monitor your cholesterol levels with an accurate Lipid Profile Test, experienced laboratory professionals, affordable pricing, home sample collection, and reliable reports from Shyam Pathology Lab.",
    buttonText: "Book Lipid Profile Test",
    whatsappText: "Hi, I want to book a lipid profile test.",
    features: ["Experienced Lab", "100+ Tests", "Fast Reports", "Experienced Staff"]
  }
}
];

/*
// Template for adding new blogs:
{
  id: 6,
  slug: "your-blog-slug",
  title: "...",
  excerpt: "...",
  category: "...",
  ...
}
*/
