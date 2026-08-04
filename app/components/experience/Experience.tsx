import Image from "next/image";
import { ExternalLinkIcon } from "@/app/icons/Icons";
import { SectionHeading } from "@/app/components/SectionHeading";
import { experienceData } from "./experience-data";

export default function Experience() {
    return (
        <section id="experience">
            <SectionHeading>Experience</SectionHeading>
            <div className="divide-y divide-border">
                {experienceData.map((experience) => (
                    <article
                        key={`${experience.company}-${experience.title}`}
                        className="py-4 first:pt-0"
                    >
                        <div className="grid grid-cols-[48px_minmax(0,1fr)_auto] items-start gap-3 max-sm:grid-cols-[44px_minmax(0,1fr)]">
                            <div className="size-12 overflow-hidden rounded-xl border border-border bg-white max-sm:size-11 my-auto">
                                <Image
                                    src={experience.companyLogo}
                                    alt=""
                                    width={48}
                                    height={48}
                                    className="size-full object-cover"
                                />
                            </div>
                            <div className="min-w-0">
                                <div className="flex items-center gap-1">
                                    {experience.companyUrl ? (
                                        <a
                                            href={experience.companyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 font-bold text-text no-underline hover:text-accent"
                                        >
                                            {experience.company}
                                            <ExternalLinkIcon className="size-3 opacity-55" />
                                        </a>
                                    ) : (
                                        <h3 className="font-bold">{experience.company}</h3>
                                    )}
                                </div>
                                <p className="text-sm text-text-muted">{experience.title}</p>
                                <p className="mt-2 text-sm leading-snug text-text-muted">
                                    {experience.summary}
                                </p>
                            </div>
                            <p className="pt-0.5 text-right text-xs whitespace-nowrap text-text-muted max-sm:col-start-2 max-sm:row-start-2 max-sm:text-left">
                                {experience.dates}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
