# Portfólio — Augusto Emiliano

Site pessoal de portfólio de **Augusto Emiliano**, desenvolvedor full stack júnior. Reúne meus projetos, stack, experiência profissional, certificações e contato.

- **Site:** [augustoemiliano.github.io/Portfolio](https://augustoemiliano.github.io/Portfolio/)
- **GitHub:** [github.com/augustoemiliano](https://github.com/augustoemiliano)

## Projetos apresentados

| Projeto | Stack principal | Repositório |
|---------|-----------------|-------------|
| FlowCred — gestão de propostas de crédito imobiliário (full stack) | React, TypeScript, FastAPI, SQLAlchemy, JWT, Docker | [Front](https://github.com/augustoemiliano/FlowCred-Front) · [Back](https://github.com/augustoemiliano/FlowCred-Back) |
| Sistema Inteligente de Emissão de Minutas | FastAPI, PostgreSQL, Redis, Celery, JWT, Jinja2 | [Repo](https://github.com/augustoemiliano/Sistema-Inteligente-de-Emissao-de-Minutas) |
| ETL Financeiro | Python, pandas, PostgreSQL, Docker | [Repo](https://github.com/augustoemiliano/ETL-Financeiro) |
| API de Fila de Tarefas | Java, Spring Boot, PostgreSQL, OpenAPI, Docker Compose | [Repo](https://github.com/augustoemiliano/fila-de-tarefas-java-spring) |
| TaskFlow Kanban | React, TypeScript, Node.js, Express | [Repo](https://github.com/augustoemiliano/taskflow-kanban) |

## Tecnologias do site

- React 19 + TypeScript + Vite
- Tailwind CSS
- Framer Motion (animações, respeitando "reduzir movimento" do sistema)
- Lucide React (ícones)
- ESLint

É uma página única e estática, com navegação por âncoras (`#sobre`, `#projetos`…). Não há React Router, o que evita problemas de rotas no GitHub Pages.

## Rodar localmente

Requer Node.js 20+.

```bash
npm install
npm run dev        # servidor de desenvolvimento (http://localhost:5173)
npm run lint       # ESLint
npm run typecheck  # checagem de tipos
npm run build      # gera dist/
npm run preview    # serve o build localmente
```

## Publicação (GitHub Pages)

O workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) roda a cada push na `main`: `npm ci` → `npm run lint` → `npm run build` → publica `dist/` no GitHub Pages.

Pré-requisito (uma vez): no GitHub, **Settings → Pages → Build and deployment → Source: GitHub Actions**.

### Sobre o `base` do Vite

Como o repositório se chama `Portfolio`, o site fica em `/Portfolio/` e os assets precisam desse prefixo. No CI, o `vite.config.ts` monta o `base` automaticamente a partir de `GITHUB_REPOSITORY`; o workflow ainda confere se o `dist/index.html` usa o prefixo certo (evita página em branco).

Para testar localmente com o mesmo prefixo:

```bash
cp .env.example .env   # contém VITE_BASE=/Portfolio/
npm run build && npm run preview
```

Se o repositório for renomeado, atualize também as URLs absolutas de `canonical`/Open Graph em `index.html`.

## Onde editar o conteúdo

| O quê | Arquivo |
|-------|---------|
| Dados pessoais, textos do topo e contato | `src/data/site.ts` |
| Projetos | `src/data/projects.ts` |
| Experiência | `src/data/experiences.ts` |
| Tecnologias | `src/data/skills.ts` |
| Certificações | `src/data/certifications.ts` |
| Menu e ordem das seções | `src/components/Header.tsx`, `src/App.tsx` |
| SEO (title, description, Open Graph) | `index.html` |
| Favicon e imagem de compartilhamento | `public/favicon.svg`, `public/og-image.png` |

**Currículo em PDF:** coloque o arquivo em `public/cv/` e preencha `resumePdfPath` em `src/data/site.ts` (ex.: `cv/curriculo.pdf`). O botão "Baixar currículo" só aparece quando esse campo está preenchido.

## Contato

- E-mail: augustope99@gmail.com
- GitHub: [augustoemiliano](https://github.com/augustoemiliano)
