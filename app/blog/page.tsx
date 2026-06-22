import { SectionHeading } from "../components/SectionHeading";
import BlogCard from "@/app/components/blog/BlogCard";
import { getBlogPosts } from "@/app/lib/blog";
import Link from "next/link";
import { Suspense } from "react";

export default async function Blog() {
    const posts = await getBlogPosts();

    return (
        <Suspense fallback={<BlogCardSkeleton />}>
            <section id="blog">
                <Link
                    href="/"
                    className="text-sm text-text-muted hover:text-text no-underline hover:no-underline mb-6 inline-block"
                >
                    ← Back to home
                </Link>
                <SectionHeading>Blog</SectionHeading>
                <div>
                    {posts.map((post) => (
                        <BlogCard
                            key={post.slug}
                            title={post.title}
                            excerpt={post.excerpt}
                            slug={post.slug}
                            date={post.created_at}
                        />
                    ))}
                </div>
            </section>
        </Suspense>
    );
}

export function BlogCardSkeleton() {
    return (
        <>
            <Link
                href="/"
                className="text-sm text-text-muted hover:text-text no-underline hover:no-underline mb-6 inline-block"
            >
                ← Back to home
            </Link>
            <SectionHeading>Blog</SectionHeading>
            <div className="p-4 rounded-lg border border-transparent">
                <div className="animate-pulse">
                    {/* Title Skeleton - matches text-lg height */}
                    <div className="h-6 bg-tag-bg rounded-md w-3/4 mb-2" />

                    {/* Excerpt Skeleton - matches text-sm (approx 2 lines) */}
                    <div className="space-y-2 mb-2">
                        <div className="h-4 bg-tag-bg rounded-md w-full" />
                        <div className="h-4 bg-tag-bg rounded-md w-5/6" />
                    </div>

                    {/* Date Skeleton - matches text-sm */}
                    <div className="h-3 bg-tag-bg rounded-md w-1/4" />
                </div>
            </div>
        </>
    );
}
