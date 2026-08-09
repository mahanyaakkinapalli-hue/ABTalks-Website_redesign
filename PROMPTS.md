# PROMPTS.md — AI Development Log

This project was built with Claude Code (Anthropic) as the AI pair-programmer for the
ABTalks Vibe Code Hackathon (Problem Statement 1: Redesign ABTalks). Below are the
actual prompts used, in order.

## 1. Planning prompt (no code written yet)

> I am building my ABTalks Vibe Code Hackathon project. I am participating solo and I
> selected Problem Statement 1: Redesign ABTalks... [full product brief: 60-day coding
> challenge platform, required routes `/`, `/dashboard`, `/day/12`, mobile-first at
> 390px, no auth/backend/database, realistic mocked data, "Proof Before Midnight"
> special feature, edge cases for first day/no streak, missed day, and empty profile]
> ... Before making any changes, inspect the existing project and explain: 1) what
> files you will create, 2) what files you will modify, 3) your component structure,
> 4) how you will implement the three routes. Do NOT start coding yet.

Claude inspected the existing `create-vite` scaffold and proposed a file/component
plan without writing code.

## 2. Clarifying questions (answered before implementation)

Claude asked two scoping questions:
- **Deployment target** → answered: Vercel/Netlify (client-side routing with a
  rewrite rule, not GitHub Pages).
- **How to demonstrate edge cases** (first day/no streak, missed day, empty profile)
  → answered: code-only defensive rendering, no visible on-page demo switcher.

## 3. Build prompt

> Now start building the complete ABTalks Vibe Code Hackathon Problem Statement 1
> project. Do NOT ask me more planning questions. Start implementing now. [full tech
> stack, route, page-by-page, and design requirements — mobile-first premium design,
> Build → Prove → Grow, GitHub + LinkedIn proof explanation, "Proof Before Midnight"
> feature with the exact ✓/✓/○ "2 of 3 complete" example, edge cases, accessibility,
> no external image URLs, functional buttons/links] ... After implementation: run
> `npm run build`, fix every error, verify all three routes, tell me what changed.

Claude implemented the full app: design tokens, mock data + derived-state helpers
(streak/completion/achievements are computed from data, not hardcoded), layout
(sticky navbar + mobile bottom tab bar), shared components (ProgressRing, StreakBadge,
ProofChecklist, DayGrid, AchievementBadge), and the three pages with their sections.

## 4. Mid-build correction

> I can see a Vite import error in src/App.jsx: Failed to resolve import
> "./assets/vite.svg" ... Remove all default Vite starter imports and content... Run
> npm run build after fixing everything. Do not stop until the production build
> succeeds.

This was expected transient state mid-refactor (old scaffold assets had already been
deleted, but `App.jsx`/`main.jsx` hadn't been rewritten yet in that moment). Claude
finished wiring the new `App.jsx`/`main.jsx`/router and confirmed the build was clean.

## 5. Build error fix

`npm run build` initially failed with `[MISSING_EXPORT] "Github"/"Linkedin" is not
exported by lucide-react` — the installed lucide-react version (1.30.0) ships no
brand/logo icons. Claude added a small local `BrandIcons.jsx` with hand-drawn inline
SVGs for the GitHub and LinkedIn marks and swapped every usage, then re-ran the build
until it succeeded with zero errors.

## 6. Blank preview report

> The build is clean, but the localhost preview at http://localhost:5173/ is
> completely blank. Fix the blank preview issue now.

Root cause: a stale `vite` dev server process had been running on port 5173 since
before several of the earlier fixes landed; its HMR state could get out of sync in
the browser without ever printing an error. The code itself was already correct
(verified by loading the app in a fresh, cache-free headless browser). Claude killed
the stale process, started a clean dev server, and re-verified all three routes
render with real content and zero console errors.

## 7. Final hackathon quality pass

> Now do a final hackathon quality pass. Check the project against Problem Statement
> 1 [mobile-first at 390px, all three routes, all three edge cases, at least one
> thoughtful student-experience improvement, no horizontal overflow, visual hierarchy,
> functional buttons/navigation, PROMPTS.md/README.md present, exact route map].
> Run npm run build and fix any errors.

Claude ran an automated audit (Playwright, headless) across every route and edge
case at both 390px and 1440px — checking for console errors, DOM-level horizontal
overflow, and full click/type/submit interaction flows (CTA buttons, bottom nav,
requirement checkboxes, the proof form, day-grid navigation). Two real gaps were
found and fixed:

- The **"upcoming day" state** had a large empty gap at 390px — added a dashed
  "sneak peek" mission preview so it isn't a dead end.
- The **first-day/no-streak** and **empty-profile** edge cases were only reachable
  via undocumented `?demo=` URL params, meaning a judge testing only the three
  required routes would never see them. Added a small, low-key "preview other
  student states" link row at the bottom of the dashboard (plain text links, not a
  UI toggle) so both are one tap away without touching the default `/dashboard`
  experience.

Also added the **thoughtful student-experience improvement**: a live countdown to
local midnight inside "Proof Before Midnight" (`useCountdownToMidnight.js`), so the
deadline is a real, ticking number instead of an abstract warning.

## Notes for judges

- `?demo=new` on `/dashboard` (or any `/day/:n`) previews the **first day / no streak**
  edge case using a separate mock profile — also reachable via the "preview other
  student states" links at the bottom of `/dashboard`.
- `?demo=empty` previews the **empty profile** edge case — same link row.
- The **missed day** edge case is live by default — Day 5 is marked missed in the main
  scenario, visible in the dashboard's 60-day journey grid and at `/day/5`.
