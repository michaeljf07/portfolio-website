import { getBlogPosts } from "@/app/lib/blog";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const data = await getBlogPosts();
        return NextResponse.json(data);
    } catch (error) {
        const message = error instanceof Error ? error.message : "Failed to fetch posts";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
