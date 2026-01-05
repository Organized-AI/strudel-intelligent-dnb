// Pure Sine Sub Bass
// Clean, deep sub for atmospheric tracks
// @tempo 170 BPM

setcps(170/60)

// Ultra-clean sine sub
$: note("<c1 ~ ~ c1> <~ eb1 ~ ~> <f1 ~ f1 ~> <~ ~ ab1 ~>")
  .s("sine")
  .gain(0.8)
  .lpf(80)
  .attack(0.02)
  .decay(0.3)
  .sustain(0.4)
  .release(0.5)

// Layered mid-bass for definition
$: note("<c2 ~ ~ c2> <~ eb2 ~ ~> <f2 ~ f2 ~> <~ ~ ab2 ~>")
  .s("triangle")
  .gain(0.25)
  .lpf(400)
  .hpf(100)
  .room(0.3)
