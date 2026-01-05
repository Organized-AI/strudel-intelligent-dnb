// Jazz Chord Voicings
// Minor 9ths, 7ths, and extensions - the harmonic palette
// @tempo 170 BPM

setcps(170/60)

// Progression 1: Minor movement (Bukem style)
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

// Progression 2: II-V-I jazz movement
$: chord("<Dm9 G13 Cmaj9 Am9>/4")
  .dict('ireal')
  .voicing()
  .s("gm_epiano1")
  .gain(0.35)
  .room(0.4)
  .delay(0.25)

// Progression 3: Darker tension
$: chord("<Bbm9 Ebm9 Abmaj7 Dbmaj7>/4")
  .dict('ireal')
  .voicing()
  .s("gm_pad_warm")
  .attack(1)
  .release(2)
  .gain(0.25)
  .room(0.6)
