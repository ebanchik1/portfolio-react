export interface Education {
  institution: string;
  program: string;
  credential: string;
  year: string;
  description: string;
}

export const education: Education[] = [
  {
    institution: "NYU Gallatin School of Individualized Study",
    program: "Human Behavior (Business Technology, Psychology, Philosophy)",
    credential: "BA",
    year: "2019–2023",
    description:
      "Individualized concentration exploring the intersection of business technology, psychology, and philosophy.",
  },
  {
    institution: "Actualize Academy",
    program: "Full-Stack Web Development",
    credential: "Certificate",
    year: "2023–2024",
    description:
      "Intensive full-stack web development program covering Ruby on Rails, React, and modern software engineering practices.",
  },
  {
    institution: "Google / Coursera",
    program: "Google Data Analytics",
    credential: "Professional Certificate",
    year: "",
    description:
      "Professional certificate in data analytics covering data cleaning, analysis, visualization, and SQL.",
  },
  {
    institution: "Udemy",
    program: "Complete SQL Bootcamp",
    credential: "Certificate",
    year: "2024",
    description:
      "Comprehensive SQL bootcamp covering queries, joins, aggregations, and database management.",
  },
];
