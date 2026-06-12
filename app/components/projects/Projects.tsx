"use client";

import Link from "next/link";
import { projects } from "./project-data";
import { GitHubIcon, ExternalLinkIcon } from "@/app/icons/Icons";
import { SectionHeading } from "@/app/components/SectionHeading";

export default function ProjectsPanel() {
    return (
        <section id="projects">
            <SectionHeading>Projects</SectionHeading>
            <div className="space-y-6">
                {projects.map((project, i) => {
                    const demoUrl = "demoUrl" in project ? project.demoUrl : null;
                    return (
                        <div key={i}>
                            <div className="flex justify-between mb-0.5">
                                <div className="flex items-center gap-1.5">
                                    <h3 className="font-semibold text-sm text-text">
                                        {project.title}
                                    </h3>
                                    {demoUrl && (
                                        <Link
                                            href={demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-text-muted hover:text-accent transition-colors no-underline"
                                        >
                                            <ExternalLinkIcon className="w-4 h-4" />
                                        </Link>
                                    )}
                                </div>
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-text-muted hover:text-accent transition-colors no-underline"
                                    >
                                        <GitHubIcon className="w-4 h-4" />
                                    </a>
                                )}
                            </div>

                            <p className="text-sm text-text-muted leading-relaxed line-clamp-2">
                                {project.description}
                            </p>

                            <div className="flex gap-1.5 flex-wrap mt-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs px-2 py-0.5 rounded-md bg-tag-bg border border-border"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
