"use client";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const durations = [
  "Today",
  "2-3 Days",
  "1 Week",
  "2-4 Weeks",
  "More than a Month",
];

const genders = ["Male", "Female", "Other"];

const conditions = [
  "Diabetes",
  "High Blood Pressure",
  "Thyroid Disorder",
  "Heart Disease",
  "Kidney Disease",
  "Liver Disease",
  "Pregnancy",
  "None",
];

export default function Step4Details({
  assessment,
  setAssessment,
  previousStep,
  nextStep,
}) {
  const toggleCondition = (condition) => {
    let updated = [...assessment.conditions];

    if (condition === "None") {
      updated = ["None"];
    } else {
      updated = updated.filter((c) => c !== "None");

      if (updated.includes(condition)) {
        updated = updated.filter((c) => c !== condition);
      } else {
        updated.push(condition);
      }
    }

    setAssessment({
      ...assessment,
      conditions: updated,
    });
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs sm:p-8">
      {/* Heading */}
      <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0A4F8A]">
        Step 4 of 5
      </span>

      <h2 className="mt-3 text-2xl font-black leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
        Tell us a little more
      </h2>

      <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-base">
        These details help us improve your laboratory test recommendations.
      </p>

      {/* Age & Gender */}
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div>
          <label htmlFor="ageInput" className="mb-1.5 block text-xs font-bold text-slate-700">
            Age
          </label>
          <input
            id="ageInput"
            type="number"
            min="1"
            max="120"
            value={assessment.age}
            onChange={(e) =>
              setAssessment({
                ...assessment,
                age: e.target.value,
              })
            }
            placeholder="Enter your age"
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-xs outline-none focus:border-[#0A4F8A] sm:text-sm"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-bold text-slate-700">
            Gender
          </label>
          <div className="grid grid-cols-3 gap-2">
            {genders.map((gender) => (
              <button
                key={gender}
                type="button"
                onClick={() =>
                  setAssessment({
                    ...assessment,
                    gender,
                  })
                }
                className={`h-11 rounded-xl border text-xs font-bold transition ${
                  assessment.gender === gender
                    ? "border-[#0A4F8A] bg-[#0A4F8A] text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:border-blue-200"
                }`}
              >
                {gender}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Duration */}
      <div className="mt-6">
        <label className="mb-2 block text-xs font-bold text-slate-700">
          How long have you had these symptoms?
        </label>
        <div className="flex flex-wrap gap-2">
          {durations.map((duration) => (
            <button
              key={duration}
              type="button"
              onClick={() =>
                setAssessment({
                  ...assessment,
                  duration,
                })
              }
              className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition ${
                assessment.duration === duration
                  ? "border-[#0A4F8A] bg-[#0A4F8A] text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-blue-200"
              }`}
            >
              {duration}
            </button>
          ))}
        </div>
      </div>

      {/* Medical Conditions */}
      <div className="mt-6">
        <label className="mb-2 block text-xs font-bold text-slate-700">
          Existing Medical Conditions
        </label>
        <div className="flex flex-wrap gap-2">
          {conditions.map((condition) => (
            <button
              key={condition}
              type="button"
              onClick={() => toggleCondition(condition)}
              className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition ${
                assessment.conditions.includes(condition)
                  ? "border-[#0A4F8A] bg-[#0A4F8A] text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-blue-200"
              }`}
            >
              {condition}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-100 pt-6 justify-between">
        <button
          type="button"
          onClick={previousStep}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 sm:text-sm"
        >
          <FiArrowLeft />
          Back
        </button>

        <button
          type="button"
          onClick={nextStep}
          disabled={!assessment.age || !assessment.gender || !assessment.duration}
          className="inline-flex items-center gap-2 rounded-xl bg-[#0A4F8A] px-6 py-2.5 text-xs font-bold text-white transition hover:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-40 sm:text-sm"
        >
          View Recommendations
          <FiArrowRight />
        </button>
      </div>
    </section>
  );
}
