import { Fragment } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { lifeSections } from "@/app/components/life/life-data";

export const metadata: Metadata = {
    title: "Life",
    description: "A look at Michael Ferreira's interests outside of software.",
};

export default function LifePage() {
    return (
        <div className="grid h-full grid-cols-3 gap-2.5 md:grid-cols-4 md:grid-rows-[repeat(2,minmax(0,1fr))] md:gap-[clamp(10px,1vw,16px)]">
            {lifeSections.map((section, index) => (
                <Fragment key={section.id}>
                    <section
                        aria-labelledby={`life-${section.id}`}
                        className="col-span-3 flex flex-col justify-between gap-3 py-2 md:col-span-1 md:pr-4 ">
                        <div className="flex flex-col mt-auto">
                            <h2
                                id={`life-${section.id}`}
                                className="font-serif text-xl md:text-2xl font-semibold">
                                {section.title}
                            </h2>
                            <p className="mt-2 text-sm leading-relaxed text-text-muted">
                                {section.description}
                            </p>
                        </div>
                    </section>
                    {section.images.map((image) => (
                        <figure
                            key={image.src}
                            className="relative aspect-4/5 min-h-0 overflow-hidden rounded-sm border border-border bg-tag-bg md:aspect-auto">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(min-width: 768px) 25vw, 33vw"
                                className="object-cover"
                            />
                            {image.caption && (
                                <figcaption className="absolute inset-x-2 bottom-2 rounded-md bg-black/70 px-2 py-1.5 text-[0.7rem] text-white backdrop-blur-lg max-md:hidden">
                                    {image.caption}
                                </figcaption>
                            )}
                        </figure>
                    ))}
                </Fragment>
            ))}
        </div>
    );
}
