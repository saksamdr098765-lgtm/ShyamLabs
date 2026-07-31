
import {
  FaMicroscope,
  FaShieldAlt,
  FaHeartbeat,

  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";
  const values = [
    {
      icon: FaShieldAlt,
      title: "Accuracy First",
      description:
        "Every report undergoes strict quality control and validation procedures.",
    },
    {
      icon: FaHeartbeat,
      title: "Patient Focused",
      description:
        "We make healthcare affordable, accessible, and easy to understand.",
    },
    {
      icon: FaMicroscope,
      title: "Modern Technology",
      description:
        "Advanced laboratory systems ensure precision and reliability.",
    },
  ];

  const stats = [
    {
      number: "25K+",
      label: "Tests Processed",
    },
    {
      number: "99.8%",
      label: "Accuracy Rate",
    },
    {
      number: "10+",
      label: "Years Experience",
    },
    {
      number: "24H",
      label: "Average Reporting",
    },
  ];

export default function AboutClient() {

  return (
    <main className="bg-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
          linear-gradient(#0A4F8A 1px, transparent 1px),
          linear-gradient(90deg, #0A4F8A 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* HERO */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[500px] bg-gradient-to-r from-green-100/50 to-blue-100/50 blur-xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5">
          <div
            className="max-w-4xl animate-fade-up"
          >
            <span className="inline-flex px-4 py-2 rounded-full border border-green-100 bg-green-50 text-[#78BE43] text-sm font-semibold">
              ABOUT SHYAM LABS
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-black text-slate-900 leading-[0.95]">
              Diagnostics Built
              <span className="block text-[#0A4F8A]">
                Around Trust.
              </span>
            </h1>

            <p className="mt-8 text-lg text-slate-600 max-w-2xl leading-relaxed">
              Shyam Labs is committed to delivering affordable,
              accurate, and reliable diagnostic services. We help
              individuals and families make informed healthcare
              decisions through trusted pathology testing and
              preventive screening.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#78BE43] font-semibold uppercase tracking-widest text-sm">
                Our Story
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900">
                Healthcare Should Be
                <span className="block text-[#0A4F8A]">
                  Accessible To Everyone.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-slate-600 leading-relaxed text-lg">
                Founded with a vision to make quality diagnostics
                affordable, Shyam Labs has grown into a trusted
                pathology center serving thousands of patients.
                Our focus remains simple: accurate reports,
                transparent pricing, and patient-first care.
              </p>

              <p className="mt-6 text-slate-600 leading-relaxed text-lg">
                Through modern laboratory systems and experienced
                professionals, we continue helping families take
                control of their health with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((item) => {
const Icon=item.icon
              return (
                <div
                  key={item.title}
                  className="rounded-[32px] border border-slate-100 p-8 bg-white shadow-sm"
                >
                  <div className="h-16 w-16 rounded-2xl bg-[#0A4F8A]/10 flex items-center justify-center">
                    <Icon className="text-[#0A4F8A] text-2xl" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="rounded-[40px] border border-slate-100 bg-gradient-to-r from-green-50 via-white to-blue-50 p-8 md:p-14">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((item) => (
                <div key={item.label} className="text-center">
                  <h3 className="text-4xl md:text-5xl font-black text-[#0A4F8A]">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY TRUST US */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">
              Why Patients Trust Us
            </h2>

            <p className="mt-6 text-slate-600 text-lg">
              Every test follows strict protocols to ensure
              reliability and confidence.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {[
              "Certified Laboratory Procedures",
              "Advanced Diagnostic Equipment",
              "Affordable Health Packages",
              "Home Sample Collection",
              "Fast Digital Reports",
              "Experienced Professionals",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 p-6 rounded-3xl border border-slate-100"
              >
                <FaCheckCircle className="text-[#78BE43]" />

                <span className="font-medium text-slate-800">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="rounded-[40px] bg-[#0A4F8A] p-10 md:p-16 text-white">
            <div className="flex flex-col lg:flex-row gap-10 justify-between">
              <div>
                <FaUsers size={40} />

                <h2 className="mt-6 text-4xl md:text-5xl font-black">
                  Dedicated To Better
                  Healthcare Outcomes.
                </h2>
              </div>

              <p className="max-w-xl text-white/80 text-lg leading-relaxed">
                Our team combines medical expertise, laboratory
                excellence, and compassionate service to ensure
                every patient receives dependable diagnostic care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}