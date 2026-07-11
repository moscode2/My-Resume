import { ProjectEntry } from '../types/resume';

interface ProjectsProps {
  projects: ProjectEntry[];
}

export default function Projects({ projects }: ProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <section className="mb-6" aria-labelledby="projects-heading">
      <h2
        id="projects-heading"
        className="text-lg font-bold text-gray-900 uppercase tracking-wide border-b border-blue-700 pb-1 mb-3"
      >
        Projects
      </h2>

      <div className="space-y-4">
        {projects.map((project) => (
          <article key={project.name} className="break-inside-avoid">
            <h3 className="text-base font-bold text-gray-900">{project.name}</h3>
            <p className="text-sm text-gray-800 leading-relaxed mt-1">{project.description}</p>
            <p className="text-sm text-gray-700 mt-1">
              <span className="font-semibold">Tech Stack: </span>
              {project.techStack.join(', ')}
            </p>
            {project.link && (
              <p className="text-sm mt-1">
                <span className="font-semibold text-gray-700">{project.linkLabel ?? 'Link'}: </span>
                <a href={project.link} className="text-blue-700 underline break-all" target="_blank" rel="noopener noreferrer">
                  {project.link}
                </a>
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
