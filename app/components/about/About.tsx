import Link from "next/link";
import { LinkedInIcon, GitHubIcon, FileIcon } from "@/app/icons/Icons";
import Image from "next/image";
import { education } from "./education-data";

export default function About() {
    return (
        <section id="about" className="space-y-8">
            <div className="w-full mb-10 space-y-2">
                <h1 className="text-5xl font-bold">Michael Ferreira</h1>
                <div className="flex gap-4">
                    <span className="flex items-center gap-1 text-sm">
                        <FileIcon className="w-4 h-4" />
                        <Link href="/resume.pdf">Resume</Link>
                    </span>
                    <span className="flex items-center gap-1 text-sm">
                        <LinkedInIcon className="w-4 h-4" />
                        <Link href="https://linkedin.com/in/michael-j-ferreira">LinkedIn</Link>
                    </span>
                    <span className="flex items-center gap-1 text-sm">
                        <GitHubIcon className="w-4 h-4" />
                        <Link href="https://github.com/michaeljf07">GitHub</Link>
                    </span>
                </div>
            </div>
            <div className="space-y-4">
                <p>
                    I study computer science at the <b>University of Waterloo</b> alongside a
                    business degree at <b>Wilfrid Laurier University</b>. I'm currenly working as a
                    software engineer at ZEVA Global and Temerity Analytics building web apps across
                    the full stack. I'm also the founding engineer at{" "}
                    <Link href="https://cacheinyourcloset.com">Cache</Link>, a fashion resale
                    marketplace connecting influencers directly with their followers.
                </p>
                <p>
                    When I'm not in the terminal, you'll probably find me at the gym, reading a
                    book, or working on a side project! I'm always looking for interesting problems
                    to fix and people to collaborate with.
                </p>
            </div>
            <div className="flex md:flex-row flex-col gap-2">
                {education.map((education, index) => (
                    <div
                        key={index}
                        className="flex items-center rounded-md border border-gray-300 px-3 py-2"
                    >
                        <div className="relative w-10 h-10 shrink-0 mr-1.5">
                            <Image
                                src={education.logo}
                                alt={education.alt}
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                        <div>
                            <div className="text-sm font-semibold">{education.degree}</div>
                            <div className="text-xs">{education.school}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
