import Link from "next/link";

const teamMembers = [
  {
    name: "Matheus Fernandes",
    role: "CTO & Frontend Developer",
    skills: ["Next.js", "React", "TypeScript", "Supabase"],
    initial: "M",
    color: "#A800FF",
  },
  {
    name: "Matheus Marinho",
    role: "CEO & Founder",
    skills: ["Gestão Estratégica", "Branding", "Marketing Digital"],
    initial: "M",
    color: "#00C2FF",
  },
  {
    name: "Caio Mesquita",
    role: "COO & Founder",
    skills: ["Gestão Operacional", "Marketing", "Criação de Conteúdo"],
    initial: "C",
    color: "#22C55E",
  },
  {
    name: "Caio Fontes",
    role: "Backend Developer",
    skills: ["Node.js", "APIs REST", "IA"],
    initial: "C",
    color: "#3B82F6",
  },
  {
    name: "Natsumi Duarte Kudo",
    role: "Frontend Developer",
    skills: ["React", "TypeScript", "GitHub"],
    initial: "N",
    color: "#F59E0B",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 md:py-28 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand-light rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-5">
              Equipe
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-light">
              Quem faz a <span className="text-gradient">LYNVEX acontecer</span>
            </h2>
          </div>
          <Link
            href="/equipe"
            className="inline-flex items-center gap-2 text-muted hover:text-light text-sm font-medium transition-colors shrink-0"
          >
            Conhecer a equipe completa
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

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group card-glass card-glass-hover rounded-2xl p-6 flex flex-col items-center text-center gap-4"
            >
              {/* Avatar */}
              <div className="relative">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center font-display font-bold text-2xl text-white"
                  style={{
                    background: `${member.color}30`,
                    border: `1px solid ${member.color}40`,
                  }}
                >
                  {member.initial}
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-dark bg-accent" />
              </div>

              <div>
                <h3 className="font-display font-semibold text-light text-sm">
                  {member.name}
                </h3>
                <p className="text-muted text-xs mt-0.5">{member.role}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 justify-center">
                {member.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="bg-dark-3 text-muted text-xs px-2 py-0.5 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
