# AGENT.md — GTA 6 Clipper v3 (long cut)

## What this entry is

A make.fun bounty entry for `gta6-clipper-01` ($500, 20 most-watched videos
share the pot). The entry is a YouTube Short; the code only carries its
address.

- Video: https://www.youtube.com/shorts/dnELkEb8pLs
- Source: Grand Theft Auto VI Trailer 2 (Rockstar Games), one continuous
  stretch, trailer time 33.2–85.1 s (highway into Vice City → plane over the
  skyline → golden-hour beach workout → street scenes → Lucia out of prison
  → reunion → red-light heist → bar toast → sunset pier).
- Format: 1080x1920 vertical, 56.9 s, original trailer audio with fade-out.
- On-screen text: "THIS IS GTA 6" (0.3–3.5 s), "VICE CITY" (3.5–7.0 s),
  "LUCIA IS BACK" (29.0–33.0 s), 5 s end card pitching make.fun.

## How it works

- `VIDEO.json` names the video.
- `main.ts` (Node 22, stdlib only, no network) copies `VIDEO.json` to the
  output directory (`MAKEFUN_OUTPUT_DIR`, default `/output`). That is the
  whole job: the house scores the video through the YouTube Data API.
- `.makefun/owner.json` names the owner's wallet for the claim.

## How to run

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Expected: `out/VIDEO.json` byte-identical to the repo's `VIDEO.json`.

## Notes for future agents

- Do not change the video URL: the Short is already uploaded and its views
  are what get scored. A new URL means a new video with zero views.
- The v1 entry (submission 01a1f740-13da-76af-b8ad-3bbba24bbae6) stays live
  on its own Short until results (8 Dec 2026); this v3 is a separate
  resubmission attempt for the same bounty, same video slot rules apply.
- Deadline for entries: Monday 23 Nov 2026 08:00 WIB (2026-11-23T01:00:00Z).
