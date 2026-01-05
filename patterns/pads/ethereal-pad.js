// Ethereal Pad Textures
// Atmospheric layers in the style of Good Looking Records
// @tempo 170 BPM

setcps(170/60)

// Lush pad with slow filter movement
$: chord("<Cm9 Fm9 Bbm7 Ebmaj7>/2")
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
  .delaytime(0.375)  // Dotted eighth delay
  .delayfeedback(0.4)
