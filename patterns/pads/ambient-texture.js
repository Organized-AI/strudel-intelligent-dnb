// Ambient Texture Layers
// Subtle background atmosphere
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// Load samples (for when combining with breaks)
samples('github:tidalcycles/dirt-samples')

// === PATTERN 1: Granular-Style Texture ===

$: s("gm_pad_choir")
  .note("<c4 eb4 f4 ab4>/8")
  .chop(16)
  .gain(perlin.range(0.05, 0.15).slow(8))
  .room(0.9)
  .size(0.95)
  .lpf(2000)
  .hpf(400)
  .pan(perlin.range(0.2, 0.8).slow(4))

// === PATTERN 2: Shimmer Layer ===

$: note("<c6 eb6 f6 ab6>/16")
  .s("sine")
  .attack(0.5)
  .release(1.5)
  .gain(0.05)
  .room(0.95)
  .delay(0.6)
  .delaytime(0.5)
  .delayfeedback(0.5)
  .hpf(2000)

// === PATTERN 3: Full Ambient Combo ===

let chords = chord("<Cm9 Fm9 Bbm7 Ebmaj7>/4").dict('ireal')

stack(
  // Sparse granular break
  s("breaks165")
    .fit()
    .chop(32)
    .speed(0.5)
    .gain(0.15)
    .room(0.8)
    .lpf(2000)
    .hpf(500)
    .pan(perlin.range(0.2, 0.8)),

  // Ultra-minimal drums
  s("bd ~ ~ ~ ~ ~ bd ~")
    .bank("RolandTR909")
    .gain(0.4)
    .lpf(80),

  s("hh*8")
    .bank("RolandTR909")
    .gain(perlin.range(0.05, 0.15))
    .hpf(9000),

  // Sparse sub
  note("<c1 ~ ~ ~> <~ f1 ~ ~> <bb0 ~ ~ ~> <~ ~ eb1 ~>")
    .s("sine")
    .gain(0.5)
    .lpf(70),

  // Ambient pad
  chords.voicing()
    .s("gm_pad_warm")
    .attack(3)
    .release(4)
    .gain(0.12)
    .room(0.9)
    .size(0.95)
    .lpf(1500),

  // Texture layer
  s("gm_pad_choir")
    .note("<c4 eb4 f4 ab4>/8")
    .chop(16)
    .gain(0.08)
    .room(0.9)
    .lpf(2000)
    .hpf(400)
    .pan(perlin.range(0.2, 0.8).slow(4))
)
