"use client";

import { SITE_DATA } from "@/config/data";
import { useLanguage } from "@/context/LanguageContext";

export default function CyberLab() {
  const { t } = useLanguage();
  const { cyberLab } = SITE_DATA;

  // Merge static progress/tags data with translated labels
  const paths = cyberLab.paths.map((path) => {
    const translated = t.cyberLab.paths.find((p) => p.id === path.id);
    return { ...path, label: translated?.label ?? path.id };
  });

  return (
    <section id="cyber-lab" className="cyberlab-section">
      {/* Section header */}
      <div className="cyberlab-header">
        <div className="cyberlab-badge">
          <span className="cyberlab-badge__dot" aria-hidden="true" />
          {t.cyberLab.badge}
        </div>
        <h2 className="section-title">{t.cyberLab.title}</h2>
        <p className="section-subtitle">{t.cyberLab.subtitle}</p>
      </div>

      {/* Learning paths grid */}
      <div className="cyberlab-grid">
        {paths.map((path) => (
          <div key={path.id} className={`learning-path learning-path--${path.status}`}>
            {/* Path header */}
            <div className="learning-path__header">
              <span className="learning-path__status-icon" aria-hidden="true">
                {path.status === "in-progress" ? "◈" : "◇"}
              </span>
              <h3 className="learning-path__label">{path.label}</h3>
              <span className="learning-path__percent">{path.progress}%</span>
            </div>

            {/* Progress bar */}
            <div
              className="progress-track"
              role="progressbar"
              aria-valuenow={path.progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${path.label} progress`}
            >
              <div className="progress-fill" style={{ width: `${path.progress}%` }} />
            </div>

            {/* Tags */}
            <div className="learning-path__tags">
              {path.tags.map((tag) => (
                <span key={tag} className="path-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
