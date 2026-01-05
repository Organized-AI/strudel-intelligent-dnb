// Rolling Amen Break Pattern
// The foundation of intelligent DnB - chopped amen with swing
// @tempo 170 BPM

setcps(170/60)

// Classic rolling amen with ghost notes
stack(
  // Main break - chopped amen with velocity variation
  s("amencutup*8")
    .n("0 1 2 3 4 5 6 7".add("<0 2 4 0>"))
    .gain("1 0.7 0.9 0.7 1 0.7 0.85 0.7")
    .speed(1)
    .room(0.2)
    .size(0.3),
  
  // Ghost snare layer for that rolling feel
  s("~ sd:3 ~ [~ sd:3] ~ sd:3 ~ sd:3")
    .gain(0.3)
    .pan(sine.range(0.3, 0.7))
    .room(0.4),
  
  // Sub-kick reinforcement on the one
  s("bd ~ ~ ~ bd ~ ~ ~")
    .gain(0.8)
    .lpf(80)
)
