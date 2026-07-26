import {
  FaBaby,
  FaBone,
  FaBriefcaseMedical,
  FaCapsules,
  FaDna,
  FaDroplet,
  FaHeartPulse,
  FaHospital,
  FaHouseMedical,
  FaPerson,
  FaPersonDress,
  FaShieldVirus,
  FaSpa,
  FaStethoscope,
  FaSun,
  FaSyringe,
  FaVirus,
} from "react-icons/fa6";

 const packagesData = [
{
  id: "swasthya-mitra-premium-package",

  slug: "swasthya-mitra-premium-package",

  name: "Swasthya Mitra Premium Package",

  shortDescription:
    "Comprehensive preventive health package with diabetes screening, thyroid profile, vitamin assessment, liver and kidney function tests, and complete wellness evaluation.",

  description:
    "The Swasthya Mitra Premium Package is an advanced preventive health screening designed to assess your overall health. It includes diabetes testing, thyroid evaluation, liver and kidney function, vitamin B12 and Vitamin D assessment, iron studies, cholesterol profile, urine examination, and complete blood analysis for early detection of nutritional deficiencies and lifestyle-related diseases.",

  tags: [
    "full-body",
    "wellness",
    "diabetes",
    "thyroid",
    "liver",
    "kidney",
    "blood",
    "vitamin-d",
    "vitamin-b12",
    "iron",
    "heart",
    "preventive",
  ],

  price: 1099,

  originalPrice: 1499,

  discount: "27% OFF",

  reportTime: "24-48 Hours",

  fasting: "10-12 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Adults above 18 years",
      description:
        "Ideal for routine preventive health screening and annual wellness checkups.",
      icon: "users",
    },
    {
      title: "People with fatigue or weakness",
      description:
        "Helps detect vitamin deficiencies, anemia, thyroid disorders, and diabetes.",
      icon: "heart",
    },
    {
      title: "Working professionals",
      description:
        "Suitable for busy individuals who want a complete health assessment.",
      icon: "briefcase",
    },
    {
      title: "Individuals with family history of chronic disease",
      description:
        "Useful for monitoring diabetes, cholesterol, thyroid disorders, and organ health.",
      icon: "activity",
    },
    {
      title: "Annual preventive screening",
      description:
        "Recommended for maintaining long-term health and early disease detection.",
      icon: "calendar",
    },
  ],
preparation: [
  {
    title: "Fast for 10–12 Hours",
    description:
      "This package includes Blood Glucose and Lipid Profile tests, so a fasting period of 10–12 hours is recommended. Plain water is allowed.",
  },
  {
    title: "Drink Plenty of Water",
    description:
      "Staying hydrated makes blood sample collection easier and helps improve patient comfort.",
  },
  {
    title: "Continue Medicines Only if Advised",
    description:
      "Inform our healthcare team about any medicines you are taking. Do not stop prescribed medication unless advised by your doctor.",
  },
  {
    title: "Carry Previous Reports",
    description:
      "Bring earlier laboratory reports or prescriptions if available for better comparison of your health parameters.",
  },
  {
    title: "Relax During Collection",
    description:
      "Our trained phlebotomists follow safe and hygienic procedures to ensure a comfortable sample collection experience.",
  },
],
  testsCount: 12,

  category: "Preventive Health Checkup",

  rating: 4.9,

  reviews: 176,

  image: "/packages/full-body-package.webp",

  highlights: [
    "12 Essential Test Categories",
    "Vitamin B12 & Vitamin D",
    "HbA1c Diabetes Screening",
    "Complete Blood Count",
    "Thyroid Profile",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Complete Health Assessment",
      description:
        "Evaluates blood health, diabetes, thyroid, liver, kidney, vitamin status, and cholesterol levels.",
    },
    {
      title: "Early Disease Detection",
      description:
        "Identifies diabetes, vitamin deficiencies, thyroid disorders, anemia, and organ dysfunction before symptoms become severe.",
    },
    {
      title: "Lifestyle Disease Monitoring",
      description:
        "Supports regular monitoring of cholesterol, blood sugar, and overall metabolic health.",
    },
    {
      title: "Preventive Wellness",
      description:
        "Helps maintain long-term health through routine preventive screening.",
    },
  ],

  testCategories: [
    {
      title: "Blood Sugar",
      tests: [
        "Blood Glucose Fasting",
        "HbA1c",
      ],
    },
    {
      title: "Thyroid Health",
      tests: [
        "T3",
        "T4",
        "TSH",
      ],
    },
    {
      title: "Liver Function",
      tests: [
        "Liver Function Test",
      ],
    },
    {
      title: "Kidney Function",
      tests: [
        "KFT",
      ],
    },
    {
      title: "Heart Health",
      tests: [
        "Lipid Profile",
      ],
    },
    {
      title: "Vitamin Assessment",
      tests: [
        "Vitamin B12",
        "Vitamin D Total",
      ],
    },
    {
      title: "Blood Health",
      tests: [
        "Complete Blood Count",
        "ESR Automated",
      ],
    },
    {
      title: "Iron Studies",
      tests: [
        "Iron Studies",
      ],
    },
    {
      title: "Urine Analysis",
      tests: [
        "Urine Routine & Microscopy",
      ],
    },
  ],

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

  seo: {
    introduction:
      "The Swasthya Mitra Premium Package is a comprehensive preventive health checkup that combines diabetes screening, thyroid profile, vitamin assessment, liver and kidney evaluation, cholesterol testing, and complete blood analysis into one affordable package.",

    whyImportant:
      "Routine preventive health screening helps detect diabetes, vitamin deficiencies, thyroid disorders, anemia, and organ dysfunction before serious complications develop.",

    benefits:
      "This package provides a complete overview of your health by evaluating blood sugar, vitamins, cholesterol, thyroid function, liver, kidneys, and overall wellness.",

    homeCollection:
      "Enjoy convenient home sample collection by trained professionals with secure digital reports delivered within 24–48 hours.",

    conclusion:
      "The Swasthya Mitra Premium Package is an excellent choice for adults seeking an affordable annual preventive health screening and comprehensive wellness assessment.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "It is recommended for adults looking for a complete preventive health screening or annual wellness checkup.",
    },
    {
      question: "Is fasting required?",
      answer:
        "Yes. A fasting period of 10–12 hours is recommended for accurate blood glucose and lipid profile results.",
    },
    {
      question: "When will I receive my reports?",
      answer:
        "Reports are usually available online within 24–48 hours after sample collection.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},

 {
  id: "lipid-profile-test",

  slug: "lipid-profile-test",

  name: "Lipid Profile Test",

  shortDescription:
    "Comprehensive cholesterol screening to evaluate heart health and assess the risk of cardiovascular diseases.",

  description:
    "The Lipid Profile Test measures different types of cholesterol and triglycerides to evaluate cardiovascular health. It helps detect high cholesterol levels, monitor lipid-lowering treatment, and identify individuals at increased risk of heart disease and stroke.",

  tags: [
    "heart",
    "cholesterol",
    "lipid",
    "cardiac",
    "blood",
    "preventive",
    "wellness",
  ],

  price: 600,

  originalPrice: 800,

  discount: "25% OFF",

  reportTime: "24 Hours",

  fasting: "10-12 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Adults above 20 years",
      description:
        "Recommended as part of routine preventive heart health screening.",
      icon: "users",
    },
    {
      title: "People with diabetes or hypertension",
      description:
        "Helps monitor cardiovascular risk associated with chronic diseases.",
      icon: "activity",
    },
    {
      title: "Individuals with high cholesterol",
      description:
        "Useful for monitoring cholesterol levels and treatment response.",
      icon: "heart",
    },
    {
      title: "Family history of heart disease",
      description:
        "Supports early detection of inherited cholesterol disorders.",
      icon: "shield",
    },
    {
      title: "Health-conscious individuals",
      description:
        "Ideal for regular heart health monitoring and preventive care.",
      icon: "calendar",
    },
  ],
preparation: [
  {
    title: "Fast for 10–12 Hours",
    description:
      "A fasting period of 10–12 hours is required for accurate cholesterol and triglyceride measurements. Plain water is permitted.",
  },
  {
    title: "Avoid Alcohol",
    description:
      "Avoid alcohol for at least 24 hours before the test, as it may affect triglyceride levels.",
  },
  {
    title: "Avoid Heavy Meals",
    description:
      "Do not consume high-fat meals the evening before your test for the most accurate results.",
  },
  {
    title: "Continue Medicines if Recommended",
    description:
      "Inform the laboratory about cholesterol-lowering medicines or other prescriptions before sample collection.",
  },
  {
    title: "Stay Hydrated",
    description:
      "Drink sufficient water before your appointment to make blood collection easier.",
  },
],
  testsCount: 9,

  category: "Heart Health",

  rating: 4.9,

  reviews: 168,

  image: "/packages/lipid-profile.webp",

  highlights: [
    "9 Lipid Parameters",
    "Heart Disease Risk Assessment",
    "Cholesterol Screening",
    "Home Sample Collection",
    "Digital Reports",
    "24 Hour Reporting",
  ],

  benefits: [
    {
      title: "Heart Disease Prevention",
      description:
        "Identifies abnormal cholesterol levels before cardiovascular complications develop.",
    },
    {
      title: "Complete Cholesterol Analysis",
      description:
        "Measures HDL, LDL, VLDL, triglycerides, and total cholesterol.",
    },
    {
      title: "Treatment Monitoring",
      description:
        "Tracks the effectiveness of cholesterol-lowering medications and lifestyle changes.",
    },
    {
      title: "Preventive Cardiac Care",
      description:
        "Supports regular heart health screening and long-term wellness.",
    },
  ],

  testCategories: [
    {
      title: "Cholesterol Analysis",
      tests: [
        "Total Cholesterol",
        "HDL Cholesterol Direct",
        "LDL Cholesterol",
        "VLDL Cholesterol",
      ],
    },
    {
      title: "Triglycerides",
      tests: [
        "Triglycerides",
      ],
    },
    {
      title: "Cardiac Risk Ratios",
      tests: [
        "Non-HDL Cholesterol",
        "CHOL/HDL Ratio",
        "LDL/HDL Ratio",
        "HDL/LDL Ratio",
      ],
    },
  ],

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

  seo: {
    introduction:
      "The Lipid Profile Test is a comprehensive cholesterol screening that evaluates heart health and assesses the risk of cardiovascular diseases.",

    whyImportant:
      "Regular cholesterol testing helps identify high cholesterol levels early, reducing the risk of heart attack and stroke.",

    benefits:
      "This test provides a complete analysis of cholesterol and triglycerides for preventive cardiac care and treatment monitoring.",

    homeCollection:
      "Convenient home sample collection is available with secure online reports delivered within 24 hours.",

    conclusion:
      "The Lipid Profile Test is an essential heart health screening recommended for adults and individuals with cardiovascular risk factors.",
  },

  faqs: [
    {
      question: "Is fasting required?",
      answer:
        "Yes. A fasting period of 10–12 hours is recommended for accurate lipid profile results.",
    },
    {
      question: "How soon are reports available?",
      answer:
        "Reports are generally available within 24 hours.",
    },
    {
      question: "Can I book home collection?",
      answer:
        "Yes. Home sample collection is available in selected service locations.",
    },
    {
      question: "How often should I take a lipid profile test?",
      answer:
        "Healthy adults should consider testing every 4–6 years, while people with risk factors may require more frequent monitoring as advised by their doctor.",
    },
  ],
},

{
  id: "essential-health-tests",

  slug: "essential-health-tests",

  name: "Essential Health Tests",

  shortDescription:
    "Affordable individual diagnostic tests for routine health monitoring, diabetes screening, thyroid evaluation, and heart health assessment.",

  description:
    "Essential Health Tests include the most commonly recommended individual laboratory investigations for preventive healthcare. Choose from Thyroid Profile, HbA1c, or Lipid Profile tests to monitor your thyroid function, blood sugar control, and cholesterol levels for early detection of lifestyle-related diseases.",

  tags: [
    "thyroid",
    "diabetes",
    "cholesterol",
    "heart",
    "preventive",
    "routine",
  ],

  price: 250,

  originalPrice: 350,

  discount: "Starting From",

  reportTime: "24 Hours",

  fasting: "Depends on Test",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Routine Health Monitoring",
      description:
        "Ideal for individuals who want to monitor important health parameters regularly.",
      icon: "users",
    },
    {
      title: "Diabetes Monitoring",
      description:
        "HbA1c testing helps evaluate long-term blood sugar control.",
      icon: "activity",
    },
    {
      title: "Thyroid Evaluation",
      description:
        "Recommended for people experiencing fatigue, weight changes, or hormonal imbalance.",
      icon: "heart",
    },
    {
      title: "Heart Health Screening",
      description:
        "Lipid Profile helps assess cholesterol levels and cardiovascular risk.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "Follow Test Instructions",
      description:
        "Preparation requirements vary depending on the selected test. Our team will guide you before sample collection.",
    },
    {
      title: "Fasting May Be Required",
      description:
        "Certain tests such as Lipid Profile may require 10–12 hours of fasting for accurate results.",
    },
    {
      title: "Drink Water",
      description:
        "Stay hydrated before your appointment unless instructed otherwise.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring previous laboratory reports for better comparison of results.",
    },
  ],

  testsCount: 3,

  category: "Individual Diagnostic Tests",

  rating: 4.8,

  reviews: 112,

  image: "/packages/essential-tests.webp",

  highlights: [
    "Thyroid Profile",
    "HbA1c Test",
    "Lipid Profile",
    "Affordable Pricing",
    "Home Sample Collection",
    "24 Hour Reports",
  ],

  benefits: [
    {
      title: "Early Disease Detection",
      description:
        "Identify thyroid disorders, diabetes, and cholesterol abnormalities early.",
    },
    {
      title: "Routine Monitoring",
      description:
        "Monitor your health regularly with reliable laboratory testing.",
    },
    {
      title: "Affordable Testing",
      description:
        "Choose only the investigations you need without purchasing a full package.",
    },
    {
      title: "Convenient Home Collection",
      description:
        "Book home sample collection and receive digital reports.",
    },
  ],

  testCategories: [
    {
      title: "Thyroid",
      tests: ["Thyroid Profile"],
    },
    {
      title: "Diabetes",
      tests: ["HbA1c"],
    },
    {
      title: "Heart Health",
      tests: ["Lipid Profile"],
    },
  ],

  includedTests: [
    "Thyroid Profile",
    "HbA1c",
    "Lipid Profile",
  ],

  seo: {
    introduction:
      "Essential Health Tests provide affordable access to commonly recommended laboratory investigations including thyroid, diabetes, and cholesterol testing.",

    whyImportant:
      "Regular testing helps detect lifestyle diseases early and supports timely medical intervention.",

    benefits:
      "Monitor thyroid function, blood sugar, and cholesterol through accurate laboratory testing.",

    homeCollection:
      "Book convenient home sample collection and receive secure digital reports.",

    conclusion:
      "Essential Health Tests are ideal for routine preventive healthcare and disease monitoring.",
  },

  faqs: [
    {
      question: "Can I book only one test?",
      answer:
        "Yes. You can choose and book any individual test according to your healthcare needs.",
    },
    {
      question: "Is fasting required?",
      answer:
        "Fasting depends on the selected test. Lipid Profile generally requires fasting while HbA1c does not.",
    },
    {
      question: "Are home collections available?",
      answer:
        "Yes. Home sample collection is available in selected locations.",
    },
    {
      question: "When will I receive my reports?",
      answer:
        "Most reports are available within 24 hours after sample collection.",
    },
  ],
},
{
  id: "senior-citizen-male-package",

  slug: "senior-citizen-male-package",

  name: "Swasthya Mitra Senior Citizen Male Package",

  shortDescription:
    "Advanced preventive health package for senior men with prostate screening, arthritis evaluation, diabetes, thyroid, vitamin assessment, and complete wellness monitoring.",

  description:
    "The Swasthya Mitra Senior Citizen Male Package is specially designed for men above 60 years of age. It includes comprehensive screening for prostate health, diabetes, thyroid disorders, liver and kidney function, vitamin deficiencies, cholesterol, inflammation markers, arthritis evaluation, and complete blood analysis for early detection of age-related health conditions.",

  tags: [
    "senior",
    "male",
    "prostate",
    "arthritis",
    "diabetes",
    "thyroid",
    "heart",
    "vitamin",
    "preventive",
  ],

  price: 1400,

  originalPrice: 1900,

  discount: "26% OFF",

  reportTime: "24-48 Hours",

  fasting: "10-12 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Men Above 60 Years",
      description:
        "Designed specifically for preventive healthcare in senior men.",
      icon: "users",
    },
    {
      title: "Prostate Health Screening",
      description:
        "Includes PSA testing for early detection of prostate-related conditions.",
      icon: "activity",
    },
    {
      title: "Diabetes & Heart Monitoring",
      description:
        "Evaluates blood sugar, cholesterol, inflammation, and cardiac risk.",
      icon: "heart",
    },
    {
      title: "Joint & Bone Health",
      description:
        "Includes arthritis and inflammation markers along with vitamin assessment.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "Fast for 10–12 Hours",
      description:
        "Fasting is recommended before blood glucose and lipid profile testing. Plain water is allowed.",
    },
    {
      title: "Drink Water",
      description:
        "Stay hydrated before your appointment for easier blood collection.",
    },
    {
      title: "Continue Medicines Only if Advised",
      description:
        "Inform our healthcare team about your medications before sample collection.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring previous reports for comparison of prostate, diabetes, and other health parameters.",
    },
    {
      title: "Relax During Collection",
      description:
        "Our trained professionals ensure a safe, comfortable, and hygienic sample collection experience.",
    },
  ],

  testsCount: 16,

  category: "Senior Citizen Health Checkup",

  rating: 4.9,

  reviews: 154,

  image: "/packages/senior-citizen-male-package.webp",

  highlights: [
    "PSA Prostate Screening",
    "Vitamin B12 & Vitamin D",
    "Advanced Lipid Profile",
    "Arthritis Screening",
    "HbA1c Diabetes Test",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Comprehensive Senior Screening",
      description:
        "Covers major age-related health risks including prostate, heart, diabetes, thyroid, and kidney health.",
    },
    {
      title: "Early Disease Detection",
      description:
        "Helps identify chronic diseases before complications develop.",
    },
    {
      title: "Healthy Aging",
      description:
        "Supports long-term wellness through regular preventive screening.",
    },
    {
      title: "Convenient Home Collection",
      description:
        "Professional doorstep sample collection with secure online reports.",
    },
  ],

  testCategories: [
    {
      title: "Prostate Health",
      tests: ["PSA Total"],
    },
    {
      title: "Diabetes",
      tests: ["Blood Glucose Fasting", "HbA1c"],
    },
    {
      title: "Heart Health",
      tests: ["Lipid Profile Advance", "HsCRP"],
    },
    {
      title: "Thyroid",
      tests: ["T3", "T4", "TSH"],
    },
    {
      title: "Vitamin Assessment",
      tests: ["Vitamin B12", "Vitamin D Total"],
    },
    {
      title: "Blood Health",
      tests: ["Complete Blood Count", "ESR Automated"],
    },
    {
      title: "Kidney Function",
      tests: ["KFT"],
    },
    {
      title: "Liver Function",
      tests: ["Liver Function Test"],
    },
    {
      title: "Arthritis Screening",
      tests: ["RA Factor Quantitative", "ANA by ELISA"],
    },
    {
      title: "Iron Studies",
      tests: ["Iron Studies"],
    },
    {
      title: "Urine Analysis",
      tests: ["Urine Routine & Microscopy"],
    },
  ],

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

  seo: {
    introduction:
      "The Swasthya Mitra Senior Citizen Male Package provides comprehensive preventive screening for men above 60 years with prostate, diabetes, thyroid, heart, vitamin, liver, and kidney evaluation.",

    whyImportant:
      "Regular health screening helps detect age-related conditions early and supports healthier aging.",

    benefits:
      "Comprehensive evaluation of prostate health, blood sugar, cholesterol, thyroid function, vitamin levels, and organ health.",

    homeCollection:
      "Convenient doorstep sample collection with secure digital reports within 24–48 hours.",

    conclusion:
      "An ideal preventive health package for senior men seeking complete annual health assessment.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "It is recommended for men above 60 years of age for annual preventive health screening.",
    },
    {
      question: "Is fasting required?",
      answer:
        "Yes. A fasting period of 10–12 hours is recommended before sample collection.",
    },
    {
      question: "Does this package include prostate screening?",
      answer:
        "Yes. PSA Total testing is included to assess prostate health.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},

{
  id: "senior-citizen-female-package",

  slug: "senior-citizen-female-package",

  name: "Swasthya Mitra Senior Citizen Female Package",

  shortDescription:
    "Comprehensive preventive health package for senior women with ovarian health screening, arthritis evaluation, diabetes, thyroid, vitamin assessment, and complete wellness monitoring.",

  description:
    "The Swasthya Mitra Senior Citizen Female Package is specially designed for women above 60 years of age. It includes ovarian cancer marker screening, diabetes assessment, thyroid profile, liver and kidney function tests, cholesterol evaluation, vitamin B12 and Vitamin D testing, arthritis screening, and complete blood analysis for early detection of age-related health conditions.",

  tags: [
    "senior",
    "female",
    "ovarian",
    "arthritis",
    "diabetes",
    "thyroid",
    "heart",
    "vitamin",
    "preventive",
  ],

  price: 1400,

  originalPrice: 1900,

  discount: "26% OFF",

  reportTime: "24-48 Hours",

  fasting: "10-12 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Women Above 60 Years",
      description:
        "Designed specifically for preventive healthcare and annual wellness screening.",
      icon: "users",
    },
    {
      title: "Ovarian Health Screening",
      description:
        "Includes CA-125 testing to support ovarian health assessment.",
      icon: "activity",
    },
    {
      title: "Diabetes & Heart Monitoring",
      description:
        "Evaluates blood sugar, cholesterol, and cardiovascular health.",
      icon: "heart",
    },
    {
      title: "Bone & Joint Health",
      description:
        "Includes arthritis screening and vitamin assessment for healthy aging.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "Fast for 10–12 Hours",
      description:
        "Fasting is recommended before blood glucose and lipid profile testing. Plain water is allowed.",
    },
    {
      title: "Drink Plenty of Water",
      description:
        "Stay hydrated before sample collection to improve comfort during blood collection.",
    },
    {
      title: "Avoid Alcohol Before Testing",
      description:
        "Avoid alcohol for at least 24 hours before testing unless advised otherwise by your doctor.",
    },
    {
      title: "Inform About Medications",
      description:
        "Tell our healthcare team about any ongoing medications or supplements before sample collection.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring previous laboratory reports for comparison whenever available.",
    },
  ],

  testsCount: 15,

  category: "Senior Citizen Health Checkup",

  rating: 4.9,

  reviews: 148,

  image: "/packages/senior-citizen-female-package.webp",

  highlights: [
    "CA-125 Screening",
    "Vitamin B12 & Vitamin D",
    "Advanced Lipid Profile",
    "Arthritis Screening",
    "HbA1c Diabetes Test",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Women's Preventive Screening",
      description:
        "Comprehensive evaluation of important health parameters for senior women.",
    },
    {
      title: "Early Disease Detection",
      description:
        "Helps identify diabetes, thyroid disorders, arthritis, and nutritional deficiencies early.",
    },
    {
      title: "Healthy Aging",
      description:
        "Supports long-term wellness through routine preventive healthcare.",
    },
    {
      title: "Convenient Home Collection",
      description:
        "Professional doorstep sample collection with secure digital reports.",
    },
  ],

  testCategories: [
    {
      title: "Women's Health",
      tests: ["CA-125"],
    },
    {
      title: "Diabetes",
      tests: ["Blood Glucose Fasting", "HbA1c"],
    },
    {
      title: "Heart Health",
      tests: ["Lipid Profile Advance"],
    },
    {
      title: "Thyroid",
      tests: ["T3", "T4", "TSH"],
    },
    {
      title: "Vitamin Assessment",
      tests: ["Vitamin B12", "Vitamin D Total"],
    },
    {
      title: "Blood Health",
      tests: ["Complete Blood Count", "ESR Automated"],
    },
    {
      title: "Kidney Function",
      tests: ["KFT"],
    },
    {
      title: "Liver Function",
      tests: ["Liver Function Test"],
    },
    {
      title: "Arthritis Screening",
      tests: ["RA Factor Quantitative", "ANA by ELISA"],
    },
    {
      title: "Iron Studies",
      tests: ["Iron Studies"],
    },
    {
      title: "Urine Analysis",
      tests: ["Urine Routine & Microscopy"],
    },
  ],

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

  seo: {
    introduction:
      "The Swasthya Mitra Senior Citizen Female Package provides comprehensive preventive health screening for women above 60 years, including ovarian health, diabetes, thyroid, vitamin, liver, kidney, and heart health assessment.",

    whyImportant:
      "Routine preventive screening helps detect age-related diseases early and supports healthier aging.",

    benefits:
      "Comprehensive assessment of women's health, diabetes, cholesterol, thyroid function, vitamin levels, and organ health.",

    homeCollection:
      "Convenient home sample collection with secure online reports within 24–48 hours.",

    conclusion:
      "An ideal annual preventive health package for senior women seeking complete wellness assessment.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "It is recommended for women above 60 years for routine preventive health screening.",
    },
    {
      question: "Does this package include ovarian health screening?",
      answer:
        "Yes. It includes the CA-125 test as part of the women's health assessment.",
    },
    {
      question: "Is fasting required?",
      answer:
        "Yes. A fasting period of 10–12 hours is recommended.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},


{
  id: "health-checkup-camp",

  slug: "health-checkup-camp",

  name: "Health Checkup Camp",

  shortDescription:
    "Affordable preventive health screening camp with diabetes, thyroid, liver, kidney, vitamin, cholesterol, and complete blood health evaluation.",

  description:
    "The Health Checkup Camp package offers a comprehensive preventive health screening at an affordable price. It includes complete blood analysis, diabetes screening, thyroid profile, liver and kidney function tests, cholesterol evaluation, vitamin assessment, arthritis screening, and urine examination to help detect lifestyle-related diseases early.",

  tags: [
    "health-camp",
    "preventive",
    "diabetes",
    "thyroid",
    "heart",
    "blood",
    "vitamin",
    "family",
    "wellness",
  ],

  price: 1250,

  originalPrice: 1800,

  discount: "31% OFF",

  reportTime: "24-48 Hours",

  fasting: "10-12 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Routine Preventive Screening",
      description:
        "Ideal for individuals looking for regular health monitoring.",
      icon: "users",
    },
    {
      title: "Family Wellness Checkups",
      description:
        "Suitable for adults who want a comprehensive preventive health assessment.",
      icon: "heart",
    },
    {
      title: "Diabetes & Heart Monitoring",
      description:
        "Helps evaluate blood sugar, cholesterol, and cardiac risk factors.",
      icon: "activity",
    },
    {
      title: "Early Disease Detection",
      description:
        "Supports timely identification of nutritional deficiencies and lifestyle diseases.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "Fast for 10–12 Hours",
      description:
        "A fasting period is recommended before blood glucose and lipid profile testing. Plain water is allowed.",
    },
    {
      title: "Drink Water Only",
      description:
        "Stay hydrated before your appointment for easier sample collection.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring previous laboratory reports if available for comparison.",
    },
    {
      title: "Inform About Medications",
      description:
        "Tell our healthcare team about any ongoing medicines before testing.",
    },
    {
      title: "Relax During Collection",
      description:
        "Our trained professionals follow safe and hygienic procedures for comfortable sample collection.",
    },
  ],

  testsCount: 13,

  category: "Preventive Health Camp",

  rating: 4.8,

  reviews: 132,

  image: "/packages/health-checkup-camp.jpg",

  highlights: [
    "Complete Blood Count",
    "HbA1c Diabetes Test",
    "Vitamin B12 & Vitamin D",
    "Lipid Profile",
    "Thyroid Profile",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Complete Health Screening",
      description:
        "Evaluates major body systems through comprehensive laboratory testing.",
    },
    {
      title: "Early Disease Detection",
      description:
        "Helps identify diabetes, thyroid disorders, nutritional deficiencies, and inflammation.",
    },
    {
      title: "Affordable Preventive Care",
      description:
        "Comprehensive health assessment at an economical price.",
    },
    {
      title: "Convenient Home Collection",
      description:
        "Professional doorstep sample collection with secure online reports.",
    },
  ],

  testCategories: [
    {
      title: "Blood Health",
      tests: ["CBC"],
    },
    {
      title: "Diabetes",
      tests: ["Fasting Glucose", "HbA1c"],
    },
    {
      title: "Heart Health",
      tests: ["Lipid Profile", "CRP Quantitative"],
    },
    {
      title: "Thyroid",
      tests: ["T3", "T4", "TSH"],
    },
    {
      title: "Vitamin Assessment",
      tests: ["Vitamin B12", "Vitamin D"],
    },
    {
      title: "Kidney Function",
      tests: ["KFT"],
    },
    {
      title: "Liver Function",
      tests: ["LFT"],
    },
    {
      title: "Iron Studies",
      tests: ["Iron Studies"],
    },
    {
      title: "Arthritis Screening",
      tests: ["RA Factor Quantitative"],
    },
    {
      title: "Urine Analysis",
      tests: ["Urine Routine & Microscopy"],
    },
  ],

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

  seo: {
    introduction:
      "The Health Checkup Camp package offers affordable preventive health screening with comprehensive laboratory investigations for overall wellness.",

    whyImportant:
      "Routine screening helps detect diabetes, thyroid disorders, vitamin deficiencies, and lifestyle diseases before symptoms become severe.",

    benefits:
      "Comprehensive assessment of blood sugar, cholesterol, thyroid, liver, kidney, vitamins, and complete blood health.",

    homeCollection:
      "Convenient home sample collection with secure online reports within 24–48 hours.",

    conclusion:
      "The Health Checkup Camp package is an excellent choice for affordable annual preventive health screening.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "It is suitable for adults looking for routine preventive health screening.",
    },
    {
      question: "Is fasting required?",
      answer:
        "Yes. A fasting period of 10–12 hours is recommended before sample collection.",
    },
    {
      question: "Are reports available online?",
      answer:
        "Yes. Reports are securely delivered online within 24–48 hours.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
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
  id: "fever-panel-basic",

  slug: "fever-panel-basic",

  name: "Fever Panel Basic",

  shortDescription:
    "Essential fever investigation package for identifying common infectious causes such as malaria, typhoid, bacterial infections, and inflammation.",

  description:
    "The Fever Panel Basic is designed for individuals experiencing fever or suspected infections. It combines complete blood analysis, malaria screening, typhoid testing, urine examination, liver enzyme assessment, and bacterial culture to help physicians identify the underlying cause of fever and begin timely treatment.",

  tags: [
    "fever",
    "infection",
    "malaria",
    "typhoid",
    "cbc",
    "urine",
    "liver",
    "diagnostic",
    "acute-illness",
  ],

  price: 500,

  originalPrice: 750,

  discount: "33% OFF",

  reportTime: "24-48 Hours",

  fasting: "Not Required",

  homeCollection: true,

  recommendedFor: [
    {
      title: "People with Fever",
      description:
        "Recommended for individuals with unexplained fever or chills.",
      icon: "thermometer",
    },
    {
      title: "Suspected Malaria or Typhoid",
      description:
        "Suitable when malaria or typhoid infection is suspected.",
      icon: "shield",
    },
    {
      title: "Recurring Infections",
      description:
        "Useful for evaluating bacterial infections and inflammation.",
      icon: "activity",
    },
    {
      title: "Doctor's Recommendation",
      description:
        "Ideal when advised by your physician for fever investigation.",
      icon: "stethoscope",
    },
  ],

  preparation: [
    {
      title: "No Fasting Required",
      description:
        "You can eat and drink normally before sample collection unless instructed otherwise by your doctor.",
    },
    {
      title: "Drink Plenty of Water",
      description:
        "Stay hydrated to make blood sample collection easier and more comfortable.",
    },
    {
      title: "Inform About Current Medicines",
      description:
        "Tell our healthcare team about antibiotics or other medicines you are currently taking.",
    },
    {
      title: "Share Your Symptoms",
      description:
        "Inform the laboratory staff about fever duration, chills, travel history, or any recent illness.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring previous laboratory reports if available for comparison.",
    },
  ],

  testsCount: 8,

  category: "Fever Panel",

  rating: 4.8,

  reviews: 92,

  image: "/packages/fever-panel-basic.jpg",

  highlights: [
    "Malaria Screening",
    "Typhoid Screening",
    "Complete Blood Count",
    "Urine Examination",
    "Culture & Sensitivity",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Early Infection Detection",
      description:
        "Helps identify common infectious causes of fever quickly.",
    },
    {
      title: "Supports Accurate Diagnosis",
      description:
        "Provides valuable information for physicians to determine appropriate treatment.",
    },
    {
      title: "Comprehensive Basic Screening",
      description:
        "Evaluates blood counts, infection markers, urine, and liver enzymes together.",
    },
    {
      title: "Convenient Home Collection",
      description:
        "Safe home sample collection by trained phlebotomists.",
    },
  ],

  testCategories: [
    {
      title: "Blood Analysis",
      tests: [
        "Complete Blood Count",
        "ESR Automated",
      ],
    },
    {
      title: "Malaria Screening",
      tests: [
        "Malarial Antigen",
        "Vivax & Falciparum",
      ],
    },
    {
      title: "Typhoid Screening",
      tests: [
        "Typhi Dot IgM",
      ],
    },
    {
      title: "Liver Function",
      tests: [
        "SGOT/AST",
        "SGPT/ALT",
      ],
    },
    {
      title: "Urine Examination",
      tests: [
        "Urine Routine & Microscopy",
      ],
    },
    {
      title: "Bacterial Culture",
      tests: [
        "Culture & Sensitivity (Aerobic Bacteria)",
      ],
    },
  ],

  includedTests: [
    "Culture & Sensitivity (Aerobic Bacteria)",
    "Urine Routine & Microscopy",
    "ESR Automated",
    "Malarial Antigen",
    "Vivax & Falciparum",
    "SGOT/AST",
    "SGPT/ALT",
    "Typhi Dot IgM",
    "Complete Blood Count",
  ],

  seo: {
    introduction:
      "The Fever Panel Basic helps diagnose common infectious causes of fever through malaria screening, typhoid testing, blood analysis, urine examination, and bacterial culture.",

    whyImportant:
      "Early diagnosis of infectious diseases helps physicians begin appropriate treatment and reduce complications.",

    benefits:
      "This package supports the diagnosis of bacterial infections, malaria, typhoid, inflammation, and related conditions.",

    homeCollection:
      "Convenient home sample collection with secure digital reports delivered within 24–48 hours.",

    conclusion:
      "The Fever Panel Basic is an affordable and effective diagnostic package for individuals experiencing fever or suspected infections.",
  },

  faqs: [
    {
      question: "Is fasting required?",
      answer:
        "No. Fasting is generally not required for this package.",
    },
    {
      question: "Can this detect malaria?",
      answer:
        "Yes. The package includes malaria antigen testing for Vivax and Falciparum.",
    },
    {
      question: "When will reports be available?",
      answer:
        "Most reports are available within 24–48 hours.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},

{
  id: "fever-panel-advance",

  slug: "fever-panel-advance",

  name: "Fever Panel Advance",

  shortDescription:
    "Advanced fever investigation package for comprehensive diagnosis of persistent fever, malaria, typhoid, infections, and inflammation.",

  description:
    "The Fever Panel Advance provides an extensive evaluation for individuals with persistent or recurrent fever. It includes malaria screening, typhoid testing, complete blood count, liver function markers, urine examination, and inflammatory markers to support accurate diagnosis and effective treatment planning.",

  tags: [
    "fever",
    "infection",
    "malaria",
    "typhoid",
    "cbc",
    "persistent-fever",
    "urine",
    "diagnostic",
  ],

  price: 1100,

  originalPrice: 1500,

  discount: "27% OFF",

  reportTime: "24-48 Hours",

  fasting: "Not Required",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Persistent Fever",
      description:
        "Recommended for fever lasting several days without a clear cause.",
      icon: "thermometer",
    },
    {
      title: "Suspected Infectious Disease",
      description:
        "Useful for evaluating malaria, typhoid, and other infections.",
      icon: "shield",
    },
    {
      title: "Doctor's Evaluation",
      description:
        "Suitable when comprehensive fever testing is advised.",
      icon: "activity",
    },
    {
      title: "Follow-up Investigation",
      description:
        "Helpful when previous basic investigations remain inconclusive.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "No Fasting Required",
      description:
        "Normal food and water intake is allowed unless advised otherwise by your physician.",
    },
    {
      title: "Stay Well Hydrated",
      description:
        "Drink sufficient water before sample collection.",
    },
    {
      title: "Inform About Current Medicines",
      description:
        "Tell our healthcare team about antibiotics or ongoing treatment.",
    },
    {
      title: "Share Complete Symptoms",
      description:
        "Mention fever duration, travel history, medications, and associated symptoms.",
    },
    {
      title: "Bring Previous Reports",
      description:
        "Carry previous laboratory reports if available for comparison.",
    },
  ],

  testsCount: 7,

  category: "Advanced Fever Panel",

  rating: 4.9,

  reviews: 86,

  image: "/packages/fever-panel-advance.jpg",

  highlights: [
    "Advanced Fever Evaluation",
    "Malaria Screening",
    "Typhoid Screening",
    "Complete Blood Count",
    "Urine Examination",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Comprehensive Fever Diagnosis",
      description:
        "Helps investigate multiple infectious and inflammatory causes of fever.",
    },
    {
      title: "Supports Medical Decision Making",
      description:
        "Provides detailed laboratory findings for accurate diagnosis.",
    },
    {
      title: "Early Disease Detection",
      description:
        "Detects infections before complications become severe.",
    },
    {
      title: "Convenient Testing",
      description:
        "Safe doorstep sample collection with digital reports.",
    },
  ],

  testCategories: [
    {
      title: "Blood Analysis",
      tests: [
        "Complete Blood Count",
        "ESR Automated",
      ],
    },
    {
      title: "Malaria Screening",
      tests: [
        "Malarial Antigen",
        "Vivax & Falciparum",
      ],
    },
    {
      title: "Typhoid Screening",
      tests: [
        "Typhi Dot IgM",
      ],
    },
    {
      title: "Liver Function",
      tests: [
        "SGOT/AST",
        "SGPT/ALT",
      ],
    },
    {
      title: "Urine Examination",
      tests: [
        "Urine Routine & Microscopy Extended",
      ],
    },
  ],

  includedTests: [
    "ESR Automated",
    "Malarial Antigen",
    "Vivax & Falciparum",
    "SGOT/AST",
    "SGPT/ALT",
    "Typhi Dot IgM",
    "Urine Routine & Microscopy Extended",
    "Complete Blood Count",
  ],

  seo: {
    introduction:
      "The Fever Panel Advance is a comprehensive diagnostic package designed for persistent fever evaluation using blood, urine, malaria, typhoid, and liver function testing.",

    whyImportant:
      "Persistent fever requires timely laboratory investigation to identify infectious diseases and begin appropriate treatment.",

    benefits:
      "This package evaluates major infectious causes of fever while supporting physicians with detailed laboratory findings.",

    homeCollection:
      "Convenient home sample collection and secure digital reporting within 24–48 hours.",

    conclusion:
      "The Fever Panel Advance is ideal for individuals needing comprehensive fever evaluation and infection screening.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "Individuals with persistent or unexplained fever should consider this package after consulting their doctor.",
    },
    {
      question: "Is fasting necessary?",
      answer:
        "No. Fasting is generally not required.",
    },
    {
      question: "When are reports available?",
      answer:
        "Reports are usually available within 24–48 hours.",
    },
    {
      question: "Is home collection available?",
      answer:
        "Yes. Home sample collection is available in selected locations.",
    },
  ],
},




