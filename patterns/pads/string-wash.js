// String Wash Textures
// Soaring strings like "Demon's Theme" or "Atlantis"
// @tempo 170 BPM

setcps(170/60)

// Layered string pad
$: chord("<Am9 Dm9 Gm7 Cmaj7>/4")
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

// High string shimmer
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
