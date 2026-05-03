export type Lang = "en" | "es";

export const translations = {
  en: {
    // ── Navbar ──────────────────────────────────────────────────
    nav: {
      projects: "Projects",
      skills: "Skills",
      cyberLab: "Cyber-Lab",
      terminal: "Terminal",
      hireMeCta: "Hire Me ↗",
    },

    // ── Hero ────────────────────────────────────────────────────
    hero: {
      eyebrow: "DevSecOps Trainee | Software Developer",
      currentlyAt: "Currently at",
      viewProjects: "View Projects",
      github: "GitHub ↗",
    },

    // ── Achievements ────────────────────────────────────────────
    achievements: [
      { label: "2nd Place", detail: "Latin Hack — InvisiClaim Project" },
      { label: "Researcher", detail: "UNESCO Chair — VOLKI Project" },
      { label: "Speaker", detail: "2nd Int. Congress Disruptive Tech" },
      { label: "STEM Mentor", detail: "STEMHER — CODEIS" },
    ],

    // ── Projects section ────────────────────────────────────────
    projects: {
      title: "Key Projects",
      subtitle: "Things I've built with purpose.",
      status: {
        hackathon: "Hackathon Project",
        active: "Active Development",
        research: "Research",
        concept: "Hackathon Concept",
      },
    },

    // Project content
    projectContent: {
      invisiclaim: {
        tagline: "Authorship Exploration with Blockchain",
        description:
          "Hackathon project focused on digital authorship protection. I implemented hash logic and the commit-reveal protocol to privately secure content.",
      },
      sybil: {
        tagline: "Risk Sentinel with MCP",
        description:
          "Development of a risk intelligence server built on the MCP protocol. The system functions as a sentinel, connecting AI models with Notion databases to identify operational anomalies and data conflicts in real-time, streamlining decision-making through enhanced data integrity.",
      },
      volki: {
        tagline: "Robotic Assistant (Research)",
        description:
          "Implementation of computer vision and language models for human-machine interaction, developed under the UNESCO Chair.",
      },
      trust: {
        tagline: "Phishing Detection (Hackathon)",
        description:
          "Design of an agent to detect identity impersonation based on the EIP-8004 standard during the Aleph Hackathon.",
      },
    },

    // ── Skills section ──────────────────────────────────────────
    skills: {
      title: "Tech Stack",
      subtitle: "Tools I trust in production.",
      categories: {
        core: "Core",
        learning_now: "Currently Learning",
        tools: "Tools",
      },
    },

    // ── Cyber Lab ───────────────────────────────────────────────
    cyberLab: {
      badge: "LIVE LEARNING",
      title: "Cyber-Lab",
      subtitle: "My active learning paths toward security and Web3.",
      paths: [
        { id: "devsecops", label: "DevSecOps Fundamentals" },
        { id: "forensics", label: "Digital Forensics" },
        { id: "web3", label: "Web3 & Smart Contracts" },
        { id: "network", label: "Network Security" },
      ],
    },

    // ── Terminal section ────────────────────────────────────────
    terminal: {
      title: "Interactive Terminal",
      subtitle: "Prefer the command line? Try",
      welcomeMessage: [
        "╔══════════════════════════════════════════════╗",
        "║    ERIKA VILLA | FULL STACK DEVELOPER        ║",
        "║    Currently learning Security & Web3        ║",
        "╚══════════════════════════════════════════════╝",
        "Type 'help' to see my learning path and projects.",
      ],
      commands: {
        help: [
          "┌─────────────────────────────────────┐",
          "│         Available Commands          │",
          "├─────────────────────────────────────┤",
          "│  help       → Show this message     │",
          "│  whoami     → Profile summary       │",
          "│  projects   → List all projects     │",
          "│  skills     → Tech stack            │",
          "│  contact    → Contact info          │",
          "│  clear      → Clear terminal        │",
          "└─────────────────────────────────────┘",
        ],
        whoamiLabels: {
          name: "Name    ",
          role: "Role    ",
          gpa: "GPA     ",
          focus: "Focus   ",
          location: "Location",
        },
        notFound: (cmd: string) =>
          `Command not found: '${cmd}'. Type 'help' for options.`,
      },
    },

    // ── Footer ──────────────────────────────────────────────────
    footer: {
      built: "Built with Next.js & TypeScript",
    },
  },

  // ════════════════════════════════════════════════════════════════
  es: {
    // ── Navbar ──────────────────────────────────────────────────
    nav: {
      projects: "Proyectos",
      skills: "Habilidades",
      cyberLab: "Cyber-Lab",
      terminal: "Terminal",
      hireMeCta: "Contáctame ↗",
    },

    // ── Hero ────────────────────────────────────────────────────
    hero: {
      eyebrow: "Aprendiz de DevSecOps | Desarrolladora de Software",
      currentlyAt: "Actualmente en",
      viewProjects: "Ver Proyectos",
      github: "GitHub ↗",
    },

    // ── Achievements ────────────────────────────────────────────
    achievements: [
      { label: "2do Lugar", detail: "Latin Hack — Proyecto InvisiClaim" },
      { label: "Investigadora", detail: "Cátedra UNESCO — Proyecto VOLKI" },
      { label: "Expositora", detail: "2do Congreso Int. Tecnologías Disruptivas" },
      { label: "Mentora STEM", detail: "STEMHER — CODEIS" },
    ],

    // ── Projects section ────────────────────────────────────────
    projects: {
      title: "Proyectos Clave",
      subtitle: "Cosas que construí con propósito.",
      status: {
        hackathon: "Proyecto Hackathon",
        active: "En Desarrollo Activo",
        research: "Investigación",
        concept: "Concepto Hackathon",
      },
    },

    // Project content
    projectContent: {
      invisiclaim: {
        tagline: "Exploración de autoría con Blockchain",
        description:
          "Proyecto de hackathon centrado en la protección de autoría digital. Implementé lógica de hashes y el protocolo commit-reveal para asegurar contenido de forma privada.",
      },
      sybil: {
        tagline: "Sentinel de Riesgos con MCP",
        description:
          "Desarrollo de un servidor de inteligencia de riesgo basado en el protocolo MCP. El sistema actúa como un sentinel que conecta modelos de IA con bases de datos de Notion para identificar anomalías operativas y conflictos de datos en tiempo real, facilitando la toma de decisiones basada en la integridad de la información.",
      },
      volki: {
        tagline: "Asistente Robótico (Investigación)",
        description:
          "Implementación de modelos de visión computacional y lenguaje para la interacción humano-máquina, desarrollado bajo la Cátedra UNESCO.",
      },
      trust: {
        tagline: "Detección de Phishing (Hackathon)",
        description:
          "Diseño de un agente para detectar suplantación de identidad basado en el estándar EIP-8004 durante la Aleph Hackathon.",
      },
    },

    // ── Skills section ──────────────────────────────────────────
    skills: {
      title: "Stack Tecnológico",
      subtitle: "Herramientas en las que confío en producción.",
      categories: {
        core: "Principal",
        learning_now: "Aprendiendo Ahora",
        tools: "Herramientas",
      },
    },

    // ── Cyber Lab ───────────────────────────────────────────────
    cyberLab: {
      badge: "APRENDIZAJE EN VIVO",
      title: "Cyber-Lab",
      subtitle: "Mis rutas de aprendizaje activas hacia seguridad y Web3.",
      paths: [
        { id: "devsecops", label: "Fundamentos de DevSecOps" },
        { id: "forensics", label: "Forense Digital" },
        { id: "web3", label: "Web3 y Smart Contracts" },
        { id: "network", label: "Seguridad de Redes" },
      ],
    },

    // ── Terminal section ────────────────────────────────────────
    terminal: {
      title: "Terminal Interactiva",
      subtitle: "¿Prefieres la línea de comandos? Prueba",
      welcomeMessage: [
        "╔══════════════════════════════════════════════╗",
        "║    ERIKA VILLA | DESARROLLADORA FULL STACK   ║",
        "║    Aprendiendo Seguridad y Web3              ║",
        "╚══════════════════════════════════════════════╝",
        "Escribe 'help' para ver mi camino y proyectos.",
      ],
      commands: {
        help: [
          "┌─────────────────────────────────────┐",
          "│         Comandos Disponibles        │",
          "├─────────────────────────────────────┤",
          "│  help       → Mostrar este mensaje  │",
          "│  whoami     → Resumen de perfil     │",
          "│  projects   → Listar proyectos      │",
          "│  skills     → Stack tecnológico     │",
          "│  contact    → Contacto              │",
          "│  clear      → Limpiar terminal      │",
          "└─────────────────────────────────────┘",
        ],
        whoamiLabels: {
          name: "Nombre  ",
          role: "Rol     ",
          gpa: "Nota    ",
          focus: "Enfoque ",
          location: "Ubicación",
        },
        notFound: (cmd: string) =>
          `Comando no encontrado: '${cmd}'. Escribe 'help' para ver opciones.`,
      },
    },

    // ── Footer ──────────────────────────────────────────────────
    footer: {
      built: "Construido con Next.js y TypeScript",
    },
  },
} as const;

export type Translations = (typeof translations)["en"] | (typeof translations)["es"];