{
  id: "home-sample-collection",

  slug: "home-sample-collection",

  name: "Home Sample Collection",

  shortDescription:
    "Professional doorstep blood sample collection by trained phlebotomists with safe, hygienic procedures and digital reporting.",

  description:
    "Our Home Sample Collection service allows you to get laboratory tests done from the comfort of your home. Trained phlebotomists visit your preferred location, collect samples using sterile equipment, and ensure safe transportation to our laboratory for accurate testing and timely report delivery.",

  tags: [
    "home-collection",
    "blood-sample",
    "doorstep-service",
    "preventive-health",
    "laboratory",
    "diagnostic",
    "health-checkup",
  ],

  price: 0,

  originalPrice: 0,

  discount: "FREE",

  reportTime: "24-48 Hours",

  fasting: "Depends on Test",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Senior Citizens",
      description:
        "Ideal for elderly individuals who prefer testing without traveling.",
      icon: "users",
    },
    {
      title: "Working Professionals",
      description:
        "Convenient testing without interrupting your daily schedule.",
      icon: "briefcase",
    },
    {
      title: "Patients with Limited Mobility",
      description:
        "Suitable for people recovering from illness or unable to visit the laboratory.",
      icon: "home",
    },
    {
      title: "Routine Health Monitoring",
      description:
        "Perfect for diabetes, thyroid, cholesterol, and regular preventive health testing.",
      icon: "activity",
    },
  ],

  preparation: [
    {
      title: "Book Your Appointment",
      description:
        "Choose your preferred date and time for home sample collection.",
    },
    {
      title: "Follow Test Instructions",
      description:
        "If your selected test requires fasting, avoid food for the recommended duration. Plain water is allowed unless instructed otherwise.",
    },
    {
      title: "Keep Previous Reports Ready",
      description:
        "Previous laboratory reports and prescriptions help doctors compare your health parameters.",
    },
    {
      title: "Stay Hydrated",
      description:
        "Drink sufficient water before collection unless your doctor has advised otherwise.",
    },
    {
      title: "Relax During Collection",
      description:
        "Our trained phlebotomists use sterile equipment and follow hygienic procedures for a comfortable experience.",
    },
  ],

  testsCount: 0,

  category: "Home Healthcare Service",

  rating: 4.9,

  reviews: 325,

  image: "/packages/home-sample-collection.jpg",

  highlights: [
    "Doorstep Sample Collection",
    "Experienced Phlebotomists",
    "Safe & Hygienic Procedure",
    "Flexible Appointment Timing",
    "Digital Reports",
    "Suitable for All Age Groups",
  ],

  benefits: [
    {
      title: "Maximum Convenience",
      description:
        "Get tested without visiting the laboratory.",
    },
    {
      title: "Safe Collection",
      description:
        "Sterile equipment and trained professionals ensure patient safety.",
    },
    {
      title: "Time Saving",
      description:
        "Avoid waiting in queues and travel time.",
    },
    {
      title: "Reliable Testing",
      description:
        "Samples are transported safely for accurate laboratory analysis.",
    },
  ],

  seo: {
    introduction:
      "Our Home Sample Collection service provides safe and convenient doorstep blood sample collection by trained professionals.",

    whyImportant:
      "Home collection makes preventive healthcare accessible for seniors, busy professionals, and patients with mobility limitations.",

    benefits:
      "Enjoy convenient booking, hygienic collection, secure sample handling, and fast digital reports.",

    homeCollection:
      "Professional home collection service is available in selected service areas.",

    conclusion:
      "Book your home sample collection today for a comfortable and hassle-free diagnostic experience.",
  },

  faqs: [
    {
      question: "Is home sample collection free?",
      answer:
        "Home collection is available for eligible locations. Charges may vary depending on your area and selected tests.",
    },
    {
      question: "Can I book any laboratory test?",
      answer:
        "Most blood tests and health packages are available for home collection.",
    },
    {
      question: "When will I receive my reports?",
      answer:
        "Most reports are delivered digitally within 24–48 hours depending on the selected tests.",
    },
    {
      question: "Is fasting required?",
      answer:
        "Only if your selected test requires fasting. Our team will guide you while confirming your appointment.",
    },
  ],
},

