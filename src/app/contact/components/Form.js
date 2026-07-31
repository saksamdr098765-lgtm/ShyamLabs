"use client"

import { SITE_CONFIG } from "@/app/siteConfig";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
const {whatsapp}=SITE_CONFIG
export default function Form() {
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
     <div
              className="rounded-[32px] border border-slate-100 bg-white p-6 md:p-8 shadow-sm animate-fade-up"
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
  <input
    type="text"
   name="package"
    value={formData.package}
    onChange={handleChange}
    placeholder="Enter test name"
    className="w-full h-14 px-5 rounded-2xl border border-slate-200 outline-none focus:border-[#0A4F8A]"
  />



  <textarea
    rows={5}
    name="message"
    value={formData.message}
    onChange={handleChange}
    placeholder="Tell us about your requirements..."
    className="w-full p-5 rounded-2xl border border-slate-200 placeholder:text-black outline-none resize-none focus:border-[#0A4F8A]"
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
      cursor-pointer
    "
  >
    Submit Request
    <FaArrowRight />
  </button>
</form>
            </div>
  )
}
