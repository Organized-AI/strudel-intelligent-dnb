// ============================================================================
// Tests for intelligent_dnb genre
// File: tests/intelligent-dnb.test.ts
// ============================================================================

import { PatternGenerator } from '../src/services/PatternGenerator';

describe('Intelligent DnB Genre', () => {
  let generator: PatternGenerator;

  beforeEach(() => {
    generator = new PatternGenerator();
  });

  describe('generateCompletePattern', () => {
    it('should generate intelligent_dnb pattern', () => {
      const pattern = generator.generateCompletePattern('intelligent_dnb', 'C', 170);
      
      expect(pattern).toContain('setcps(170/60)');
      expect(pattern).toContain("samples('github:tidalcycles/dirt-samples')");
      expect(pattern).toContain('breaks165');
      expect(pattern).toContain('cm9');
      expect(pattern).toContain('gm_epiano1');
      expect(pattern).toContain('gm_strings');
    });

    it('should accept liquid_dnb as alias', () => {
      const pattern = generator.generateCompletePattern('liquid_dnb', 'F', 174);
      
      expect(pattern).toContain('setcps(174/60)');
      expect(pattern).toContain('fm9');
    });

    it('should accept atmospheric_dnb as alias', () => {
      const pattern = generator.generateCompletePattern('atmospheric_dnb', 'G', 168);
      
      expect(pattern).toContain('setcps(168/60)');
      expect(pattern).toContain('gm9');
    });

    it('should accept bukem as alias', () => {
      const pattern = generator.generateCompletePattern('bukem', 'A', 172);
      
      expect(pattern).toContain('setcps(172/60)');
      expect(pattern).toContain('am9');
    });

    it('should default to 170 BPM if no tempo provided', () => {
      const pattern = generator.generateCompletePattern('intelligent_dnb', 'C');
      
      expect(pattern).toContain('setcps(170/60)');
    });

    it('should handle different keys correctly', () => {
      const keys = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'Bb', 'Eb', 'Ab'];
      
      keys.forEach(key => {
        const pattern = generator.generateCompletePattern('intelligent_dnb', key, 170);
        expect(pattern).toContain(`${key.toLowerCase()}m9`);
      });
    });
  });

  describe('generateDrumPattern', () => {
    it('should generate minimal drums at low complexity', () => {
      const pattern = generator.generateDrumPattern('intelligent_dnb', 0.2);
      
      expect(pattern).toContain('breaks165');
      expect(pattern).toContain('0 ~ ~ 3 ~ ~ 6 ~');
      expect(pattern).toContain('lpf(5000)');
    });

    it('should generate rolling drums at medium complexity', () => {
      const pattern = generator.generateDrumPattern('intelligent_dnb', 0.5);
      
      expect(pattern).toContain('breaks165');
      expect(pattern).toContain('0 0 6 3 0 2 6 7');
    });

    it('should generate layered drums at high complexity', () => {
      const pattern = generator.generateDrumPattern('intelligent_dnb', 0.9);
      
      expect(pattern).toContain('stack(');
      expect(pattern).toContain('chop(16)');
      expect(pattern).toContain('RolandTR909');
    });
  });

  describe('generateBassline', () => {
    it('should generate sine sub bass', () => {
      const pattern = generator.generateBassline('intelligent_dnb', 'C');
      
      expect(pattern).toContain('sine');
      expect(pattern).toContain('lpf(80)');
      expect(pattern).toContain('c1');
    });

    it('should include proper ADSR envelope', () => {
      const pattern = generator.generateBassline('intelligent_dnb', 'C');
      
      expect(pattern).toContain('attack');
      expect(pattern).toContain('decay');
      expect(pattern).toContain('sustain');
      expect(pattern).toContain('release');
    });
  });

  describe('interval helpers', () => {
    it('should calculate fourth correctly', () => {
      expect(generator['getFourth']('c')).toBe('f');
      expect(generator['getFourth']('g')).toBe('c');
      expect(generator['getFourth']('d')).toBe('g');
    });

    it('should calculate seventh correctly', () => {
      expect(generator['getSeventh']('c')).toBe('bb');
      expect(generator['getSeventh']('a')).toBe('g');
    });

    it('should calculate third correctly', () => {
      expect(generator['getThird']('c')).toBe('eb');
      expect(generator['getThird']('a')).toBe('c');
    });
  });
});

describe('Intelligent DnB Pattern Validation', () => {
  let generator: PatternGenerator;

  beforeEach(() => {
    generator = new PatternGenerator();
  });

  it('should produce valid Strudel syntax', () => {
    const pattern = generator.generateCompletePattern('intelligent_dnb', 'C', 170);
    
    // Check for balanced parentheses
    const openParens = (pattern.match(/\(/g) || []).length;
    const closeParens = (pattern.match(/\)/g) || []).length;
    expect(openParens).toBe(closeParens);
    
    // Check for balanced brackets
    const openBrackets = (pattern.match(/\[/g) || []).length;
    const closeBrackets = (pattern.match(/\]/g) || []).length;
    expect(openBrackets).toBe(closeBrackets);
    
    // Check for balanced quotes
    const quotes = (pattern.match(/"/g) || []).length;
    expect(quotes % 2).toBe(0);
  });

  it('should include all required components', () => {
    const pattern = generator.generateCompletePattern('intelligent_dnb', 'C', 170);
    
    // Must have drums
    expect(pattern).toMatch(/breaks\d+|amen|s\("bd/);
    
    // Must have bass
    expect(pattern).toMatch(/note\([^)]*1/);
    
    // Must have chords
    expect(pattern).toMatch(/chord|voicing/);
    
    // Must have effects
    expect(pattern).toMatch(/room|delay|reverb/);
  });
});
