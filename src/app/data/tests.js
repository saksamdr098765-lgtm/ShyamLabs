import { services } from "../services";

export const tests = services.map((test) => ({
  id: test.slug,
  slug: test.slug,
  name: test.title?.split("|")[0]?.trim() || test.title,
  title: test.title,
  subtitle: test.subtitle,
  description: test.description,
  category: test.category || "Blood Test",
  image: test.image || "/services/cbc-test.jpg",
  price: test.price || 299,
  originalPrice: test.originalPrice || 499,
  discount: test.discount || "40% OFF",
  sampleType: "Blood",
  fasting: test.fasting || "Not Required",
  reportTime: "24 Hours",
  homeCollection: true,
  symptoms: test.symptoms || [],
  whoShouldGet: test.whoShouldGet || [],
  procedure: test.procedure || [],
  normalRanges: test.normalRanges || [],
  parameters: test.parameters || [],
  benefits: test.benefits || [],
  faqs: test.faqs || [
    {
      question: "How do I book this test?",
      answer: "You can book directly online, call us, or message us on WhatsApp for home sample collection in Panchkula."
    },
    {
      question: "When will I get my reports?",
      answer: "Digital reports are delivered within 24 hours on WhatsApp and email."
    }
  ]
}));

export default tests;
