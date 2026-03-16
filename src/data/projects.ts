export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  category: string;
  color: string;
  description: string;
  longDescription: string;
  features: string[];
  techStack: string[];
  challenges: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    slug: "scholarshipiq",
    title: "ScholarshipIQ",
    subtitle: "AI-Powered Law School Admissions & Scholarship Estimator",
    tags: ["AI", "React", "Claude API", "EdTech"],
    category: "AI",
    color: "#0015ff",
    description:
      "AI-powered admissions & scholarship estimator for 100+ ABA law schools.",
    longDescription:
      "An interactive web app with a React frontend and Claude API backend that helps prospective law students estimate their admissions chances and scholarship potential across 100+ ABA-accredited law schools.",
    features: [
      "Curated database of 100+ ABA-accredited law schools",
      "AI-powered recommendations engine",
      "Location and tuition filters",
      "Scholarship probability estimates",
      "Mobile responsive design",
    ],
    techStack: ["React", "Claude API", "Curated database"],
    challenges: [
      "Prompt sizing and token limit optimization",
      "Debugging the recommendations engine",
      "Ensuring mobile responsiveness across devices",
      "Scaling the database from 35 to 100+ schools",
    ],
    url: "https://scholarshipiqdeployed.vercel.app/",
  },
  {
    slug: "philosophia",
    title: "Philosophia",
    subtitle: "AI Chatbot for Philosophical Dialogue",
    tags: ["AI", "Chatbot", "NLP", "Philosophy"],
    category: "AI",
    color: "#E794DA",
    description: "AI chatbot for engaging in deep philosophical dialogue.",
    longDescription:
      "An AI-powered chatbot designed for meaningful philosophical dialogue spanning existentialism, stoicism, ethics, and metaphysics.",
    features: [
      "Conversational AI for philosophical topics",
      "Socratic questioning methodology",
      "Contextual multi-turn conversations",
      "References key thinkers and philosophical traditions",
    ],
    techStack: [
      "AI model with custom prompt engineering",
      "Conversation management system",
    ],
    challenges: [
      "Maintaining philosophical accuracy across diverse topics",
      "Preserving context in multi-turn conversations",
    ],
    url: "https://philosophia-indol.vercel.app/",
  },
  {
    slug: "etf-dashboard",
    title: "ETF Dashboard",
    subtitle: "Interactive Power BI Dashboard for Top ETFs",
    tags: ["Data Analytics", "Power BI", "Finance", "API"],
    category: "Data Analytics",
    color: "#1f464d",
    description:
      "Interactive Power BI dashboard for exploring top ETFs.",
    longDescription:
      "A beginner-friendly interactive Power BI dashboard built for friends and family to explore and understand top ETFs. Data sourced from Alpha Vantage API, ETF.com, and Morningstar, with three main data tables joined by the ETF field.",
    features: [
      "Line chart for performance trends",
      "Bar chart for comparative analysis",
      "KPI cards for key metrics",
      "Pie chart for allocation breakdown",
      "Slicer for dynamic filtering",
    ],
    techStack: ["Power BI", "Excel", "Alpha Vantage API"],
    challenges: [
      "Joining multiple data sources by ETF field",
      "Making complex financial data accessible to beginners",
      "Designing intuitive visual layouts",
    ],
  },
  {
    slug: "trends-in-thought",
    title: "Trends in Thought",
    subtitle: "Data-Driven Analysis of Philosophical Themes in Literature",
    tags: ["Data Analytics", "Cultural Analysis", "NLP", "Philosophy"],
    category: "Data Analytics",
    color: "#f97316",
    description:
      "Data-driven analysis of philosophical themes in literature over two centuries.",
    longDescription:
      "A data-driven exploration of philosophical themes in published literature over two centuries using Google Books Ngram Viewer. Phase 1 focused on existentialism-related terms, while Phase 2 expanded to compare entire schools of thought.",
    features: [
      "Phase 1: Existentialism term frequency analysis",
      "Phase 2: Schools of thought comparison",
      "Key observation: despair/anxiety rise post-2000",
      "Key observation: determinism leading in the 2020s",
      "Key observation: stoicism climbing steadily",
    ],
    techStack: ["Google Books Ngram Viewer", "Data analysis"],
    challenges: [
      "Normalizing data across two centuries of literature",
      "Interpreting cultural shifts from word frequency data",
      "Serving as the research precursor to Philosophia",
    ],
  },
  {
    slug: "techstars",
    title: "Techstars Startup Sprint",
    subtitle: "1st Place — Open Asphalt MVP at LMU",
    tags: ["Startup", "Product", "MVP", "1st Place"],
    category: "Startup",
    color: "#ff5941",
    description:
      "1st place at the 2023 Techstars Weekend Sprint at LMU.",
    longDescription:
      "Led a team to 1st place at the 2023 Techstars Weekend Sprint at LMU, building Open Asphalt — an Airbnb-for-parking MVP — in just 50 hours. Targeted the SoFi Stadium events market with a complete pitch, MVP, market research, and financial projections.",
    features: [
      "Full MVP built in 50 hours",
      "Targeted SoFi Stadium event parking",
      "Investor-ready pitch deck",
      "Market research and competitive analysis",
      "Financial projections and revenue model",
    ],
    techStack: ["MVP development", "Pitch design", "Market research"],
    challenges: [
      "Building a complete MVP in a 50-hour sprint",
      "Validating the market opportunity under time pressure",
      "Coordinating a cross-functional team on a tight deadline",
    ],
  },
  {
    slug: "split",
    title: "Split",
    subtitle: "iOS Fitness App for Customizable Workouts",
    tags: ["Full-Stack", "iOS", "Ruby on Rails", "Swift"],
    category: "Full-Stack",
    color: "#0015ff",
    description:
      "iOS fitness app for building and tracking customizable workouts.",
    longDescription:
      "A full-stack iOS fitness application that lets users create and track customizable workout routines. The backend is a Ruby on Rails RESTful API paired with a native Swift iOS frontend, featuring full CRUD operations, user authentication, real-time data updates, and multi-page architecture.",
    features: [
      "Full CRUD operations for workouts",
      "User authentication",
      "Real-time data updates",
      "Multi-page architecture",
      "Customizable workout routines",
    ],
    techStack: ["Ruby on Rails", "Swift", "RESTful API"],
    challenges: [
      "Bridging Rails backend with native Swift frontend",
      "Implementing real-time data synchronization",
      "Designing an intuitive multi-page mobile experience",
    ],
  },
  {
    slug: "armoire",
    title: "Armoire",
    subtitle: "Capstone Wardrobe Management App",
    tags: ["Full-Stack", "React", "Flask", "TypeScript", "Capstone"],
    category: "Full-Stack",
    color: "#E794DA",
    description:
      "Capstone wardrobe management app for logging, organizing, and filtering clothing.",
    longDescription:
      "A capstone wardrobe management application where users can log, organize, filter, and sort their clothing items. Built with a Flask RESTful API backend following MVC architecture and a React + TypeScript + Bootstrap frontend, secured with JWT authentication and full CRUD functionality.",
    features: [
      "Full CRUD for wardrobe items",
      "Filter and sort clothing",
      "JWT authentication",
      "Responsive Bootstrap UI",
      "MVC backend architecture",
    ],
    techStack: ["React", "TypeScript", "Flask", "Bootstrap", "JWT"],
    challenges: [
      "Implementing robust filtering and sorting logic",
      "Integrating JWT auth across Flask and React",
      "Building a polished capstone project end-to-end",
    ],
  },
];
