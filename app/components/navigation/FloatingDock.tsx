"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileIcon, GitHubIcon, LinkedInIcon, DockIcon, type DockIconName } from "@/app/icons/Icons";

const navItems: { href: string; label: string; icon: DockIconName }[] = [
    { href: "/", label: "Home", icon: "home" },
    { href: "/projects", label: "Projects", icon: "projects" },
    { href: "/blog", label: "Blog", icon: "blog" },
    { href: "/life", label: "Life", icon: "life" },
];

const professionalItems = [
    { href: "/resume.pdf", label: "Resume", icon: FileIcon },
    { href: "https://github.com/michaeljf07", label: "GitHub", icon: GitHubIcon },
    { href: "https://linkedin.com/in/michael-j-ferreira", label: "LinkedIn", icon: LinkedInIcon },
];

export default function FloatingDock() {
    const pathname = usePathname();

    return (
        <nav
            className="fixed bottom-[max(20px,env(safe-area-inset-bottom))] left-1/2 z-1000 flex max-w-[calc(100vw-20px)] -translate-x-1/2 items-center gap-1 rounded-[14px] border border-black/10 bg-white/85 p-1.5 shadow-[0_14px_38px_rgba(27,27,24,0.18)] backdrop-blur-2xl max-sm:gap-px max-sm:p-1"
            aria-label="Quick links"
        >
            {navItems.map((item) => {
                const active =
                    item.href === "/"
                        ? pathname === "/"
                        : pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`group relative grid size-10 place-items-center rounded-lg text-text-muted no-underline ${active ? "bg-tag-bg text-text" : "hover:bg-tag-bg hover:text-text"}`}
                        aria-label={item.label}
                        aria-current={active ? "page" : undefined}
                    >
                        <DockIcon name={item.icon} />
                        <span className="pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-[#282825] px-2 py-1 text-[0.7rem] leading-none text-white group-hover:block group-focus-visible:block">
                            {item.label}
                        </span>
                    </Link>
                );
            })}
            <span className="mx-1 h-6 w-px bg-border" aria-hidden="true" />
            {professionalItems.map((item) => {
                const Icon = item.icon;
                const external = item.href.startsWith("http");
                return (
                    <a
                        key={item.href}
                        href={item.href}
                        className="group relative grid size-10 place-items-center rounded-lg text-text-muted no-underline hover:bg-tag-bg hover:text-text"
                        aria-label={item.label}
                        target="_blank"
                        rel={external ? "noopener noreferrer" : undefined}
                    >
                        <Icon className="size-5" />
                        <span className="pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-[#282825] px-2 py-1 text-[0.7rem] leading-none text-white group-hover:block group-focus-visible:block">
                            {item.label}
                        </span>
                    </a>
                );
            })}
        </nav>
    );
}
