"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import { SITE_CONFIG } from "../siteConfig";

export default function ContactPage() {
 const { phone, email, address, map, whatsapp } = SITE_CONFIG;

const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  package: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  const whatsappMessage = `*New Test Enquiry*

👤 Name: ${formData.name}

📞 Phone: ${formData.phone}

📧 Email: ${formData.email || "Not Provided"}

🧪 Package/Test: ${formData.package}

💬 Message:
${formData.message || "No Message"}

------------------------
Sent from Shyam Labs Website`;

  window.open(
    `https://wa.me/${whatsapp}?text=${encodeURIComponent(
      whatsappMessage
    )}`,
    "_blank"
  );

  setFormData({
    name: "",
    phone: "",
    email: "",
    package: "",
    message: "",
  });
};
  return (
    <main className="bg-white overflow-hidden">
      {/* Background Grid */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#0A4F8A 1px, transparent 1px),
            linear-gradient(90deg, #0A4F8A 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Hero */}
      <section className="relative pt-28 pb-16">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[450px] w-[450px] bg-gradient-to-r from-green-100/50 to-blue-100/50 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5">
          <span className="inline-flex px-4 py-2 rounded-full border border-green-100 bg-green-50 text-[#78BE43] text-sm font-semibold">
            CONTACT SHYAM LABS
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-black text-slate-900 leading-[0.95]">
            Let's Talk About
            <span className="block text-[#0A4F8A]">
              Your Health.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Book tests, request home sample collection,
            or contact our team for assistance.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: FaPhoneAlt,
                title: "Call Us",
                value: phone,
              },
              {
                icon: FaEnvelope,
                title: "Email",
                value: email,
              },
              {
                icon: FaMapMarkerAlt,
                title: "Location",
                value: address,
              },
              {
                icon: FaClock,
                title: "Working Hours",
                value: "8AM - 8PM",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
                >
                  <div className="h-14 w-14 rounded-2xl bg-[#0A4F8A]/10 flex items-center justify-center">
                    <Icon className="text-[#0A4F8A]" />
                  </div>

                  <h3 className="mt-5 font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-[32px] border border-slate-100 bg-white p-6 md:p-8 shadow-sm"
            >
              <h2 className="text-3xl font-black text-slate-900">
                Book A Test
              </h2>

              <p className="mt-3 text-slate-600">
                Fill out the form and our team will contact you.
              </p>

            <form
  onSubmit={handleSubmit}
  className="mt-8 space-y-5"
>
  <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
    placeholder="Full Name"
    required
    className="w-full h-14 px-5 rounded-2xl border border-slate-200 outline-none focus:border-[#0A4F8A]"
  />

  <input
    type="tel"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="Phone Number"
    required
    className="w-full h-14 px-5 rounded-2xl border border-slate-200 outline-none focus:border-[#0A4F8A]"
  />

  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Email Address"
    className="w-full h-14 px-5 rounded-2xl border border-slate-200 outline-none focus:border-[#0A4F8A]"
  />

  <select
    name="package"
    value={formData.package}
    onChange={handleChange}
    required
    className="w-full h-14 px-5 rounded-2xl border border-slate-200 outline-none"
  >
    <option value="">
      Select Test Package
    </option>

    <option value="Full Body Checkup">
      Full Body Checkup
    </option>

    <option value="Diabetes Profile">
      Diabetes Profile
    </option>

    <option value="Heart Health Package">
      Heart Health Package
    </option>

    <option value="Thyroid Profile">
      Thyroid Profile
    </option>

    <option value="Home Sample Collection">
      Home Sample Collection
    </option>
  </select>

  <textarea
    rows={5}
    name="message"
    value={formData.message}
    onChange={handleChange}
    placeholder="Tell us about your requirements..."
    className="w-full p-5 rounded-2xl border border-slate-200 outline-none resize-none focus:border-[#0A4F8A]"
  />

  <button
    type="submit"
    className="
      w-full
      h-14
      rounded-2xl
      bg-[#0A4F8A]
      hover:bg-[#08345c]
      text-white
      font-semibold
      flex
      items-center
      justify-center
      gap-3
      transition
    "
  >
    Submit Request
    <FaArrowRight />
  </button>
</form>
            </motion.div>

            {/* Google Map */}
            <div className="rounded-[32px] overflow-hidden border border-slate-100 shadow-sm min-h-[500px]">
              <iframe
                src={map}
                width="100%"
                height="100%"
                loading="lazy"
                className="min-h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="rounded-[40px] bg-[#0A4F8A] p-8 md:p-14 text-center text-white">
            <h2 className="text-4xl md:text-6xl font-black">
              Your Health Can't Wait.
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-white/80">
              Schedule your diagnostic test today and
              receive accurate reports from trusted
              healthcare professionals.
            </p>

            <button onClick={()=>{window.location.href=`tel:${phone}`}} className="mt-8 px-8 h-14 rounded-full bg-white text-[#0A4F8A] font-semibold">
              Call Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}