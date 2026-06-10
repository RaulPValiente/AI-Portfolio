import { GithubIcon } from "../UI/Icons";

const ProjectCard = ({ project }) => {
  return (
    <article className="card-group group p-6 bg-bg-card border border-bg-border rounded-xl hover:border-accent-green/30 transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <h3 className="card-title text-xl font-semibold text-text-primary transition-colors duration-200">
          {project.title}
        </h3>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-text-primary transition-colors duration-200 p-2 -m-2"
          aria-label={`View ${project.title} on GitHub`}
        >
          <GithubIcon className="w-5 h-5" />
        </a>
      </div>

      <p className="text-text-secondary text-sm leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-mono text-text-muted bg-bg-border rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