{
  id: "swasthya-mitra-basic",

  slug: "swasthya-mitra-basic",

  name: "Swasthya Mitra Basic",

  shortDescription:
    "Affordable preventive health package covering diabetes, thyroid, liver, kidney, cholesterol, urine examination, and complete blood analysis.",

  description:
    "The Swasthya Mitra Basic Package is a preventive health screening designed for routine wellness monitoring. It evaluates blood sugar, thyroid function, liver health, kidney function, cholesterol, urine health, and complete blood parameters to help detect common lifestyle-related diseases at an early stage.",

  tags: [
    "full-body",
    "basic-health",
    "diabetes",
    "thyroid",
    "liver",
    "kidney",
    "cholesterol",
    "preventive",
    "wellness",
  ],

  price: 1000,

  originalPrice: 1400,

  discount: "29% OFF",

  reportTime: "24-48 Hours",

  fasting: "10-12 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Adults Above 18 Years",
      description:
        "Suitable for routine preventive health screening and annual wellness checkups.",
      icon: "users",
    },
    {
      title: "Working Professionals",
      description:
        "Ideal for monitoring overall health despite a busy lifestyle.",
      icon: "briefcase",
    },
    {
      title: "People with Family History of Diabetes",
      description:
        "Supports early detection of diabetes and cholesterol-related conditions.",
      icon: "activity",
    },
    {
      title: "Routine Wellness Monitoring",
      description:
        "Recommended for annual preventive health assessment.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "Fast for 10–12 Hours",
      description:
        "Fasting is recommended because this package includes Blood Glucose and Lipid Profile tests. Plain water is allowed.",
    },
    {
      title: "Drink Water",
      description:
        "Stay hydrated before sample collection for a comfortable experience.",
    },
    {
      title: "Avoid Alcohol Before Testing",
      description:
        "Avoid alcohol and heavy meals before your appointment for accurate results.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring previous laboratory reports if available for better comparison.",
    },
    {
      title: "Continue Medicines Only if Advised",
      description:
        "Inform our healthcare team about your medications before sample collection.",
    },
  ],

  testsCount: 8,

  category: "Preventive Health Checkup",

  rating: 4.8,

  reviews: 154,

  image: "/packages/swasthya-mitra-basic.jpg",

  highlights: [
    "Blood Sugar Screening",
    "Complete Blood Count",
    "Thyroid Profile",
    "Liver & Kidney Function",
    "Lipid Profile",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Routine Health Assessment",
      description:
        "Provides an overview of your overall health status.",
    },
    {
      title: "Early Disease Detection",
      description:
        "Helps identify diabetes, thyroid disorders, cholesterol issues, and organ dysfunction.",
    },
    {
      title: "Preventive Healthcare",
      description:
        "Supports timely lifestyle changes and medical intervention.",
    },
    {
      title: "Affordable Wellness Package",
      description:
        "Comprehensive preventive screening at an affordable price.",
    },
  ],

  testCategories: [
    {
      title: "Blood Sugar",
      tests: [
        "Blood Glucose Fasting",
      ],
    },
    {
      title: "Blood Health",
      tests: [
        "Complete Blood Count",
        "ESR Automated",
      ],
    },
    {
      title: "Thyroid Health",
      tests: [
        "Thyroid Profile (T3, T4, TSH)",
      ],
    },
    {
      title: "Liver Function",
      tests: [
        "Liver Function Test",
      ],
    },
    {
      title: "Kidney Function",
      tests: [
        "KFT With K",
      ],
    },
    {
      title: "Heart Health",
      tests: [
        "Lipid Profile",
      ],
    },
    {
      title: "Urine Analysis",
      tests: [
        "Urine Routine & Microscopy Extended",
      ],
    },
  ],

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

  seo: {
    introduction:
      "The Swasthya Mitra Basic Package offers essential preventive health screening including diabetes, thyroid, liver, kidney, cholesterol, and blood health evaluation.",

    whyImportant:
      "Routine preventive health screening helps identify common lifestyle diseases before symptoms become severe.",

    benefits:
      "This package evaluates major body systems to support early diagnosis and long-term wellness.",

    homeCollection:
      "Convenient home sample collection with secure digital reports within 24–48 hours.",

    conclusion:
      "The Swasthya Mitra Basic Package is an affordable choice for annual preventive health checkups and routine wellness monitoring.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "Adults looking for routine preventive health screening and annual wellness checkups.",
    },
    {
      question: "Is fasting required?",
      answer:
        "Yes. A fasting period of 10–12 hours is recommended.",
    },
    {
      question: "How long does it take to receive reports?",
      answer:
        "Reports are generally available within 24–48 hours.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},

{
  id: "swasthya-mitra-advance",

  slug: "swasthya-mitra-advance",

  name: "Swasthya Mitra Advance",

  shortDescription:
    "Advanced preventive health package with diabetes screening, iron studies, thyroid profile, liver and kidney function tests, cholesterol evaluation, and complete blood analysis.",

  description:
    "The Swasthya Mitra Advance Package is designed for individuals who need a more comprehensive preventive health assessment. It evaluates blood sugar, long-term diabetes control, iron levels, thyroid health, liver and kidney function, cholesterol, urine health, and complete blood parameters to help detect nutritional deficiencies and lifestyle-related diseases at an early stage.",

  tags: [
    "full-body",
    "preventive-health",
    "diabetes",
    "hba1c",
    "iron",
    "thyroid",
    "liver",
    "kidney",
    "cholesterol",
    "wellness",
  ],

  price: 1300,

  originalPrice: 1800,

  discount: "28% OFF",

  reportTime: "24-48 Hours",

  fasting: "10-12 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Adults Above 18 Years",
      description:
        "Suitable for annual preventive health screening and routine wellness monitoring.",
      icon: "users",
    },
    {
      title: "People with Diabetes Risk",
      description:
        "Includes fasting glucose and HbA1c for better diabetes assessment.",
      icon: "activity",
    },
    {
      title: "Individuals with Fatigue",
      description:
        "Iron studies help detect iron deficiency and nutritional problems.",
      icon: "heart",
    },
    {
      title: "Working Professionals",
      description:
        "Ideal for busy individuals looking for a complete health evaluation.",
      icon: "briefcase",
    },
    {
      title: "Routine Preventive Screening",
      description:
        "Recommended for maintaining long-term health and early disease detection.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "Fast for 10–12 Hours",
      description:
        "Fasting is recommended because this package includes Blood Glucose, HbA1c, and Lipid Profile. Plain water is allowed.",
    },
    {
      title: "Stay Hydrated",
      description:
        "Drink enough water before sample collection to improve comfort during blood collection.",
    },
    {
      title: "Avoid Heavy Meals & Alcohol",
      description:
        "Avoid alcohol and heavy meals before testing for the most accurate laboratory results.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring previous laboratory reports or prescriptions if available for comparison.",
    },
    {
      title: "Inform About Medications",
      description:
        "Tell our healthcare team about any medicines or supplements you are taking before sample collection.",
    },
  ],

  testsCount: 10,

  category: "Preventive Health Checkup",

  rating: 4.9,

  reviews: 167,

  image: "/packages/swasthya-mitra-advance.jpg",

  highlights: [
    "HbA1c Diabetes Screening",
    "Iron Studies",
    "Complete Blood Count",
    "Thyroid Profile",
    "Liver & Kidney Function",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Comprehensive Wellness Assessment",
      description:
        "Evaluates blood health, thyroid function, liver, kidneys, diabetes, cholesterol, and iron levels.",
    },
    {
      title: "Early Detection",
      description:
        "Helps identify diabetes, anemia, thyroid disorders, and organ dysfunction before symptoms worsen.",
    },
    {
      title: "Diabetes Monitoring",
      description:
        "Includes HbA1c for long-term blood sugar assessment.",
    },
    {
      title: "Preventive Healthcare",
      description:
        "Supports early diagnosis and healthier lifestyle decisions.",
    },
  ],

  testCategories: [
    {
      title: "Blood Sugar",
      tests: [
        "Blood Glucose Fasting",
        "HbA1c",
      ],
    },
    {
      title: "Blood Health",
      tests: [
        "Complete Blood Count",
        "ESR Automated",
      ],
    },
    {
      title: "Iron Studies",
      tests: [
        "Iron Studies",
      ],
    },
    {
      title: "Thyroid Health",
      tests: [
        "Thyroid Profile",
      ],
    },
    {
      title: "Liver Function",
      tests: [
        "Liver Function Test",
      ],
    },
    {
      title: "Kidney Function",
      tests: [
        "KFT With K",
      ],
    },
    {
      title: "Heart Health",
      tests: [
        "Lipid Profile",
      ],
    },
    {
      title: "Urine Analysis",
      tests: [
        "Urine Routine & Microscopy Extended",
      ],
    },
  ],

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

  seo: {
    introduction:
      "The Swasthya Mitra Advance Package combines diabetes screening, iron studies, thyroid profile, liver and kidney evaluation, cholesterol testing, and complete blood analysis into one comprehensive preventive health package.",

    whyImportant:
      "Routine health screening helps identify diabetes, anemia, thyroid disorders, and lifestyle-related diseases before complications develop.",

    benefits:
      "This package evaluates multiple body systems to provide a detailed overview of your health and support early diagnosis.",

    homeCollection:
      "Convenient home sample collection by trained professionals with secure digital reports delivered within 24–48 hours.",

    conclusion:
      "The Swasthya Mitra Advance Package is ideal for adults seeking comprehensive preventive healthcare and routine wellness monitoring.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "Adults looking for a comprehensive preventive health checkup, especially those at risk of diabetes or iron deficiency.",
    },
    {
      question: "Is fasting required?",
      answer:
        "Yes. A fasting period of 10–12 hours is recommended.",
    },
    {
      question: "When will I receive my reports?",
      answer:
        "Reports are generally available within 24–48 hours.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},

{
  id: "swasthya-mitra-super",

  slug: "swasthya-mitra-super",

  name: "Swasthya Mitra Super",

  shortDescription:
    "Comprehensive preventive health package with advanced lipid profile, diabetes screening, vitamin assessment, inflammation markers, arthritis screening, thyroid evaluation, and complete wellness analysis.",

  description:
    "The Swasthya Mitra Super Package is a comprehensive preventive health screening designed to provide a detailed assessment of your overall health. It evaluates diabetes, cholesterol, thyroid function, liver and kidney health, vitamin deficiencies, inflammation, arthritis risk, and complete blood parameters, helping detect lifestyle-related diseases and nutritional deficiencies before symptoms become severe.",

  tags: [
    "full-body",
    "preventive-health",
    "diabetes",
    "vitamin-d",
    "vitamin-b12",
    "iron",
    "arthritis",
    "cholesterol",
    "thyroid",
    "wellness",
    "heart",
  ],

  price: 2300,

  originalPrice: 3200,

  discount: "28% OFF",

  reportTime: "24-48 Hours",

  fasting: "10-12 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Adults Above 18 Years",
      description:
        "Recommended for annual preventive health screening and complete wellness assessment.",
      icon: "users",
    },
    {
      title: "People with Chronic Disease Risk",
      description:
        "Suitable for monitoring diabetes, cholesterol, inflammation, and thyroid disorders.",
      icon: "activity",
    },
    {
      title: "People with Fatigue or Weakness",
      description:
        "Helps detect vitamin deficiencies, iron deficiency, and metabolic disorders.",
      icon: "heart",
    },
    {
      title: "Working Professionals",
      description:
        "Ideal for busy individuals who want a comprehensive health evaluation.",
      icon: "briefcase",
    },
    {
      title: "Routine Preventive Screening",
      description:
        "Supports early disease detection and long-term health monitoring.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "Fast for 10–12 Hours",
      description:
        "This package includes Blood Glucose, HbA1c, and Lipid Profile tests, so fasting for 10–12 hours is recommended. Plain water is allowed.",
    },
    {
      title: "Drink Plenty of Water",
      description:
        "Stay hydrated before your appointment to make blood collection easier and more comfortable.",
    },
    {
      title: "Avoid Alcohol Before Testing",
      description:
        "Avoid alcohol and heavy meals for at least 24 hours before sample collection.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring previous laboratory reports and prescriptions if available for comparison.",
    },
    {
      title: "Inform About Medications",
      description:
        "Tell our healthcare team about any medications or supplements you are currently taking.",
    },
  ],

  testsCount: 15,

  category: "Comprehensive Preventive Health Checkup",

  rating: 4.9,

  reviews: 193,

  image: "/packages/swasthya-mitra-super.jpg",

  highlights: [
    "Advanced Lipid Profile",
    "Vitamin B12 & Vitamin D",
    "HbA1c Diabetes Screening",
    "Iron Studies",
    "RA Factor & CRP",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Complete Wellness Assessment",
      description:
        "Evaluates diabetes, cholesterol, thyroid, liver, kidneys, blood health, vitamins, and inflammation markers.",
    },
    {
      title: "Early Disease Detection",
      description:
        "Helps detect diabetes, anemia, vitamin deficiencies, thyroid disorders, arthritis, and cardiovascular risk.",
    },
    {
      title: "Inflammation & Arthritis Screening",
      description:
        "Includes RA Factor and CRP to help identify inflammatory and autoimmune conditions.",
    },
    {
      title: "Long-Term Preventive Healthcare",
      description:
        "Supports proactive health management and timely medical intervention.",
    },
  ],

  testCategories: [
    {
      title: "Blood Sugar",
      tests: [
        "Blood Glucose Fasting",
        "HbA1c",
      ],
    },
    {
      title: "Blood Health",
      tests: [
        "Complete Blood Count",
        "ESR Automated",
      ],
    },
    {
      title: "Thyroid Health",
      tests: [
        "Thyroid Profile",
      ],
    },
    {
      title: "Liver Function",
      tests: [
        "Liver Function Test",
      ],
    },
    {
      title: "Kidney Function",
      tests: [
        "KFT With K",
      ],
    },
    {
      title: "Heart Health",
      tests: [
        "Lipid Profile",
        "Lipid Profile Advance",
      ],
    },
    {
      title: "Vitamin Assessment",
      tests: [
        "Vitamin B12",
        "Vitamin D Total",
      ],
    },
    {
      title: "Iron Studies",
      tests: [
        "Iron Studies",
      ],
    },
    {
      title: "Inflammation & Arthritis",
      tests: [
        "CRP",
        "RA Factor",
      ],
    },
    {
      title: "Urine Analysis",
      tests: [
        "Urine Routine & Microscopy Extended",
      ],
    },
  ],

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

  seo: {
    introduction:
      "The Swasthya Mitra Super Package provides comprehensive preventive health screening with diabetes evaluation, advanced cholesterol testing, vitamin assessment, inflammation markers, thyroid profile, liver and kidney function, and complete blood analysis.",

    whyImportant:
      "Routine preventive health screening helps detect diabetes, vitamin deficiencies, arthritis, inflammation, thyroid disorders, and cardiovascular risk before serious complications develop.",

    benefits:
      "This package provides a detailed overview of multiple body systems to support early diagnosis and preventive healthcare.",

    homeCollection:
      "Enjoy convenient home sample collection by trained professionals with secure digital reports delivered within 24–48 hours.",

    conclusion:
      "The Swasthya Mitra Super Package is an excellent choice for individuals seeking an advanced annual health checkup and complete wellness evaluation.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "Adults looking for a comprehensive preventive health screening, especially those with diabetes, cholesterol, vitamin deficiency, or arthritis risk.",
    },
    {
      question: "Is fasting required?",
      answer:
        "Yes. A fasting period of 10–12 hours is recommended for accurate blood glucose and lipid profile results.",
    },
    {
      question: "When will reports be available?",
      answer:
        "Reports are generally available within 24–48 hours after sample collection.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},
{
  id: "jaanch-heart-screening",

  slug: "jaanch-heart-screening",

  name: "Jaanch Heart Screening",

  shortDescription:
    "Comprehensive cardiac risk screening package with advanced cholesterol markers, inflammation assessment, and cardiovascular risk evaluation.",

  description:
    "The Jaanch Heart Screening Package is designed to assess your cardiovascular health using advanced cardiac risk markers beyond a routine lipid profile. It evaluates cholesterol metabolism, inflammation, homocysteine levels, and inherited cardiovascular risk factors to help identify the possibility of heart disease before symptoms develop.",

  tags: [
    "heart",
    "cardiac",
    "cholesterol",
    "lipid-profile",
    "hs-crp",
    "homocysteine",
    "cardiovascular",
    "preventive",
    "wellness",
  ],

  price: 899,

  originalPrice: 1299,

  discount: "31% OFF",

  reportTime: "24-48 Hours",

  fasting: "10-12 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Adults Above 30 Years",
      description:
        "Recommended for routine cardiovascular risk assessment.",
      icon: "users",
    },
    {
      title: "People with High Cholesterol",
      description:
        "Provides advanced cholesterol and lipid risk evaluation.",
      icon: "heart",
    },
    {
      title: "Family History of Heart Disease",
      description:
        "Suitable for individuals with hereditary cardiovascular risk.",
      icon: "activity",
    },
    {
      title: "People with Diabetes or Hypertension",
      description:
        "Helps monitor additional cardiac risk factors associated with chronic diseases.",
      icon: "shield",
    },
    {
      title: "Preventive Heart Screening",
      description:
        "Supports early detection of cardiovascular disease before symptoms appear.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "Fast for 10–12 Hours",
      description:
        "Fasting is recommended because this package includes a Lipid Profile and advanced cardiac biomarkers. Plain water is allowed.",
    },
    {
      title: "Stay Hydrated",
      description:
        "Drink sufficient water before sample collection unless advised otherwise.",
    },
    {
      title: "Avoid Alcohol & Smoking",
      description:
        "Avoid alcohol and smoking for at least 24 hours before testing for accurate cardiovascular marker assessment.",
    },
    {
      title: "Carry Previous Cardiac Reports",
      description:
        "Bring previous ECGs, lipid reports, or cardiac investigations if available.",
    },
    {
      title: "Continue Medicines Only if Advised",
      description:
        "Inform our healthcare team about any heart medications before sample collection.",
    },
  ],

  testsCount: 7,

  category: "Heart Health Screening",

  rating: 4.9,

  reviews: 128,

  image: "/packages/jaanch-heart-screening.jpg",

  highlights: [
    "Advanced Cardiac Risk Markers",
    "Lipid Profile",
    "hs-CRP",
    "Homocysteine",
    "Lipoprotein (a)",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Early Heart Disease Detection",
      description:
        "Identifies cardiovascular risk factors before symptoms become severe.",
    },
    {
      title: "Advanced Cholesterol Assessment",
      description:
        "Evaluates multiple cholesterol markers beyond a standard lipid profile.",
    },
    {
      title: "Inflammation Screening",
      description:
        "Measures hs-CRP to assess inflammation associated with cardiovascular disease.",
    },
    {
      title: "Preventive Heart Care",
      description:
        "Supports proactive lifestyle changes and timely medical intervention.",
    },
  ],

  testCategories: [
    {
      title: "Cholesterol Assessment",
      tests: [
        "Lipid Profile",
        "Apolipoprotein A1",
        "Apolipoprotein B",
        "Apo B / Apo A1 Ratio",
      ],
    },
    {
      title: "Cardiac Risk Markers",
      tests: [
        "Lipoprotein (a)",
        "Homocysteine",
      ],
    },
    {
      title: "Inflammation",
      tests: [
        "hs-CRP",
      ],
    },
  ],

  includedTests: [
    "hs-CRP",
    "Lipoprotein (a)",
    "Apo B / Apo A1 Ratio",
    "Apolipoprotein A1",
    "Apolipoprotein B",
    "Homocysteine",
    "Lipid Profile",
  ],

  seo: {
    introduction:
      "The Jaanch Heart Screening Package provides advanced cardiovascular risk assessment using cholesterol markers, inflammation tests, and cardiac biomarkers for early heart disease detection.",

    whyImportant:
      "Heart disease often develops silently. Regular cardiac screening helps identify cardiovascular risk factors before symptoms appear.",

    benefits:
      "This package evaluates advanced lipid markers, inflammation, and inherited cardiovascular risks to support preventive heart care.",

    homeCollection:
      "Convenient home sample collection is available with secure digital reports delivered within 24–48 hours.",

    conclusion:
      "The Jaanch Heart Screening Package is ideal for adults seeking preventive cardiovascular screening and advanced cholesterol assessment.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "Adults above 30 years, people with diabetes, high cholesterol, hypertension, or a family history of heart disease.",
    },
    {
      question: "Is fasting required?",
      answer:
        "Yes. A fasting period of 10–12 hours is recommended for accurate lipid profile results.",
    },
    {
      question: "When will I receive my reports?",
      answer:
        "Reports are generally available within 24–48 hours after sample collection.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},
{
  id: "jaanch-heart-advanced",

  slug: "jaanch-heart-advanced",

  name: "Jaanch Heart Advanced",

  shortDescription:
    "Advanced cardiac health package combining heart risk assessment with diabetes, kidney function, electrolyte balance, and complete blood health evaluation.",

  description:
    "The Jaanch Heart Advanced Package is a comprehensive cardiovascular screening designed to evaluate heart health beyond routine cholesterol testing. It includes advanced cardiac risk markers, Troponin I for heart muscle injury assessment, diabetes screening, kidney function, electrolyte balance, complete blood count, and lipid profile to help identify cardiovascular risk factors at an early stage.",

  tags: [
    "heart",
    "cardiac",
    "cholesterol",
    "troponin",
    "diabetes",
    "kidney",
    "lipid-profile",
    "preventive",
    "cardiovascular",
  ],

  price: 2199,

  originalPrice: 2999,

  discount: "27% OFF",

  reportTime: "24-48 Hours",

  fasting: "10-12 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Adults Above 35 Years",
      description:
        "Recommended for routine cardiovascular risk assessment and preventive heart care.",
      icon: "users",
    },
    {
      title: "People with High Blood Pressure",
      description:
        "Helps monitor cardiovascular risk associated with hypertension.",
      icon: "heart",
    },
    {
      title: "Individuals with Diabetes",
      description:
        "Useful for evaluating heart and kidney health affected by diabetes.",
      icon: "activity",
    },
    {
      title: "Family History of Heart Disease",
      description:
        "Supports early detection of inherited cardiovascular risk factors.",
      icon: "shield",
    },
    {
      title: "Preventive Heart Screening",
      description:
        "Suitable for individuals seeking a detailed cardiac health evaluation.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "Fast for 10–12 Hours",
      description:
        "Fasting is recommended for accurate Lipid Profile and blood glucose measurements. Plain water is permitted.",
    },
    {
      title: "Drink Plenty of Water",
      description:
        "Stay well hydrated before sample collection to improve comfort during blood draw.",
    },
    {
      title: "Avoid Heavy Exercise",
      description:
        "Avoid strenuous physical activity for at least 24 hours before testing as it may influence cardiac biomarkers.",
    },
    {
      title: "Continue Medicines Only if Advised",
      description:
        "Inform our healthcare team about all medications you are taking. Do not stop prescribed medicines unless advised by your doctor.",
    },
    {
      title: "Carry Previous Cardiac Reports",
      description:
        "Bring previous ECGs, echocardiograms, stress tests, or laboratory reports for comparison whenever available.",
    },
  ],

  testsCount: 7,

  category: "Cardiac Health Checkup",

  rating: 4.9,

  reviews: 152,

  image: "/packages/jaanch-heart-advanced.jpg",

  highlights: [
    "Advanced Cardiac Risk Assessment",
    "Troponin I Screening",
    "Complete Lipid Profile",
    "Kidney Function Evaluation",
    "Diabetes Screening",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Comprehensive Heart Evaluation",
      description:
        "Assesses multiple cardiovascular risk markers beyond routine cholesterol testing.",
    },
    {
      title: "Early Heart Disease Detection",
      description:
        "Helps identify heart attack risk and cardiovascular abnormalities before symptoms become severe.",
    },
    {
      title: "Kidney & Diabetes Monitoring",
      description:
        "Evaluates kidney function and diabetes, both of which significantly affect heart health.",
    },
    {
      title: "Preventive Cardiovascular Care",
      description:
        "Supports early intervention and healthier lifestyle decisions for long-term heart wellness.",
    },
  ],

  testCategories: [
    {
      title: "Cardiac Risk",
      tests: [
        "Cardiac Risk Markers",
        "Troponin I (Heart Attack Risk)",
      ],
    },
    {
      title: "Heart Health",
      tests: [
        "Lipid Profile",
      ],
    },
    {
      title: "Diabetes Screening",
      tests: [
        "Diabetes Profile",
      ],
    },
    {
      title: "Kidney Function",
      tests: [
        "Kidney Profile",
      ],
    },
    {
      title: "Blood Health",
      tests: [
        "Complete Blood Count (CBC)",
      ],
    },
    {
      title: "Electrolyte Balance",
      tests: [
        "Serum Electrolytes",
      ],
    },
  ],

  includedTests: [
    "Cardiac Risk Markers",
    "Lipid Profile",
    "Troponin I (Heart Attack Risk)",
    "Kidney Profile",
    "Diabetes Profile",
    "Complete Blood Count (CBC)",
    "Serum Electrolytes",
  ],

  seo: {
    introduction:
      "The Jaanch Heart Advanced Package offers an advanced cardiovascular assessment by combining cardiac biomarkers, cholesterol testing, kidney evaluation, diabetes screening, and complete blood analysis.",

    whyImportant:
      "Early identification of cardiovascular risk factors can help prevent heart attack, stroke, and other serious heart diseases through timely treatment and lifestyle modifications.",

    benefits:
      "This package evaluates heart health, cholesterol, kidney function, diabetes, blood health, and electrolyte balance for a comprehensive preventive assessment.",

    homeCollection:
      "Enjoy safe home sample collection by trained professionals with secure digital reports delivered within 24–48 hours.",

    conclusion:
      "The Jaanch Heart Advanced Package is an ideal preventive screening solution for individuals seeking a detailed evaluation of their cardiovascular health and associated risk factors.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "It is recommended for adults above 35 years, individuals with diabetes or high blood pressure, and anyone with a family history of heart disease.",
    },
    {
      question: "Is fasting required?",
      answer:
        "Yes. A fasting period of 10–12 hours is recommended for accurate lipid profile and blood glucose results.",
    },
    {
      question: "When will my reports be available?",
      answer:
        "Reports are generally delivered online within 24–48 hours after sample collection.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service locations.",
    },
  ],
},
{
  id: "jaanch-heart-comprehensive",

  slug: "jaanch-heart-comprehensive",

  name: "Jaanch Heart Comprehensive",

  shortDescription:
    "Comprehensive cardiac health package with advanced heart biomarkers, diabetes screening, kidney and liver evaluation, electrolyte analysis, and heart failure risk assessment.",

  description:
    "The Jaanch Heart Comprehensive Package is our most advanced cardiovascular screening package. It combines detailed cardiac risk markers, Troponin I, NT-ProBNP, Lp-PLA2, CPK, diabetes profile, kidney function, liver function, lipid profile, electrolyte analysis, and complete blood testing to provide an in-depth evaluation of heart health, helping identify cardiovascular disease and heart failure risk at an early stage.",

  tags: [
    "heart",
    "cardiac",
    "cholesterol",
    "heart-attack",
    "heart-failure",
    "diabetes",
    "kidney",
    "liver",
    "lipid",
    "preventive",
    "wellness",
  ],

  price: 3499,

  originalPrice: 4999,

  discount: "30% OFF",

  reportTime: "24-48 Hours",

  fasting: "10-12 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "High Cardiac Risk Individuals",
      description:
        "Recommended for people with multiple cardiovascular risk factors.",
      icon: "heart",
    },
    {
      title: "Patients with Existing Heart Disease",
      description:
        "Useful for comprehensive cardiac health monitoring.",
      icon: "activity",
    },
    {
      title: "Diabetic & Hypertensive Patients",
      description:
        "Supports evaluation of diabetes-related cardiovascular complications.",
      icon: "shield",
    },
    {
      title: "Senior Adults",
      description:
        "Ideal for annual heart health and preventive cardiovascular assessment.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "Fast for 10–12 Hours",
      description:
        "A fasting period is recommended for accurate lipid profile and metabolic test results. Plain water is allowed.",
    },
    {
      title: "Drink Water",
      description:
        "Stay hydrated before sample collection for a comfortable experience.",
    },
    {
      title: "Avoid Alcohol & Heavy Exercise",
      description:
        "Avoid alcohol and strenuous exercise for at least 24 hours before testing.",
    },
    {
      title: "Carry Previous Cardiac Reports",
      description:
        "Bring previous ECG, Echo, angiography, stress test, or laboratory reports for comparison.",
    },
    {
      title: "Continue Medicines Only if Advised",
      description:
        "Do not stop prescribed heart medications unless instructed by your doctor.",
    },
  ],

  testsCount: 11,

  category: "Heart Health Package",

  rating: 4.9,

  reviews: 166,

  image: "/packages/jaanch-heart-comprehensive.jpg",

  highlights: [
    "Advanced Cardiac Biomarkers",
    "Heart Failure Screening",
    "Troponin I",
    "Lp-PLA2",
    "NT-ProBNP",
    "Complete Heart Health Assessment",
  ],

  benefits: [
    {
      title: "Complete Cardiac Evaluation",
      description:
        "Provides an extensive assessment of cardiovascular health and heart function.",
    },
    {
      title: "Heart Failure Risk Assessment",
      description:
        "Includes NT-ProBNP for evaluation of heart failure risk.",
    },
    {
      title: "Early Heart Disease Detection",
      description:
        "Detects cardiovascular disease before severe symptoms develop.",
    },
    {
      title: "Comprehensive Preventive Screening",
      description:
        "Supports long-term heart health through early diagnosis and preventive care.",
    },
  ],

  testCategories: [
    {
      title: "Cardiac Biomarkers",
      tests: [
        "Troponin I",
        "NT-ProBNP",
        "Lp-PLA2",
        "CPK",
      ],
    },
    {
      title: "Cardiac Risk Profile",
      tests: [
        "Cardiac Risk Markers",
        "Lipid Profile",
      ],
    },
    {
      title: "Diabetes Screening",
      tests: [
        "Diabetes Profile",
      ],
    },
    {
      title: "Kidney Function",
      tests: [
        "Kidney Profile",
      ],
    },
    {
      title: "Liver Function",
      tests: [
        "Liver Profile",
      ],
    },
    {
      title: "Blood Health",
      tests: [
        "Complete Blood Count",
      ],
    },
    {
      title: "Electrolytes",
      tests: [
        "Serum Electrolytes",
      ],
    },
  ],

  includedTests: [
    "Cardiac Risk Markers",
    "Lipid Profile",
    "Troponin I",
    "Kidney Profile",
    "Diabetes Profile",
    "Complete Blood Count",
    "Serum Electrolytes",
    "Lp-PLA2",
    "CPK",
    "NT-ProBNP",
    "Liver Profile",
  ],

  seo: {
    introduction:
      "The Jaanch Heart Comprehensive Package is an advanced cardiovascular screening package designed to evaluate heart disease risk, heart failure, cholesterol, diabetes, kidney function, liver function, and overall cardiovascular wellness.",

    whyImportant:
      "Advanced cardiac screening helps detect heart disease, heart failure, and cardiovascular complications before symptoms become severe.",

    benefits:
      "The package combines cardiac biomarkers, lipid profile, diabetes assessment, kidney and liver evaluation for complete cardiovascular health monitoring.",

    homeCollection:
      "Convenient home sample collection is available with secure online reports delivered within 24–48 hours.",

    conclusion:
      "The Jaanch Heart Comprehensive Package is an ideal choice for individuals seeking the most complete preventive cardiovascular health assessment.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "It is recommended for individuals with high cardiovascular risk, heart disease, diabetes, hypertension, or those seeking comprehensive heart screening.",
    },
    {
      question: "Is fasting required?",
      answer:
        "Yes. A fasting period of 10–12 hours is recommended for accurate lipid profile and metabolic test results.",
    },
    {
      question: "How long does it take to receive reports?",
      answer:
        "Reports are generally available within 24–48 hours after sample collection.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},
{
  id: "aarogyam-a-pro",

  slug: "aarogyam-a-pro",

  name: "Aarogyam A Pro",

  shortDescription:
    "Comprehensive preventive health package covering diabetes, thyroid, liver, kidney, cholesterol, vitamins, and complete blood health assessment.",

  description:
    "The Aarogyam A Pro Package is a preventive health screening designed to evaluate your overall wellness through essential laboratory investigations. It includes thyroid assessment, diabetes screening, liver and kidney function, cholesterol evaluation, vitamin B12 and Vitamin D testing, and complete blood analysis for early detection of lifestyle-related diseases and nutritional deficiencies.",

  tags: [
    "full-body",
    "preventive",
    "diabetes",
    "thyroid",
    "liver",
    "kidney",
    "cholesterol",
    "vitamin-d",
    "vitamin-b12",
    "wellness",
  ],

  price: 999,

  originalPrice: 1499,

  discount: "33% OFF",

  reportTime: "24-48 Hours",

  fasting: "10-12 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Adults Above 18 Years",
      description:
        "Ideal for routine preventive health screening and annual wellness checkups.",
      icon: "users",
    },
    {
      title: "Working Professionals",
      description:
        "Suitable for busy individuals looking for regular health monitoring.",
      icon: "briefcase",
    },
    {
      title: "People with Fatigue or Weakness",
      description:
        "Helps detect vitamin deficiencies, thyroid disorders, and diabetes.",
      icon: "heart",
    },
    {
      title: "Lifestyle Disease Screening",
      description:
        "Recommended for early detection of diabetes, cholesterol, and organ-related conditions.",
      icon: "activity",
    },
  ],

  preparation: [
    {
      title: "Fast for 10–12 Hours",
      description:
        "Fasting is recommended because this package includes diabetes and lipid profile tests. Plain water is allowed.",
    },
    {
      title: "Drink Plenty of Water",
      description:
        "Stay hydrated before sample collection to make blood collection easier.",
    },
    {
      title: "Avoid Alcohol Before Testing",
      description:
        "Avoid alcohol and heavy meals for at least 24 hours before your appointment.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring previous laboratory reports for comparison whenever available.",
    },
    {
      title: "Continue Medicines Only if Advised",
      description:
        "Inform our healthcare team about any ongoing medications before sample collection.",
    },
  ],

  testsCount: 11,

  category: "Preventive Health Checkup",

  rating: 4.8,

  reviews: 165,

  image: "/packages/aarogyam-a-pro.jpg",

  highlights: [
    "Diabetes Screening",
    "Vitamin B12 & Vitamin D",
    "Thyroid Profile",
    "Liver & Kidney Health",
    "Complete Blood Count",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Comprehensive Wellness Assessment",
      description:
        "Evaluates blood health, diabetes, thyroid, liver, kidneys, cholesterol, and vitamin levels.",
    },
    {
      title: "Early Disease Detection",
      description:
        "Helps identify nutritional deficiencies and lifestyle-related diseases before symptoms appear.",
    },
    {
      title: "Routine Preventive Screening",
      description:
        "Supports annual health monitoring and long-term wellness.",
    },
    {
      title: "Affordable Preventive Care",
      description:
        "Provides comprehensive health screening at an economical price.",
    },
  ],

  testCategories: [
    {
      title: "Blood Health",
      tests: [
        "Complete Blood Count",
      ],
    },
    {
      title: "Diabetes",
      tests: [
        "Diabetes Profile",
      ],
    },
    {
      title: "Thyroid",
      tests: [
        "Thyroid Basic",
      ],
    },
    {
      title: "Liver Function",
      tests: [
        "Liver Basic",
        "Liver Advanced",
      ],
    },
    {
      title: "Kidney Function",
      tests: [
        "Kidney Basic",
        "Kidney Advanced",
      ],
    },
    {
      title: "Heart Health",
      tests: [
        "Lipid Basic",
        "Lipid Advanced",
      ],
    },
    {
      title: "Vitamin Assessment",
      tests: [
        "Vitamin B12",
        "Vitamin D",
      ],
    },
  ],

  includedTests: [
    "Thyroid Basic",
    "Lipid Basic",
    "Liver Basic",
    "Kidney Basic",
    "Lipid Advanced",
    "Liver Advanced",
    "Diabetes Profile",
    "Complete Blood Count",
    "Vitamin B12",
    "Vitamin D",
    "Kidney Advanced",
  ],

  seo: {
    introduction:
      "The Aarogyam A Pro Package provides comprehensive preventive health screening including diabetes, thyroid, cholesterol, liver, kidney, vitamin assessment, and complete blood health evaluation.",

    whyImportant:
      "Routine preventive screening helps identify nutritional deficiencies and lifestyle diseases before serious health complications develop.",

    benefits:
      "This package provides a detailed overview of your metabolic, nutritional, and organ health for better long-term wellness.",

    homeCollection:
      "Enjoy convenient home sample collection by trained professionals with secure digital reports delivered within 24–48 hours.",

    conclusion:
      "The Aarogyam A Pro Package is an excellent choice for affordable preventive healthcare and annual wellness monitoring.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "Adults looking for routine preventive health screening and annual wellness checkups.",
    },
    {
      question: "Is fasting required?",
      answer:
        "Yes. A fasting period of 10–12 hours is recommended.",
    },
    {
      question: "When will reports be available?",
      answer:
        "Reports are generally available within 24–48 hours after sample collection.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service locations.",
    },
  ],
},
{
  id: "aarogyam-xl-pro",

  slug: "aarogyam-xl-pro",

  name: "Aarogyam XL Pro",

  shortDescription:
    "Thyrocare's most comprehensive preventive health package covering hormones, vitamins, allergy screening, toxic elements, cardiac risk markers, and advanced disease evaluation.",

  description:
    "The Aarogyam XL Pro Package is an advanced executive health screening designed to provide a complete assessment of your overall health. It includes comprehensive evaluation of diabetes, thyroid function, liver and kidney health, cardiac risk, nutritional deficiencies, hormone balance, autoimmune disorders, allergy screening, toxic element analysis, and advanced wellness markers for early detection of chronic diseases and lifestyle-related conditions.",

  tags: [
    "executive-health",
    "full-body",
    "preventive",
    "diabetes",
    "thyroid",
    "cardiac",
    "hormones",
    "vitamins",
    "allergy",
    "kidney",
    "liver",
    "wellness",
  ],

  price: 9999,

  originalPrice: 12999,

  discount: "23% OFF",

  reportTime: "24-48 Hours",

  fasting: "10-12 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Corporate Executives",
      description:
        "Ideal for professionals seeking an advanced annual health assessment.",
      icon: "briefcase",
    },
    {
      title: "Adults Above 30 Years",
      description:
        "Recommended for comprehensive preventive health monitoring.",
      icon: "users",
    },
    {
      title: "People with Lifestyle Disorders",
      description:
        "Suitable for monitoring diabetes, cholesterol, obesity, and metabolic disorders.",
      icon: "activity",
    },
    {
      title: "Individuals with Family History of Chronic Disease",
      description:
        "Helps evaluate inherited risks for heart disease, diabetes, thyroid disorders, and autoimmune conditions.",
      icon: "heart",
    },
    {
      title: "Annual Executive Health Screening",
      description:
        "Perfect for those looking for the most comprehensive preventive wellness package.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "Fast for 10–12 Hours",
      description:
        "Fasting is recommended for accurate glucose, lipid profile, insulin, and metabolic marker evaluation. Plain water is allowed.",
    },
    {
      title: "Drink Plenty of Water",
      description:
        "Remain well hydrated before sample collection to improve comfort during blood collection.",
    },
    {
      title: "Avoid Alcohol & Heavy Exercise",
      description:
        "Avoid alcohol, smoking, and strenuous exercise for at least 24 hours before testing to prevent inaccurate results.",
    },
    {
      title: "Continue Medicines Only if Advised",
      description:
        "Inform our healthcare team about ongoing medications, supplements, or hormone therapy before sample collection.",
    },
    {
      title: "Carry Previous Medical Records",
      description:
        "Bring previous laboratory reports, ECGs, imaging reports, or prescriptions for better comparison and clinical interpretation.",
    },
  ],

  testsCount: 21,

  category: "Executive Health Checkup",

  rating: 5.0,

  reviews: 98,

  image: "/packages/aarogyam-xl-pro.jpg",

  highlights: [
    "Advanced Executive Health Screening",
    "Complete Hormone Profile",
    "Comprehensive Vitamin Assessment",
    "Cardiac Risk Markers",
    "Allergy Screening",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Complete Health Evaluation",
      description:
        "Assesses nearly every major body system through advanced laboratory investigations.",
    },
    {
      title: "Early Disease Detection",
      description:
        "Helps identify diabetes, cardiovascular disease, hormonal imbalance, autoimmune disorders, nutritional deficiencies, and chronic illnesses before symptoms develop.",
    },
    {
      title: "Executive Preventive Healthcare",
      description:
        "Designed for professionals seeking complete annual health monitoring and proactive disease prevention.",
    },
    {
      title: "Personalized Wellness Insights",
      description:
        "Provides detailed laboratory information to support healthier lifestyle decisions and long-term wellness.",
    },
  ],

  testCategories: [
    {
      title: "Blood Health",
      tests: [
        "Complete Blood Count",
      ],
    },
    {
      title: "Diabetes",
      tests: [
        "Diabetes Profile",
        "Insulin Fasting",
        "Blood Ketone",
      ],
    },
    {
      title: "Thyroid & Hormones",
      tests: [
        "Thyroid Profile",
        "Steroid Profile",
      ],
    },
    {
      title: "Heart Health",
      tests: [
        "Cardiac Risk Markers",
        "Lipid Profile",
        "Lp-PLA2",
      ],
    },
    {
      title: "Liver Function",
      tests: [
        "Liver Function Test",
      ],
    },
    {
      title: "Kidney Function",
      tests: [
        "Kidney Function Test",
        "Electrolytes",
      ],
    },
    {
      title: "Vitamin Assessment",
      tests: [
        "Complete Vitamin Profile",
        "Ferritin",
        "Folate",
        "Iron Profile",
      ],
    },
    {
      title: "Autoimmune Screening",
      tests: [
        "ANA",
        "ACCP",
        "Rheumatoid Factor",
      ],
    },
    {
      title: "Allergy Screening",
      tests: [
        "Allergy Phadiatop Adult",
      ],
    },
    {
      title: "Toxic Element Analysis",
      tests: [
        "Toxic & Nutrient Elements",
      ],
    },
  ],

  includedTests: [
    "Complete Blood Count",
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

  seo: {
    introduction:
      "The Aarogyam XL Pro Package is Thyrocare's most comprehensive executive health screening, combining advanced laboratory investigations for diabetes, thyroid, hormones, heart health, nutrition, allergy testing, autoimmune disorders, and toxic element assessment.",

    whyImportant:
      "Comprehensive preventive health screening enables early detection of chronic diseases, nutritional deficiencies, hormonal disorders, and cardiovascular risks before symptoms become severe.",

    benefits:
      "This package evaluates almost every major organ system and provides one of the most detailed preventive health assessments available.",

    homeCollection:
      "Enjoy safe home sample collection by trained professionals with secure digital reports delivered within 24–48 hours.",

    conclusion:
      "The Aarogyam XL Pro Package is the ideal choice for executives, professionals, and individuals seeking the highest level of preventive healthcare and complete wellness evaluation.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "It is recommended for executives, adults above 30 years, and individuals seeking the most comprehensive annual health assessment.",
    },
    {
      question: "Is fasting required?",
      answer:
        "Yes. A fasting period of 10–12 hours is recommended for accurate metabolic and cardiac risk evaluation.",
    },
    {
      question: "When will my reports be available?",
      answer:
        "Most reports are available online within 24–48 hours after sample collection.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},
{
  id: "aarogyam-tax-saver-basic-utsh",

  slug: "aarogyam-tax-saver-basic-utsh",

  name: "Aarogyam Tax Saver Basic with UTSH",

  shortDescription:
    "Comprehensive preventive health package covering cardiac risk, diabetes, thyroid, liver, kidney, vitamins, and iron deficiency assessment.",

  description:
    "The Aarogyam Tax Saver Basic with UTSH Package is a comprehensive preventive health screening designed to evaluate your overall wellness while supporting annual tax-saving healthcare investments. It includes cardiac risk assessment, diabetes screening, thyroid evaluation using Ultra TSH (UTSH), liver and kidney function, iron studies, vitamin B12 and Vitamin D assessment, pancreatic profile, and complete blood analysis for early detection of lifestyle-related diseases.",

  tags: [
    "preventive",
    "full-body",
    "tax-saver",
    "cardiac",
    "diabetes",
    "thyroid",
    "vitamin-d",
    "vitamin-b12",
    "iron",
    "kidney",
    "liver",
    "wellness",
  ],

  price: 2500,

  originalPrice: 3999,

  discount: "38% OFF",

  reportTime: "24-48 Hours",

  fasting: "10-12 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Adults Above 18 Years",
      description:
        "Recommended for annual preventive health screening and wellness monitoring.",
      icon: "users",
    },
    {
      title: "Working Professionals",
      description:
        "Ideal for busy individuals seeking a complete health assessment while planning tax-saving investments.",
      icon: "briefcase",
    },
    {
      title: "People with Family History of Chronic Disease",
      description:
        "Supports early detection of diabetes, heart disease, thyroid disorders, and nutritional deficiencies.",
      icon: "activity",
    },
    {
      title: "Annual Preventive Screening",
      description:
        "Suitable for maintaining long-term health through comprehensive laboratory evaluation.",
      icon: "calendar",
    },
    {
      title: "Lifestyle Disease Monitoring",
      description:
        "Useful for monitoring metabolic health, cardiac risk, and overall wellness.",
      icon: "heart",
    },
  ],

  preparation: [
    {
      title: "Fast for 10–12 Hours",
      description:
        "Fasting is recommended for accurate glucose, HbA1c, lipid profile, and metabolic marker evaluation. Plain water is allowed.",
    },
    {
      title: "Drink Plenty of Water",
      description:
        "Stay hydrated before sample collection to make blood collection easier and more comfortable.",
    },
    {
      title: "Avoid Alcohol Before Testing",
      description:
        "Avoid alcohol and heavy meals for at least 24 hours before testing for reliable laboratory results.",
    },
    {
      title: "Carry Previous Medical Reports",
      description:
        "Bring previous laboratory reports and prescriptions for comparison whenever available.",
    },
    {
      title: "Continue Medicines Only if Advised",
      description:
        "Inform our healthcare team about ongoing medications before sample collection.",
    },
  ],

  testsCount: 15,

  category: "Preventive Health Checkup",

  rating: 4.9,

  reviews: 182,

  image: "/packages/aarogyam-tax-saver-basic-utsh.jpg",

  highlights: [
    "83 Preventive Health Tests",
    "Ultra TSH (UTSH)",
    "Cardiac Risk Assessment",
    "Vitamin B12 & Vitamin D",
    "Iron Deficiency Profile",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Comprehensive Health Assessment",
      description:
        "Evaluates heart, thyroid, diabetes, liver, kidneys, pancreas, blood health, and nutritional status.",
    },
    {
      title: "Early Disease Detection",
      description:
        "Helps identify diabetes, thyroid disorders, vitamin deficiencies, anemia, and cardiovascular risk before symptoms develop.",
    },
    {
      title: "Preventive Wellness Monitoring",
      description:
        "Supports annual health screening and long-term preventive healthcare.",
    },
    {
      title: "Tax Saving with Healthcare",
      description:
        "A valuable preventive health package that also supports eligible healthcare tax planning.",
    },
  ],

  testCategories: [
    {
      title: "Blood Health",
      tests: [
        "Complete Hemogram",
      ],
    },
    {
      title: "Heart Health",
      tests: [
        "Cardiac Risk Markers",
        "Lipid Profile",
      ],
    },
    {
      title: "Diabetes",
      tests: [
        "Blood Glucose",
        "HbA1c",
        "Diabetes Profile",
      ],
    },
    {
      title: "Thyroid",
      tests: [
        "Thyroid Profile (UTSH)",
      ],
    },
    {
      title: "Liver Function",
      tests: [
        "Liver Function Test",
      ],
    },
    {
      title: "Kidney Function",
      tests: [
        "Renal Profile",
        "Kidney Function Test",
      ],
    },
    {
      title: "Vitamin Assessment",
      tests: [
        "Vitamin B12",
        "Vitamin D",
      ],
    },
    {
      title: "Iron Studies",
      tests: [
        "Iron Deficiency Profile",
      ],
    },
    {
      title: "Pancreatic Health",
      tests: [
        "Pancreatic Profile",
      ],
    },
    {
      title: "Electrolyte Balance",
      tests: [
        "Electrolytes",
      ],
    },
  ],

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

  seo: {
    introduction:
      "The Aarogyam Tax Saver Basic with UTSH Package combines comprehensive preventive health screening with cardiac, diabetes, thyroid, liver, kidney, vitamin, and iron assessment in one affordable package.",

    whyImportant:
      "Routine preventive health screening helps identify chronic diseases and nutritional deficiencies before serious complications develop.",

    benefits:
      "This package evaluates major organ systems and provides detailed insight into metabolic, cardiovascular, and nutritional health.",

    homeCollection:
      "Enjoy convenient home sample collection by trained professionals with secure digital reports delivered within 24–48 hours.",

    conclusion:
      "The Aarogyam Tax Saver Basic with UTSH Package is an excellent choice for individuals seeking complete preventive healthcare together with annual wellness monitoring.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "It is recommended for adults seeking annual preventive health screening and comprehensive wellness assessment.",
    },
    {
      question: "Is fasting required?",
      answer:
        "Yes. A fasting period of 10–12 hours is recommended for accurate diabetes and lipid profile testing.",
    },
    {
      question: "When will I receive my reports?",
      answer:
        "Reports are generally available online within 24–48 hours after sample collection.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},

{
  id: "monsoon-gastro-infection-panel",

  slug: "monsoon-gastro-infection-panel",

  name: "Monsoon Gastro Infection Panel",

  shortDescription:
    "Comprehensive monsoon infection screening package for typhoid, hepatitis, liver health, and blood infection markers.",

  description:
    "The Monsoon Gastro Infection Panel is designed to help detect common seasonal gastrointestinal and infectious diseases during the monsoon season. It includes hepatitis A and E screening, typhoid antibodies, complete blood count, and liver function tests to support early diagnosis and timely medical treatment.",

  tags: [
    "monsoon",
    "infection",
    "typhoid",
    "hepatitis",
    "fever",
    "liver",
    "cbc",
    "seasonal",
    "preventive",
  ],

  price: 1999,

  originalPrice: 2699,

  discount: "26% OFF",

  reportTime: "24-48 Hours",

  fasting: "No Fasting Required",

  homeCollection: true,

  recommendedFor: [
    {
      title: "People with Persistent Fever",
      description:
        "Recommended for individuals experiencing prolonged fever during the monsoon season.",
      icon: "activity",
    },
    {
      title: "Patients with Stomach Infections",
      description:
        "Suitable for individuals with vomiting, diarrhea, abdominal pain, or digestive infections.",
      icon: "heart",
    },
    {
      title: "Suspected Typhoid or Hepatitis",
      description:
        "Helps identify common infectious diseases affecting the liver and digestive system.",
      icon: "shield",
    },
    {
      title: "Seasonal Health Checkup",
      description:
        "Useful during monsoon to detect infections before complications develop.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "No Fasting Required",
      description:
        "You can eat and drink normally before sample collection unless advised otherwise by your doctor.",
    },
    {
      title: "Stay Hydrated",
      description:
        "Drink sufficient water before sample collection for a comfortable experience.",
    },
    {
      title: "Inform About Current Medications",
      description:
        "Tell our healthcare team about any antibiotics or medicines you are currently taking.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring earlier laboratory reports or prescriptions if available for comparison.",
    },
    {
      title: "Rest Before Collection",
      description:
        "Remain relaxed before your blood sample is collected for a smooth procedure.",
    },
  ],

  testsCount: 15,

  category: "Seasonal Infection Screening",

  rating: 4.8,

  reviews: 112,

  image: "/packages/monsoon-gastro-infection-panel.jpg",

  highlights: [
    "Typhoid Screening",
    "Hepatitis A & E Detection",
    "Complete Blood Count",
    "Liver Function Test",
    "Home Sample Collection",
    "Digital Reports",
  ],

  benefits: [
    {
      title: "Early Infection Detection",
      description:
        "Helps identify common monsoon-related infections before serious complications occur.",
    },
    {
      title: "Comprehensive Fever Investigation",
      description:
        "Combines infection markers, blood analysis, and liver evaluation in one package.",
    },
    {
      title: "Supports Faster Treatment",
      description:
        "Provides accurate diagnostic information to assist doctors in choosing appropriate treatment.",
    },
    {
      title: "Convenient Testing",
      description:
        "Professional home sample collection with secure online reports.",
    },
  ],

  testCategories: [
    {
      title: "Hepatitis Screening",
      tests: [
        "Hepatitis A Virus Antibody IgM",
        "Hepatitis E Virus Antibody IgM",
      ],
    },
    {
      title: "Typhoid Screening",
      tests: [
        "Typhoid IgG",
        "Typhoid IgM",
      ],
    },
    {
      title: "Blood Health",
      tests: [
        "Complete Blood Count",
        "Hemoglobin",
        "Platelet Count",
        "WBC Count",
        "Lymphocyte Count",
        "Neutrophil Count",
        "Monocyte Count",
        "Eosinophil Count",
      ],
    },
    {
      title: "Liver Function",
      tests: [
        "Liver Function Test",
        "SGOT",
        "SGPT",
      ],
    },
  ],

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

  seo: {
    introduction:
      "The Monsoon Gastro Infection Panel is a comprehensive seasonal infection package designed to detect typhoid, hepatitis, blood infections, and liver abnormalities.",

    whyImportant:
      "Early diagnosis of monsoon-related infections helps prevent severe illness and supports timely medical treatment.",

    benefits:
      "This package evaluates infectious diseases, liver health, and blood parameters for a complete fever assessment.",

    homeCollection:
      "Convenient home sample collection with digital reports delivered within 24–48 hours.",

    conclusion:
      "The Monsoon Gastro Infection Panel is an excellent choice for individuals experiencing fever or gastrointestinal symptoms during the monsoon season.",
  },

  faqs: [
    {
      question: "Is fasting required?",
      answer:
        "No. Fasting is generally not required for this package.",
    },
    {
      question: "Who should take this package?",
      answer:
        "Anyone with persistent fever, digestive infections, or suspected typhoid or hepatitis.",
    },
    {
      question: "How soon are reports available?",
      answer:
        "Most reports are available within 24–48 hours.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},


{
  id: "fasting-blood-sugar",

  slug: "fasting-blood-sugar",

  name: "Fasting Blood Sugar",

  shortDescription:
    "Simple diabetes screening test that measures fasting blood glucose levels for early detection and routine monitoring of diabetes.",

  description:
    "The Fasting Blood Sugar (FBS) Test measures your blood glucose level after an overnight fast. It is one of the most commonly recommended tests for diagnosing diabetes, identifying prediabetes, and monitoring blood sugar control. Regular testing helps detect abnormal glucose levels early and supports effective diabetes management.",

  tags: [
    "diabetes",
    "blood-sugar",
    "glucose",
    "fasting",
    "preventive",
    "health-checkup",
    "screening",
  ],

  price: 49,

  originalPrice: 99,

  discount: "51% OFF",

  reportTime: "Same Day",

  fasting: "8-10 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Adults Above 18 Years",
      description:
        "Recommended as part of routine preventive health screening.",
      icon: "users",
    },
    {
      title: "People at Risk of Diabetes",
      description:
        "Ideal for individuals with obesity, family history of diabetes, or unhealthy lifestyle habits.",
      icon: "activity",
    },
    {
      title: "Diabetes Monitoring",
      description:
        "Useful for patients undergoing treatment to monitor blood glucose levels.",
      icon: "heart",
    },
    {
      title: "Annual Health Checkups",
      description:
        "Suitable for regular wellness examinations and preventive healthcare.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "Fast for 8–10 Hours",
      description:
        "Do not eat or drink anything except plain water before sample collection.",
    },
    {
      title: "Drink Plain Water",
      description:
        "Staying hydrated helps make blood sample collection easier and more comfortable.",
    },
    {
      title: "Avoid Sugary Drinks",
      description:
        "Do not consume tea, coffee, juice, or sugary beverages during the fasting period.",
    },
    {
      title: "Take Medicines Only if Advised",
      description:
        "Inform our healthcare team about any diabetes medications before the test.",
    },
    {
      title: "Maintain Normal Routine",
      description:
        "Avoid strenuous exercise or unusual physical activity before the test unless advised by your doctor.",
    },
  ],

  testsCount: 1,

  category: "Diabetes Screening",

  rating: 4.9,

  reviews: 248,

  image: "/packages/fasting-blood-sugar.jpg",

  highlights: [
    "Early Diabetes Detection",
    "Fasting Blood Glucose",
    "Same-Day Reports",
    "Affordable Test",
    "Home Sample Collection",
    "Doctor Recommended",
  ],

  benefits: [
    {
      title: "Early Diabetes Detection",
      description:
        "Helps identify diabetes and prediabetes before symptoms become severe.",
    },
    {
      title: "Routine Monitoring",
      description:
        "Supports regular monitoring of blood glucose levels for diabetic patients.",
    },
    {
      title: "Quick & Accurate",
      description:
        "Provides reliable fasting glucose measurements using standardized laboratory methods.",
    },
    {
      title: "Convenient Testing",
      description:
        "Professional home sample collection with fast digital reporting.",
    },
  ],

  testCategories: [
    {
      title: "Diabetes Screening",
      tests: [
        "Fasting Blood Sugar (Glucose)",
      ],
    },
  ],

  includedTests: [
    "Fasting Blood Sugar (Glucose)",
  ],

  seo: {
    introduction:
      "The Fasting Blood Sugar Test measures fasting glucose levels to help detect diabetes and monitor blood sugar control.",

    whyImportant:
      "Regular fasting blood sugar testing helps identify diabetes early and supports timely treatment.",

    benefits:
      "This test provides accurate fasting glucose measurements for preventive screening and diabetes management.",

    homeCollection:
      "Convenient home sample collection with same-day digital reports.",

    conclusion:
      "The Fasting Blood Sugar Test is an affordable and essential screening test for anyone concerned about diabetes or routine health monitoring.",
  },

  faqs: [
    {
      question: "How long should I fast before the test?",
      answer:
        "An overnight fasting period of 8–10 hours is recommended. Only plain water is allowed.",
    },
    {
      question: "Can I drink water before the test?",
      answer:
        "Yes. Drinking plain water is encouraged during the fasting period.",
    },
    {
      question: "When will I receive my report?",
      answer:
        "Reports are generally available on the same day.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},
{
  id: "random-blood-sugar",

  slug: "random-blood-sugar",

  name: "Random Blood Sugar",

  shortDescription:
    "Quick blood glucose test that measures your blood sugar level at any time of the day without fasting to help screen and monitor diabetes.",

  description:
    "The Random Blood Sugar (RBS) Test measures your blood glucose level regardless of when you last ate. It is commonly used for quick diabetes screening, emergency glucose assessment, and routine monitoring of people with diabetes. This test provides fast insights into your blood sugar status and helps doctors evaluate whether additional investigations are needed.",

  tags: [
    "diabetes",
    "blood-sugar",
    "glucose",
    "random",
    "screening",
    "health-checkup",
    "preventive",
  ],

  price: 49,

  originalPrice: 99,

  discount: "51% OFF",

  reportTime: "Same Day",

  fasting: "No Fasting Required",

  homeCollection: true,

  recommendedFor: [
    {
      title: "People with Diabetes",
      description:
        "Useful for routine monitoring of blood glucose levels during diabetes treatment.",
      icon: "activity",
    },
    {
      title: "Individuals with Diabetes Symptoms",
      description:
        "Recommended for people experiencing excessive thirst, frequent urination, fatigue, or unexplained weight loss.",
      icon: "heart",
    },
    {
      title: "Routine Health Screening",
      description:
        "Suitable for preventive health checkups and quick diabetes screening.",
      icon: "users",
    },
    {
      title: "Emergency Glucose Assessment",
      description:
        "Can be performed anytime when immediate blood sugar evaluation is required.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "No Fasting Required",
      description:
        "This test can be performed at any time of the day without fasting.",
    },
    {
      title: "Stay Hydrated",
      description:
        "Drink normal amounts of water before sample collection for a comfortable experience.",
    },
    {
      title: "Inform About Medications",
      description:
        "Tell our healthcare team if you are taking insulin or diabetes medications.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring earlier blood sugar reports if available for comparison with current results.",
    },
    {
      title: "Continue Your Normal Routine",
      description:
        "Unless advised otherwise by your doctor, continue your regular meals and daily activities before the test.",
    },
  ],

  testsCount: 1,

  category: "Diabetes Screening",

  rating: 4.9,

  reviews: 232,

  image: "/packages/random-blood-sugar.jpg",

  highlights: [
    "No Fasting Required",
    "Quick Diabetes Screening",
    "Same-Day Reports",
    "Affordable Test",
    "Home Sample Collection",
    "Doctor Recommended",
  ],

  benefits: [
    {
      title: "Quick Diabetes Screening",
      description:
        "Provides a rapid assessment of blood glucose levels without requiring fasting.",
    },
    {
      title: "Routine Diabetes Monitoring",
      description:
        "Helps monitor blood sugar control in people diagnosed with diabetes.",
    },
    {
      title: "Supports Early Detection",
      description:
        "Can identify abnormal blood sugar levels that require further medical evaluation.",
    },
    {
      title: "Convenient Testing",
      description:
        "Professional home sample collection with secure same-day digital reports.",
    },
  ],

  testCategories: [
    {
      title: "Diabetes Screening",
      tests: [
        "Random Blood Sugar (Glucose)",
      ],
    },
  ],

  includedTests: [
    "Random Blood Sugar (Glucose)",
  ],

  seo: {
    introduction:
      "The Random Blood Sugar Test measures blood glucose levels at any time of the day without fasting and is commonly used for diabetes screening and monitoring.",

    whyImportant:
      "Regular blood sugar testing helps detect diabetes early and supports effective disease management.",

    benefits:
      "This test offers a quick and convenient method for evaluating blood glucose levels during routine health checkups or diabetes follow-up.",

    homeCollection:
      "Enjoy convenient home sample collection with secure same-day digital reports.",

    conclusion:
      "The Random Blood Sugar Test is an affordable and reliable choice for quick diabetes screening and routine blood glucose monitoring.",
  },

  faqs: [
    {
      question: "Is fasting required for the Random Blood Sugar test?",
      answer:
        "No. This test can be performed at any time of the day without fasting.",
    },
    {
      question: "Who should take this test?",
      answer:
        "It is recommended for diabetes screening, routine monitoring, and people experiencing symptoms of high blood sugar.",
    },
    {
      question: "When will I receive my report?",
      answer:
        "Reports are generally available on the same day.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},
{
  id: "aarogyam-x-pro-utsh",

  slug: "aarogyam-x-pro-utsh",

  name: "Aarogyam X Pro with UTSH",

  shortDescription:
    "Comprehensive executive preventive health package with 126 parameters covering diabetes, thyroid, heart health, liver, kidney, vitamins, autoimmune disorders, allergy screening, and nutritional assessment.",

  description:
    "The Aarogyam X Pro with UTSH Package is one of the most comprehensive preventive health checkups designed for complete wellness evaluation. It combines advanced thyroid assessment, diabetes screening, cardiac risk markers, liver and kidney function, vitamin and mineral analysis, autoimmune disease markers, inflammatory markers, allergy screening, and toxic element evaluation to provide a detailed picture of your overall health and support early disease detection.",

  tags: [
    "executive-health",
    "full-body",
    "preventive",
    "diabetes",
    "thyroid",
    "heart",
    "liver",
    "kidney",
    "vitamin",
    "autoimmune",
    "allergy",
    "wellness",
  ],

  price: 8470,

  originalPrice: 11999,

  discount: "29% OFF",

  reportTime: "24-48 Hours",

  fasting: "10-12 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Corporate Executives",
      description:
        "Ideal for professionals seeking a comprehensive annual health assessment.",
      icon: "briefcase",
    },
    {
      title: "Adults Above 30 Years",
      description:
        "Recommended for individuals wanting advanced preventive health screening.",
      icon: "users",
    },
    {
      title: "People with Family History of Chronic Diseases",
      description:
        "Useful for monitoring diabetes, heart disease, thyroid disorders, and metabolic conditions.",
      icon: "activity",
    },
    {
      title: "Lifestyle Disease Monitoring",
      description:
        "Suitable for monitoring obesity, hypertension, diabetes, and cardiovascular risk factors.",
      icon: "heart",
    },
    {
      title: "Annual Executive Health Checkup",
      description:
        "Designed for complete preventive healthcare and long-term wellness planning.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "Fast for 10–12 Hours",
      description:
        "A fasting period of 10–12 hours is recommended for accurate glucose, lipid profile, and metabolic test results. Plain water is allowed.",
    },
    {
      title: "Drink Plenty of Water",
      description:
        "Stay well hydrated before sample collection to make blood collection easier and more comfortable.",
    },
    {
      title: "Avoid Alcohol & Heavy Exercise",
      description:
        "Avoid alcohol consumption and strenuous physical activity for at least 24 hours before testing.",
    },
    {
      title: "Continue Medicines Only if Advised",
      description:
        "Inform our healthcare team about all medications and supplements you are taking before sample collection.",
    },
    {
      title: "Carry Previous Medical Reports",
      description:
        "Bring previous laboratory reports, prescriptions, or imaging reports for comparison if available.",
    },
  ],

  testsCount: 24,

  category: "Executive Preventive Health Checkup",

  rating: 5.0,

  reviews: 98,

  image: "/packages/aarogyam-x-pro-utsh.jpg",

  highlights: [
    "126 Health Parameters",
    "Advanced Thyroid Profile",
    "Complete Cardiac Risk Assessment",
    "Vitamin & Mineral Analysis",
    "Autoimmune Disease Screening",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Complete Body Health Evaluation",
      description:
        "Provides a detailed assessment of major organs, hormones, metabolism, nutritional status, and overall wellness.",
    },
    {
      title: "Early Disease Detection",
      description:
        "Helps detect diabetes, thyroid disorders, cardiovascular disease, nutritional deficiencies, autoimmune disorders, and inflammatory conditions at an early stage.",
    },
    {
      title: "Executive Preventive Healthcare",
      description:
        "Supports proactive health management through comprehensive laboratory screening.",
    },
    {
      title: "Personalized Health Monitoring",
      description:
        "Useful for tracking long-term health trends and assisting doctors with preventive healthcare planning.",
    },
  ],

  testCategories: [
    {
      title: "Diabetes Assessment",
      tests: [
        "HbA1c",
        "Average Blood Glucose (ABG)",
      ],
    },
    {
      title: "Thyroid Health",
      tests: [
        "Thyroid Profile (T3, T4, TSH)",
      ],
    },
    {
      title: "Heart Health",
      tests: [
        "Cardiac Risk Markers",
        "Lipid Profile",
        "hs-CRP",
      ],
    },
    {
      title: "Liver Function",
      tests: [
        "Liver Function Test",
      ],
    },
    {
      title: "Kidney Function",
      tests: [
        "Kidney Function Test",
        "Cystatin C",
      ],
    },
    {
      title: "Vitamin Assessment",
      tests: [
        "Vitamin D Total",
        "Vitamin B12",
        "Complete Vitamin Profile",
      ],
    },
    {
      title: "Iron & Nutrition",
      tests: [
        "Iron Deficiency Profile",
        "Ferritin",
        "Folate",
        "Serum Zinc",
        "Magnesium",
      ],
    },
    {
      title: "Autoimmune Screening",
      tests: [
        "ANA",
        "Anti-CCP",
      ],
    },
    {
      title: "Allergy & Specialized Tests",
      tests: [
        "Allergy Phadiatop Adult",
        "Toxic & Nutrient Elements (22)",
      ],
    },
  ],

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

  seo: {
    introduction:
      "The Aarogyam X Pro with UTSH Package is a comprehensive executive health screening that evaluates diabetes, thyroid, heart health, liver, kidney, nutrition, autoimmune disorders, and overall wellness.",

    whyImportant:
      "Regular executive health checkups help detect chronic diseases before symptoms appear and support proactive healthcare management.",

    benefits:
      "This package combines advanced laboratory investigations into a single preventive health screening for complete body assessment.",

    homeCollection:
      "Convenient home sample collection is available with secure digital reports delivered within 24–48 hours.",

    conclusion:
      "The Aarogyam X Pro with UTSH Package is an ideal choice for individuals seeking the highest level of preventive healthcare and comprehensive wellness monitoring.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "It is recommended for adults above 30 years, executives, and anyone seeking a comprehensive preventive health assessment.",
    },
    {
      question: "Is fasting required?",
      answer:
        "Yes. A fasting period of 10–12 hours is recommended for accurate test results.",
    },
    {
      question: "When will I receive my reports?",
      answer:
        "Reports are generally available within 24–48 hours after sample collection.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},
{
  id: "executive-full-body-checkup",

  slug: "executive-full-body-checkup",

  name: "Executive Full Body Checkup",

  shortDescription:
    "Comprehensive preventive health package covering diabetes, thyroid, heart, liver, kidney, vitamins, and complete blood health for annual wellness screening.",

  description:
    "The Executive Full Body Checkup is a comprehensive preventive health screening package designed to evaluate your overall health. It includes diabetes screening, thyroid function, liver and kidney evaluation, cardiac risk assessment, vitamin deficiency testing, complete blood analysis, hormone profile, and electrolyte assessment to help detect lifestyle-related diseases at an early stage.",

  tags: [
    "executive-health",
    "full-body",
    "preventive",
    "diabetes",
    "thyroid",
    "heart",
    "liver",
    "kidney",
    "vitamins",
    "wellness",
  ],

  price: 1800,

  originalPrice: 2500,

  discount: "28% OFF",

  reportTime: "24-48 Hours",

  fasting: "10-12 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Working Professionals",
      description:
        "Ideal for executives and professionals seeking a complete annual health evaluation.",
      icon: "briefcase",
    },
    {
      title: "Adults Above 30 Years",
      description:
        "Recommended for routine preventive health screening and early disease detection.",
      icon: "users",
    },
    {
      title: "People with Family History of Lifestyle Diseases",
      description:
        "Useful for monitoring diabetes, cholesterol, thyroid disorders, and heart health.",
      icon: "activity",
    },
    {
      title: "Annual Preventive Checkups",
      description:
        "Supports proactive healthcare and long-term wellness monitoring.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "Fast for 10–12 Hours",
      description:
        "A fasting period is recommended for accurate blood glucose and lipid profile results. Plain water is allowed.",
    },
    {
      title: "Drink Plenty of Water",
      description:
        "Stay well hydrated before sample collection for a smoother blood draw.",
    },
    {
      title: "Avoid Alcohol & Heavy Exercise",
      description:
        "Avoid alcohol and strenuous physical activity for at least 24 hours before testing.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring earlier laboratory reports if available for better comparison of health parameters.",
    },
    {
      title: "Inform About Medications",
      description:
        "Tell our healthcare team about any medications or supplements you are taking.",
    },
  ],

  testsCount: 13,

  category: "Executive Health Checkup",

  rating: 4.9,

  reviews: 187,

  image: "/packages/executive-full-body-checkup.jpg",

  highlights: [
    "Complete Hemogram",
    "Cardiac Risk Markers",
    "Thyroid Profile",
    "Vitamin D & B12",
    "Diabetes Profile",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Comprehensive Health Assessment",
      description:
        "Evaluates major body systems through advanced preventive health screening.",
    },
    {
      title: "Early Disease Detection",
      description:
        "Helps identify diabetes, thyroid disorders, cardiovascular risk, and nutritional deficiencies.",
    },
    {
      title: "Lifestyle Disease Monitoring",
      description:
        "Supports long-term monitoring of cholesterol, blood sugar, liver, and kidney health.",
    },
    {
      title: "Convenient Preventive Care",
      description:
        "Includes home sample collection with secure digital reports.",
    },
  ],

  testCategories: [
    {
      title: "Blood Health",
      tests: ["Complete Hemogram"],
    },
    {
      title: "Heart Health",
      tests: [
        "Cardiac Risk Markers",
        "Lipid Profile",
      ],
    },
    {
      title: "Diabetes",
      tests: ["Diabetes Profile"],
    },
    {
      title: "Thyroid Health",
      tests: ["Thyroid Profile"],
    },
    {
      title: "Liver Function",
      tests: ["Liver Function Test"],
    },
    {
      title: "Kidney Function",
      tests: ["Renal Function Test"],
    },
    {
      title: "Vitamin Assessment",
      tests: [
        "Vitamin D",
        "Vitamin B12",
      ],
    },
    {
      title: "Hormonal Health",
      tests: ["Hormone Profile"],
    },
    {
      title: "Electrolytes",
      tests: ["Electrolytes"],
    },
  ],

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

  seo: {
    introduction:
      "The Executive Full Body Checkup provides comprehensive preventive screening for diabetes, thyroid, cardiac health, liver, kidneys, vitamins, and overall wellness.",

    whyImportant:
      "Routine executive health screening helps detect lifestyle diseases before symptoms become severe.",

    benefits:
      "This package evaluates multiple body systems to support early diagnosis and preventive healthcare.",

    homeCollection:
      "Convenient home sample collection with secure digital reports delivered within 24–48 hours.",

    conclusion:
      "The Executive Full Body Checkup is an ideal annual wellness package for professionals and adults seeking comprehensive preventive healthcare.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "Adults, professionals, and individuals looking for a comprehensive annual preventive health checkup.",
    },
    {
      question: "Is fasting required?",
      answer:
        "Yes. A fasting period of 10–12 hours is recommended.",
    },
    {
      question: "When will I receive my reports?",
      answer:
        "Reports are generally available within 24–48 hours after sample collection.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},
{
  id: "jaanch-thyroid-profile-advanced",

  slug: "jaanch-thyroid-profile-advanced",

  name: "Jaanch Thyroid Profile Advanced",

  shortDescription:
    "Comprehensive thyroid screening package including thyroid hormones and autoimmune antibody tests for accurate diagnosis and monitoring of thyroid disorders.",

  description:
    "The Jaanch Thyroid Profile Advanced is a comprehensive thyroid evaluation package designed to assess thyroid gland function and detect autoimmune thyroid disorders. It includes TSH, Total T3, Total T4, Free T3, Free T4, Anti-TPO Antibody, TSH Receptor Antibodies, and Anti-Thyroglobulin Antibody to provide a detailed assessment of hypothyroidism, hyperthyroidism, Hashimoto's thyroiditis, and Graves' disease.",

  tags: [
    "thyroid",
    "hormones",
    "autoimmune",
    "hypothyroidism",
    "hyperthyroidism",
    "hashimoto",
    "graves-disease",
    "weight-gain",
    "fatigue",
    "wellness",
  ],

  price: 2500,

  originalPrice: 3200,

  discount: "22% OFF",

  reportTime: "24-48 Hours",

  fasting: "Not Required",

  homeCollection: true,

  recommendedFor: [
    {
      title: "People with Thyroid Symptoms",
      description:
        "Recommended for individuals experiencing fatigue, weight changes, hair loss, cold intolerance, or irregular heartbeat.",
      icon: "activity",
    },
    {
      title: "Patients on Thyroid Medication",
      description:
        "Useful for monitoring thyroid hormone replacement or anti-thyroid treatment.",
      icon: "heart",
    },
    {
      title: "Women Planning Pregnancy",
      description:
        "Helps evaluate thyroid function before or during pregnancy.",
      icon: "users",
    },
    {
      title: "People with Autoimmune Disorders",
      description:
        "Suitable for detecting autoimmune thyroid diseases such as Hashimoto's thyroiditis and Graves' disease.",
      icon: "shield",
    },
    {
      title: "Routine Thyroid Monitoring",
      description:
        "Ideal for periodic assessment of thyroid health and treatment effectiveness.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "No Fasting Required",
      description:
        "You can eat and drink normally before the test unless your doctor advises otherwise.",
    },
    {
      title: "Inform About Thyroid Medicines",
      description:
        "Tell our healthcare team if you are taking thyroid medication. Follow your doctor's advice regarding medication timing.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring earlier thyroid reports or prescriptions for comparison and better clinical interpretation.",
    },
    {
      title: "Morning Sample Preferred",
      description:
        "Although samples can be collected anytime, morning collection may provide better consistency for follow-up testing.",
    },
    {
      title: "Relax During Collection",
      description:
        "Our trained phlebotomists ensure safe, hygienic, and comfortable blood sample collection.",
    },
  ],

  testsCount: 8,

  category: "Thyroid Health",

  rating: 4.9,

  reviews: 142,

  image: "/packages/jaanch-thyroid-profile-advanced.jpg",

  highlights: [
    "Complete Thyroid Hormone Analysis",
    "Autoimmune Thyroid Antibodies",
    "Hashimoto's Disease Screening",
    "Graves' Disease Assessment",
    "Home Sample Collection",
    "Digital Reports",
  ],

  benefits: [
    {
      title: "Comprehensive Thyroid Assessment",
      description:
        "Evaluates thyroid hormone production and overall thyroid gland function.",
    },
    {
      title: "Autoimmune Disease Detection",
      description:
        "Identifies autoimmune thyroid conditions including Hashimoto's thyroiditis and Graves' disease.",
    },
    {
      title: "Accurate Treatment Monitoring",
      description:
        "Helps monitor thyroid medications and assess treatment response.",
    },
    {
      title: "Early Diagnosis",
      description:
        "Supports early detection of thyroid disorders before complications develop.",
    },
  ],

  testCategories: [
    {
      title: "Thyroid Hormones",
      tests: [
        "TSH Ultrasensitive",
        "Total T3",
        "Total T4",
        "Free T3 (FT3)",
        "Free T4 (FT4)",
      ],
    },
    {
      title: "Autoimmune Thyroid Markers",
      tests: [
        "Anti-TPO Antibody",
        "TSH Receptor Antibodies",
        "Anti-Thyroglobulin Antibody (ATG)",
      ],
    },
  ],

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

  seo: {
    introduction:
      "The Jaanch Thyroid Profile Advanced is a comprehensive thyroid diagnostic package that evaluates thyroid hormone levels and autoimmune thyroid disorders using advanced laboratory testing.",

    whyImportant:
      "Early diagnosis of thyroid disorders helps prevent complications such as weight changes, fatigue, infertility, cardiovascular problems, and metabolic disorders.",

    benefits:
      "This package provides detailed thyroid hormone analysis and autoimmune antibody testing for accurate diagnosis and ongoing treatment monitoring.",

    homeCollection:
      "Convenient home sample collection is available with secure digital reports delivered within 24–48 hours.",

    conclusion:
      "The Jaanch Thyroid Profile Advanced is an ideal choice for comprehensive thyroid evaluation, autoimmune disease detection, and long-term thyroid health monitoring.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "It is recommended for individuals with thyroid symptoms, patients on thyroid medication, women planning pregnancy, and people suspected of autoimmune thyroid disease.",
    },
    {
      question: "Is fasting required?",
      answer:
        "No. Fasting is not required for this thyroid profile.",
    },
    {
      question: "When will I receive my reports?",
      answer:
        "Reports are generally available within 24–48 hours after sample collection.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},
{
  id: "vitamin-d-b12-combo",

  slug: "vitamin-d-b12-combo",

  name: "Vitamin D & B12 Combo",

  shortDescription:
    "Essential vitamin screening package to detect Vitamin D and Vitamin B12 deficiencies associated with fatigue, weakness, bone health, immunity, and neurological function.",

  description:
    "The Vitamin D & B12 Combo is a preventive diagnostic package designed to assess two of the most commonly deficient vitamins. It helps identify nutritional deficiencies that may contribute to fatigue, muscle weakness, bone pain, low immunity, numbness, tingling sensations, and poor overall health. Early detection supports timely treatment and long-term wellness.",

  tags: [
    "vitamin-d",
    "vitamin-b12",
    "nutrition",
    "fatigue",
    "bone-health",
    "immunity",
    "wellness",
    "preventive",
  ],

  price: 749,

  originalPrice: 999,

  discount: "25% OFF",

  reportTime: "24-48 Hours",

  fasting: "No Fasting Required",

  homeCollection: true,

  recommendedFor: [
    {
      title: "People with Fatigue & Weakness",
      description:
        "Helps identify Vitamin D and Vitamin B12 deficiencies causing persistent tiredness and low energy.",
      icon: "activity",
    },
    {
      title: "Individuals with Bone or Muscle Pain",
      description:
        "Useful for evaluating vitamin deficiencies affecting bone strength and muscle function.",
      icon: "heart",
    },
    {
      title: "Vegetarians & Elderly Adults",
      description:
        "Recommended for individuals at higher risk of Vitamin B12 deficiency.",
      icon: "users",
    },
    {
      title: "Preventive Wellness Screening",
      description:
        "Ideal for routine nutritional health assessment and preventive care.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "No Fasting Required",
      description:
        "You can undergo this test at any time of the day without fasting.",
    },
    {
      title: "Stay Hydrated",
      description:
        "Drink adequate water before sample collection for a smoother blood draw.",
    },
    {
      title: "Inform About Supplements",
      description:
        "Tell our healthcare team if you are currently taking Vitamin D or Vitamin B12 supplements.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring earlier vitamin test reports if available for comparison.",
    },
    {
      title: "Comfortable Sample Collection",
      description:
        "Our trained professionals ensure safe, hygienic, and comfortable blood sample collection.",
    },
  ],

  testsCount: 2,

  category: "Vitamin Screening",

  rating: 4.8,

  reviews: 132,

  image: "/packages/vitamin-d-b12-combo.jpg",

  highlights: [
    "Vitamin D Total",
    "Vitamin B12",
    "Fatigue Assessment",
    "Bone Health Screening",
    "Home Sample Collection",
    "Digital Reports",
  ],

  benefits: [
    {
      title: "Detect Vitamin Deficiencies",
      description:
        "Identifies Vitamin D and Vitamin B12 deficiencies before complications develop.",
    },
    {
      title: "Support Bone & Muscle Health",
      description:
        "Helps evaluate nutritional causes of bone pain, muscle weakness, and fractures.",
    },
    {
      title: "Improve Energy Levels",
      description:
        "Supports diagnosis of vitamin deficiencies contributing to fatigue and low energy.",
    },
    {
      title: "Preventive Nutritional Care",
      description:
        "Enables early intervention for improved long-term health and wellness.",
    },
  ],

  testCategories: [
    {
      title: "Vitamin Assessment",
      tests: [
        "Vitamin D Total",
        "Vitamin B12",
      ],
    },
  ],

  includedTests: [
    "Vitamin D Total",
    "Vitamin B12",
  ],

  seo: {
    introduction:
      "The Vitamin D & B12 Combo helps identify two of the most common nutritional deficiencies affecting energy, immunity, bone health, and neurological function.",

    whyImportant:
      "Vitamin deficiencies often remain unnoticed until symptoms become significant. Early testing supports timely diagnosis and treatment.",

    benefits:
      "This package provides accurate assessment of Vitamin D and Vitamin B12 levels to support overall wellness and preventive healthcare.",

    homeCollection:
      "Enjoy convenient home sample collection with secure online reports delivered within 24–48 hours.",

    conclusion:
      "The Vitamin D & B12 Combo is an affordable preventive screening package for anyone experiencing fatigue, weakness, or nutritional concerns.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "Anyone experiencing fatigue, muscle weakness, bone pain, numbness, or individuals at risk of vitamin deficiencies.",
    },
    {
      question: "Is fasting required?",
      answer:
        "No. This package does not require fasting.",
    },
    {
      question: "When will I receive my reports?",
      answer:
        "Reports are generally available within 24–48 hours after sample collection.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},

{
  id: "jaanch-heat-shield-basic",

  slug: "jaanch-heat-shield-basic",

  name: "Jaanch Heat Shield Basic",

  shortDescription:
    "Summer wellness package designed to evaluate hydration, kidney and liver function, muscle health, blood sugar, and overall fitness during hot weather.",

  description:
    "The Jaanch Heat Shield Basic Package is a preventive summer health screening designed to detect dehydration, electrolyte imbalance, kidney stress, liver function abnormalities, muscle damage, and blood sugar changes caused by excessive heat exposure. It is ideal for individuals working outdoors or living in regions with high temperatures.",

  tags: [
    "summer-health",
    "heat-stress",
    "hydration",
    "kidney",
    "liver",
    "blood-sugar",
    "cbc",
    "wellness",
    "preventive",
  ],

  price: 1199,

  originalPrice: 1699,

  discount: "29% OFF",

  reportTime: "24-48 Hours",

  fasting: "Not Required",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Outdoor Workers",
      description:
        "Suitable for people regularly exposed to high temperatures and direct sunlight.",
      icon: "activity",
    },
    {
      title: "Senior Citizens",
      description:
        "Helps monitor dehydration and electrolyte imbalance during summer.",
      icon: "users",
    },
    {
      title: "Athletes & Fitness Enthusiasts",
      description:
        "Useful for assessing muscle stress and hydration after intense physical activity.",
      icon: "award",
    },
    {
      title: "Individuals with Heat Exhaustion Symptoms",
      description:
        "Recommended for weakness, dizziness, muscle cramps, and dehydration.",
      icon: "heart",
    },
  ],

  preparation: [
    {
      title: "No Fasting Required",
      description:
        "You can eat and drink normally before sample collection unless advised otherwise by your doctor.",
    },
    {
      title: "Stay Well Hydrated",
      description:
        "Drink sufficient water before the test to help evaluate hydration status accurately.",
    },
    {
      title: "Avoid Heavy Exercise",
      description:
        "Avoid strenuous physical activity for several hours before testing to prevent temporary changes in muscle enzyme levels.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring previous laboratory reports if available for comparison.",
    },
    {
      title: "Inform About Medications",
      description:
        "Tell our healthcare team about any medicines or supplements you are currently taking.",
    },
  ],

  testsCount: 7,

  category: "Summer Health Checkup",

  rating: 4.8,

  reviews: 98,

  image: "/packages/jaanch-heat-shield-basic.jpg",

  highlights: [
    "Hydration Assessment",
    "Kidney Function Profile",
    "Liver Function Profile",
    "CBC",
    "Blood Sugar Screening",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Detect Heat Stress",
      description:
        "Helps identify dehydration and electrolyte imbalance caused by extreme heat.",
    },
    {
      title: "Monitor Organ Health",
      description:
        "Evaluates kidney and liver function during hot weather.",
    },
    {
      title: "Assess Muscle Health",
      description:
        "Detects muscle stress through LDH and CPK evaluation.",
    },
    {
      title: "Prevent Summer Complications",
      description:
        "Supports early identification of heat-related health problems.",
    },
  ],

  testCategories: [
    {
      title: "Hydration",
      tests: ["Serum Electrolytes"],
    },
    {
      title: "Kidney Health",
      tests: ["Kidney Profile"],
    },
    {
      title: "Liver Health",
      tests: ["Liver Profile"],
    },
    {
      title: "Blood Sugar",
      tests: ["Random Blood Sugar"],
    },
    {
      title: "Muscle Health",
      tests: [
        "Lactate Dehydrogenase (LDH)",
        "Creatine Phosphokinase (CPK)",
      ],
    },
    {
      title: "Blood Health",
      tests: [
        "Complete Blood Count (CBC)",
      ],
    },
  ],

  includedTests: [
    "Serum Electrolytes",
    "Kidney Profile",
    "Liver Profile",
    "Lactate Dehydrogenase (LDH)",
    "Random Blood Sugar",
    "Creatine Phosphokinase (CPK)",
    "Complete Blood Count (CBC)",
  ],

  seo: {
    introduction:
      "The Jaanch Heat Shield Basic Package evaluates hydration, kidney function, liver health, muscle stress, blood sugar, and blood parameters to help detect heat-related health issues.",

    whyImportant:
      "Summer heat can cause dehydration, electrolyte imbalance, muscle injury, and organ stress if left unnoticed.",

    benefits:
      "This package supports early detection of heat exhaustion and helps maintain overall summer wellness.",

    homeCollection:
      "Safe home sample collection with digital reports delivered within 24–48 hours.",

    conclusion:
      "Jaanch Heat Shield Basic is an ideal preventive health package for maintaining good health during the summer season.",
  },

  faqs: [
    {
      question: "Is fasting required?",
      answer:
        "No. Fasting is not required for this package.",
    },
    {
      question: "Who should take this package?",
      answer:
        "Anyone exposed to excessive heat, outdoor workers, senior citizens, and individuals experiencing dehydration symptoms.",
    },
    {
      question: "Are reports available online?",
      answer:
        "Yes. Reports are delivered digitally within 24–48 hours.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected locations.",
    },
  ],
},
{
  id: "jaanch-heat-shield-advanced",

  slug: "jaanch-heat-shield-advanced",

  name: "Jaanch Heat Shield Advanced",

  shortDescription:
    "Advanced summer wellness package for evaluating hydration, kidney and liver function, vitamin status, iron profile, inflammation, and overall health during extreme heat.",

  description:
    "The Jaanch Heat Shield Advanced Package is a comprehensive summer health screening designed to assess dehydration, electrolyte balance, kidney and liver function, muscle stress, blood health, vitamin deficiencies, iron stores, and overall wellness. It helps detect heat-related health concerns early and supports safe recovery during the summer season.",

  tags: [
    "summer-health",
    "heat-stress",
    "hydration",
    "vitamin-d",
    "vitamin-b12",
    "iron",
    "kidney",
    "liver",
    "wellness",
    "preventive",
  ],

  price: 2499,

  originalPrice: 3499,

  discount: "29% OFF",

  reportTime: "24-48 Hours",

  fasting: "Not Required",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Outdoor Workers",
      description:
        "Ideal for people exposed to prolonged sunlight and high environmental temperatures.",
      icon: "activity",
    },
    {
      title: "Senior Citizens",
      description:
        "Helps monitor hydration, kidney health, and vitamin status during summer.",
      icon: "users",
    },
    {
      title: "Athletes & Fitness Enthusiasts",
      description:
        "Useful for evaluating muscle recovery, electrolyte balance, and nutritional health.",
      icon: "award",
    },
    {
      title: "Individuals with Heat Exhaustion",
      description:
        "Recommended for people experiencing fatigue, dehydration, weakness, or muscle cramps.",
      icon: "heart",
    },
    {
      title: "Preventive Summer Wellness",
      description:
        "Suitable for routine seasonal health screening and early detection of heat-related health problems.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "No Fasting Required",
      description:
        "You may eat normally before sample collection unless your doctor advises otherwise.",
    },
    {
      title: "Maintain Normal Hydration",
      description:
        "Drink adequate water before testing to support accurate hydration assessment.",
    },
    {
      title: "Avoid Heavy Exercise",
      description:
        "Avoid strenuous workouts before testing as they may temporarily affect muscle enzyme levels.",
    },
    {
      title: "Inform About Medicines & Supplements",
      description:
        "Let our healthcare team know about any medications, vitamins, or nutritional supplements you are taking.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring previous laboratory reports if available for better comparison of your health parameters.",
    },
  ],

  testsCount: 12,

  category: "Summer Health Checkup",

  rating: 4.9,

  reviews: 118,

  image: "/packages/jaanch-heat-shield-advanced.jpg",

  highlights: [
    "Electrolyte Assessment",
    "Kidney & Liver Profile",
    "Vitamin D & B12",
    "Iron & Ferritin",
    "Complete Blood Count",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Advanced Heat Stress Assessment",
      description:
        "Helps detect dehydration, electrolyte imbalance, and heat-related health concerns.",
    },
    {
      title: "Vitamin & Iron Evaluation",
      description:
        "Identifies Vitamin D, Vitamin B12, and iron deficiencies that may worsen fatigue.",
    },
    {
      title: "Comprehensive Organ Health",
      description:
        "Evaluates kidney, liver, blood, and muscle health during extreme weather conditions.",
    },
    {
      title: "Preventive Summer Wellness",
      description:
        "Supports early diagnosis and better management of seasonal health risks.",
    },
  ],

  testCategories: [
    {
      title: "Hydration",
      tests: [
        "Serum Electrolytes",
      ],
    },
    {
      title: "Kidney Health",
      tests: [
        "Kidney Profile",
      ],
    },
    {
      title: "Liver Health",
      tests: [
        "Liver Profile",
      ],
    },
    {
      title: "Blood Health",
      tests: [
        "Complete Blood Count (CBC)",
      ],
    },
    {
      title: "Muscle Health",
      tests: [
        "Lactate Dehydrogenase (LDH)",
        "Creatine Phosphokinase (CPK)",
      ],
    },
    {
      title: "Blood Sugar",
      tests: [
        "Random Blood Sugar",
      ],
    },
    {
      title: "Vitamin Assessment",
      tests: [
        "Vitamin D Total",
        "Vitamin B12",
      ],
    },
    {
      title: "Iron Studies",
      tests: [
        "Iron",
        "Ferritin",
      ],
    },
    {
      title: "Urine Analysis",
      tests: [
        "Complete Urine Analysis",
      ],
    },
  ],

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

  seo: {
    introduction:
      "The Jaanch Heat Shield Advanced Package is a comprehensive summer health screening that evaluates hydration, vitamins, iron levels, kidney and liver function, muscle health, and overall wellness.",

    whyImportant:
      "High temperatures can lead to dehydration, electrolyte imbalance, vitamin deficiencies, and stress on major organs if not identified early.",

    benefits:
      "This package provides a complete seasonal health assessment for early detection of heat-related illnesses and nutritional deficiencies.",

    homeCollection:
      "Convenient home sample collection is available with secure digital reports delivered within 24–48 hours.",

    conclusion:
      "Jaanch Heat Shield Advanced is an ideal preventive health package for individuals seeking comprehensive summer wellness monitoring.",
  },

  faqs: [
    {
      question: "Is fasting required?",
      answer:
        "No. Fasting is generally not required for this package.",
    },
    {
      question: "Who should take this package?",
      answer:
        "It is recommended for outdoor workers, senior citizens, athletes, and anyone concerned about heat-related health issues.",
    },
    {
      question: "When will I receive my reports?",
      answer:
        "Reports are usually available online within 24–48 hours after sample collection.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},
{
  id: "paleo-profile-basic-new",

  slug: "paleo-profile-basic-new",

  name: "Paleo Profile - Basic New",

  shortDescription:
    "Comprehensive preventive health package covering diabetes, thyroid, liver, kidney, cholesterol, iron deficiency, vitamins, and metabolic wellness.",

  description:
    "The Paleo Profile - Basic New is a comprehensive preventive health screening package designed to evaluate your overall health. It includes diabetes screening, thyroid evaluation, liver and kidney function tests, cholesterol profile, iron deficiency assessment, complete blood analysis, urine examination, and vitamin screening to support early detection of lifestyle-related diseases and nutritional deficiencies.",

  tags: [
    "full-body",
    "preventive",
    "wellness",
    "diabetes",
    "thyroid",
    "liver",
    "kidney",
    "cholesterol",
    "iron",
    "vitamins",
    "metabolic-health",
  ],

  price: 2900,

  originalPrice: 3999,

  discount: "27% OFF",

  reportTime: "24-48 Hours",

  fasting: "10-12 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Adults Above 18 Years",
      description:
        "Ideal for annual preventive health checkups and complete wellness evaluation.",
      icon: "users",
    },
    {
      title: "Working Professionals",
      description:
        "Suitable for busy individuals who want a comprehensive assessment of their health.",
      icon: "briefcase",
    },
    {
      title: "People with Lifestyle Disease Risk",
      description:
        "Useful for monitoring diabetes, cholesterol, thyroid disorders, and metabolic health.",
      icon: "activity",
    },
    {
      title: "Individuals with Fatigue or Weakness",
      description:
        "Helps identify vitamin deficiencies, anemia, and metabolic disorders.",
      icon: "heart",
    },
    {
      title: "Preventive Wellness Screening",
      description:
        "Recommended for maintaining long-term health through early disease detection.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "Fast for 10–12 Hours",
      description:
        "Fasting is recommended for accurate blood glucose and lipid profile results. Plain water is allowed.",
    },
    {
      title: "Stay Hydrated",
      description:
        "Drink adequate water before sample collection to improve comfort during blood collection.",
    },
    {
      title: "Avoid Alcohol Before Testing",
      description:
        "Avoid alcohol for at least 24 hours before testing as it may influence liver and metabolic parameters.",
    },
    {
      title: "Continue Medicines Only if Advised",
      description:
        "Inform our healthcare team about your medications and do not stop prescribed medicines unless advised by your doctor.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring previous laboratory reports or prescriptions for better comparison of health parameters.",
    },
  ],

  testsCount: 95,

  category: "Preventive Health Checkup",

  rating: 4.9,

  reviews: 184,

  image: "/packages/paleo-profile-basic-new.jpg",

  highlights: [
    "95 Health Parameters",
    "Diabetes Screening",
    "Complete Thyroid Profile",
    "Iron & Vitamin Assessment",
    "Liver & Kidney Function",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Complete Health Assessment",
      description:
        "Provides a comprehensive overview of blood health, metabolism, liver, kidneys, thyroid, and nutritional status.",
    },
    {
      title: "Early Disease Detection",
      description:
        "Helps identify diabetes, thyroid disorders, anemia, vitamin deficiencies, and organ dysfunction before symptoms become severe.",
    },
    {
      title: "Lifestyle Disease Monitoring",
      description:
        "Supports regular monitoring of cholesterol, blood sugar, and metabolic health.",
    },
    {
      title: "Preventive Wellness",
      description:
        "Encourages proactive healthcare through routine preventive screening.",
    },
  ],

  testCategories: [
    {
      title: "Blood Sugar",
      tests: [
        "Diabetes Profile",
      ],
    },
    {
      title: "Blood Health",
      tests: [
        "Complete Hemogram (CBC)",
      ],
    },
    {
      title: "Thyroid Health",
      tests: [
        "Thyroid Profile",
      ],
    },
    {
      title: "Heart Health",
      tests: [
        "Lipid Profile",
      ],
    },
    {
      title: "Liver Function",
      tests: [
        "Liver Profile",
      ],
    },
    {
      title: "Kidney Function",
      tests: [
        "Renal (Kidney) Profile",
      ],
    },
    {
      title: "Iron Assessment",
      tests: [
        "Iron Deficiency Profile",
      ],
    },
    {
      title: "Vitamin Assessment",
      tests: [
        "Vitamin Profile",
      ],
    },
    {
      title: "Urine Analysis",
      tests: [
        "Complete Urine Analysis",
      ],
    },
    {
      title: "Metabolic Health",
      tests: [
        "Metabolic Assessment",
      ],
    },
  ],

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

  seo: {
    introduction:
      "The Paleo Profile - Basic New is a comprehensive preventive health package that evaluates diabetes, thyroid function, liver and kidney health, cholesterol, iron status, vitamins, and overall metabolic wellness.",

    whyImportant:
      "Routine preventive health screening helps detect lifestyle diseases, nutritional deficiencies, and organ dysfunction before they lead to serious health complications.",

    benefits:
      "This package provides a complete overview of your health through comprehensive blood, urine, metabolic, vitamin, and organ function testing.",

    homeCollection:
      "Convenient home sample collection is available with secure digital reports delivered within 24–48 hours.",

    conclusion:
      "The Paleo Profile - Basic New is an excellent choice for individuals seeking an advanced annual preventive health checkup and complete wellness assessment.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "It is recommended for adults looking for a comprehensive preventive health screening or annual wellness checkup.",
    },
    {
      question: "Is fasting required?",
      answer:
        "Yes. A fasting period of 10–12 hours is recommended for accurate blood glucose and lipid profile testing.",
    },
    {
      question: "When will I receive my reports?",
      answer:
        "Reports are generally available online within 24–48 hours after sample collection.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},



{
  id: "women-basic-profile-utsh",

  slug: "women-basic-profile-utsh",

  name: "Women Basic Profile with UTSH",

  shortDescription:
    "Comprehensive women's preventive health package covering thyroid function, reproductive hormones, diabetes, vitamins, iron status, liver and kidney health, and overall wellness.",

  description:
    "The Women Basic Profile with UTSH is a specialized preventive health package designed to evaluate women's overall health. It combines thyroid assessment, reproductive hormone evaluation, diabetes screening, vitamin and iron status, liver and kidney function, cholesterol profile, and complete blood analysis to support early detection of hormonal imbalances, nutritional deficiencies, and lifestyle-related diseases.",

  tags: [
    "women-health",
    "thyroid",
    "hormones",
    "fertility",
    "diabetes",
    "vitamin-d",
    "vitamin-b12",
    "iron",
    "preventive",
    "wellness",
  ],

  price: 2055,

  originalPrice: 2899,

  discount: "29% OFF",

  reportTime: "24-48 Hours",

  fasting: "10-12 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Women Above 18 Years",
      description:
        "Ideal for routine preventive health screening and annual wellness checkups.",
      icon: "users",
    },
    {
      title: "Women with Hormonal Imbalance",
      description:
        "Useful for evaluating menstrual irregularities and hormonal disorders.",
      icon: "heart",
    },
    {
      title: "Women Planning Pregnancy",
      description:
        "Supports fertility evaluation through hormone and thyroid assessment.",
      icon: "activity",
    },
    {
      title: "Women with Fatigue or Weakness",
      description:
        "Helps detect anemia, vitamin deficiencies, and thyroid disorders.",
      icon: "calendar",
    },
    {
      title: "Preventive Women's Wellness",
      description:
        "Recommended for long-term health monitoring and early disease detection.",
      icon: "award",
    },
  ],

  preparation: [
    {
      title: "Fast for 10–12 Hours",
      description:
        "A fasting period of 10–12 hours is recommended for accurate glucose and lipid profile testing. Plain water is allowed.",
    },
    {
      title: "Inform About Menstrual Cycle",
      description:
        "Tell our healthcare team the phase of your menstrual cycle, as some hormone levels vary throughout the cycle.",
    },
    {
      title: "Discuss Supplements & Medicines",
      description:
        "Inform us about hormonal medicines, vitamins, or supplements you are taking before sample collection.",
    },
    {
      title: "Stay Hydrated",
      description:
        "Drink adequate water before your appointment to make blood collection easier.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring previous laboratory reports or prescriptions for comparison whenever available.",
    },
  ],

  testsCount: 73,

  category: "Women's Health Checkup",

  rating: 4.9,

  reviews: 162,

  image: "/packages/women-basic-profile-utsh.jpg",

  highlights: [
    "73 Health Parameters",
    "Women's Hormone Profile",
    "Thyroid Assessment",
    "Vitamin D & B12",
    "Iron Deficiency Screening",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Complete Women's Health Assessment",
      description:
        "Evaluates hormones, thyroid, blood sugar, vitamins, iron levels, and organ health.",
    },
    {
      title: "Hormonal Balance Evaluation",
      description:
        "Helps identify hormonal disorders affecting menstrual and reproductive health.",
    },
    {
      title: "Early Disease Detection",
      description:
        "Supports early diagnosis of thyroid disorders, diabetes, anemia, and nutritional deficiencies.",
    },
    {
      title: "Preventive Wellness",
      description:
        "Promotes proactive healthcare through routine women's health screening.",
    },
  ],

  testCategories: [
    {
      title: "Hormonal Health",
      tests: [
        "FSH",
        "LH",
        "Prolactin",
        "Estradiol",
      ],
    },
    {
      title: "Thyroid Health",
      tests: [
        "Thyroid Profile",
      ],
    },
    {
      title: "Blood Sugar",
      tests: [
        "Diabetes Profile",
      ],
    },
    {
      title: "Blood Health",
      tests: [
        "Complete Blood Count (CBC)",
      ],
    },
    {
      title: "Heart Health",
      tests: [
        "Lipid Profile",
      ],
    },
    {
      title: "Liver Function",
      tests: [
        "Liver Profile",
      ],
    },
    {
      title: "Kidney Function",
      tests: [
        "Kidney Profile",
      ],
    },
    {
      title: "Vitamin Assessment",
      tests: [
        "Vitamin D",
        "Vitamin B12",
      ],
    },
    {
      title: "Iron Studies",
      tests: [
        "Iron Deficiency Profile",
      ],
    },
  ],

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

  seo: {
    introduction:
      "The Women Basic Profile with UTSH is a comprehensive preventive health package designed to assess hormonal health, thyroid function, diabetes, vitamins, iron status, and overall wellness.",

    whyImportant:
      "Routine women's health screening helps identify hormonal disorders, thyroid diseases, nutritional deficiencies, and lifestyle-related conditions before symptoms become severe.",

    benefits:
      "This package provides a complete evaluation of reproductive hormones, metabolism, organ health, and nutritional status.",

    homeCollection:
      "Convenient home sample collection is available with secure digital reports delivered within 24–48 hours.",

    conclusion:
      "Women Basic Profile with UTSH is an ideal annual preventive health package for women seeking complete wellness monitoring.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "It is recommended for women looking for routine preventive health screening, hormonal evaluation, or fertility assessment.",
    },
    {
      question: "Is fasting required?",
      answer:
        "Yes. A fasting period of 10–12 hours is recommended for accurate results.",
    },
    {
      question: "Should I mention my menstrual cycle?",
      answer:
        "Yes. Informing the laboratory about your menstrual cycle helps interpret hormone results more accurately.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},



{
  id: "aarogyam-tax-saver-advanced-utsh",

  slug: "aarogyam-tax-saver-advanced-utsh",

  name: "Aarogyam Tax Saver Advanced with UTSH",

  shortDescription:
    "Comprehensive preventive health package covering diabetes, thyroid, heart health, liver, kidney, vitamins, hormones, arthritis markers, and complete wellness screening.",

  description:
    "The Aarogyam Tax Saver Advanced with UTSH Package is a premium preventive health screening designed to provide a detailed assessment of your overall health. It evaluates blood sugar, thyroid function, cardiac risk, liver and kidney health, vitamins, iron status, hormone balance, inflammatory markers, toxic elements, and complete blood analysis to help detect lifestyle-related diseases at an early stage.",

  tags: [
    "full-body",
    "preventive",
    "tax-saver",
    "diabetes",
    "thyroid",
    "heart",
    "liver",
    "kidney",
    "vitamins",
    "hormones",
    "wellness",
  ],

  price: 4500,

  originalPrice: 6500,

  discount: "31% OFF",

  reportTime: "24-48 Hours",

  fasting: "10-12 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Adults Above 30 Years",
      description:
        "Ideal for annual preventive health checkups and comprehensive wellness monitoring.",
      icon: "users",
    },
    {
      title: "People with Lifestyle Diseases",
      description:
        "Recommended for individuals with diabetes, hypertension, obesity, or cholesterol concerns.",
      icon: "heart",
    },
    {
      title: "Working Professionals",
      description:
        "Suitable for busy individuals who need a detailed health assessment.",
      icon: "briefcase",
    },
    {
      title: "Family History of Chronic Disease",
      description:
        "Useful for monitoring hereditary risks such as heart disease, diabetes, and thyroid disorders.",
      icon: "activity",
    },
    {
      title: "Executive Preventive Screening",
      description:
        "Comprehensive evaluation for maintaining long-term health and early disease detection.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "Fast for 10–12 Hours",
      description:
        "A fasting period of 10–12 hours is recommended because this package includes Blood Glucose, Lipid Profile, and other metabolic tests. Plain water is allowed.",
    },
    {
      title: "Drink Plenty of Water",
      description:
        "Stay well hydrated before sample collection to make blood collection easier and improve comfort.",
    },
    {
      title: "Continue Medicines Only if Advised",
      description:
        "Inform our healthcare team about any medications or supplements you are taking. Do not stop prescribed medicines unless instructed by your doctor.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring previous laboratory reports or prescriptions for better comparison and monitoring of your health.",
    },
    {
      title: "Avoid Alcohol Before Testing",
      description:
        "Avoid alcohol and strenuous exercise for at least 24 hours before sample collection to ensure accurate test results.",
    },
  ],

  testsCount: 136,

  category: "Preventive Health Checkup",

  rating: 4.9,

  reviews: 212,

  image: "/packages/aarogyam-tax-saver-advanced-utsh.jpg",

  highlights: [
    "136 Health Parameters",
    "Advanced Cardiac Risk Assessment",
    "Vitamin & Hormone Profile",
    "Diabetes & Thyroid Screening",
    "Liver & Kidney Function",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Complete Health Assessment",
      description:
        "Evaluates heart health, diabetes, thyroid, liver, kidneys, hormones, vitamins, and metabolic wellness.",
    },
    {
      title: "Early Disease Detection",
      description:
        "Helps identify diabetes, thyroid disorders, nutritional deficiencies, cardiac risk, and organ dysfunction before symptoms appear.",
    },
    {
      title: "Executive Wellness Monitoring",
      description:
        "Provides comprehensive insights into overall health for preventive healthcare.",
    },
    {
      title: "Long-Term Preventive Care",
      description:
        "Supports healthier lifestyle decisions through routine comprehensive health screening.",
    },
  ],

  testCategories: [
    {
      title: "Diabetes Profile",
      tests: ["Diabetes Profile"],
    },
    {
      title: "Heart Health",
      tests: ["Cardiac Risk Markers", "Lipid Profile"],
    },
    {
      title: "Thyroid Health",
      tests: ["Thyroid Profile"],
    },
    {
      title: "Liver Function",
      tests: ["Liver Profile"],
    },
    {
      title: "Kidney Function",
      tests: ["Renal Profile"],
    },
    {
      title: "Vitamin Assessment",
      tests: ["Vitamin Profile"],
    },
    {
      title: "Hormone Profile",
      tests: ["Hormone Profile"],
    },
    {
      title: "Iron Studies",
      tests: ["Iron Deficiency Profile"],
    },
    {
      title: "Blood Health",
      tests: ["Complete Hemogram"],
    },
    {
      title: "Urine Analysis",
      tests: ["Urine Analysis", "Urinogram"],
    },
    {
      title: "Inflammation & Arthritis",
      tests: ["Arthritis Profile"],
    },
    {
      title: "Electrolytes & Metabolism",
      tests: ["Electrolytes", "Metabolic Profile"],
    },
  ],

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

  seo: {
    introduction:
      "The Aarogyam Tax Saver Advanced with UTSH Package is a premium preventive health checkup offering comprehensive evaluation of diabetes, thyroid, heart, liver, kidney, hormone, vitamin, and metabolic health.",

    whyImportant:
      "Routine preventive screening helps detect chronic diseases, nutritional deficiencies, hormonal disorders, and cardiovascular risks before complications develop.",

    benefits:
      "This package provides an extensive overview of overall health, helping individuals make informed lifestyle and medical decisions.",

    homeCollection:
      "Enjoy safe home sample collection by trained professionals with secure digital reports delivered within 24–48 hours.",

    conclusion:
      "The Aarogyam Tax Saver Advanced with UTSH Package is an ideal choice for individuals seeking a comprehensive executive health screening and long-term preventive healthcare.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "It is recommended for adults seeking an advanced preventive health checkup, especially those above 30 years of age or with lifestyle-related risk factors.",
    },
    {
      question: "Is fasting required?",
      answer:
        "Yes. A fasting period of 10–12 hours is recommended for accurate metabolic and lipid profile results.",
    },
    {
      question: "When will I receive my reports?",
      answer:
        "Reports are generally available online within 24–48 hours after sample collection.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},

{
  id: "skin-aura-package-1",

  slug: "skin-aura-package-1",

  name: "Skin Aura Package 1",

  shortDescription:
    "Comprehensive skin wellness package evaluating vitamin levels, thyroid function, diabetes, liver, kidney, cholesterol, and blood health for healthy skin and hair.",

  description:
    "The Skin Aura Package 1 is a specialized wellness screening designed to identify nutritional deficiencies and medical conditions that commonly affect skin, hair, and overall wellness. It evaluates thyroid function, blood sugar, liver and kidney health, cholesterol, Vitamin D, Vitamin B12, and complete blood parameters to support healthier skin and early disease detection.",

  tags: [
    "skin",
    "hair",
    "vitamin-d",
    "vitamin-b12",
    "thyroid",
    "diabetes",
    "liver",
    "kidney",
    "wellness",
  ],

  price: 1499,

  originalPrice: 2199,

  discount: "32% OFF",

  reportTime: "24-48 Hours",

  fasting: "8-10 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "People with Hair Fall",
      description:
        "Helps identify vitamin deficiencies, thyroid disorders, and anemia affecting hair health.",
      icon: "activity",
    },
    {
      title: "People with Skin Problems",
      description:
        "Useful for evaluating nutritional and metabolic causes of dull skin, acne, and pigmentation.",
      icon: "heart",
    },
    {
      title: "Adults Seeking Preventive Care",
      description:
        "Ideal for routine wellness screening and nutritional assessment.",
      icon: "users",
    },
    {
      title: "Individuals with Fatigue",
      description:
        "Screens for diabetes, thyroid disorders, and vitamin deficiencies.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "Fast for 8–10 Hours",
      description:
        "Fasting is recommended because Blood Glucose and Lipid Profile are included. Plain water is allowed.",
    },
    {
      title: "Drink Plenty of Water",
      description:
        "Remain hydrated before sample collection to improve comfort during blood collection.",
    },
    {
      title: "Inform About Supplements",
      description:
        "Tell our healthcare team about any vitamin or nutritional supplements you are taking.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring previous laboratory reports if available for comparison.",
    },
  ],

  testsCount: 9,

  category: "Skin & Wellness Checkup",

  rating: 4.8,

  reviews: 142,

  image: "/packages/skin-aura-package-1.jpg",

  highlights: [
    "Vitamin D & B12",
    "Complete Blood Count",
    "Thyroid Profile",
    "Blood Sugar Screening",
    "Liver & Kidney Function",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Healthy Skin Assessment",
      description:
        "Evaluates nutritional and metabolic factors affecting skin health.",
    },
    {
      title: "Hair Health Screening",
      description:
        "Helps identify thyroid disorders and vitamin deficiencies contributing to hair fall.",
    },
    {
      title: "Early Disease Detection",
      description:
        "Supports early detection of diabetes, cholesterol abnormalities, and organ dysfunction.",
    },
    {
      title: "Preventive Wellness",
      description:
        "Provides a complete overview of overall health and nutritional status.",
    },
  ],

  testCategories: [
    {
      title: "Blood Health",
      tests: ["Complete Blood Count (CBC)"],
    },
    {
      title: "Diabetes",
      tests: ["Blood Glucose Fasting", "HbA1c"],
    },
    {
      title: "Thyroid Health",
      tests: ["Thyroid Profile (T3, T4, TSH Ultra-sensitive)"],
    },
    {
      title: "Vitamin Assessment",
      tests: ["Vitamin D Total", "Vitamin B12"],
    },
    {
      title: "Liver Function",
      tests: ["Liver Function Test (LFT)"],
    },
    {
      title: "Kidney Function",
      tests: ["Kidney Function Test (KFT)"],
    },
    {
      title: "Heart Health",
      tests: ["Lipid Profile"],
    },
  ],

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

  seo: {
    introduction:
      "The Skin Aura Package 1 evaluates vitamins, thyroid function, diabetes, liver, kidney, cholesterol, and blood health to support healthy skin and hair.",

    whyImportant:
      "Many skin and hair problems are linked to nutritional deficiencies and hormonal imbalance that can be detected through laboratory testing.",

    benefits:
      "The package provides a complete assessment of factors influencing healthy skin, hair, and overall wellness.",

    homeCollection:
      "Enjoy convenient home sample collection with secure digital reports within 24–48 hours.",

    conclusion:
      "Skin Aura Package 1 is an excellent preventive screening option for individuals looking to improve skin health through early diagnosis.",
  },

  faqs: [
    {
      question: "Is fasting required?",
      answer:
        "Yes. Fasting for 8–10 hours is recommended.",
    },
    {
      question: "Who should take this package?",
      answer:
        "It is suitable for people experiencing hair fall, skin concerns, fatigue, or those seeking preventive wellness screening.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
    {
      question: "When are reports available?",
      answer:
        "Reports are generally available within 24–48 hours.",
    },
  ],
},
{
  id: "fertility-comprehensive-panel-female",

  slug: "fertility-comprehensive-panel-female",

  name: "Fertility Comprehensive Panel (Female)",

  shortDescription:
    "Comprehensive female fertility assessment package evaluating ovarian reserve, reproductive hormones, and thyroid function for fertility planning and reproductive wellness.",

  description:
    "The Fertility Comprehensive Panel (Female) is an advanced hormone evaluation designed to assess female reproductive health and fertility potential. It measures ovarian reserve, reproductive hormones, thyroid function, and hormonal balance to help diagnose fertility concerns, menstrual irregularities, ovulation disorders, and endocrine conditions affecting conception.",

  tags: [
    "fertility",
    "female-health",
    "hormones",
    "pregnancy",
    "amh",
    "thyroid",
    "ovarian-reserve",
    "reproductive-health",
  ],

  price: 2800,

  originalPrice: 3999,

  discount: "30% OFF",

  reportTime: "24-48 Hours",

  fasting: "Not Required",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Women Planning Pregnancy",
      description:
        "Ideal for women preparing for conception and evaluating reproductive health.",
      icon: "heart",
    },
    {
      title: "Women with Irregular Periods",
      description:
        "Helps investigate hormonal imbalance and ovulation-related disorders.",
      icon: "activity",
    },
    {
      title: "Couples Undergoing Fertility Evaluation",
      description:
        "Recommended as part of infertility assessment before treatment.",
      icon: "users",
    },
    {
      title: "Women with PCOS or Hormonal Disorders",
      description:
        "Useful for monitoring reproductive hormone levels and ovarian function.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "No Fasting Required",
      description:
        "You can eat and drink normally before sample collection unless advised otherwise by your doctor.",
    },
    {
      title: "Schedule on Recommended Cycle Day",
      description:
        "Certain hormone tests may be recommended on specific days of your menstrual cycle for the most accurate interpretation.",
    },
    {
      title: "Inform About Hormonal Medicines",
      description:
        "Tell our healthcare team about fertility treatments, oral contraceptives, or hormone medications before testing.",
    },
    {
      title: "Carry Previous Fertility Reports",
      description:
        "Bring previous hormone reports, ultrasound findings, or fertility records for comparison if available.",
    },
  ],

  testsCount: 8,

  category: "Women's Health & Fertility",

  rating: 4.9,

  reviews: 96,

  image: "/packages/fertility-comprehensive-panel-female.jpg",

  highlights: [
    "AMH (Ovarian Reserve)",
    "FSH & LH",
    "Estradiol (E2)",
    "Prolactin",
    "Free & Total Testosterone",
    "Ultra-sensitive TSH",
  ],

  benefits: [
    {
      title: "Fertility Assessment",
      description:
        "Evaluates ovarian reserve and reproductive hormones important for conception.",
    },
    {
      title: "Hormonal Balance",
      description:
        "Helps detect hormone imbalances affecting menstrual cycles and fertility.",
    },
    {
      title: "Pregnancy Planning",
      description:
        "Supports informed family planning and fertility treatment decisions.",
    },
    {
      title: "Early Diagnosis",
      description:
        "Assists in identifying endocrine disorders such as PCOS and thyroid dysfunction.",
    },
  ],

  testCategories: [
    {
      title: "Ovarian Reserve",
      tests: ["Anti Mullerian Hormone (AMH)"],
    },
    {
      title: "Female Hormones",
      tests: [
        "Follicle Stimulating Hormone (FSH)",
        "Luteinizing Hormone (LH)",
        "Estradiol (E2)",
        "Prolactin",
      ],
    },
    {
      title: "Androgen Profile",
      tests: [
        "Free Testosterone",
        "Total Testosterone",
      ],
    },
    {
      title: "Thyroid Health",
      tests: ["TSH Ultra Sensitive"],
    },
  ],

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

  seo: {
    introduction:
      "The Fertility Comprehensive Panel (Female) provides a detailed assessment of reproductive hormones, ovarian reserve, and thyroid function to support fertility planning.",

    whyImportant:
      "Hormonal imbalance is one of the leading causes of infertility and menstrual disorders. Early testing helps guide appropriate treatment.",

    benefits:
      "This package offers comprehensive hormone evaluation for women planning pregnancy or undergoing fertility treatment.",

    homeCollection:
      "Convenient home sample collection is available with secure digital reports delivered within 24–48 hours.",

    conclusion:
      "The Fertility Comprehensive Panel (Female) is an excellent choice for women seeking accurate fertility evaluation and reproductive health assessment.",
  },

  faqs: [
    {
      question: "Is fasting required?",
      answer:
        "No. Fasting is generally not required for this package.",
    },
    {
      question: "When should these tests be performed?",
      answer:
        "Some hormone tests may be recommended on specific days of the menstrual cycle. Please follow your doctor's advice.",
    },
    {
      question: "Can I take this package while on hormone medication?",
      answer:
        "Yes, but you should inform the laboratory about all hormonal medications before sample collection.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},
{
  id: "mega-health-checkup-advance-package",

  slug: "mega-health-checkup-advance-package",

  name: "Mega Health Checkup Camp - Advance Package",

  shortDescription:
    "Affordable preventive health package covering diabetes, thyroid, liver, kidney, cholesterol, urine examination, and complete blood analysis for routine wellness screening.",

  description:
    "The Mega Health Checkup Camp - Advance Package is a comprehensive preventive health screening designed to evaluate your overall health at an affordable price. It includes diabetes screening, thyroid evaluation, liver and kidney function tests, cholesterol profile, complete blood count, urine analysis, and iron studies to help detect common lifestyle-related diseases and nutritional deficiencies at an early stage.",

  tags: [
    "health-camp",
    "preventive",
    "full-body",
    "diabetes",
    "thyroid",
    "liver",
    "kidney",
    "cholesterol",
    "wellness",
  ],

  price: 799,

  originalPrice: 1499,

  discount: "47% OFF",

  reportTime: "24-48 Hours",

  fasting: "10-12 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Adults Above 18 Years",
      description:
        "Ideal for routine preventive health screening and annual wellness checkups.",
      icon: "users",
    },
    {
      title: "Working Professionals",
      description:
        "Suitable for busy individuals looking for an affordable complete health assessment.",
      icon: "briefcase",
    },
    {
      title: "People with Family History of Lifestyle Diseases",
      description:
        "Useful for monitoring diabetes, thyroid disorders, cholesterol, and organ health.",
      icon: "activity",
    },
    {
      title: "Community Health Screening",
      description:
        "Recommended for preventive health camps and regular wellness monitoring.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "Fast for 10–12 Hours",
      description:
        "A fasting period of 10–12 hours is recommended because Blood Glucose and Lipid Profile are included. Plain water is allowed.",
    },
    {
      title: "Drink Plenty of Water",
      description:
        "Remain hydrated before sample collection to ensure a comfortable blood collection experience.",
    },
    {
      title: "Avoid Alcohol Before Testing",
      description:
        "Avoid alcohol and heavy meals for at least 24 hours before sample collection for accurate laboratory results.",
    },
    {
      title: "Continue Medicines Only if Advised",
      description:
        "Inform our healthcare team about your medications before sample collection. Do not stop prescribed medicines unless advised by your doctor.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring previous laboratory reports if available for comparison and better health evaluation.",
    },
  ],

  testsCount: 89,

  category: "Preventive Health Checkup",

  rating: 4.8,

  reviews: 173,

  image: "/packages/mega-health-checkup-advance-package.jpg",

  highlights: [
    "89 Health Parameters",
    "Diabetes Screening",
    "Thyroid Profile",
    "Liver & Kidney Function",
    "Complete Blood Count",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Complete Health Assessment",
      description:
        "Evaluates blood health, diabetes, thyroid, liver, kidney function, cholesterol, and urine health.",
    },
    {
      title: "Early Disease Detection",
      description:
        "Helps detect diabetes, thyroid disorders, anemia, cholesterol abnormalities, and organ dysfunction before symptoms become severe.",
    },
    {
      title: "Affordable Preventive Screening",
      description:
        "Provides comprehensive wellness assessment at an economical price.",
    },
    {
      title: "Routine Wellness Monitoring",
      description:
        "Supports long-term health through regular preventive checkups.",
    },
  ],

  testCategories: [
    {
      title: "Blood Health",
      tests: [
        "Complete Blood Count (CBC)",
        "ESR",
      ],
    },
    {
      title: "Diabetes",
      tests: [
        "Fasting Blood Glucose",
        "HbA1c",
      ],
    },
    {
      title: "Thyroid Health",
      tests: [
        "T3",
        "T4",
        "TSH Ultra-sensitive",
      ],
    },
    {
      title: "Heart Health",
      tests: [
        "Lipid Profile",
      ],
    },
    {
      title: "Liver Function",
      tests: [
        "Liver Function Test (LFT)",
      ],
    },
    {
      title: "Kidney Function",
      tests: [
        "Kidney Function Test (KFT)",
      ],
    },
    {
      title: "Iron Studies",
      tests: [
        "Iron Studies",
      ],
    },
    {
      title: "Urine Analysis",
      tests: [
        "Routine Urine Analysis",
        "Urine Microscopy",
      ],
    },
  ],

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

  seo: {
    introduction:
      "The Mega Health Checkup Camp - Advance Package is an affordable preventive health screening that evaluates diabetes, thyroid, liver, kidney, cholesterol, blood health, and urine analysis in one comprehensive package.",

    whyImportant:
      "Regular preventive health screening helps identify common lifestyle diseases before serious complications develop.",

    benefits:
      "This package provides a complete overview of major body systems, enabling early diagnosis and timely medical care.",

    homeCollection:
      "Enjoy convenient home sample collection with secure digital reports delivered within 24–48 hours.",

    conclusion:
      "The Mega Health Checkup Camp - Advance Package is an excellent choice for affordable annual preventive health screening and routine wellness monitoring.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "It is recommended for adults seeking an affordable annual preventive health checkup and routine wellness screening.",
    },
    {
      question: "Is fasting required?",
      answer:
        "Yes. A fasting period of 10–12 hours is recommended for accurate blood glucose and lipid profile results.",
    },
    {
      question: "When will I receive my reports?",
      answer:
        "Reports are generally available online within 24–48 hours after sample collection.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},

{
  id: "mega-health-checkup-premium-package",

  slug: "mega-health-checkup-premium-package",

  name: "Mega Health Checkup Camp - Premium Package",

  shortDescription:
    "Advanced preventive health package covering diabetes, thyroid, liver, kidney, cholesterol, vitamins, urine analysis, and complete blood health assessment.",

  description:
    "The Mega Health Checkup Camp Premium Package is a comprehensive preventive health screening designed to evaluate your overall health. It includes diabetes screening, thyroid assessment, liver and kidney function tests, lipid profile, vitamin B12 and Vitamin D evaluation, urine examination, and complete blood analysis for early detection of lifestyle diseases and nutritional deficiencies.",

  tags: [
    "health-checkup",
    "full-body",
    "preventive",
    "diabetes",
    "thyroid",
    "vitamin-d",
    "vitamin-b12",
    "liver",
    "kidney",
    "cholesterol",
    "wellness",
  ],

  price: 999,

  originalPrice: 1499,

  discount: "33% OFF",

  reportTime: "24-48 Hours",

  fasting: "10-12 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Adults Above 18 Years",
      description:
        "Ideal for annual preventive health checkups and complete wellness monitoring.",
      icon: "users",
    },
    {
      title: "People with Fatigue",
      description:
        "Includes Vitamin B12 and Vitamin D screening to detect nutritional deficiencies.",
      icon: "heart",
    },
    {
      title: "Working Professionals",
      description:
        "Suitable for busy individuals looking for a complete health assessment.",
      icon: "briefcase",
    },
    {
      title: "Lifestyle Disease Monitoring",
      description:
        "Helps monitor diabetes, cholesterol, thyroid disorders, and overall health.",
      icon: "activity",
    },
  ],

  preparation: [
    {
      title: "Fast for 10–12 Hours",
      description:
        "Fasting is recommended because this package includes Blood Glucose and Lipid Profile tests. Plain water is allowed.",
    },
    {
      title: "Drink Plenty of Water",
      description:
        "Stay well hydrated before sample collection to improve comfort and make blood collection easier.",
    },
    {
      title: "Avoid Vitamin Supplements",
      description:
        "Avoid taking Vitamin B12 or Vitamin D supplements on the day of testing unless advised by your doctor.",
    },
    {
      title: "Inform About Medications",
      description:
        "Tell our healthcare team about any medicines or supplements you are currently taking.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring earlier laboratory reports for comparison and better interpretation of your health results.",
    },
  ],

  testsCount: 14,

  category: "Preventive Health Checkup",

  rating: 4.9,

  reviews: 164,

  image: "/packages/mega-health-checkup-premium-package.jpg",

  highlights: [
    "Vitamin D & B12 Screening",
    "HbA1c Diabetes Test",
    "Complete Blood Count",
    "Thyroid Profile",
    "Liver & Kidney Function",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Comprehensive Wellness Assessment",
      description:
        "Evaluates blood health, diabetes, thyroid, liver, kidneys, cholesterol, and vitamin levels.",
    },
    {
      title: "Detect Vitamin Deficiencies",
      description:
        "Helps identify Vitamin D and Vitamin B12 deficiencies before symptoms become severe.",
    },
    {
      title: "Lifestyle Disease Screening",
      description:
        "Supports early diagnosis of diabetes, thyroid disorders, and cardiovascular risk.",
    },
    {
      title: "Preventive Healthcare",
      description:
        "Encourages timely medical intervention and long-term wellness.",
    },
  ],

  testCategories: [
    {
      title: "Blood Health",
      tests: ["CBC", "ESR"],
    },
    {
      title: "Diabetes",
      tests: ["Fasting Blood Glucose", "HbA1c"],
    },
    {
      title: "Thyroid",
      tests: ["T3", "T4", "TSH Ultra-sensitive"],
    },
    {
      title: "Liver",
      tests: ["Liver Function Test (LFT)"],
    },
    {
      title: "Kidney",
      tests: ["Kidney Function Test (KFT)"],
    },
    {
      title: "Heart Health",
      tests: ["Lipid Profile"],
    },
    {
      title: "Vitamin Assessment",
      tests: ["Vitamin B12", "Vitamin D"],
    },
    {
      title: "Urine Analysis",
      tests: ["Routine Urine Analysis"],
    },
  ],

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

  seo: {
    introduction:
      "The Mega Health Checkup Camp Premium Package combines diabetes screening, thyroid evaluation, vitamin assessment, liver and kidney function testing, cholesterol testing, and complete blood analysis in one preventive health package.",

    whyImportant:
      "Routine health screening helps detect nutritional deficiencies, diabetes, thyroid disorders, and lifestyle diseases before complications develop.",

    benefits:
      "This package provides a complete overview of your health by evaluating blood, vitamins, thyroid, cholesterol, liver, kidneys, and urine health.",

    homeCollection:
      "Convenient home sample collection with trained phlebotomists and secure online reports within 24–48 hours.",

    conclusion:
      "The Mega Health Checkup Camp Premium Package is an excellent choice for individuals seeking a complete preventive health screening with added vitamin assessment.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "It is recommended for adults looking for comprehensive preventive health screening with vitamin assessment.",
    },
    {
      question: "Is fasting required?",
      answer:
        "Yes. A fasting period of 10–12 hours is recommended for accurate blood glucose and lipid profile results.",
    },
    {
      question: "When will reports be available?",
      answer:
        "Reports are generally available online within 24–48 hours after sample collection.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},
{
  id: "mega-health-checkup-super-package",

  slug: "mega-health-checkup-super-package",

  name: "Mega Health Checkup Camp - Super Package",

  shortDescription:
    "Comprehensive preventive health package covering diabetes, thyroid, liver, kidney, cholesterol, vitamins, arthritis markers, inflammation screening, and complete blood analysis.",

  description:
    "The Mega Health Checkup Camp Super Package is the most comprehensive package in the Mega Health Camp series. It evaluates blood sugar, thyroid function, liver and kidney health, cholesterol, vitamins, inflammation, arthritis markers, urine health, and complete blood parameters to help detect lifestyle diseases and nutritional deficiencies at an early stage.",

  tags: [
    "full-body",
    "preventive",
    "wellness",
    "diabetes",
    "thyroid",
    "vitamin-d",
    "vitamin-b12",
    "arthritis",
    "crp",
    "ra-factor",
    "cholesterol",
    "health-checkup",
  ],

  price: 1199,

  originalPrice: 1799,

  discount: "33% OFF",

  reportTime: "24-48 Hours",

  fasting: "10-12 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Adults Above 18 Years",
      description:
        "Recommended for comprehensive annual preventive health screening.",
      icon: "users",
    },
    {
      title: "People with Joint Pain",
      description:
        "Includes RA Test and CRP to evaluate inflammation and arthritis risk.",
      icon: "heart",
    },
    {
      title: "Working Professionals",
      description:
        "Suitable for individuals seeking a complete health assessment.",
      icon: "briefcase",
    },
    {
      title: "Lifestyle Disease Monitoring",
      description:
        "Helps monitor diabetes, cholesterol, thyroid disorders, and overall wellness.",
      icon: "activity",
    },
    {
      title: "Routine Preventive Screening",
      description:
        "Ideal for maintaining long-term health through early disease detection.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "Fast for 10–12 Hours",
      description:
        "A fasting period of 10–12 hours is recommended because this package includes Blood Glucose and Lipid Profile tests. Plain water is allowed.",
    },
    {
      title: "Drink Plenty of Water",
      description:
        "Staying hydrated makes blood sample collection easier and improves patient comfort.",
    },
    {
      title: "Avoid Alcohol Before Testing",
      description:
        "Avoid alcohol for at least 24 hours before sample collection to ensure accurate test results.",
    },
    {
      title: "Inform About Ongoing Treatments",
      description:
        "Tell our healthcare team about any medications, supplements, or ongoing treatments before testing.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring previous laboratory reports if available for better comparison of your health parameters.",
    },
  ],

  testsCount: 16,

  category: "Preventive Health Checkup",

  rating: 4.9,

  reviews: 182,

  image: "/packages/mega-health-checkup-super-package.jpg",

  highlights: [
    "Vitamin D & B12",
    "RA Test & CRP",
    "HbA1c Diabetes Screening",
    "Complete Blood Count",
    "Thyroid Profile",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Complete Health Assessment",
      description:
        "Evaluates blood health, diabetes, thyroid, liver, kidneys, cholesterol, vitamins, and inflammation markers.",
    },
    {
      title: "Arthritis & Inflammation Screening",
      description:
        "Includes RA Test and CRP to help identify inflammatory and autoimmune conditions.",
    },
    {
      title: "Early Disease Detection",
      description:
        "Helps detect diabetes, vitamin deficiencies, thyroid disorders, anemia, and lifestyle-related diseases.",
    },
    {
      title: "Preventive Wellness",
      description:
        "Supports long-term health through regular preventive screening and early diagnosis.",
    },
  ],

  testCategories: [
    {
      title: "Blood Health",
      tests: [
        "CBC",
        "ESR",
      ],
    },
    {
      title: "Diabetes",
      tests: [
        "Fasting Blood Glucose",
        "HbA1c",
      ],
    },
    {
      title: "Thyroid",
      tests: [
        "T3",
        "T4",
        "TSH Ultra-sensitive",
      ],
    },
    {
      title: "Liver Function",
      tests: [
        "Liver Function Test (LFT)",
      ],
    },
    {
      title: "Kidney Function",
      tests: [
        "Kidney Function Test (KFT)",
      ],
    },
    {
      title: "Heart Health",
      tests: [
        "Lipid Profile",
      ],
    },
    {
      title: "Vitamin Assessment",
      tests: [
        "Vitamin B12",
        "Vitamin D",
      ],
    },
    {
      title: "Inflammation & Arthritis",
      tests: [
        "RA Test",
        "CRP",
      ],
    },
    {
      title: "Urine Analysis",
      tests: [
        "Routine Urine Analysis",
      ],
    },
  ],

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

  seo: {
    introduction:
      "The Mega Health Checkup Camp Super Package provides comprehensive preventive health screening with diabetes testing, thyroid profile, liver and kidney evaluation, vitamin assessment, cholesterol testing, arthritis markers, and complete blood analysis.",

    whyImportant:
      "Routine preventive screening helps identify diabetes, inflammation, arthritis, vitamin deficiencies, thyroid disorders, and organ dysfunction before serious complications develop.",

    benefits:
      "This package offers a detailed overview of your overall health by evaluating blood sugar, cholesterol, thyroid function, liver, kidneys, vitamins, inflammation, and blood health.",

    homeCollection:
      "Enjoy convenient home sample collection by trained professionals with secure digital reports delivered within 24–48 hours.",

    conclusion:
      "The Mega Health Checkup Camp Super Package is an ideal choice for individuals seeking a comprehensive annual health screening with advanced inflammation and arthritis assessment.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "It is recommended for adults looking for a comprehensive preventive health checkup with arthritis and inflammation screening.",
    },
    {
      question: "Is fasting required?",
      answer:
        "Yes. A fasting period of 10–12 hours is recommended for accurate blood glucose and lipid profile testing.",
    },
    {
      question: "When will my reports be available?",
      answer:
        "Reports are generally available online within 24–48 hours after sample collection.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},
{
  id: "vitamin-d3-vitamin-b12-screening",

  slug: "vitamin-d3-vitamin-b12-screening",

  name: "Vitamin D3 + Vitamin B12 Screening",

  shortDescription:
    "Essential vitamin screening package to evaluate Vitamin D3 and Vitamin B12 levels for bone health, energy, immunity, and nervous system function.",

  description:
    "The Vitamin D3 + Vitamin B12 Screening Package is designed to identify two of the most common nutritional deficiencies. It helps assess fatigue, weakness, low immunity, bone health, nerve function, and overall wellness by measuring Vitamin D3 and Vitamin B12 levels for timely diagnosis and treatment.",

  tags: [
    "vitamin-d",
    "vitamin-b12",
    "nutrition",
    "wellness",
    "fatigue",
    "bone-health",
    "immunity",
    "preventive",
  ],

  price: 599,

  originalPrice: 899,

  discount: "33% OFF",

  reportTime: "24 Hours",

  fasting: "Not Required",

  homeCollection: true,

  recommendedFor: [
    {
      title: "People with Fatigue or Weakness",
      description:
        "Helps identify Vitamin D3 and Vitamin B12 deficiencies that may cause tiredness and low energy.",
      icon: "heart",
    },
    {
      title: "Individuals with Bone Pain",
      description:
        "Useful for evaluating Vitamin D deficiency affecting bone and muscle health.",
      icon: "activity",
    },
    {
      title: "Vegetarians & Elderly Adults",
      description:
        "Recommended for individuals at higher risk of Vitamin B12 deficiency.",
      icon: "users",
    },
    {
      title: "Routine Wellness Screening",
      description:
        "Suitable for preventive health monitoring and nutritional assessment.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "No Fasting Required",
      description:
        "You can undergo this test at any time of the day. Fasting is not necessary.",
    },
    {
      title: "Stay Hydrated",
      description:
        "Drink normal amounts of water before sample collection for a comfortable experience.",
    },
    {
      title: "Inform About Supplements",
      description:
        "Tell our healthcare team if you are taking Vitamin D or Vitamin B12 supplements, as they may influence test interpretation.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring earlier vitamin test reports if available for comparison and monitoring.",
    },
    {
      title: "Relax During Sample Collection",
      description:
        "Our trained phlebotomists ensure safe, hygienic, and comfortable blood sample collection.",
    },
  ],

  testsCount: 2,

  category: "Vitamin Screening",

  rating: 4.9,

  reviews: 138,

  image: "/packages/vitamin-d3-vitamin-b12-screening.jpg",

  highlights: [
    "Vitamin D3 Test",
    "Vitamin B12 Test",
    "Bone Health Assessment",
    "Energy & Immunity Evaluation",
    "Home Sample Collection",
    "Fast Online Reports",
  ],

  benefits: [
    {
      title: "Detect Nutritional Deficiencies",
      description:
        "Identifies Vitamin D3 and Vitamin B12 deficiencies before symptoms become severe.",
    },
    {
      title: "Supports Bone Health",
      description:
        "Helps evaluate Vitamin D levels essential for healthy bones and muscles.",
    },
    {
      title: "Improves Energy Assessment",
      description:
        "Assists in identifying vitamin-related causes of fatigue, weakness, and low stamina.",
    },
    {
      title: "Preventive Wellness",
      description:
        "Supports regular nutritional monitoring for long-term health.",
    },
  ],

  testCategories: [
    {
      title: "Vitamin Assessment",
      tests: [
        "Vitamin D Total (25-Hydroxy)",
        "Vitamin B12",
      ],
    },
  ],

  includedTests: [
    "Vitamin D Total (25-Hydroxy)",
    "Vitamin B12",
  ],

  seo: {
    introduction:
      "The Vitamin D3 + Vitamin B12 Screening Package evaluates two essential vitamins responsible for bone strength, immunity, nerve health, and energy production.",

    whyImportant:
      "Vitamin deficiencies are common and can contribute to fatigue, muscle weakness, poor immunity, tingling sensations, and bone disorders if left untreated.",

    benefits:
      "This package provides early detection of Vitamin D3 and Vitamin B12 deficiencies, helping guide timely treatment and nutritional improvements.",

    homeCollection:
      "Convenient home sample collection is available with trained professionals and secure online reports.",

    conclusion:
      "The Vitamin D3 + Vitamin B12 Screening Package is an affordable preventive test for maintaining optimal nutritional health and overall wellness.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "It is recommended for individuals experiencing fatigue, weakness, bone pain, low immunity, or those at risk of vitamin deficiencies.",
    },
    {
      question: "Is fasting required?",
      answer:
        "No. Fasting is not required for Vitamin D3 and Vitamin B12 testing.",
    },
    {
      question: "When will I receive my reports?",
      answer:
        "Reports are generally available within 24 hours after sample collection.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},


{
  id: "aarogyam-b-pro",

  slug: "aarogyam-b-pro",

  name: "Aarogyam B Pro",

  shortDescription:
    "Advanced preventive health package covering diabetes, thyroid, liver, kidney, cholesterol, cardiac risk markers, iron profile, electrolytes, and complete wellness assessment.",

  description:
    "The Aarogyam B Pro Package is a comprehensive preventive health screening designed to evaluate your overall health. It includes advanced liver and kidney function tests, thyroid evaluation, diabetes screening, cholesterol profile, inflammatory markers, iron studies, electrolyte balance, and complete blood analysis for early detection of lifestyle diseases and metabolic disorders.",

  tags: [
    "preventive",
    "full-body",
    "diabetes",
    "thyroid",
    "liver",
    "kidney",
    "cholesterol",
    "cardiac",
    "iron",
    "electrolytes",
    "wellness",
  ],

  price: 1999,

  originalPrice: 2999,

  discount: "33% OFF",

  reportTime: "24-48 Hours",

  fasting: "10-12 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Adults Above 18 Years",
      description:
        "Ideal for annual preventive health screening and routine wellness evaluation.",
      icon: "users",
    },
    {
      title: "People with Lifestyle Disease Risk",
      description:
        "Suitable for monitoring diabetes, cholesterol, thyroid disorders, and heart health.",
      icon: "heart",
    },
    {
      title: "Working Professionals",
      description:
        "Provides a comprehensive assessment for busy individuals seeking proactive healthcare.",
      icon: "briefcase",
    },
    {
      title: "People with Family History of Chronic Diseases",
      description:
        "Helps detect metabolic disorders and cardiovascular risk factors at an early stage.",
      icon: "activity",
    },
    {
      title: "Annual Preventive Screening",
      description:
        "Recommended for maintaining long-term health through routine preventive testing.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "Fast for 10–12 Hours",
      description:
        "A fasting period of 10–12 hours is recommended because this package includes blood glucose and lipid profile tests. Plain water is allowed.",
    },
    {
      title: "Drink Plenty of Water",
      description:
        "Stay hydrated before sample collection to improve patient comfort and make blood collection easier.",
    },
    {
      title: "Avoid Alcohol Before Testing",
      description:
        "Avoid alcohol for at least 24 hours before testing for accurate liver function and metabolic test results.",
    },
    {
      title: "Inform About Medications",
      description:
        "Tell our healthcare team about any medicines or supplements you are currently taking before sample collection.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring earlier laboratory reports if available for better comparison of your health parameters.",
    },
  ],

  testsCount: 15,

  category: "Preventive Health Checkup",

  rating: 4.9,

  reviews: 176,

  image: "/packages/aarogyam-b-pro.jpg",

  highlights: [
    "Advanced Thyroid Profile",
    "Iron Profile",
    "Electrolytes",
    "hs-CRP Cardiac Marker",
    "Advanced Liver & Kidney Tests",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Comprehensive Health Assessment",
      description:
        "Evaluates diabetes, thyroid, liver, kidneys, cholesterol, electrolytes, and blood health.",
    },
    {
      title: "Cardiovascular Risk Screening",
      description:
        "Includes hs-CRP and lipid profile to help identify heart disease risk factors.",
    },
    {
      title: "Early Disease Detection",
      description:
        "Helps identify diabetes, thyroid disorders, anemia, inflammation, and metabolic abnormalities.",
    },
    {
      title: "Preventive Wellness",
      description:
        "Supports long-term health through regular preventive screening and timely intervention.",
    },
  ],

  testCategories: [
    {
      title: "Diabetes",
      tests: ["Diabetes Profile"],
    },
    {
      title: "Thyroid",
      tests: [
        "Thyroid Basic",
        "Thyroid Advanced",
      ],
    },
    {
      title: "Liver Function",
      tests: [
        "Liver Basic",
        "Liver Advanced",
        "Liver Extended",
      ],
    },
    {
      title: "Kidney Function",
      tests: [
        "Kidney Basic",
        "Kidney Advanced",
      ],
    },
    {
      title: "Heart Health",
      tests: [
        "Lipid Basic",
        "Lipid Advanced",
        "hs-CRP",
      ],
    },
    {
      title: "Blood Health",
      tests: [
        "CBC",
        "Iron Profile",
      ],
    },
    {
      title: "Electrolytes",
      tests: [
        "Electrolytes",
      ],
    },
  ],

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

  seo: {
    introduction:
      "The Aarogyam B Pro Package provides comprehensive preventive health screening with diabetes testing, thyroid evaluation, advanced liver and kidney function tests, cardiac risk markers, electrolyte assessment, and complete blood analysis.",

    whyImportant:
      "Routine preventive screening helps detect diabetes, thyroid disorders, cardiovascular risk, liver and kidney disease, and nutritional deficiencies before complications develop.",

    benefits:
      "This package provides a detailed overview of your metabolic health, blood health, cardiovascular risk, and major organ functions.",

    homeCollection:
      "Convenient home sample collection is available with trained phlebotomists and secure online reports delivered within 24–48 hours.",

    conclusion:
      "The Aarogyam B Pro Package is an excellent choice for individuals seeking an advanced preventive health checkup with comprehensive metabolic and cardiovascular assessment.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "Adults looking for advanced preventive health screening and lifestyle disease monitoring.",
    },
    {
      question: "Is fasting required?",
      answer:
        "Yes. A fasting period of 10–12 hours is recommended.",
    },
    {
      question: "When will I receive my reports?",
      answer:
        "Reports are generally available within 24–48 hours after sample collection.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},
{
  id: "aarogyam-c-pro",

  slug: "aarogyam-c-pro",

  name: "Aarogyam C Pro",

  shortDescription:
    "Comprehensive preventive health package with advanced cardiac risk assessment, nutritional screening, pancreas profile, mineral analysis, inflammation markers, and complete wellness evaluation.",

  description:
    "The Aarogyam C Pro Package is a comprehensive preventive health screening designed to evaluate your overall health through advanced metabolic, cardiovascular, nutritional, and organ function assessment. It includes diabetes screening, thyroid profile, liver and kidney evaluation, cardiac risk markers, iron studies, pancreas profile, mineral analysis, inflammatory markers, and complete blood analysis for early detection of lifestyle diseases.",

  tags: [
    "preventive",
    "full-body",
    "cardiac",
    "diabetes",
    "thyroid",
    "liver",
    "kidney",
    "nutrition",
    "iron",
    "wellness",
    "metabolic",
    "heart",
  ],

  price: 3999,

  originalPrice: 5999,

  discount: "33% OFF",

  reportTime: "24-48 Hours",

  fasting: "10-12 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Adults Above 18 Years",
      description:
        "Ideal for annual preventive health checkups and advanced wellness monitoring.",
      icon: "users",
    },
    {
      title: "People with Family History of Heart Disease",
      description:
        "Includes advanced cardiac risk markers for comprehensive cardiovascular assessment.",
      icon: "heart",
    },
    {
      title: "Working Professionals",
      description:
        "Suitable for individuals seeking a complete executive health evaluation.",
      icon: "briefcase",
    },
    {
      title: "People with Nutritional Deficiencies",
      description:
        "Evaluates vitamins, minerals, ferritin, folate, and iron stores.",
      icon: "activity",
    },
    {
      title: "Annual Preventive Screening",
      description:
        "Recommended for maintaining long-term health through early disease detection.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "Fast for 10–12 Hours",
      description:
        "A fasting period of 10–12 hours is recommended because this package includes glucose and lipid testing. Plain water is allowed.",
    },
    {
      title: "Drink Plenty of Water",
      description:
        "Stay normally hydrated before sample collection for a comfortable experience.",
    },
    {
      title: "Avoid Heavy Exercise",
      description:
        "Avoid strenuous physical activity for 24 hours before testing, as it may influence certain laboratory parameters.",
    },
    {
      title: "Inform About Supplements",
      description:
        "Tell our healthcare team about vitamins, iron supplements, or other medications before testing.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring earlier laboratory reports for better comparison and health monitoring.",
    },
  ],

  testsCount: 21,

  category: "Preventive Health Checkup",

  rating: 4.9,

  reviews: 194,

  image: "/packages/aarogyam-c-pro.jpg",

  highlights: [
    "Advanced Cardiac Risk Markers",
    "Iron & Ferritin Profile",
    "Pancreas Profile",
    "Mineral Assessment",
    "Inflammation Screening",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Comprehensive Wellness Assessment",
      description:
        "Evaluates diabetes, thyroid, liver, kidneys, heart health, nutrition, and metabolic function.",
    },
    {
      title: "Advanced Heart Risk Screening",
      description:
        "Includes specialized cardiac risk markers to help identify cardiovascular disease risk.",
    },
    {
      title: "Nutritional Health Evaluation",
      description:
        "Assesses iron stores, vitamins, folate, magnesium, and essential minerals.",
    },
    {
      title: "Preventive Healthcare",
      description:
        "Supports early diagnosis of chronic diseases through comprehensive health screening.",
    },
  ],

  testCategories: [
    {
      title: "Diabetes",
      tests: ["Diabetes Profile", "Fructosamine"],
    },
    {
      title: "Heart Health",
      tests: [
        "Cardiac Risk Markers",
        "Lipid Profile",
      ],
    },
    {
      title: "Liver Function",
      tests: [
        "Liver Basic",
        "Liver Advanced",
        "Liver Extended",
      ],
    },
    {
      title: "Kidney Function",
      tests: [
        "Kidney Basic",
        "Kidney Advanced",
      ],
    },
    {
      title: "Thyroid",
      tests: [
        "Thyroid Basic",
        "Thyroid Advanced",
      ],
    },
    {
      title: "Blood & Nutrition",
      tests: [
        "CBC",
        "Iron Profile",
        "Ferritin",
        "Folate",
      ],
    },
    {
      title: "Minerals",
      tests: [
        "Magnesium",
        "Phosphorous",
        "Electrolytes",
      ],
    },
    {
      title: "Inflammation",
      tests: [
        "hs-CRP",
        "Rheumatoid Factor (RF)",
      ],
    },
    {
      title: "Pancreatic Health",
      tests: [
        "Pancreas Profile",
      ],
    },
  ],

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

  seo: {
    introduction:
      "The Aarogyam C Pro Package combines advanced preventive health screening with cardiac risk assessment, nutritional evaluation, metabolic testing, pancreas profile, mineral analysis, and complete blood investigations.",

    whyImportant:
      "Routine preventive health screening helps detect cardiovascular disease, nutritional deficiencies, diabetes, inflammation, and metabolic disorders before serious complications develop.",

    benefits:
      "This package provides a complete overview of heart health, blood health, nutrition, liver, kidneys, thyroid, pancreas, and overall wellness.",

    homeCollection:
      "Enjoy convenient home sample collection by trained professionals with secure online reports delivered within 24–48 hours.",

    conclusion:
      "The Aarogyam C Pro Package is an excellent choice for individuals seeking an executive-level preventive health assessment with advanced cardiac and nutritional screening.",
  },

  faqs: [
    {
      question: "Who should take this package?",
      answer:
        "It is recommended for adults seeking comprehensive preventive health screening and advanced wellness monitoring.",
    },
    {
      question: "Is fasting required?",
      answer:
        "Yes. A fasting period of 10–12 hours is recommended for accurate blood glucose and lipid profile testing.",
    },
    {
      question: "When will I receive my reports?",
      answer:
        "Reports are generally available online within 24–48 hours after sample collection.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas.",
    },
  ],
},
{
  id: "aarogyam-d-pro",

  slug: "aarogyam-d-pro",

  name: "Aarogyam D Pro",

  shortDescription:
    "Comprehensive preventive health package with advanced cardiac risk assessment, autoimmune screening, metabolic evaluation, insulin testing, and complete wellness profiling.",

  description:
    "The Aarogyam D Pro Package is an advanced preventive health screening designed for individuals seeking an in-depth evaluation of overall health. It includes comprehensive diabetes screening, thyroid assessment, liver and kidney function tests, advanced cardiac risk markers, autoimmune disease screening, insulin evaluation, nutritional assessment, and specialized diagnostic parameters for early detection of lifestyle and chronic diseases.",

  tags: [
    "full-body",
    "executive",
    "cardiac",
    "diabetes",
    "thyroid",
    "autoimmune",
    "insulin",
    "metabolic",
    "preventive",
    "wellness",
  ],

  price: 5499,

  originalPrice: 7999,

  discount: "31% OFF",

  reportTime: "24-48 Hours",

  fasting: "10-12 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Adults Above 30 Years",
      description:
        "Ideal for comprehensive annual preventive health screening.",
      icon: "users",
    },
    {
      title: "People with Chronic Health Risks",
      description:
        "Suitable for monitoring diabetes, thyroid disorders, cardiovascular disease, and metabolic conditions.",
      icon: "activity",
    },
    {
      title: "Corporate Professionals",
      description:
        "Recommended for executives seeking an advanced wellness assessment.",
      icon: "briefcase",
    },
    {
      title: "Family History of Heart or Autoimmune Disease",
      description:
        "Supports early identification of inherited health risks.",
      icon: "heart",
    },
    {
      title: "Preventive Lifestyle Monitoring",
      description:
        "Provides detailed health insights before symptoms develop.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "Fast for 10–12 Hours",
      description:
        "A fasting period is required for accurate blood sugar, insulin, and lipid profile measurements. Plain water is allowed.",
    },
    {
      title: "Drink Plenty of Water",
      description:
        "Good hydration helps improve blood sample collection and patient comfort.",
    },
    {
      title: "Continue Medicines Only if Advised",
      description:
        "Inform our healthcare team about any medications you are taking before sample collection.",
    },
    {
      title: "Avoid Alcohol & Heavy Exercise",
      description:
        "Avoid alcohol and strenuous physical activity for at least 24 hours before testing.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring earlier laboratory reports for comparison and better clinical interpretation.",
    },
  ],

  testsCount: 79,

  category: "Executive Preventive Health Checkup",

  rating: 4.9,

  reviews: 192,

  image: "/packages/aarogyam-d-pro.jpg",

  highlights: [
    "79 Health Parameters",
    "Advanced Cardiac Risk Markers",
    "Autoimmune Disease Screening",
    "Insulin Assessment",
    "Complete Wellness Evaluation",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Comprehensive Health Assessment",
      description:
        "Evaluates heart health, metabolism, diabetes, thyroid, liver, kidneys, and nutritional status.",
    },
    {
      title: "Advanced Disease Detection",
      description:
        "Helps identify autoimmune disorders, cardiovascular risks, and metabolic abnormalities at an early stage.",
    },
    {
      title: "Executive Preventive Care",
      description:
        "Supports proactive healthcare for busy professionals and high-risk individuals.",
    },
    {
      title: "Long-Term Wellness Monitoring",
      description:
        "Provides valuable health insights for lifestyle modification and ongoing medical care.",
    },
  ],

  testCategories: [
    {
      title: "Diabetes & Metabolism",
      tests: [
        "Diabetes Profile",
        "Insulin Fasting",
      ],
    },
    {
      title: "Heart Health",
      tests: [
        "Cardiac Risk Markers",
        "Lp-PLA2",
      ],
    },
    {
      title: "Autoimmune Screening",
      tests: [
        "ANA",
        "Anti-CCP (ACCP)",
      ],
    },
    {
      title: "Thyroid Health",
      tests: [
        "Thyroid Profile",
      ],
    },
    {
      title: "Liver & Kidney",
      tests: [
        "Liver Function Profile",
        "Kidney Function Profile",
      ],
    },
    {
      title: "Nutrition",
      tests: [
        "Iron Profile",
        "Vitamin Profile",
      ],
    },
  ],

  includedTests: [
    "All Tests from Aarogyam C Pro",
    "ANA",
    "Anti-CCP (ACCP)",
    "Lp-PLA2",
    "Insulin Fasting",
  ],

  seo: {
    introduction:
      "The Aarogyam D Pro Package offers an advanced preventive health assessment with cardiac risk markers, autoimmune screening, insulin evaluation, and comprehensive organ health analysis.",

    whyImportant:
      "Routine executive health screening helps identify hidden cardiovascular, autoimmune, and metabolic disorders before complications arise.",

    benefits:
      "This package provides a complete overview of heart health, diabetes, thyroid function, liver, kidneys, nutrition, and autoimmune status.",

    homeCollection:
      "Enjoy safe home sample collection with secure digital reports delivered within 24–48 hours.",

    conclusion:
      "Aarogyam D Pro is an excellent executive health package for individuals seeking advanced preventive care and comprehensive wellness monitoring.",
  },

  faqs: [
    {
      question: "Who should choose Aarogyam D Pro?",
      answer:
        "It is ideal for adults seeking advanced preventive health screening and executive wellness assessment.",
    },
    {
      question: "Is fasting necessary?",
      answer:
        "Yes. A fasting period of 10–12 hours is recommended for accurate results.",
    },
    {
      question: "How soon are reports available?",
      answer:
        "Reports are generally delivered online within 24–48 hours after sample collection.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service locations.",
    },
  ],
},
{
  id: "aarogyam-e-pro",

  slug: "aarogyam-e-pro",

  name: "Aarogyam E Pro",

  shortDescription:
    "Premium executive preventive health package with toxic element analysis, complete vitamin profile, allergy screening, blood ketone testing, and advanced wellness evaluation.",

  description:
    "The Aarogyam E Pro Package is one of the most comprehensive preventive health screening packages designed for executives and health-conscious individuals. It includes all tests from Aarogyam D Pro along with toxic and nutrient element analysis, complete vitamin profiling, allergy screening, blood ketone assessment, advanced cardiac evaluation, diabetes monitoring, thyroid function, liver and kidney health, and nutritional assessment for complete wellness monitoring.",

  tags: [
    "executive",
    "full-body",
    "preventive",
    "cardiac",
    "diabetes",
    "thyroid",
    "vitamins",
    "allergy",
    "toxic-elements",
    "wellness",
  ],

  price: 6999,

  originalPrice: 9999,

  discount: "30% OFF",

  reportTime: "24-48 Hours",

  fasting: "10-12 Hours",

  homeCollection: true,

  recommendedFor: [
    {
      title: "Executives & Business Professionals",
      description:
        "Ideal for comprehensive annual health screening and preventive healthcare.",
      icon: "briefcase",
    },
    {
      title: "Adults Above 35 Years",
      description:
        "Recommended for individuals with increased risk of lifestyle-related diseases.",
      icon: "users",
    },
    {
      title: "People with Multiple Health Risks",
      description:
        "Suitable for monitoring cardiovascular, metabolic, nutritional, and hormonal health.",
      icon: "activity",
    },
    {
      title: "Individuals with Chronic Fatigue",
      description:
        "Helps identify vitamin deficiencies, metabolic disorders, and hidden health conditions.",
      icon: "heart",
    },
    {
      title: "Executive Preventive Wellness",
      description:
        "Provides a detailed health assessment for long-term disease prevention.",
      icon: "calendar",
    },
  ],

  preparation: [
    {
      title: "Fast for 10–12 Hours",
      description:
        "Fasting is recommended for accurate blood glucose, lipid profile, insulin, and metabolic testing. Plain water is allowed.",
    },
    {
      title: "Drink Plenty of Water",
      description:
        "Adequate hydration helps improve sample collection and overall comfort.",
    },
    {
      title: "Avoid Alcohol & Supplements",
      description:
        "Avoid alcohol and unnecessary vitamin supplements for at least 24 hours before testing unless prescribed.",
    },
    {
      title: "Continue Medicines Only if Advised",
      description:
        "Inform our healthcare team about all medications and supplements before sample collection.",
    },
    {
      title: "Carry Previous Reports",
      description:
        "Bring previous laboratory reports for comparison and comprehensive health evaluation.",
    },
  ],

  testsCount: 86,

  category: "Executive Preventive Health Checkup",

  rating: 4.9,

  reviews: 218,

  image: "/packages/aarogyam-e-pro.jpg",

  highlights: [
    "86 Health Parameters",
    "Complete Vitamin Profile",
    "Toxic & Nutrient Elements",
    "Blood Ketone Test",
    "Allergy Screening",
    "Home Sample Collection",
  ],

  benefits: [
    {
      title: "Executive Health Assessment",
      description:
        "Provides a complete evaluation of metabolic, nutritional, hormonal, and cardiovascular health.",
    },
    {
      title: "Advanced Nutritional Screening",
      description:
        "Detects vitamin deficiencies and toxic element imbalances affecting long-term wellness.",
    },
    {
      title: "Early Disease Detection",
      description:
        "Supports early identification of diabetes, thyroid disorders, cardiovascular disease, and nutritional deficiencies.",
    },
    {
      title: "Comprehensive Preventive Care",
      description:
        "Enables proactive health management through detailed diagnostic screening.",
    },
  ],

  testCategories: [
    {
      title: "Diabetes & Metabolism",
      tests: [
        "Blood Ketone (D3HB)",
        "Diabetes Profile",
      ],
    },
    {
      title: "Heart Health",
      tests: [
        "Cardiac Risk Markers",
        "Lp-PLA2",
      ],
    },
    {
      title: "Vitamin Assessment",
      tests: [
        "Complete Vitamins Profile",
      ],
    },
    {
      title: "Allergy Screening",
      tests: [
        "Allergy Phadiatop Adult",
      ],
    },
    {
      title: "Toxic Element Analysis",
      tests: [
        "Elements 22 (Toxic & Nutrients)",
      ],
    },
    {
      title: "Organ Health",
      tests: [
        "Liver Profile",
        "Kidney Profile",
        "Thyroid Profile",
      ],
    },
  ],

  includedTests: [
    "All Tests from Aarogyam D Pro",
    "Elements 22 (Toxic & Nutrients)",
    "Blood Ketone (D3HB)",
    "Complete Vitamins Profile",
    "Allergy Phadiatop Adult",
  ],

  seo: {
    introduction:
      "The Aarogyam E Pro Package is a premium executive health checkup offering comprehensive preventive screening with advanced nutritional analysis, toxic element testing, allergy screening, and metabolic assessment.",

    whyImportant:
      "Comprehensive preventive screening helps detect nutritional deficiencies, chronic diseases, cardiovascular risk, and metabolic disorders before symptoms appear.",

    benefits:
      "This package evaluates heart health, diabetes, thyroid function, vitamins, toxic elements, allergies, liver, kidneys, and overall wellness in a single health assessment.",

    homeCollection:
      "Professional home sample collection is available with secure online reports delivered within 24–48 hours.",

    conclusion:
      "Aarogyam E Pro is an ideal executive wellness package for individuals seeking the highest level of preventive healthcare and comprehensive health monitoring.",
  },

  faqs: [
    {
      question: "Who should take Aarogyam E Pro?",
      answer:
        "It is recommended for executives, professionals, and adults looking for the most comprehensive preventive health assessment.",
    },
    {
      question: "Is fasting required?",
      answer:
        "Yes. A fasting period of 10–12 hours is recommended for accurate metabolic and blood investigations.",
    },
    {
      question: "When will reports be available?",
      answer:
        "Most reports are available online within 24–48 hours after sample collection.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes. Home sample collection is available in selected service areas for your convenience.",
    },
  ],
},
];
//  const packagesData = [
//   {
//   id: "bhangal-basic-profile-plus",

