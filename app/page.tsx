"use client";

import { SITE_DATA } from "@/config/data";
import { useLanguage } from "@/context/LanguageContext";
import ProjectCard from "@/components/ProjectCard";
import CyberLab from "@/components/CyberLab";
import Terminal from "@/components/Terminal";

export default function Home() {
  const { lang, setLang, t } = useLanguage();
  const { name, role, subtitle, company, socials, skills } = SITE_DATA;

  return (
    <div className="page-wrapper">
      {/* ── Ambient blobs ───────────────────────────────────── */}
      <div className="ambient-blob ambient-blob--1" aria-hidden="true" />
      <div className="ambient-blob ambient-blob--2" aria-hidden="true" />

      {/* ── Navigation ──────────────────────────────────────── */}
      <header className="navbar" role="banner">
        <span className="navbar__logo">
          <span className="navbar__logo-bracket">&lt;</span>
          EV
          <span className="navbar__logo-bracket">/&gt;</span>
        </span>
        <nav className="navbar__links" aria-label="Main navigation">
          <a href="#projects" className="navbar__link">{t.nav.projects}</a>
          <a href="#skills" className="navbar__link">{t.nav.skills}</a>
          <a href="#cyber-lab" className="navbar__link">{t.nav.cyberLab}</a>
          <a href="#terminal" className="navbar__link">{t.nav.terminal}</a>
        </nav>

        {/* Language Toggle + CTA */}
        <div className="navbar__actions">
          <button
            id="lang-toggle"
            className="lang-toggle"
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            aria-label={lang === "en" ? "Switch to Spanish" : "Cambiar a Inglés"}
          >
            <span className={`lang-option ${lang === "en" ? "lang-option--active" : ""}`}>EN</span>
            <span className="lang-divider">|</span>
            <span className={`lang-option ${lang === "es" ? "lang-option--active" : ""}`}>ES</span>
          </button>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta"
          >
            {t.nav.hireMeCta}
          </a>
        </div>
      </header>

      <main id="main-content">
        {/* ── Hero ────────────────────────────────────────────── */}
        <section id="hero" className="hero-section">
          <div className="hero-content">
            <p className="hero-eyebrow">
              <span className="hero-eyebrow__dot" aria-hidden="true" />
              {t.hero.eyebrow}
            </p>

            <h1 className="hero-name">{name}</h1>

            <div className="hero-roles">
              <span className="hero-role hero-role--primary">{role}</span>
              <span className="hero-role-divider" aria-hidden="true">→</span>
              <span className="hero-role hero-role--accent">{subtitle}</span>
            </div>

            <p className="hero-company">
              {t.hero.currentlyAt}{" "}
              <strong className="hero-company__name">{company}</strong>
            </p>

            {/* Achievement chips */}
            <div className="achievement-row" role="list">
              {(["🏆", "🔬", "🎤", "✨"] as const).map((icon, i) => {
                const a = t.achievements[i];
                return (
                  <div key={i} className="achievement-chip" role="listitem">
                    <span aria-hidden="true">{icon}</span>
                    <div>
                      <span className="achievement-chip__label">{a.label}</span>
                      <span className="achievement-chip__detail">{a.detail}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="hero-ctas">
              <a href="#projects" className="btn btn--primary">
                {t.hero.viewProjects}
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                {t.hero.github}
              </a>
            </div>
          </div>

          {/* Decorative code block */}
          <div className="hero-code-block" aria-hidden="true">
            <div className="code-block__titlebar">
              <span className="code-dot red" />
              <span className="code-dot yellow" />
              <span className="code-dot green" />
              <span className="code-block__filename">profile.ts</span>
            </div>
            <pre className="code-block__body"><code>{`const engineer = {
  name: "Erika Villa",
  stack: [
    "TypeScript",
    "Python",
    "Next.js",
    "Node.js",
    "Docker",
    "MCP",
    "Security"
  ],
  focus: "DevSecOps",
  status: "open_to_learning",
  motto: "Build secure. Think first."
};`}</code></pre>
          </div>
        </section>

        {/* ── Projects ────────────────────────────────────────── */}
        <section id="projects" className="section">
          <div className="section-header">
            <h2 className="section-title">{t.projects.title}</h2>
            <p className="section-subtitle">{t.projects.subtitle}</p>
          </div>
          <div className="projects-grid">
            {[...SITE_DATA.projects].map((project) => (
              <ProjectCard key={project.id} project={project} lang={lang} />
            ))}
          </div>
        </section>

        {/* ── Skills ──────────────────────────────────────────── */}
        <section id="skills" className="section">
          <div className="section-header">
            <h2 className="section-title">{t.skills.title}</h2>
            <p className="section-subtitle">{t.skills.subtitle}</p>
          </div>
          <div className="skills-grid">
          {(Object.entries(skills) as unknown as [keyof typeof t.skills.categories, string[]][]).map(
              ([category, items]) => (
                <div key={category} className="skill-group">
                  <h3 className="skill-group__title">
                    {t.skills.categories[category]}
                  </h3>
                  <div className="skill-group__chips">
                    {items.map((skill) => (
                      <span key={skill} className="skill-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        {/* ── Cyber Lab ───────────────────────────────────────── */}
        <CyberLab />

        {/* ── Terminal ────────────────────────────────────────── */}
        <section id="terminal" className="section section--terminal">
          <div className="section-header">
            <h2 className="section-title">{t.terminal.title}</h2>
            <p className="section-subtitle">
              {t.terminal.subtitle}{" "}
              <code className="inline-code">help</code>,{" "}
              <code className="inline-code">whoami</code>,{" "}
              <code className="inline-code">projects</code>.
            </p>
          </div>
          <Terminal />
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="footer">
        <p className="footer__text">
          {t.footer.built} ·{" "}
          <span className="footer__pink">Erika Cristina Villa Quishpi</span> ·{" "}
          {new Date().getFullYear()}
        </p>
        <div className="footer__links">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="footer__link">
            GitHub
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="footer__link">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
