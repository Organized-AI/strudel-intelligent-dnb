// "Journey Inwards"
// Introspective intelligent DnB - late night headphone music
// @tempo 168 BPM (slightly slower for mood)
// @by Organized AI

setcps(168/60)

// Progression - melancholic jazz
let chords = chord("<Am9 Em9 Fmaj9 Dm9>/4").dict('ireal')

stack(
  // === DRUMS - Ultra minimal ===
  
  // Kick with swing
  s("bd ~ ~ ~ bd ~ ~ ~")
    .bank("RolandTR909")
    .gain(0.7)
    .lpf(85)
    .nudge("0 0 0 0 0.015 0 0 0"),

  // Soft snare
  s("~ ~ ~ sd ~ ~ ~ sd:1?")
    .bank("RolandTR909")
    .gain(0.6)
    .room(0.4)
    .size(0.5),

  // Brushed hats
  s("hh*8")
    .bank("RolandTR909")
    .gain(perlin.range(0.1, 0.25).slow(4))
    .hpf(9000)
    .room(0.3),

  // === BASS - Warm and deep ===
  
  note("<a0 ~ a0 ~> <e1 ~ ~ e1> <f1 ~ f1 ~> <d1 ~ ~ ~>")
    .s("triangle")
    .gain(0.55)
    .lpf(150)
    .attack(0.02)
    .decay(0.2)
    .sustain(0.45)
    .release(0.5),

  // === RHODES - The heart ===
  
  chords.voicing()
    .s("gm_epiano1")
    .gain(0.35)
    .room(0.5)
    .delay(0.35)
    .delaytime(0.428)  // Triplet feel at 168
    .delayfeedback(0.35)
    .phaser(2),

  // Arpeggiated notes
  chords.arp("up").slow(2)
    .s("gm_epiano1")
    .gain(0.2)
    .room(0.6)
    .delay(0.4)
    .delaytime(0.357)
    .hpf(800),

  // === STRINGS - Distant ===
  
  chords.voicing()
    .s("gm_strings")
    .attack(3)
    .sustain(0.5)
    .release(5)
    .gain(0.12)
    .room(0.85)
    .size(0.95)
    .lpf(2500)
    .hpf(400)
    .delay(0.5)
    .delaytime(0.714)
    .delayfeedback(0.3)
)
