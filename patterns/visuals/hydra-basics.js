// Hydra Visual Integration - Basics
// Audio-reactive visuals for intelligent DnB
// @tempo 170 BPM
// @by Organized AI
//
// Strudel has built-in Hydra integration!
// The visuals respond to the audio automatically

setcps(170/60)

// Initialize Hydra with audio reactivity
await initHydra()

// === VISUAL 1: Atmospheric Waves ===
// Gentle oscillating patterns - perfect for pads

osc(10, 0.1, 0.8)
  .color(0.2, 0.4, 0.8)  // Blue tones
  .rotate(() => time * 0.1)
  .modulate(noise(2), 0.3)
  .mult(osc(20, 0.01).thresh(0.5, 0.1))
  .out()

// Audio pattern - ethereal pad
$: chord("<Cm9 Fm9 Bbm9 Ebmaj7>/4")
  .dict('ireal')
  .voicing()
  .s("sawtooth")
  .lpf(sine.range(400, 1200).slow(16))
  .attack(1.5)
  .release(2)
  .gain(0.25)
  .room(0.6)
