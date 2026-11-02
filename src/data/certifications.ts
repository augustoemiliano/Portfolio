export type Certification = {
  id: string;
  name: string;
  issuer: string;
  date: string;
};

export const certifications: readonly Certification[] = [
  {
    id: "fortinet-fund",
    name: "Fortinet Certified Fundamentals in Cybersecurity",
    issuer: "Fortinet",
    date: "Nov/2025 · válida até Nov/2027",
  },
  {
    id: "fortinet-threat",
    name: "Introduction to the Threat Landscape 3.0",
    issuer: "Fortinet",
    date: "Out/2025",
  },
  {
    id: "dio-cyber",
    name: "Formação Cybersecurity Specialist",
    issuer: "DIO",
    date: "Out/2025",
  },
  {
    id: "google-it",
    name: "Suporte em TI do Google",
    issuer: "Cresça com o Google",
    date: "Set/2024",
  },
] as const;
