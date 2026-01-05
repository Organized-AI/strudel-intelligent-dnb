// Hydra Full Performance Template
// Complete audiovisual intelligent DnB set
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// Initialize Hydra with options
await initHydra({ 
  detectAudio: true,
  numSources: 4,
  numOutputs: 4
})

// ============================================
// VISUAL SCENES - Uncomment one at a time
// ============================================

// === SCENE 1: Intro - Minimal Atmosphere ===
noise(2, 0.1)
  .color(0.1, 0.15, 0.25)
  .modulate(osc(3, 0.05), 0.1)
  .scale(() => 1 + a.fft[0] * 0.1)
  .out()

// === SCENE 2: Build - Geometric Pulse ===
// osc(8, 0.2, 0.8)
//   .thresh(0.5)
//   .color(0.2, 0.4, 0.7)
//   .rotate(() => time * 0.1)
//   .scale(() => 1 + a.fft[0] * 0.3)
//   .repeat(2, 2)
//   .modulate(noise(2), () => a.fft[1] * 0.2)
//   .out()

// === SCENE 3: Drop - Intense Feedback ===
// src(o0)
//   .scale(1.01)
//   .rotate(() => 0.01 + a.fft[0] * 0.02)
//   .blend(
//     osc(20, 0.1, 1)
//       .thresh(0.9)
//       .color(0.8, 0.3, 0.1)
//       .scale(() => 1 + a.fft[0] * 0.5),
//     0.3
//   )
//   .modulate(noise(3), 0.01)
//   .saturate(1.2)
//   .out()

// === SCENE 4: Breakdown - Oceanic ===
// noise(3, 0.05)
//   .color(0.1, 0.4, 0.6)
//   .rotate(() => Math.sin(time * 0.1) * 0.3)
//   .modulate(osc(2, 0.02), 0.4)
//   .blend(
//     shape(6, 0.5)
//       .color(0.2, 0.5, 0.8)
//       .scale(() => 0.5 + a.fft[2] * 0.5),
//     0.15
//   )
//   .out()

// === SCENE 5: Outro - Fade to Black ===
// solid(0, 0, 0)
//   .blend(
//     noise(2, 0.1)
//       .color(0.1, 0.15, 0.2)
//       .scale(() => 1 + a.fft[0] * 0.1),
//     () => 0.3 - time * 0.01
//   )
//   .out()

// ============================================
// AUDIO LAYERS - Build your set
// ============================================

let chords = chord("<Cm9 Fm9 Bbm9 Ebmaj7>/4").dict('ireal')

// === LAYER 1: DRUMS ===

// Kick
$: s("bd ~ ~ ~ [~ bd] ~ bd ~")
  .bank("RolandTR909")
  .gain(0.8)
  .lpf(100)

// Snare (uncomment to add)
// $: s("~ sd ~ ~ ~ sd ~ ~")
//   .bank("RolandTR909")
//   .gain(0.75)
//   .room(0.3)

// Ghost snares
// $: s("~ ~ sd:3? ~ ~ ~ ~ sd:3?")
//   .bank("RolandTR909")
//   .gain(0.2)
//   .room(0.4)

// Hats
$: s("hh*16")
  .bank("RolandTR909")
  .gain(perlin.range(0.2, 0.4))
  .hpf(7000)

// === LAYER 2: BASS ===

// Sub bass
// $: note("<c1 ~ c1 ~> <f1 ~ ~ f1> <bb0 ~ bb0 ~> <eb1 ~ ~ ~>")
//   .s("sine")
//   .gain(0.65)
//   .lpf(80)

// === LAYER 3: CHORDS ===

// Rhodes
// $: chords.voicing()
//   .s("gm_epiano1")
//   .gain(0.3)
//   .room(0.5)
//   .delay(0.3)
//   .delaytime(0.375)

// === LAYER 4: ATMOSPHERE ===

// Strings
// $: chords.voicing()
//   .s("gm_strings")
//   .attack(2)
//   .release(3)
//   .gain(0.2)
//   .room(0.7)
//   .lpf(3000)
