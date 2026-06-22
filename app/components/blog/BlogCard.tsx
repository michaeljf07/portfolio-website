import Link from "next/link";

type BlogCardProps = {
    title: string;
    excerpt: string;
    slug: string;
    date: string;
};

function formatDate(date: string) {
    return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

export default function BlogCard({ title, excerpt, slug, date }: BlogCardProps) {
    return (
        <Link href={`/blog/${slug}`} className="block no-underline! hover:no-underline!">
            <article className="hover:bg-tag-bg transition-colors p-4 rounded-lg">
                <h3
                    className="text-lg font-bold text-text! mb-2"
                    style={{ fontFamily: "var(--font-lora), serif" }}
                >
                    {title}
                </h3>
                <p className="text-sm text-text-muted ">{excerpt}</p>
                <time className="text-sm text-text-muted" dateTime={date}>
                    {formatDate(date)}
                </time>
            </article>
        </Link>
    );
}
