// Example: Minimal Intelligent DnB
// Genre: Atmospheric DnB Breakdown
// Style: Late night, headphone music
// Tempo: 168 BPM
// Key: A minor

setcps(168/60)
samples('github:tidalcycles/dirt-samples')

let chords = chord("<Am9 Dm9 Gm7 Cmaj7>/4").dict('ireal')

stack(
  // Sparse break
  s("breaks125")
    .fit()
    .slice(8, "0 ~ ~ 3 ~ ~ 6 ~")
    .gain(0.5)
    .room(0.35)
    .lpf(5000),

  // Soft kick
  s("bd ~ ~ ~ ~ ~ bd ~")
    .bank("RolandTR909")
    .gain(0.5)
    .lpf(85),

  // Soft snare
  s("~ ~ ~ sd ~ ~ ~ ~")
    .bank("RolandTR909")
    .gain(0.5)
    .room(0.4),

  // Sparse sub
  note("<a0 ~ ~ ~> <~ d1 ~ ~> <g1 ~ ~ ~> <~ ~ c1 ~>")
    .s("sine")
    .gain(0.6)
    .lpf(75),

  // Main pad
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
