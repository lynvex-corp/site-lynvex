import Link from "next/link";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Sistemas Web",
    description:
      "Plataformas SaaS, ERPs, CRMs e dashboards administrativos desenvolvidos com as tecnologias mais modernas do mercado.",
    highlights: ["Next.js / React", "APIs RESTful", "Supabase / PostgreSQL"],
    href: "/servicos#sistemas-web",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Aplicativos Mobile",
    description:
      "Apps nativos e híbridos para iOS e Android com UX/UI premium, performance e experiência de usuário excepcional.",
    highlights: ["React Native", "Mobile-First", "Performance nativa"],
    href: "/servicos#mobile",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Automações Inteligentes",
    description:
      "Automatize processos repetitivos, integre ferramentas e ganhe horas de trabalho com fluxos inteligentes via n8n e APIs.",
    highlights: ["n8n / Zapier", "Webhooks", "Integrações API"],
    href: "/servicos#automacoes",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "CRM Personalizado",
    description:
      "Sistemas de gestão de relacionamento sob medida para o seu negócio, com pipeline de vendas, chat e relatórios inteligentes.",
    highlights: ["Pipeline Kanban", "WhatsApp API", "Dashboards"],
    href: "/servicos#crm",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Landing Pages & Portais",
    description:
      "Páginas institucionais e de conversão com design moderno, SEO otimizado e performance máxima no Core Web Vitals.",
    highlights: ["SEO Técnico", "Alta conversão", "Design premium"],
    href: "/servicos#landing-pages",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Consultoria Técnica",
    description:
      "Arquitetura de sistemas, revisão de código, migração tecnológica e mentoria técnica para equipes de desenvolvimento.",
    highlights: ["Arquitetura", "Code Review", "Migração"],
    href: "/servicos#consultoria",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-dark-2 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 100% 50%, rgba(168,0,255,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand-light rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-5">
            O que fazemos
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light mb-5">
            Soluções que geram{" "}
            <span className="text-gradient">resultados reais</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Desenvolvemos produtos digitais do zero ao deploy, com foco em
            qualidade técnica, prazo e satisfação do cliente.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group card-glass card-glass-hover rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand group-hover:bg-brand/20 transition-colors">
                {service.icon}
              </div>
              <div>
                <h3 className="font-display font-semibold text-light text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-brand/10">
                {service.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="bg-dark-3 text-muted text-xs px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 text-brand hover:text-brand-light font-semibold text-sm transition-colors"
          >
            Ver todos os serviços
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
