import Link from "next/link";
import Image from "next/image";
import { projects, type Project } from "./project-data";
import { GitHubIcon, ExternalLinkIcon, RightArrowIcon } from "@/app/icons/Icons";
import { SectionHeading } from "@/app/components/SectionHeading";

type ProjectsProps = {
    limit?: number;
    showAllLink?: boolean;
    sectionHeading?: boolean;
};

export default function Projects({
    limit,
    showAllLink = false,
    sectionHeading = true,
}: ProjectsProps) {
    const visibleProjects = typeof limit === "number" ? projects.slice(0, limit) : projects;

    return (
        <section id="projects">
            {sectionHeading && <SectionHeading>Projects</SectionHeading>}
            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                {visibleProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
            {showAllLink && (
                <Link
                    href="/projects"
                    className="mt-5.5 inline-flex items-center gap-2 text-sm font-semibold text-text no-underline hover:text-accent"
                >
                    View all projects
                    <RightArrowIcon className="size-4" />
                </Link>
            )}
        </section>
    );
}

export function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="overflow-hidden rounded-xl border border-border bg-white/75">
            <a
                href={project.demoUrl || project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-video overflow-hidden border-b border-border bg-tag-bg"
                aria-label={`Open ${project.title} demo`}
            >
                <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(max-width: 720px) 100vw, 340px"
                    className="object-cover object-top"
                />
            </a>
            <div className="p-4">
                <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <div className="flex shrink-0 gap-2.5">
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${project.title} demo`}
                            >
                                <ExternalLinkIcon className="size-4 text-text-muted" />
                            </a>
                        )}
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} on GitHub`}
                        >
                            <GitHubIcon className="size-4 text-text-muted" />
                        </a>
                    </div>
                </div>
                <p className="mt-2 line-clamp-3 text-sm leading-snug text-text-muted">
                    {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                    {project.technologies.slice(0, 5).map((technology) => (
                        <span
                            key={technology}
                            className="rounded-md border border-border bg-tag-bg px-2 py-0.5 text-[0.68rem] text-text-muted"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}
