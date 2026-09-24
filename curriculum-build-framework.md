# Framework for Building a New Subject / Syllabus / Grade

This is the actual working method that emerged from building CBSE Class 5
Collins Maths for Kayalini — not a theoretical process, but what genuinely
worked (and what broke) across ~15 real chapters, 100+ practice questions,
55 video lessons, and a mock test generator calibrated against a real school
paper. Use this as the playbook for the next board/grade/subject.

---

## 1. Required Inputs (get these *before* writing content)

Content built without these was wrong often enough that this isn't optional
— it's the single biggest lever on quality. In order of how much they change
the output:

| Input | Why it matters | What went wrong without it |
|---|---|---|
| **Board, Grade, Subject** | Determines everything downstream | — |
| **Exact textbook** (publisher + edition) | Different editions reorder/rename chapters | Ch3/Ch4 numbering wouldn't have matched the school's portion sheet otherwise |
| **Textbook's own Concept Map / TOC page** | Gives the real chapter list, sub-topic breakdown, and official terminology | Built "Types of Triangles" and "Parts of a Circle" for Geometry based on generic curriculum knowledge — the real chapter didn't cover either; it covered angle-naming notation and protractor use instead |
| **Back-of-chapter exercises / Assessment pages** | Reveals real numeric ranges, question *styles*, and sub-skills a generic build will miss | Built Large Numbers around 6-digit numbers; the real chapter used 7–8 digit numbers *and* the International Number System. Built Decimals without decimal×decimal multiplication — a whole real subsection |
| **Actual school exam paper(s)** | The only reliable way to calibrate a mock-test generator | Mock test format (marks-per-question, section structure, time) was a reasonable guess until a real Periodic Test paper showed the actual structure: Part A at ½ mark each, not 1 |
| **School-specific conventions** | Marking schemes, section naming ("Part" vs "Section"), competency tags (BT/MS labels) vary by school even within the same board | — |

**Practical rule:** if a required input is missing, build a clearly-labeled
*reasonable default* and say so explicitly, rather than silently guessing.
Every time this happened in this project, the honest flag ("I don't have a
scan for this, here's my best estimate") is what let a later correction
happen cleanly instead of being discovered as a silent error.

---

## 2. Build Sequence

### Phase 0 — Register the scaffold
Add an entry to the curriculum catalog (`Board → Grade → Subject`) with
`ready:false` and an empty chapter array. This makes the new subject visible
in the picker immediately, even before any content exists — useful for
demonstrating scope and for stakeholders to confirm you're building the
right thing before investing in content.

### Phase 1 — Chapter skeleton
From the textbook's real table of contents: get the exact chapter count,
titles, and numbering. Do this before writing a single question — chapter
numbering is exactly what a mock test generator and a school's portion
sheet both key off, so it has to match exactly, not approximately.

### Phase 2 — Concept notes
For each chapter, write 4–8 "key idea" bullets. Use the textbook's own
Concept Map as the source of truth for what belongs, rather than general
subject knowledge — the Concept Map is the chapter's own table of contents
at the sub-topic level, and it's usually more precise than what a generic
"CBSE Class 5 Geometry" assumption would produce.

### Phase 3 — Practice Q&A
Per chapter, build a mix of question types:
- **MCQ** (1 mark) — for quick concept checks
- **Assertion-Reason** — a real CBSE competency-worksheet format; worth
  including from the start now that we know it's standard, not an
  afterthought
- **Short-answer** (2–4 marks, the higher end tagged as HOTS) — word
  problems, calculations, multi-step reasoning

Calibrate **numeric ranges and question styles** against the real
back-of-chapter exercises as soon as they're available. This is where
assumption-built content is most likely to be subtly wrong — not incorrect
math, just the wrong *scale* or missing a *sub-skill* (e.g. only covering
one direction of a skill, like fraction→decimal without decimal→fraction).

Add a `clue` field to every HOTS question — a one-line pointer to the
keyword/phrase that signals the right approach, revealed on demand. This
turned out to be one of the highest-value small features in the whole build.

### Phase 4 — Watch & Learn videos
Build **one lesson per distinct sub-concept**, not one lesson covering a
whole chapter. A single early version crammed 4-5 ideas into one slideshow
and the concrete feedback was: split each concept into its own mini-lesson
with a clear start and end, selectable from a lesson picker.

Within each lesson, the scene-by-scene discipline that mattered:
- **Never skip a calculation step.** Every "jump" from a question to an
  answer without showing the intermediate arithmetic was later flagged and
  had to be fixed (e.g. converting an improper fraction to a mixed number
  without showing the division step).
- **Match the spoken narration to how the number should actually be
  read**, not to its written form. A number written "3,45,678" must be
  *spoken* as "three lakh forty-five thousand six hundred seventy-eight" —
  reading the digits or the commas aloud is a real, easy-to-miss bug.
- **Keep visuals and captions in sync.** A caption describing three things
  appearing "one by one" needs three scenes, not one scene where all three
  already appear.
- Build **generic, parameterized visual helpers** (a column-arithmetic
  renderer, a fraction-bar renderer, a place-value strip, etc.) rather than
  one-off HTML per scene — these get reused across chapters and, longer
  term, across subjects.

### Phase 5 — Mock Test Generator calibration
Do not guess a paper format if it can be avoided. Once a real exam paper is
available, reverse-engineer it exactly: section/part names, marks per
question in each part, number of questions per part, total marks, and time
allowed. Build the generator's tiers (e.g. a short practice paper, the
exact real Periodic Test length, and the larger Term Exam) as scaled
versions of the *confirmed* structure, and say plainly which tiers are
confirmed against a real paper and which are a proportional estimate.

