import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/app/lib/markdown";
import { SectionHeading } from "@/app/components/SectionHeading";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const posts = getAllPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return { title: "Post not found" };
    }

    return {
        title: post.title,
        description: post.excerpt,
    };
}

function formatDate(date: string) {
    return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

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
            <time className="block text-sm text-text-muted mb-8" dateTime={post.date}>
                {formatDate(post.date)}
            </time>
            <div
                className="blog-content [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:my-1"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
        </article>
    );
}
