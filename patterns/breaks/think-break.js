// Think Break Pattern
// The "Think (About It)" break - another intelligent DnB staple
// @tempo 170 BPM

setcps(170/60)

// Layered break construction
stack(
  // Primary kick pattern
  s("bd ~ ~ ~ [~ bd] ~ bd ~")
    .bank("RolandTR909")
    .gain(0.9)
    .lpf(100),

  // Snare on 2 and 4 with ghost notes
  s("~ sd ~ [~ sd:1?] ~ sd ~ sd:1?")
    .bank("RolandTR909")
    .gain("0.9 0.9 0.9 0.4")
    .room(0.3),

  // Rolling hi-hats with velocity variation
  s("hh*16")
    .bank("RolandTR909")
    .gain(perlin.range(0.2, 0.5))
    .pan(sine.range(0.3, 0.7).slow(4))
    .hpf(8000),

  // Open hat accents
  s("~ ~ oh ~ ~ ~ oh ~")
    .bank("RolandTR909")
    .gain(0.4)
    .cut(1)
)
