// Jungle Choppage Patterns
// Classic jungle break manipulation using real break samples
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// Load classic breaks from dirt-samples
samples('github:tidalcycles/dirt-samples')

// === PATTERN 1: breaks165 - Standard Slice ===
// The breaks165 sample sliced into 8 pieces

$: s("breaks165")
  .fit()
  .slice(8, "0 1 2 3 4 5 6 7")
  .gain(0.8)
  .room(0.2)

// === PATTERN 2: Classic Jungle Rearrangement ===
// Signature chop pattern - the "jungle edit"

$: s("breaks165")
  .fit()
  .slice(8, "0 0 6 3 0 2 6 7")
  .gain(0.85)
  .room(0.25)

// === PATTERN 3: breaks125 Stretched ===
// Slower break pitched up to fit 170

$: s("breaks125")
  .fit()
  .slice(8, "0 3 [0 0] 7 [0 2] 3 6 7")
  .gain(0.8)
  .room(0.2)

// === PATTERN 4: Amen with Rests ===
// Space in the groove - intelligent DnB style

$: s("amen")
  .fit()
  .slice(8, "0 ~ 6 3 ~ 2 6 ~")
  .gain(0.8)
  .room(0.3)

// === PATTERN 5: Evolving Chops ===
// Pattern changes every 4 bars

$: s("breaks165")
  .fit()
  .slice(8, "<[0 0 6 3 0 2 6 7] [0 1 2 3 4 5 6 7] [7 6 5 4 3 2 1 0] [0 3 0 3 6 7 6 7]>/4")
  .gain(0.8)
  .room(0.2)

// === PATTERN 6: Double-Time Jungle ===
// 16 slices for faster chopping

$: s("breaks165")
  .fit()
  .slice(16, "0 0 12 6 0 0 6 14 0 2 12 6 8 10 12 14")
  .gain(0.75)
  .room(0.2)

// === PATTERN 7: Every 3rd Bar Reversed ===
// Classic build technique

$: s("breaks165")
  .fit()
  .slice(8, "0 1 <2 2*2> 3 [4 0] 5 6 7".every(3, x => x.rev()))
  .gain(0.8)
  .room(0.25)
