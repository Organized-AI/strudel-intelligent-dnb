// Ethereal Pad Textures
// Atmospheric layers in the style of Good Looking Records
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// Load samples (for when combining with breaks)
samples('github:tidalcycles/dirt-samples')

// === PATTERN 1: Lush Pad with Filter Movement ===

$: chord("<Cm9 Fm9 Bbm7 Ebmaj7>/2")
  .dict('ireal')
  .voicing()
  .s("sawtooth")
  .attack(1.5)
  .decay(0.5)
  .sustain(0.7)
  .release(2)
  .lpf(sine.range(400, 1200).slow(16))
  .lpq(0.5)
  .gain(0.25)
  .room(0.6)
  .size(0.8)
  .delay(0.4)
  .delaytime(0.375)
  .delayfeedback(0.4)

// === PATTERN 2: Full Atmospheric Combo ===

let chords = chord("<Cm9 Fm9 Bbm7 Ebmaj7>/4").dict('ireal')

stack(
  // Sparse break
  s("breaks165")
    .fit()
    .slice(8, "0 ~ ~ 3 ~ ~ 6 ~")
    .gain(0.5)
    .room(0.3),

  // Minimal drums
  s("bd ~ ~ ~ ~ ~ bd ~")
    .bank("RolandTR909")
    .gain(0.5)
    .lpf(90),

  s("hh*8")
    .bank("RolandTR909")
    .gain(perlin.range(0.1, 0.25))
    .hpf(8000),

  // Deep sub
  note("<c1 ~ c1 ~> <f1 ~ ~ f1> <bb0 ~ bb0 ~> <eb1 ~ ~ ~>")
    .s("sine")
    .gain(0.6)
    .lpf(75),

  // Main pad
  chords.voicing()
    .s("sawtooth")
    .attack(1.5)
    .release(2)
    .lpf(sine.range(400, 1200).slow(16))
    .gain(0.22)
    .room(0.6)
    .delay(0.4)
    .delayfeedback(0.4)
)
