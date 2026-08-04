import Image from "next/image";
import type { LifeImage } from "./life-data";

export default function LifeGallery({ title, images }: { title: string; images: LifeImage[] }) {
    if (images.length === 0) {
        return (
            <div
                className="grid grid-cols-3 gap-2.5 max-sm:grid-cols-2"
                aria-label={`${title} gallery awaiting images`}
            >
                {[1, 2, 3].map((slot) => (
                    <div
                        key={slot}
                        className={`grid aspect-4/5 min-w-0 place-items-center overflow-hidden rounded-[13px] border border-dashed border-border bg-tag-bg/60 text-xs text-text-muted ${slot === 3 ? "max-sm:hidden" : ""}`}
                    >
                        {slot === 2 && <span>Images coming soon</span>}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-3 gap-2.5 max-sm:grid-cols-2">
            {images.map((image, index) => (
                <figure
                    className="relative aspect-4/5 min-w-0 overflow-hidden rounded-[13px] border border-border bg-tag-bg"
                    key={`${image.src}-${index}`}
                >
                    {isRemoteImage(image.src) ? (
                        <Image
                            src={image.src}
                            alt={image.alt}
                            loading="lazy"
                            className="size-full object-cover"
                        />
                    ) : (
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, 33vw"
                            className="object-cover"
                        />
                    )}
                    {image.caption && (
                        <figcaption className="absolute inset-x-2 bottom-2 rounded-md bg-black/70 px-2 py-1.5 text-[0.7rem] text-white backdrop-blur-lg">
                            {image.caption}
                        </figcaption>
                    )}
                </figure>
            ))}
        </div>
    );
}

function isRemoteImage(src: string) {
    return src.startsWith("https://") || src.startsWith("http://");
}
