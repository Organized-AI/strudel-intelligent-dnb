# 🎵 Strudel Intelligent DnB

Live coding intelligent drum and bass patterns with [Strudel.cc](https://strudel.cc) — atmospheric, jazz-infused breakbeats in the style of Good Looking Records.

## What is Intelligent DnB?

Intelligent drum & bass (also called atmospheric DnB or liquid) emerged in the mid-1990s, pioneered by **LTJ Bukem** and his **Good Looking Records** label. Unlike harder, more aggressive strains of jungle/DnB, intelligent DnB focuses on:

- **Rolling breakbeats** with a "slow-motion" feel despite 160-175 BPM tempo
- **Deep, warm sub-bass** (not aggressive Reese bass)
- **Jazz-influenced harmonies** — minor 9ths, 7ths, Rhodes chords
- **Ethereal pads and strings** creating atmospheric textures
- **Soul and jazz samples** from artists like Lonnie Liston Smith and Roy Ayers

### Key Artists & Releases
- **LTJ Bukem** — "Logical Progression" (1996), "Journey Inwards" (2000)
- **Photek** — "Modus Operandi"
- **Blu Mar Ten** — "From the Vaults"
- **Seba** — "Return to Forever"
- **PFM** — "One & Only"

## Quick Start

1. Open [Strudel REPL](https://strudel.cc)
2. Copy any pattern from `patterns/` folder
3. Press `Ctrl+Enter` to play
4. Modify in real-time!

## Loading Samples

Most break patterns use the **dirt-samples** library for classic breaks:

```javascript
// Add this at the top of any pattern
samples('github:tidalcycles/dirt-samples')

// Now you have access to:
s("breaks165")  // Classic jungle break
s("breaks125")  // Slower funk break  
s("amen")       // The legendary amen

// Slice and chop them
s("breaks165").fit().slice(8, "0 0 6 3 0 2 6 7")
```

### Alternative: Shabda (Freesound.org)

```javascript
// Query any samples dynamically
samples('shabda:amen:4,jungle_break:4')
s("amen:0 jungle_break:1")
```

See [docs/sample-sources.md](docs/sample-sources.md) for the full sample loading guide.

## Pattern Library Structure

```
patterns/
├── breaks/          # Breakbeat patterns (jungle chops, timestretched)
├── bass/            # Deep sub-bass and reese patterns  
├── pads/            # Atmospheric pads and textures
├── chords/          # Jazz chord progressions
├── visuals/         # Hydra visual integration
└── full-tracks/     # Complete intelligent DnB tracks
```

## Core Techniques

### Tempo & Timing
```javascript
// Intelligent DnB runs at 170 BPM (2.83 cycles per second)
setcps(170/60)
```

### The Rolling Break Feel
```javascript
samples('github:tidalcycles/dirt-samples')

// Slice the break and rearrange
s("breaks165")
  .fit()
  .slice(8, "0 0 6 3 0 2 6 7")  // Classic jungle edit
  .gain(0.8)
  .room(0.2)
```

### Jazz Chord Voicings
```javascript
// Minor 9th progressions are signature intelligent DnB
chord("<Am9 Dm9 Gm9 Cm9>/2")
  .dict('ireal')
  .voicing()
  .s("gm_epiano1")
```

### Hydra Visuals
```javascript
await initHydra()

// Audio-reactive visuals
noise(3, 0.1)
  .color(0.1, 0.3, 0.6)
  .scale(() => 1 + a.fft[0] * 0.3)  // Pulse with bass
  .out()
```

## Usage

Each `.js` file contains standalone Strudel patterns. Copy/paste into the REPL.

### Running Locally
- Use the [Strudel Desktop App](https://github.com/tidalcycles/strudel/releases) for local samples
- Or use `@strudel/sampler` to serve your own sample folder

## Documentation

- [Sample Sources Guide](docs/sample-sources.md)
- [Production Tips](docs/production-tips.md)
- [Hydra Integration](docs/hydra-integration.md)

## Resources

- [Strudel Documentation](https://strudel.cc/workshop/getting-started/)
- [Strudel Pattern Reference](https://strudel.cc/reference/)
- [TidalCycles (original)](https://tidalcycles.org/)

## License

MIT — Feel free to use these patterns in your own productions and performances.

---

*"The lingering, lightly delayed Rhodes chords, the streamlined drums, the soaring strings..."*  
— The Vinyl Factory on LTJ Bukem's sound
