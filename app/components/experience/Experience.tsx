import { experienceData } from "./experience-data";
import { ExternalLinkIcon } from "@/app/icons/Icons";

export default function Experience() {
    return (
        <section id="experience" className="">
            <div className="space-y-4">
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">Experience</h1>
                </div>
                <div>
                    {experienceData.map((experience, index) => (
                        <div className="flex gap-4" key={index}>
                            <div className="border-l border-t border-gray-300 w-10"></div>
                            <div className="mt-4 mb-10">
                                <div className="flex-1 min-w-0 text-left">
                                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                                        <span className="font-semibold text-base leading-snug">
                                            {experience.title}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 mt-0.5">
                                        <span className="text-sm tabular-nums">
                                            {experience.dates}
                                        </span>
                                        <span className="text-sm">{" | "}</span>
                                        {experience.companyUrl ? (
                                            <a
                                                href={experience.companyUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 touch-manipulation text-sm font-medium transition-colors rounded-md py-1 -my-1"
                                            >
                                                {experience.company}
                                                <ExternalLinkIcon className="w-3 h-3 opacity-70" />
                                            </a>
                                        ) : (
                                            <span className="text-sm font-medium">
                                                {experience.company}
                                            </span>
                                        )}
                                        <span className=" text-sm select-none">·</span>
                                        <span className="text-sm">
                                            {experience.location.split(",")[0]}
                                        </span>
                                    </div>

                                    <p className="text-sm mt-1.5 leading-relaxed">
                                        {experience.summary}
                                    </p>

                                    {experience.technologies.length > 0 && (
                                        <div className="flex gap-1.5 flex-wrap mt-2.5">
                                            {experience.technologies.slice(0, 5).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="text-xs px-2.5 py-0.5 rounded-md border border-gray-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
