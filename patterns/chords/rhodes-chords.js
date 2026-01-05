// Rhodes Electric Piano Chords
// Jazz-influenced voicings - signature intelligent DnB sound
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// Load samples (for when combining with breaks)
samples('github:tidalcycles/dirt-samples')

// === PATTERN 1: Classic Rhodes Progression ===

$: chord("<Am9 Dm9 Gm9 Cmaj9>/2")
  .dict('ireal')
  .voicing()
  .s("gm_epiano1")
  .gain(0.4)
  .room(0.5)
  .delay(0.3)
  .delaytime(0.375)
  .delayfeedback(0.35)
  .lpf(4000)

// === PATTERN 2: Rhythmic Chord Stabs ===

$: chord("<Am9 Dm9 Gm9 Cmaj9>")
  .dict('ireal')
  .voicing()
  .s("gm_epiano1")
  .struct("~ x ~ [x ~]")  // Offbeat stabs
  .gain(0.35)
  .room(0.4)
  .hpf(400)

// === PATTERN 3: Full Groove with Rhodes ===

let chords = chord("<Am9 Dm9 Gm9 Cmaj9>/4").dict('ireal')

stack(
  // Rolling break
  s("breaks165")
    .fit()
    .slice(8, "0 0 6 3 0 2 6 7")
    .gain(0.65)
    .room(0.2),

  // Kick reinforcement
  s("bd ~ ~ ~ [~ bd] ~ bd ~")
    .bank("RolandTR909")
    .gain(0.45)
    .lpf(100),

  // Hats
  s("hh*16")
    .bank("RolandTR909")
    .gain(perlin.range(0.15, 0.3))
    .hpf(7000),

  // Sub bass
  note("<a0 ~ a0 ~> <d1 ~ ~ d1> <g1 ~ g1 ~> <c1 ~ ~ ~>")
    .s("sine")
    .gain(0.6)
    .lpf(80),

  // Main Rhodes
  chords.voicing()
    .s("gm_epiano1")
    .gain(0.35)
    .room(0.5)
    .delay(0.3)
    .delaytime(0.375)
    .delayfeedback(0.35),

  // Offbeat stabs
  chords.voicing()
    .s("gm_epiano1")
    .struct("~ x ~ [x ~]")
    .gain(0.25)
    .room(0.4)
    .hpf(500)
)
