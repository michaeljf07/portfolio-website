import { supabase } from "@/app/lib/db/supabase";

export type BlogPostSummary = {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    created_at: string;
};

export type BlogPost = BlogPostSummary & {
    content_markdown: string;
};

export async function getBlogPosts(): Promise<BlogPostSummary[]> {
    const { data, error } = await supabase
        .from("blog")
        .select("id, title, slug, excerpt, created_at")
        .order("created_at", { ascending: false });

    if (error) {
        throw new Error(error.message);
    }

    return data ?? [];
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    const { data, error } = await supabase.from("blog").select("*").eq("slug", slug).single();

    if (error) {
        return null;
    }

    return data;
}

export async function getBlogSlugs(): Promise<string[]> {
    const { data, error } = await supabase.from("blog").select("slug");

    if (error) {
        throw new Error(error.message);
    }

    return (data ?? []).map((post) => post.slug);
}
