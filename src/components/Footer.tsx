import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="text-sm font-medium text-slate-200">{site.footerTagline}</p>
        <p className="mt-3 text-xs text-slate-500">
          © {new Date().getFullYear()} {site.name}. Feito com React, TypeScript, Vite e Tailwind — pronto para GitHub Pages.
        </p>
      </div>
    </footer>
  );
}
