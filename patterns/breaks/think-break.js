// Think Break Pattern
// The "Think (About It)" break - another intelligent DnB staple
// Can use breaks125 or construct from TR909
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// Load classic breaks
samples('github:tidalcycles/dirt-samples')

// === PATTERN 1: Real Think Break (breaks125) ===
// breaks125 is closer to the funky drummer / think style

$: s("breaks125")
  .fit()
  .slice(8, "0 1 2 3 4 5 6 7")
  .gain(0.8)
  .room(0.2)

// === PATTERN 2: Think-Style Rearrangement ===

$: s("breaks125")
  .fit()
  .slice(8, "0 0 [6 3] 0 2 [6 ~] 7")
  .gain(0.8)
  .room(0.25)

// === PATTERN 3: Hybrid - Real Break + TR909 ===
// Layer break with drum machine for punch

stack(
  // Main break
  s("breaks125")
    .fit()
    .slice(8, "0 0 6 3 0 2 6 7")
    .gain(0.6)
    .room(0.2),

  // TR909 kick reinforcement
  s("bd ~ ~ ~ [~ bd] ~ bd ~")
    .bank("RolandTR909")
    .gain(0.5)
    .lpf(100),

  // TR909 snare layer
  s("~ sd ~ [~ sd:1?] ~ sd ~ sd:1?")
    .bank("RolandTR909")
    .gain(0.35)
    .room(0.3),

  // Rolling hi-hats
  s("hh*16")
    .bank("RolandTR909")
    .gain(perlin.range(0.15, 0.35))
    .pan(sine.range(0.3, 0.7).slow(4))
    .hpf(8000)
)

// === PATTERN 4: Pure TR909 Construction ===
// For when you want clean drum machine sound

// stack(
//   s("bd ~ ~ ~ [~ bd] ~ bd ~").bank("RolandTR909").gain(0.85).lpf(100),
//   s("~ sd ~ [~ sd:1?] ~ sd ~ sd:1?").bank("RolandTR909").gain(0.8).room(0.3),
//   s("hh*16").bank("RolandTR909").gain(perlin.range(0.2, 0.4)).hpf(8000),
//   s("~ ~ oh ~ ~ ~ oh ~").bank("RolandTR909").gain(0.35).cut(1)
// )
