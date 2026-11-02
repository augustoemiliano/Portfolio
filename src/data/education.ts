export type Education = {
  id: string;
  course: string;
  institution: string;
  period: string;
  status?: string;
};

export const education: readonly Education[] = [
  {
    id: "estacio-ads",
    course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institution: "Estácio",
    period: "Jul/2024 – Dez/2026",
    status: "Em andamento",
  },
  {
    id: "ecid-informatica",
    course: "Técnico em Informática",
    institution: "Ecid — Cursos Técnicos EAD",
    period: "Jun/2024 – Jan/2025",
  },
  {
    id: "ecid-sst",
    course: "Técnico em Segurança do Trabalho",
    institution: "Ecid — Cursos Técnicos EAD",
    period: "Jul/2022 – Jan/2024",
  },
] as const;
