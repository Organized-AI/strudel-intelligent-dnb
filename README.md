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

## Pattern Library Structure

```
patterns/
├── breaks/          # Breakbeat patterns and amen chops
├── bass/            # Deep sub-bass and reese patterns  
├── pads/            # Atmospheric pads and textures
├── chords/          # Jazz chord progressions
└── full-tracks/     # Complete intelligent DnB tracks
```

## Core Techniques

### Tempo & Timing
```javascript
// Intelligent DnB runs at 170 BPM (2.83 cycles per second)
setcps(170/60)
```

### The Rolling Break Feel
The secret to intelligent DnB's "rolling" feel is:
- Ghost notes on snares
- Shuffled hi-hats
- Subtle swing timing
- Layered break variations

### Jazz Chord Voicings
```javascript
// Minor 9th progressions are signature intelligent DnB
chord("<Am9 Dm9 Gm9 Cm9>/2").voicing()
```

## Usage

Each `.js` file contains standalone Strudel patterns. Copy/paste into the REPL or import as modules.

### Running Locally
You can also use the [Strudel Desktop App](https://github.com/tidalcycles/strudel/releases) to run these patterns with local samples.

## Resources

- [Strudel Documentation](https://strudel.cc/workshop/getting-started/)
- [Strudel Pattern Reference](https://strudel.cc/reference/)
- [TidalCycles (original)](https://tidalcycles.org/)

## License

MIT — Feel free to use these patterns in your own productions and performances.

---

*"The lingering, lightly delayed Rhodes chords, the streamlined drums, the soaring strings..."*  
— The Vinyl Factory on LTJ Bukem's sound
