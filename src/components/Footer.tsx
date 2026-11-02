import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="text-sm font-medium text-slate-200">{site.footerTagline}</p>
        <p className="mt-3 text-xs text-slate-400">
          © {new Date().getFullYear()} {site.name}. Feito com React, TypeScript, Vite e Tailwind CSS.{" "}
          <a
            href={`${site.githubUrl}/Portfolio`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white/20 underline-offset-2 hover:text-accent-cyan"
          >
            Código-fonte
          </a>
        </p>
      </div>
    </footer>
  );
}
