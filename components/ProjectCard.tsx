import { SITE_DATA } from "@/config/data";

type Project = (typeof SITE_DATA.projects)[number];

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={`project-card ${project.highlight ? "project-card--highlight" : ""}`}
      id={`project-${project.id}`}
    >
      {/* Header */}
      <div className="project-card__header">
        <span className="project-card__emoji" aria-hidden="true">
          {project.emoji}
        </span>
        <div>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__tagline">{project.tagline}</p>
        </div>
        <span className={`project-badge project-badge--${project.status.toLowerCase().replace(" ", "-")}`}>
          {project.status}
        </span>
      </div>

      {/* Description */}
      <p className="project-card__description">{project.description}</p>

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
