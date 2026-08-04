import Image from "next/image";
import { SectionHeading } from "@/app/components/SectionHeading";
import { education } from "./education-data";

export default function Education() {
    return (
        <section id="education">
            <SectionHeading>Education</SectionHeading>
            <div className="flex flex-col gap-2 md:flex-row">
                {education.map((item) => (
                    <article
                        key={item.school}
                        className="rounded-xl border border-[#cfd3d8] bg-white/45 p-1"
                    >
                        <div className="flex min-w-0 items-center gap-2 rounded-xl border border-[#d9dce0] bg-white/85 px-3 py-3">
                            <div className="grid size-12 shrink-0 place-items-center overflow-hidden bg-white">
                                <Image
                                    src={item.logo}
                                    alt={item.alt}
                                    width={40}
                                    height={40}
                                    className="size-10 object-contain"
                                />
                            </div>
                            <div className="min-w-0">
                                <h3 className="font-bold">{item.school}</h3>
                                <p className=" text-sm text-text-muted">{item.degree}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
