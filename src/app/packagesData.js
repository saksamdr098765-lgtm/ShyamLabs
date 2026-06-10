 const packagesData = [
  {
    slug: "full-body-checkup",
    title: "Swasthya Mitra Premium Package",
    price: "₹1099",
    subtitle: "Advanced Health Screening",
    image: "/packages/full-body-package.jpg",
    description:
      "Comprehensive preventive health screening covering blood sugar, thyroid, liver, kidney, vitamins, and more.",

    includedTests: [
      "ESR Automated",
      "Blood Glucose Fasting",
      "Vitamin B12",
      "Vitamin D Total",
      "Liver Function Test",
      "Thyroid Profile (T3, T4, TSH)",
      "Iron Studies",
      "HbA1c",
      "Urine Routine & Microscopy",
      "Complete Blood Count",
      "KFT",
      "Lipid Profile",
    ],

    usagePoints: [
      "Annual preventive health checkup",
      "Early disease detection",
      "Overall wellness monitoring",
      "Suitable for adults and families",
    ],

    preparation: [
      "10-12 hours fasting required",
      "Drink only water before sample collection",
      "Avoid alcohol 24 hours before test",
      "Inform about ongoing medications",
    ],
  },

  {
    slug: "lipid-profile-test",
    title: "Lipid Profile Test",
    price: "₹600",
    subtitle: "Heart Health Screening",
    image: "/packages/lipid-profile.jpg",
    description:
      "Measures cholesterol and fat levels to assess cardiovascular health and heart disease risks.",

    includedTests: [
      "Total Cholesterol",
      "HDL Cholesterol Direct",
      "Triglycerides",
      "Non-HDL Cholesterol",
      "CHOL/HDL Ratio",
      "LDL Cholesterol",
      "VLDL Cholesterol",
      "LDL/HDL Ratio",
      "HDL/LDL Ratio",
    ],

    usagePoints: [
      "Heart disease risk assessment",
      "Monitor cholesterol levels",
      "Preventive cardiac screening",
      "Track treatment effectiveness",
    ],

    preparation: [
      "10-12 hours fasting required",
      "Water allowed",
      "Avoid fatty meals before test",
      "Avoid alcohol before testing",
    ],
  },

  {
    slug: "arthritis-checkup",
    title: "Arthritis Check-Up Package",
    price: "₹3300",
    subtitle: "Joint Pain & Inflammation Screening",
    image: "/packages/arthritis-package.jpg",
    description:
      "Comprehensive arthritis and inflammation screening package for joint pain evaluation.",

    includedTests: [
      "RA Factor Quantitative",
      "ANA By ELISA",
      "CRP",
      "Lipid Profile",
      "Liver Function Test",
      "Complete Blood Count",
      "Thyroid Profile",
      "Iron Studies",
      "HbA1c",
      "Kidney Function Test",
    ],

    usagePoints: [
      "Joint pain investigation",
      "Arthritis screening",
      "Inflammation detection",
      "Autoimmune disease assessment",
    ],

    preparation: [
      "No special preparation required",
      "Stay hydrated",
      "Inform about medications",
      "Follow doctor instructions",
    ],
  },

  {
    slug: "essential-health-tests",
    title: "Essential Health Tests",
    price: "₹250",
    subtitle: "Popular Individual Diagnostic Tests",
    image: "/packages/essential-tests.jpg",
    description:
      "Most commonly recommended diagnostic tests for routine health monitoring.",

    includedTests: [
      "Thyroid Test - ₹250",
      "HbA1c Test - ₹350",
      "Lipid Profile Test - ₹350",
    ],

    usagePoints: [
      "Routine health monitoring",
      "Diabetes management",
      "Thyroid evaluation",
      "Heart health screening",
    ],

    preparation: [
      "Follow test-specific instructions",
      "Fasting may be required",
      "Carry previous reports if available",
    ],
  },
  {
  slug: "senior-citizen-male-package",
  title: "Swasthya Mitra Senior Citizen Male Package",
  price: "₹1400",
  subtitle: "Comprehensive Senior Health Screening",
  image: "/packages/senior-citizen-male-package.jpg",
  description:
    "Advanced preventive health package designed for senior men, covering prostate health, arthritis screening, diabetes, thyroid, liver, kidney, vitamins, and cardiac risk assessment.",

  includedTests: [
    "RA Factor Quantitative",
    "ANA By ELISA",
    "ESR Automated",
    "Blood Glucose Fasting",
    "HsCRP",
    "PSA Total",
    "Vitamin B12",
    "Vitamin D Total",
    "Lipid Profile Advance",
    "Liver Function Test",
    "Thyroid Profile (T3, T4, TSH)",
    "Iron Studies",
    "HbA1c",
    "Urine Routine & Microscopy",
    "Complete Blood Count",
    "KFT",
  ],

  usagePoints: [
    "Senior citizen preventive health screening",
    "Prostate health assessment",
    "Arthritis and inflammation screening",
    "Diabetes and cardiac risk monitoring",
  ],

  preparation: [
    "10-12 hours fasting required",
    "Drink only water before sample collection",
    "Continue medications only as advised",
    "Carry previous reports if available",
  ],
},

{
  slug: "senior-citizen-female-package",
  title: "Swasthya Mitra Senior Citizen Female Package",
  price: "₹1400",
  subtitle: "Comprehensive Senior Women's Health Screening",
  image: "/packages/senior-citizen-female-package.jpg",
  description:
    "Comprehensive preventive health package for senior women covering ovarian cancer marker screening, arthritis, diabetes, thyroid, liver, kidney, vitamins, and overall wellness monitoring.",

  includedTests: [
    "RA Factor Quantitative",
    "ANA By ELISA",
    "CA-125",
    "ESR Automated",
    "Blood Glucose Fasting",
    "Vitamin B12",
    "Vitamin D Total",
    "Lipid Profile Advance",
    "Liver Function Test",
    "Thyroid Profile (T3, T4, TSH)",
    "Iron Studies",
    "HbA1c",
    "Urine Routine & Microscopy",
    "Complete Blood Count",
    "KFT",
  ],

  usagePoints: [
    "Senior women preventive screening",
    "Ovarian health assessment",
    "Arthritis and inflammation screening",
    "Diabetes and heart health monitoring",
  ],

  preparation: [
    "10-12 hours fasting required",
    "Drink only water before sample collection",
    "Avoid alcohol before testing",
    "Inform about ongoing medications",
  ],
},


{
  slug: "health-checkup-camp",
  title: "Health Checkup Camp",
  price: "₹1250",
  subtitle: "Weekend Preventive Health Screening",
  image: "/packages/health-checkup-camp.jpg",
  description:
    "Affordable preventive health screening camp offering comprehensive blood, diabetes, thyroid, liver, kidney, vitamin, and cardiac risk assessments.",

  includedTests: [
    "CBC",
    "HbA1c",
    "Iron Studies",
    "Fasting Glucose",
    "CRP Quantitative",
    "RA Factor Quantitative",
    "KFT",
    "LFT",
    "Lipid Profile",
    "Thyroid Profile (T3, T4, TSH)",
    "Urine Routine & Microscopy",
    "Vitamin B12",
    "Vitamin D",
  ],

  usagePoints: [
    "Regular preventive health checkup",
    "Family wellness screening",
    "Diabetes and heart risk monitoring",
    "Early disease detection",
  ],

  preparation: [
    "10-12 hours fasting recommended",
    "Drink water only before testing",
    "Carry previous reports if available",
    "Inform staff about medications",
  ],
},

// {
//   slug: "swasth-parivaar-health-camp",
//   title: "Swasth Parivaar Health Camp",
//   price: "Up to 40% Off",
//   subtitle: "Family Health Screening Program",
//   image: "/packages/swasth-parivaar-health-camp.jpg",
//   description:
//     "Family-focused health camp offering blood tests, full body checkups, doctor consultation, and home sample collection services.",

//   includedTests: [
//     "Blood Tests",
//     "Full Body Checkup",
//     "Doctor Consultation",
//     "Preventive Screening",
//   ],

//   usagePoints: [
//     "Family wellness assessment",
//     "Annual preventive screening",
//     "Doctor consultation support",
//     "Convenient home sample collection",
//   ],

//   preparation: [
//     "Preparation depends on selected tests",
//     "Fasting may be required",
//     "Stay hydrated",
//     "Carry previous medical reports",
//   ],
// },
{
  slug: "fever-panel-basic",
  title: "Fever Panel Basic",
  price: "₹500",
  subtitle: "Basic Fever Investigation Package",
  image: "/packages/fever-panel-basic.jpg",
  description:
    "Essential fever screening package to help identify common bacterial and infectious causes of fever.",

  includedTests: [
    "Culture & Sensitivity (Aerobic Bacteria)",
    "Urine Routine & Microscopy",
    "ESR Automated",
    "Malarial Antigen",
    "Vivax & Falciparum",
    "SGOT/AST, SGPT/ALT",
    "Typhi Dot IgM",
    "Complete Blood Count",
  ],

  usagePoints: [
    "Fever diagnosis",
    "Malaria screening",
    "Typhoid screening",
    "Infection detection",
  ],

  preparation: [
    "No fasting required",
    "Stay hydrated",
    "Inform doctor about symptoms",
    "Follow collection instructions",
  ],
},

{
  slug: "fever-panel-advance",
  title: "Fever Panel Advance",
  price: "₹1100",
  subtitle: "Advanced Fever Investigation Package",
  image: "/packages/fever-panel-advance.jpg",
  description:
    "Advanced fever diagnostic package covering malaria, typhoid, liver markers, infection screening, and blood analysis.",

  includedTests: [
    "ESR Automated",
    "Malarial Antigen",
    "Vivax & Falciparum",
    "SGOT/AST, SGPT/ALT",
    "Typhi Dot IgM",
    "Urine Routine & Microscopy Extended",
    "Complete Blood Count",
  ],

  usagePoints: [
    "Persistent fever evaluation",
    "Infection diagnosis",
    "Malaria & typhoid screening",
    "Comprehensive fever assessment",
  ],

  preparation: [
    "No fasting required",
    "Drink adequate water",
    "Share symptoms with healthcare provider",
    "Follow sample collection instructions",
  ],
},


{
  slug: "home-sample-collection",
  title: "Home Sample Collection",
  price: "₹0",
  subtitle: "Blood Sample Collection at Home",
  image: "/packages/home-sample-collection.jpg",
  description:
    "Professional doorstep blood sample collection by trained phlebotomists with safe and hygienic procedures.",

  includedTests: [
    "Blood Sample Collection",
    "Routine Diagnostic Tests",
    "Health Packages",
    "Preventive Screening Tests",
  ],

  usagePoints: [
    "Working professionals",
    "Senior citizens",
    "Regular health checkups",
    "Diabetes and thyroid monitoring",
  ],

  preparation: [
    "Book a convenient slot",
    "Follow fasting instructions if applicable",
    "Keep previous reports available",
    "Stay hydrated",
  ],
},


{
  slug: "swasthya-mitra-basic",
  title: "Swasthya Mitra Basic",
  price: "₹1000",
  subtitle: "Basic Full Body Health Checkup",
  image: "/packages/swasthya-mitra-basic.jpg",
  description:
    "Essential preventive health package covering blood sugar, thyroid, liver, kidney, lipid profile, and routine blood investigations.",

  includedTests: [
    "ESR Automated",
    "Blood Glucose Fasting",
    "Liver Function Test",
    "Thyroid Profile (T3, T4, TSH)",
    "Urine Routine & Microscopy Extended",
    "Complete Blood Count",
    "KFT With K",
    "Lipid Profile",
  ],

  usagePoints: [
    "Annual health screening",
    "Routine preventive checkup",
    "Basic wellness monitoring",
    "Family health assessment",
  ],

  preparation: [
    "10-12 hours fasting required",
    "Water allowed",
    "Avoid alcohol before testing",
    "Carry previous reports",
  ],
},

{
  slug: "swasthya-mitra-advance",
  title: "Swasthya Mitra Advance",
  price: "₹1300",
  subtitle: "Advanced Preventive Health Package",
  image: "/packages/swasthya-mitra-advance.jpg",
  description:
    "Enhanced health screening package including diabetes and iron deficiency assessment along with routine wellness markers.",

  includedTests: [
    "ESR Automated",
    "Blood Glucose Fasting",
    "Liver Function Test",
    "Thyroid Profile",
    "Urine Routine & Microscopy Extended",
    "Complete Blood Count",
    "KFT With K",
    "Lipid Profile",
    "Iron Studies",
    "HbA1c",
  ],

  usagePoints: [
    "Diabetes monitoring",
    "Iron deficiency screening",
    "Preventive healthcare",
    "Routine health assessment",
  ],

  preparation: [
    "10-12 hours fasting required",
    "Water allowed",
    "Avoid heavy meals before testing",
    "Inform about medications",
  ],
},

{
  slug: "swasthya-mitra-super",
  title: "Swasthya Mitra Super",
  price: "₹2300",
  subtitle: "Comprehensive Wellness Package",
  image: "/packages/swasthya-mitra-super.jpg",
  description:
    "Comprehensive preventive health package including advanced lipid profile, vitamins, inflammation markers, and arthritis screening.",

  includedTests: [
    "ESR Automated",
    "Blood Glucose Fasting",
    "Liver Function Test",
    "Thyroid Profile",
    "Urine Routine & Microscopy Extended",
    "Complete Blood Count",
    "KFT With K",
    "Lipid Profile",
    "Lipid Profile Advance",
    "Iron Studies",
    "HbA1c",
    "Vitamin B12",
    "Vitamin D Total",
    "RA Factor",
    "CRP",
  ],

  usagePoints: [
    "Comprehensive health evaluation",
    "Inflammation screening",
    "Vitamin deficiency assessment",
    "Cardiac risk monitoring",
  ],

  preparation: [
    "10-12 hours fasting required",
    "Water only before collection",
    "Avoid alcohol 24 hours prior",
    "Carry previous reports",
  ],
},
{
  slug: "jaanch-heart-screening",
  title: "Jaanch Heart Screening",
  price: "₹899",
  subtitle: "Basic Cardiac Risk Assessment",
  image: "/packages/jaanch-heart-screening.jpg",
  description:
    "Basic heart health screening package focused on cardiovascular risk markers, lipid profile, and inflammation indicators.",

  includedTests: [
    "hs-CRP",
    "Lipoprotein (a)",
    "Apo B / Apo A1 Ratio",
    "Apolipoprotein A1",
    "Apolipoprotein B",
    "Homocysteine",
    "Lipid Profile",
  ],

  usagePoints: [
    "Cardiac risk assessment",
    "Cholesterol monitoring",
    "Heart disease prevention",
    "Inflammation screening",
  ],

  preparation: [
    "10-12 hours fasting required",
    "Water allowed before test",
    "Avoid alcohol 24 hours prior",
    "Carry previous cardiac reports if available",
  ],
},
{
  slug: "jaanch-heart-advanced",
  title: "Jaanch Heart Advanced",
  price: "₹2199",
  subtitle: "Advanced Cardiac Evaluation",
  image: "/packages/jaanch-heart-advanced.jpg",
  description:
    "Advanced heart health package combining cardiac risk markers with diabetes, kidney, electrolyte, and blood health assessments.",

  includedTests: [
    "Cardiac Risk Markers",
    "Lipid Profile",
    "Troponin I (Heart Attack Risk)",
    "Kidney Profile",
    "Diabetes Profile",
    "CBC",
    "Serum Electrolytes",
  ],

  usagePoints: [
    "Advanced heart screening",
    "Early heart attack risk detection",
    "Kidney health assessment",
    "Diabetes-related cardiac monitoring",
  ],

  preparation: [
    "10-12 hours fasting required",
    "Water only before collection",
    "Avoid strenuous exercise before test",
    "Carry previous reports",
  ],
},
{
  slug: "jaanch-heart-comprehensive",
  title: "Jaanch Heart Comprehensive",
  price: "₹3499",
  subtitle: "Comprehensive Heart Health Package",
  image: "/packages/jaanch-heart-comprehensive.jpg",
  description:
    "Comprehensive cardiac wellness package including advanced cardiac biomarkers, liver profile, and heart failure risk markers.",

  includedTests: [
    "Cardiac Risk Markers",
    "Lipid Profile",
    "Troponin I",
    "Kidney Profile",
    "Diabetes Profile",
    "CBC",
    "Serum Electrolytes",
    "Lp-PLA2",
    "CPK",
    "NT-ProBNP",
    "Liver Profile",
  ],

  usagePoints: [
    "Comprehensive cardiovascular assessment",
    "Heart attack risk evaluation",
    "Heart failure risk screening",
    "Advanced lipid and inflammation monitoring",
  ],

  preparation: [
    "10-12 hours fasting required",
    "Water allowed before collection",
    "Avoid alcohol 24 hours prior",
    "Carry previous health records",
  ],
},
{
  slug: "aarogyam-a-pro",
  title: "Aarogyam A Pro",
  price: "₹999",
  subtitle: "Preventive Health Package",
  image: "/packages/aarogyam-a-pro.jpg",
  description:
    "Entry-level preventive health package covering thyroid, liver, kidney, diabetes, lipid profile, and vitamin screening.",

  includedTests: [
    "Thyroid Basic",
    "Lipid Basic",
    "Liver Basic",
    "Kidney Basic",
    "Lipid Advanced",
    "Liver Advanced",
    "Diabetes Profile",
    "CBC",
    "Vitamin B12",
    "Vitamin D",
    "Kidney Advanced",
  ],

  usagePoints: [
    "Annual health checkup",
    "Diabetes screening",
    "Thyroid assessment",
    "Vitamin deficiency detection",
  ],

  preparation: [
    "10-12 hours fasting required",
    "Water only before collection",
    "Avoid alcohol before test",
    "Carry previous reports",
  ],
},
{
  slug: "aarogyam-xl-pro",
  title: "Aarogyam XL Pro",
  price: "₹9999",
  subtitle: "Ultimate Preventive Health Package",
  image: "/packages/aarogyam-xl-pro.jpg",
  description:
    "Thyrocare's most comprehensive wellness package covering hormones, vitamins, allergy profile, toxic elements, cardiac risk, and advanced disease markers.",

  includedTests: [
    "CBC",
    "Diabetes Profile",
    "Thyroid Profile",
    "Lipid Profile",
    "Liver Function Test",
    "Kidney Function Test",
    "Cardiac Risk Markers",
    "Iron Profile",
    "Electrolytes",
    "Ferritin",
    "Folate",
    "Rheumatoid Factor",
    "ANA",
    "ACCP",
    "Lp-PLA2",
    "Insulin Fasting",
    "Blood Ketone",
    "Complete Vitamin Profile",
    "Allergy Phadiatop Adult",
    "Steroid Profile",
    "Toxic & Nutrient Elements",
  ],

  usagePoints: [
    "Executive health checkup",
    "Comprehensive preventive screening",
    "Lifestyle disease monitoring",
    "Hormonal and nutritional assessment",
  ],

  preparation: [
    "10-12 hours fasting required",
    "Water allowed before sample collection",
    "Avoid alcohol and heavy exercise before test",
    "Bring previous health records",
  ],
},
{
  slug: "aarogyam-tax-saver-basic-utsh",
  title: "Aarogyam Tax Saver Basic with UTSH",
  price: "₹2500",
  subtitle: "83 Tests Preventive Health Package",
  image: "/packages/aarogyam-tax-saver-basic-utsh.jpg",
  description:
    "Comprehensive preventive health screening package covering cardiac risk markers, diabetes, thyroid, liver, kidney, vitamin, and iron deficiency profiles.",

  includedTests: [
    "Complete Hemogram",
    "Cardiac Risk Markers",
    "Electrolytes",
    "Iron Deficiency Profile",
    "Lipid Profile",
    "Vitamin D",
    "Vitamin B12",
    "Diabetes Profile",
    "Pancreatic Profile",
    "Liver Function Test",
    "Renal Profile",
    "Thyroid Profile (UTSH)",
    "HbA1c",
    "Blood Glucose",
    "Kidney Function Test",
  ],

  usagePoints: [
    "Annual preventive health screening",
    "Cardiac risk assessment",
    "Diabetes monitoring",
    "Tax-saving health package",
  ],

  preparation: [
    "10-12 hours fasting required",
    "Water only before sample collection",
    "Avoid alcohol 24 hours prior",
    "Carry previous medical reports",
  ],
},
{
  slug: "paleo-profile-basic-new",
  title: "Paleo Profile Basic New",
  price: "₹1999",
  subtitle: "Comprehensive Metabolic & Wellness Package",
  image: "/packages/paleo-profile-basic-new.jpg",
  description:
    "Advanced wellness screening package covering diabetes, thyroid, kidney, liver, vitamin D, vitamin B12, lipid profile, iron studies, and urine analysis.",

  includedTests: [
    "HbA1c",
    "Blood Glucose",
    "TSH Ultrasensitive",
    "Vitamin D Total",
    "Vitamin B12",
    "Lipid Profile",
    "Iron Studies",
    "Magnesium",
    "Kidney Function Test",
    "Liver Function Test",
    "Complete Blood Count",
    "Urine Routine Examination",
    "Urinary Microalbumin",
    "Calcium",
    "Creatinine",
  ],

  usagePoints: [
    "Lifestyle disease screening",
    "Nutritional deficiency assessment",
    "Kidney and liver health monitoring",
    "Metabolic wellness evaluation",
  ],

  preparation: [
    "10-12 hours fasting required",
    "Water permitted during fasting",
    "Avoid heavy exercise before testing",
    "Carry previous reports if available",
  ],
},
{
  slug: "monsoon-gastro-infection-panel",
  title: "Monsoon Gastro Infection Panel",
  price: "₹1999",
  subtitle: "Seasonal Infection Screening Package",
  image: "/packages/monsoon-gastro-infection-panel.jpg",
  description:
    "Comprehensive screening package for common monsoon-related gastrointestinal and infectious diseases including hepatitis, typhoid, CBC, and liver function assessment.",

  includedTests: [
    "Hepatitis A Virus Antibody IgM",
    "Hepatitis E Virus Antibody IgM",
    "Typhoid IgG",
    "Typhoid IgM",
    "Complete Blood Count",
    "Hemoglobin",
    "Platelet Count",
    "WBC Count",
    "Lymphocyte Count",
    "Neutrophil Count",
    "Monocyte Count",
    "Eosinophil Count",
    "Liver Function Test",
    "SGOT",
    "SGPT",
  ],

  usagePoints: [
    "Monsoon infection screening",
    "Typhoid detection",
    "Hepatitis screening",
    "Fever investigation package",
  ],

  preparation: [
    "No special preparation required",
    "Stay hydrated before sample collection",
    "Inform doctor about current medications",
    "Carry previous reports if available",
  ],
},

{
  slug: "fasting-blood-sugar",
  title: "Fasting Blood Sugar",
  price: "₹49",
  subtitle: "Diabetes Screening Test",
  image: "/packages/fasting-blood-sugar.jpg",
  description:
    "Basic diabetes screening test to measure fasting blood glucose levels and assess blood sugar control.",

  includedTests: [
    "Fasting Blood Sugar (Glucose)",
  ],

  usagePoints: [
    "Diabetes screening",
    "Routine blood sugar monitoring",
    "Pre-diabetes detection",
    "Health checkups",
  ],

  preparation: [
    "8-10 hours fasting required",
    "Only water allowed",
    "Avoid sugary drinks before testing",
    "Take medicines only if advised by doctor",
  ],
},
{
  slug: "postprandial-blood-sugar",
  title: "Postprandial Blood Sugar",
  price: "₹49",
  subtitle: "Post Meal Diabetes Test",
  image: "/packages/postprandial-blood-sugar.jpg",
  description:
    "Measures blood glucose levels after a meal to evaluate diabetes control and glucose metabolism.",

  includedTests: [
    "Postprandial Blood Sugar (Glucose)",
  ],

  usagePoints: [
    "Diabetes monitoring",
    "Post-meal sugar evaluation",
    "Treatment effectiveness tracking",
    "Routine health screening",
  ],

  preparation: [
    "Sample collected 2 hours after meal",
    "Follow normal meal schedule",
    "Avoid excessive sweets before testing",
    "Inform about diabetes medications",
  ],
},
{
  slug: "random-blood-sugar",
  title: "Random Blood Sugar",
  price: "₹49",
  subtitle: "Quick Diabetes Screening Test",
  image: "/packages/random-blood-sugar.jpg",
  description:
    "Random blood glucose test that can be performed at any time of the day for quick diabetes screening.",

  includedTests: [
    "Random Blood Sugar (Glucose)",
  ],

  usagePoints: [
    "Quick diabetes screening",
    "Emergency glucose assessment",
    "Routine health monitoring",
    "Follow-up testing",
  ],

  preparation: [
    "No fasting required",
    "Can be done anytime during the day",
    "Inform about diabetes medications",
    "Carry previous reports if available",
  ],
},
{
  slug: "aarogyam-x-pro-utsh",
  title: "Aarogyam X Pro with UTSH",
  price: "₹8470",
  subtitle: "Advanced Executive Preventive Health Package (126 Parameters)",
  image: "/packages/aarogyam-x-pro-utsh.jpg",
  description:
    "Comprehensive preventive health package covering thyroid, diabetes, cardiac risk, liver, kidney, vitamins, arthritis, allergy, inflammatory markers, and toxic element screening.",

  includedTests: [
    "Thyroid Profile (T3, T4, TSH)",
    "Lipid Profile",
    "Liver Function Test",
    "Kidney Function Test",
    "Iron Deficiency Profile",
    "HbA1c",
    "Average Blood Glucose (ABG)",
    "Vitamin D Total",
    "Vitamin B12",
    "hs-CRP",
    "Cardiac Risk Markers",
    "Electrolytes",
    "Pancreatic Profile",
    "Ferritin",
    "Folate",
    "Serum Zinc",
    "Magnesium",
    "Cystatin C",
    "Anti-CCP",
    "ANA",
    "Lp-PLA2",
    "Allergy Phadiatop Adult",
    "Toxic & Nutrient Elements (22)",
    "Complete Vitamin Profile",
  ],

  usagePoints: [
    "Executive full body health assessment",
    "Cardiac and metabolic risk evaluation",
    "Vitamin and mineral deficiency screening",
    "Inflammation and autoimmune disorder detection",
  ],

  preparation: [
    "10-12 hours fasting required",
    "Drink water before sample collection",
    "Avoid alcohol for 24 hours",
    "Continue medications only after doctor's advice",
  ],
},
{
  slug: "executive-full-body-checkup",
  title: "Executive Full Body Checkup",
  price: "₹1800",
  subtitle: "Preventive Health Screening Package (126 Tests)",
  image: "/packages/executive-full-body-checkup.jpg",
  description:
    "Comprehensive health screening package covering diabetes, thyroid, liver, kidney, cardiac risk markers, vitamins, and complete hemogram for routine preventive care.",

  includedTests: [
    "Complete Hemogram",
    "Lipid Profile",
    "Cardiac Risk Markers",
    "Electrolytes",
    "Iron Deficiency Profile",
    "Vitamin D",
    "Vitamin B12",
    "Diabetes Profile",
    "Pancreatic Profile",
    "Hormone Profile",
    "Liver Function Test",
    "Renal Function Test",
    "Thyroid Profile",
  ],

  usagePoints: [
    "Annual preventive health checkup",
    "Diabetes and thyroid screening",
    "Heart health monitoring",
    "Liver and kidney function assessment",
  ],

  preparation: [
    "10-12 hours fasting required",
    "Water intake allowed",
    "Avoid alcohol before testing",
    "Carry previous medical reports if available",
  ],
},
{
  slug: "jaanch-thyroid-profile-advanced",
  title: "Jaanch Thyroid Profile Advanced",
  price: "₹2500",
  subtitle: "Advanced Thyroid & Autoimmune Screening Package",
  image: "/packages/jaanch-thyroid-profile-advanced.jpg",
  description:
    "Advanced thyroid evaluation package including thyroid hormones, thyroid autoantibodies, and autoimmune markers for comprehensive thyroid disorder assessment.",

  includedTests: [
    "TSH Ultrasensitive",
    "Total T3",
    "Total T4",
    "Free T3 (FT3)",
    "Free T4 (FT4)",
    "Anti-TPO Antibody",
    "TSH Receptor Antibodies",
    "Anti-Thyroglobulin Antibody (ATG)",
  ],

  usagePoints: [
    "Diagnosis of thyroid disorders",
    "Autoimmune thyroid disease screening",
    "Monitoring hypothyroidism and hyperthyroidism",
    "Evaluation of unexplained weight changes and fatigue",
  ],

  preparation: [
    "No fasting required",
    "Inform lab about thyroid medications",
    "Carry previous thyroid reports",
    "Morning sample preferred",
  ],
},
{
  slug: "vitamin-d-b12-combo",
  title: "Vitamin D & B12 Combo",
  price: "₹749",
  subtitle: "Essential Vitamin Deficiency Screening",
  image: "/packages/vitamin-d-b12-combo.jpg",
  description:
    "Basic vitamin screening package to assess Vitamin D and Vitamin B12 levels associated with immunity, bone health, energy, and neurological function.",

  includedTests: [
    "Vitamin D Total",
    "Vitamin B12",
  ],

  usagePoints: [
    "Detect vitamin deficiencies",
    "Assess fatigue and weakness causes",
    "Bone health monitoring",
    "Support immunity evaluation",
  ],

  preparation: [
    "No fasting required",
    "Normal hydration recommended",
    "Inform about supplements being taken",
    "Carry previous reports if available",
  ],
},

{
  slug: "jaanch-heat-shield-basic",
  title: "Jaanch Heat Shield Basic",
  price: "₹1199",
  subtitle: "Summer Health & Heat Stress Screening Package (44 Parameters)",
  image: "/packages/jaanch-heat-shield-basic.jpg",
  description:
    "Summer wellness package designed to assess hydration status, kidney and liver function, muscle stress markers, blood sugar, and overall health during extreme heat conditions.",

  includedTests: [
    "Serum Electrolytes",
    "Kidney Profile",
    "Liver Profile",
    "Lactate Dehydrogenase (LDH)",
    "Random Blood Sugar",
    "Creatine Phosphokinase (CPK)",
    "Complete Blood Count (CBC)",
  ],

  usagePoints: [
    "Heat stress monitoring",
    "Dehydration assessment",
    "Kidney and liver health evaluation",
    "Summer wellness screening",
  ],

  preparation: [
    "No fasting required",
    "Drink adequate water before collection",
    "Avoid strenuous exercise before testing",
    "Carry previous medical reports",
  ],
},
{
  slug: "jaanch-heat-shield-advanced",
  title: "Jaanch Heat Shield Advanced",
  price: "₹2499",
  subtitle: "Advanced Summer Health & Hydration Package (72 Parameters)",
  image: "/packages/jaanch-heat-shield-advanced.jpg",
  description:
    "Advanced summer health package combining hydration assessment, kidney and liver evaluation, vitamin screening, urine analysis, iron profile, and inflammatory markers for comprehensive heat-related health monitoring.",

  includedTests: [
    "Serum Electrolytes",
    "Kidney Profile",
    "Liver Profile",
    "Lactate Dehydrogenase (LDH)",
    "Random Blood Sugar",
    "Creatine Phosphokinase (CPK)",
    "Complete Blood Count (CBC)",
    "Complete Urine Analysis",
    "Vitamin D Total",
    "Vitamin B12",
    "Iron",
    "Ferritin",
  ],

  usagePoints: [
    "Advanced heat stress evaluation",
    "Hydration and electrolyte monitoring",
    "Vitamin and iron deficiency screening",
    "Comprehensive summer wellness assessment",
  ],

  preparation: [
    "No fasting required",
    "Maintain normal hydration",
    "Avoid heavy exercise before testing",
    "Inform lab about supplements and medications",
  ],
},
{
  slug: "paleo-profile-basic-new",
  title: "Paleo Profile - Basic New",
  price: "₹2900",
  subtitle: "Complete Preventive Health Checkup (95 Parameters)",
  image: "/packages/paleo-profile-basic-new.jpg",
  description:
    "Comprehensive preventive health package covering diabetes, thyroid, liver, kidney, cholesterol, iron deficiency, vitamins, urine analysis, and metabolic health assessment for overall wellness screening.",

  includedTests: [
    "Diabetes Profile",
    "Thyroid Profile",
    "Complete Hemogram (CBC)",
    "Iron Deficiency Profile",
    "Lipid Profile",
    "Liver Profile",
    "Renal (Kidney) Profile",
    "Complete Urine Analysis",
    "Vitamin Profile",
    "Metabolic Assessment",
  ],

  usagePoints: [
    "Annual preventive health screening",
    "Lifestyle disease risk assessment",
    "Early detection of hidden health issues",
    "Overall wellness monitoring",
  ],

  preparation: [
    "10-12 hours fasting required",
    "Drink water as usual",
    "Avoid alcohol 24 hours before testing",
    "Continue medications unless advised otherwise",
  ],
},



{
  slug: "women-basic-profile-utsh",
  title: "Women Basic Profile with UTSH",
  price: "₹2055",
  subtitle: "Women's Health & Hormonal Wellness Package (73 Parameters)",
  image: "/packages/women-basic-profile-utsh.jpg",
  description:
    "Specialized women's wellness package covering thyroid function, hormones, diabetes, vitamins, iron status, liver and kidney health, cholesterol, and overall health screening.",

  includedTests: [
    "Thyroid Profile",
    "Lipid Profile",
    "Liver Profile",
    "Kidney Profile",
    "Iron Deficiency Profile",
    "Diabetes Profile",
    "Vitamin D",
    "Vitamin B12",
    "FSH",
    "LH",
    "Prolactin",
    "Estradiol",
    "Complete Blood Count (CBC)",
  ],

  usagePoints: [
    "Women's preventive health screening",
    "Hormonal imbalance assessment",
    "Fertility and reproductive health monitoring",
    "Nutritional deficiency detection",
  ],

  preparation: [
    "10-12 hours fasting required",
    "Inform lab about menstrual cycle phase",
    "Avoid supplements before testing if advised",
    "Stay hydrated before sample collection",
  ],
},


{
  slug: "torch-all-ten-profile",
  title: "TORCH All Ten Profile",
  price: "₹2180",
  subtitle: "Comprehensive TORCH Infection Screening Package (10 Tests)",
  image: "/packages/torch-all-ten-profile.jpg",
  description:
    "Advanced infectious disease screening panel covering TORCH infections commonly evaluated during pregnancy and fertility assessments, including IgG and IgM antibodies for major viral and parasitic infections.",

  includedTests: [
    "Cytomegalovirus (CMV) IgG",
    "Cytomegalovirus (CMV) IgM",
    "Herpes Simplex Virus I (HSV-I) IgG",
    "Herpes Simplex Virus I (HSV-I) IgM",
    "Herpes Simplex Virus II (HSV-II) IgG",
    "Herpes Simplex Virus II (HSV-II) IgM",
    "Rubella IgG",
    "Rubella IgM",
    "Toxoplasma Gondii IgG",
    "Toxoplasma Gondii IgM",
  ],

  usagePoints: [
    "Pregnancy planning assessment",
    "TORCH infection screening",
    "Fertility evaluation",
    "Maternal health monitoring",
  ],

  preparation: [
    "No fasting required",
    "Carry previous reports if available",
    "Inform doctor if pregnant",
    "Normal hydration recommended",
  ],
},
{
  slug: "aarogyam-tax-saver-advanced-utsh",
  title: "Aarogyam Tax Saver Advanced with UTSH",
  price: "₹4500",
  subtitle: "Comprehensive Preventive Health Checkup Package (136 Tests)",
  image: "/packages/aarogyam-tax-saver-advanced-utsh.jpg",
  description:
    "Extensive full-body health screening package covering diabetes, thyroid, vitamins, cardiac markers, liver, kidney, hormones, toxic elements, arthritis markers, and complete wellness evaluation.",

  includedTests: [
    "Diabetes Profile",
    "Vitamin Profile",
    "Iron Deficiency Profile",
    "Urinogram",
    "Metabolic Profile",
    "Hormone Profile",
    "Arthritis Profile",
    "Toxic Elements Profile",
    "Thyroid Profile",
    "Electrolytes",
    "Renal Profile",
    "Cardiac Risk Markers",
    "Pancreatic Profile",
    "Elements Profile",
    "Complete Hemogram",
    "Liver Profile",
    "Lipid Profile",
    "Urine Analysis",
  ],

  usagePoints: [
    "Annual preventive health checkup",
    "Lifestyle disease screening",
    "Cardiac risk assessment",
    "Comprehensive wellness monitoring",
  ],

  preparation: [
    "10-12 hours fasting required",
    "Drink water during fasting",
    "Avoid alcohol 24 hours before test",
    "Continue medications only as advised by physician",
  ],
},
{
  slug: "skin-aura-package-1",
  title: "Skin Aura Package 1",
  price: "₹1499",
  subtitle: "Healthy Skin & Wellness Screening Package (9 Tests)",
  image: "/packages/skin-aura-package-1.jpg",
  description:
    "Specialized wellness package designed to evaluate skin health through assessment of blood health, liver function, kidney function, thyroid status, diabetes markers, vitamin levels, and lipid profile.",

  includedTests: [
    "Complete Blood Count (CBC)",
    "Kidney Function Test (KFT)",
    "Liver Function Test (LFT)",
    "Vitamin D Total (25-Hydroxy)",
    "Vitamin B12",
    "Blood Glucose Fasting",
    "HbA1c",
    "Lipid Profile",
    "Thyroid Profile (T3, T4, TSH Ultra-sensitive)",
  ],

  usagePoints: [
    "Skin wellness evaluation",
    "Vitamin deficiency screening",
    "Hair and skin health assessment",
    "Metabolic health monitoring",
  ],

  preparation: [
    "8-10 hours fasting recommended",
    "Drink plain water before testing",
    "Avoid heavy meals before sample collection",
    "Inform lab about supplements being taken",
  ],
},
{
  slug: "fertility-comprehensive-panel-female",
  title: "Fertility Comprehensive Panel (Female)",
  price: "₹2800",
  subtitle: "Female Fertility & Hormone Assessment Package (8 Parameters)",
  image: "/packages/fertility-comprehensive-panel-female.jpg",
  description:
    "Comprehensive fertility screening package for women that evaluates ovarian reserve, reproductive hormones, thyroid function, and hormonal balance to assist in fertility planning and reproductive health assessment.",

  includedTests: [
    "Anti Mullerian Hormone (AMH)",
    "Estradiol (E2)",
    "Follicle Stimulating Hormone (FSH)",
    "Luteinizing Hormone (LH)",
    "Prolactin",
    "Free Testosterone",
    "Total Testosterone",
    "TSH Ultra Sensitive",
  ],

  usagePoints: [
    "Female fertility assessment",
    "Hormonal imbalance screening",
    "Pregnancy planning evaluation",
    "Ovarian reserve assessment",
  ],

  preparation: [
    "No fasting required",
    "Testing may be advised on specific menstrual cycle days",
    "Inform lab about hormonal medications",
    "Carry previous fertility reports if available",
  ],
},
{
  slug: "mega-health-checkup-advance-package",
  title: "Mega Health Checkup Camp - Advance Package",
  price: "₹799",
  subtitle: "Comprehensive Preventive Health Screening (89 Parameters)",
  image: "/packages/mega-health-checkup-advance-package.jpg",
  description:
    "Affordable preventive health package covering blood health, diabetes screening, kidney and liver function, thyroid evaluation, heart risk markers, and urine analysis for routine wellness monitoring.",

  includedTests: [
    "CBC",
    "ESR",
    "Iron Studies",
    "Fasting Blood Glucose",
    "HbA1c",
    "Kidney Function Test (KFT)",
    "Liver Function Test (LFT)",
    "Lipid Profile",
    "T3",
    "T4",
    "TSH Ultra-sensitive",
    "Routine Urine Analysis",
    "Urine Microscopy",
  ],

  usagePoints: [
    "Annual health screening",
    "Diabetes monitoring",
    "Heart health assessment",
    "General wellness evaluation",
  ],

  preparation: [
    "10-12 hours fasting recommended",
    "Drink water during fasting",
    "Avoid alcohol before testing",
    "Continue medications only as advised by physician",
  ],
},
{
  slug: "mega-health-checkup-premium-package",
  title: "Mega Health Checkup Camp - Premium Package",
  price: "₹999",
  subtitle: "Advanced Preventive Health Screening (91 Parameters)",
  image: "/packages/mega-health-checkup-premium-package.jpg",
  description:
    "Enhanced wellness package including all core health assessments along with Vitamin D and Vitamin B12 screening for a more detailed preventive health evaluation.",

  includedTests: [
    "CBC",
    "ESR",
    "Iron Studies",
    "Fasting Blood Glucose",
    "HbA1c",
    "Kidney Function Test (KFT)",
    "Liver Function Test (LFT)",
    "Lipid Profile",
    "T3",
    "T4",
    "TSH Ultra-sensitive",
    "Routine Urine Analysis",
    "Vitamin B12",
    "Vitamin D",
  ],

  usagePoints: [
    "Comprehensive wellness assessment",
    "Vitamin deficiency screening",
    "Lifestyle disease monitoring",
    "Preventive healthcare",
  ],

  preparation: [
    "10-12 hours fasting recommended",
    "Drink water during fasting",
    "Avoid vitamin supplements on test day",
    "Inform lab about medications",
  ],
},
{
  slug: "mega-health-checkup-super-package",
  title: "Mega Health Checkup Camp - Super Package",
  price: "₹1199",
  subtitle: "Advanced Full Body Health Screening (93 Parameters)",
  image: "/packages/mega-health-checkup-super-package.jpg",
  description:
    "Most comprehensive package in the Mega Health Camp series, including routine health screening, vitamin analysis, arthritis markers, and inflammation assessment for complete health monitoring.",

  includedTests: [
    "CBC",
    "ESR",
    "Iron Studies",
    "Fasting Blood Glucose",
    "HbA1c",
    "Kidney Function Test (KFT)",
    "Liver Function Test (LFT)",
    "Lipid Profile",
    "T3",
    "T4",
    "TSH Ultra-sensitive",
    "Routine Urine Analysis",
    "Vitamin B12",
    "Vitamin D",
    "RA Test",
    "CRP",
  ],

  usagePoints: [
    "Advanced preventive health checkup",
    "Arthritis screening",
    "Inflammation assessment",
    "Comprehensive wellness monitoring",
  ],

  preparation: [
    "10-12 hours fasting recommended",
    "Drink water during fasting",
    "Avoid alcohol for 24 hours before testing",
    "Inform lab about ongoing treatments",
  ],
},
{
  slug: "vitamin-d3-vitamin-b12-screening",
  title: "Vitamin D3 + Vitamin B12 Screening",
  price: "₹599",
  subtitle: "Vitamin Deficiency & Wellness Screening Package (2 Parameters)",
  image: "/packages/vitamin-d3-vitamin-b12-screening.jpg",
  description:
    "Targeted screening package to detect Vitamin D3 and Vitamin B12 deficiencies that may contribute to fatigue, weakness, low immunity, poor bone health, and reduced energy levels.",

  includedTests: [
    "Vitamin D Total (25-Hydroxy)",
    "Vitamin B12",
  ],

  usagePoints: [
    "Vitamin deficiency screening",
    "Fatigue and weakness evaluation",
    "Bone health monitoring",
    "Immunity assessment",
  ],

  preparation: [
    "No fasting required",
    "Maintain normal hydration",
    "Inform lab about supplements being taken",
    "Carry previous vitamin reports if available",
  ],
},


{
  slug: "aarogyam-b-pro",
  title: "Aarogyam B Pro",
  price: "₹1999",
  subtitle: "Advanced Preventive Health Checkup Package (60 Parameters)",
  image: "/packages/aarogyam-b-pro.jpg",
  description:
    "Advanced preventive care package including kidney and liver advanced profiles, thyroid evaluation, cardiac risk markers, iron profile, electrolytes, and inflammatory screening.",

  includedTests: [
    "Thyroid Basic",
    "Lipid Basic",
    "Liver Basic",
    "Kidney Basic",
    "Lipid Advanced",
    "Liver Advanced",
    "Diabetes Profile",
    "CBC",
    "Vitamin Profile",
    "Kidney Advanced",
    "Thyroid Advanced",
    "hs-CRP",
    "Iron Profile",
    "Electrolytes",
    "Liver Extended",
  ],

  usagePoints: [
    "Comprehensive preventive health assessment",
    "Cardiovascular risk monitoring",
    "Inflammation screening",
    "Metabolic health evaluation",
  ],

  preparation: [
    "10–12 hours fasting required",
    "Avoid alcohol for 24 hours",
    "Stay hydrated",
    "Inform lab about medications",
  ],
},
{
  slug: "aarogyam-c-pro",
  title: "Aarogyam C Pro",
  price: "₹3999",
  subtitle: "Comprehensive Wellness Package (72 Parameters)",
  image: "/packages/aarogyam-c-pro.jpg",
  description:
    "Comprehensive health package combining preventive screening, cardiac risk assessment, mineral analysis, allergy indicators, pancreas profile, and nutritional evaluation.",

  includedTests: [
    "All Tests from Aarogyam B Pro",
    "Cardiac Risk Markers",
    "Phosphorous",
    "Total IgE",
    "Pancreas Profile",
    "Fructosamine",
    "Magnesium",
    "Ferritin",
    "Folate",
    "Rheumatoid Factor (RF)",
  ],

  usagePoints: [
    "Advanced wellness evaluation",
    "Nutritional deficiency screening",
    "Cardiac and metabolic monitoring",
    "Inflammatory condition assessment",
  ],

  preparation: [
    "10–12 hours fasting required",
    "Drink water normally",
    "Avoid strenuous exercise before test",
    "Inform lab about supplements",
  ],
},
{
  slug: "aarogyam-d-pro",
  title: "Aarogyam D Pro",
  price: "₹5499",
  subtitle: "Advanced Diagnostic Package (79 Parameters)",
  image: "/packages/aarogyam-d-pro.jpg",
  description:
    "Extensive preventive health package including autoimmune markers, advanced cardiac screening, metabolic assessment, insulin evaluation, and specialized diagnostic parameters.",

  includedTests: [
    "All Tests from Aarogyam C Pro",
    "ANA",
    "ACCP",
    "Lp-PLA2",
    "Insulin Fasting",
  ],

  usagePoints: [
    "Autoimmune disorder screening",
    "Advanced cardiovascular assessment",
    "Metabolic health monitoring",
    "Comprehensive preventive diagnostics",
  ],

  preparation: [
    "10–12 hours fasting required",
    "Avoid alcohol for 24 hours",
    "Stay hydrated",
    "Inform lab about medications",
  ],
},
{
  slug: "aarogyam-e-pro",
  title: "Aarogyam E Pro",
  price: "₹6999",
  subtitle: "Executive Preventive Health Package (86 Parameters)",
  image: "/packages/aarogyam-e-pro.jpg",
  description:
    "Executive health screening package with toxic element analysis, ketone testing, complete vitamin profiling, and advanced preventive diagnostics.",

  includedTests: [
    "All Tests from Aarogyam D Pro",
    "Elements 22 (Toxic & Nutrients)",
    "Blood Ketone (D3HB)",
    "Complete Vitamins Profile",
    "Allergy Phadiatop Adult",
  ],

  usagePoints: [
    "Executive health screening",
    "Toxic element assessment",
    "Vitamin deficiency evaluation",
    "Advanced preventive healthcare",
  ],

  preparation: [
    "10–12 hours fasting required",
    "Maintain hydration",
    "Avoid supplements before testing if advised",
    "Inform lab about ongoing treatments",
  ],
},
];
export default packagesData