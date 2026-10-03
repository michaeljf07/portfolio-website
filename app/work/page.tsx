import type { Metadata } from "next";
import WorkExplorer from "@/app/components/projects/WorkExplorer";

export const metadata: Metadata = {
    title: "Work",
    description: "Projects built by Michael Ferreira.",
};

export default function WorkPage() {
    return <WorkExplorer />;
}
