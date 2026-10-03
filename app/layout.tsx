import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { DM_Sans, Lora } from "next/font/google";
import NameMark from "@/app/components/NameMark";
import SiteBar from "@/app/components/SiteBar";
import "./globals.css";
import Link from "next/link";

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

// Runs before paint so a saved dark theme doesn't flash cream first.
const themeScript = `try{if(localStorage.getItem("theme")==="dark")document.documentElement.dataset.theme="dark"}catch(e){}`;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${dmSans.variable} ${lora.variable} antialiased`}
            suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
            </head>
            <body className="font-sans">
                <div className="frame">
                    <header>
                        <h1 className="sr-only">
                            Michael Ferreira, Software Engineer
                        </h1>
                        <NameMark />
                        <SiteBar />
                    </header>
                    <main className="content">{children}</main>
                    <footer className="text-xs text-text-muted">
                        made with ❤︎⁠. inspired by{" "}
                        <Link
                            href="https://josephliao.ca"
                            className="text-xs text-text-muted">
                            joseph liao
                        </Link>
                    </footer>
                </div>
                <Analytics />
            </body>
        </html>
    );
}
