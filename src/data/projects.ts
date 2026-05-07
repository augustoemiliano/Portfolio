export type ProjectStatus = "em-desenvolvimento" | "em-evolucao" | "concluido";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  name: string;
  summary: string;
  technologies: readonly string[];
  highlights: readonly string[];
  status: ProjectStatus;
  statusLabel: string;
  links: readonly ProjectLink[];
  demoUrl?: string;
  featured?: boolean;
  featuredLabel?: string;
};

export const projects: readonly Project[] = [
  {
    id: "flowcred",
    name: "FlowCred",
    featured: true,
    featuredLabel: "Sistema Full Stack em destaque",
    summary:
      "Sistema full stack para gestão de processos de crédito e credenciamento, com front-end e back-end separados. Foco em organização operacional, controle de dados, segurança, produtividade e automação de processos.",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "API REST",
      "Arquitetura front/back",
    ],
    highlights: [
      "Arquitetura separada entre front-end e back-end",
      "Organização de fluxo operacional",
      "Interface para gestão de informações",
      "Visão de sistema corporativo real",
      "Base para automação de processos internos",
    ],
    status: "concluido",
    statusLabel: "Concluído",
    links: [
      { label: "Front-end", href: "https://github.com/augustoemiliano/FlowCred-Front" },
      { label: "Back-end", href: "https://github.com/augustoemiliano/FlowCred-Back" },
    ],
  },
  {
    id: "task-queue-api",
    name: "API de Filas de Tarefas Simples",
    summary:
      "API em Java com Spring Boot para recebimento e processamento de tarefas em background, simulando arquitetura de filas e processamento assíncrono.",
    technologies: ["Java", "Spring Boot", "API REST", "Processamento assíncrono"],
    highlights: [
      "Organização em camadas",
      "API REST consistente",
      "Processamento em background",
      "Conceito de filas",
      "Base para sistemas escaláveis",
    ],
    status: "concluido",
    statusLabel: "Concluído",
    links: [
      {
        label: "Repositório",
        href: "https://github.com/augustoemiliano/filas-de-tarefas-simples-Java-Spring-",
      },
    ],
  },
  {
    id: "taskflow-kanban",
    name: "TaskFlow Kanban",
    summary:
      "Aplicação Kanban com drag and drop, organização por status e prioridades, com interface moderna voltada à produtividade.",
    technologies: ["React", "TypeScript", "JavaScript", "Tailwind CSS"],
    highlights: [
      "Interface moderna",
      "Drag and drop",
      "Organização por prioridades",
      "Componentização",
      "UX focada em produtividade",
    ],
    status: "concluido",
    statusLabel: "Concluído",
    links: [{ label: "Repositório", href: "https://github.com/augustoemiliano/taskflow-kanban" }],
  },
] as const;
