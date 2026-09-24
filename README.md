# Kayalini's Study Corner

An offline-first, interactive study tool for CBSE Class 5 Mathematics
(Collins Perfect Maths 5, 2nd Edition) — built for Kayalini, designed as a
reusable framework for any board/grade/subject.

**Live site:** _(add the Vercel URL here once deployed — see below)_

## What's in here

- **`index.html`** — the entire application. One self-contained file:
  concept notes, practice questions (MCQ / Assertion-Reason / short-answer),
  animated "Watch & Learn" video lessons, a Keyword Clues reference,
  a Mock Test Generator calibrated to a real DAV School Periodic Test
  format, a Reference Library, and Test Records — all client-side, no
  server required.

## How this is organized internally

The app is built around a `Board → Grade → Subject → Chapters` catalog.
Right now only **CBSE → Class 5 → Mathematics** is fully built out; every
other board/grade/subject is a visible placeholder ("coming soon") in the
sidebar, ready for future content.

## How updates work

This repo is connected to Vercel for hosting. Every time `index.html` is
updated here on GitHub, Vercel automatically redeploys the live site within
about a minute — no manual re-download or reinstall needed.

**To update the live site:**
1. Open this repository on GitHub.
2. Click on `index.html`, then click the pencil (✏️) icon to edit, or use
   "Add file → Upload files" to replace it with a new version.
3. Commit the change.
4. Wait ~30–60 seconds, then refresh the live site — the update is there.

## Roadmap

See `/docs` for the longer-term plan: a general framework for building
this out across other boards (ICSE, IGCSE, IB) and grades, plus a syllabus
index research pass already done for CBSE Mathematics Classes 1–12.
