// src/mockup-keyfinder.js

const NOTES  = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B']
const COLORS = ['#F24039','#FA6B26','#FAB826','#F2E12E','#8CE640','#33D966','#26D1B8','#1DBFEB','#3C83FF','#7059F2','#B852EB','#EB4DA6']
// C Major: in-scale indices
const IN_SCALE = [true,false,true,false,true,true,false,true,false,true,false,true]
// Chromagram heights for C Major (C,E,G dominant)
const HEIGHTS  = [88,5,32,8,72,38,6,80,10,28,6,18]
// Animation durations (staggered)
const ANIM_DUR = [1.8,2.3,2.0,2.5,1.6,2.1,2.4,1.7,2.2,1.9,2.6,1.5]

export function keyFinderMockupHTML() {

  // Scale chips
  const chips = NOTES.map((n, i) => {
    const isRoot = i === 0
    const inScale = IN_SCALE[i]
    const bg = isRoot
      ? COLORS[i]
      : inScale
        ? `${COLORS[i]}2e`
        : 'rgba(255,255,255,0.04)'
    const border = isRoot
      ? COLORS[i]
      : inScale
        ? `${COLORS[i]}55`
        : 'rgba(255,255,255,0.08)'
    const color = isRoot ? 'white' : inScale ? COLORS[i] : 'rgba(255,255,255,0.20)'
    const weight = isRoot ? '900' : inScale ? '600' : '400'
    return `<div style="flex:1; text-align:center; padding:4px 0; background:${bg}; border:1px solid ${border}; border-radius:6px; font-size:7px; font-weight:${weight}; color:${color};">${n}</div>`
  }).join('')

  // Chroma bars
  const bars = NOTES.map((n, i) => {
    const inScale = IN_SCALE[i]
    const color = inScale ? COLORS[i] : 'rgba(255,255,255,0.18)'
    const labelColor = inScale ? COLORS[i] : 'rgba(255,255,255,0.30)'
    const h = HEIGHTS[i]
    const dur = ANIM_DUR[i]
    return `
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end; gap:2px; height:100%;">
        <div style="width:100%; border-radius:2px 2px 0 0; background:${color}; height:${h}%;
          animation: bar-pulse-${(i%6)+1} ${dur}s ease-in-out infinite;
          box-shadow: ${inScale ? `0 0 4px ${color}88` : 'none'};"></div>
        <div style="font-size:6px; font-family:ui-monospace,monospace; color:${labelColor}; font-weight:500; line-height:1;">${n}</div>
      </div>`
  }).join('')

  return `
  <div class="iphone">
    <div class="iphone-screen" style="padding:0; display:flex; flex-direction:column; gap:0; overflow:hidden;">

      <!-- Dynamic Island -->
      <div style="display:flex; justify-content:center; padding:8px 0 0; flex-shrink:0;">
        <div style="width:72px; height:22px; background:#000; border-radius:11px;"></div>
      </div>

      <!-- Nav bar -->
      <div style="text-align:center; font-size:12px; font-weight:600; color:white; padding:5px 0 4px; flex-shrink:0; letter-spacing:0.01em;">Key Finder</div>

      <!-- Scrollable content -->
      <div style="flex:1; overflow:hidden; display:flex; flex-direction:column; gap:8px; padding:0 10px; min-height:0;">

        <!-- keyDisplayCard: glassmorphism -->
        <div style="background:rgba(255,255,255,0.04); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.07); border-radius:14px; padding:10px 12px 8px; flex-shrink:0;">
          <!-- "KEY DETECTED" label -->
          <div style="font-size:7px; font-weight:600; color:rgba(255,255,255,0.45); letter-spacing:0.14em; text-transform:uppercase; margin-bottom:4px;">KEY DETECTED</div>
          <!-- Root + quality row -->
          <div style="display:flex; align-items:flex-start; gap:6px;">
            <div style="font-size:52px; font-weight:900; color:white; line-height:1;">C</div>
            <div style="display:flex; flex-direction:column; padding-top:8px; gap:1px;">
              <div style="font-size:14px; font-weight:500; color:rgba(255,255,255,0.70);">Major</div>
              <div style="display:flex; flex-direction:column; gap:0px;">
                <div style="font-size:6px; font-weight:600; color:rgba(255,255,255,0.35); letter-spacing:0.1em; text-transform:uppercase;">alt</div>
                <div style="font-size:10px; font-weight:600; color:rgba(255,255,255,0.45);">A Minor</div>
              </div>
            </div>
          </div>
          <!-- Confidence bar -->
          <div style="margin-top:6px; height:3px; background:rgba(255,255,255,0.06); border-radius:2px; overflow:hidden;">
            <div style="width:87%; height:100%; background:#3C83FF; border-radius:2px;"></div>
          </div>
        </div>

        <!-- scaleChipsRow -->
        <div style="flex-shrink:0;">
          <div style="font-size:7px; font-weight:600; color:rgba(255,255,255,0.40); letter-spacing:0.14em; text-transform:uppercase; margin-bottom:4px;">SCALE</div>
          <div style="display:flex; gap:2px;">
            ${chips}
          </div>
        </div>

        <!-- chromagramPanel -->
        <div style="flex:1; display:flex; flex-direction:column; min-height:0; background:rgba(255,255,255,0.03); backdrop-filter:blur(12px); border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:8px 8px 4px;">
          <div style="font-size:7px; font-weight:600; color:rgba(255,255,255,0.40); letter-spacing:0.14em; text-transform:uppercase; margin-bottom:6px; flex-shrink:0;">CHROMAGRAM</div>
          <div style="flex:1; display:flex; align-items:flex-end; gap:2px; min-height:0;">
            ${bars}
          </div>
        </div>

      </div>

      <!-- Listening indicator -->
      <div style="display:flex; align-items:center; gap:6px; padding:6px 14px 2px; flex-shrink:0;">
        <div style="width:6px; height:6px; border-radius:50%; background:#F24050; box-shadow:0 0 6px #F24050; flex-shrink:0;"></div>
        <div style="font-size:9px; font-family:ui-monospace,monospace; color:rgba(255,255,255,0.50);">0:07</div>
        <div style="flex:1; height:3px; background:rgba(255,255,255,0.06); border-radius:2px; overflow:hidden;">
          <div style="width:45%; height:100%; background:rgba(60,131,255,0.6); border-radius:2px;"></div>
        </div>
      </div>

      <!-- bottomBar: Reset + Stop -->
      <div style="display:flex; gap:6px; padding:6px 10px 14px; flex-shrink:0; border-top:1px solid rgba(255,255,255,0.04);">
        <div style="flex:1; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:22px; padding:8px; display:flex; align-items:center; justify-content:center; gap:4px; font-size:9.5px; font-weight:500; color:white;">
          ↺ Reset
        </div>
        <div style="flex:1; background:rgba(242,64,80,0.08); border:1px solid rgba(242,64,80,0.4); border-radius:22px; padding:8px; display:flex; align-items:center; justify-content:center; gap:4px; font-size:9.5px; font-weight:600; color:#F24050;">
          ■ Stop
        </div>
      </div>

    </div>
  </div>
  `
}
