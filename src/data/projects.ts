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

const GITHUB = "https://github.com/augustoemiliano";

export const projects: readonly Project[] = [
  {
    id: "flowcred",
    name: "FlowCred",
    featured: true,
    featuredLabel: "Sistema full stack em destaque",
    summary:
      "Sistema full stack de gestão de propostas de crédito imobiliário, com front-end e back-end em repositórios separados. Cobre o ciclo da proposta: cadastro de clientes, acompanhamento de status, checklist, upload de documentos e dashboard.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "TanStack Query",
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "Alembic",
      "JWT",
      "Docker Compose",
    ],
    highlights: [
      "API REST em FastAPI com autenticação JWT",
      "CRUD de clientes e propostas com filtros e paginação",
      "Histórico automático de status e checklist por proposta",
      "Upload seguro de documentos com download autenticado",
      "Dashboard com indicadores e gráfico por status",
      "Formulários validados com React Hook Form + Zod",
    ],
    status: "concluido",
    statusLabel: "Concluído",
    links: [
      { label: "Front-end", href: `${GITHUB}/FlowCred-Front` },
      { label: "Back-end", href: `${GITHUB}/FlowCred-Back` },
    ],
  },
  {
    id: "minutas",
    name: "Sistema Inteligente de Emissão de Minutas",
    summary:
      "Backend em FastAPI para geração e governança de minutas e contratos a partir de templates, com processamento assíncrono, trilha de auditoria e pipeline de documentos preparado para integração com IA.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "JWT",
      "Jinja2",
      "Alembic",
      "Docker Compose",
    ],
    highlights: [
      "Templates Jinja2 para geração de minutas",
      "Filas com Celery + Redis para tarefas pesadas",
      "Autenticação JWT e registro de auditoria",
      "Pipeline de documentos com PDF e OCR",
      "Arquitetura preparada para recursos de IA",
    ],
    status: "concluido",
    statusLabel: "Concluído",
    links: [{ label: "Repositório", href: `${GITHUB}/Sistema-Inteligente-de-Emiss-o-de-Minutas` }],
  },
  {
    id: "etl-financeiro",
    name: "ETL Financeiro",
    summary:
      "Pipeline ETL em Python que extrai dados de múltiplas fontes (CSV, XLSX e API de câmbio), valida e transforma com pandas, carrega em PostgreSQL e gera relatórios em CSV, com retry nas chamadas externas e execução via Docker.",
    technologies: ["Python", "pandas", "PostgreSQL", "SQLAlchemy", "Alembic", "Docker", "pytest"],
    highlights: [
      "Camadas separadas de extração, transformação e carga",
      "Retry automático (tenacity) na API externa",
      "Relatórios em CSV gerados a partir do banco",
      "Migrações de banco com Alembic",
      "Testes automatizados com pytest",
      "Sem credenciais no código (variáveis de ambiente)",
    ],
    status: "concluido",
    statusLabel: "Concluído",
    links: [{ label: "Repositório", href: `${GITHUB}/ETL-Financeiro` }],
  },
  {
    id: "task-queue-api",
    name: "API de Fila de Tarefas",
    summary:
      "API REST em Java com Spring Boot que enfileira tarefas, persiste em PostgreSQL e as processa em background com um worker agendado, incluindo retry de falhas e documentação OpenAPI.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "OpenAPI / Swagger", "Docker Compose"],
    highlights: [
      "Arquitetura em camadas com validação de entrada",
      "Worker em background com controle de status",
      "Retry de tarefas com falha",
      "Tratamento global de erros",
      "Ambiente completo com Docker Compose",
    ],
    status: "concluido",
    statusLabel: "Concluído",
    links: [{ label: "Repositório", href: `${GITHUB}/filas-de-tarefas-simples-Java-Spring-` }],
  },
  {
    id: "taskflow-kanban",
    name: "TaskFlow Kanban",
    summary:
      "Aplicação Kanban com SPA em React e API REST em Node.js, ambas em TypeScript. Organiza tarefas por status e prioridade, com drag and drop, filtros e busca.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "Zod"],
    highlights: [
      "Front-end e back-end separados",
      "Drag and drop entre colunas (dnd-kit)",
      "Filtros por prioridade e busca por texto",
      "Validação de entrada com Zod na API",
      "Estados de carregamento, erro e vazio",
    ],
    status: "concluido",
    statusLabel: "Concluído",
    links: [{ label: "Repositório", href: `${GITHUB}/taskflow-kanban` }],
  },
] as const;
