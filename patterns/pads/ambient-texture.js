// Ambient Texture Layers
// Subtle background atmosphere
// @tempo 170 BPM

setcps(170/60)

// Granular-style texture
$: s("gm_pad_choir")
  .note("<c4 eb4 f4 ab4>/8")
  .chop(16)
  .gain(perlin.range(0.05, 0.15).slow(8))
  .room(0.9)
  .size(0.95)
  .lpf(2000)
  .hpf(400)
  .pan(perlin.range(0.2, 0.8).slow(4))

// Noise texture for depth
$: s("~ ~ ~ ~")
  .noise(1)
  .lpf(sine.range(500, 2000).slow(32))
  .hpf(200)
  .gain(0.03)
  .room(0.8)
