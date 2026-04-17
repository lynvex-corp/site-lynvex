import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-dark overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Radial glow top-center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(168,0,255,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Decorative orbs */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(168,0,255,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(155,255,0,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Main content — two-column grid on large screens */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column: text content */}
          <div className="flex flex-col">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 bg-brand/10 border border-brand/20 text-brand-light rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Software House · Soluções Digitais
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.08] tracking-tight mb-6">
              <span className="text-light">Transformamos</span>
              <br />
              <span className="text-gradient">ideias em produtos</span>
              <br />
              <span className="text-light">digitais de </span>
              <span className="text-accent">impacto.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-muted text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
              Desenvolvemos sistemas web, aplicativos mobile e automações
              inteligentes que aceleram o crescimento de empresas ambiciosas.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-light text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 glow-brand text-sm sm:text-base"
              >
                Solicitar Orçamento
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/projetos"
                className="inline-flex items-center gap-2 text-light hover:text-accent font-semibold px-5 py-3.5 rounded-xl border border-light/10 hover:border-accent/30 transition-all duration-200 text-sm sm:text-base"
              >
                Ver Nossos Cases
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8 sm:gap-10">
              {[
                { value: "15+", label: "Projetos entregues" },
                { value: "100%", label: "Clientes satisfeitos" },
                { value: "3+", label: "Anos de experiência" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl sm:text-3xl font-bold text-gradient">
                    {stat.value}
                  </p>
                  <p className="text-muted text-xs sm:text-sm mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: tech card — visible only lg+ */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <div className="card-glass rounded-2xl p-6 w-full max-w-xs">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-light text-sm font-semibold font-display">
                  Stack de Excelência
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Supabase",
                  "Tailwind CSS",
                  "Node.js",
                  "PostgreSQL",
                  "n8n",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-dark-3 text-muted text-xs px-3 py-2 rounded-lg font-medium text-center"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-brand/10 text-center">
                <span className="text-accent text-xs font-semibold">
                  + 10 tecnologias modernas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce">
        <span className="text-muted text-xs">Scroll</span>
        <svg
          className="w-4 h-4 text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
