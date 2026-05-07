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
    items: ["Node.js", "Java", "Spring Boot", "Python", "Rust", "PHP"],
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
