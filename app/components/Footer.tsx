import Link from "next/link";
import CopyrightYear from "./CopyrightYear";

const footerLinks = {
  empresa: [
    { href: "/#sobre", label: "Sobre nós" },
    { href: "/equipe", label: "Nossa equipe" },
    { href: "/projetos", label: "Cases" },
    { href: "/contato", label: "Contato" },
  ],
  servicos: [
    { href: "/servicos#sistemas-web", label: "Sistemas Web" },
    { href: "/servicos#mobile", label: "Aplicativos Mobile" },
    { href: "/servicos#automacoes", label: "Automações" },
    { href: "/servicos#crm", label: "CRM Personalizado" },
  ],
  social: [
    { href: "#", label: "LinkedIn" },
    { href: "#", label: "Instagram" },
    { href: "#", label: "GitHub" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark-2 border-t border-brand/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-brand rounded-lg opacity-80" />
                <span className="relative z-10 flex items-center justify-center w-full h-full text-white font-display font-bold text-sm">
                  L
                </span>
              </div>
              <span className="font-display font-bold text-xl text-light">
                LYN<span className="text-brand">VEX</span>
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Software house especializada em soluções digitais que transformam
              negócios. Do conceito à entrega, com excelência técnica.
            </p>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-medium">
                Disponível para novos projetos
              </span>
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-light font-display font-semibold text-sm uppercase tracking-widest mb-5">
              Empresa
            </h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-light text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-light font-display font-semibold text-sm uppercase tracking-widest mb-5">
              Serviços
            </h3>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-light text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-light font-display font-semibold text-sm uppercase tracking-widest mb-5">
              Fale Conosco
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="mailto:contato@lynvex.com.br"
                  className="text-muted hover:text-light text-sm transition-colors"
                >
                  contato@lynvex.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5500000000000"
                  className="text-muted hover:text-accent text-sm transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
            <div className="flex gap-3">
              {footerLinks.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted hover:text-brand text-xs transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs">
            © <CopyrightYear /> LYNVEX Tech. Todos os direitos reservados.
          </p>
          <p className="text-muted text-xs">
            Desenvolvido com{" "}
            <span className="text-brand">♥</span> pela equipe LYNVEX
          </p>
        </div>
      </div>
    </footer>
  );
}
