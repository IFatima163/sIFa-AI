const metrics = [
  { value: "< 2 min", label: "Lead response time" },
  { value: "~80%", label: "Routine emails automated" },
  { value: "5 min", label: "Monthly report generation" },
  { value: "100%", label: "Invoice follow-up consistency" }
];

export default function ResultsBar() {
  return (
    <section className="py-20 px-6 bg-[#2563EB]/10 border-t border-b border-[#2563EB]/20">
      <div className="max-w-5xl mx-auto">
        <p className="text-white/40 text-xs uppercase tracking-widest text-center mb-10">
          Projected impact across systems
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((m, i) => (
            <div key={i}>
              <p className="text-[#2563EB] text-4xl font-bold mb-2">{m.value}</p>
              <p className="text-white/50 text-sm">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}