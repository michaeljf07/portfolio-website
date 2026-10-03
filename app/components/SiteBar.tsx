"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileIcon, GitHubIcon, LinkedInIcon } from "@/app/icons/Icons";
import Webring from "@/app/components/Webring";
import ThemeToggle from "@/app/components/ThemeToggle";

const tabs = [
    { label: "home", href: "/" },
    { label: "work", href: "/work" },
    { label: "life", href: "/life" },
];

export default function SiteBar() {
    const pathname = usePathname();

    return (
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 pt-3">
            <div className="flex items-center gap-4">
                <Link
                    href="/resume.pdf"
                    target="_blank"
                    className="flex items-center gap-1.5 text-sm text-text-muted hover:text-text transition-colors no-underline hover:no-underline">
                    <FileIcon className="w-4 h-4" />
                    resume
                </Link>
                <Link
                    href="https://linkedin.com/in/michael-j-ferreira"
                    target="_blank"
                    aria-label="LinkedIn">
                    <LinkedInIcon className="w-5 h-5 text-text-muted hover:text-text transition-colors" />
                </Link>
                <Link href="https://github.com/michaeljf07" target="_blank" aria-label="GitHub">
                    <GitHubIcon className="w-5 h-5 text-text-muted hover:text-text transition-colors" />
                </Link>
                <Webring />
            </div>

            <div className="flex items-center gap-5 md:gap-7">
                <nav aria-label="Sections" className="flex gap-4 md:gap-6">
                    {tabs.map(({ label, href }) => {
                        const active = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                aria-current={active ? "page" : undefined}
                                className={`text-base md:text-lg no-underline hover:no-underline transition-colors ${
                                    active ? "text-text" : "text-text-muted hover:text-text"
                                }`}>
                                {label}
                            </Link>
                        );
                    })}
                </nav>
                <ThemeToggle />
            </div>
        </div>
    );
}
