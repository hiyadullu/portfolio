/**
 * ============================================================
 *  src/content.js  –  ALL editable content lives here.
 *
 *  Replace every [PLACEHOLDER] with your real data.
 *  Components import from this file; you should never need
 *  to edit any component to update your portfolio content.
 * ============================================================
 */

/* ── Brand / Navbar ─────────────────────────────────────────── */
export const brand = {
  name: "HIYA",
  accent: "✦",          // decorative symbol between first & last
  surname: "DULLU",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "More", href: "#more" },
];

/* ── Hero / Home ────────────────────────────────────────────── */
export const hero = {
  stickerText: "Hey there!",
  headlineParts: [
    { text: "<Creating with ", pink: false },
    { text: "purpose>", pink: true },
    { text: "\n welcome to my website ! \n know a lil more about me~", pink: false },
  ],
  intro:
    "Final year CSE student at VIT ,building data engineering, machine learning and full-stack products.",
  ctaPrimary: { label: "Learn more", href: "#about" },
  ctaSecondary: { label: "Download Resume", href: "/hiyadullu_resume_nov_.pdf" },
  photoUrl: "/portolio%20image.png",
  photoAlt: "Portrait of Hiya Dullu",
};

/* ── Marquee Band ───────────────────────────────────────────── */
export const marqueeItems = [
  "Software Engineering",
  "Data Engineering",
  "Machine Learning",
  "Backend Systems",
];

/* ── About ──────────────────────────────────────────────────── */
export const about = {
  headingBefore: "About",
  headingPink: "Me",
  headingAfter: "",
  bio: [
    "I'm Hiya Dullu, a B.Tech student in Computer Science & Engineering at Vellore Institute of Technology (2023–2027). ",
    "My interests span machine learning, data engineering and backend systems. I am also interested in product management and system design.",
  ],
  contact: {
    email: "hiyadullu05@gmail.com",
    location: "Noida, India",
    linkedin: "https://www.linkedin.com/in/hiyadullu",
    github: "https://github.com/hiyadullu",
    resume: "resume-nov",
  },
};

/* ── Projects ───────────────────────────────────────────────── */
export const projects = [
  {
    title: "OffSet – Offline Payment System",
    description:
      "Hybrid fraud detection combining deterministic offline-payment constraints with behavioural anomaly detection, to catch suspicious transactions within predefined limits. Features: user-relative transaction, temporal, frequency, spending-deviation, offline-usage and device-consistency. Evaluated supervised and unsupervised models.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "FastAPI"],
    repoLink: "[https://github.com/AanyaSingh-s/OffSet]",
  },
  {
    title: "QR-Enabled Digital POS & Ledger Management",
    description:
      "Modular restaurant management platform with POS, QR-based customer ordering, admin dashboards and automated onboarding. REST APIs with Node.js and Express, PostgreSQL, Passport.js auth, dynamic QR menus, automated deployment notifications and admin-controlled onboarding.",
    stack: ["Node.js", "Express", "PostgreSQL", "EJS"],
    liveLink: "[https://github.com/hiyadullu/QR-Enabled-Digital-POS-and-Ledger-Management-System]",
    repoLink: "[https://quickserve-xq4x.onrender.com/]",
  },
];

/* ── Skills & Certifications ────────────────────────────────── */
export const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "Java", "SQL"],
  },
  {
    category: "Technologies",
    items: [
      "FastAPI", "PySpark", "Scikit-Learn", "OpenCV", "LLM", "RAG",
      "PostgreSQL", "MySQL", "Docker", "AWS (EC2, S3, IAM)",
      "CI/CD (GitHub Actions)", "Git", "Linux",
    ],
  },
  {
    category: "Concepts",
    items: [
      "DSA", "OOP", "DBMS", "OS", "RESTful APIs",
      "Machine Learning", "Data Analysis",
    ],
  },
];

export const certifications = [
  {
    title: "Python Pro Bootcamp",
    issuer: "Udemy",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-73f6910d-05f7-4a0d-9abf-d77c9542fd35.jpg",
  },
  {
    title: "Exploring SAP Analytics Cloud",
    issuer: "SAP",
    link: "https://badger.learning.sap.com/verify/xygyr-lytag-vorev-voloc-kyvut",
  },
  {
    title: "IBM Generative AI",
    issuer: "IBM",
    link: "https://courses.vit.skillsnetwork.site/certificates/e73ea958a3b44ab4860119b5218f28b3",
  },
];

/* ── Experience ─────────────────────────────────────────────── */
export const experiences = [
  {
    company: "Thales Group",
    role: "Summer Intern",
    department: "HSM Payment Department",
    location: "Noida, India",
    period: "May 2026 – June 2026",
    bullets: [
      "Designed an unsupervised anomaly detection pipeline for payment fraud across transaction feature embeddings, improving fraud recall to 85% in internal benchmarking.",
      "Integrated a local Mistral LLM via Ollama REST APIs to generate interpretable forensic summaries for anomalous transactions, reducing manual investigation effort.",
      "Built an interactive dashboard with real-time risk KPIs, live variance-distribution scatterplots and automated audit logging; contributed to modular backend development and low-latency inference workflows with a cross-functional team.",
    ],
  },
];

/* ── More About Me ──────────────────────────────────────────── */
export const moreAbout = {
  research: {
    title: "Research & Publication",
    text: "IEEE conference paper — Cardiovascular Disease Prognosis Using Ensemble Machine Learning.",
    link: "https://ieeexplore.ieee.org/document/11507204",
    linkLabel: "Read the paper →",
  },
  positions: [
    {
      role: "General Secretary",
      org: "Software Development Club",
      description:
        "Managed logistics and operations for technical events and workshops, coordinated cross-functional teams, built backend components for the club website.",
    },
    {
      role: "R&D Department Lead",
      org: "Android Club",
      description:
        "Led technical content strategy for workshops, curated materials on Android backend development.",
    },
  ],
};

/* ── Footer ─────────────────────────────────────────────────── */
export const footer = {
  socials: {
    linkedin: "https://www.linkedin.com/in/hiyadullu",
    github: "https://github.com/hiyadullu",
    email: "hiyadullu05@gmail.com",
  },
  copyright: "© 2026 Hiya Dullu",
};
