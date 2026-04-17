const testimonials = [
  {
    name: "Gabriel Lemos",
    role: "Personal Trainer",
    content:
      "A LYNVEX transformou completamente a forma como gerencio meus alunos. Antes tudo era perdido em planilhas e WhatsApp. Agora tenho uma plataforma profissional que me diferencia no mercado e meus alunos adoram usar.",
    rating: 5,
    initial: "G",
    color: "#4D7C0F",
  },
  {
    name: "Danilo Reis",
    role: "Gestor Comercial",
    content:
      "O CRM entregue superou as expectativas. A integração com WhatsApp mudou nosso processo comercial do zero — leads entram automaticamente e minha equipe só se preocupa em vender. Resultado: mais conversões, menos trabalho manual.",
    rating: 5,
    initial: "D",
    color: "#A800FF",
  },
  {
    name: "Davi Tavares",
    role: "Gestor Imobiliário",
    content:
      "Nunca imaginei ter um sistema tão completo para minha imobiliária. Pipeline, imóveis, financeiro, WhatsApp — tudo em um lugar. A LYNVEX entregou dentro do prazo e o suporte pós-entrega é excelente.",
    rating: 5,
    initial: "D",
    color: "#0EA5E9",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-dark-2 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(168,0,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand-light rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-5">
            Depoimentos
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light max-w-2xl mx-auto">
            O que nossos{" "}
            <span className="text-gradient">clientes dizem</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card-glass rounded-2xl p-6 flex flex-col gap-5">
              {/* Quote icon */}
              <svg
                className="w-8 h-8 text-brand/30"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8C6.7 8 4 10.7 4 14v10h10V14H7c0-1.7 1.3-3 3-3V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-7c0-1.7 1.3-3 3-3V8z" />
              </svg>

              <p className="text-light/80 text-sm leading-relaxed flex-1">
                &ldquo;{t.content}&rdquo;
              </p>

              <div className="pt-4 border-t border-brand/10 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-white text-sm"
                  style={{ background: t.color }}
                >
                  {t.initial}
                </div>
                <div className="flex-1">
                  <p className="text-light text-sm font-semibold font-display">
                    {t.name}
                  </p>
                  <p className="text-muted text-xs">{t.role}</p>
                </div>
                <StarRating count={t.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
