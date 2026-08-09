"use client";

import { FiCheckCircle, FiPackage, FiActivity } from "react-icons/fi";
import { getRecommendations } from "./recommendationEngine";
import { tests, packages } from "./data";
import TrackingLink from "@/app/components/TrackingLink";
import TrackedWhatsappLink from "@/app/components/TrackedWhatsappLink";
import SITE_CONFIG from "@/app/siteConfig";
import { FaWhatsapp } from "react-icons/fa";

export default function Step5Results({ assessment }) {
  const recommendations = getRecommendations(assessment);

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-[#0A4F8A] to-blue-900 p-6 text-white shadow-lg sm:p-8">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-white/15 p-2.5">
            <FiCheckCircle className="text-2xl text-[#78BE43]" />
          </div>

          <div>
            <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold">
              Assessment Complete
            </p>
            <h1 className="text-2xl font-black sm:text-3xl">
              Your Recommended Tests & Packages
            </h1>
          </div>
        </div>

        <p className="mt-3 max-w-3xl text-xs leading-5 text-blue-100 sm:text-sm">
          Based on your selected symptoms, these tests and packages are recommended for your screening.
        </p>
      </div>

      {/* Packages */}
      {recommendations.packages.length > 0 && (
        <section>
          <div className="flex items-center gap-2.5">
            <FiPackage className="text-xl text-[#0A4F8A]" />
            <div>
              <h2 className="text-xl font-black text-slate-900">
                Recommended Health Packages
              </h2>
              <p className="text-xs text-slate-500">
                Comprehensive packages offering maximum value.
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {recommendations.packages.map((item) => {
              const pkg = packages[item.packageId];
              if (!pkg) return null;

              return (
                <TrackingLink
                  key={item.packageId}
                  href={`/packages/${item.packageId}`}
                  tracking={`health-assessment-package-${item.packageId}`}
                  className="group rounded-2xl border border-blue-100 bg-blue-50/60 p-5 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0A4F8A]">
                        {pkg.name}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500">
                        Match Score: {item.score}
                      </p>
                    </div>

                    <span className="rounded-xl bg-white px-3 py-1.5 text-base font-black text-[#0A4F8A] shadow-2xs">
                      ₹{pkg.price}
                    </span>
                  </div>
                </TrackingLink>
              );
            })}
          </div>
        </section>
      )}

      {/* Tests */}
      <section>
        <div className="flex items-center gap-2.5">
          <FiActivity className="text-xl text-[#0A4F8A]" />
          <div>
            <h2 className="text-xl font-black text-slate-900">
              Recommended Individual Tests
            </h2>
            <p className="text-xs text-slate-500">
              Specific laboratory investigations based on symptoms.
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {recommendations.tests.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center sm:col-span-2">
              <p className="text-xs text-slate-500">No test recommendations found.</p>
            </div>
          ) : (
            recommendations.tests.map((item) => {
              const test = tests[item.testId];
              if (!test) return null;

              return (
                <div
                  key={item.testId}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs transition hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        {test.name}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500">
                        Match Score: {item.score}
                      </p>
                    </div>

                    <span className="rounded-xl bg-blue-50 px-3 py-1.5 text-base font-black text-[#0A4F8A]">
                      ₹{test.price}
                    </span>
                  </div>

                  <div className="mt-4 border-t border-slate-100 pt-3">
                    <TrackedWhatsappLink
                      text={`Hi, I took the Health Assessment and want to book the "${test.name}" test at ₹${test.price}.`}
                      location={`health-assessment-whatsapp-${test.slug || item.testId}`}
                      className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-green-700"
                    >
                      <FaWhatsapp className="text-sm" />
                      Book via WhatsApp
                    </TrackedWhatsappLink>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </section>
  );
}
