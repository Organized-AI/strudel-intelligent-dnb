// "Atlantis Dreams"
// Atmospheric intelligent DnB with oceanic textures
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// Chord progression - darker, more mysterious
let chords = chord("<Abm9 Dbm9 Gbmaj7 Bmaj7>/4").dict('ireal')

stack(
  // === DRUMS - Minimal, rolling ===
  
  // Subtle kick
  s("bd ~ ~ ~ ~ ~ bd ~")
    .bank("RolandTR909")
    .gain(0.75)
    .lpf(90)
    .room(0.15),

  // Sparse snare
  s("~ ~ ~ sd ~ ~ ~ ~")
    .bank("RolandTR909")
    .gain(0.7)
    .room(0.35)
    .delay(0.2)
    .delaytime(0.25),

  // Shimmering hats
  s("hh*12")
    .bank("RolandTR909")
    .gain(perlin.range(0.15, 0.35).slow(2))
    .hpf(8000)
    .pan(perlin.range(0.2, 0.8).slow(3))
    .room(0.4),

  // Ride cymbal texture
  s("~ ~ rd ~ ~ rd ~ ~")
    .bank("RolandTR909")
    .gain(0.2)
    .room(0.5)
    .hpf(3000),

  // === BASS - Deep and mysterious ===
  
  note("<ab0 ~ ~ ab0> <~ db1 ~ ~> <gb0 ~ gb0 ~> <~ ~ b0 ~>")
    .s("sine")
    .gain(0.65)
    .lpf(70)
    .attack(0.03)
    .decay(0.25)
    .sustain(0.4)
    .release(0.6),

  // === PADS - Oceanic ===
  
  // Main pad
  chords.voicing()
    .s("sawtooth")
    .attack(2.5)
    .decay(1)
    .sustain(0.6)
    .release(4)
    .lpf(sine.range(500, 1500).slow(16))
    .lpq(0.3)
    .gain(0.18)
    .room(0.8)
    .size(0.9)
    .delay(0.5)
    .delaytime(0.5)
    .delayfeedback(0.45),

  // High shimmer
  note("<c6 eb6 ab5 gb5>/8")
    .s("sine")
    .attack(1)
    .release(3)
    .gain(0.08)
    .room(0.9)
    .delay(0.6)
    .delaytime(0.375)
    .delayfeedback(0.5)
)
