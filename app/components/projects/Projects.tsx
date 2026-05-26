"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { projects } from "./project-data";
import { GitHubIcon, ExternalLinkIcon } from "@/app/icons/Icons";
import Link from "next/link";

export default function ProjectsPanel() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        container: containerRef,
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section
            id="projects"
            className="space-y-4 scrollbar-track-transparent scrollbar-thumb-gray-300 scrollbar-thin"
        >
            <h1 className="text-3xl font-bold">Projects</h1>
            <div className="flex gap-4">
                <div className="relative w-px bg-gray-300 shrink-0 self-stretch">
                    <motion.div
                        style={{ top: y }}
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-transparent border border-gray-300 rounded-full shadow-xs z-10"
                    />
                </div>

                <div
                    ref={containerRef}
                    className="space-y-2 h-[50vh] overflow-y-auto scrollbar-hide flex-1"
                >
                    {projects.map((project, i) => {
                        const demoUrl = "demoUrl" in project ? project.demoUrl : null;
                        return (
                            <div key={i} className="relative group rounded-2xl p-4 flex flex-col">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute top-2 right-2 z-20 p-2 rounded-lg text-(--color-accent-line) hover:text-(--color-hover-ink) transition-colors"
                                    >
                                        <GitHubIcon className="w-4 h-4" />
                                    </a>
                                )}

                                <div className="relative z-0 pr-6 flex flex-col flex-1">
                                    <div className="flex items-center gap-1.5 mb-1">
                                        <h3 className="font-semibold text-(--color-text) text-base">
                                            {project.title}
                                        </h3>
                                        {demoUrl && (
                                            <Link
                                                href={demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <ExternalLinkIcon className="w-4 h-4 cursor-pointer" />
                                            </Link>
                                        )}
                                    </div>
                                    <p className="text-sm text-(--color-text-body) line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="flex gap-1.5 flex-wrap mt-3">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs px-2.5 py-0.5 rounded-md border border-gray-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
