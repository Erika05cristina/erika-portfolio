export const SITE_DATA = {
  name: "Erika Cristina Villa Quishpi",
  shortName: "Erika Villa",
  role: "Computer Science Engineer | Full Stack Developer",
  // Reflejamos que estás en transición, no que ya eres experta
  subtitle: "Building Full Stack Solutions → Learning DevSecOps & Security",
  company: "InitGrammers S.A.S.",
  location: "Cuenca, Ecuador 🇪🇨",

  education: {
    university: "Universidad Politécnica Salesiana (UPS)",
    degree: "Ingeniería en Ciencias de la Computación",
    gpa: "90/100",
    status: "Graduada",
  },

  achievements: [
    { icon: "🏆", label: "2do Lugar", detail: "Latin Hack - Proyecto InvisiClaim" },
    { icon: "🔬", label: "Investigadora", detail: "Cátedra UNESCO - Proyecto VOLKI" },
    { icon: "🎤", label: "Expositora", detail: "2do Congreso Int. Tecnologías Disruptivas" },
    { icon: "✨", label: "Mentora STEM", detail: "STEMHER - CODEIS" },
  ],

  // Cambiamos "Experta" por "Enfoque de Aprendizaje"
  currentFocus: "En transición hacia Ciberseguridad y profundizando en Web3",

  projects: [
    {
      id: "invisiclaim",
      title: "InvisiClaim",
      emoji: "🛡️",
      tagline: "Exploración de autoría con Blockchain",
      description:
        "Proyecto de hackathon centrado en la protección de autoría digital. Implementé lógica de hashes y el protocolo commit-reveal para asegurar contenido de forma privada.",
      tech: ["Blockchain (Conceptos)", "Cryptography", "Hashes"],
      status: "Hackathon Project",
      highlight: true,
    },
    {
      id: "sybil",
      title: "Sybil",
      emoji: "🔍",
      tagline: "Sentinel de Riesgos con MCP",
      description:
        "Desarrollo de un servidor de inteligencia de riesgo que utiliza el protocolo MCP para auditar bases de datos en Notion, detectando conflictos en tiempo real.",
      tech: ["MCP", "TypeScript", "Notion API"],
      status: "Active Development",
      highlight: true,
    },
    {
      id: "volki",
      title: "VOLKI",
      emoji: "🤖",
      tagline: "Asistente Robótico (Investigación)",
      description:
        "Implementación de modelos de visión computacional y lenguaje para la interacción humano-máquina, desarrollado bajo la Cátedra UNESCO.",
      tech: ["Python", "Computer Vision", "NLP"],
      status: "Research",
      highlight: false,
    },
    {
      id: "trust",
      title: "T.R.U.S.T.",
      emoji: "🔐",
      tagline: "Detección de Phishing (Hackathon)",
      description:
        "Diseño de un agente para detectar suplantación de identidad basado en el estándar EIP-8004 durante la Aleph Hackathon.",
      tech: ["AI", "Security Basics", "EIP-8004"],
      status: "Hackathon Concept",
      highlight: false,
    },
  ] as const,

  skills: {
    core: ["TypeScript", "Node.js", "Python", "Full Stack Development"],
    learning_now: ["DevSecOps", "Forense Digital", "Web3 Fundamentals", "Network Security"],
    tools: ["Docker", "Linux", "Git", "Notion API", "OpenCV"],
  },

  certifications: [
    "Fundamentos de Redes y Comunicaciones",
    "Ciberseguridad: Protege tu información",
    "ML Solutions on Vertex AI (Skill Badge)",
    "Salvaguardia y Protección de la Niñez (UNICEF)",
    "Introducción a Web3 - Red Stellar (Código Futura)",
  ],

  impact: {
    stem: "Voluntariado en STEMHER para motivar a más mujeres en ingeniería.",
    comunidad: "Ponente sobre robótica educativa e IA ética.",
  },

  terminal: {
    prompt: "erika@learning-lab:~$",
    welcomeMessage: [
      "╔══════════════════════════════════════════════╗",
      "║    ERIKA VILLA | FULL STACK DEVELOPER        ║",
      "║    Currently learning Security & Web3        ║",
      "╚══════════════════════════════════════════════╝",
      "Type 'help' to see my learning path and projects.",
    ],
  },
} as const;