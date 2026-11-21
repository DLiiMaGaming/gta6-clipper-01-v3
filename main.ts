// GTA 6 Clipper — entrypoint.
//
// Copies VIDEO.json from this repository into the output directory.
// That is the whole job: the house reads the video itself through the
// YouTube Data API and scores the entry on its views. Nothing written
// here about the video counts toward the score.
//
// Runtime: Node 22, standard library only, no network.
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
  const link = readVideoLink();
  const out = outputDir();
  mkdirSync(out, { recursive: true });
  const target = join(out, "VIDEO.json");
  writeFileSync(target, JSON.stringify(link, null, 2) + "\n", "utf8");
  console.log(`Wrote ${target} for ${link.url}`);
}

main();
