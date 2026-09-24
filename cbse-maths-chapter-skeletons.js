/* =====================================================================
   CBSE Mathematics — Chapter Skeletons, Classes 1–12
   Phase 1 output: real chapter titles only. NO concepts/practice/watch
   content yet — these chapters are intentionally `ready:false` until
   that's authored (see curriculum-build-framework.md for the process).

   How to use this file:
   1. For whichever grade you're about to build in full, copy that grade's
      chapter list into a new `chapters_maths_gN_cbse` array (matching the
      shape of chapters_maths_g5_cbse already in the tool), turning each
      title into a full chapter object: {id, title, concepts, practice, watch}.
   2. Replace the matching placeholder entry in curriculumCatalog
      (cbse > gN > maths) with `ready:true` and the real chapters array.
   3. Everything else in the app — sidebar, mock test generator, Keyword
      Clues, Reference Library, Test Records — works unchanged, exactly as
      verified when the catalog architecture was first built.

   Live caveat: CBSE/NCERT is mid-transition to NEP-2020-aligned textbooks.
   Classes 6, 7, 8, 9 already use the new books (Ganita Prakash / Ganita
   Manjari) reflected below. Classes 10, 11, 12 had not transitioned as of
   this pass — re-verify before building, this will keep changing year to
   year.
   ===================================================================== */

const cbseMathsChapterSkeletons = {

  g1: { book: "Math-Magic", chapters: [
    "Shapes and Space", "Numbers From One to Nine", "Addition", "Subtraction",
    "Numbers from Ten to Twenty", "Time", "Measurement", "Numbers From 21 to 50",
    "Data Handling", "Patterns", "Numbers", "Money", "How Many"
  ]},

  // g2, g3, g4: same Math-Magic series as g1/g5 — titles not yet confirmed
  // for this pass. Structure is known to cover: larger numbers, the four
  // operations, shapes, measurement, data handling, patterns, money.
  g2: { book: "Math-Magic", chapters: [] },
  g3: { book: "Math-Magic", chapters: [] },
  g4: { book: "Math-Magic", chapters: [] },

  g5: { book: "Math-Magic", chapters: [
    "The Fish Tale", "Shapes and Angles", "How Many Squares?", "Parts and Wholes",
    "Does it Look the Same?", "Be My Multiple, I'll Be Your Factor",
    "Can You See the Pattern?", "Mapping Your Way", "Boxes and Sketches"
    // chapters 10-14 not retrieved this pass (Tenths and Hundredths,
    // Area and its Boundary, Smart Charts, Ways to Multiply and Divide,
    // How Big? How Heavy? — titles from general NCERT knowledge, NOT
    // confirmed this pass; verify before use)
  ]},

  g6: { book: "Ganita Prakash (NEP)", chapters: [
    "Patterns in Mathematics", "Lines and Angles", "Number Play",
    "Data Handling and Presentation", "Prime Time", "Perimeter and Area",
    "Fractions", "Playing with Constructions", "Symmetry", "The Other Side of Zero"
  ]},

  g7: { book: "Ganita Prakash Part 1 & 2 (NEP)", chapters: [
    "Large Numbers Around Us", "Arithmetic Expressions", "A Peek Beyond the Point",
    "Expressions Using Letter-Numbers", "Parallel and Intersecting Lines",
    "Number Play", "A Tale of Three Intersecting Lines", "Working with Fractions",
    "Geometric Twins", "Operations with Integers", "Finding Common Ground",
    "Another Peek Beyond the Point", "Connecting the Dots",
    "Constructions and Tilings", "Finding the Unknown"
  ]},

  g8: { book: "Ganita Prakash Part 1 & 2 (NEP)", chapters: [
    "A Square and a Cube", "Power Play", "A Story of Numbers", "Quadrilaterals",
    "Number Play", "We Distribute yet Things Multiply", "Proportional Reasoning-1",
    "Fractions in Disguise", "The Baudhayana-Pythagoras Theorem",
    "Proportional Reasoning-2", "Exploring Some Geometric Themes",
    "Tales by Dots and Lines", "Algebra Play", "Area"
  ]},

  g9: { book: "Ganita Manjari Part 1 (NEP, 2026-27)", chapters: [
    "Orienting Yourself: The Use of Coordinates", "Introduction to Linear Polynomials",
    "The World of Numbers", "Exploring Algebraic Identities",
    "I'm Up and Down, and Round and Round", "Measuring Space: Perimeter and Area",
    "The Mathematics of Maybe: Introduction to Probability",
    "Predicting What Comes Next: Exploring Sequences and Progressions"
    // Ganita Manjari Part 2 not retrieved this pass — Class 9 likely has
    // more chapters than these 8; verify before treating this as complete.
  ]},

  g10: { book: "Mathematics (pre-NEP, not yet transitioned)", chapters: [
    "Real Numbers", "Polynomials", "Pair of Linear Equations in Two Variables",
    "Quadratic Equations", "Arithmetic Progressions", "Triangles",
    "Coordinate Geometry", "Introduction to Trigonometry",
    "Some Applications of Trigonometry", "Circles", "Areas Related to Circles",
    "Surface Areas and Volumes", "Statistics", "Probability"
  ]},

  g11: { book: "Mathematics", chapters: [
    "Sets", "Relations and Functions", "Trigonometric Functions",
    "Principle of Mathematical Induction", "Complex Numbers and Quadratic Equations",
    "Linear Inequalities", "Permutations and Combinations", "Binomial Theorem",
    "Sequences and Series", "Straight Lines", "Conic Sections",
    "Introduction to Three Dimensional Geometry", "Limits and Derivatives",
    "Mathematical Reasoning", "Statistics", "Probability"
  ]},

  g12: { book: "Mathematics", chapters: [
    "Relations and Functions", "Inverse Trigonometric Functions", "Matrices",
    "Determinants", "Continuity and Differentiability", "Application of Derivatives",
    "Integrals"
    // Remaining chapters (Application of Integrals, Differential Equations,
    // Vectors, Three Dimensional Geometry, Linear Programming, Probability)
    // not retrieved this pass.
  ]}

};

module.exports = cbseMathsChapterSkeletons; // remove this line if pasting directly into the HTML tool's <script>
