import { SectionHeading } from "../components/SectionHeading";
import { getAllPosts } from "@/app/lib/markdown";
import BlogCard from "@/app/components/blog/BlogCard";

export default function Blog() {
    return (
        <section id="blog">
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
