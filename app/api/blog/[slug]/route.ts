import { getBlogPostBySlug } from "@/app/lib/blog";
import { NextResponse } from "next/server";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function GET(request: Request, { params }: Props) {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(post);
}
