import About from "@/app/components/about/About";
import Experience from "@/app/components/experience/Experience";
import Projects from "@/app/components/projects/Projects";
import MobileSidebar from "@/app/components/mobile/MobileSidebar";
import DesktopSidebar from "@/app/components/desktop/DesktopSidebar";

export default function Home() {
    return (
        <div className="flex min-h-screen max-w-5xl mx-auto px-6 md:px-12 gap-16 py-16">
            <Sidebar />
            <main className="flex-1 min-w-0 space-y-20 md:pt-2">
                <About />
                <Experience />
                <Projects />
            </main>
        </div>
    );
}

function Sidebar() {
    return (
        <>
            <MobileSidebar />
            <DesktopSidebar />
        </>
    );
}
