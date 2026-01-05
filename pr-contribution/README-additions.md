# README.md Additions

## Add to Genre Table

Add this row to the existing genre table in the README:

| Genre | Tempo | Description |
|-------|-------|-------------|
| `intelligent_dnb` | 160-175 | Atmospheric DnB, LTJ Bukem style, jazz-influenced |

## Add Aliases Note

Add after the genre table:

> **Aliases**: `intelligent_dnb` also accepts: `liquid_dnb`, `atmospheric_dnb`, `intelligent`, `liquid`, `atmospheric`, `bukem`

## Add Example Pattern

Add to the "Example Patterns" section:

### Intelligent DnB (Verified Working)

```javascript
setcps(170/60)
samples('github:tidalcycles/dirt-samples')

let chords = chord("<Cm9 Fm9 Bbm9 Ebmaj7>/4").dict('ireal')

stack(
  s("breaks165")
    .fit()
    .slice(8, "0 0 6 3 0 2 6 7")
    .gain(0.7)
    .room(0.2),
  note("<c1 ~ c1 ~> <f1 ~ ~ f1>")
    .s("sine")
    .gain(0.65)
    .lpf(80),
  chords.voicing()
    .s("gm_epiano1")
    .gain(0.3)
    .room(0.5)
    .delay(0.3)
    .delaytime(0.375),
  chords.voicing()
    .s("gm_strings")
    .attack(2)
    .release(3)
    .gain(0.2)
    .room(0.7)
)
```

## Add Usage Example

Add to the "Usage Examples" section:

**Intelligent DnB Track**

```
You: Create an intelligent DnB track at 170 BPM in C minor

Claude: [Creates atmospheric DnB with rolling breaks and jazz chords]

// intelligent_dnb pattern in C at 170 BPM
setcps(170/60)
samples('github:tidalcycles/dirt-samples')

stack(
  // Rolling break
  s("breaks165").fit().slice(8, "0 0 6 3 0 2 6 7").gain(0.7),
  
  // Sub bass
  note("<c1 ~ c1 ~>").s("sine").lpf(80).gain(0.65),
  
  // Rhodes
  chord("<Cm9 Fm9>/4").dict('ireal').voicing().s("gm_epiano1").gain(0.3),
  
  // Strings
  chord("<Cm9 Fm9>/4").dict('ireal').voicing().s("gm_strings").attack(2).gain(0.2)
)
```

## Add to patterns/examples/README.md

Add this entry:

### Intelligent DnB

* **intelligent-dnb-example.js** - Full atmospheric DnB track with rolling breaks, sub bass, Rhodes, and strings (170 BPM, C minor)
* **intelligent-dnb-minimal.js** - Sparse breakdown pattern for atmospheric sections (168 BPM, A minor)
