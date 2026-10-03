import Image from "next/image";
import Link from "next/link";
import { education } from "@/app/components/about/education-data";
import { experienceData } from "@/app/components/experience/experience-data";

const labelClass = "text-md text-text-muted mb-2";

export default function Home() {
    const experience = [...experienceData].sort((a, b) => {
        const endA = a.end_date ? new Date(a.end_date) : new Date();
        const endB = b.end_date ? new Date(b.end_date) : new Date();
        return endB.getTime() - endA.getTime();
    });

    return (
        <div className="grid h-full content-start gap-12 md:grid-cols-[minmax(0,1.7fr)_minmax(280px,1fr)] md:gap-[clamp(32px,5vw,88px)]">
            <section
                aria-labelledby="about-title"
                className="grid items-start gap-6 sm:grid-cols-[clamp(140px,15vw,240px)_minmax(0,1fr)]">
                <div className="relative aspect-4/5 w-full max-w-[260px] overflow-hidden rounded-sm border border-border mx-auto sm:mx-0">
                    <Image
                        src="/headshots/headshot4.png"
                        alt="Michael Ferreira"
                        fill
                        priority
                        sizes="(min-width: 640px) 240px, 260px"
                        className="object-cover"
                    />
                </div>

                <div className="grid gap-y-4 min-w-0 max-w-[62ch]">
                    <div className="col-span-2">
                        <h2 id="about-title" className={labelClass}>
                            about
                        </h2>
                        <div className="space-y-3 text-sm leading-relaxed text-text/90">
                            <p>
                                I study computer science at the{" "}
                                <b>University of Waterloo</b> alongside a
                                business degree at{" "}
                                <b>Wilfrid Laurier University</b>. I&apos;m the
                                founding engineer at{" "}
                                <Link href="https://cacheinyourcloset.com">
                                    Cache
                                </Link>
                                , a fashion resale marketplace connecting
                                influencers directly with their followers.
                            </p>
                            <p>
                                When I&apos;m not in the terminal, you&apos;ll
                                probably find me at the gym, reading a book, or
                                working on a side project. I&apos;m always
                                looking for interesting problems to fix and
                                people to collaborate with.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <dt className={labelClass}>education</dt>
                        <dd className="flex flex-wrap gap-x-6 gap-y-1.5">
                            {education.map((edu) => (
                                <span
                                    key={edu.school}
                                    className="flex items-center gap-2 text-sm text-text/90">
                                    <Image
                                        src={edu.logo}
                                        alt=""
                                        width={32}
                                        height={32}
                                        className="object-contain"
                                    />
                                    {edu.degree}, {edu.alt}
                                </span>
                            ))}
                        </dd>
                    </div>
                    <div>
                        <dt className={labelClass}>based in</dt>
                        <dd className="text-sm text-text/90">
                            Toronto / Waterloo
                        </dd>
                    </div>
                    <div>
                        <dt className={labelClass}>languages</dt>
                        <dd className="text-sm text-text/90">
                            TypeScript, Python, Swift, Go, C, C++, Java
                        </dd>
                    </div>
                </div>
            </section>

            <section aria-labelledby="experience-title">
                <h2 id="experience-title" className={labelClass}>
                    experience
                </h2>
                <ol className="grid gap-3.5">
                    {experience.map((exp) => (
                        <li
                            key={`${exp.company}-${exp.title}`}
                            className="grid grid-cols-[36px_minmax(0,1fr)] items-center gap-6">
                            <div className="size-12 overflow-hidden rounded-md border border-border bg-white">
                                <Image
                                    src={exp.company_logo}
                                    alt=""
                                    width={48}
                                    height={48}
                                    className="size-full object-cover"
                                />
                            </div>
                            <div className="min-w-0 leading-tight">
                                <p className="truncate text-sm">
                                    {exp.company_url ? (
                                        <Link
                                            href={exp.company_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-medium text-text">
                                            {exp.company}
                                        </Link>
                                    ) : (
                                        <span className="font-medium">
                                            {exp.company}
                                        </span>
                                    )}
                                    <span className="text-text-muted">
                                        {" "}
                                        · {exp.title}
                                    </span>
                                </p>
                                <p className="mt-1 text-xs text-text-muted tabular-nums">
                                    {exp.start_date} –{" "}
                                    {exp.end_date ?? "Present"} ·{" "}
                                    {exp.location.split(",")[0]}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>
        </div>
    );
}
