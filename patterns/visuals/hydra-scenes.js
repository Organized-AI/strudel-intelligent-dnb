// Hydra Visual Scenes Library
// Standalone visual patterns to mix and match
// Copy these into your performance
// @by Organized AI

// NOTE: Run `await initHydra()` first in your main pattern

// ============================================
// ATMOSPHERIC SCENES
// ============================================

// --- SCENE: Deep Ocean ---
// Slow, flowing blue gradients
/*
noise(3, 0.1)
  .color(0.05, 0.2, 0.4)
  .saturate(1.3)
  .modulate(osc(2, 0.03), 0.3)
  .rotate(() => Math.sin(time * 0.05) * 0.1)
  .out()
*/

// --- SCENE: Nebula ---
// Purple/pink cosmic dust
/*
noise(4, 0.2)
  .color(0.4, 0.1, 0.5)
  .modulate(noise(2), 0.2)
  .blend(
    osc(30, 0.01, 0)
      .thresh(0.95)
      .color(0.8, 0.3, 0.6),
    0.1
  )
  .saturate(1.5)
  .out()
*/

// --- SCENE: Fog ---
// Minimal, misty atmosphere
/*
noise(2, 0.05)
  .color(0.15, 0.15, 0.2)
  .contrast(0.8)
  .modulate(osc(1, 0.01), 0.1)
  .out()
*/

// ============================================
// RHYTHMIC SCENES
// ============================================

// --- SCENE: Pulse Grid ---
// Geometric shapes pulsing with bass
/*
shape(4, () => 0.3 + a.fft[0] * 0.2, 0.01)
  .color(0.2, 0.5, 0.8)
  .repeat(4, 4, () => a.fft[1] * 0.5, () => a.fft[2] * 0.5)
  .rotate(() => time * 0.1)
  .out()
*/

// --- SCENE: Strobe Flash ---
// High-energy strobe effect (use sparingly!)
/*
solid(1, 1, 1)
  .mult(
    osc(1, 0, 0)
      .thresh(() => 0.5 + a.fft[0] * 0.4)
  )
  .blend(
    osc(10, 0.1, 0.8)
      .color(0.2, 0.4, 0.8)
      .rotate(() => time * 0.2),
    0.7
  )
  .out()
*/

// --- SCENE: Kaleidoscope ---
// Rotating symmetry
/*
osc(10, 0.1, 0.8)
  .color(0.3, 0.5, 0.7)
  .kaleid(() => 4 + Math.floor(a.fft[0] * 4))
  .rotate(() => time * 0.1)
  .modulate(noise(2), 0.1)
  .out()
*/

// ============================================
// FEEDBACK SCENES (Intense!)
// ============================================

// --- SCENE: Tunnel ---
// Infinite zoom feedback
/*
src(o0)
  .scale(0.99)
  .rotate(() => 0.005 + a.fft[0] * 0.01)
  .blend(
    shape(6, 0.1)
      .color(0.2, 0.4, 0.8)
      .scale(() => a.fft[0]),
    0.1
  )
  .saturate(1.1)
  .out()
*/

// --- SCENE: Liquid Metal ---
// Metallic feedback distortion
/*
src(o0)
  .scale(1.01)
  .modulate(noise(3), 0.01)
  .blend(
    osc(20, 0.1, 1)
      .thresh(0.8)
      .color(0.7, 0.7, 0.8),
    0.2
  )
  .contrast(1.2)
  .saturate(0.5)
  .out()
*/

// ============================================
// TRANSITION EFFECTS
// ============================================

// --- TRANSITION: Fade to Black ---
/*
src(o0)
  .mult(solid(0.98, 0.98, 0.98))
  .out()
*/

// --- TRANSITION: Flash White ---
/*
solid(1, 1, 1)
  .blend(src(o0), () => time % 1)
  .out()
*/

// --- TRANSITION: Glitch ---
/*
src(o0)
  .modulate(
    noise(() => a.fft[0] * 100),
    () => a.fft[0] * 0.1
  )
  .out()
*/
