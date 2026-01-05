// Advanced Jungle Choppage
// Complex break manipulation techniques with real samples
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// Load classic breaks
samples('github:tidalcycles/dirt-samples')

// === PATTERN 1: Layered Breaks ===
// Multiple break patterns stacked for depth

stack(
  // Main chopped break
  s("breaks165")
    .fit()
    .slice(8, "0 0 6 3 0 2 6 7")
    .gain(0.7)
    .room(0.2),
  
  // Second layer - offset timing, filtered
  s("breaks125")
    .fit()
    .slice(8, "~ 1 ~ 4 ~ 5 ~ 3")
    .gain(0.35)
    .hpf(2000)
    .room(0.3)
    .pan(0.3),
  
  // Ghost layer - very quiet texture
  s("amen")
    .fit()
    .chop(16)
    .gain(0.12)
    .hpf(4000)
    .room(0.5)
    .pan(0.7)
)

// === PATTERN 2: Probability Chops ===
// Some hits have chance to play

$: s("breaks165")
  .fit()
  .slice(8, "0 1? 6 3? 0 2? 6 7?")
  .gain(0.8)
  .room(0.25)

// === PATTERN 3: Euclidean Break ===
// Euclidean rhythm applied to break slices

$: s("breaks165")
  .fit()
  .slice(8, "0 3 6 7")
  .struct("x(5,8)")  // 5 hits spread over 8 steps
  .gain(0.8)
  .room(0.2)

// === PATTERN 4: Polyrhythmic Breaks ===
// Different time signatures layered

stack(
  s("breaks165")
    .fit()
    .slice(8, "0 3 6 7")
    .struct("x(3,8)")  // 3 over 8
    .gain(0.65),
  
  s("breaks125")
    .fit()
    .slice(8, "1 4 5 2")
    .struct("x(5,8)")  // 5 over 8
    .gain(0.45)
    .hpf(1000)
)

// === PATTERN 5: Splice (Speed-Matched) ===
// Each slice changes speed to match step duration

$: s("breaks165")
  .fit()
  .splice(8, "0 1 [2 3 0]@2 3 0@2 7")
  .gain(0.75)
  .room(0.25)

// === PATTERN 6: Break + TR-909 Hybrid ===
// Layer real break with drum machine

stack(
  // Main break
  s("breaks165")
    .fit()
    .slice(8, "0 0 6 3 0 2 6 7")
    .gain(0.65)
    .room(0.2),
  
  // 909 kick reinforcement
  s("bd ~ ~ ~ [~ bd] ~ bd ~")
    .bank("RolandTR909")
    .gain(0.5)
    .lpf(100),
  
  // 909 snare layer
  s("~ sd ~ ~ ~ sd ~ ~")
    .bank("RolandTR909")
    .gain(0.3)
    .hpf(200)
    .room(0.35)
)

// === PATTERN 7: Filtered Evolution ===
// Break with evolving filter

$: s("breaks165")
  .fit()
  .slice(8, "0 1 2 3 4 5 6 7")
  .lpf(sine.range(800, 8000).slow(8))
  .gain(0.75)
  .room(0.25)
