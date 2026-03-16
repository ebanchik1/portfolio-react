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
  featuresHeading?: string;
  techStack: string[];
  challenges: string[];
  url?: string;
  process?: {
    overview?: string;
    sections: {
      heading: string;
      content: string[];
      embeds?: string[];
      table?: { headers: string[]; rows: string[][] };
    }[];
  };
  embedUrl?: string;
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
      "I've always been into investing as a hobby, and over time, friends and family started coming to me with the classic question: \"How do I start investing?\" After seeing some of my wins (and hearing me go on about ETFs more times than they probably wanted), they got curious. My go-to advice? \"Just throw some money into a few solid ETFs and forget about it.\" But then came the follow-up: \"Wait... what's an ETF?\" Instead of giving the same spiel over and over, I decided to build this beginner-friendly dashboard. It's an interactive way for people to explore what ETFs are, how they work, and how they differ — without me turning into a full-time financial advisor at family dinners. Built with Microsoft Excel, Power BI, and a little help from ChatGPT (aka my unpaid intern).",
    features: [
      "Line chart: Daily ETF price trends over time",
      "Bar chart: Side-by-side comparison of expense ratios and volatility",
      "KPI cards: 1Y, 3Y, and 5Y returns + beta for selected ETF",
      "Pie chart: Dynamic sector allocation that changes with ETF selection",
      "Slicer: Dropdown to select and compare ETFs across all visuals",
    ],
    techStack: ["Power BI", "Excel / Google Sheets", "Alpha Vantage API", "ETF.com", "Morningstar"],
    challenges: [
      "Joining multiple data sources by ETF field",
      "Making complex financial data accessible to beginners",
      "Cleaning and normalizing percentage values for accurate aggregation",
      "Designing intuitive visual layouts",
    ],
    process: {
      overview:
        "The finished dashboard provides a streamlined, visual comparison of five widely held ETFs (SPY, QQQ, VTI, ARKK, VNQ), highlighting how they differ in cost, performance, risk, and sector exposure.",
      sections: [
        {
          heading: "Data Sources",
          content: [
            "Price History Data — sourced from the Alpha Vantage API, pulling daily adjusted closing prices for SPY, QQQ, VTI, ARKK, and VNQ.",
            "Performance & Risk Metrics — collected from ETF.com and Morningstar, including 1-Year, 3-Year, and 5-Year Return (%), Expense Ratio (%), Volatility (% Standard Deviation), and Beta.",
            "Sector Allocation Data — manually compiled from ETF.com and Morningstar, covering sector weightings (Technology, Healthcare, Financials, etc.) for each ETF.",
          ],
        },
        {
          heading: "Data Modeling & Structure",
          content: [
            "etf_prices.csv — daily price data (Date, ETF Ticker, Adjusted Close Price), used for line chart visualization.",
            "etf_metrics.csv — snapshot of each ETF's key performance and risk metrics, used for KPI cards and bar charts.",
            "etf_sector_allocations.csv — sector weights within each ETF, used for pie chart visualization.",
          ],
        },
        {
          heading: "Relationships",
          content: [
            "In Power BI, one-to-many relationships were created between the etf_metrics table and the two other tables using the ETF column. This allows the ETF slicer to control all visuals seamlessly.",
            "etf_metrics[ETF] → etf_prices[ETF]",
            "etf_metrics[ETF] → etf_sector_allocations[ETF]",
          ],
        },
        {
          heading: "Calculations & Visuals",
          content: [
            "All percentage values were cleaned and normalized (e.g., \"12.4%\" → 0.124) for accurate aggregation and visualization.",
            "Line chart uses non-summarized average of Adjusted Close for daily price trends.",
            "Bar chart enables side-by-side comparison of expense ratios and volatility.",
            "KPI cards display 1Y, 3Y, and 5Y returns plus beta for the selected ETF.",
            "Pie chart dynamically updates sector allocation based on ETF selection.",
          ],
        },
      ],
    },
    embedUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiY2FjOGI5YWMtZjhhYy00NGExLWI4MWYtMGE4N2UyODIyMjhhIiwidCI6IjdkMTgwMTU5LTNkMWUtNDIwYy1iODNiLTQ3ZmUxYWZkYzZlMiIsImMiOjJ9",
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
      "This in-progress project blends my passion for philosophy with my growing experience in data analytics. I'm using historical literary data from the Google Books Ngram Viewer to track how philosophical concepts like \"existentialism,\" \"stoicism,\" \"freedom,\" and \"truth\" have appeared in published books over the past two centuries. The goal is to visualize how ideas rise and fall over time, and to tell a story about how culture and thought evolve — not just with words, but with data. This project is part of my effort to merge personal interests with professional skills, showing how data analysis can be applied beyond finance or business, into the humanities and personal curiosity.",
    features: [
      "Which philosophical movements have gained or lost cultural attention over time — and what does that suggest about society's shifting values?",
      "What historical events (wars, cultural shifts, economic crises) correspond with spikes or declines in existential themes?",
      "How have core existentialist concepts like \"freedom,\" \"meaning,\" and \"anxiety\" evolved in literature over the past two centuries?",
      "Are we moving toward a more emotionally grounded, practical worldview — or away from deeper philosophical inquiry?",
      "Can data help us uncover patterns in how we collectively search for meaning, cope with despair, or reframe identity over time?",
    ],
    featuresHeading: "Key Questions",
    techStack: ["Google Books Ngram Viewer", "Data analysis", "Cultural research"],
    challenges: [
      "No access to raw data from Ngram Viewer results — limited to visual output",
      "Normalizing data across two centuries of literature",
      "Interpreting cultural shifts from word frequency data without overfitting narratives",
      "Serving as the research precursor to the Philosophia chatbot",
    ],
    process: {
      overview:
        "The project unfolds in two phases: Phase 1 zeroes in on existentialism — charting how key terms have entered and exited the cultural zeitgeist. Phase 2 zooms out to compare existentialism against other major schools of thought across the same 200+ year timeline.",
      sections: [
        {
          heading: "Phase 1: Existentialism",
          content: [
            "Being my brand of choice, I started by charting how existentialist concepts and key terms have entered and exited the zeitgeist using Google's Ngram Viewer over 200+ years.",
            "Terms tracked: existence, freedom, absurd, alienation, anxiety, despair, death, meaning, authenticity, choice, subjectivity.",
            "I separated them into two charts to reduce clutter — the most popular terms from the rest so the chart isn't skewed and less popular terms remain legible.",
          ],
          embeds: [
            "https://books.google.com/ngrams/interactive_chart?content=absurd,alienation,despair,authenticity,subjectivity&year_start=1800&year_end=2022&case_insensitive=true&corpus=en&smoothing=1",
            "https://books.google.com/ngrams/interactive_chart?content=existence,freedom,meaning,anxiety,existence&year_start=1800&year_end=2022&case_insensitive=true&corpus=en&smoothing=1",
          ],
        },
        {
          heading: "Phase 1 Observations",
          content: [
            "Despair has a massive rise post-2000 — reflecting growing mental health awareness, the rise of the Internet, and cultural pessimism (post-9/11, financial crisis anxieties).",
            "Absurd, subjectivity, and authenticity begin rising around the 1950s–60s, aligned with postwar existentialism and civil rights movements — and modern French Existentialism (Sartre, Camus, de Beauvoir).",
            "Alienation rises again in the 1980s–2000s, possibly reflecting increasing disconnection in a tech-driven society (video games, personal computers).",
            "Meaning climbs sharply after WWII with another surge in the 1970s–80s, accelerating after 2000 — tied to rising secularism, therapy culture, and personal development discourse.",
            "Anxiety has a sharp, continuous rise from the 1980s onward — reflecting increased discussion of mental health and the modern condition.",
            "In the 70s and 80s there were acute rises in the word \"meaning\" which could correlate with the introduction of certain technology. However, it did not correlate with an increase in despair. That only begins entering the 21st century — implying we are deprived of meaning, now in conjunction with anxiety (not a good combo). This paints a highly negative outlook on society and a demand for literature that addresses it.",
          ],
        },
        {
          heading: "Phase 1 Historical Context",
          content: [],
          table: {
            headers: ["Year / Period", "Possible Influences"],
            rows: [
              ["1800s", "Romanticism, Industrial Revolution — personal/emotional concepts begin emerging"],
              ["WWI (1914–1918)", "Rise of disillusionment, existential dread, loss of meaning"],
              ["Post-WWII (1945+)", "Global trauma + rebuilding → boom in existentialism (Sartre, Camus, etc.)"],
              ["1960s–70s", "Civil rights, Cold War, counterculture → rise in freedom, authenticity, subjectivity"],
              ["Post-9/11 (2001)", "Global anxiety, surveillance, war on terror → spikes in despair, anxiety, meaning"],
              ["2008–2020", "Financial crisis, climate anxiety, social media, pandemic → sharp rise in despair, anxiety, search for meaning"],
            ],
          },
        },
        {
          heading: "Phase 2: Philosophical Context",
          content: [
            "Having examined existentialism in isolation, Phase 2 compares it against other major schools of thought across the same timeline.",
          ],
          table: {
            headers: ["Philosophy", "Notes", "Key Figures"],
            rows: [
              ["Existentialism", "Focuses on individual freedom, meaning, and responsibility in an often irrational or meaningless world.", "Jean-Paul Sartre, Simone de Beauvoir, Albert Camus, Martin Heidegger, Søren Kierkegaard, Friedrich Nietzsche"],
              ["Pragmatism", "An American philosophical response focused on practicality", "Charles Sanders Peirce, William James, John Dewey, Richard Rorty, Hilary Putnam"],
              ["Postmodernism", "Often seen as successor or challenger to existentialism", "Jean-François Lyotard, Michel Foucault, Jacques Derrida, Jean Baudrillard, Richard Rorty"],
              ["Absurdism", "Close cousin of existentialism — could compare or contrast", "Albert Camus, Eugène Ionesco, Samuel Beckett, Jean Genet"],
              ["Utilitarianism", "Ethical theory focused on outcomes over experience", "Jeremy Bentham, John Stuart Mill, Henry Sidgwick, Peter Singer"],
              ["Determinism", "Opposes existentialism's emphasis on freedom/choice", "Baruch Spinoza, Pierre-Simon Laplace, Clarence Darrow, B.F. Skinner, Daniel Dennett"],
              ["Nihilism", "Often contrasted with existentialism's hope through meaning", "Friedrich Nietzsche, Arthur Schopenhauer, Jean Baudrillard, Emil Cioran, Michel Onfray"],
              ["Stoicism", "Ancient, revived during modern wellness movement (esp. 2010s)", "Marcus Aurelius, Seneca, Epictetus, Zeno of Citium, Ryan Holiday, Massimo Pigliucci"],
            ],
          },
          embeds: [
            "https://books.google.com/ngrams/interactive_chart?content=existentialism,+stoicism,+nihilism,+determinism,+utilitarianism,+absurdism,+postmodernism,+pragmatism&year_start=1800&year_end=2022&corpus=en&smoothing=1",
          ],
        },
        {
          heading: "Phase 2 Observations",
          content: [
            "Determinism is leading in the 2020s — reflecting growing interest in neuroscience, behavioral science, algorithms, and simulation theory.",
            "Pragmatism has surged, signaling a cultural shift toward practical, outcome-oriented thinking — driven by startup culture, self-help, and real-world problem-solving.",
            "Stoicism is climbing steadily, thanks to its modern revival in wellness, productivity, and mental toughness spaces (Ryan Holiday, Tim Ferriss fans).",
            "Existentialism and Postmodernism have declined since their peaks — a potential sign of disillusionment with purely abstract or identity-centric philosophies in favor of frameworks that offer control or clarity.",
            "Postmodernism peaked around 2000–2010 then declined — possibly reflecting backlash against relativism and a move toward fact-checking culture and science-based approaches.",
          ],
        },
        {
          heading: "Crossover Moments",
          content: [
            "Pragmatism overtakes Existentialism (late 2000s–early 2010s) — reflecting the rise of tech culture, entrepreneurship, and self-help where the emphasis is on what works, not what it means.",
            "Determinism overtakes Existentialism (2010s) — reflecting the mainstreaming of neuroscience, algorithms, and data-driven understanding of behavior. Echoes the growing belief that actions are shaped more by systems than pure individual freedom.",
            "Stoicism overtakes Absurdism (2000s) — signaling a cultural pivot from embracing chaos to managing emotion and discipline, fueled by social media fatigue, productivity culture, and a desire for resilience.",
          ],
        },
        {
          heading: "Phase 2 Historical Context",
          content: [],
          table: {
            headers: ["Period", "Possible Influences"],
            rows: [
              ["2020s", "Stoicism resurges with wellness, self-help, and burnout culture"],
              ["2010s - 2020s", "Rise of tech, psychology, and data science --> determinism gains steam"],
              ["2008 - 2010s", "Financial crisis --> interest in stability, practicality (pragmatism, stoicism)"],
              ["1990s - 2000s", "Postmodernism thrives amid identity discourse, globalization, media fragmentation"],
            ],
          },
        },
        {
          heading: "What Does It Mean?",
          content: [
            "We seem to be in a cultural moment that prioritizes structure, control, and results: Pragmatism and determinism offer certainty and efficiency. Stoicism offers emotional regulation and resilience. Meanwhile, existential wandering and postmodern skepticism are fading — perhaps because people want answers and systems, not ambiguity.",
            "Is this true for me? No. But it is interesting to see where everyone else's head is at. I would argue because of all of these oppressing external factors, it is more important than ever to delve into topics like existentialism and metaphysics. To engage with the abstract and get comfortable with the ambiguous nature of it all. In my experience, it is freeing and empowering, strengthening the psyche (after an existential crisis or two).",
          ],
        },
      ],
    },
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
