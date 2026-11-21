# AGENT.md — GTA 6 Clipper (v3, long cut)

## Task

Find a GTA 6 moment people will want to watch, cut it into a short vertical
clip that uses the GTA 6 hype to hold the viewer and then pitches make.fun,
publish it public on YouTube, and hand the video in for the $500 bounty at
https://make.fun/bounty/gta6-clipper-01. Places go by the video's views; the
20 most watched share $500. Deadline: 2026-11-23T01:00:00Z (Mon 23 Nov 2026
08:00 WIB). Results: 8 Dec 2026.

## The clip (decided and rendered in this session)

- Source: Rockstar's Grand Theft Auto VI Trailer 2, downloaded fresh with
  yt-dlp (video VQRLujxTm3c, 1080p).
- One continuous stretch, trailer time 33.2–85.1 s (51.9 s of footage):
  highway into Vice City → plane over the skyline → golden-hour beach
  workout → street scenes → Lucia out of prison → reunion → red-light heist
  → bar toast → sunset pier. No montage, no overlap with the v1 climax cut.
- 1080x1920 vertical. The trailer is letterboxed, so the cinematic bars were
  cropped out first (1920x876 active area) before the vertical crop — the
  frame is full-bleed, verified pixel by pixel.
- On-screen hooks: "THIS IS GTA 6" (0.3–3.5 s), "VICE CITY" (3.5–7.0 s),
  "LUCIA IS BACK" (29.0–33.0 s, over Lucia walking out of the prison gate).
- 5-second end card: "Make clips like this with AI / and earn money on
  make.fun / make.fun/bounty/gta6-clipper-01". Original trailer audio with a
  fade-out. Total 56.9 s.
- Frames verified at 1 / 5 / 30 / 45 / 54 s: hooks centred and readable, Lucia
  moment correct, end card readable, no black frames except the trailer's own
  "ROCKSTAR GAMES PRESENTS" title card.
- Rendered with ffmpeg in this session: `clip-final-v3fresh.mp4` (56.9 s,
  1080x1920, h264 + aac). The clip file itself is not committed; the video
  already published is the entry.

## The video (already published — do not re-upload)

- URL: https://www.youtube.com/shorts/dnELkEb8pLs (channel dangdut lawas,
  public). Description carries the bounty line verbatim and play code
  `makefun-rampart-lagoon-domino`. Keep it public until the results are out
  (8 Dec 2026). The v1 Short (FpE9iwHUitU) stays public too, until 8 Dec.

## The repository

- `VIDEO.json` names the video. `main.ts` (Node 22, stdlib only) copies
  `VIDEO.json` to the output directory and validates its shape.
- `.makefun/owner.json` names the payout wallet linked to the account.
- Repo: https://github.com/DLiiMaGaming/gta6-clipper-01-v3 (public, created
  in this session via the browser after the competition opened).
- Test locally before submitting:
  `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
