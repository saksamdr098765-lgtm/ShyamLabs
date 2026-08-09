import TrackedWhatsappLink from "@/app/components/TrackedWhatsappLink";
import { FiCheckCircle, FiHeart, FiHelpCircle, FiShield, FiUserCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function WhyGetThisTest({ testTitle, whyGetTest, slug }) {
  const defaultReasons = [
    {
      title: "Evaluate Overall Health & Vitals",
      description: "Provides key indicators on blood composition, organ efficiency, or metabolic function.",
      icon: FiHeart,
    },
    {
      title: "Detect Hidden Infections & Inflammations",
      description: "Helps identify silent medical conditions early before severe symptoms appear.",
      icon: FiShield,
    },
    {
      title: "Monitor Existing Medical Conditions",
      description: "Recommended for patients tracking ongoing treatments or chronic health conditions.",
      icon: FiUserCheck,
    },
  ];

  const reasonsList = whyGetTest?.reasons && whyGetTest.reasons.length > 0 ? whyGetTest.reasons : defaultReasons;
  const heading = whyGetTest?.title || `Why You Should Get the ${testTitle}`;
  const subtitle = whyGetTest?.description || `Understanding the medical importance, health indications, and benefits of timely ${testTitle} screening.`;

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-[#0A4F8A]">
            <FiHelpCircle className="text-[#0A4F8A]" />
            Medical Indications
          </span>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {heading}
          </h2>

          <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            {subtitle}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
          {reasonsList.map((item, index) => {
            const Icon = item.icon || FiCheckCircle;

            return (
              <div
                key={item.title || index}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-2xs transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-[#0A4F8A] group-hover:bg-[#0A4F8A] group-hover:text-white transition-colors">
                    <Icon className="text-lg" />
                  </div>

                  <h3 className="mt-3 text-sm font-bold text-slate-900 sm:text-base">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-r from-[#0A4F8A] to-blue-800 p-4 text-white shadow-md sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-base font-bold sm:text-lg">
                Have Doctor Guidance or Prescription?
              </h3>
              <p className="mt-0.5 text-xs text-blue-100 sm:text-sm">
                Share your doctor prescription on WhatsApp and our healthcare experts will guide you.
              </p>
            </div>

            <div className="shrink-0">
              <TrackedWhatsappLink
                text={`Hi, I have a prescription for ${testTitle}. Please help me schedule sample collection.`}
                location={`why-get-test-whatsapp-${slug}`}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-[#0A4F8A] transition hover:bg-slate-100 sm:text-sm"
              >
                <FaWhatsapp className="text-base text-green-600" />
                Send Prescription
              </TrackedWhatsappLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
