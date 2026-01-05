// Hydra Visual Integration - Atmospheric
// Dreamlike visuals for intelligent DnB atmosphere
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// Initialize Hydra
await initHydra()

// === VISUAL: Oceanic Drift ===
// Slow, flowing patterns inspired by "Atlantis"

noise(3, 0.1)
  .color(0.1, 0.3, 0.6)  // Deep ocean blue
  .saturate(1.5)
  .contrast(1.3)
  .rotate(() => Math.sin(time * 0.1) * 0.2)
  .modulate(
    osc(2, 0.05, 0)
      .rotate(() => time * 0.05),
    0.3
  )
  .blend(
    osc(10, 0.1, 1)
      .thresh(0.8)
      .color(0.3, 0.5, 0.8)
      .scale(() => 1 + a.fft[2] * 0.3),  // React to highs
    0.2
  )
  .out()

// Atmospheric track
let chords = chord("<Abm9 Dbm9 Gbmaj7 Bmaj7>/4").dict('ireal')

stack(
  // Minimal drums
  s("bd ~ ~ ~ ~ ~ bd ~")
    .bank("RolandTR909")
    .gain(0.7)
    .lpf(90),

  s("~ ~ ~ sd ~ ~ ~ ~")
    .bank("RolandTR909")
    .gain(0.6)
    .room(0.4),

  s("hh*12")
    .bank("RolandTR909")
    .gain(perlin.range(0.15, 0.3))
    .hpf(8000),

  // Deep sub
  note("<ab0 ~ ~ ab0> <~ db1 ~ ~> <gb0 ~ gb0 ~> <~ ~ b0 ~>")
    .s("sine")
    .gain(0.6)
    .lpf(70),

  // Pad
  chords.voicing()
    .s("sawtooth")
    .attack(2.5)
    .release(4)
    .lpf(sine.range(500, 1500).slow(16))
    .gain(0.18)
    .room(0.8)
    .delay(0.5)
    .delayfeedback(0.4)
)
