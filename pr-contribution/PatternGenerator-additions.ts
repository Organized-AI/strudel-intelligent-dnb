// ============================================================================
// PR: Add intelligent_dnb genre to strudel-mcp-server
// 
// File: src/services/PatternGenerator.ts
// 
// This file contains all the code additions needed to add intelligent_dnb
// as a new genre option in the PatternGenerator service.
// ============================================================================

// ============================================================================
// STEP 1: Add to generateCompletePattern() switch statement
// Location: Inside the switch(style) block in generateCompletePattern()
// ============================================================================

case 'intelligent_dnb':
case 'liquid_dnb':
case 'atmospheric_dnb':
case 'intelligent':
case 'liquid':
case 'atmospheric':
case 'bukem':
  return this.generateIntelligentDnB(key, tempo || 170);

// ============================================================================
// STEP 2: Add to generateDrumPattern() switch statement
// Location: Inside the switch(style) block in generateDrumPattern()
// ============================================================================

case 'intelligent_dnb':
case 'liquid_dnb':
case 'atmospheric_dnb':
  if (complexity < 0.3) {
    // Minimal - sparse break
    return `s("breaks165")
    .fit()
    .slice(8, "0 ~ ~ 3 ~ ~ 6 ~")
    .gain(0.5)
    .room(0.3)
    .lpf(5000)`;
  } else if (complexity < 0.7) {
    // Medium - classic rolling break
    return `s("breaks165")
    .fit()
    .slice(8, "0 0 6 3 0 2 6 7")
    .gain(0.7)
    .room(0.2)`;
  } else {
    // Complex - layered breaks with ghost notes
    return `stack(
    s("breaks165")
      .fit()
      .slice(8, "0 0 6 3 0 2 6 7")
      .gain(0.65)
      .room(0.2),
    s("breaks165")
      .fit()
      .chop(16)
      .gain(0.12)
      .hpf(3000)
      .room(0.4)
      .pan(perlin.range(0.3, 0.7)),
    s("bd ~ ~ ~ [~ bd] ~ bd ~")
      .bank("RolandTR909")
      .gain(0.45)
      .lpf(100)
  )`;
  }

// ============================================================================
// STEP 3: Add to generateBassline() switch statement
// Location: Inside the switch(style) block in generateBassline()
// ============================================================================

case 'intelligent_dnb':
case 'liquid_dnb':
case 'atmospheric_dnb':
case 'intelligent':
  // Deep sine sub bass - signature intelligent DnB sound
  return `note("<${key}1 ~ ${key}1 ~> <${this.getFourth(key)}1 ~ ~ ${this.getFourth(key)}1>")
    .s("sine")
    .gain(0.65)
    .lpf(80)
    .attack(0.01)
    .decay(0.2)
    .sustain(0.5)
    .release(0.4)`;

// ============================================================================
// STEP 4: Add new method - generateIntelligentDnB()
// Location: Add as a new private method in the PatternGenerator class
// ============================================================================

/**
 * Generate a complete intelligent drum & bass pattern
 * Style inspired by LTJ Bukem, Good Looking Records, early 90s atmospheric DnB
 * 
 * Characteristics:
 * - Rolling breakbeats (amen, breaks165, breaks125)
 * - Deep sine wave sub bass (80Hz LPF)
 * - Jazz-influenced chord progressions (minor 9ths, 7ths)
 * - Ethereal pads and string washes
 * - Heavy reverb and delay
 * 
 * @param key - Musical key (e.g., 'C', 'F#', 'Bb')
 * @param tempo - BPM (typically 160-175, default 170)
 */
private generateIntelligentDnB(key: string, tempo: number): string {
  const safeKey = key.toLowerCase();
  const fourth = this.getInterval(safeKey, 5);
  const seventh = this.getInterval(safeKey, 10);
  const third = this.getInterval(safeKey, 3);
  
  return `// Intelligent DnB in ${key} at ${tempo} BPM
// Style: LTJ Bukem / Good Looking Records
setcps(${tempo}/60)
samples('github:tidalcycles/dirt-samples')

let chords = chord("<${safeKey}m9 ${fourth}m9 ${seventh}m9 ${third}maj7>/4").dict('ireal')

stack(
  // === DRUMS - Rolling break with ghost notes ===
  
  // Main chopped break - classic jungle edit
  s("breaks165")
    .fit()
    .slice(8, "0 0 6 3 0 2 6 7")
    .gain(0.7)
    .room(0.2),

  // Ghost break layer for rolling texture
  s("breaks165")
    .fit()
    .chop(16)
    .gain(0.12)
    .hpf(3000)
    .room(0.4)
    .pan(perlin.range(0.3, 0.7)),

  // Kick reinforcement
  s("bd ~ ~ ~ [~ bd] ~ bd ~")
    .bank("RolandTR909")
    .gain(0.45)
    .lpf(100),

  // Open hat accents
  s("~ ~ ~ oh ~ ~ oh ~")
    .bank("RolandTR909")
    .gain(0.28)
    .cut(1)
    .room(0.35),

  // === BASS - Deep sine sub ===
  
  note("<${safeKey}1 ~ ${safeKey}1 ~> <${fourth}1 ~ ~ ${fourth}1> <${seventh}0 ~ ${seventh}0 ~> <${third}1 ~ ~ ~>")
    .s("sine")
    .gain(0.65)
    .lpf(80)
    .attack(0.01)
    .decay(0.2)
    .sustain(0.5)
    .release(0.4),

  // === CHORDS - Jazz voicings ===
  
  // Rhodes electric piano
  chords.voicing()
    .s("gm_epiano1")
    .gain(0.3)
    .room(0.5)
    .delay(0.3)
    .delaytime(0.375)
    .delayfeedback(0.32)
    .lpf(4500),

  // === ATMOSPHERE - Ethereal strings ===
  
  chords.voicing()
    .s("gm_strings")
    .attack(2)
    .sustain(0.7)
    .release(3)
    .gain(0.18)
    .room(0.7)
    .size(0.85)
    .lpf(3000)
    .hpf(300)
)`;
}

