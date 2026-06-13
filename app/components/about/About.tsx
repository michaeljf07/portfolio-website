import Link from "next/link";
import Image from "next/image";
import { education } from "./education-data";
import { SectionHeading } from "../SectionHeading";

export default function About() {
    return (
        <section id="about" className="pt-20 md:pt-0 space-y-6">
            <SectionHeading>About</SectionHeading>
            <div className="space-y-4 text-base leading-relaxed text-text/90">
                <p>
                    I study computer science at the <b>University of Waterloo</b> alongside a
                    business degree at <b>Wilfrid Laurier University</b>. I&apos;m currently working
                    as a software engineer at ZEVA Global and Temerity Analytics building web apps
                    across the full stack. I&apos;m also the founding engineer at{" "}
                    <Link href="https://cacheinyourcloset.com">Cache</Link>, a fashion resale
                    marketplace connecting influencers directly with their followers.
                </p>
                <p>
                    When I&apos;m not in the terminal, you&apos;ll probably find me at the gym,
                    reading a book, or working on a side project. I&apos;m always looking for
                    interesting problems to fix and people to collaborate with.
                </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
                {education.map((edu, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 rounded-lg border border-border bg-tag-bg px-3 py-2"
                    >
                        <div className="relative w-10 h-10 shrink-0">
                            <Image
                                src={edu.logo}
                                alt={edu.alt}
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                        <div>
                            <div className="text-xs font-semibold leading-tight">{edu.degree}</div>
                            <div className="text-xs text-text-muted">{edu.school}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
