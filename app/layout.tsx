import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
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
        <html lang="en" className={`${dmSans.variable} ${lora.variable} h-full antialiased`}>
            <body
                className="min-h-full max-w-5xl mx-auto px-6 md:px-12 gap-16 py-16"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
                {children}
                <Analytics />
            </body>
        </html>
    );
}
