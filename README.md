<div align="center">

# LYNVEX Tech — Site Institucional

**Software house especializada em sistemas web, aplicativos mobile e automações inteligentes.**

[![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com)

[lynvextec.com.br](https://lynvextec.com.br) · [Contato](mailto:contato@lynvextec.com.br)

</div>

---

## Visão Geral

Site institucional da **LYNVEX Tech**, construído com Next.js 16 App Router e React 19. O projeto apresenta os serviços, cases, equipe e um canal de contato com envio de e-mail transacional e rate limiting distribuído.

## Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.2.4 | Framework principal — App Router, Server/Client Components |
| [React](https://react.dev/) | 19 | Biblioteca de UI |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Tipagem estática em todo o projeto |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Estilização com design system via variáveis CSS |
| [Resend](https://resend.com/) | 6 | Envio de e-mails transacionais |
| [Upstash Redis](https://upstash.com/) | — | Rate limiting distribuído (multi-instância no Vercel) |

## Funcionalidades

- **Home** — Hero, clientes, serviços, portfólio, depoimentos, equipe e CTA
- **Serviços** — Detalhamento das soluções: sistemas web, mobile, automações, CRM, landing pages e consultoria técnica
- **Projetos** — Cases reais desenvolvidos pela LYNVEX com descrição e tecnologias utilizadas
- **Equipe** — Perfil de cada membro com cargo e especialidades
- **Contato** — Formulário com validação client e server-side, feedback visual de envio
- **API de contato** — Route Handler com validação de campos, rate limiting por IP (3 req / 10 min) e envio via Resend
- **SEO completo** — `metadata` do Next.js com Open Graph, Twitter Card, sitemap dinâmico e `robots.ts`
- **Fontes otimizadas** — Inter + Space Grotesk via `next/font/google` com `display: swap`

## Começando

### Pré-requisitos

- Node.js 20+
- npm / yarn / pnpm

### Instalação

```bash
git clone https://github.com/seu-usuario/site-lynvex.git
cd site-lynvex
npm install
```

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Resend — envio de e-mails
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx

# Upstash Redis — rate limiting distribuído (opcional em dev, obrigatório em produção)
UPSTASH_REDIS_REST_URL=https://xxxxxxxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=xxxxxxxxxxxxxxxx
```

> Em desenvolvimento, se as variáveis do Upstash não estiverem definidas, o rate limiting cai automaticamente para um limitador in-memory.

### Rodando localmente

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Build de produção

```bash
npm run build
npm start
```

## Estrutura do Projeto

```
site-lynvex/
├── app/
│   ├── layout.tsx              # Layout raiz — fontes, metadata, Navbar e Footer
│   ├── page.tsx                # Home (composição de seções)
│   ├── not-found.tsx           # Página 404 customizada
│   ├── sitemap.ts              # Sitemap dinâmico
│   ├── robots.ts               # robots.txt gerado em runtime
│   │
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # POST /api/contact — validação + rate limit + Resend
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── CopyrightYear.tsx
│   │   └── sections/           # Seções da home (cada uma é um Server Component)
│   │       ├── Hero.tsx
│   │       ├── Services.tsx
│   │       ├── Clients.tsx
│   │       ├── Portfolio.tsx
│   │       ├── Testimonials.tsx
│   │       ├── TeamSection.tsx
│   │       └── CTASection.tsx
│   │
│   ├── contato/
│   │   ├── page.tsx
│   │   └── ContactForm.tsx     # "use client" — único Client Component de formulário
│   │
│   ├── servicos/page.tsx
│   ├── projetos/page.tsx
│   ├── equipe/page.tsx
│   └── privacidade/page.tsx
│
├── public/                     # Assets estáticos — imagens, logo, OpenGraph
├── .env.local                  # Variáveis de ambiente (não versionado)
└── next.config.ts
```

## API

### `POST /api/contact`

Recebe os dados do formulário de contato, valida e envia um e-mail via Resend.

**Rate limiting:** 3 requisições por IP a cada 10 minutos. Usa Upstash Redis em produção (sliding window) e fallback in-memory em desenvolvimento.

**Request body:**

```json
{
  "name": "string (obrigatório)",
  "email": "string (obrigatório)",
  "phone": "string (opcional)",
  "service": "string (opcional)",
  "message": "string (obrigatório)"
}
```

**Responses:**

| Status | Descrição |
|---|---|
| `200` | Mensagem enviada com sucesso |
| `400` | Campos obrigatórios ausentes ou e-mail inválido |
| `429` | Rate limit atingido |
| `500` | Erro interno no servidor |

## Deploy

O projeto está configurado para deploy na [Vercel](https://vercel.com). Basta conectar o repositório e definir as variáveis de ambiente no painel do projeto.

```
RESEND_API_KEY
UPSTASH_REDIS_REST_URL
UPSTASH_REDIS_REST_TOKEN
```

## Sobre a LYNVEX

A **LYNVEX Tech** é uma software house focada em construir produtos digitais que geram resultado real para empresas. Atuamos desde o levantamento de requisitos até o deploy em produção.

**Especialidades:**
- Sistemas web e SaaS sob medida
- Aplicativos mobile (iOS e Android)
- Automações e integrações entre plataformas
- CRMs e portais personalizados
- Consultoria técnica e arquitetura de sistemas

## Equipe

| Nome | Cargo |
|---|---|
| Matheus Marinho | CEO |
| Caio Mesquita | COO |
| Matheus Fernandes | CTO & Frontend |
| Caio Fontes | Back-end & IA |
| Natsumi Duarte Kudo | Frontend & Relacionamento |

---

**Site:** [lynvextec.com.br](https://lynvextec.com.br) · **E-mail:** [contato@lynvextec.com.br](mailto:contato@lynvextec.com.br)
