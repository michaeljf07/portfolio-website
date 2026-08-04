import Hero from "@/app/components/about/Hero";
import Education from "@/app/components/about/Education";
import Experience from "@/app/components/experience/Experience";
import Projects from "@/app/components/projects/Projects";
import Webring from "@/app/components/Webring";

export default function Home() {
    return (
        <div className="flex flex-col gap-16">
            <Hero />
            <Experience />
            <Education />
            <Projects limit={4} showAllLink />
            <Webring />
        </div>
    );
}