//   slug: "bhangal-basic-profile-plus",

//   name: "Bhangal Basic Profile Plus",

//   shortDescription:
//     "Enhanced preventive health package with diabetes screening, thyroid evaluation, iron studies, inflammation markers, and complete organ health assessment.",

//   description:
//     "The Bhangal Basic Profile Plus is a comprehensive preventive health package designed for routine wellness monitoring. It evaluates blood sugar, cholesterol, liver and kidney function, thyroid health, electrolyte balance, urine health, complete blood picture, inflammation markers, and iron status to help detect lifestyle disorders and nutritional deficiencies at an early stage.",
// tags: [
//   "heart",
//   "kidney",
//   "liver",
//   "thyroid",
//   "diabetes",
//   "blood",
//   "iron",
//   "calcium",
//   "urine",
//   "wellness",
//   "full-body"
// ],
//   price: 1499,

//   originalPrice: 1900,

//   discount: "21% OFF",

//   reportTime: "24-48 Hours",

//   fasting: "10-12 Hours",

//   homeCollection: true,

//   recommendedFor: [
//     {
//       title: "Adults above 18 years",
//       description:
//         "Suitable for routine preventive health screening and yearly wellness checkups.",
//       icon: "users",
//     },
//     {
//       title: "People with lifestyle disorders",
//       description:
//         "Recommended for individuals with diabetes, hypertension, obesity, or high cholesterol.",
//       icon: "activity",
//     },
//     {
//       title: "Annual preventive health screening",
//       description:
//         "Ideal for monitoring overall health and detecting diseases early.",
//       icon: "calendar",
//     },
//     {
//       title: "Individuals experiencing weakness or fatigue",
//       description:
//         "Helps identify anemia, thyroid disorders, inflammation, and iron deficiency.",
//       icon: "heart",
//     },
//     {
//       title: "Working professionals",
//       description:
//         "Provides a complete overview of health for people with busy lifestyles.",
//       icon: "briefcase",
//     },
//   ],

