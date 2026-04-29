import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description: "A página que você está procurando não foi encontrada.",
  robots: "noindex, nofollow",
};

export default function NotFound() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-dark overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(168,0,255,0.13) 0%, transparent 70%)",
        }}
      />

      {/* Decorative orbs */}
      <div
        className="absolute -top-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(168,0,255,0.10) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-10 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(155,255,0,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
        {/* 404 number */}
        <p className="font-display text-[120px] sm:text-[160px] font-bold leading-none tracking-tight text-gradient select-none mb-4">
          404
        </p>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand-light rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Página não encontrada
        </div>

        {/* Title */}
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-light mb-4">
          Essa página não existe
        </h1>

        {/* Description */}
        <p className="text-muted text-base sm:text-lg leading-relaxed max-w-md mb-10">
          A página que você está procurando pode ter sido removida, teve o
          endereço alterado ou está temporariamente indisponível.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-light text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 glow-brand text-sm sm:text-base"
          >
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
                d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1v-9"
              />
            </svg>
            Voltar para a página inicial
          </Link>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 text-light hover:text-accent font-semibold px-5 py-3.5 rounded-xl border border-light/10 hover:border-accent/30 transition-all duration-200 text-sm sm:text-base"
          >
            Fale conosco
          </Link>
        </div>
      </div>
    </section>
  );
}