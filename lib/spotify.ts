export type Track = {
    title: string;
    artist: string;
    url: string;
    albumArt: string | null;
};

type SpotifyTrack = {
    name: string;
    artists: { name: string }[];
    external_urls: { spotify: string };
    album: { images: { url: string }[] };
};

// Whole-word matches
// The trailing `\w\*+` catches censored titles like "B*tch" or "F**k".
const EXPLICIT_PATTERN =
    /\b(fuck\w*|motherf\w*|shit\w*|bitch\w*|cunt\w*|pussy\w*|nigg\w*|dicks?|cocks?|ass|asses|asshole\w*|hoes?|whores?|sluts?|bastards?)\b|\w\*+/i;

function isExplicit(track: Track): boolean {
    return (
        EXPLICIT_PATTERN.test(track.title) ||
        EXPLICIT_PATTERN.test(track.artist)
    );
}

async function getAccessToken(): Promise<string | null> {
    const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } =
        process.env;
    if (
        !SPOTIFY_CLIENT_ID ||
        !SPOTIFY_CLIENT_SECRET ||
        !SPOTIFY_REFRESH_TOKEN
    ) {
        console.error(
            "Missing Spotify environment variables. Listening history fetch failed.",
        );
        return null;
    }

    const res = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            Authorization: `Basic ${btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`)}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: SPOTIFY_REFRESH_TOKEN,
        }),
    });
    if (!res.ok) {
        return null;
    }
    const { access_token } = await res.json();
    return access_token;
}

// Most recent non-explicit play, or null so the widget hides itself if Spotify is unreachable.
export async function getLastPlayedTrack(): Promise<Track | null> {
    try {
        const token = await getAccessToken();
        if (!token) {
            return null;
        }

        const res = await fetch(
            "https://api.spotify.com/v1/me/player/recently-played?limit=50",
            { headers: { Authorization: `Bearer ${token}` } },
        );
        if (!res.ok) {
            return null;
        }
        const { items } = (await res.json()) as {
            items: { track: SpotifyTrack }[];
        };

        const tracks = items.map(
            ({ track }): Track => ({
                title: track.name,
                artist: track.artists.map((a) => a.name).join(", "),
                url: track.external_urls.spotify,
                // Local files have no album images.
                albumArt: track.album.images[0]?.url ?? null,
            }),
        );
        return tracks.find((track) => !isExplicit(track)) ?? null;
    } catch {
        return null;
    }
}