//   testsCount: 55,

//   category: "Preventive Health Checkup",

//   rating: 4.9,

//   reviews: 214,

//   image: "/packages/bhangal-basic-profile-plus.webp",

//   highlights: [
//     "55 Health Parameters",
//     "HbA1c Diabetes Screening",
//     "Iron Profile Included",
//     "ESR Inflammation Marker",
//     "Complete Blood Picture",
//     "Home Sample Collection",
//   ],

//   benefits: [
//     {
//       title: "Comprehensive Wellness Assessment",
//       description:
//         "Evaluates blood health, liver, kidneys, thyroid, heart health, and nutritional status.",
//     },
//     {
//       title: "Early Disease Detection",
//       description:
//         "Helps identify diabetes, thyroid disorders, anemia, iron deficiency, and chronic inflammation.",
//     },
//     {
//       title: "Heart & Organ Health",
//       description:
//         "Monitors cholesterol, liver function, kidney function, and electrolyte balance.",
//     },
//     {
//       title: "Preventive Healthcare",
//       description:
//         "Supports early diagnosis and routine monitoring for long-term wellness.",
//     },
//   ],

//   testCategories: [
//     {
//       title: "Diabetes Screening",
//       tests: [
//         "Glucose",
//         "HbA1c",
//       ],
//     },
//     {
//       title: "Heart Health",
//       tests: [
//         "Lipid Profile",
//       ],
//     },
//     {
//       title: "Liver Function",
//       tests: [
//         "Liver Profile",
//       ],
//     },
//     {
//       title: "Kidney Function",
//       tests: [
//         "Kidney Basic Profile",
//       ],
//     },
//     {
//       title: "Thyroid Health",
//       tests: [
//         "T3",
//         "T4",
//         "TSH",
//       ],
//     },
//     {
//       title: "Blood Health",
//       tests: [
//         "Complete Blood Picture",
//         "ESR",
//       ],
//     },
//     {
//       title: "Iron & Mineral Assessment",
//       tests: [
//         "Iron Profile",
//         "Calcium",
//       ],
//     },
//     {
//       title: "Electrolyte & Urine Analysis",
//       tests: [
//         "Electrolytes",
//         "Complete Urine Examination",
//       ],
//     },
//   ],

