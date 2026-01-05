// "Logical Progression" 
// Full intelligent DnB track in the Good Looking style
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// Define chord progression
let chords = chord("<Cm9 Fm9 Bbm7 Ebmaj7>/4").dict('ireal')

stack(
  // === DRUMS ===
  
  // Kick pattern
  s("bd ~ ~ ~ [~ bd] ~ bd ~")
    .bank("RolandTR909")
    .gain(0.85)
    .lpf(100),

  // Snare on 2 and 4
  s("~ sd ~ ~ ~ sd ~ ~")
    .bank("RolandTR909")
    .gain(0.8)
    .room(0.25),

  // Ghost snares for rolling feel
  s("~ ~ sd:3? ~ ~ ~ ~ sd:3?")
    .bank("RolandTR909")
    .gain(0.25)
    .room(0.4),

  // Hi-hats with velocity variation
  s("hh*16")
    .bank("RolandTR909")
    .gain(perlin.range(0.2, 0.4))
    .pan(sine.range(0.35, 0.65).slow(2))
    .hpf(7000),

  // Open hat accents
  s("~ ~ ~ oh ~ ~ oh ~")
    .bank("RolandTR909")
    .gain(0.35)
    .cut(1),

  // === BASS ===
  
  // Deep sine sub
  note("<c1 ~ c1 ~> <f1 ~ ~ f1> <bb0 ~ bb0 ~> <eb1 ~ ~ ~>")
    .s("sine")
    .gain(0.7)
    .lpf(80)
    .attack(0.01)
    .decay(0.2)
    .sustain(0.5)
    .release(0.4),

  // === CHORDS ===
  
  // Rhodes pad
  chords.voicing()
    .s("gm_epiano1")
    .gain(0.3)
    .room(0.5)
    .delay(0.3)
    .delaytime(0.375)
    .delayfeedback(0.3),

  // === ATMOSPHERE ===
  
  // String wash
  chords.voicing()
    .s("gm_strings")
    .attack(2)
    .sustain(0.7)
    .release(3)
    .gain(0.2)
    .room(0.7)
    .size(0.85)
    .lpf(3500)
    .hpf(300)
)
