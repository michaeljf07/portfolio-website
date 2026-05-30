import Sidebar from "./components/Sidebar";
import SectionHeading from "./components/SectionHeading";
import AboutPanel from "./components/hero/about/AboutPanel";
import ExperiencePanel from "./components/hero/experience/ExperiencePanel";
import ProjectsPanel from "./components/hero/projects/ProjectsPanel";

export default function Home() {
    const sectionStyles =
        "scroll-mt-4 sm:scroll-mt-6 py-8 sm:py-10 border-b border-dashed border-(--color-border-dashed)";
    const cardStyles =
        "rounded-xl sm:rounded-3xl bg-(--color-bg-card)/95 border border-(--color-border-card) backdrop-blur-none p-4 sm:p-6";
    return (
        <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen lg:overflow-hidden">
            <Sidebar />

            <main
                id="main-scroll"
                className="w-full flex-none content-scroll dot-bg max-lg:overflow-x-hidden lg:flex-1 lg:min-h-0 lg:overflow-y-auto"
            >
                <div className="mx-4 sm:mx-9 md:mx-12 lg:mx-16 pb-[env(safe-area-inset-bottom)]">
                    <section id="about" className={sectionStyles}>
                        <div className={cardStyles}>
                            <SectionHeading>Hi, I&apos;m Michael!</SectionHeading>
                            <AboutPanel />
                        </div>
                    </section>

                    <section id="experience" className={sectionStyles}>
                        <div className={cardStyles}>
                            <SectionHeading>Experience</SectionHeading>
                            <ExperiencePanel />
                        </div>
                    </section>

                    <section id="projects" className={sectionStyles}>
                        <div className={cardStyles}>
                            <SectionHeading>Projects</SectionHeading>
                            <ProjectsPanel />
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
