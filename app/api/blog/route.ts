import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/db/supabase";

export async function GET() {
    const { data, error } = await supabase
        .from("blog")
        .select("id, title, slug, excerpt, created_at")
        .order("created_at", { ascending: false });

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
}
