import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/app/components/SectionHeading";
import ReactMarkdown from "react-markdown";

type Props = {
    params: Promise<{ slug: string }>;
};

type BlogPost = {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    created_at: string;
    content_markdown: string;
};

function formatDate(date: string) {
    return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;

    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blog/${slug}`);
    if (!response.ok) {
        throw new Error("Failed to fetch post");
    }
    const post = (await response.json()) as BlogPost;

    if (!post) {
        notFound();
    }

    return (
        <article>
            <Link
                href="/blog"
                className="text-sm text-text-muted hover:text-text no-underline hover:no-underline mb-6 inline-block"
            >
                ← Back to blog
            </Link>
            <SectionHeading>{post.title}</SectionHeading>
            <time className="block text-sm text-text-muted mb-8" dateTime={post.created_at}>
                {formatDate(post.created_at)}
            </time>
            <div className="blog-content">
                <ReactMarkdown>{post.content_markdown}</ReactMarkdown>
            </div>
        </article>
    );
}
