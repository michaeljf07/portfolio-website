"use client";

import { MoonIcon, SunIcon } from "@/app/icons/Icons";

export default function ThemeToggle() {
    function toggle() {
        const root = document.documentElement;
        const next = root.dataset.theme === "dark" ? "light" : "dark";
        root.dataset.theme = next;
        try {
            localStorage.setItem("theme", next);
        } catch {}
    }

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label="Toggle dark theme"
            className="text-text-muted hover:text-text transition-colors cursor-pointer">
            <MoonIcon className="w-5 h-5 dark:hidden" />
            <SunIcon className="w-5 h-5 hidden dark:block" />
        </button>
    );
}
