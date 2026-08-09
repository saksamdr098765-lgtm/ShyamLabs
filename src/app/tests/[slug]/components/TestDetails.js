export default function TestDetails({ testDetails }) {
  if (!testDetails) return null;

  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
          {testDetails.title}
        </h2>

        {/* Description */}
        <div className="mt-4 space-y-3 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
          {(testDetails.description || []).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Included Tests */}
        {testDetails.included?.length > 0 && (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 lg:p-8">
            <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
              What is Included?
            </h3>

            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {testDetails.included.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-xs text-slate-700 sm:text-sm font-medium"
                >
                  <span className="h-2 w-2 rounded-full bg-[#0A4F8A]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
