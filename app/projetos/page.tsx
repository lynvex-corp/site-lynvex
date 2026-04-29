import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cases & Projetos",
  description:
    "Conheça os projetos reais desenvolvidos pela LYNVEX — sistemas web, CRMs e automações que transformaram negócios.",
};

const projects = [
  {
    id: "gl-personal",
    tag: "Aplicativo Web",
    name: "GL Personal",
    client: "Gabriel Lemos",
    segment: "Personal Trainer",
    color: "#4D7C0F",
    accent: "#9BFF00",
    year: "2026",
    problem:
      "Gabriel gerenciava seus alunos de forma descentralizada — planilhas para treinos, WhatsApp para comunicação e anotações físicas para dietas e progresso. Isso consumia horas de trabalho manual, gerava inconsistência nas informações e prejudicava a experiência dos alunos.",
    solution:
      "Desenvolvemos uma plataforma web mobile-first com dois perfis de acesso (personal e aluno), centralizando toda a gestão em um único sistema. O personal tem controle total sobre prescrição de treinos, dietas, acompanhamento de progresso e comunicação. O aluno acessa seus dados, registra execuções e conversa com o personal via chat integrado.",
    features: [
      "Gestão completa de alunos com cadastro detalhado",
      "Criação e edição de treinos e dietas",
      "Acompanhamento de progresso: peso, medidas e fotos",
      "Chat em tempo real entre personal e aluno",
      "Registro de execução de exercícios com GIFs animados",
      "Dashboard com indicadores e alertas",
      "Controle de planos com alertas de expiração",
      "Notificações de novas mensagens",
    ],
    tech: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS", "ExerciseDB API"],
    techDetails: {
      Frontend: "Next.js 15 com App Router, React 19, TypeScript",
      Backend: "Supabase (Auth, PostgreSQL, Storage, Edge Functions)",
      Segurança: "RBAC + Políticas RLS (Row Level Security)",
      "API Externa": "ExerciseDB para biblioteca de GIFs de exercícios",
      Hospedagem: "Vercel",
    },
    results: [
      "Redução de 80% no tempo de gestão de alunos",
      "Experiência profissional que diferencia o personal no mercado",
      "Centralização total: zero planilhas, zero informações perdidas",
      "Alunos mais engajados com acesso fácil aos seus treinos",
    ],
  },
  {
    id: "crm-comercial",
    tag: "CRM Comercial",
    name: "CRM Comercial",
    client: "Danilo Reis",
    segment: "Equipe Comercial",
    color: "#A800FF",
    accent: "#C84AFF",
    year: "2026",
    problem:
      "A equipe comercial de Danilo não tinha um sistema centralizado para gestão de leads. Sem organização no pipeline, leads escapavam pelo vão das planilhas, a atribuição de clientes era manual e a comunicação via WhatsApp era dispersa entre diferentes celulares da equipe.",
    solution:
      "Criamos um CRM web completo com pipeline Kanban, integração nativa com WhatsApp via API Evolution e automações de fluxo via n8n. Leads podem entrar manual ou automaticamente via WhatsApp, serem atribuídos a vendedores e movidos no pipeline com drag-and-drop. O admin tem visão total com dashboard de KPIs.",
    features: [
      "Pipeline Kanban com drag-and-drop para gestão de leads",
      "Integração completa com WhatsApp via API Evolution",
      "Atribuição de leads e conversas para vendedores",
      "Dashboard comercial com KPIs em tempo real (admin)",
      "Gestão de usuários com perfis Admin e Seller",
      "Follow-ups e agenda integrados",
      "CRUD completo de leads",
      "Registro e acompanhamento de follow-ups",
    ],
    tech: ["React", "Supabase", "Evolution API", "n8n", "TypeScript", "Tailwind CSS"],
    techDetails: {
      Frontend: "React SPA com TypeScript",
      Backend: "Supabase (Auth, PostgreSQL)",
      WhatsApp: "API Evolution para envio/recebimento de mensagens",
      Automação: "n8n para fluxos automáticos de atendimento",
      Perfis: "Admin (acesso total) + Seller (leads atribuídos)",
    },
    results: [
      "Pipeline organizado com visibilidade total do funil de vendas",
      "Equipe de vendas com foco em vender, não em gerenciar ferramentas",
      "Leads via WhatsApp entram automaticamente no CRM",
      "Dashboard permite decisões comerciais baseadas em dados",
    ],
  },
  {
    id: "crm-imobiliario",
    tag: "CRM Imobiliário",
    name: "ImóvelCRM",
    client: "Davi Tavares",
    segment: "Gestão Imobiliária",
    color: "#0EA5E9",
    accent: "#38BDF8",
    year: "2026",
    problem:
      "Davi geria seu negócio imobiliário de forma fragmentada: leads no WhatsApp, imóveis em planilhas, controle financeiro em outro sistema e nenhuma visão unificada do funil. Sem centralização, era impossível tomar decisões rápidas e acompanhar o desempenho do negócio.",
    solution:
      "Desenvolvemos um CRM imobiliário completo que centraliza todos os processos do negócio: captação de leads, pipeline de vendas, gestão de imóveis com galeria de fotos e documentos, controle financeiro de comissões, gestão de tarefas e comunicação via WhatsApp — tudo em um único dashboard responsivo.",
    features: [
      "Dashboard com indicadores: clientes, imóveis, tarefas, financeiro",
      "CRM com pipeline de vendas Kanban e drag-and-drop",
      "Funil de follow-up com cadência automatizada",
      "Gestão de clientes com histórico completo de interações",
      "Importação de clientes via planilha (XLSX/CSV)",
      "Integração com WhatsApp: mensagens enviadas e recebidas",
      "Gestão de imóveis com upload de imagens e documentos",
      "Controle financeiro: entradas, saídas e comissões",
      "Gestão de tarefas com prazos e status",
      "Módulo de métricas de anúncios",
      "Configuração de webhooks para automações via n8n",
    ],
    tech: ["React", "Supabase", "Evolution API", "n8n", "TypeScript", "Tailwind CSS"],
    techDetails: {
      Frontend: "React web responsivo (mobile + desktop)",
      Backend: "Supabase (PostgreSQL, Storage)",
      WhatsApp: "Evolution API + n8n para automações",
      Financeiro: "Módulo de entradas, saídas e comissões",
      Importação: "Suporte a XLSX/CSV para importação de leads em massa",
    },
    results: [
      "Visão unificada de todo o negócio em um único dashboard",
      "Funil de vendas completamente rastreável do lead ao fechamento",
      "Gestão de imóveis profissional com galeria e documentação",
      "Controle financeiro integrado com registro de comissões",
    ],
  },
];

