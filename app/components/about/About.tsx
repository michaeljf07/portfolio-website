import Link from "next/link";
import { LinkedInIcon, GitHubIcon, FileIcon } from "@/app/icons/Icons";
import Image from "next/image";
import { education } from "./education-data";

export default function About() {
    return (
        <section id="about" className="space-y-8">
            <div className="w-full mb-12 space-y-2">
                <h1 className="text-5xl font-bold">Michael Ferreira</h1>
                <div className="flex gap-4">
                    <button className="border border-gray-300 rounded-md px-4 py-1 shadow-xs hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                        <Link href="/resume.pdf" className="flex items-center gap-2 text-sm">
                            <FileIcon className="w-4 h-4" /> Resume
                        </Link>
                    </button>
                    <button className="border border-gray-300 rounded-md px-4 py-1 shadow-xs hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                        <Link
                            href="https://linkedin.com/in/michael-j-ferreira"
                            className="flex items-center gap-2 text-sm"
                        >
                            <LinkedInIcon className="w-4 h-4" /> LinkedIn
                        </Link>
                    </button>
                    <button className="border border-gray-300 rounded-md px-4 py-1 shadow-xs hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                        <Link
                            href="https://github.com/michaeljf07"
                            className="flex items-center gap-2 text-sm"
                        >
                            <GitHubIcon className="w-4 h-4" /> GitHub
                        </Link>
                    </button>
                </div>
            </div>
            <div className="space-y-4">
                <h1 className="text-3xl font-bold">Hello, I&apos;m Michael.</h1>
                <p>
                    I study computer science at the University of Waterloo alongside a business
                    degree at Wilfrid Laurier University. I&apos;m currenly working as a software
                    engineer at Cache, building web and iOS apps that connects influencers directly
                    with their followers through fashion resale.
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
