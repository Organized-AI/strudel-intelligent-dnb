// Pure Sine Sub Bass
// Clean, deep sub for atmospheric tracks
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// Load samples (for when combining with breaks)
samples('github:tidalcycles/dirt-samples')

// === PATTERN 1: Ultra-Clean Sine Sub ===

$: note("<c1 ~ ~ c1> <~ eb1 ~ ~> <f1 ~ f1 ~> <~ ~ ab1 ~>")
  .s("sine")
  .gain(0.75)
  .lpf(80)
  .attack(0.02)
  .decay(0.3)
  .sustain(0.4)
  .release(0.5)

// === PATTERN 2: Layered Sub + Mid ===
// Sub layer with triangle mid for definition

stack(
  // Sub layer
  note("<c1 ~ ~ c1> <~ eb1 ~ ~> <f1 ~ f1 ~> <~ ~ ab1 ~>")
    .s("sine")
    .gain(0.7)
    .lpf(80),

  // Mid layer for definition
  note("<c2 ~ ~ c2> <~ eb2 ~ ~> <f2 ~ f2 ~> <~ ~ ab2 ~>")
    .s("triangle")
    .gain(0.2)
    .lpf(400)
    .hpf(100)
    .room(0.3)
)

// === PATTERN 3: Full Combo with Break ===

stack(
  // Sparse atmospheric break
  s("breaks125")
    .fit()
    .slice(8, "0 ~ ~ 3 ~ ~ 6 ~")
    .gain(0.55)
    .room(0.35),

  // Minimal TR909
  s("bd ~ ~ ~ ~ ~ bd ~")
    .bank("RolandTR909")
    .gain(0.5)
    .lpf(90),

  s("~ ~ ~ sd ~ ~ ~ ~")
    .bank("RolandTR909")
    .gain(0.5)
    .room(0.4),

  // Clean sine sub
  note("<c1 ~ ~ c1> <~ eb1 ~ ~> <f1 ~ f1 ~> <~ ~ ab1 ~>")
    .s("sine")
    .gain(0.7)
    .lpf(75)
    .attack(0.02)
    .decay(0.25)
    .sustain(0.4)
)
