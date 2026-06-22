import { SectionHeading } from "../components/SectionHeading";
import { getAllPosts } from "@/app/lib/markdown";
import BlogCard from "@/app/components/blog/BlogCard";
import Link from "next/link";

export default function Blog() {
    return (
        <section id="blog">
            <Link
                href="/"
                className="text-sm text-text-muted hover:text-text no-underline hover:no-underline mb-6 inline-block"
            >
                ← Back to home
            </Link>
            <SectionHeading>Blog</SectionHeading>
            <div>
                {getAllPosts().map((post) => (
                    <BlogCard
                        key={post.slug}
                        title={post.title}
                        excerpt={post.excerpt}
                        slug={post.slug}
                        date={post.date}
                    />
                ))}
            </div>
        </section>
    );
}
