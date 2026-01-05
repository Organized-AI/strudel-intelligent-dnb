// "Demon's Theme" Tribute
// In the style of LTJ Bukem's classic 1992 track
// Rolling breaks, deep sub, ethereal atmosphere
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// Load classic breaks
samples('github:tidalcycles/dirt-samples')

// Define chord progression
let chords = chord("<Dm9 Am9 Gm9 Cm9>/4").dict('ireal')

stack(
  // === DRUMS - Rolling jungle break ===
  
  // Main chopped break
  s("breaks165")
    .fit()
    .slice(8, "0 0 6 3 0 2 6 7")
    .gain(0.7)
    .room(0.2)
    .lpf(8000),

  // Ghost break layer for texture
  s("breaks165")
    .fit()
    .chop(16)
    .gain(0.15)
    .hpf(3000)
    .room(0.4)
    .pan(perlin.range(0.3, 0.7)),

  // Sub kick reinforcement
  s("bd ~ ~ ~ [~ bd] ~ bd ~")
    .bank("RolandTR909")
    .gain(0.55)
    .lpf(80),

  // === BASS - Deep rolling sub ===
  
  note("<d1 ~ d1 ~> <a0 ~ ~ a0> <g1 ~ g1 ~> <c1 ~ ~ ~>")
    .s("sine")
    .gain(0.7)
    .lpf(75)
    .attack(0.01)
    .decay(0.2)
    .sustain(0.5)
    .release(0.4),

  // === PADS - Ethereal atmosphere ===
  
  // Main pad - slow filter sweep
  chords.voicing()
    .s("sawtooth")
    .attack(2.5)
    .decay(1)
    .sustain(0.6)
    .release(4)
    .lpf(sine.range(400, 1200).slow(16))
    .lpq(0.3)
    .gain(0.18)
    .room(0.75)
    .size(0.85)
    .delay(0.4)
    .delaytime(0.375)
    .delayfeedback(0.4),

  // String layer
  chords.voicing()
    .s("gm_strings")
    .attack(3)
    .sustain(0.5)
    .release(5)
    .gain(0.15)
    .room(0.8)
    .size(0.9)
    .lpf(3000)
    .hpf(400),

  // === MELODIC ELEMENT - Delayed Rhodes ===
  
  chords.voicing()
    .s("gm_epiano1")
    .struct("~ x ~ [x ~]")  // Offbeat hits
    .gain(0.25)
    .room(0.5)
    .delay(0.45)
    .delaytime(0.375)
    .delayfeedback(0.4)
    .hpf(400)
)
