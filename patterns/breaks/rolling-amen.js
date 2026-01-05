// Rolling Amen Break Pattern
// The foundation of intelligent DnB - real amen with swing
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// Load classic breaks
samples('github:tidalcycles/dirt-samples')

// === PATTERN 1: Classic Rolling Amen ===
// The amen break sliced and rearranged with ghost notes

stack(
  // Main amen - classic jungle chop
  s("amen")
    .fit()
    .slice(8, "0 0 6 3 0 2 6 7")
    .gain("1 0.7 0.9 0.7 1 0.7 0.85 0.7")
    .room(0.2)
    .size(0.3),
  
  // Ghost snare layer for rolling feel
  s("~ sd:3 ~ [~ sd:3] ~ sd:3 ~ sd:3")
    .bank("RolandTR909")
    .gain(0.25)
    .pan(sine.range(0.3, 0.7))
    .room(0.4),
  
  // Sub-kick reinforcement
  s("bd ~ ~ ~ bd ~ ~ ~")
    .bank("RolandTR909")
    .gain(0.5)
    .lpf(80)
)

// === PATTERN 2: Amen with Standard Slice ===

// $: s("amen")
//   .fit()
//   .slice(8, "0 1 2 3 4 5 6 7")
//   .gain(0.8)
//   .room(0.2)

// === PATTERN 3: Double-Time Amen ===

// $: s("amen")
//   .fit()
//   .slice(16, "0 0 12 6 0 0 6 14 0 2 12 6 8 10 12 14")
//   .gain(0.75)
//   .room(0.2)