### Phase 6 — Decide which cross-cutting features apply
Not every general-purpose feature transfers as-is to a new subject:
- **Keyword Clues** (spotting which operation/approach a word problem
  wants) is naturally structured as *categories* — one category per family
  of clue-phrases (operations, comparing/ordering, fractions, measurement,
  data, etc.). A new subject may need entirely new categories with their
  own vocabulary (a language subject's "clues" look nothing like a maths
  subject's).
- **Reference Library** and **Test Records** are subject-agnostic as built
  and should just work for any new subject without changes.

### Phase 7 — Verification pass (do this before every publish, not just at the end)
- **Syntax check** the whole file after every meaningful edit, not just
  once at the end — catch errors immediately while the change is still
  small and easy to locate.
- **Data-integrity check**: extract the data structures in isolation
  (strip DOM-dependent code) and assert expected shapes/counts — e.g.
  "14 chapters, every chapter has a `watch` property, every lesson has at
  least one scene."
- **Arithmetic/fact verification**: never trust hand-worked arithmetic in
  authored content — compute-check every numeric answer directly (this
  caught real errors, like a mismatched decimal-place count, before they
  reached the file).
- **Runtime simulation for any interaction/state logic**: when adding
  something like curriculum switching or a category picker, actually
  simulate the click/switch sequence with stubbed DOM elements and assert
  the resulting state — a syntax check alone won't catch a logic error in
  how state gets reset between switches.
- Only copy to the published output after all of the above pass.

### Phase 8 — Publish, then treat feedback as calibration data
Every piece of real feedback — an uploaded exam paper, a "why doesn't this
cover X," a screenshot of an answer being marked wrong — is exactly the
kind of signal that improves accuracy faster than more up-front guessing
would have. Build the fastest path for that feedback to reach a fix: keep
the working file in sync with the published one, and re-verify (Phase 7)
after every correction, not just after original builds.

---

## 3. The One Rule Underneath All of This

**Flag confidence level explicitly, always.** Every piece of content in
this build falls into one of two categories: *confirmed against real source
material* (a scanned textbook page, a real exam paper) or *a reasonable
default, not yet confirmed*. Saying which one applies, every time, is what
turned "guessed wrong" into "corrected quickly" throughout this project —
and it's the difference between a tool a parent can trust and one that
quietly teaches the wrong scale, the wrong format, or the wrong sub-skill.
