import { getBlogPosts } from "@/app/lib/blog";
import { connection, NextResponse } from "next/server";

export async function GET() {
    await connection();

    try {
        const data = await getBlogPosts();
        return NextResponse.json(data);
    } catch (error) {
        const message = error instanceof Error ? error.message : "Failed to fetch posts";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
