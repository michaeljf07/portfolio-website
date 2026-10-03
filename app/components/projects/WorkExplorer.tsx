"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./project-data";
import { GitHubIcon } from "@/app/icons/Icons";

type Project = (typeof projects)[number];

export default function WorkExplorer() {
    const [active, setActive] = useState(0);
    const project = projects[active];

    return (
        <>
            {/* Desktop: list / details / media, all on one screen */}
            <div className="hidden h-full md:grid md:grid-cols-[minmax(150px,210px)_minmax(0,1fr)_minmax(0,1.3fr)] md:gap-[clamp(24px,3.5vw,56px)]">
                <nav aria-label="Projects" className="min-w-0 min-h-0">
                    <h2 className="text-xs text-text-muted mb-3">projects</h2>
                    <ul className="grid gap-1">
                        {projects.map((p, i) => (
                            <li key={p.title}>
                                <button
                                    type="button"
                                    onClick={() => setActive(i)}
                                    aria-current={i === active ? "true" : undefined}
                                    className={`w-full text-left text-sm leading-snug cursor-pointer transition-colors ${
                                        i === active
                                            ? "text-text underline underline-offset-4"
                                            : "text-text-muted hover:text-text"
                                    }`}>
                                    {p.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <article key={project.title} className="tab-in min-w-0 min-h-0">
                    <ProjectCopy project={project} />
                </article>

                <ProjectMedia project={project} />
            </div>

            {/* Mobile: every project stacked */}
            <div className="grid gap-12 md:hidden">
                {projects.map((p) => (
                    <article key={p.title} className="grid gap-4">
                        <div className="relative aspect-16/10 overflow-hidden rounded-sm border border-border bg-tag-bg">
                            <Image
                                src={p.image}
                                alt={`${p.title} screenshot`}
                                fill
                                sizes="100vw"
                                className="object-cover object-top"
                            />
                        </div>
                        <ProjectCopy project={p} />
                    </article>
                ))}
            </div>
        </>
    );
}

function ProjectCopy({ project }: { project: Project }) {
    return (
        <>
            <h3 className="font-serif text-xl md:text-2xl font-semibold leading-tight">
                {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text/90">{project.description}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                    <li
                        key={tech}
                        className="rounded-md border border-border bg-tag-bg px-2 py-0.5 text-xs">
                        {tech}
                    </li>
                ))}
            </ul>
            <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm">
                <GitHubIcon className="w-4 h-4" />
                View on GitHub
            </Link>
        </>
    );
}

function ProjectMedia({ project }: { project: Project }) {
    return (
        <figure className="relative h-full min-h-[280px] overflow-hidden rounded-sm border border-border bg-tag-bg">
            {project.demoUrl.endsWith(".mp4") ? (
                <video
                    key={project.demoUrl}
                    src={project.demoUrl}
                    poster={project.image}
                    aria-label={`${project.title} demo`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    preload="metadata"
                    className="absolute inset-0 size-full object-contain"
                />
            ) : (
                <Image
                    key={project.image}
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="45vw"
                    className="object-contain"
                />
            )}
        </figure>
    );
}
