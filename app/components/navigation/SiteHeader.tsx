"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/life", label: "Life" },
];

export default function SiteHeader() {
    const pathname = usePathname();

    return (
        <header className="mx-auto w-[calc(100%-40px)] max-w-[750px] pt-7 max-sm:w-[calc(100%-28px)]">
            <div className="flex items-center justify-between gap-5">
                <Link
                    href="/"
                    className="whitespace-nowrap text-base font-semibold text-text no-underline"
                    aria-label="Michael Ferreira, home"
                >
                    <span className="max-sm:hidden">Michael Ferreira</span>
                    <span className="hidden max-sm:inline" aria-hidden="true">
                        MF
                    </span>
                </Link>
                <nav
                    className="flex items-center gap-0.5 rounded-xl border border-black/8 bg-white/70 p-1 shadow-[0_2px_12px_rgba(0,0,0,0.035)] backdrop-blur-[14px]"
                    aria-label="Primary navigation"
                >
                    {navigation.map((item) => {
                        const active =
                            pathname === item.href || pathname.startsWith(`${item.href}/`);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`rounded-lg border px-3 py-1.5 text-sm font-medium no-underline max-sm:px-2.5 max-sm:text-[0.8rem] ${
                                    active
                                        ? "border-black/7 bg-white text-text shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
                                        : "border-transparent text-text-muted hover:bg-black/4 hover:text-text"
                                }`}
                                aria-current={active ? "page" : undefined}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}
