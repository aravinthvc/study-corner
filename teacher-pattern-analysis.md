# D.A.V. Adambakkam, Std V Maths — Question-Setting Pattern Analysis
### Source: Term-1 Examination 2026-27, 80 marks, written 30.09.2026 (confirmed real paper)

This document exists to answer one question honestly and durably: **how does this
specific teacher actually think about setting a Maths paper**, so future mock
papers and practice content can be shaped to match — not just the marks
structure (already fixed in the Mock Test Generator), but the *judgment calls*
behind which topics matter more, which variations get tested, and how a
question gets phrased.

---

## 1. Topic emphasis — counted, not guessed

Every one of the 40 questions was tagged by chapter (mixed/cross-chapter
questions like Q20 and Q33 were split proportionally across every chapter
they actually touch, not just counted once):

| Chapter | Share of the paper |
|---|---|
| **Ch5 Fractions** | **35.0%** |
| **Ch6 Decimals** | **31.6%** |
| Ch4 Factors and Multiples | 12.8% |
| Ch1 Large Numbers | 8.4% |
| Ch10 Geometry | 7.8% |
| Ch3 Multiplication and Division | 5.0% |
| **Ch2 Addition and Subtraction** | **0%** |

**The headline finding:** Fractions and Decimals together make up **two-thirds
of the entire paper (66.6%)**, despite the portion sheet listing seven
chapters as if they carried roughly equal weight. Meanwhile Ch2 — explicitly
on the portion sheet — didn't get a single dedicated question anywhere across
all 40 items, at any mark value. This teacher clearly treats Ch2 as a
*prerequisite skill* folded into other questions (word problems that happen
to need a subtraction step) rather than a topic worth testing on its own,
whereas Fractions and Decimals are the paper's real center of gravity.

**What this should change:** a mock paper that draws roughly evenly across
all seven portion chapters — which is what a plain shuffle does — will
systematically *under-represent* Fractions/Decimals and *over-represent* Ch2
relative to what she'll actually face. The fix is a weighted draw, not just a
correct total mark count. (Concrete weights below, ready to implement.)

---

## 2. Variation within a topic — breadth over repetition

The clearest pattern inside Fractions and Decimals specifically: **this
teacher tests many different angles on the same topic rather than repeating
one style of question.** Across the paper's fraction questions alone:

applying a fraction to a real quantity (3/7 of a week) → identifying a
missing term in an equivalent fraction → recognising an already-simplified
fraction as a trap → multiplying fractions → reciprocal combined with
multiplication → comparing to a benchmark (>½) → counting unit fractions
("how many ⅙'s make ⅓") → a multi-part word-problem with fractional shares
→ mixed-number subtraction → mixed-number division → a fraction chain with
several factors multiplied together → four *different* fraction sub-skills
packed into one fill-in-the-blank question (Q39).

Decimals shows the same pattern: comparison, place value, the ×1000
shortcut, *predicting* the number of decimal places in a product without
computing it (a conceptual question, not a computation), converting to like
decimals, dividing by powers of 10, a compound instruction ("add the
difference of X and Y to their sum"), and three separate real-world contexts
(a swimming race, a farmer's harvest, a baking recipe) for the same
underlying decimal arithmetic.

**Implication for practice content:** a chapter's practice set shouldn't just
have "more of the same" MCQs at a given mark value — it should deliberately
cover this many *distinct angles* on the topic, the way the real paper does.

---

## 3. How questions are framed — direct, indirect, and deliberately "twisted"

Three distinct framing styles show up, and they're not evenly distributed —
direct computation is actually the minority style on this paper.

**Direct** (state the operation, expect the answer):
- "Multiply: 6023 × 205"
- "Divide and check your answer: 32,428 ÷ 18"

**Indirect** (a real-world wrapper hides which operation is needed):
- *"In a 50m swimming race, the winner finished in 36.48 seconds. The second
  runner was 2.05 seconds behind. What was the second runner's time?"* — this
  is decimal addition, but nothing in the question says "add." The student
  has to realise "behind" means *slower*, meaning *more* time, meaning add.
- *"A car travels 254.24 km using 8 litres of fuel. How many km per litre?"*
  — hidden division, framed as a rate/unitary-method question.

**Deliberately twisted** (a trap built around a common misconception, an
edge case, or a two-step reasoning chain):
- *"The lowest term of 8/9 is ___"* — 8/9 is already in lowest terms. The
  trap is testing whether a student mechanically tries to simplify without
  first checking if there's anything *to* simplify.
- *"Which is correct: 3.45×1000 = 345 / 3450 / 34.5 / 3.450"* — every wrong
  option is a specific, plausible decimal-point placement error, not a random
  distractor. This tests the exact misconception, not just the fact.
- *"79.2 × 6.978 will have ___ decimal places"* — asked without permission
  (or expectation) to actually multiply. It tests whether the student knows
  the *rule* (count total decimal digits in both factors) rather than
  brute-forcing the computation.
- *"Two prime numbers whose sum is 30 and difference is 8"* — this reverses
  the usual direction of a factors question: instead of "is X prime,"
  the student has to *search* for a pair satisfying two conditions at once.
- *Reciprocal of 0 → "Not defined"* (from the Match-the-following) — testing
  the *exception* to a rule, not the rule itself.
- *"If 15° is added to ∠C = 165°, what type of angle is formed?"* — a
  two-step chain: compute first (165+15=180), *then* classify the result
  (straight angle). Getting the arithmetic right but skipping the
  classification step, or vice versa, both lose the mark.

**Implication for practice content:** the existing practice questions lean
direct/computational more than this teacher's real paper does. HOTS-tier
questions already lean indirect (word problems), which is good — but the
*twisted* category (near-miss distractors built around a specific
misconception, already-satisfied edge cases, rule-without-computation
questions) is thin. This is a distinct skill from "harder word problem" and
worth building deliberately, not as a side effect of raising difficulty.

---

## 4. A new format this paper introduced

**"Match the following"** (Q33, 4 marks) — eight items, each pairing a short
prompt against a bank of answers, spanning all five chapters in the portion
in a single question. No equivalent exists in the practice-question schema
(mcq / short / ar only). This is a real format gap, not a content gap —
tracked separately since it's an architecture change (new question type
touching rendering, answer-checking, and the mock generator), not a content
addition.

---

## 5. Ready-to-implement chapter weights

If/when the Mock Test Generator's chapter-selection is reworked to be
weighted rather than a flat shuffle, these are the concrete weights this
analysis produced, directly from the real paper's question count:

```
ch5 (Fractions):              0.35
ch6 (Decimals):                0.316
ch4 (Factors and Multiples):   0.128
ch1 (Large Numbers):           0.084
ch10 (Geometry):               0.078
ch3 (Multiplication/Division): 0.050
ch2 (Addition and Subtraction): ~0.02 (kept slightly above zero rather
                                        than excluded outright — one
                                        exam's absence isn't proof it will
                                        never appear again)
```

These weights are specific to *this teacher's Term-1 2026-27 paper*. If a
future paper (Term 2, Term 3, or next year's Term 1) shows a different
emphasis, this table should be re-derived from that paper, not assumed to
hold indefinitely — a single data point is a strong first signal, not a
permanent law of how this teacher sets every paper.
