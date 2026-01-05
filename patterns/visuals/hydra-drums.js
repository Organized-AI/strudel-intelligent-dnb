// Hydra Visual Integration - Drum Reactive
// Visuals that pulse with real breaks
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// Load classic breaks
samples('github:tidalcycles/dirt-samples')

// Initialize Hydra
await initHydra()

// === VISUAL: Break-Reactive Geometry ===
// Shapes that pulse with the breakbeat

osc(5, 0.5, 1)
  .thresh(0.5)
  .color(0.8, 0.2, 0.1)  // Deep red/orange
  .scale(() => 1 + a.fft[0] * 0.5)  // React to bass/kick
  .rotate(() => time * 0.05)
  .repeat(3, 3)
  .modulate(noise(3), () => a.fft[1] * 0.2)  // React to mids/snare
  .out()

// === AUDIO: Rolling break with sub ===

stack(
  // Main chopped break
  s("breaks165")
    .fit()
    .slice(8, "0 0 6 3 0 2 6 7")
    .gain(0.7)
    .room(0.2),

  // Kick reinforcement
  s("bd ~ ~ ~ [~ bd] ~ bd ~")
    .bank("RolandTR909")
    .gain(0.5)
    .lpf(100),

  // Ghost snares
  s("~ ~ sd:3? ~ ~ ~ ~ sd:3?")
    .bank("RolandTR909")
    .gain(0.2)
    .room(0.4),

  // Rolling hats
  s("hh*16")
    .bank("RolandTR909")
    .gain(perlin.range(0.15, 0.35))
    .hpf(7000),

  // Deep sub
  note("<c1 ~ c1 ~> <f1 ~ ~ f1>")
    .s("sine")
    .gain(0.65)
    .lpf(80)
)
