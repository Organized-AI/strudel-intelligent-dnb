// Shuffled Breakbeat Patterns
// Variations with swing and humanization
// @tempo 170 BPM

setcps(170/60)

// Pattern 1: Subtle swing
$: s("bd [~ bd] sd [bd ~]")
  .bank("RolandTR909")
  .nudge("0 0.02 0 0.015")  // Subtle swing timing
  .gain(0.85)

// Pattern 2: Syncopated kick
$: s("[bd ~] [~ bd:1] sd [~ bd]")
  .bank("RolandTR909")
  .room(0.2)
  .gain(0.8)

// Pattern 3: Rolling hats with probability
$: s("hh*8")
  .bank("RolandTR909")
  .struct("x x x? x x x? x x")  // Some hits have 50% probability
  .gain(perlin.range(0.25, 0.45))
  .hpf(6000)
  .pan(rand)

// Pattern 4: Ghost snares
$: s("~ ~ ~ sd:2? ~ ~ sd:3? ~")
  .bank("RolandTR909")
  .gain(0.25)
  .room(0.5)
  .delay(0.3)
  .delaytime(0.15)
