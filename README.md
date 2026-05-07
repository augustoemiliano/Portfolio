# Meu portfólio (GitHub Pages)

Este repositório é o código do meu site de portfólio — **Augusto Emiliano**. Deixei este README principalmente para **eu não esquecer** o fluxo de desenvolvimento e deploy, e para quem clonar conseguir rodar e publicar sem adivinhar detalhe de configuração.

- **Repositório no GitHub:** [github.com/augustoemiliano/Portfolio](https://github.com/augustoemiliano/Portfolio)
- **Site no GitHub Pages (quando o deploy estiver ok):** [augustoemiliano.github.io/Portfolio/](https://augustoemiliano.github.io/Portfolio/)

## O que eu usei

Quis manter tudo **estático** em produção (sem servidor obrigatório, sem SSR, sem banco):

- **React** + **TypeScript** + **Vite**
- **Tailwind CSS**
- **Framer Motion** (animações leves)
- **Lucide React** (ícones)

O site é **uma página só**, com links internos por **âncoras** (`#sobre`, `#projetos`, etc.). **Não uso React Router** de propósito: no GitHub Pages isso evita dor de cabeça com rotas e `404.html`.

## Rodar localmente

Depois de clonar, na **raiz deste repositório** (a pasta `Portfolio`):

```bash
npm install
npm run dev
```

O Vite mostra o endereço (geralmente `http://localhost:5173`).

Build e preview local do que vai parar no Pages:

```bash
npm run build
npm run preview
```

Saída em `dist/`.

## GitHub Pages e o `base` do Vite

No GitHub Pages o site quase nunca fica na raiz do domínio **a não ser** que o repositório seja do tipo `usuario.github.io`.

No meu caso, o remoto é [augustoemiliano/Portfolio](https://github.com/augustoemiliano/Portfolio), então a URL pública fica em [augustoemiliano.github.io/Portfolio/](https://augustoemiliano.github.io/Portfolio/).

O prefixo dos assets no `index.html` precisa ser **exatamente** o do repositório (no meu caso **`/Portfolio/`**, com **P** maiúsculo). Se o build sair com outro prefixo (ex.: `/portfolio-augusto/`), o navegador pede o `.js` numa URL errada, recebe **HTML de 404** (`text/html`) e o console acusa **MIME não permitido** para módulo → **página em branco**. No **GitHub Actions** o `vite.config.ts` usa a variável automática `GITHUB_REPOSITORY` para montar o `base`; localmente continuo podendo forçar com `VITE_BASE` no `.env`.

No Vite isso é o campo **`base`**. Eu leio **`VITE_BASE`** no `vite.config.ts` e normalizo (barra no final quando não é só `/`).

**Regra geral:**

| Onde o site fica | `VITE_BASE` |
|------------------|-------------|
| `https://SEU_USUARIO.github.io/` (repo `SEU_USUARIO.github.io`) | `/` |
| `https://SEU_USUARIO.github.io/NOME_DO_REPO/` | `/NOME_DO_REPO/` |

Se eu renomear o repositório no GitHub, **tenho que atualizar** o `VITE_BASE` no workflow **e** no `.env` local para bater com o novo caminho.

### Testar o `base` antes do deploy

```bash
cp .env.example .env
```

No `.env`, uso o mesmo valor que o GitHub Actions usa no build (no meu caso, `/Portfolio/`). Reinicio o `npm run dev` e confiro se CSS/JS carregam e se os links não quebram.

## Como eu publico (GitHub Actions)

O arquivo `.github/workflows/deploy-pages.yml` roda em push na `main`: `npm install`, `npm run build` e sobe o `dist/` para o Pages (o `base` do Vite no CI vem do `GITHUB_REPOSITORY`, não preciso lembrar de setar `VITE_BASE` no YAML).

No GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**. Na primeira vez pode pedir para liberar o ambiente `github-pages`.

Se um dia eu quiser publicar “na mão”, dá para subir o conteúdo de `dist/` por outro fluxo; prefiro Actions porque fica repetível.

## Como eu organizei o código

```
public/                 # favicon, PDF do CV etc.
src/
  components/           # Header, Hero, seções
  components/ui/        # botões, cards, timeline…
  data/                 # textos e listas (edito aqui sem mexer em layout)
  styles/               # globals.css (Tailwind + utilitários)
  App.tsx
  main.tsx
```

Onde costumo mexer quando atualizo conteúdo:

| O quê | Onde |
|-------|------|
| Dados pessoais, hero, contato, currículo | `src/data/site.ts` |
| Projetos | `src/data/projects.ts` |
| Experiências | `src/data/experiences.ts` |
| Stacks | `src/data/skills.ts` |
| Certificações | `src/data/certifications.ts` |
| Menu / ordem das seções | `src/components/Header.tsx`, `src/App.tsx` |

**PDF do currículo:** arquivo em `public/cv/`; em `site.ts`, campo `resumePdfPath` relativo a `public/` (ex.: `cv/curriculo.pdf`). O hero usa `import.meta.env.BASE_URL` para montar a URL certa com subpasta no Pages.

## Contato

- **E-mail:** augustope99@gmail.com  
- **GitHub:** https://github.com/augustoemiliano  

Se eu mudar o nome do repo ou a forma de publicar, atualizo este README e o `VITE_BASE` para não ficar documentação mentirosa.
