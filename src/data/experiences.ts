export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  highlights: readonly string[];
};

export const experiences: readonly Experience[] = [
  {
    id: "per",
    company: "PER",
    role: "Product Builder",
    period: "Jun/2026 – Atual",
    highlights: [
      "Desenvolvimento backend com Java e Spring Boot: APIs REST, filas e processamento assíncrono em arquitetura em camadas.",
      "Engenharia de automação aplicada a processos e produtos internos.",
    ],
  },
  {
    id: "datasafe",
    company: "DataSafe Tecnologia Corporativa",
    role: "Analista de Suporte Técnico N1",
    period: "Jun/2025 – Jun/2026",
    highlights: [
      "Desenvolvimento de automações, scripts, integrações e soluções internas com React, JavaScript, Python e Rust.",
      "Redução de tarefas manuais e otimização de fluxos operacionais em ambiente corporativo.",
      "Consultas e organização de dados com PostgreSQL, MongoDB e DBeaver; apoio a integrações com AWS (SQS, EC2, IAM, RDS, S3).",
      "Código limpo e seguro, separação de responsabilidades, Git/GitHub e documentação técnica.",
    ],
  },
  {
    id: "sms",
    company: "Secretaria Municipal de Saúde de Ituiutaba",
    role: "Analista de Sistema e Infraestrutura",
    period: "Mai/2023 – Mai/2025",
    highlights: [
      "Administração dos sistemas da Secretaria, como gestão hospitalar e prontuário eletrônico.",
      "Suporte técnico a médicos, enfermeiros e equipes administrativas.",
      "Gestão de servidores, redes e dispositivos, com medidas de segurança para proteger dados de pacientes.",
      "Atualizações, manutenção preventiva, backups de dados críticos, documentação e relatórios técnicos.",
    ],
  },
  {
    id: "dio",
    company: "DIO",
    role: "DIO Campus Expert",
    period: "Out/2024 – Dez/2024",
    highlights: ["Participação no programa de formação e comunidade de tecnologia DIO Campus Expert."],
  },
  {
    id: "algar",
    company: "Algar Tech",
    role: "Suporte Técnico / Suporte ao Cliente",
    period: "Mai/2021 – Mai/2022",
    highlights: [
      "Diagnóstico e resolução de problemas de internet, telefonia e TV.",
      "Atendimento multicanal (telefone, e-mail e chat) e suporte remoto.",
      "Orientação a usuários e prevenção de falhas nos sistemas.",
    ],
  },
] as const;
