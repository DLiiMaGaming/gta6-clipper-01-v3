// GTA 6 Clipper — entrypoint.
//
// The entry is a video, not a program: VIDEO.json at the repository root
// names the Short, and this script copies it into the output directory.
// The house reads the video itself through the YouTube Data API and ranks
// the entry on its views, so the script has nothing else to do.
//
// Runtime: Node 22, standard library only, no network access.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)));
const VIDEO_FILE = join(REPO_ROOT, "VIDEO.json");

// A YouTube video address, exactly as the bounty reads one:
// youtube.com/shorts/<id>, youtube.com/watch?v=<id> or youtu.be/<id>,
// the id 11 characters of letters, digits, _ and -.
const YOUTUBE_URL =
  /^https:\/\/(?:www\.|m\.)?(?:youtube\.com\/(?:shorts\/|watch\?v=)|youtu\.be\/)[A-Za-z0-9_-]{11}(?:[?#].*)?$/;

function outputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) {
    return resolve(fromEnv);
  }
  return "/output";
}

function readVideoLink(): { url: string } {
  if (!existsSync(VIDEO_FILE)) {
    throw new Error(`VIDEO.json not found at ${VIDEO_FILE}`);
  }
  const raw = readFileSync(VIDEO_FILE, "utf8");
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error("VIDEO.json is not valid JSON");
  }
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    throw new Error("VIDEO.json must be a JSON object with a url field");
  }
  const url = (parsed as { url?: unknown }).url;
  if (typeof url !== "string" || !YOUTUBE_URL.test(url)) {
    throw new Error(`VIDEO.json url is not a YouTube video address: ${String(url)}`);
  }
  return { url };
}

function main(): void {
  const video = readVideoLink();
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  // Copy the file byte-for-byte: the output must be identical to the repo's.
  writeFileSync(join(dir, "VIDEO.json"), readFileSync(VIDEO_FILE), "utf8");
  console.log(`Wrote VIDEO.json to ${dir} for ${video.url}`);
}

main();
