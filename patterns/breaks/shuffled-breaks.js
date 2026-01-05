// Shuffled Breakbeat Patterns
// Variations with swing and humanization using real breaks
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// Load classic breaks
samples('github:tidalcycles/dirt-samples')

// === PATTERN 1: Shuffled breaks165 ===
// Subtle swing via slice pattern

$: s("breaks165")
  .fit()
  .slice(8, "[0 ~] [0 1] 6 3 [0 ~] 2 6 7")
  .gain(0.8)
  .room(0.2)

// === PATTERN 2: Syncopated Amen ===

$: s("amen")
  .fit()
  .slice(8, "[0 ~] [~ 1] 6 [3 ~] ~ 2 [6 7] ~")
  .gain(0.8)
  .room(0.25)

// === PATTERN 3: breaks125 with Probability ===
// Some slices have 50% chance to play

$: s("breaks125")
  .fit()
  .slice(8, "0 1? 6 3? 0 2? 6 7?")
  .gain(0.8)
  .room(0.2)

// === PATTERN 4: Layered Shuffle ===
// Two breaks at different rhythms

stack(
  s("breaks165")
    .fit()
    .slice(8, "0 0 6 3 0 2 6 7")
    .gain(0.65),
  
  s("breaks125")
    .fit()
    .slice(8, "~ 1 ~ 4 ~ 5 ~ 3")
    .gain(0.35)
    .hpf(2000)
    .room(0.3)
)

// === PATTERN 5: Ghost Notes Layer ===
// Real break + TR909 ghost snares

stack(
  s("breaks165")
    .fit()
    .slice(8, "0 0 6 3 0 2 6 7")
    .gain(0.7),
  
  s("~ ~ ~ sd:2? ~ ~ sd:3? ~")
    .bank("RolandTR909")
    .gain(0.2)
    .room(0.5)
    .delay(0.3)
    .delaytime(0.15)
)

// === PATTERN 6: Evolving Shuffle ===
// Pattern changes every 4 bars

$: s("breaks165")
  .fit()
  .slice(8, "<[0 0 6 3 0 2 6 7] [0 ~ 6 ~ 0 ~ 6 ~] [7 6 5 4 3 2 1 0] [0 3 ~ 3 6 7 ~ 7]>/4")
  .gain(0.8)
  .room(0.2)
