export type Certification = {
  id: string;
  name: string;
  issuer: string;
};

export const certifications: readonly Certification[] = [
  {
    id: "dio-cyber",
    name: "Cybersecurity Specialist",
    issuer: "Digital Innovation One",
  },
  {
    id: "fortinet-fund",
    name: "Fortinet Certified Fundamentals in Cybersecurity",
    issuer: "Fortinet",
  },
] as const;
