// Timestretched Break Patterns
// Granular and stretched breakbeats for atmospheric textures
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// Load classic breaks
samples('github:tidalcycles/dirt-samples')

// === PATTERN 1: Granular breaks165 ===
// Chopped into tiny grains for texture

$: s("breaks165")
  .fit()
  .chop(32)
  .speed(perlin.range(0.8, 1.2).slow(4))
  .gain(0.65)
  .room(0.4)
  .size(0.5)

// === PATTERN 2: Stretched Break Loop ===
// Single break stretched across 2 cycles

$: s("breaks165")
  .loopAt(2)
  .gain(0.5)
  .room(0.6)
  .lpf(4000)

// === PATTERN 3: Granular Texture Layer ===
// Break as ambient texture - background element

$: s("breaks125")
  .loopAt(4)
  .chop(64)
  .speed(0.5)
  .gain(0.2)
  .room(0.8)
  .size(0.9)
  .lpf(2000)
  .hpf(400)
  .pan(perlin.range(0.2, 0.8).slow(2))

// === PATTERN 4: Glitchy Micro-Chops ===
// Variable chop sizes for glitch texture

$: s("breaks165")
  .fit()
  .slice(8, "<0 3 6 7>")
  .chop("<4 8 16 32>")
  .speed(rand.range(0.9, 1.1))
  .gain(0.55)
  .room(0.3)

// === PATTERN 5: Pitched Stretch ===
// Stretched and pitch-shifted variations

$: s("amen")
  .loopAt(4)
  .speed("<1 0.5 0.75 1.25>")
  .gain(0.5)
  .room(0.5)
  .lpf(sine.range(1000, 4000).slow(8))

// === PATTERN 6: Scrubbing ===
// Tape-style scrubbing through the break

$: s("breaks165")
  .fit()
  .scrub("{0@3 0.25@2 0.5@3}%8".div(8))
  .gain(0.6)
  .room(0.4)

// === PATTERN 7: Striate ===
// Progressive portions of sample each loop

$: s("breaks165")
  .striate(8)
  .slow(2)
  .gain(0.6)
  .room(0.35)
