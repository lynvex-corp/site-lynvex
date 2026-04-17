import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nossa Equipe",
  description:
    "Conheça a equipe LYNVEX — desenvolvedores, designers e especialistas apaixonados por tecnologia e resultado.",
};

const team = [
  {
    name: "Matheus Fernandes",
    role: "CEO & Full-Stack Developer",
    bio: "Fundador da LYNVEX com foco em desenvolvimento full-stack e levantamento de requisitos. Apaixonado por transformar problemas complexos em soluções elegantes. Responsável pela arquitetura de sistemas e estratégia técnica dos projetos.",
    skills: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Node.js"],
    initial: "M",
    color: "#A800FF",
    highlight: "CEO & Fundador",
  },
  {
    name: "Dev Backend",
    role: "Backend Engineer",
    bio: "Especialista em arquitetura de APIs, banco de dados e integrações. Responsável por garantir que a infraestrutura dos sistemas seja sólida, segura e escalável. Focado em performance e boas práticas.",
    skills: ["Node.js", "PostgreSQL", "REST APIs", "Supabase", "Edge Functions", "n8n"],
    initial: "B",
    color: "#0EA5E9",
    highlight: "Especialista em APIs",
  },
  {
    name: "Dev Mobile",
    role: "Mobile Developer",
    bio: "Responsável pelo desenvolvimento de aplicativos iOS e Android com React Native. Foco em experiência do usuário mobile-first, performance e publicação nas lojas. Transforma wireframes em experiências nativas.",
    skills: ["React Native", "Expo", "iOS", "Android", "TypeScript", "Mobile UX"],
    initial: "M",
    color: "#9BFF00",
    highlight: "iOS & Android",
  },
  {
    name: "UX/UI Designer",
    role: "Product Designer",
    bio: "Designer de produto focado em criar interfaces que convertem e experiências que os usuários adoram. Responsável pelo design system da LYNVEX e pela identidade visual de todos os projetos entregues.",
    skills: ["Figma", "UI/UX", "Design System", "Prototipagem", "Branding", "Motion Design"],
    initial: "U",
    color: "#F59E0B",
    highlight: "Design System",
  },
  {
    name: "Dev Frontend",
    role: "Frontend Developer",
    bio: "Especialista em transformar designs em código pixel-perfect. Trabalha com React e Next.js para criar interfaces rápidas, acessíveis e responsivas. Focado em performance e qualidade de código.",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Acessibilidade", "Performance"],
    initial: "F",
    color: "#EC4899",
    highlight: "Interfaces Pixel-Perfect",
  },
  {
    name: "Especialista em Automações",
    role: "Automation Engineer",
    bio: "Responsável por mapear processos e criar automações que economizam horas de trabalho. Especialista em n8n, integrações via API e desenvolvimento de fluxos inteligentes com WhatsApp e outras ferramentas.",
    skills: ["n8n", "Webhooks", "WhatsApp API", "Integrações", "REST APIs", "Automação"],
    initial: "A",
    color: "#6366F1",
    highlight: "n8n & Automações",
  },
];

const values = [
  {
    title: "Excelência técnica",
    description:
      "Código limpo, arquitetura sólida e tecnologias modernas em cada projeto entregue.",
    icon: "⚡",
  },
  {
    title: "Foco em resultado",
    description:
      "Não entregamos código. Entregamos soluções que resolvem problemas reais de negócios.",
    icon: "🎯",
  },
  {
    title: "Transparência total",
    description:
      "Comunicação clara, prazos cumpridos e alinhamento constante durante todo o projeto.",
    icon: "🤝",
  },
  {
    title: "Evolução contínua",
    description:
      "Aprendemos, estudamos e adotamos as melhores práticas do mercado sem parar.",
    icon: "🚀",
  },
];

export default function EquipePage() {
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
            Quem somos
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-light mb-5">
            Nossa <span className="text-gradient">Equipe</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Profissionais apaixonados por tecnologia e resultado, unidos pelo
            propósito de transformar ideias em produtos digitais de impacto.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="card-glass card-glass-hover rounded-2xl p-6 flex flex-col gap-5"
            >
              {/* Avatar + Info */}
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center font-display font-bold text-2xl text-white"
                    style={{
                      background: `${member.color}20`,
                      border: `1px solid ${member.color}40`,
                    }}
                  >
                    {member.initial}
                  </div>
                  <div
                    className="absolute -bottom-1 -right-1 text-xs font-semibold px-1.5 py-0.5 rounded-md"
                    style={{
                      background: `${member.color}20`,
                      color: member.color,
                      border: `1px solid ${member.color}30`,
                    }}
                  >
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-light text-base leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-muted text-xs mt-0.5">{member.role}</p>
                  <span
                    className="inline-block text-xs font-medium mt-1.5 px-2 py-0.5 rounded-md"
                    style={{
                      background: `${member.color}15`,
                      color: member.color,
                    }}
                  >
                    {member.highlight}
                  </span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-muted text-sm leading-relaxed">{member.bio}</p>

              {/* Skills */}
              <div className="pt-4 border-t border-brand/10">
                <p className="text-muted text-xs uppercase tracking-wider mb-2.5">
                  Skills
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-muted text-xs bg-dark-3 px-2.5 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-dark-2 border-t border-brand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-light mb-4">
              O que nos define
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Mais do que uma empresa de software, somos parceiros estratégicos
              comprometidos com o sucesso de cada cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="card-glass rounded-2xl p-6 text-center flex flex-col items-center gap-4"
              >
                <span className="text-3xl">{value.icon}</span>
                <h3 className="font-display font-semibold text-light">
                  {value.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dark border-t border-brand/10">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-light mb-4">
            Junte-se à LYNVEX
          </h2>
          <p className="text-muted text-base mb-8">
            Somos uma equipe em crescimento. Se você é apaixonado por
            tecnologia e quer fazer parte de projetos desafiadores, queremos
            conhecer você.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-light text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 glow-brand"
          >
            Entrar em contato
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
