import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
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
        <html lang="en" className={`${inter.variable} h-full antialiased`}>
            <body
                className="min-h-full py-36"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
                {children}
            </body>
        </html>
    );
}
