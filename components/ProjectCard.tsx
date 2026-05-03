import { SITE_DATA } from "@/config/data";
import { translations, type Lang } from "@/config/translations";

type Project = (typeof SITE_DATA.projects)[number];

interface ProjectCardProps {
  project: Project;
  lang: Lang;
}

export default function ProjectCard({ project, lang }: ProjectCardProps) {
  const t = translations[lang];
  const content = t.projectContent[project.id as keyof typeof t.projectContent];
  const statusLabel = t.projects.status[project.status];

  return (
    <article
      className={`project-card ${project.highlight ? "project-card--highlight" : ""}`}
      id={`project-${project.id}`}
    >
      {/* Header — emoji + title/tagline only */}
      <div className="project-card__header">
        <span className="project-card__emoji" aria-hidden="true">
          {project.emoji}
        </span>
        <div className="project-card__titles">
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__tagline">{content.tagline}</p>
        </div>
      </div>

      {/* Badge row — separate so it never overflows */}
      <span className={`project-badge project-badge--${project.status}`}>
        {statusLabel}
      </span>

      {/* Description */}
      <p className="project-card__description">{content.description}</p>

      {/* Tech chips */}
      <div className="project-card__tech">
        {project.tech.map((t) => (
          <span key={t} className="tech-chip">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
