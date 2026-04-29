import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como a LYNVEX Tech coleta, usa e protege seus dados pessoais em conformidade com a LGPD.",
};

const sections = [
  {
    title: "1. Quem somos",
    content:
      "A LYNVEX Tech é uma software house especializada em sistemas web, aplicativos mobile e automações. Somos os responsáveis pelo tratamento dos dados pessoais coletados neste site.",
  },
  {
    title: "2. Quais dados coletamos",
    content:
      "Ao preencher o formulário de contato, coletamos: nome completo, endereço de e-mail, número de telefone/WhatsApp (opcional) e a descrição do seu projeto ou mensagem. Nenhum dado é coletado automaticamente além do tráfego padrão de servidor (logs de acesso sem identificação pessoal).",
  },
  {
    title: "3. Para que usamos seus dados",
    content:
      "Os dados coletados são usados exclusivamente para: responder à sua solicitação de contato ou orçamento; enviar comunicações diretamente relacionadas ao seu projeto; e manter o histórico de conversas para melhor atendimento. Não utilizamos seus dados para publicidade de terceiros.",
  },
  {
    title: "4. Base legal (LGPD)",
    content:
      "O tratamento dos seus dados é fundamentado no consentimento (art. 7º, I da Lei 13.709/2018), manifestado ao submeter o formulário de contato, e no legítimo interesse de responder às suas solicitações (art. 7º, IX). Você pode revogar seu consentimento a qualquer momento.",
  },
  {
    title: "5. Compartilhamento de dados",
    content:
      "Seus dados não são vendidos, alugados nem compartilhados com terceiros para fins comerciais. Utilizamos apenas o serviço Resend (plataforma de envio de e-mail) para encaminhar internamente as mensagens do formulário. Esse serviço age como operador e está sujeito às suas próprias políticas de privacidade e segurança.",
  },
  {
    title: "6. Armazenamento e segurança",
    content:
      "Os dados transitam via HTTPS e são armazenados em servidores com acesso restrito. Mantemos os dados pelo período necessário para atender à finalidade declarada ou até que você solicite a exclusão.",
  },
  {
    title: "7. Seus direitos",
    content:
      "Conforme a LGPD (art. 18), você tem direito a: confirmar a existência de tratamento; acessar seus dados; corrigir dados incompletos ou desatualizados; solicitar a anonimização, bloqueio ou eliminação; revogar o consentimento; e obter informações sobre o compartilhamento realizado. Para exercer qualquer direito, entre em contato pelo e-mail abaixo.",
  },
  {
    title: "8. Cookies",
    content:
      "Este site não utiliza cookies de rastreamento ou publicidade. Cookies estritamente necessários para o funcionamento técnico do Next.js podem ser criados automaticamente pelo framework, mas não coletam informações pessoais identificáveis.",
  },
  {
    title: "9. Alterações nesta política",
    content:
      "Podemos atualizar esta política periodicamente. A data de última atualização é exibida no rodapé desta página. Recomendamos revisá-la antes de submeter novos dados.",
  },
  {
    title: "10. Contato",
    content:
      "Dúvidas, solicitações ou reclamações relacionadas à privacidade podem ser enviadas para: contato@lynvextec.com.br. Respondemos em até 5 dias úteis.",
  },
];

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand text-sm font-medium tracking-widest uppercase mb-4">
            Transparência
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-light leading-tight mb-6">
            Política de Privacidade
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Sua privacidade é importante para nós. Aqui explicamos de forma
            clara como tratamos seus dados pessoais em conformidade com a{" "}
            <strong className="text-light">Lei Geral de Proteção de Dados (LGPD)</strong>.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-glass rounded-2xl p-8 sm:p-12 flex flex-col gap-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display font-semibold text-light text-lg mb-3">
                  {section.title}
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}

            <div className="pt-6 border-t border-brand/10">
              <p className="text-muted text-xs">
                Última atualização: abril de 2026.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}