# Portfólio — Augusto Emiliano

Site estático de portfólio profissional para **Desenvolvedor Full Stack Júnior**, construído com **React**, **TypeScript**, **Vite** e **Tailwind CSS**, com animações leves em **Framer Motion** e ícones **Lucide React**. Pensado para deploy gratuito no **GitHub Pages** (sem backend, sem SSR, sem banco de dados).

## Objetivo

Comunicar experiência real em **TI corporativa** (infraestrutura, cloud, segurança, automação, ITIL/SLA) e a transição fortalecida para **desenvolvimento full stack**, com foco em **React**, **TypeScript**, **Java**, **Python**, **Rust**, **Node.js** e **automação**.

## Tecnologias

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 3
- Framer Motion
- Lucide React

## Como rodar localmente

```bash
cd portfolio-augusto
npm install
npm run dev
```

Abra o endereço exibido no terminal (geralmente `http://localhost:5173`).

### Simular o base path do GitHub Pages

Se o site for publicado em `https://usuario.github.io/nome-do-repo/`, crie um arquivo `.env` na raiz do projeto:

```bash
cp .env.example .env
```

Edite `.env` e defina, por exemplo:

```env
VITE_BASE=/nome-do-repo/
```

Reinicie o `npm run dev` e teste assets e âncoras com o mesmo prefixo que o GitHub Pages usará.

## Build e preview

```bash
npm run build
npm run preview
```

O resultado estático fica em `dist/`.

## GitHub Pages — `base` no Vite

O Vite usa o campo **`base`** para prefixar assets no build. Este projeto lê a variável de ambiente **`VITE_BASE`** em `vite.config.ts`:

| Onde o site será publicado | Valor de `VITE_BASE` |
|----------------------------|----------------------|
| `https://SEU_USUARIO.github.io/` (repositório `SEU_USUARIO.github.io`) | `/` |
| `https://SEU_USUARIO.github.io/REPO/` (repositório de projeto) | `/REPO/` (ex.: `/portfolio-augusto/`) |

**Arquivo:** `vite.config.ts` — comentários explicam o comportamento. Em CI, o valor é injetado pelo workflow em `.github/workflows/deploy-pages.yml` (variável `VITE_BASE` no passo **Build**).

> **Importante:** se o nome do repositório mudar, atualize `VITE_BASE` no workflow **e** no `.env` local para coincidir com o caminho do GitHub Pages.

## Publicar com GitHub Actions

1. Crie um repositório no GitHub e envie este código para a branch `main`.
2. Em **Settings → Pages → Build and deployment**, escolha **GitHub Actions** como fonte.
3. Ajuste `VITE_BASE` no arquivo `.github/workflows/deploy-pages.yml` para o seu caso (`/` ou `/nome-do-repo/`).
4. Faça push para `main`. O workflow **Deploy GitHub Pages** faz `npm install`, `npm run build` e publica o artefato na Pages.

Na primeira vez, o ambiente **github-pages** pode precisar ser autorizado nas configurações do repositório (GitHub costuma pedir confirmação).

### Rotas

O site é **página única** com navegação por **âncoras** (`#sobre`, `#projetos`, etc.). Não há React Router — compatível com GitHub Pages sem truques de `404.html`.

## Estrutura de pastas

```
portfolio-augusto/
├── public/                 # Arquivos estáticos (favicon, PDF do CV)
├── src/
│   ├── assets/             # Imagens e mídia (vazio por padrão)
│   ├── components/         # Seções e layout
│   │   └── ui/             # Componentes reutilizáveis
│   ├── data/               # Conteúdo tipado (projetos, experiências, skills)
│   ├── styles/             # globals.css (Tailwind + utilitários)
│   ├── App.tsx
│   └── main.tsx
├── .github/workflows/      # Deploy GitHub Pages
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

## Manter conteúdo no futuro

| O que alterar | Arquivo |
|---------------|---------|
| Nome, headline, contato, footer, currículo | `src/data/site.ts` |
| Projetos, links, status, destaques | `src/data/projects.ts` |
| Experiências e bullets | `src/data/experiences.ts` |
| Categorias e lista de tecnologias | `src/data/skills.ts` |
| Certificações | `src/data/certifications.ts` |
| Menu, ordem das seções | `src/components/Header.tsx`, `src/App.tsx` |

### Currículo em PDF

1. Coloque o arquivo em `public/cv/` (ex.: `public/cv/curriculo.pdf`).
2. Em `src/data/site.ts`, defina `resumePdfPath: "cv/curriculo.pdf"` (sem barra inicial).
3. O botão **Baixar currículo** no hero passará a usar a URL correta com `import.meta.env.BASE_URL`.

## Contato

- **E-mail:** augustope99@gmail.com  
- **GitHub:** https://github.com/augustoemiliano  

---

Construindo soluções com código, automação, segurança e visão de negócio.
