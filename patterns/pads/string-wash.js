// String Wash Textures
// Soaring strings like "Demon's Theme" or "Atlantis"
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// Load samples (for when combining with breaks)
samples('github:tidalcycles/dirt-samples')

// === PATTERN 1: Layered String Pad ===

$: chord("<Am9 Dm9 Gm7 Cmaj7>/4")
  .dict('ireal')
  .voicing()
  .s("gm_strings")
  .attack(2)
  .decay(1)
  .sustain(0.8)
  .release(3)
  .gain(0.3)
  .room(0.7)
  .size(0.9)
  .lpf(3000)
  .hpf(200)

// === PATTERN 2: High String Shimmer ===

$: note("<e5 d5 c5 b4>/4")
  .s("gm_strings")
  .attack(1.5)
  .release(2)
  .gain(0.15)
  .room(0.8)
  .delay(0.5)
  .delaytime(0.5)
  .delayfeedback(0.3)
  .hpf(1000)

// === PATTERN 3: Full Cinematic Combo ===

let chords = chord("<Am9 Dm9 Gm7 Cmaj7>/4").dict('ireal')

stack(
  // Rolling break
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

  // Deep sub
  note("<a0 ~ a0 ~> <d1 ~ ~ d1> <g1 ~ g1 ~> <c1 ~ ~ ~>")
    .s("sine")
    .gain(0.6)
    .lpf(75),

  // Rhodes
  chords.voicing()
    .s("gm_epiano1")
    .gain(0.28)
    .room(0.5)
    .delay(0.3)
    .delaytime(0.375),

  // Main strings
  chords.voicing()
    .s("gm_strings")
    .attack(2)
    .sustain(0.7)
    .release(3)
    .gain(0.2)
    .room(0.7)
    .size(0.85)
    .lpf(3000)
    .hpf(300),

  // High shimmer
  note("<e5 d5 c5 b4>/8")
    .s("gm_strings")
    .attack(1.5)
    .release(2)
    .gain(0.1)
    .room(0.8)
    .hpf(1000)
)
