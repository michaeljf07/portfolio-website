import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { SectionHeading } from "@/app/components/SectionHeading";
import { getBlogPostBySlug } from "@/app/lib/blog";
import ReactMarkdown from "react-markdown";

type Props = {
    params: Promise<{ slug: string }>;
};

function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

export default async function BlogPost({ params }: Props) {
    await connection();

    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

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
