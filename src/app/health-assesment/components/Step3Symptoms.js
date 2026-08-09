"use client";

import { useMemo, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiSearch,
} from "react-icons/fi";
import { symptoms as symptomData } from "./data";

export default function Step3Symptoms({
  assessment,
  setAssessment,
  previousStep,
  nextStep,
}) {
  const [search, setSearch] = useState("");

  const availableSymptoms = useMemo(() => {
    return (symptomData || []).filter((symptom) =>
      symptom.bodyAreas?.includes(assessment.bodyArea)
    );
  }, [assessment.bodyArea]);

  const filteredSymptoms = useMemo(() => {
    return availableSymptoms.filter((symptom) =>
      symptom.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [availableSymptoms, search]);

  const toggleSymptom = (symptomId) => {
    const selected = assessment.symptoms.includes(symptomId);

    if (selected) {
      setAssessment((prev) => ({
        ...prev,
        symptoms: prev.symptoms.filter((id) => id !== symptomId),
      }));
    } else {
      setAssessment((prev) => ({
        ...prev,
        symptoms: [...prev.symptoms, symptomId],
      }));
    }
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs sm:p-8">
      {/* Header */}
      <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0A4F8A]">
        Step 3 of 5
      </span>

      <h2 className="mt-3 text-2xl font-black leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
        Select Your Symptoms
      </h2>

      <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-base">
        Choose all the symptoms you're currently experiencing.
      </p>

      {/* Search */}
      <div className="relative mt-6">
        <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search symptoms..."
          className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-xs outline-none focus:border-[#0A4F8A] sm:text-sm"
        />
      </div>

      {/* Counter */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs text-slate-500 font-medium">
          {filteredSymptoms.length} symptoms available
        </p>

        <div className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#0A4F8A]">
          Selected {assessment.symptoms.length}
        </div>
      </div>

      {/* Symptoms */}
      <div className="mt-6 flex flex-wrap gap-2">
        {filteredSymptoms.map((symptom) => {
          const active = assessment.symptoms.includes(symptom.id);

          return (
            <button
              key={symptom.id}
              type="button"
              onClick={() => toggleSymptom(symptom.id)}
              className={`flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-semibold transition ${
                active
                  ? "border-[#0A4F8A] bg-[#0A4F8A] text-white shadow-xs"
                  : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50"
              }`}
            >
              {active && <FiCheck className="shrink-0" />}
              <span>{symptom.label}</span>
            </button>
          );
        })}
      </div>

      {filteredSymptoms.length === 0 && (
        <div className="mt-6 rounded-xl border border-dashed border-slate-300 p-8 text-center">
          <p className="text-xs text-slate-500">No matching symptoms found.</p>
        </div>
      )}

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
          disabled={assessment.symptoms.length === 0}
          onClick={nextStep}
          className="inline-flex items-center gap-2 rounded-xl bg-[#0A4F8A] px-6 py-2.5 text-xs font-bold text-white transition hover:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-40 sm:text-sm"
        >
          Continue
          <FiArrowRight />
        </button>
      </div>
    </section>
  );
}