export default function ProjetosPage() {
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
            Portfólio
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-light mb-5">
            Nossos <span className="text-gradient">Cases</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Projetos reais, clientes reais, resultados mensuráveis. Conheça em
            detalhe o que desenvolvemos e o impacto gerado.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-20">
          {projects.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="card-glass rounded-3xl overflow-hidden"
            >
              {/* Project header */}
              <div
                className="relative px-8 py-12 md:px-12"
                style={{
                  background: `linear-gradient(135deg, ${project.color}15 0%, ${project.color}05 100%)`,
                  borderBottom: `1px solid ${project.color}20`,
                }}
              >
                <div
                  className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${project.color}15 0%, transparent 70%)`,
                    filter: "blur(40px)",
                    transform: "translate(30%, -30%)",
                  }}
                />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full border"
                        style={{
                          color: project.accent,
                          borderColor: `${project.accent}40`,
                          background: `${project.accent}10`,
                        }}
                      >
                        {project.tag}
                      </span>
                      <span className="text-muted text-xs">{project.year}</span>
                    </div>
                    <h2
                      className="font-display text-3xl md:text-4xl font-bold mb-1"
                      style={{ color: project.accent }}
                    >
                      {project.name}
                    </h2>
                    <p className="text-muted text-sm">
                      Cliente:{" "}
                      <span className="text-light font-medium">
                        {project.client}
                      </span>{" "}
                      · {project.segment}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-muted text-xs bg-dark-3 px-3 py-1.5 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project body */}
              <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left: Problem + Solution */}
                <div className="flex flex-col gap-8">
                  <div>
                    <h3 className="font-display font-semibold text-light text-lg mb-3 flex items-center gap-2">
                      <span
                        className="w-1 h-5 rounded-full"
                        style={{ background: project.color }}
                      />
                      O Problema
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display font-semibold text-light text-lg mb-3 flex items-center gap-2">
                      <span
                        className="w-1 h-5 rounded-full"
                        style={{ background: project.accent }}
                      />
                      A Solução
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* Tech details */}
                  <div>
                    <h3 className="font-display font-semibold text-light text-lg mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 rounded-full bg-brand" />
                      Stack Técnica
                    </h3>
                    <div className="flex flex-col gap-2">
                      {Object.entries(project.techDetails).map(
                        ([key, value]) => (
                          <div
                            key={key}
                            className="flex gap-3 text-sm bg-dark-3 rounded-lg px-4 py-2.5"
                          >
                            <span className="text-muted font-medium w-28 shrink-0">
                              {key}:
                            </span>
                            <span className="text-light">{value}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Right: Features + Results */}
                <div className="flex flex-col gap-8">
                  <div>
                    <h3 className="font-display font-semibold text-light text-lg mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 rounded-full bg-brand-light" />
                      Funcionalidades
                    </h3>
                    <ul className="flex flex-col gap-2.5">
                      {project.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm">
                          <svg
                            className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color: project.accent }}
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
                          <span className="text-muted">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="rounded-2xl p-6"
                    style={{
                      background: `${project.color}08`,
                      border: `1px solid ${project.color}20`,
                    }}
                  >
                    <h3 className="font-display font-semibold text-light text-lg mb-4 flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        style={{ color: project.accent }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                      Resultados
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {project.results.map((r) => (
                        <li key={r} className="flex items-start gap-3 text-sm">
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                            style={{ background: project.accent }}
                          />
                          <span className="text-light">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-dark-2 border-t border-brand/10">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-light mb-4">
            Seu projeto pode ser o próximo case de sucesso
          </h2>
          <p className="text-muted text-base mb-8">
            Entre em contato e vamos conversar sobre como a LYNVEX pode
            transformar sua ideia em realidade.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-light text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 glow-brand"
          >
            Iniciar meu projeto
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
