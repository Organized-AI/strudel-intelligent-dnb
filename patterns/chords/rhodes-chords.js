// Rhodes Electric Piano Chords
// Jazz-influenced voicings - signature intelligent DnB sound
// @tempo 170 BPM

setcps(170/60)

// Classic Rhodes progression
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

// Rhythmic chord stabs
$: chord("<Am9 Dm9 Gm9 Cmaj9>")
  .dict('ireal')
  .voicing()
  .s("gm_epiano1")
  .struct("~ x ~ [x ~]")  // Offbeat stabs
  .gain(0.3)
  .room(0.4)
  .hpf(400)