//   includedTests: [
//     "Glucose",
//     "Lipid Profile",
//     "Liver Profile",
//     "Kidney Basic Profile",
//     "Electrolytes",
//     "Calcium",
//     "T3",
//     "T4",
//     "TSH",
//     "Complete Urine Examination",
//     "Complete Blood Picture",
//     "HbA1c",
//     "ESR",
//     "Iron Profile",
//   ],

//   seo: {
//     introduction:
//       "The Bhangal Basic Profile Plus is a preventive health screening package that combines diabetes testing, thyroid evaluation, liver and kidney assessment, cholesterol testing, iron profile, inflammation markers, and complete blood analysis into one comprehensive package.",

//     whyImportant:
//       "Routine preventive health screening helps identify diabetes, anemia, thyroid disorders, iron deficiency, inflammation, and organ dysfunction before serious complications develop.",

//     benefits:
//       "This package provides comprehensive preventive healthcare by combining essential blood investigations with diabetes and iron deficiency screening for complete wellness monitoring.",

//     homeCollection:
//       "Enjoy convenient doorstep blood sample collection by trained professionals with secure online report delivery within 24–48 hours.",

//     conclusion:
//       "The Bhangal Basic Profile Plus is an ideal annual health package for adults seeking comprehensive preventive healthcare and early disease detection.",
//   },

