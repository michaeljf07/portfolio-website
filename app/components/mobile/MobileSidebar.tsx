import { FileIcon, GitHubIcon, LinkedInIcon } from "@/app/icons/Icons";
import Link from "next/link";

export default function MobileSidebar() {
    return (
        <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-bg border-b border-border px-6 py-4 flex items-center justify-between">
            <span
                className="font-semibold text-lg"
                style={{ fontFamily: "var(--font-lora), serif" }}
            >
                Michael Ferreira
            </span>
            <div className="flex items-center gap-6">
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
        </header>
    );
}
