import type { Metadata } from "next";
import LifeGallery from "@/app/components/life/LifeGallery";
import { lifeSections } from "@/app/components/life/life-data";

export const metadata: Metadata = {
    title: "Life",
    description: "A look at Michael Ferreira's interests outside of software.",
};

export default function LifePage() {
    return (
        <div className="flex flex-col gap-18">
            <header className="max-w-[750px] pt-6">
                <p className="mb-2 text-sm font-semibold tracking-wide text-text-muted uppercase">
                    Outside the terminal
                </p>
                <h1
                    className="text-6xl font-bold leading-none tracking-tight"
                    style={{ fontFamily: "var(--font-lora), serif" }}
                >
                    Life
                </h1>
                <p className="mt-4 text-base leading-relaxed text-text-muted">
                    A growing collection of the things I make time for away from work.
                </p>
            </header>
            <div className="flex flex-col gap-17">
                {lifeSections.map((section, index) => (
                    <section key={section.id} id={section.id} className="grid gap-6">
                        <div className="grid grid-cols-[40px_120px_minmax(0,1fr)] items-baseline gap-3 max-sm:grid-cols-[36px_1fr]">
                            <p className="text-[0.72rem] tracking-[0.08em] text-text-muted">
                                {String(index + 1).padStart(2, "0")}
                            </p>
                            <h2 className="text-2xl font-semibold">{section.title}</h2>
                            <p className="text-sm leading-[1.65] text-text-muted max-sm:col-start-2">
                                {section.description}
                            </p>
                        </div>
                        <LifeGallery title={section.title} images={section.images} />
                    </section>
                ))}
            </div>
        </div>
    );
}
