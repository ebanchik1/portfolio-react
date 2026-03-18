export interface Education {
  institution: string;
  program: string;
  credential: string;
  year: string;
  description: string;
  color: string;
}

export const education: Education[] = [
  {
    institution: "NYU Gallatin School of Individualized Study",
    program: "Human Behavior (Business Technology, Psychology, Philosophy)",
    credential: "BA",
    year: "2019–2023",
    description:
      "Individualized concentration exploring the intersection of business technology, psychology, and philosophy.",
    color: "#6366f1",
  },
  {
    institution: "Actualize Academy",
    program: "Full-Stack Web Development",
    credential: "Certificate",
    year: "2023–2024",
    description:
      "Intensive full-stack web development program covering Ruby on Rails, React, and modern software engineering practices.",
    color: "#10b981",
  },
];
