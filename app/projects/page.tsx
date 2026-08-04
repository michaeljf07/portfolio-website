import type { Metadata } from "next";
import Projects from "@/app/components/projects/Projects";

export const metadata: Metadata = {
    title: "Projects",
    description: "Software projects by Michael Ferreira.",
};

export default function ProjectsPage() {
    return (
        <div className="flex flex-col gap-16">
            <header className="max-w-xl pt-6">
                <p className="mb-2 text-sm font-semibold tracking-wide text-text-muted uppercase">
                    Selected work
                </p>
                <h1
                    className="text-6xl font-bold leading-none tracking-tight"
                    style={{ fontFamily: "var(--font-lora), serif" }}
                >
                    Projects
                </h1>
                <p className="mt-4 text-base leading-relaxed text-text-muted">
                    A collection of products, developer tools, experiments, and school projects.
                </p>
            </header>
            <Projects sectionHeading={false} />
        </div>
    );
}
