// Warm Reese Bass
// Detuned saw waves - softer than techstep reese
// @tempo 170 BPM

setcps(170/60)

// Warm reese with subtle movement
$: note("<c1 [~ c1] eb1 ~> <f1 ~ [ab1 f1] ~>")
  .s("sawtooth")
  .detune(perlin.range(-5, 5).slow(8))  // Subtle detuning
  .lpf(sine.range(200, 600).slow(4))     // Filter movement
  .lpq(1.5)
  .gain(0.5)
  .room(0.2)
  .attack(0.05)
  .release(0.4)
