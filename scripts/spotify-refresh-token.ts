// One-time helper: logs you into Spotify and saves SPOTIFY_REFRESH_TOKEN to .env.
// Add http://127.0.0.1:8888/callback as a Redirect URI in the Spotify app dashboard first.
// Run with: bun scripts/spotify-refresh-token.ts
import { createServer } from "node:http";
import { readFileSync, writeFileSync } from "node:fs";

const REDIRECT_URI = "http://127.0.0.1:8888/callback";
const SCOPE = "user-read-recently-played";
const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
    console.error("Missing SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET in .env");
    process.exit(1);
}

const authUrl = new URL("https://accounts.spotify.com/authorize");
authUrl.search = new URLSearchParams({
    client_id: SPOTIFY_CLIENT_ID,
    response_type: "code",
    redirect_uri: REDIRECT_URI,
    scope: SCOPE,
}).toString();

const server = createServer(async (req, res) => {
    if (!req.url) {
        console.error("No url was returned");
        return server.close();
    }
    const url = new URL(req.url, REDIRECT_URI);
    if (url.pathname !== "/callback") return res.end();

    const code = url.searchParams.get("code");
    if (!code) {
        res.end("No code returned. Check the terminal.");
        console.error("Spotify returned:", url.searchParams.get("error"));
        return server.close();
    }

    const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            Authorization: `Basic ${btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`)}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "authorization_code",
            code,
            redirect_uri: REDIRECT_URI,
        }),
    });
    const { refresh_token, error_description } = await tokenRes.json();

    if (!refresh_token) {
        res.end("Token exchange failed. Check the terminal.");
        console.error("Token exchange failed:", error_description);
        return server.close();
    }

    const env = readFileSync(".env", "utf8")
        .split("\n")
        .filter((line) => !line.startsWith("SPOTIFY_REFRESH_TOKEN="))
        .join("\n")
        .trimEnd();
    writeFileSync(".env", `${env}\nSPOTIFY_REFRESH_TOKEN=${refresh_token}\n`);

    res.end("Saved SPOTIFY_REFRESH_TOKEN to .env. You can close this tab.");
    console.log("Saved SPOTIFY_REFRESH_TOKEN to .env");
    server.close();
});

server.listen(8888, "127.0.0.1", () => {
    console.log(`Open this URL and approve access:\n\n${authUrl}\n`);
});
