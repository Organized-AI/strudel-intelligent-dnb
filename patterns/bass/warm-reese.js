// Warm Reese Bass
// Detuned saw waves - softer than techstep reese
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// Load samples (for when combining with breaks)
samples('github:tidalcycles/dirt-samples')

// === PATTERN 1: Warm Reese with Movement ===
// Subtle detuning and filter movement

$: note("<c1 [~ c1] eb1 ~> <f1 ~ [ab1 f1] ~>")
  .s("sawtooth")
  .detune(perlin.range(-5, 5).slow(8))
  .lpf(sine.range(200, 600).slow(4))
  .lpq(1.5)
  .gain(0.5)
  .room(0.2)
  .attack(0.05)
  .release(0.4)

// === PATTERN 2: Darker Reese ===
// More filtered, mysterious

$: note("<c1 ~ ~ c1> <~ eb1 ~ ~> <f1 ~ f1 ~> <~ ~ ab1 ~>")
  .s("sawtooth")
  .detune(perlin.range(-8, 8).slow(4))
  .lpf(sine.range(150, 400).slow(8))
  .lpq(2)
  .gain(0.45)
  .room(0.3)

// === PATTERN 3: Reese + Break Combo ===

stack(
  // Amen break
  s("amen")
    .fit()
    .slice(8, "0 0 6 3 0 2 6 7")
    .gain(0.65)
    .room(0.2),

  // Warm reese
  note("<c1 ~ c1 ~> <f1 ~ ~ f1>")
    .s("sawtooth")
    .detune(perlin.range(-5, 5).slow(8))
    .lpf(sine.range(180, 500).slow(4))
    .lpq(1.5)
    .gain(0.45)
    .room(0.2)
)
