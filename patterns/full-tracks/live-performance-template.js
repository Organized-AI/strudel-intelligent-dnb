// Live Performance Template
// Modular structure for live coding performances
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// === GLOBAL CONTROLS ===
// Uncomment/comment layers to build arrangement live

let chords = chord("<Cm9 Fm9 Bbm9 Ebmaj7>/4").dict('ireal')

// === LAYER 1: DRUMS ===
// Start with just kick and hat, build from there

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

// Ghost snares (uncomment for rolling feel)
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

// Sub bass (uncomment to add)
// $: note("<c1 ~ c1 ~> <f1 ~ ~ f1> <bb0 ~ bb0 ~> <eb1 ~ ~ ~>")
//   .s("sine")
//   .gain(0.65)
//   .lpf(80)
//   .decay(0.2)
//   .sustain(0.4)

// === LAYER 3: CHORDS ===

// Rhodes (uncomment to add)
// $: chords.voicing()
//   .s("gm_epiano1")
//   .gain(0.3)
//   .room(0.5)
//   .delay(0.3)
//   .delaytime(0.375)

// === LAYER 4: ATMOSPHERE ===

// Strings (uncomment to add)
// $: chords.voicing()
//   .s("gm_strings")
//   .attack(2)
//   .release(3)
//   .gain(0.2)
//   .room(0.7)
//   .lpf(3000)

// === TRANSITIONS ===
// Use these for builds and drops

// Filter sweep (change lpf value live)
// .lpf(sine.range(200, 4000).slow(16))

// Reverb wash (increase room and size for drops)
// .room(0.9).size(0.95)

// Delay throws (increase for transitions)
// .delay(0.6).delayfeedback(0.6)
