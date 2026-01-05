// Hydra Visual Integration - Drum Reactive
// Visuals that pulse with the breaks
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// Initialize Hydra
await initHydra()

// === VISUAL: Kick-Reactive Geometry ===
// Shapes that pulse with bass frequencies

osc(5, 0.5, 1)
  .thresh(0.5)
  .color(0.8, 0.2, 0.1)  // Deep red/orange
  .scale(() => 1 + a.fft[0] * 0.5)  // React to bass
  .rotate(() => time * 0.05)
  .repeat(3, 3)
  .modulate(noise(3), () => a.fft[1] * 0.2)  // React to mids
  .out()

// Rolling break with bass-heavy kick
stack(
  // Kick
  s("bd ~ ~ ~ [~ bd] ~ bd ~")
    .bank("RolandTR909")
    .gain(0.85)
    .lpf(100),

  // Snare
  s("~ sd ~ ~ ~ sd ~ ~")
    .bank("RolandTR909")
    .gain(0.75)
    .room(0.3),

  // Rolling hats
  s("hh*16")
    .bank("RolandTR909")
    .gain(perlin.range(0.2, 0.4))
    .hpf(7000),

  // Deep sub
  note("<c1 ~ c1 ~> <f1 ~ ~ f1>")
    .s("sine")
    .gain(0.7)
    .lpf(80)
)
