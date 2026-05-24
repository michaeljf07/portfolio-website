import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Image from "next/image";

export default function Home() {
    return (
        <main className="w-full md:w-220 mx-auto space-y-16 px-8">
            <About />
            <Experience />
            <Projects />
            <Webring />
        </main>
    );
}

function Webring() {
    return (
        <div className="flex items-center gap-2">
            <a href="https://cs.uwatering.com/#michaelferreira.me?nav=prev" className="opacity-50">
                ←
            </a>
            <a href="https://cs.uwatering.com/#michaelferreira.me" target="_blank">
                <Image
                    src="https://cs.uwatering.com/icon.black.svg"
                    alt="CS Webring"
                    width={20}
                    height={20}
                    className="opacity-50"
                />
            </a>
            <a href="https://cs.uwatering.com/#michaelferreira.me?nav=next" className="opacity-50">
                →
            </a>
        </div>
    );
}
