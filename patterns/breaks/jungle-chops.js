// Jungle Choppage Patterns
// Classic jungle break manipulation - the art of the chop
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// === PATTERN 1: Classic Amen Chops ===
// The amen break sliced into 8 pieces, rearranged

$: s("amencutup")
  .n("0 1 2 3 4 5 6 7")  // Standard order
  .speed(1)
  .gain(0.8)
  .room(0.2)

// === PATTERN 2: Rearranged Amen ===
// Classic jungle rearrangement

$: s("amencutup")
  .n("0 0 6 3 0 2 6 7")  // Signature chop pattern
  .speed("<1 1 1 1.1>")
  .gain("1 0.7 0.9 0.8 1 0.7 0.85 0.7")
  .room(0.25)

// === PATTERN 3: Double-Time Chops ===
// Faster jungle feel

$: s("amencutup*16")
  .n("0 0 6 7 0 0 3 7 0 1 6 7 4 5 6 7")
  .speed(1)
  .gain(perlin.range(0.6, 0.9))
  .hpf(200)
  .room(0.2)

// === PATTERN 4: Chopped with Rests ===
// Space in the groove

$: s("amencutup")
  .n("0 ~ 6 3 ~ 2 6 ~")
  .speed(1)
  .gain(0.85)
  .room(0.3)

// === PATTERN 5: Reversed Chops ===
// Some slices played backwards

$: s("amencutup")
  .n("0 1 2 3 4 5 6 7")
  .speed("1 -1 1 1 1 -1 1 -1")  // Negative = reverse
  .gain(0.8)
  .room(0.25)
