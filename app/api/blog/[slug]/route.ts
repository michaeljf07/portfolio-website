import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/db/supabase";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function GET(request: Request, { params }: Props) {
    const { slug } = await params;

    const { data, error } = await supabase.from("blog").select("*").eq("slug", slug).single();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
}
