# Intelligent DnB Production Tips for Strudel

## The Essential Sound Palette

### Drum Sounds
- Use `RolandTR909` bank for clean, punchy drums
- Keep kick under 100Hz with `.lpf(100)`
- Layer ghost snares at 20-30% gain for rolling feel
- Hi-hats should shimmer: `.hpf(7000)` or higher

### Bass Sounds
- **Sine wave** for clean sub: `.s("sine")`
- **Triangle** for slightly more presence
- **Sawtooth** with heavy LPF for warm reese
- Always keep below 150Hz for true sub

### Chords & Pads
- Use `.dict('ireal')` for jazz voicings
- Common chords: m9, maj7, m7, 9
- Attack times of 1-3 seconds for pads
- Long releases (2-5 seconds) for atmosphere

## Tempo & Timing

```javascript
// Standard intelligent DnB tempo
setcps(170/60)  // 170 BPM

// Slower, more atmospheric
setcps(165/60)  // 165 BPM

// Convert BPM to CPS
// cps = bpm / 60
```

## The Rolling Break Feel

The key to intelligent DnB's signature "rolling" feel:

1. **Ghost notes** - quiet snare hits between main hits
2. **Velocity variation** - use `perlin.range()` on gain
3. **Subtle swing** - use `.nudge()` for timing offsets
4. **Layered hats** - multiple hat patterns at different volumes

```javascript
// Example rolling break
stack(
  s("bd ~ ~ ~ [~ bd] ~ bd ~").gain(0.85),
  s("~ sd ~ ~ ~ sd ~ ~").gain(0.75),
  s("~ ~ sd:3? ~ ~ ~ ~ sd:3?").gain(0.2),  // Ghost snares
  s("hh*16").gain(perlin.range(0.2, 0.4))   // Variable velocity
)
```

## Jazz Chord Progressions

### Classic Intelligent DnB Progressions

```javascript
// LTJ Bukem style - minor movements
chord("<Cm9 Fm9 Bbm9 Ebmaj7>/4")

// Darker atmosphere
chord("<Abm9 Dbm9 Gbmaj7 Bmaj7>/4")

// II-V-I jazz movement
chord("<Dm9 G13 Cmaj9 Am9>/4")

// Melancholic
chord("<Am9 Em9 Fmaj9 Dm9>/4")
```

## Effects for Atmosphere

### Reverb Settings
```javascript
// Intimate room
.room(0.3).size(0.4)

// Large hall
.room(0.6).size(0.8)

// Massive wash (for transitions)
.room(0.9).size(0.95)
```

### Delay Settings
```javascript
// Dotted eighth (classic DnB delay)
.delay(0.4).delaytime(0.375).delayfeedback(0.35)

// Half note wash
.delay(0.5).delaytime(0.5).delayfeedback(0.4)

// Triplet feel
.delay(0.4).delaytime(0.428).delayfeedback(0.3)
```

### Filter Movement
```javascript
// Slow sweep (16 cycles)
.lpf(sine.range(500, 2000).slow(16))

// Faster movement (4 cycles)
.lpf(sine.range(400, 1500).slow(4))

// Random subtle movement
.lpf(perlin.range(800, 1500).slow(8))
```

## Live Performance Tips

1. **Start minimal** - kick and hats only
2. **Add bass first** - establishes the groove
3. **Layer chords gradually** - bring in Rhodes before strings
4. **Use filter sweeps** for builds
5. **Increase reverb/delay** for transitions
6. **Drop elements** for impact, then rebuild

## Sample Sources

### Built-in Strudel Sounds
- `gm_epiano1` - Rhodes piano
- `gm_strings` - String ensemble
- `gm_pad_warm` - Warm pad
- `gm_pad_choir` - Choir texture
- `gm_acoustic_bass` - Upright bass

### Loading External Samples
```javascript
samples('github:tidalcycles/dirt-samples')
// Then use: s("breaks125:1") etc.
```

## Common Patterns

### Kick Patterns
```javascript
// Basic 2-step
"bd ~ ~ ~ bd ~ ~ ~"

// With anticipation
"bd ~ ~ ~ [~ bd] ~ bd ~"

// Sparse atmospheric
"bd ~ ~ ~ ~ ~ bd ~"
```

### Hi-Hat Patterns
```javascript
// 16th notes
"hh*16"

// 8th notes with open hat
"hh hh oh hh hh hh oh hh"

// Shuffled
"hh*8" with .struct("x x x? x x x? x x")
```

## Resources

- [Strudel Documentation](https://strudel.cc/workshop/getting-started/)
- [TidalCycles Pattern Guide](https://tidalcycles.org/docs/)
- [Good Looking Records Discography](https://www.discogs.com/label/290-Good-Looking-Records)
