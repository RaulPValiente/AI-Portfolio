import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 lg:px-24"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2
            id="projects-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Projects
          </h2>
          <p className="text-text-secondary text-lg">
            Selected work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
