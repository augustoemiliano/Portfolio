export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  highlights: readonly string[];
};

export const experiences: readonly Experience[] = [
  {
    id: "datasafe",
    company: "DataSafe Tecnologia Corporativa",
    role: "Analista de Suporte N1 / Infraestrutura — foco em desenvolvimento e automações",
    period: "Jun/2025 – Atual",
    highlights: [
      "Ambiente corporativo com suporte, infraestrutura, automação e desenvolvimento de soluções internas.",
      "Automações com Python, PowerShell, Shell Script, JavaScript e Power Automate.",
      "Aplicações, scripts e fluxos internos para reduzir trabalho manual, ganhar produtividade e diminuir falhas.",
      "Uso de Rust, PHP, Python, JavaScript, React e Next.js em rotinas de desenvolvimento e automação.",
      "Microsoft 365, Azure AD, Intune, Endpoint Manager e políticas de segurança.",
      "Segurança, compliance, controle de acesso, MFA, LGPD e governança de dispositivos.",
      "JIRA, CVertex, gestão de incidentes, SLA, KPI e boas práticas ITIL.",
    ],
  },
  {
    id: "sms",
    company: "Secretaria Municipal de Saúde",
    role: "Técnico em Informática / Infraestrutura",
    period: "Mar/2022 – Mar/2024",
    highlights: [
      "Infraestrutura de TI em 15 unidades públicas.",
      "Redes, servidores, endpoints e sistemas críticos da saúde.",
      "Microsoft 365, políticas de segurança e governança.",
      "Gestão de dispositivos, documentação, padronização e suporte a auditorias.",
      "Treinamentos em boas práticas de TI e segurança da informação.",
    ],
  },
  {
    id: "algar",
    company: "Algar Tech",
    role: "Suporte Técnico",
    period: "Mai/2021 – Mai/2022",
    highlights: [
      "Suporte em telecomunicações, redes e atendimento remoto.",
      "Atendimento multicanal com foco em resolução rápida e documentação.",
      "Troubleshooting, escalonamento e registro de incidentes alinhados a ITIL.",
    ],
  },
] as const;
