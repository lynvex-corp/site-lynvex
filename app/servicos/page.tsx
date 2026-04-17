import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça todos os serviços da LYNVEX: sistemas web, apps mobile, automações, CRM personalizado e consultoria técnica.",
};

const services = [
  {
    id: "sistemas-web",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Sistemas Web",
    tagline: "Plataformas escaláveis para negócios digitais",
    description:
      "Desenvolvemos sistemas web completos — de plataformas SaaS a ERPs e painéis administrativos — com arquitetura sólida, código limpo e entrega ágil. Cada sistema é construído para crescer junto com o seu negócio.",
    forWho: [
      "Empresas que precisam de sistemas internos personalizados",
      "Startups que querem lançar um produto digital (SaaS, marketplace)",
      "Negócios que precisam substituir processos manuais ou planilhas",
      "Times que precisam de dashboards e ferramentas de gestão",
    ],
    benefits: [
      "Arquitetura moderna com Next.js e React — performance máxima",
      "Backend com Supabase: banco, autenticação e storage integrados",
      "Segurança: RBAC, RLS e boas práticas de proteção de dados",
      "Deploy na Vercel com CI/CD — atualizações sem downtime",
      "Código TypeScript tipado — manutenção fácil e escalável",
    ],
    tech: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"],
    color: "#A800FF",
  },
  {
    id: "mobile",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Aplicativos Mobile",
    tagline: "Apps que usuários adoram usar",
    description:
      "Criamos aplicativos mobile nativos e híbridos para iOS e Android com foco em UX/UI de excelência. Do design ao deploy na App Store e Google Play, cuidamos de todo o ciclo do produto.",
    forWho: [
      "Negócios que precisam de um app para seus clientes",
      "Plataformas web que querem expandir para mobile",
      "Startups com produto mobile como core do negócio",
      "Empresas que precisam de apps internos para equipes",
    ],
    benefits: [
      "Uma base de código — funciona em iOS e Android (React Native)",
      "Performance próxima de apps nativos",
      "Design mobile-first com UX pensado para o usuário final",
      "Publicação na App Store e Google Play",
      "Notificações push, câmera, GPS e outros recursos nativos",
    ],
    tech: ["React Native", "Expo", "TypeScript", "Supabase", "iOS", "Android"],
    color: "#0EA5E9",
  },
  {
    id: "automacoes",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Automações Inteligentes",
    tagline: "Elimine o trabalho repetitivo e foque no que importa",
    description:
      "Mapeamos seus processos manuais e criamos automações que trabalham por você 24/7. Desde simples webhooks a fluxos complexos com múltiplas integrações — tudo orquestrado via n8n ou APIs customizadas.",
    forWho: [
      "Negócios com processos repetitivos que consomem tempo da equipe",
      "Times comerciais que precisam de follow-ups automáticos",
      "Empresas que usam várias ferramentas que não se comunicam",
      "Gestores que precisam de relatórios automáticos",
    ],
    benefits: [
      "Fluxos visuais no n8n — fácil de entender e manter",
      "Integrações com WhatsApp, Google Sheets, Notion, Slack e mais",
      "Webhooks e APIs personalizadas para qualquer necessidade",
      "Monitoramento com alertas de falha",
      "ROI rápido: horas de trabalho manual economizadas por dia",
    ],
    tech: ["n8n", "Webhooks", "REST APIs", "WhatsApp API", "Google APIs", "Supabase Functions"],
    color: "#F59E0B",
  },
  {
    id: "crm",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "CRM Personalizado",
    tagline: "Gestão de clientes feita para o seu negócio",
    description:
      "CRMs genéricos têm funcionalidades que você não usa e não têm o que você precisa. Desenvolvemos CRMs sob medida que encaixam perfeitamente no seu processo comercial, com integração ao WhatsApp e automações.",
    forWho: [
      "Equipes comerciais que precisam de um pipeline de vendas",
      "Negócios com comunicação intensa via WhatsApp",
      "Gestores que precisam de visibilidade total do funil",
      "Empresas de qualquer segmento com gestão de clientes/leads",
    ],
    benefits: [
      "Pipeline Kanban com drag-and-drop intuitivo",
      "WhatsApp integrado: envie e receba mensagens dentro do CRM",
      "Atribuição automática de leads para vendedores",
      "Dashboard com KPIs em tempo real",
      "Follow-ups automatizados com cadências configuráveis",
    ],
    tech: ["React", "Supabase", "Evolution API (WhatsApp)", "n8n", "TypeScript"],
    color: "#9BFF00",
  },
  {
    id: "landing-pages",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Landing Pages & Portais",
    tagline: "Sua presença digital que converte visitantes em clientes",
    description:
      "Criamos websites institucionais e landing pages que não apenas impressionam visualmente, mas são construídos para converter. SEO técnico, performance no Core Web Vitals e design premium.",
    forWho: [
      "Profissionais e empresas que precisam de presença digital profissional",
      "Negócios que querem uma landing page de alta conversão",
      "Portfólios e sites institucionais",
      "Lançamentos de produtos e campanhas",
    ],
    benefits: [
      "Design moderno e personalizado à identidade da marca",
      "SEO técnico desde o início — ranqueie no Google",
      "Core Web Vitals otimizados: performance nota 95+ no Lighthouse",
      "Formulários de captação com integração ao CRM",
      "Analytics integrado para acompanhar resultados",
    ],
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel", "Analytics"],
    color: "#EC4899",
  },
  {
    id: "consultoria",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Consultoria Técnica",
    tagline: "Expertise técnica para decisões estratégicas melhores",
    description:
      "Ajudamos equipes e fundadores a tomar as decisões técnicas certas: desde a escolha da stack até revisão de arquitetura, migração de sistemas legados e mentoria de desenvolvedores.",
    forWho: [
      "Fundadores não-técnicos que precisam de orientação",
      "CTOs que querem uma segunda opinião sobre arquitetura",
      "Equipes de desenvolvimento que precisam de mentoria",
      "Empresas em processo de migração tecnológica",
    ],
    benefits: [
      "Revisão de arquitetura e code review detalhado",
      "Planejamento técnico para escalar o sistema com segurança",
      "Mentoria individual para desenvolvedores júnior e pleno",
      "Apoio na escolha de stack e ferramentas",
      "Plano de migração para sistemas modernos",
    ],
    tech: ["Arquitetura de Software", "Code Review", "Next.js", "React", "Supabase", "Postgres"],
    color: "#6366F1",
  },
];

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-dark pt-16 md:pt-20">
      {/* Header */}
      <section className="relative py-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(168,0,255,0.15) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand-light rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-6">
            O que entregamos
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-light mb-5">
            Nossos <span className="text-gradient">Serviços</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Soluções digitais completas — do design ao deploy — desenvolvidas
            com tecnologias modernas e foco em resultado.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="card-glass rounded-3xl overflow-hidden"
            >
              <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left column */}
                <div className="flex flex-col gap-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `${service.color}15`,
                      border: `1px solid ${service.color}30`,
                      color: service.color,
                    }}
                  >
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-light mb-1">
                      {service.title}
                    </h2>
                    <p
                      className="text-sm font-medium mb-4"
                      style={{ color: service.color }}
                    >
                      {service.tagline}
                    </p>
                    <p className="text-muted text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="text-muted text-xs bg-dark-3 px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Middle: For who */}
                <div>
                  <h3 className="font-display font-semibold text-light text-sm uppercase tracking-widest mb-4">
                    Para quem é
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {service.forWho.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <svg
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: service.color }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Benefits */}
                <div>
                  <h3 className="font-display font-semibold text-light text-sm uppercase tracking-widest mb-4">
                    O que você ganha
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-sm">
                        <svg
                          className="w-4 h-4 shrink-0 mt-0.5 text-accent"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-muted">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-dark-2 border-t border-brand/10">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-light mb-4">
            Não encontrou o que procura?
          </h2>
          <p className="text-muted text-base mb-8">
            Cada projeto é único. Fale conosco e vamos entender sua necessidade
            para propor a melhor solução.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-light text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 glow-brand"
          >
            Falar com a equipe
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
