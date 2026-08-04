import Image from "next/image";

export default function Hero() {
    return (
        <section id="about" className="grid grid-cols-[minmax(0,1fr)_auto] items-center pt-8">
            <div>
                <p className="mb-2.5 text-sm font-semibold tracking-wide text-text-muted uppercase">
                    Software Engineer · Toronto, ON
                </p>
                <h1
                    className="text-6xl font-bold leading-tight tracking-tight max-sm:text-3xl"
                    style={{ fontFamily: "var(--font-lora), serif" }}
                >
                    Michael Ferreira
                </h1>
            </div>
            <Image
                src="/headshots/headshot4.png"
                alt="Michael Ferreira"
                width={144}
                height={144}
                priority
                className="size-32 rotate-2 rounded-xl border border-[#cfcfc8] object-cover shadow-[0_14px_32px_rgba(30,30,26,0.11)] max-sm:size-22 max-sm:rounded-[17px]"
            />
            <div className="col-span-full max-w-xl text-base leading-7 text-text/90">
                <p className="m-0">
                    I study computer science at the <strong>University of Waterloo</strong>{" "}
                    alongside a business degree at <strong>Wilfrid Laurier University</strong>.
                    I&apos;m currently working as a software engineer at ZEVA Global and Temerity
                    Analytics, and as the founding engineer at Cache.
                </p>
                <p className="mt-3">
                    I enjoy turning interesting problems into simple, useful products and working
                    with people who care about the details.
                </p>
            </div>
        </section>
    );
}