/**
 * Generate minimal/sparse intelligent DnB
 * For breakdowns and atmospheric sections
 */
private generateIntelligentDnBMinimal(key: string, tempo: number): string {
  const safeKey = key.toLowerCase();
  const fourth = this.getInterval(safeKey, 5);
  const seventh = this.getInterval(safeKey, 10);
  const third = this.getInterval(safeKey, 3);
  
  return `// Minimal Intelligent DnB in ${key} at ${tempo} BPM
setcps(${tempo}/60)
samples('github:tidalcycles/dirt-samples')

let chords = chord("<${safeKey}m9 ${fourth}m9 ${seventh}m9 ${third}maj7>/4").dict('ireal')

stack(
  // Sparse break
  s("breaks165")
    .fit()
    .slice(8, "0 ~ ~ 3 ~ ~ 6 ~")
    .gain(0.5)
    .room(0.35)
    .lpf(5000),

  // Minimal kick
  s("bd ~ ~ ~ ~ ~ bd ~")
    .bank("RolandTR909")
    .gain(0.5)
    .lpf(90),

  // Soft snare
  s("~ ~ ~ sd ~ ~ ~ ~")
    .bank("RolandTR909")
    .gain(0.5)
    .room(0.4),

  // Sub bass - sparse
  note("<${safeKey}1 ~ ~ ~> <~ ${fourth}1 ~ ~> <${seventh}0 ~ ~ ~> <~ ~ ${third}1 ~>")
    .s("sine")
    .gain(0.6)
    .lpf(75),

  // Pad layer - main focus
  chords.voicing()
    .s("sawtooth")
    .attack(2.5)
    .release(4)
    .lpf(sine.range(500, 1500).slow(16))
    .gain(0.18)
    .room(0.8)
    .delay(0.5)
    .delayfeedback(0.4)
)`;
}

// ============================================================================
// STEP 5: Add helper methods (if not already present)
// Location: Add as private methods in the PatternGenerator class
// ============================================================================

/**
 * Get a note at a specific interval from the root
 * @param root - Root note (e.g., 'c', 'f#')
 * @param semitones - Number of semitones up from root
 */
private getInterval(root: string, semitones: number): string {
  const notes = ['c', 'db', 'd', 'eb', 'e', 'f', 'gb', 'g', 'ab', 'a', 'bb', 'b'];
  const normalizedRoot = root.toLowerCase().replace('#', 'b');
  
  // Handle sharps -> flats conversion
  const sharpToFlat: Record<string, string> = {
    'c#': 'db', 'd#': 'eb', 'f#': 'gb', 'g#': 'ab', 'a#': 'bb'
  };
  const searchRoot = sharpToFlat[normalizedRoot] || normalizedRoot;
  
  const idx = notes.indexOf(searchRoot);
  if (idx === -1) return root; // Fallback
  
  return notes[(idx + semitones) % 12];
}

/**
 * Get the fourth degree of a key (5 semitones up)
 */
private getFourth(root: string): string {
  return this.getInterval(root, 5);
}

/**
 * Get the minor seventh degree (10 semitones up)
 */
private getSeventh(root: string): string {
  return this.getInterval(root, 10);
}

/**
 * Get the minor third degree (3 semitones up)
 */
private getThird(root: string): string {
  return this.getInterval(root, 3);
}

/**
 * Get the fifth degree (7 semitones up)
 */
private getFifth(root: string): string {
  return this.getInterval(root, 7);
}

// ============================================================================
// STEP 6: Update genre list constant (if exists)
// Location: Top of file or in constants
// ============================================================================

const SUPPORTED_GENRES = [
  'techno',
  'house', 
  'dnb',
  'ambient',
  'trap',
  'jungle',
  'jazz',
  'intelligent_dnb',  // NEW
  'liquid_dnb',       // NEW (alias)
  'atmospheric_dnb',  // NEW (alias)
] as const;

// ============================================================================
// STEP 7: Update types (if using TypeScript strict typing)
// Location: src/types/index.ts or inline
// ============================================================================

type Genre = 
  | 'techno' 
  | 'house' 
  | 'dnb' 
  | 'ambient' 
  | 'trap' 
  | 'jungle' 
  | 'jazz'
  | 'intelligent_dnb'
  | 'liquid_dnb'
  | 'atmospheric_dnb'
  | 'intelligent'
  | 'liquid'
  | 'atmospheric'
  | 'bukem';
