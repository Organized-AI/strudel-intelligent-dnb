// Deep Sub Bass Patterns
// Warm, rolling sub-bass - the foundation of intelligent DnB
// @tempo 170 BPM

setcps(170/60)

// Pattern 1: Classic rolling sub
$: note("<c1 ~ c1 ~> <eb1 ~ ~ eb1> <f1 ~ f1 ~> <ab1 ~ ~ ~>")
  .s("sawtooth")
  .lpf(120)
  .lpq(2)
  .gain(0.7)
  .attack(0.01)
  .decay(0.2)
  .sustain(0.5)
  .release(0.3)

// Pattern 2: Octave bounce
$: note("[c1 c2]*2 [eb1 eb2]*2")
  .s("sine")
  .lpf(100)
  .gain(0.6)
  .decay(0.15)
  .sustain(0.3)
  .slow(2)
