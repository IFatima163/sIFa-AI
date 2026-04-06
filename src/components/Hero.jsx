export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#2563EB] text-sm font-medium uppercase tracking-widest mb-4">
          AI Operations for Marketing Agencies
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          Your agency runs on manual work.{' '}
          <span className="text-[#2563EB]">It doesn't have to.</span>
        </h1>
        <p className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          I build AI systems that eliminate repetitive ops work — lead intake, client support, reporting, invoicing — so your team focuses on work that actually moves revenue.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2563EB] text-white px-8 py-3 rounded font-medium hover:bg-blue-700 transition-colors"
          >
            Book a Call
          </a>
          <a
            href="mailto:hello@sifaai.com"
            className="border border-white/20 text-white px-8 py-3 rounded font-medium hover:border-white/50 transition-colors"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}