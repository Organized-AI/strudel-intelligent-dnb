// Timestretched Break Patterns
// Granular and stretched breakbeats for atmospheric textures
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// === PATTERN 1: Granular Amen ===
// Chopped into tiny grains

$: s("amencutup")
  .n("0 1 2 3 4 5 6 7")
  .chop(32)  // Slice each hit into 32 pieces
  .speed(perlin.range(0.8, 1.2).slow(4))
  .gain(0.7)
  .room(0.4)
  .size(0.5)

// === PATTERN 2: Stretched Snare ===
// Single snare hit stretched across time

$: s("amencutup:3")
  .loopAt(2)  // Stretch to fit 2 cycles
  .gain(0.5)
  .room(0.6)
  .lpf(4000)
  .slow(2)

// === PATTERN 3: Granular Texture Layer ===
// Break as ambient texture

$: s("amencutup")
  .n(run(8).slow(8))
  .chop(64)
  .speed(0.5)
  .gain(0.25)
  .room(0.8)
  .size(0.9)
  .lpf(2000)
  .hpf(400)
  .pan(perlin.range(0.2, 0.8).slow(2))

// === PATTERN 4: Glitchy Micro-Chops ===
// Very fast repetitions

$: s("amencutup")
  .n("<0 3 6 7>")
  .chop("<4 8 16 32>")
  .speed(rand.range(0.9, 1.1))
  .gain(0.6)
  .room(0.3)

// === PATTERN 5: Pitched Stretch ===
// Stretched and pitch-shifted

$: s("amencutup")
  .n("0 1 2 3")
  .loopAt(4)
  .speed("<1 0.5 0.75 1.25>")
  .gain(0.5)
  .room(0.5)
  .lpf(sine.range(1000, 4000).slow(8))
