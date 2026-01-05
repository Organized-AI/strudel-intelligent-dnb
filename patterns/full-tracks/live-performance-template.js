// Live Performance Template
// Modular structure for live coding performances
// Uncomment/comment layers to build arrangement live
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// Load classic breaks
samples('github:tidalcycles/dirt-samples')

// === GLOBAL CONTROLS ===

let chords = chord("<Cm9 Fm9 Bbm9 Ebmaj7>/4").dict('ireal')

// =============================================
// LAYER 1: DRUMS - Start with break, build from there
// =============================================

// Main break - classic jungle chop
$: s("breaks165")
  .fit()
  .slice(8, "0 0 6 3 0 2 6 7")
  .gain(0.7)
  .room(0.2)

// Alternative: Amen break
// $: s("amen")
//   .fit()
//   .slice(8, "0 0 6 3 0 2 6 7")
//   .gain(0.7)
//   .room(0.2)

// Kick reinforcement (uncomment to add punch)
// $: s("bd ~ ~ ~ [~ bd] ~ bd ~")
//   .bank("RolandTR909")
//   .gain(0.5)
//   .lpf(100)

// Extra hats (uncomment for density)
// $: s("hh*16")
//   .bank("RolandTR909")
//   .gain(perlin.range(0.15, 0.3))
//   .hpf(7000)

// Ghost snares (uncomment for rolling feel)
// $: s("~ ~ sd:3? ~ ~ ~ ~ sd:3?")
//   .bank("RolandTR909")
//   .gain(0.2)
//   .room(0.4)

// =============================================
// LAYER 2: BASS
// =============================================

// Sub bass (uncomment to add)
// $: note("<c1 ~ c1 ~> <f1 ~ ~ f1> <bb0 ~ bb0 ~> <eb1 ~ ~ ~>")
//   .s("sine")
//   .gain(0.65)
//   .lpf(80)
//   .decay(0.2)
//   .sustain(0.4)

// =============================================
// LAYER 3: CHORDS
// =============================================

// Rhodes (uncomment to add)
// $: chords.voicing()
//   .s("gm_epiano1")
//   .gain(0.3)
//   .room(0.5)
//   .delay(0.3)
//   .delaytime(0.375)

// Offbeat stabs (uncomment for rhythm)
// $: chords.voicing()
//   .s("gm_epiano1")
//   .struct("~ x ~ [x ~]")
//   .gain(0.25)
//   .room(0.4)
//   .hpf(400)

// =============================================
// LAYER 4: ATMOSPHERE
// =============================================

// Strings (uncomment to add)
// $: chords.voicing()
//   .s("gm_strings")
//   .attack(2)
//   .release(3)
//   .gain(0.2)
//   .room(0.7)
//   .lpf(3000)

// Pad (uncomment for wash)
// $: chords.voicing()
//   .s("sawtooth")
//   .attack(2)
//   .release(3)
//   .lpf(sine.range(500, 1500).slow(16))
//   .gain(0.15)
//   .room(0.8)

// =============================================
// TRANSITIONS - Use these for builds and drops
// =============================================

// Filter sweep: change lpf value live
// .lpf(sine.range(200, 4000).slow(16))

// Reverb wash: increase for drops
// .room(0.9).size(0.95)

// Delay throws: increase for transitions
// .delay(0.6).delayfeedback(0.6)

// Break variations to switch between:
// "0 0 6 3 0 2 6 7"   // Classic
// "0 1 2 3 4 5 6 7"   // Straight
// "7 6 5 4 3 2 1 0"   // Reverse
// "0 ~ 6 ~ 0 ~ 6 ~"   // Sparse
// "0 0 [6 3] 0 2 [6 7] ~"  // Fills
