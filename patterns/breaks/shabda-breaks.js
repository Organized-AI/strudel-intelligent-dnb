// Shabda Break Samples - Dynamic Loading from Freesound.org
// Query any break samples on the fly
// @tempo 170 BPM
// @by Organized AI

setcps(170/60)

// === SHABDA SYNTAX ===
// samples('shabda:<name>:<count>')
// Queries freesound.org for samples matching the name

// Load 4 different amen breaks from freesound
samples('shabda:amen:4,jungle_break:4,dnb_break:4')

// Basic amen pattern
$: s("amen")
  .n("0 1 2 3")
  .fit()
  .chop(8)
  .gain(0.8)

// Jungle break sliced
$: s("jungle_break")
  .n("<0 1 2 3>")
  .fit()
  .slice(8, "0 0 6 3 0 2 6 7")
  .gain(0.75)

// DnB break with granular texture
$: s("dnb_break:0")
  .fit()
  .chop(16)
  .speed(perlin.range(0.9, 1.1))
  .gain(0.6)
  .room(0.3)

// === ALTERNATIVE QUERIES ===
// Try these for different break flavors:

// samples('shabda:breakbeat:4,drum_loop:4')
// samples('shabda:funky_drummer:2,think_break:2')
// samples('shabda:soul_break:4,funk_drums:4')
