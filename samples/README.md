# Local Samples Folder

This folder is for your own `.wav` samples.

## Recommended Structure

```
samples/
├── breaks/
│   ├── amen_clean.wav
│   ├── amen_dirty.wav
│   ├── think_break.wav
│   └── apache.wav
├── bass/
│   ├── sub_c1.wav
│   ├── sub_f1.wav
│   └── reese.wav
├── pads/
│   ├── warm_pad.wav
│   └── strings.wav
├── rhodes/
│   └── chord_stab.wav
└── fx/
    ├── riser.wav
    └── impact.wav
```

## How to Use

### Option 1: Import via REPL UI

1. Open https://strudel.cc
2. Click **sounds** tab (right panel)
3. Click **import-sounds** tab
4. Click **"Import sounds folder"**
5. Select this `samples` folder

Then use in your patterns:

```javascript
s("breaks:0 breaks:1")  // First two files in breaks/
s("bass:0").note("c1")
s("pads rhodes fx")
```

### Option 2: Use @strudel/sampler

```bash
cd samples
npx @strudel/sampler
```

Then in Strudel:

```javascript
samples('http://localhost:5432/')
s("breaks bass pads")
```

## Sample Format Requirements

- **Format**: WAV, MP3, or OGG
- **Bit depth**: 16-bit or 24-bit
- **Sample rate**: 44.1kHz or 48kHz
- **Naming**: Alphabetical order determines `n` index

## Finding Quality Samples

### Free Sources
- [Freesound.org](https://freesound.org) - Use via Shabda in Strudel
- [Rhythm Lab](https://rhythm-lab.com) - Ultimate Amen Breaks Pack
- [Looperman](https://looperman.com) - User-uploaded breaks
- [SampleFocus](https://samplefocus.com) - Community samples

### Commercial (Recommended)
- Loopmasters - Professional DnB packs
- Sample Magic - Vintage breaks
- KAN Samples - DnB-focused

## Note

This folder is in `.gitignore` to avoid uploading large audio files.
For sharing patterns, use the GitHub or Shabda sample loading methods.
