"use client";

import { FiCheck } from "react-icons/fi";

const steps = ["Who", "Body", "Symptoms", "Details", "Results"];

export default function ProgressBar({ currentStep, totalSteps }) {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <section className="relative z-20 -mt-4 sm:-mt-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-md sm:p-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Health Assessment
            </p>

            <h2 className="mt-0.5 text-base font-black text-slate-900 sm:text-xl">
              Step {currentStep} of {totalSteps}
            </h2>
          </div>

          <div className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#0A4F8A]">
            {Math.round(progress)}%
          </div>
        </div>

        {/* Progress */}
        <div className="relative mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            style={{ width: `${progress}%` }}
            className="absolute inset-y-0 left-0 rounded-full bg-[#0A4F8A] transition-all duration-300 ease-out"
          />
        </div>

        {/* Steps */}
        <div className="mt-4 grid grid-cols-5 gap-1.5 sm:mt-6 sm:gap-2">
          {steps.map((label, index) => {
            const step = index + 1;
            const completed = step < currentStep;
            const active = step === currentStep;

            return (
              <div key={label} className="flex flex-col items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold transition-all sm:h-10 sm:w-10 ${
                    completed
                      ? "border-[#0A4F8A] bg-[#0A4F8A] text-white"
                      : active
                      ? "border-[#0A4F8A] bg-white text-[#0A4F8A] shadow-sm"
                      : "border-slate-200 bg-slate-50 text-slate-400"
                  }`}
                >
                  {completed ? <FiCheck className="text-sm" /> : step}
                </div>

                <span
                  className={`mt-1.5 text-center text-[10px] font-semibold sm:text-xs ${
                    active ? "text-slate-900" : completed ? "text-slate-700" : "text-slate-400"
                  }`}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
