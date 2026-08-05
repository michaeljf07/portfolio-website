import About from "@/app/components/about/About";
import Experience from "@/app/components/experience/Experience";
import Projects from "@/app/components/projects/Projects";
import DesktopSidebar from "@/app/components/desktop/DesktopSidebar";

export default function Home() {
    return (
        <div className="flex">
            <DesktopSidebar />
            <main className="flex-1 min-w-0 space-y-20 md:pt-2">
                <About />
                <Experience />
                <Projects />
            </main>
        </div>
    );
}
