export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location?: string;
  color: string;
  bullets: string[];
  tags: string[];
}

export const experience: Experience[] = [
  {
    company: "Tuttle Yick LLP",
    role: "Paralegal",
    startDate: "Sep 2025",
    endDate: "Present",
    location: "NYC",
    color: "#0015ff",
    bullets: [
      "Integrated AI into legal operations including drafting, redlining, research, and case analysis",
      "Built automated tracking systems for court dates and deadlines",
      "Synthesize complex legal data into actionable workflows",
      "Draft and negotiate license agreements and access documents",
      "Partner with senior stakeholders on timelines and deliverables",
    ],
    tags: ["Legal Operations", "AI Integration", "Data Analytics"],
  },
  {
    company: "Freelance",
    role: "Software Engineer",
    startDate: "Feb 2024",
    endDate: "Aug 2025",
    color: "#ff5941",
    bullets: [
      "Built full-stack applications including Split and Armoire",
      "Developed data dashboards for executive decision-making",
      "Integrated AI into client workflows to boost productivity",
      "Enhanced portfolio value 15%+ via data-driven investment strategies",
      "Led digital marketing overhauls resulting in +25% social engagement",
    ],
    tags: ["Full-Stack", "AI", "Data Analytics", "Marketing"],
  },
  {
    company: "EMBEE Consulting",
    role: "Investment Analyst / Marketing Intern",
    startDate: "Jan 2023",
    endDate: "May 2023",
    color: "#1f464d",
    bullets: [
      "Delivered data analysis solutions for C-suite executives",
      "Enhanced portfolio value 15%+ through data-driven strategies",
      "Led digital marketing strategy overhauls resulting in +25% engagement",
    ],
    tags: ["Data Analytics", "Marketing", "Investment"],
  },
  {
    company: "Frich Money",
    role: "Marketing & Data Intern",
    startDate: "Dec 2021",
    endDate: "May 2022",
    color: "#E794DA",
    bullets: [
      "Marketing data analysis and pitch decks driving 20% consumer engagement uplift",
      "Managed targeted marketing campaigns across channels",
      "Project-managed the highest-engagement photo shoot",
    ],
    tags: ["Marketing", "Data Analytics", "Startup"],
  },
  {
    company: "New Lab",
    role: "Data Analysis & Market Research Intern",
    startDate: "May 2020",
    endDate: "Aug 2021",
    color: "#f97316",
    bullets: [
      "Built automation solutions using Excel, Typeform, and Mailchimp, achieving 50% reduction in data processing time",
      "Mentored by CEO on tech incubation and venture capital strategy",
      "Built competitive analyses and KPI frameworks for portfolio companies",
    ],
    tags: ["Data Analytics", "Automation", "Startup"],
  },
];
