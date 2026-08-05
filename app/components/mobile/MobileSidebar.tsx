import { FileIcon, GitHubIcon, LinkedInIcon } from "@/app/icons/Icons";
import Link from "next/link";

const pageLinks = [
    { label: "Life", href: "/life" },
    { label: "Blog", href: "/blog", prefetch: true },
] as const;

export default function MobileSidebar() {
    return (
        <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-bg border-b border-border px-6 py-3">
            <div className="max-w-5xl mx-auto flex items-start justify-between">
                <div className="flex flex-col gap-1">
                    <span
                        className="font-semibold text-xl"
                        style={{ fontFamily: "var(--font-lora), serif" }}
                    >
                        Michael Ferreira
                    </span>
                    <nav className="flex items-center gap-3">
                        {pageLinks.map(({ label, href, ...link }) => (
                            <Link
                                key={href}
                                href={href}
                                className="text-sm text-text-muted hover:text-text no-underline hover:no-underline"
                                {...link}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center gap-5 pt-0.5">
                    <Link href="/resume.pdf" target="_blank" aria-label="Resume">
                        <FileIcon className="w-5 h-5 text-text-muted hover:text-accent transition-colors" />
                    </Link>
                    <Link
                        href="https://linkedin.com/in/michael-j-ferreira"
                        target="_blank"
                        aria-label="LinkedIn"
                    >
                        <LinkedInIcon className="w-5 h-5 text-text-muted hover:text-accent transition-colors" />
                    </Link>
                    <Link href="https://github.com/michaeljf07" target="_blank" aria-label="GitHub">
                        <GitHubIcon className="w-5 h-5 text-text-muted hover:text-accent transition-colors" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
