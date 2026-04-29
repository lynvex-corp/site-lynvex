import Link from "next/link";

const projects = [
  {
    id: "gl-personal",
    tag: "Aplicativo Web",
    name: "GL Personal",
    client: "Gabriel Lemos",
    description:
      "Plataforma completa de gestão para personal trainer: acompanhamento de treinos, dietas, progresso físico e chat em tempo real com alunos.",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "ExerciseDB API"],
    color: "#4D7C0F",
    accent: "#9BFF00",
    metrics: ["2 perfis de acesso", "Chat em tempo real", "Mobile-first"],
  },
  {
    id: "crm-comercial",
    tag: "CRM Comercial",
    name: "CRM Comercial",
    client: "Danilo Reis",
    description:
      "Sistema de CRM com pipeline Kanban, integração nativa com WhatsApp via API Evolution e automações de fluxo de atendimento via n8n.",
    tech: ["React", "Supabase", "Evolution API", "n8n"],
    color: "#A800FF",
    accent: "#C84AFF",
    metrics: ["Pipeline Kanban", "WhatsApp integrado", "Multi-vendedor"],
  },
  {
    id: "crm-imobiliario",
    tag: "CRM Imobiliário",
    name: "ImóvelCRM",
    client: "Davi Tavares",
    description:
      "CRM completo para gestão imobiliária: pipeline de vendas, gestão de imóveis, controle financeiro e métricas de campanhas em um só lugar.",
    tech: ["React", "Supabase", "Evolution API", "n8n"],
    color: "#0EA5E9",
    accent: "#38BDF8",
    metrics: ["Gestão de imóveis", "Controle financeiro", "Funil completo"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-dark relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 0% 50%, rgba(168,0,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand-light rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-5">
              Portfólio
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-light">
              Cases de{" "}
              <span className="text-gradient">sucesso</span>
            </h2>
          </div>
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 text-muted hover:text-light text-sm font-medium transition-colors shrink-0"
          >
            Ver todos os projetos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.name}
              href={`/projetos#${project.id}`}
              className="group card-glass card-glass-hover rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Preview area */}
              <div
                className="relative h-48 flex items-center justify-center overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${project.color}22 0%, ${project.color}08 100%)`,
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 30% 40%, ${project.color}30 0%, transparent 60%)`,
                  }}
                />
                <div className="relative z-10 text-center px-6">
                  <div
                    className="inline-block font-display font-bold text-3xl mb-2"
                    style={{ color: project.accent }}
                  >
                    {project.name}
                  </div>
                  <p className="text-muted text-sm">{project.client}</p>
                </div>
                {/* Decorative corner */}
                <div
                  className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full border"
                  style={{
                    color: project.accent,
                    borderColor: `${project.accent}40`,
                    background: `${project.accent}10`,
                  }}
                >
                  {project.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-muted text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-xs px-2.5 py-1 rounded-md font-medium"
                      style={{
                        background: `${project.color}15`,
                        color: project.accent,
                        border: `1px solid ${project.color}25`,
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-brand/10">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-muted text-xs bg-dark-3 px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 bg-brand/10 hover:bg-brand/20 border border-brand/20 hover:border-brand/40 text-brand-light font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-sm"
          >
            Conhecer todos os cases em detalhe
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
