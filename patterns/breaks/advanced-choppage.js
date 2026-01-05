// Advanced Jungle Choppage
// Complex break manipulation techniques
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// === PATTERN 1: Layered Breaks ===
// Multiple break patterns stacked

stack(
  // Main chopped amen
  s("amencutup")
    .n("0 0 6 3 0 2 6 7")
    .gain(0.75)
    .room(0.2),
  
  // Second layer - offset timing
  s("amencutup")
    .n("~ 1 ~ 4 ~ 5 ~ 3")
    .gain(0.4)
    .hpf(2000)
    .room(0.3)
    .pan(0.3),
  
  // Ghost layer - very quiet texture
  s("amencutup*16")
    .n(run(8))
    .gain(0.15)
    .hpf(4000)
    .room(0.5)
    .pan(0.7)
)

// === PATTERN 2: Probability Chops ===
// Some hits have chance to play

$: s("amencutup")
  .n("0 1? 6 3? 0 2? 6 7?")
  .gain(0.8)
  .room(0.25)

// === PATTERN 3: Euclidean Break ===
// Euclidean rhythm applied to break slices

$: s("amencutup")
  .n("0 3 6 7")
  .struct("x(5,8)")  // 5 hits spread over 8 steps
  .gain(0.8)
  .room(0.2)

// === PATTERN 4: Polyrhythmic Breaks ===
// Different time signatures layered

stack(
  s("amencutup")
    .n("0 3 6 7")
    .struct("x(3,8)")  // 3 over 8
    .gain(0.7),
  
  s("amencutup")
    .n("1 4 5 2")
    .struct("x(5,8)")  // 5 over 8
    .gain(0.5)
    .hpf(1000)
)

// === PATTERN 5: Evolving Chops ===
// Pattern changes over time

$: s("amencutup")
  .n("<[0 0 6 3 0 2 6 7] [0 1 2 3 4 5 6 7] [7 6 5 4 3 2 1 0] [0 3 0 3 6 7 6 7]>/4")
  .gain(0.8)
  .room(0.2)
  .lpf(sine.range(2000, 8000).slow(16))
