// Deep Sub Bass Patterns
// Warm, rolling sub-bass - the foundation of intelligent DnB
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// Load samples (for when combining with breaks)
samples('github:tidalcycles/dirt-samples')

// === PATTERN 1: Classic Rolling Sub ===
// Sine wave sub following chord roots

$: note("<c1 ~ c1 ~> <eb1 ~ ~ eb1> <f1 ~ f1 ~> <ab1 ~ ~ ~>")
  .s("sine")
  .lpf(80)
  .gain(0.7)
  .attack(0.01)
  .decay(0.2)
  .sustain(0.5)
  .release(0.3)

// === PATTERN 2: Octave Bounce ===
// Root and octave for more movement

$: note("[c1 c2]*2 [eb1 eb2]*2")
  .s("sine")
  .lpf(100)
  .gain(0.6)
  .decay(0.15)
  .sustain(0.3)
  .slow(2)

// === PATTERN 3: Sub + Break Combo ===
// Ready to layer with drums

stack(
  // Rolling break
  s("breaks165")
    .fit()
    .slice(8, "0 0 6 3 0 2 6 7")
    .gain(0.65)
    .room(0.2),

  // Deep sub following the break
  note("<c1 ~ c1 ~> <f1 ~ ~ f1> <bb0 ~ bb0 ~> <eb1 ~ ~ ~>")
    .s("sine")
    .gain(0.65)
    .lpf(75)
    .attack(0.01)
    .decay(0.2)
    .sustain(0.5)
    .release(0.4)
)
