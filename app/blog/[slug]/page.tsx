import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import { SectionHeading } from "@/app/components/SectionHeading";
import { getBlogPostBySlug } from "@/app/lib/blog";
import ReactMarkdown from "react-markdown";
import { Suspense } from "react";

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
    return (
        <article>
            <Link
                href="/blog"
                className="text-sm text-text-muted hover:text-text no-underline hover:no-underline mb-6 inline-block"
            >
                ← Back to blog
            </Link>
            <Suspense fallback={<BlogPostSectionSkeleton />}>
                <BlogPostContentSection params={params} />
            </Suspense>
        </article>
    );
}

async function BlogPostContentSection({ params }: Props) {
    await connection();

    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <SectionHeading>{post.title}</SectionHeading>
            <time className="block text-sm text-text-muted mb-8" dateTime={post.created_at}>
                {formatDate(post.created_at)}
            </time>
            <div className="blog-content">
                <ReactMarkdown>{post.content_markdown}</ReactMarkdown>
            </div>
        </>
    );
}

function BlogPostSectionSkeleton() {
    return (
        <article className="animate-pulse">
            {/* Title skeleton (mimicking SectionHeading) */}
            <div className="h-10 w-3/4 bg-tag-bg rounded-md mb-4" />

            {/* Date skeleton */}
            <div className="h-4 w-32 bg-tag-bg rounded mb-8" />

            {/* Content skeleton (mimicking paragraphs) */}
            <div className="space-y-4">
                <div className="h-4 w-full bg-tag-bg rounded" />
                <div className="h-4 w-full bg-tag-bg rounded" />
                <div className="h-4 w-5/6 bg-tag-bg rounded" />

                <div className="pt-4 space-y-4">
                    <div className="h-4 w-full bg-tag-bg rounded" />
                    <div className="h-4 w-4/6 bg-tag-bg rounded" />
                </div>

                <div className="pt-4 space-y-4">
                    <div className="h-4 w-full bg-tag-bg rounded" />
                    <div className="h-4 w-full bg-tag-bg rounded" />
                    <div className="h-4 w-3/4 bg-tag-bg rounded" />
                </div>
            </div>
        </article>
    );
}
