# Hydra Visual Integration Guide

Strudel has built-in support for [Hydra](https://hydra.ojack.xyz/), a live coding video synthesizer. This guide covers how to create audio-reactive visuals for intelligent DnB performances.

## Quick Start

```javascript
// Initialize Hydra at the start of your pattern
await initHydra()

// Now you can use Hydra functions
osc(10, 0.1, 0.8).out()
```

## Audio Reactivity

Strudel automatically exposes audio analysis to Hydra via the `a` object:

```javascript
// a.fft[] array contains frequency bands
a.fft[0]  // Bass/sub frequencies (kick, sub bass)
a.fft[1]  // Low-mids (snare body, bass harmonics)
a.fft[2]  // Mids (vocals, synths)
a.fft[3]  // High-mids (snare crack, hats)
a.fft[4]  // Highs (cymbals, air)
```

### Examples

```javascript
// Scale with bass
.scale(() => 1 + a.fft[0] * 0.5)

// Rotate with mids
.rotate(() => a.fft[2] * 0.1)

// Modulation intensity with highs
.modulate(noise(2), () => a.fft[4] * 0.3)
```

## Hydra Basics

### Sources

```javascript
osc(freq, sync, offset)    // Oscillator
noise(scale, offset)       // Noise generator
shape(sides, radius, smooth) // Geometric shape
solid(r, g, b, a)          // Solid color
gradient(speed)            // Color gradient
```

### Geometry

```javascript
.rotate(angle)             // Rotate
.scale(amount)             // Scale
.repeat(x, y)              // Tile/repeat
.kaleid(sides)             // Kaleidoscope
.scroll(x, y)              // Pan/scroll
```

### Color

```javascript
.color(r, g, b)            // Set RGB
.saturate(amount)          // Saturation
.contrast(amount)          // Contrast
.brightness(amount)        // Brightness
.thresh(threshold)         // Threshold to B&W
```

### Modulators

```javascript
.modulate(source, amount)  // Displacement
.blend(source, amount)     // Mix/blend
.mult(source)              // Multiply
.add(source)               // Add
.diff(source)              // Difference
```

### Feedback

```javascript
src(o0)                    // Use output as input
  .scale(0.99)             // Slight zoom
  .rotate(0.01)            // Slight rotation
  .blend(newContent, 0.1)  // Add new content
  .out()                   // Output
```

## Color Palettes for Intelligent DnB

### Deep Ocean (Atlantis vibes)
```javascript
.color(0.1, 0.3, 0.6)      // Deep blue
.color(0.05, 0.2, 0.4)     // Darker blue
.color(0.2, 0.5, 0.7)      // Lighter blue
```

### Cosmic Purple (Late night)
```javascript
.color(0.3, 0.1, 0.5)      // Deep purple
.color(0.5, 0.2, 0.6)      // Violet
.color(0.8, 0.3, 0.6)      // Pink accent
```

### Warm Amber (Jazz club)
```javascript
.color(0.8, 0.5, 0.2)      // Amber
.color(0.6, 0.3, 0.1)      // Brown
.color(0.9, 0.7, 0.4)      // Gold
```

### Minimal Grayscale
```javascript
.color(0.15, 0.15, 0.2)    // Dark gray-blue
.color(0.3, 0.3, 0.35)     // Medium gray
.color(0.8, 0.8, 0.85)     // Light gray
```

## Performance Tips

### Scene Transitions

Build a set with multiple scenes. Comment/uncomment to switch:

```javascript
// SCENE 1: Intro - Atmospheric
// noise(2, 0.1).color(0.1, 0.2, 0.3).out()

// SCENE 2: Build - Geometric
// osc(10, 0.1).kaleid(4).out()

// SCENE 3: Drop - Feedback
src(o0).scale(1.01).blend(osc(20).thresh(0.9), 0.2).out()
```

### CPU Optimization

- Use fewer `modulate()` calls for better performance
- Lower `repeat()` values = less GPU load
- Feedback (`src(o0)`) is CPU-intensive
- Test on target hardware before performance

### Matching Music Energy

| Music Energy | Visual Characteristics |
|--------------|----------------------|
| Intro/Ambient | Slow movement, low saturation, minimal shapes |
| Build | Increasing complexity, brighter colors |
| Drop | Fast movement, high contrast, feedback effects |
| Breakdown | Return to atmospheric, gradual fade |
| Outro | Slow fade to minimal/black |

## Complete Example

```javascript
setcps(170/60)
await initHydra()

// Audio-reactive oceanic visuals
noise(3, 0.1)
  .color(0.1, 0.3, 0.6)
  .modulate(osc(2, 0.05), 0.3)
  .scale(() => 1 + a.fft[0] * 0.2)
  .rotate(() => time * 0.05)
  .out()

// Intelligent DnB pattern
stack(
  s("bd ~ ~ ~ [~ bd] ~ bd ~").bank("RolandTR909").gain(0.8).lpf(100),
  s("~ sd ~ ~ ~ sd ~ ~").bank("RolandTR909").gain(0.7).room(0.3),
  s("hh*16").bank("RolandTR909").gain(perlin.range(0.2, 0.4)).hpf(7000),
  note("<c1 ~ c1 ~> <f1 ~ ~ f1>").s("sine").gain(0.6).lpf(80),
  chord("<Cm9 Fm9>/2").voicing().s("gm_epiano1").gain(0.3).room(0.5)
)
```

## Resources

- [Hydra Documentation](https://hydra.ojack.xyz/docs/)
- [Hydra Functions Reference](https://hydra.ojack.xyz/api/)
- [Strudel Hydra Integration](https://strudel.cc/learn/hydra/)
- [Olivia Jack's Hydra Tutorials](https://github.com/ojack/hydra)

## Keyboard Shortcuts in Strudel REPL

- `Ctrl+Enter` - Evaluate code (audio + visuals)
- `Ctrl+.` - Stop all (hush)
- `Ctrl+H` - Toggle Hydra canvas visibility

---

*"The visual must serve the music, not overpower it."*
