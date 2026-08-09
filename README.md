# ABTalks — 60 Days. 60 Builds. One Stronger You.

A redesign of ABTalks, a 60-day coding challenge platform for Indian college
students, built for the ABTalks Vibe Code Hackathon (Problem Statement 1).

No backend, no database, no authentication — everything runs on realistic
mocked data (`src/data/mockData.js`).

## Tech stack

React · Vite · JavaScript · React Router · Lucide React · CSS Modules

## Routes

| Route | Page |
| --- | --- |
| `/` | Landing page — hero, how it works, GitHub/LinkedIn proof explainer, trust signals |
| `/dashboard` | Student dashboard — streak, completion, today's task, 60-day journey, achievements, proof status |
| `/day/:dayId` | Challenge day — mission, requirements, difficulty, and the "Proof Before Midnight" submission flow (e.g. `/day/12`) |

## The special feature: Proof Before Midnight

Every current-day page and the dashboard surface a live checklist —
`✓ Complete today's task` / `✓ Push to GitHub` / `○ Share on LinkedIn` — so a
student can see at a glance exactly what stands between them and a broken
streak.

## Edge cases

- **Missed day** — live by default: Day 5 is marked missed in the main
  scenario. Visible in the dashboard's 60-day journey grid and at `/day/5`.
- **First day / no streak** — a brand-new student on Day 1 with a zero streak.
  Preview it via the "preview other student states" links at the bottom of
  `/dashboard`, or directly at `/dashboard?demo=new`.
- **Empty profile** — a student who hasn't connected anything or started Day 1
  yet. Same link row on `/dashboard`, or directly at `/dashboard?demo=empty`.

All three are handled in code (derived from data, not hardcoded), not just
visually swapped — see `src/utils/challengeHelpers.js` and
`src/utils/scenario.js`.

## A student-experience touch

"Proof Before Midnight" includes a live countdown to local midnight
(`src/utils/useCountdownToMidnight.js`), so the deadline is a real, ticking
number rather than an abstract warning.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build
npm run preview  # preview the production build locally
```

## Deployment

Configured for Vercel (`vercel.json`) and Netlify (`public/_redirects`) so
client-side routing (`/dashboard`, `/day/12`, direct refreshes) works
correctly on either static host.

See [PROMPTS.md](./PROMPTS.md) for the AI development prompt log.
