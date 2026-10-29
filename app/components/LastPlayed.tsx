import Image from "next/image";
import { SpotifyIcon } from "@/app/icons/Icons";
import { getLastPlayedTrack } from "@/lib/spotify";

export default async function LastPlayed() {
    const track = await getLastPlayedTrack();
    if (!track) {
        return null;
    }

    return (
        <a
            href={track.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:grid w-fit max-w-72 grid-cols-[48px_minmax(0,1fr)] items-center gap-3 no-underline hover:no-underline">
            <div className="relative size-12 overflow-hidden rounded-md border border-border bg-tag-bg">
                {track.albumArt && (
                    <Image
                        src={track.albumArt}
                        alt=""
                        fill
                        sizes="48px"
                        className="object-cover"
                    />
                )}
            </div>
            <div className="min-w-0 leading-tight">
                <p className="flex items-center gap-1.5 text-xs text-text-muted">
                    <SpotifyIcon className="w-3 h-3" />
                    last played
                </p>
                <p className="mt-0.5 truncate text-sm font-medium text-text">
                    {track.title}
                </p>
                <p className="truncate text-xs text-text-muted">
                    {track.artist}
                </p>
            </div>
        </a>
    );
}
