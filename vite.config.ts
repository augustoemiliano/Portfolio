import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

/**
 * GitHub Pages — `base` do Vite
 *
 * - Site em https://USUARIO.github.io/ (repo USUARIO.github.io) → "/"
 * - Site em https://USUARIO.github.io/NOME_DO_REPO/ → "/NOME_DO_REPO/"
 *
 * No GitHub Actions existe `GITHUB_REPOSITORY` (ex.: augustoemiliano/Portfolio).
 * Uso isso no build para o prefixo dos assets bater com a URL real e não cair em
 * "MIME text/html" (na prática: 404 devolvendo HTML em vez do .js).
 *
 * Local: opcional `.env` com VITE_BASE=/Portfolio/ para testar como no Pages.
 */
function normalizeBase(raw: string | undefined): string {
  if (!raw || raw === "/") return "/";
  const withSlash = raw.startsWith("/") ? raw : `/${raw}`;
  return withSlash.endsWith("/") ? withSlash : `${withSlash}/`;
}

function baseFromGitHubRepository(): string | undefined {
  const full = process.env.GITHUB_REPOSITORY;
  if (!full) return undefined;
  const name = full.split("/")[1];
  if (!name) return undefined;
  if (name.endsWith(".github.io")) return "/";
  return normalizeBase(`/${name}`);
}

function resolveBase(): string {
  if (process.env.GITHUB_ACTIONS === "true") {
    const fromRepo = baseFromGitHubRepository();
    if (fromRepo) return fromRepo;
  }
  return normalizeBase(process.env.VITE_BASE);
}

export default defineConfig({
  plugins: [react()],
  base: resolveBase(),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
