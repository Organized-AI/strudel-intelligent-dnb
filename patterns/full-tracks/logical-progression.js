// "Logical Progression" 
// Full intelligent DnB track in the Good Looking style
// Using real breaks from dirt-samples
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// Load classic breaks
samples('github:tidalcycles/dirt-samples')

// Define chord progression
let chords = chord("<Cm9 Fm9 Bbm7 Ebmaj7>/4").dict('ireal')

stack(
  // === DRUMS - Real rolling break ===
  
  // Main chopped break - classic jungle edit
  s("breaks165")
    .fit()
    .slice(8, "0 0 6 3 0 2 6 7")
    .gain(0.7)
    .room(0.2),

  // Ghost break layer
  s("breaks165")
    .fit()
    .chop(16)
    .gain(0.12)
    .hpf(3000)
    .room(0.4)
    .pan(perlin.range(0.3, 0.7)),

  // Sub kick reinforcement
  s("bd ~ ~ ~ [~ bd] ~ bd ~")
    .bank("RolandTR909")
    .gain(0.5)
    .lpf(100),

  // Open hat accents
  s("~ ~ ~ oh ~ ~ oh ~")
    .bank("RolandTR909")
    .gain(0.3)
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
