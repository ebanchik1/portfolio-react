export interface SkillCategory {
  name: string;
  tools: string[];
}

export const skills: SkillCategory[] = [
  {
    name: "AI & Automation",
    tools: [
      "Claude API",
      "Prompt engineering",
      "AI workflow design",
      "LLM integration",
      "Conversational AI",
      "AI-assisted content and research",
    ],
  },
  {
    name: "Development",
    tools: [
      "React",
      "Python",
      "Ruby on Rails",
      "Swift",
      "Flask",
      "JavaScript",
      "TypeScript",
      "HTML/CSS",
      "Bootstrap",
    ],
  },
  {
    name: "Data & Analytics",
    tools: [
      "SQL",
      "Power BI",
      "Tableau",
      "Excel",
      "Google Analytics",
      "Alpha Vantage API",
      "Data modeling",
      "KPI frameworks",
    ],
  },
  {
    name: "Marketing",
    tools: [
      "Campaign strategy",
      "Data-driven marketing",
      "Pitch decks",
      "Competitive analysis",
      "Market research",
      "Social media analytics",
    ],
  },
  {
    name: "Legal Operations",
    tools: [
      "Document drafting and redlining",
      "Case management",
      "NYSCEF",
      "Compliance tracking",
      "AI-augmented legal research",
    ],
  },
  {
    name: "Product",
    tools: [
      "MVP development",
      "User research",
      "Market validation",
      "Startup operations",
    ],
  },
];
