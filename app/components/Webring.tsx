import Image from "next/image";

export default function Webring() {
    return (
        <div className="flex items-center gap-1.5">
            <a
                href="https://cs.uwatering.com/#michaelferreira.me?nav=prev"
                className="text-text-muted hover:text-text no-underline hover:no-underline text-xs"
            >
                ←
            </a>
            <a href="https://cs.uwatering.com/#michaelferreira.me" target="_blank">
                <Image
                    src="https://cs.uwatering.com/icon.black.svg"
                    alt="CS Webring"
                    width={16}
                    height={16}
                    className="opacity-40 hover:opacity-70 transition-opacity"
                />
            </a>
            <a
                href="https://cs.uwatering.com/#michaelferreira.me?nav=next"
                className="text-text-muted hover:text-text no-underline hover:no-underline text-xs"
            >
                →
            </a>
        </div>
    );
}
