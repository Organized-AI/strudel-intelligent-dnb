// Jazz Chord Voicings
// Minor 9ths, 7ths, and extensions - the harmonic palette
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// Load samples (for when combining with breaks)
samples('github:tidalcycles/dirt-samples')

// === PROGRESSION 1: Minor Movement (Bukem Style) ===

$: chord("<Cm9 Fm9 Bbm9 Ebmaj7>/4")
  .dict('ireal')
  .voicing()
  .s("sawtooth")
  .lpf(1500)
  .lpq(0.5)
  .attack(0.3)
  .release(1.5)
  .gain(0.2)
  .room(0.5)

// === PROGRESSION 2: II-V-I Jazz Movement ===

$: chord("<Dm9 G13 Cmaj9 Am9>/4")
  .dict('ireal')
  .voicing()
  .s("gm_epiano1")
  .gain(0.35)
  .room(0.4)
  .delay(0.25)

// === PROGRESSION 3: Darker Tension ===

$: chord("<Bbm9 Ebm9 Abmaj7 Dbmaj7>/4")
  .dict('ireal')
  .voicing()
  .s("gm_pad_warm")
  .attack(1)
  .release(2)
  .gain(0.25)
  .room(0.6)

// === FULL TRACK: Jazz DnB ===

let chords = chord("<Dm9 G13 Cmaj9 Am9>/4").dict('ireal')

stack(
  // Rolling amen
  s("amen")
    .fit()
    .slice(8, "0 0 6 3 0 2 6 7")
    .gain(0.65)
    .room(0.2),

  // Kick reinforcement
  s("bd ~ ~ ~ [~ bd] ~ bd ~")
    .bank("RolandTR909")
    .gain(0.45)
    .lpf(100),

  // Rolling hats
  s("hh*16")
    .bank("RolandTR909")
    .gain(perlin.range(0.15, 0.3))
    .hpf(7000),

  // Sub following roots
  note("<d1 ~ d1 ~> <g1 ~ ~ g1> <c1 ~ c1 ~> <a0 ~ ~ ~>")
    .s("sine")
    .gain(0.6)
    .lpf(75),

  // Main Rhodes voicings
  chords.voicing()
    .s("gm_epiano1")
    .gain(0.32)
    .room(0.5)
    .delay(0.3)
    .delaytime(0.375)
    .delayfeedback(0.3),

  // Pad layer
  chords.voicing()
    .s("sawtooth")
    .attack(1.5)
    .release(2)
    .lpf(1200)
    .gain(0.15)
    .room(0.6),

  // String layer
  chords.voicing()
    .s("gm_strings")
    .attack(2)
    .release(3)
    .gain(0.15)
    .room(0.7)
    .lpf(3000)
    .hpf(300)
)
