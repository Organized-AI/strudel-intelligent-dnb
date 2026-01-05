# Sample Sources Guide

This guide covers all the ways to load samples into Strudel for intelligent DnB production.

## Quick Reference

| Method | Best For | Setup Required |
|--------|----------|----------------|
| Built-in samples | Quick start, drums | None |
| Dirt Samples (GitHub) | Classic breaks | One line of code |
| Shabda (Freesound) | Dynamic discovery | One line of code |
| Local folder | Your own samples | Import in REPL |
| @strudel/sampler | Large collections | Node.js + terminal |

---

## 1. Built-in Samples (No Setup)

Strudel comes with drum machine samples and instruments by default.

```javascript
// TR-909 kit
s("bd sd hh oh").bank("RolandTR909")

// TR-808 kit
s("bd sd hh cp").bank("RolandTR808")

// Pre-sliced amen (8 slices)
s("amencutup").n("0 1 2 3 4 5 6 7")

// General MIDI instruments
note("c4 e4 g4").s("gm_epiano1")
note("c3 g3").s("gm_acoustic_bass")
chord("Cm9").s("gm_strings")
```

### Available Drum Sounds
| Sound | Code |
|-------|------|
| Kick | `bd` |
| Snare | `sd` |
| Hi-hat closed | `hh` |
| Hi-hat open | `oh` |
| Clap | `cp` |
| Rimshot | `rim` |
| Crash | `cr` |
| Ride | `rd` |
| Toms | `ht`, `mt`, `lt` |

---

## 2. Dirt Samples (GitHub)

The classic TidalCycles sample library with **breaks, bass, pads, and more**.

```javascript
// Load the library (do this once at the top)
samples('github:tidalcycles/dirt-samples')

// Now you have access to:
s("breaks165")  // 165 BPM break
s("breaks125")  // 125 BPM break
s("amen")       // The amen break
s("bass")       // Bass samples
s("pad")        // Pad sounds
```

### Classic Breaks Available

```javascript
samples('github:tidalcycles/dirt-samples')

// breaks165 - jungle staple
s("breaks165").fit().slice(8, "0 1 2 3 4 5 6 7")

// breaks125 - slower, funkier
s("breaks125").fit().slice(8, "0 3 0 7 0 3 6 7")

// amen - the legendary break
s("amen").fit().slice(8, "0 0 6 3 0 2 6 7")
```

### Slicing Breaks

```javascript
// .fit() makes sample fit the cycle
// .slice(numSlices, pattern) chops and rearranges

s("breaks165")
  .fit()
  .slice(8, "0 1 <2 2*2> 3 [4 0] 5 6 7")
  .gain(0.8)
```

---

## 3. Shabda (Freesound.org)

Query **any samples** from freesound.org dynamically.

```javascript
// Syntax: samples('shabda:<query>:<count>')
samples('shabda:amen:4,jungle_break:4,dnb_drums:4')

// Use them like normal
s("amen:0 amen:1").fit()
s("jungle_break").n("0 1 2 3")
```

### Useful Queries for Intelligent DnB

```javascript
// Breaks
samples('shabda:amen_break:4,breakbeat:4,drum_break:4')

// Atmospheric
samples('shabda:ambient_pad:4,ethereal:4,atmosphere:4')

// Bass
samples('shabda:sub_bass:4,deep_bass:4,reese_bass:2')

// Jazz elements
samples('shabda:rhodes:4,jazz_piano:4,double_bass:4')

// Strings
samples('shabda:strings:4,orchestra:4,violin:4')
```

### Speech Synthesis

```javascript
// Generate speech samples
samples('shabda/speech:hello_world,drop_the_bass')
samples('shabda/speech/en-US/m:lets_go')  // Male voice

s("hello_world drop_the_bass").slow(2)
```

---

## 4. Local Samples (Import Folder)

Load your own `.wav` files from disk.

### Using the REPL UI

1. Open https://strudel.cc
2. Click the **sounds** tab (right panel)
3. Click **import-sounds** tab
4. Click **"Import sounds folder"**
5. Select your folder containing `.wav` files

### Folder Structure

```
my-samples/
├── breaks/
│   ├── amen_clean.wav
│   ├── amen_dirty.wav
│   └── think_break.wav
├── bass/
│   ├── sub_c.wav
│   └── reese_f.wav
└── pads/
    ├── warm_pad.wav
    └── strings.wav
```

After importing, use them like:

```javascript
s("breaks:0 breaks:1")  // Plays amen_clean, amen_dirty
s("bass:0").note("c1")
s("pads:1")
```

---

## 5. @strudel/sampler (Advanced)

Serve samples from a local Node.js server. Best for large collections.

### Setup

```bash
# Navigate to your samples folder
cd ~/my-samples

# Start the server
npx @strudel/sampler
```

### Usage in Strudel

```javascript
samples('http://localhost:5432/')

// Now use your folder names as sample names
s("breaks bass pads")
```

### Auto-generated strudel.json

The sampler auto-generates a `strudel.json` mapping. View it at:
```
http://localhost:5432/strudel.json
```

---

## 6. Custom strudel.json (GitHub Hosting)

Host your own sample pack on GitHub.

### Create strudel.json

```json
{
  "_base": "https://raw.githubusercontent.com/yourusername/yourrepo/main/samples/",
  "amen": ["breaks/amen_1.wav", "breaks/amen_2.wav"],
  "bass": "bass/sub_bass.wav",
  "pad": ["pads/warm.wav", "pads/strings.wav"]
}
```

### Load in Strudel

```javascript
samples('github:yourusername/yourrepo')
s("amen bass pad")
```

---

## Recommended Sample Sources

### Free Downloads

| Source | Content | URL |
|--------|---------|-----|
| Rhythm Lab | Amen variations (1.13GB) | rhythm-lab.com |
| KAN Samples | DnB breaks | kansamples.com |
| Looperman | User-uploaded loops | looperman.com |
| Freesound | Everything (via Shabda) | freesound.org |

### Commercial (High Quality)

| Source | Content |
|--------|---------|
| Loopmasters | Professional DnB packs |
| Sample Magic | Vintage breaks |
| Ghost Syndicate | Amen collections |

---

## Quick Setup for This Project

Copy this to the top of any pattern file:

```javascript
// Load essential samples
samples('github:tidalcycles/dirt-samples')
samples('shabda:amen:4,jungle_break:4,atmosphere:4')

setcps(170/60)

// Now you're ready to go!
```

---

## Troubleshooting

### Samples not playing?
- First play might be silent (lazy loading) - try again
- Check browser console for errors
- Ensure URLs are correct and accessible

### Wrong tempo?
- Use `.fit()` to stretch sample to cycle length
- Use `.loopAt(n)` to fit sample to n cycles
- Use `.speed()` to manually adjust

### Samples cutting off?
- Add `.clip(1)` or higher to extend duration
- Use `.release(0.5)` for fade out
- Check `.cut()` groups aren't conflicting
