import React from 'react'

export default function HealthConditions({location}) {
  return location.healthConditions?.length > 0 && (
  <section className="py-16 bg-slate-50">
    <div className="max-w-6xl mx-auto px-5">
      <h2 className="text-3xl font-bold mb-8">
        Health Conditions We Help Monitor
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {location.healthConditions.map((condition, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-5 text-center font-medium"
          >
            {condition}
          </div>
        ))}
      </div>
    </div>
  </section>
)
}