//   faqs: [
//     {
//       question: "Who should take this package?",
//       answer:
//         "It is recommended for adults who want a comprehensive preventive health screening or annual wellness checkup.",
//     },
//     {
//       question: "Is fasting required before the test?",
//       answer:
//         "Yes. A fasting period of 10–12 hours is recommended for accurate glucose and lipid profile results.",
//     },
//     {
//       question: "How long does it take to receive reports?",
//       answer:
//         "Most reports are available digitally within 24–48 hours after sample collection.",
//     },
//     {
//       question: "Is home sample collection available?",
//       answer:
//         "Yes. Home sample collection is available in selected service locations.",
//     },
//   ],
// },
//  ]


export const packageTheme = {
  women: {
    icon: FaPersonDress,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    badgeBg: "bg-violet-50",
    badgeColor: "text-violet-700",
    cardBg: "bg-white",
    button: "bg-violet-600 hover:bg-violet-700",
    glow: "bg-violet-100/70",
    border: "border-violet-200",
    topBar: "bg-violet-600",
  },

  preventive: {
    icon: FaStethoscope,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    badgeBg: "bg-blue-50",
    badgeColor: "text-blue-700",
    cardBg: "bg-white",
    button: "bg-blue-600 hover:bg-blue-700",
    glow: "bg-blue-100/70",
    border: "border-blue-200",
    topBar: "bg-blue-600",
  },

  heart: {
    icon: FaHeartPulse,
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
    badgeBg: "bg-red-50",
    badgeColor: "text-red-700",
    cardBg: "bg-white",
    button: "bg-red-600 hover:bg-red-700",
    glow: "bg-red-100/70",
    border: "border-red-200",
    topBar: "bg-red-600",
  },

  thyroid: {
    icon: FaDna,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    badgeBg: "bg-violet-50",
    badgeColor: "text-violet-700",
    cardBg: "bg-white",
    button: "bg-violet-600 hover:bg-violet-700",
    glow: "bg-violet-100/70",
    border: "border-violet-200",
    topBar: "bg-violet-600",
  },

  vitamin: {
    icon: FaCapsules,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    badgeBg: "bg-amber-50",
    badgeColor: "text-amber-700",
    cardBg: "bg-white",
    button: "bg-amber-600 hover:bg-amber-700",
    glow: "bg-amber-100/70",
    border: "border-amber-200",
    topBar: "bg-amber-600",
  },

  arthritis: {
    icon: FaBone,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    badgeBg: "bg-blue-50",
    badgeColor: "text-blue-700",
    cardBg: "bg-white",
    button: "bg-blue-600 hover:bg-blue-700",
    glow: "bg-blue-100/70",
    border: "border-blue-200",
    topBar: "bg-blue-600",
  },

  seniorMale: {
    icon: FaPerson,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    badgeBg: "bg-blue-50",
    badgeColor: "text-blue-700",
    cardBg: "bg-white",
    button: "bg-blue-600 hover:bg-blue-700",
    glow: "bg-blue-100/70",
    border: "border-blue-200",
    topBar: "bg-blue-600",
  },

  seniorFemale: {
    icon: FaPersonDress,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    badgeBg: "bg-violet-50",
    badgeColor: "text-violet-700",
    cardBg: "bg-white",
    button: "bg-violet-600 hover:bg-violet-700",
    glow: "bg-violet-100/70",
    border: "border-violet-200",
    topBar: "bg-violet-600",
  },

  home: {
    icon: FaHouseMedical,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    badgeBg: "bg-emerald-50",
    badgeColor: "text-emerald-700",
    cardBg: "bg-white",
    button: "bg-emerald-600 hover:bg-emerald-700",
    glow: "bg-emerald-100/70",
    border: "border-emerald-200",
    topBar: "bg-emerald-600",
  },

  summer: {
    icon: FaSun,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    badgeBg: "bg-blue-50",
    badgeColor: "text-blue-700",
    cardBg: "bg-white",
    button: "bg-blue-600 hover:bg-blue-700",
    glow: "bg-blue-100/70",
    border: "border-blue-200",
    topBar: "bg-blue-600",
  },

  blood: {
    icon: FaDroplet,
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
    badgeBg: "bg-red-50",
    badgeColor: "text-red-700",
    cardBg: "bg-white",
    button: "bg-red-600 hover:bg-red-700",
    glow: "bg-red-100/70",
    border: "border-red-200",
    topBar: "bg-red-600",
  },

  fever: {
    icon: FaVirus,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    badgeBg: "bg-blue-50",
    badgeColor: "text-blue-700",
    cardBg: "bg-white",
    button: "bg-blue-600 hover:bg-blue-700",
    glow: "bg-blue-100/70",
    border: "border-blue-200",
    topBar: "bg-blue-600",
  },

  diabetes: {
    icon: FaSyringe,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    badgeBg: "bg-blue-50",
    badgeColor: "text-blue-700",
    cardBg: "bg-white",
    button: "bg-blue-600 hover:bg-blue-700",
    glow: "bg-blue-100/70",
    border: "border-blue-200",
    topBar: "bg-blue-600",
  },

  fertility: {
    icon: FaBaby,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    badgeBg: "bg-violet-50",
    badgeColor: "text-violet-700",
    cardBg: "bg-white",
    button: "bg-violet-600 hover:bg-violet-700",
    glow: "bg-violet-100/70",
    border: "border-violet-200",
    topBar: "bg-violet-600",
  },

  skin: {
    icon: FaSpa,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    badgeBg: "bg-amber-50",
    badgeColor: "text-amber-700",
    cardBg: "bg-white",
    button: "bg-amber-600 hover:bg-amber-700",
    glow: "bg-amber-100/70",
    border: "border-amber-200",
    topBar: "bg-amber-600",
  },

  infection: {
    icon: FaShieldVirus,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    badgeBg: "bg-blue-50",
    badgeColor: "text-blue-700",
    cardBg: "bg-white",
    button: "bg-blue-600 hover:bg-blue-700",
    glow: "bg-blue-100/70",
    border: "border-blue-200",
    topBar: "bg-blue-600",
  },

  executive: {
    icon: FaBriefcaseMedical,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    badgeBg: "bg-blue-50",
    badgeColor: "text-blue-700",
    cardBg: "bg-white",
    button: "bg-blue-600 hover:bg-blue-700",
    glow: "bg-blue-100/70",
    border: "border-blue-200",
    topBar: "bg-blue-600",
  },

  camp: {
    icon: FaHospital,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    badgeBg: "bg-blue-50",
    badgeColor: "text-blue-700",
    cardBg: "bg-white",
    button: "bg-blue-600 hover:bg-blue-700",
    glow: "bg-blue-100/70",
    border: "border-blue-200",
    topBar: "bg-blue-600",
  },
};
export const packageThemeMap = {
  // Women
  "bcl-female-4-package": "women",
  "women-basic-profile-utsh": "women",
  "fertility-comprehensive-panel-female": "women",
  "torch-all-ten-profile": "women",

  // Preventive
  "full-body-checkup": "preventive",
  "health-checkup-camp": "preventive",

  "swasthya-mitra-basic": "preventive",
  "swasthya-mitra-advance": "preventive",
  "swasthya-mitra-premium-package": "preventive",
  "swasthya-mitra-super": "preventive",

  "aarogyam-a-pro": "preventive",
  "aarogyam-b-pro": "preventive",
  "aarogyam-c-pro": "preventive",
  "aarogyam-d-pro": "preventive",
  "aarogyam-e-pro": "preventive",
  "aarogyam-x-pro-utsh": "preventive",
  "aarogyam-xl-pro": "preventive",
  "aarogyam-tax-saver-basic-utsh": "preventive",
  "aarogyam-tax-saver-advanced-utsh": "preventive",

  "executive-full-body-checkup": "executive",

  "mega-health-checkup-advance-package": "preventive",
  "mega-health-checkup-premium-package": "preventive",
  "mega-health-checkup-super-package": "preventive",

  // Heart
  "jaanch-heart-screening": "heart",
  "jaanch-heart-advanced": "heart",
  "jaanch-heart-comprehensive": "heart",
  "lipid-profile-test": "heart",

  // Thyroid
  "jaanch-thyroid-profile-advanced": "thyroid",

  // Vitamin
  "vitamin-d-b12-combo": "vitamin",
  "vitamin-d3-vitamin-b12-screening": "vitamin",
  "paleo-profile-basic-new": "vitamin",
  "skin-aura-package-1": "skin",

  // Arthritis
  "arthritis-checkup": "arthritis",

  // Senior
  "senior-citizen-male-package": "seniorMale",
  "senior-citizen-female-package": "seniorFemale",

  // Home Collection
  "home-sample-collection": "home",

  // Summer
  "jaanch-heat-shield-basic": "summer",
  "jaanch-heat-shield-advanced": "summer",

  // Blood
  "essential-health-tests": "blood",
  "fasting-blood-sugar": "blood",
  "postprandial-blood-sugar": "blood",
  "random-blood-sugar": "blood",

  // Diabetes
  "diabetes-screening-package": "diabetes",

  // Fever
  "fever-panel-basic": "fever",
  "fever-panel-advance": "fever",

  // Infection
  "monsoon-gastro-infection-panel": "infection",
};

export default packagesData