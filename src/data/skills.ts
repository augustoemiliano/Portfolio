export type SkillCategory = {
  id: string;
  title: string;
  items: readonly string[];
};

export const skillCategories: readonly SkillCategory[] = [
  {
    id: "frontend",
    title: "Front-end",
    items: ["React", "TypeScript", "JavaScript", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: "backend",
    title: "Back-end",
    items: ["Python", "FastAPI", "Java", "Spring Boot", "Node.js", "Express", "Rust", "PHP"],
  },
  {
    id: "data-devops",
    title: "Dados & DevOps",
    items: ["PostgreSQL", "SQLAlchemy", "Alembic", "Redis", "Celery", "pandas", "Docker", "Docker Compose", "GitHub Actions"],
  },
  {
    id: "automation",
    title: "Automação",
    items: ["Python", "PowerShell", "Shell Script", "Power Automate"],
  },
  {
    id: "cloud",
    title: "Cloud & Infra",
    items: [
      "Microsoft 365",
      "Azure AD",
      "Active Directory",
      "Windows Server",
      "Intune",
      "Endpoint Manager",
      "MDM",
    ],
  },
  {
    id: "security",
    title: "Segurança",
    items: [
      "Cybersecurity",
      "Fortinet",
      "MFA",
      "LGPD",
      "Hardening",
      "Zero Trust",
      "Controle de acesso",
      "Compliance",
    ],
  },
  {
    id: "tools",
    title: "Ferramentas",
    items: ["Git", "GitHub", "JIRA", "Service Desk", "ITIL", "Monitoramento", "SLA", "KPI"],
  },
] as const;
