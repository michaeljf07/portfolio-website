import { SectionHeading } from "../components/SectionHeading";
import BlogCard from "@/app/components/blog/BlogCard";
import { getBlogPosts } from "@/app/lib/blog";
import Link from "next/link";
import { connection } from "next/server";
import { Suspense } from "react";
import Back from "../components/Back";

export default function Blog() {
    return (
        <section id="blog">
            <Back />
            <SectionHeading>Blog</SectionHeading>
            <div>
                <Suspense fallback={<BlogCardsSectionSkeleton />}>
                    <BlogCardsSection />
                </Suspense>
            </div>
        </section>
    );
}

async function BlogCardsSection() {
    await connection();

    const posts = await getBlogPosts();

    return (
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
    );
}

function BlogCardsSectionSkeleton() {
    return Array.from({ length: 3 }).map((_, index) => (
        <div className="animate-pulse" key={index}>
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
    ));
}
