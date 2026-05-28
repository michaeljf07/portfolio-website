import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getSiteUrl } from "@/lib/site";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
    title: {
        default: "Michael Ferreira | Portfolio",
        template: "%s | Michael Ferreira",
    },
    description:
        "Michael Ferreira - Software Engineer and Developer. Computer Science and Business double degree student at University of Waterloo and Wilfrid Laurier University. Portfolio showcasing projects in web development, machine learning, and full-stack applications.",
    keywords: [
        "Michael Ferreira",
        "Michael J Ferreira",
        "Software Engineer",
        "Developer",
        "University of Waterloo",
        "Wilfrid Laurier University",
        "Computer Science",
        "Portfolio",
        "Web Developer",
        "Full-Stack Developer",
    ],
    authors: [
        {
            name: "Michael Ferreira",
            url: "https://linkedin.com/in/michael-j-ferreira",
        },
    ],
    creator: "Michael Ferreira",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteUrl,
        siteName: "Michael Ferreira",
        title: "Michael Ferreira | Software Engineer & Developer Portfolio",
        description:
            "Michael Ferreira - Software Engineer and Developer. Computer Science and Business student at University of Waterloo and Wilfrid Laurier University.",
        images: [
            {
                url: "/headshots/headshot2.png",
                width: 800,
                height: 1000,
                alt: "Michael Ferreira - Software Engineer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Michael Ferreira | Software Engineer & Developer Portfolio",
        description:
            "Michael Ferreira - Software Engineer and Developer. Computer Science and Business student at University of Waterloo and Wilfrid Laurier University.",
        images: ["/headshots/headshot2.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    alternates: {
        canonical: siteUrl,
    },
    category: "technology",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    viewportFit: "cover",
};

const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Michael Ferreira",
    alternateName: "Michael J Ferreira",
    url: siteUrl,
    image: `${siteUrl}/headshots/headshot2.png`,
    jobTitle: "Software Engineer",
    description:
        "Software Engineer and Developer. Computer Science and Business student at University of Waterloo and Wilfrid Laurier University.",
    alumniOf: [
        {
            "@type": "CollegeOrUniversity",
            name: "University of Waterloo",
        },
        {
            "@type": "CollegeOrUniversity",
            name: "Wilfrid Laurier University",
        },
    ],
    knowsAbout: [
        "Software Engineering",
        "Web Development",
        "Machine Learning",
        "Full-Stack Development",
    ],
    sameAs: [
        "https://github.com/michaeljf07",
        "https://linkedin.com/in/michael-j-ferreira",
        "https://instagram.com/michael.ferreira07",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} h-full antialiased`}>
            <body
                className="min-h-full py-24 md:py-36"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
                {children}
            </body>
        </html>
    );
}
