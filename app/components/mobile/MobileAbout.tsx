import Image from "next/image";
import Webring from "../Webring";
import Link from "next/link";
import { FileIcon, GitHubIcon, LinkedInIcon } from "@/app/icons/Icons";

const pageLinks = [{ label: "Life", href: "/life" }] as const;

export default function MobileAbout() {
    return (
        <aside className="md:hidden flex items-center gap-4 mb-4">
            <div className="w-32 h-32 rounded-full overflow-hidden border border-border">
                <Image
                    src="/headshots/headshot4.png"
                    alt="Michael Ferreira"
                    width={144}
                    height={144}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="flex flex-col gap-2">
                <div>
                    <h1
                        className="text-xl font-semibold leading-tight"
                        style={{ fontFamily: "var(--font-lora), serif" }}>
                        Michael Ferreira
                    </h1>
                    <p className="text-sm text-text-muted mt-0.5">
                        Software Engineer
                    </p>
                </div>

                <div className="flex gap-3">
                    {pageLinks.map(({ label, href, ...link }) => (
                        <Link
                            key={href}
                            href={href}
                            className="text-sm text-text-muted hover:text-text no-underline hover:no-underline"
                            {...link}>
                            {label}
                        </Link>
                    ))}
                </div>

                <Webring />
            </div>
        </aside>
    );
}
