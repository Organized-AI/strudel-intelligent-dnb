// Real Break Samples - Using Dirt Samples
// Classic breaks from the TidalCycles dirt-samples repository
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// Load the classic dirt-samples library (includes amen, breaks125, breaks165, etc.)
samples('github:tidalcycles/dirt-samples')

// === BREAKS 165 BPM ===
// The "breaks165" sample - a classic jungle break

// Basic slice pattern
$: s("breaks165")
  .slice(8, "0 1 2 3 4 5 6 7")
  .gain(0.8)

// Rearranged jungle style
$: s("breaks165")
  .slice(8, "0 0 6 3 0 2 6 7")
  .gain(0.8)
  .room(0.2)

// With every 3rd bar reversed
$: s("breaks165")
  .slice(8, "0 1 <2 2*2> 3 [4 0] 5 6 7".every(3, x => x.rev()))
  .gain(0.8)

// === BREAKS 125 BPM ===
// Stretched to fit 170 BPM tempo

$: s("breaks125")
  .fit()  // Makes sample fit the cycle duration
  .slice(8, "0 3 0 7 0 3 6 7")
  .gain(0.75)

// === AMEN BREAK ===
// The legendary amen - also in dirt-samples

$: s("amen")
  .fit()
  .slice(8, "0 0 [6 3] 0 2 [6 ~] 7")
  .gain(0.8)
  .room(0.2)
