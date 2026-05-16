export const WORKS = [
  {
    slug: "lattice",
    idx: "01",
    title: "Lattice",
    italic: "design system",
    role: "Lead UI · Design Systems",
    year: "2025",
    tag: "Fintech",
    client: "Lattice Financial",
    sector: "Financial Infrastructure",
    services: "Design System · Product UI · Documentation",
    tagline:
      "A token-driven design system unifying 14 product surfaces — from compliance tooling to consumer dashboards.",
    overview:
      "Lattice had grown from a single product to fourteen in under three years. Components were forked across teams, tokens were hardcoded, and engineers had stopped trusting the design files. We rebuilt the system from primitives upward — a tokenized source of truth that engineering could consume directly.",
    problem:
      "Forty-seven different button implementations. Six color palettes that nobody could explain. Designers shipping Figma libraries that engineers re-implemented from scratch.",
    approach:
      "Strip everything back to primitives — color, space, type, motion — and rebuild the component library on top. Treat tokens as code first, design second. Co-locate documentation with examples that engineers could copy-paste.",
    quote:
      "We stopped designing components. We started designing the system that designs components.",
    stats: [
      { label: "Components", value: "84" },
      { label: "Surfaces", value: "14" },
      { label: "Handoff time", value: "−40%" },
      { label: "Token coverage", value: "100%" },
    ],
  },
  {
    slug: "helio-health",
    idx: "02",
    title: "Helio Health",
    italic: "patient portal",
    role: "Senior UI Designer",
    year: "2024",
    tag: "Healthcare",
    client: "Helio Health, SG",
    sector: "Healthcare",
    services: "Product Design · Information Design",
    tagline:
      "Redesigning the clinician-facing portal of Southeast Asia's largest digital health network.",
    overview:
      "Helio's clinician portal was twelve years old and showed it. Doctors were spending more time fighting the interface than reading patient charts. We rebuilt the core workflows around the act of clinical reasoning — not data entry.",
    problem:
      "The legacy portal averaged 47 clicks for a routine consult. Clinicians kept paper notebooks because they were faster than the software.",
    approach:
      "Shadow twelve clinicians for two weeks. Strip the consult flow down to the three decisions a doctor actually makes. Make the portal disappear when the patient is in the room.",
    quote:
      "The best healthcare software is software a clinician forgets is there.",
    stats: [
      { label: "Task completion", value: "+28%" },
      { label: "Avg clicks/consult", value: "−61%" },
      { label: "Support tickets", value: "−44%" },
      { label: "NPS", value: "+38" },
    ],
  },
  {
    slug: "north-atlas",
    idx: "03",
    title: "North Atlas",
    italic: "trading desk",
    role: "Product Designer",
    year: "2024",
    tag: "Enterprise",
    client: "North Atlas Capital",
    sector: "Capital Markets",
    services: "Product Design · Data Visualization",
    tagline:
      "An institutional trading desk built for density, speed, and the keyboard.",
    overview:
      "North Atlas trades across nine asset classes and twenty venues. Their existing desk was a forest of windows and a museum of inherited UI patterns. We rebuilt it around one principle: the trader's hands should never leave the keyboard.",
    problem:
      "Traders had three monitors, fourteen windows, and zero confidence the data on screen was current. Mouse latency was costing real money.",
    approach:
      "Command-palette-first interaction. A single grid that adapts to instrument, strategy and risk view. Every action keyboard-accessible. Color carries one meaning only: direction.",
    quote: "If you have to look for it, we've already lost.",
    stats: [
      { label: "Avg trade latency", value: "−72%" },
      { label: "Keyboard coverage", value: "100%" },
      { label: "Active windows", value: "1 (was 14)" },
      { label: "Trader adoption", value: "9/9 desks" },
    ],
  },
  {
    slug: "folio",
    idx: "04",
    title: "Folio",
    italic: "writing OS",
    role: "Founding Designer",
    year: "2023",
    tag: "Productivity",
    client: "Folio (YC W23)",
    sector: "Productivity",
    services: "Brand · Product · Marketing",
    tagline:
      "A writing environment for people who care about the shape of a sentence.",
    overview:
      "Folio is what happens when you let writers, not engineers, decide what a text editor should feel like. As founding designer I shaped everything from the typesetting engine to the cursor blink.",
    problem:
      "Every modern writing app is a Notion clone. Writers wanted something that felt closer to a piece of paper than a database.",
    approach:
      "Treat typography as the product. Treat plugins as a sin. Build a typesetting engine with the same care a foundry brings to a typeface release. Ship slowly.",
    quote: "The cursor is a piece of UI. Treat it like one.",
    stats: [
      { label: "Waitlist", value: "21,400" },
      { label: "DAU/MAU", value: "0.71" },
      { label: "Avg session", value: "47 min" },
      { label: "Cancel rate", value: "1.9%" },
    ],
  },
  {
    slug: "quanta",
    idx: "05",
    title: "Quanta",
    italic: "data canvas",
    role: "Senior UI Designer",
    year: "2022",
    tag: "Analytics",
    client: "Quanta Labs",
    sector: "Data & Analytics",
    services: "Product UI · Interaction · Motion",
    tagline:
      "An infinite-canvas analytics tool where queries, charts, and notes share one surface.",
    overview:
      "Most BI tools force you to choose: notebook, dashboard, or query editor. Quanta lets analysts work the way they think — non-linearly, on a single canvas where every artifact is alive.",
    problem:
      "Analysts were context-switching between five tools to do one piece of work. By the time the deck shipped, the underlying query was already out of date.",
    approach:
      "One canvas. Every block is queryable, draggable, and re-runnable. Charts re-render live as the data refreshes. Notes live next to the charts they describe.",
    quote: "We didn't build a dashboard. We built a thinking surface.",
    stats: [
      { label: "Tool consolidation", value: "5 → 1" },
      { label: "Time to insight", value: "−54%" },
      { label: "Canvases shipped", value: "12k+" },
      { label: "Avg query reuse", value: "8.3x" },
    ],
  },
  {
    slug: "sundial",
    idx: "06",
    title: "Sundial",
    italic: "calendar reimagined",
    role: "UI · Brand",
    year: "2022",
    tag: "Concept",
    client: "Self-initiated",
    sector: "Concept · Speculative",
    services: "Brand · UI · Motion",
    tagline:
      "A speculative calendar concept that treats time as material, not a grid.",
    overview:
      "Sundial began as a question: what if a calendar app didn't look like a spreadsheet? An exploration in treating the day as a flowing object rather than a stack of 30-minute boxes.",
    problem:
      "Every calendar app on the market inherits the same metaphor from 1995 Outlook. We've forgotten there are other ways to see a week.",
    approach:
      "Sketch wide. Build the prettiest demo we can. Treat the surface as a soft material — events flow, stretch, and ease. Color, not lines, demarcates time.",
    quote: "Time is a feeling before it's a grid.",
    stats: [
      { label: "Concept shipped", value: "v0.3" },
      { label: "Press features", value: "11" },
      { label: "Awwwards", value: "SOTD" },
      { label: "Open-source forks", value: "340" },
    ],
  },
];

export const SKILLS = [
  "Design Systems",
  "Interaction Design",
  "Prototyping",
  "Component Engineering",
  "Typography",
  "Information Design",
  "Motion",
  "Accessibility",
];
