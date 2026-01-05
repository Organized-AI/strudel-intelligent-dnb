// "Logical Visions" - Complete Audiovisual Set
// Full intelligent DnB track with synchronized Hydra visuals
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// Initialize Hydra
await initHydra()

// ============================================
// VISUALS - Audio-reactive atmospheric
// ============================================

// Deep ocean atmosphere with audio reactivity
noise(3, 0.08)
  .color(0.08, 0.25, 0.5)
  .saturate(1.4)
  .modulate(
    osc(2, 0.03, 0)
      .rotate(() => time * 0.05),
    0.25
  )
  .rotate(() => Math.sin(time * 0.08) * 0.15)
  .scale(() => 1 + a.fft[0] * 0.15)  // Pulse with bass
  .blend(
    osc(15, 0.05, 0.8)
      .thresh(() => 0.85 - a.fft[3] * 0.1)  // React to snares
      .color(0.3, 0.5, 0.8)
      .rotate(() => time * -0.1)
      .scale(() => 1 + a.fft[2] * 0.2),
    () => 0.1 + a.fft[1] * 0.15
  )
  .contrast(1.15)
  .out()

// ============================================
// AUDIO - Full intelligent DnB arrangement
// ============================================

let chords = chord("<Cm9 Fm9 Bbm9 Ebmaj7>/4").dict('ireal')

stack(
  // === DRUMS ===
  
  // Kick with sub weight
  s("bd ~ ~ ~ [~ bd] ~ bd ~")
    .bank("RolandTR909")
    .gain(0.85)
    .lpf(100)
    .room(0.1),

  // Main snare
  s("~ sd ~ ~ ~ sd ~ ~")
    .bank("RolandTR909")
    .gain(0.75)
    .room(0.3)
    .size(0.4),

  // Ghost snares for rolling feel
  s("~ ~ sd:3? ~ ~ ~ sd:2? sd:3?")
    .bank("RolandTR909")
    .gain(0.22)
    .room(0.4)
    .pan(sine.range(0.3, 0.7).slow(2)),

  // Rolling hi-hats with dynamics
  s("hh*16")
    .bank("RolandTR909")
    .gain(perlin.range(0.18, 0.38))
    .pan(sine.range(0.35, 0.65).slow(2))
    .hpf(7000)
    .room(0.2),

  // Open hat accents
  s("~ ~ ~ oh ~ ~ oh ~")
    .bank("RolandTR909")
    .gain(0.32)
    .cut(1)
    .room(0.35),

  // Ride shimmer
  s("~ ~ rd? ~ ~ ~ rd? ~")
    .bank("RolandTR909")
    .gain(0.18)
    .hpf(5000)
    .room(0.5),

  // === BASS ===
  
  // Deep sine sub
  note("<c1 ~ c1 ~> <f1 ~ ~ f1> <bb0 ~ bb0 ~> <eb1 ~ ~ ~>")
    .s("sine")
    .gain(0.68)
    .lpf(75)
    .attack(0.01)
    .decay(0.2)
    .sustain(0.5)
    .release(0.4),

  // Mid-bass layer for definition
  note("<c2 ~ c2 ~> <f2 ~ ~ f2> <bb1 ~ bb1 ~> <eb2 ~ ~ ~>")
    .s("triangle")
    .gain(0.18)
    .lpf(300)
    .hpf(80)
    .room(0.2),

  // === CHORDS & MELODY ===
  
  // Rhodes - the heart of intelligent DnB
  chords.voicing()
    .s("gm_epiano1")
    .gain(0.32)
    .room(0.5)
    .delay(0.32)
    .delaytime(0.375)
    .delayfeedback(0.32)
    .lpf(4500),

  // Pad layer - atmospheric wash
  chords.voicing()
    .s("sawtooth")
    .attack(2)
    .decay(0.8)
    .sustain(0.6)
    .release(3)
    .lpf(sine.range(600, 1400).slow(16))
    .lpq(0.4)
    .gain(0.15)
    .room(0.7)
    .size(0.85),

  // String layer - cinematic depth
  chords.voicing()
    .s("gm_strings")
    .attack(2.5)
    .sustain(0.65)
    .release(4)
    .gain(0.18)
    .room(0.75)
    .size(0.9)
    .lpf(3200)
    .hpf(350)
    .delay(0.4)
    .delaytime(0.5)
    .delayfeedback(0.28)
)
