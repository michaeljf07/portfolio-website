import Link from "next/link";
import { FileIcon, GitHubIcon, LinkedInIcon } from "@/app/icons/Icons";
import Image from "next/image";

export default function DesktopHeader() {
    return (
        <aside className="hidden md:flex flex-col w-52 shrink-0 sticky top-16 self-start h-[calc(100vh-8rem)] gap-6">
            <div className="flex flex-col items-start gap-4">
                <div className="w-32 h-32 rounded-full overflow-hidden border border-border">
                    <Image
                        src="/headshots/headshot4.png"
                        alt="Michael Ferreira"
                        width={144}
                        height={144}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div>
                    <h1
                        className="text-xl font-semibold leading-tight"
                        style={{ fontFamily: "var(--font-lora), serif" }}
                    >
                        Michael Ferreira
                    </h1>
                    <p className="text-sm text-text-muted mt-0.5">Software Engineer</p>
                </div>
            </div>

            <nav className="flex flex-col gap-1">
                {[
                    { label: "About", href: "#about" },
                    { label: "Experience", href: "#experience" },
                    { label: "Projects", href: "#projects" },
                ].map(({ label, href }) => (
                    <Link
                        key={href}
                        href={href}
                        scroll={true}
                        className="text-sm text-text-muted hover:text-text transition-colors px-0 py-1 no-underline hover:no-underline"
                    >
                        {label}
                    </Link>
                ))}
            </nav>

            <div className="flex items-center gap-4 mt-auto">
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
                <Webring sidebar />
            </div>
        </aside>
    );
}

function Webring({ sidebar = false }: { sidebar?: boolean }) {
    if (sidebar) {
        return (
            <div className="flex items-center gap-1.5">
                <a
                    href="https://cs.uwatering.com/#michaelferreira.me?nav=prev"
                    className="text-text-muted hover:text-text no-underline hover:no-underline text-xs"
                >
                    ←
                </a>
                <a href="https://cs.uwatering.com/#michaelferreira.me" target="_blank">
                    <Image
                        src="https://cs.uwatering.com/icon.black.svg"
                        alt="CS Webring"
                        width={16}
                        height={16}
                        className="opacity-40 hover:opacity-70 transition-opacity"
                    />
                </a>
                <a
                    href="https://cs.uwatering.com/#michaelferreira.me?nav=next"
                    className="text-text-muted hover:text-text no-underline hover:no-underline text-xs"
                >
                    →
                </a>
            </div>
        );
    }

    return (
        <div className="md:hidden flex items-center gap-2 pt-4">
            <a href="https://cs.uwatering.com/#michaelferreira.me?nav=prev" className="opacity-50">
                ←
            </a>
            <a href="https://cs.uwatering.com/#michaelferreira.me" target="_blank">
                <Image
                    src="https://cs.uwatering.com/icon.black.svg"
                    alt="CS Webring"
                    width={20}
                    height={20}
                    className="opacity-50"
                />
            </a>
            <a href="https://cs.uwatering.com/#michaelferreira.me?nav=next" className="opacity-50">
                →
            </a>
        </div>
    );
}
