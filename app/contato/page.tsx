import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a LYNVEX para solicitar um orçamento ou conversar sobre seu projeto. Respondemos em até 24h.",
};

const contactInfo = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: "E-mail",
    value: "lynvexop@gmail.com",
    href: "mailto:lynvexop@gmail.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+55 98 8559-8899",
    href: "https://wa.me/98985598899?text=Olá! Gostaria de conversar sobre um projeto.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    label: "Localização",
    value: "Brasil — Atendimento remoto",
    href: null,
  },
];

const faqs = [
  {
    q: "Quanto tempo leva para desenvolver um projeto?",
    a: "Depende da complexidade. Landing pages ficam prontas em 1-2 semanas. Sistemas médios (CRM, plataformas) geralmente levam de 4 a 8 semanas. Projetos maiores podem levar mais tempo. Definimos prazos reais no início do projeto.",
  },
  {
    q: "Como funciona o processo de desenvolvimento?",
    a: "Iniciamos com o levantamento de requisitos, depois criamos protótipos para validação visual. Em seguida entramos no desenvolvimento com entregas iterativas — você acompanha o progresso em tempo real. Finalizamos com testes e deploy.",
  },
  {
    q: "Vocês oferecem suporte após a entrega?",
    a: "Sim. Oferecemos suporte pós-entrega e podemos estabelecer um plano de manutenção mensal. Você nunca fica sozinho depois que o projeto vai ao ar.",
  },
  {
    q: "Qual a forma de pagamento?",
    a: "Trabalhamos com pagamentos via PIX, transferência ou boleto. O formato mais comum é 50% na assinatura do contrato e 50% na entrega — mas podemos adaptar conforme o projeto.",
  },
];

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-dark pt-16 md:pt-20">
      {/* Header */}
      <section className="relative py-16 bg-dark overflow-hidden">
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
            Vamos conversar
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-light mb-5">
            Entre em <span className="text-gradient">Contato</span>
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Tem um projeto em mente? Responderemos em até 24 horas com uma
            análise inicial e próximos passos.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left sidebar */}
          <div className="flex flex-col gap-8">
            {/* Contact info */}
            <div className="card-glass rounded-2xl p-6 flex flex-col gap-5">
              <h2 className="font-display font-semibold text-light">
                Informações de contato
              </h2>
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-muted text-xs mb-0.5">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={
                          info.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-light text-sm font-medium hover:text-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-light text-sm font-medium">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/98985598899?text=Olá! Gostaria de solicitar um orçamento para meu projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366]/10 hover:bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] font-semibold px-5 py-4 rounded-xl transition-all duration-200 group"
            >
              <svg
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div>
                <p className="text-sm">Falar pelo WhatsApp</p>
                <p className="text-xs text-[#25D366]/70">
                  Resposta mais rápida
                </p>
              </div>
              <svg
                className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform"
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
            </a>

            {/* Response time */}
            <div className="card-glass rounded-2xl p-5 flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-1.5 animate-pulse shrink-0" />
              <div>
                <p className="text-light text-sm font-semibold mb-1">
                  Resposta rápida garantida
                </p>
                <p className="text-muted text-xs leading-relaxed">
                  Nossa equipe está online e responde todas as mensagens em até
                  24 horas úteis.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 card-glass rounded-2xl p-6 md:p-8">
            <h2 className="font-display font-bold text-light text-xl mb-2">
              Nos conta sobre seu projeto
            </h2>
            <p className="text-muted text-sm mb-8">
              Preencha o formulário e daremos uma resposta com análise inicial e
              próximos passos.
            </p>
            <ContactForm />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="font-display text-3xl font-bold text-light text-center mb-10">
            Perguntas <span className="text-gradient">frequentes</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="card-glass rounded-2xl p-6">
                <h3 className="font-display font-semibold text-light text-sm mb-3 flex items-start gap-2">
                  <span className="text-brand shrink-0 mt-0.5">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-muted text-sm leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
