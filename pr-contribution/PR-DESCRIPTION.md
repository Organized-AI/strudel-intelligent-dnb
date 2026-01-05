# PR: Add intelligent_dnb genre preset

## Summary

Adds **intelligent_dnb** as a new genre option to the PatternGenerator service, along with aliases for related styles (liquid_dnb, atmospheric_dnb, bukem).

This genre is inspired by the early 1990s atmospheric drum & bass sound pioneered by LTJ Bukem and Good Looking Records, characterized by rolling breakbeats, deep sub bass, jazz-influenced harmonies, and ethereal pads.

## Changes

### `src/services/PatternGenerator.ts`

1. **New switch cases** in `generateCompletePattern()`:
   - `intelligent_dnb`
   - `liquid_dnb` (alias)
   - `atmospheric_dnb` (alias)
   - `intelligent`, `liquid`, `atmospheric`, `bukem` (short aliases)

2. **New switch cases** in `generateDrumPattern()`:
   - Three complexity levels: minimal, rolling, layered

3. **New switch cases** in `generateBassline()`:
   - Deep sine sub bass with 80Hz LPF

4. **New methods**:
   - `generateIntelligentDnB(key, tempo)` - Full pattern generation
   - `generateIntelligentDnBMinimal(key, tempo)` - Breakdown/sparse version
   - `getInterval(root, semitones)` - Helper for chord calculations
   - `getFourth()`, `getSeventh()`, `getThird()`, `getFifth()` - Interval helpers

### `tests/intelligent-dnb.test.ts`

- Comprehensive test suite for the new genre
- Tests all aliases
- Tests drum complexity levels
- Tests interval calculations
- Validates Strudel syntax output

### `patterns/examples/`

- `intelligent-dnb-example.js` - Full intelligent DnB pattern
- `intelligent-dnb-minimal.js` - Atmospheric breakdown pattern

### `README.md`

- Added intelligent_dnb to the genre list
- Added example usage

## Musical Characteristics

| Element | Implementation |
|---------|----------------|
| **Tempo** | 160-175 BPM (default 170) |
| **Breaks** | breaks165, breaks125, amen with `.fit().slice()` |
| **Bass** | Sine wave sub, 80Hz LPF, proper ADSR envelope |
| **Chords** | Jazz voicings - minor 9ths, 7ths, maj7 |
| **Atmosphere** | GM strings, Rhodes, heavy reverb/delay |
| **Effects** | Room 0.5-0.8, delay with dotted eighth (0.375s) |

## Sample Sources

Uses `samples('github:tidalcycles/dirt-samples')` which includes:
- `breaks165` - Classic funk breaks at 165 BPM
- `breaks125` - Funk breaks at 125 BPM  
- `amen` - The Amen break

## Usage Examples

```javascript
// Full intelligent DnB track
generateCompletePattern('intelligent_dnb', 'C', 170)

// Using aliases
generateCompletePattern('liquid_dnb', 'F', 174)
generateCompletePattern('bukem', 'Am', 168)

// Just drums
generateDrumPattern('intelligent_dnb', 0.7) // Rolling breaks

// Just bass
generateBassline('intelligent_dnb', 'C')
```

## Testing

All tests pass:
```bash
npm test -- tests/intelligent-dnb.test.ts
```

## Related

- Pattern library source: https://github.com/Organized-AI/strudel-intelligent-dnb
- LTJ Bukem / Good Looking Records style guide
- TidalCycles dirt-samples documentation

## Checklist

- [x] Code follows existing patterns in PatternGenerator.ts
- [x] All aliases work correctly
- [x] Three drum complexity levels implemented
- [x] Tests written and passing
- [x] Example patterns included
- [x] README updated
- [x] Uses real samples from dirt-samples
- [x] Tested in strudel.cc
