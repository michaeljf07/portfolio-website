import Image from "next/image";
import Link from "next/link";

export type Experience = {
    title: string;
    company: string;
    company_url?: string;
    company_logo: string;
    location: string;
    dates: {
        incoming?: boolean;
        start_date: string | null;
        end_date: string | null;
    };
    summary: string;
    technologies?: string[];
    description?: string[];
};

export function getExperienceDetailText(exp: Experience): string {
    let res = exp.location;
    const dates = exp.dates;
    if (dates.incoming) {
        res += ` · Incoming ${dates.start_date}`;
        return res;
    }
    res += ` · ${dates.start_date} - ${dates.end_date ? dates.end_date : "Present"}`;
    return res;
}

export default function ExperienceRow({ exp }: { exp: Experience }) {
    return (
        <li className="grid grid-cols-[50px_minmax(0,1fr)] items-center gap-4">
            <div className="overflow-hidden rounded-md border border-border bg-white">
                <Image
                    src={exp.company_logo}
                    alt=""
                    width={50}
                    height={50}
                    className="size-full object-cover"
                />
            </div>
            <div className="min-w-0 leading-tight">
                <p className="truncate text-sm">
                    {exp.company_url ? (
                        <Link
                            href={exp.company_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-text">
                            {exp.company}
                        </Link>
                    ) : (
                        <span className="font-medium">{exp.company}</span>
                    )}
                    <span className="text-text-muted"> · {exp.title}</span>
                </p>
                <p className="mt-0.5 text-xs text-text-muted tabular-nums">
                    {getExperienceDetailText(exp)}
                </p>
            </div>
        </li>
    );
}
