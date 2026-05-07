import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

/**
 * GitHub Pages — base path
 *
 * - Site em https://SEU_USUARIO.github.io/  →  base: "/"
 * - Site em https://SEU_USUARIO.github.io/NOME_DO_REPO/  →  base: "/NOME_DO_REPO/"
 *
 * Em CI (GitHub Actions), defina VITE_BASE no workflow.
 * Localmente, crie `.env` com VITE_BASE=/portfolio-augusto/ para testar como no Pages.
 */
function normalizeBase(raw: string | undefined): string {
  if (!raw || raw === "/") return "/";
  const withSlash = raw.startsWith("/") ? raw : `/${raw}`;
  return withSlash.endsWith("/") ? withSlash : `${withSlash}/`;
}

export default defineConfig({
  plugins: [react()],
  base: normalizeBase(process.env.VITE_BASE),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
