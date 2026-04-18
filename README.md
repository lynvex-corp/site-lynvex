# LYNVEX Tech — Site Institucional

Site institucional da **LYNVEX Tech**, software house especializada em sistemas web, aplicativos mobile e automações inteligentes. O projeto apresenta os serviços, cases, equipe e um canal de contato direto com envio de e-mail via API.

---

## Tecnologias Utilizadas

| Tecnologia                                    | Versão | Função                           |
| --------------------------------------------- | ------ | -------------------------------- |
| [Next.js](https://nextjs.org/)                | 16.2.4 | Framework principal (App Router) |
| [React](https://react.dev/)                   | 19     | Biblioteca de UI                 |
| [TypeScript](https://www.typescriptlang.org/) | 5      | Tipagem estática                 |
| [Tailwind CSS](https://tailwindcss.com/)      | 4      | Estilização utilitária           |
| [Resend](https://resend.com/)                 | 6      | Envio de e-mails transacionais   |

---

## Estrutura de Pastas

```
site-lynvex/
├── app/
│   ├── layout.tsx              # Layout raiz: fonte, metadata, Navbar e Footer
│   ├── page.tsx                # Página inicial (composição de seções)
│   │
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # API Route: recebe formulário e envia e-mail via Resend
│   │
│   ├── components/
│   │   ├── Navbar.tsx          # Barra de navegação
│   │   ├── Footer.tsx          # Rodapé global
│   │   ├── CopyrightYear.tsx   # Componente de ano dinâmico
│   │   └── sections/
│   │       ├── Hero.tsx        # Seção principal da home
│   │       ├── Services.tsx    # Serviços oferecidos
│   │       ├── Clients.tsx     # Logos e cases de clientes
│   │       ├── Portfolio.tsx   # Portfólio de projetos
│   │       ├── Testimonials.tsx# Depoimentos de clientes
│   │       ├── TeamSection.tsx # Apresentação da equipe
│   │       └── CTASection.tsx  # Call-to-action final
│   │
│   ├── contato/
│   │   ├── page.tsx            # Página de contato
│   │   └── ContactForm.tsx     # Formulário controlado (Client Component)
│   │
│   ├── servicos/
│   │   └── page.tsx            # Página de serviços
│   │
│   ├── projetos/
│   │   └── page.tsx            # Página de projetos / portfólio
│   │
│   └── equipe/
│       └── page.tsx            # Página da equipe
│
├── public/                     # Assets estáticos (imagens, logo, OpenGraph)
├── .env.local                  # Variáveis de ambiente (não versionado)
└── next.config.ts              # Configuração do Next.js
```

---

## Funcionalidades

- **Página inicial** com Hero, seção de clientes, serviços, portfólio, depoimentos, equipe e CTA
- **Página de serviços** com detalhamento das soluções oferecidas
- **Página de projetos** com cases reais desenvolvidos pela LYNVEX
- **Página de equipe** com perfil dos membros
- **Formulário de contato** com validação de campos, seleção de tipo de projeto e feedback visual de envio
- **API Route de contato** com envio de e-mail via Resend, validação server-side e rate limiting por IP (3 requisições / 10 min)
- **SEO e Open Graph** configurados no layout raiz para todas as páginas
- **Fontes Google otimizadas** via `next/font` (Inter + Space Grotesk)

---

## Boas Práticas Adotadas

- **App Router** do Next.js 16 com separação clara entre Server e Client Components — apenas o formulário de contato é marcado como `"use client"`
- **Componentização por seção** — cada bloco da página inicial é um componente isolado em `/sections`, facilitando manutenção e reuso
- **API Route com validação dupla** — campos obrigatórios e formato de e-mail são validados no servidor, independente da validação do formulário
- **Rate limiting por IP** na rota de contato para prevenir abuso do formulário e spam
- **SEO estruturado** com `metadata` do Next.js, incluindo Open Graph e Twitter Card configurados no layout raiz
- **Fontes otimizadas** via `next/font/google` com `display: swap` para evitar FOUT
- **TypeScript** em todo o projeto, com tipagem explícita de estados, props e respostas de API
- **Tailwind CSS v4** com design system baseado em variáveis CSS customizadas para cores e espaçamentos

---

## Sobre a LYNVEX

A **LYNVEX Tech** é uma software house focada em construir produtos digitais que geram resultado real para empresas. Atuamos desde o levantamento de requisitos até o deploy em produção, com especialidade em:

- Sistemas web e SaaS sob medida
- Aplicativos mobile
- Automações e integrações entre plataformas
- CRMs e portais personalizados

**Contato:** [lynvexop@gmail.com](mailto:lynvexop@gmail.com)
