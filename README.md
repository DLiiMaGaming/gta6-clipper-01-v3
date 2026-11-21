# GTA 6 Clipper — Vice City in 57 Seconds

[![make.fun bounty](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/DLiiMaGaming/gta6-clipper-01-v3/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/DLiiMaGaming/gta6-clipper-01-v3/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

An entry for the [$500 GTA 6 clipper bounty on make.fun](https://make.fun/bounty/gta6-clipper-01):
cut one continuous stretch of Rockstar's Grand Theft Auto VI Trailer 2 into a
vertical Short that rides the GTA 6 hype, then tells its viewers they can make
money on make.fun by making clips with AI.

## The clip

- **Video:** https://www.youtube.com/shorts/dnELkEb8pLs
- **Source:** Grand Theft Auto VI Trailer 2 (Rockstar Games), one continuous
  stretch, trailer time 33.2–85.1 s — highway into Vice City, a plane over the
  skyline, the golden-hour beach workout, street scenes, Lucia walking out of
  prison, the reunion, the red-light heist, the bar toast, the sunset pier.
- **Format:** 1080x1920 vertical, 56.9 s, original trailer audio with a fade-out.
- **On-screen text:** "THIS IS GTA 6" (0.3–3.5 s), "VICE CITY" (3.5–7.0 s),
  "LUCIA IS BACK" (29.0–33.0 s, over Lucia's release), then a 5-second end card:
  "Make clips like this with AI / and earn money on make.fun /
  make.fun/bounty/gta6-clipper-01".
- **Why this stretch:** it is the trailer's most cinematic continuous run — it
  opens on Vice City itself, then follows Lucia's story arc from prison to
  freedom to the crew. One place, one arc, no montage cuts, so a viewer stays
  for the whole minute and the pitch lands at the end.

## The entry

`VIDEO.json` at the repository root names the video. `main.ts` (Node 22,
standard library only) copies `VIDEO.json` to the output directory — that is
all it has to do; the house reads the video itself through the YouTube Data
API and places go by its views. The 20 most watched videos share $500.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
