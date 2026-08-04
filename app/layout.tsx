import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { DM_Sans, Lora } from "next/font/google";
import FloatingDock from "@/app/components/navigation/FloatingDock";
import SiteHeader from "@/app/components/navigation/SiteHeader";
import "./globals.css";

const mono = DM_Sans({
    variable: "--font-dm-sans",
    subsets: ["latin"],
});

const lora = Lora({
    variable: "--font-lora",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Michael Ferreira | Portfolio",
        template: "%s | Michael Ferreira",
    },
    description:
        "Portfolio website for Michael Ferreira, a software engineer and Waterloo/Laurier double degree student focused on full-stack, AI, and product engineering.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${mono.variable} ${lora.variable} h-full antialiased`}>
            <body
                className="site-grid min-h-full bg-bg text-text"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
                <SiteHeader />
                <main className="mx-auto w-[calc(100%-40px)] max-w-[750px] pt-10 pb-36 max-sm:w-[calc(100%-28px)] max-sm:pt-8">
                    {children}
                </main>
                <FloatingDock />
                <Analytics />
            </body>
        </html>
    );
}
