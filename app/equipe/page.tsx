import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nossa Equipe",
  description:
    "Conheça a equipe LYNVEX — desenvolvedores, designers e especialistas apaixonados por tecnologia e resultado.",
};

const team = [
  {
    name: "Matheus Fernandes",
    bio: "Sócio e CTO da LYNVEX, responsável pela liderança técnica e estruturação dos projetos da empresa. Atua na definição de arquitetura, gestão do time de desenvolvimento e organização dos processos internos, incluindo documentação, versionamento e fluxo de entregas. Também desenvolve interfaces modernas com foco em performance e experiência do usuário, além de facilitar a comunicação entre equipe técnica e gestão.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Gestão de Projetos",
      "Arquitetura de Software",
    ],
    photo: "/team/MatheusFernandes.jpg",
    color: "#A800FF",
    highlight: "CTO & Front-end",
  },
  {
    name: "Matheus Marinho",
    bio: "CEO e fundador da LYNVEX, responsável pelo posicionamento estratégico da empresa e direcionamento de crescimento. Atua na construção da marca e na criação de campanhas e criativos para redes sociais, fortalecendo a presença digital da empresa.",
    skills: [
      "Gestão Estratégica",
      "Branding",
      "Marketing Digital",
      "Social Media",
      "Posicionamento de Marca",
    ],
    photo: "/team/MatheusHenrique.png",
    color: "#00C2FF",
    highlight: "CEO",
  },
  {
    name: "Caio Mesquita",
    bio: "COO e fundador da LYNVEX, responsável pela organização operacional e administrativa da empresa. Atua na execução das estratégias internas e na criação de conteúdos e criativos para redes sociais, contribuindo diretamente para a comunicação e fortalecimento da marca.",
    skills: [
      "Gestão Operacional",
      "Processos Internos",
      "Marketing",
      "Social Media",
      "Criação de Conteúdo",
    ],
    photo: "/team/CaioMesquita.jpeg",
    color: "#22C55E",
    highlight: "COO",
  },
  {
    name: "Caio Fontes",
    bio: "Desenvolvedor back-end com experiência em APIs, chatbots e soluções com inteligência artificial. Atua na construção de sistemas robustos, integrações e aplicações com RAG, garantindo eficiência, escalabilidade e inteligência nos produtos desenvolvidos.",
    skills: ["Node.js", "APIs REST", "Chatbots", "RAG", "Integrações", "IA"],
    photo: "/team/CaioFontes.png",
    color: "#3B82F6",
    highlight: "Back-end & IA",
  },
  {
    name: "Natsumi Duarte Kudo",
    bio: "Desenvolvedora front-end com perfil comunicativo e foco em experiência do usuário. Atua tanto na construção de interfaces quanto no relacionamento com clientes, participando do levantamento de requisitos e alinhamento de demandas. Possui conhecimentos em React, linguagens TypeScript e C, GitHub, e busca evoluir continuamente rumo ao desenvolvimento full stack.",
    skills: [
      "React",
      "TypeScript",
      "GitHub",
      "HTML",
      "CSS",
      "Comunicação com Cliente",
      "Levantamento de Requisitos",
    ],
    photo: "/team/Natsumi.png",
    color: "#F59E0B",
    highlight: "Frontend & Relacionamento",
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
                    className="w-16 h-16 rounded-2xl overflow-hidden"
                    style={{ border: `1px solid ${member.color}40` }}
                  >
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
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
            Somos uma equipe em crescimento. Se você é apaixonado por tecnologia
            e quer fazer parte de projetos desafiadores, queremos conhecer você.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-light text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 glow-brand"
          >
            Entrar em contato
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
        </div>
      </section>
    </div>
  );
}
