export const SITE_DATA = {
  name: "Erika Cristina Villa Quishpi",
  shortName: "Erika Villa",
  role: "Computer Science Engineer | Full Stack Developer",
  subtitle: "Focused on Software Development & Web Engineering",
  company: "ETIKOS",
  location: "Cuenca, Ecuador 🇪🇨",

  education: {
    university: "Universidad Politécnica Salesiana (UPS)",
    degree: "Ingeniería en Ciencias de la Computación",
    gpa: "90/100",
    status: "Graduada",
  },

  socials: {
    github: "https://github.com/Erika05cristina",
    linkedin: "https://www.linkedin.com/in/erika-villa-a63379120/",
    email: "erika05cristin@gmail.com",
  },

  currentFocus: {
    en: "Software Development Analyst at ETIKOS",
    es: "Analista de Desarrollo de Software en ETIKOS",
  },

  projects: [
    {
      id: "invisiclaim",
      title: "InvisiClaim",
      emoji: "🛡️",
      tech: ["Blockchain (Concepts)", "Cryptography", "Hashes"],
      status: "hackathon" as const,
      highlight: true,
      link: "https://invisi-claim.vercel.app/",
    },
    {
      id: "sybil",
      title: "Sybil",
      emoji: "🔍",
      tech: ["MCP", "TypeScript", "Notion API"],
      status: "hackathon" as const,
      highlight: true,
      link: "https://dev.to/erika_cristina15/sybil-real-time-risk-intelligence-2ebo",
    },
    {
      id: "volki",
      title: "VOLKI",
      emoji: "🤖",
      tech: ["Python", "Computer Vision", "NLP"],
      status: "research" as const,
      highlight: false,
    },
    {
      id: "trust",
      title: "T.R.U.S.T.",
      emoji: "🔐",
      tech: ["AI", "Security Basics", "EIP-8004"],
      status: "hackathon" as const,
      highlight: false,
      link: "https://en-krypt-trust-extension.vercel.app/",
    },
  ] as const,

skills: {
  core: [
    "JavaScript (ES6+)",
    "TypeScript", 
    "Node.js", 
    "Python", 
    "Full Stack Development"
  ],
  learning_now: [
    "DevSecOps", 
    "Digital Forensics", 
    "Web3 Fundamentals", 
    "Network Security",
    "Software Architecture", 
    "RESTful APIs", 
    "Clean Code & Best Practices", 
    "Database Optimization"
  ],
  tools: [
    "Docker",
    "Linux", 
    "Git", 
    "Notion API",
    "OpenCV",
    "PostgreSQL/NoSQL" 
  ],
},

  cyberLab: {
   paths: [
  { 
    id: "network", 
    progress: 50,
    status: "in-progress" as const, 
    tags: ["TCP/IP", "Wireshark", "Network Fundamentals"] 
  },
  { 
    id: "devsecops", 
    progress: 35, 
    status: "in-progress" as const, 
    tags: ["Docker", "Linux", "CI/CD Basics"] 
  },
  { 
    id: "web3", 
    progress: 30, 
    status: "in-progress" as const, 
    tags: ["Stellar Network", "Hashes", "Commit-Reveal Protocol"] 
  },
  { 
    id: "forensics", 
    progress: 20, 
    status: "in-progress" as const, 
    tags: ["Log Analysis", "Phishing Detection", "MCP Security"] 
  },
],
  },

  terminal: {
    prompt: "erika@learning-lab:~$",
  },
} as const;