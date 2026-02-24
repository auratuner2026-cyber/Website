// src/mockup-keyfinder.js

const NOTES  = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B']
const COLORS = ['#F24039','#FA6B26','#FAB826','#F2E12E','#8CE640','#33D966','#26D1B8','#1DBFEB','#3C83FF','#7059F2','#B852EB','#EB4DA6']
const IN_SCALE = [true,false,true,false,true,true,false,true,false,true,false,true]
const HEIGHTS  = [88,5,32,8,72,38,6,80,10,28,6,18]
const ANIM_DUR = [1.8,2.3,2.0,2.5,1.6,2.1,2.4,1.7,2.2,1.9,2.6,1.5]

function pianoKeyboardHTML() {
  const whiteKeyNotes = [
    { note: 0, name: 'C' },
    { note: 2, name: 'D' },
    { note: 4, name: 'E' },
    { note: 5, name: 'F' },
    { note: 7, name: 'G' },
    { note: 9, name: 'A' },
    { note: 11, name: 'B' },
  ]
  const blackKeyNotes = [
    { note: 1, name: 'C#', left: '11.5%' },
    { note: 3, name: 'D#', left: '25.5%' },
    { note: 6, name: 'F#', left: '53.5%' },
    { note: 8, name: 'G#', left: '67.5%' },
    { note: 10, name: 'A#', left: '81.5%' },
  ]

  const whiteKeys = whiteKeyNotes.map(k => {
    const inScale = IN_SCALE[k.note]
    const isRoot = k.note === 0
    const bg = isRoot
      ? COLORS[k.note]
      : inScale
        ? 'rgba(255,255,255,0.92)'
        : 'rgba(255,255,255,0.70)'
    const labelColor = isRoot ? 'white' : inScale ? '#222' : 'rgba(0,0,0,0.25)'
    const border = inScale ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.15)'
    const glow = isRoot ? `box-shadow:0 0 8px ${COLORS[k.note]}88;` : ''
    return `<div style="flex:1; background:${bg}; border-radius:0 0 3px 3px; border:0.5px solid ${border}; display:flex; align-items:flex-end; justify-content:center; padding-bottom:3px; position:relative; ${glow}">
      <span style="font-size:6px; font-weight:${isRoot ? '800' : '500'}; color:${labelColor}; line-height:1;">${k.name}</span>
    </div>`
  }).join('')

  const blackKeys = blackKeyNotes.map(k => {
    const inScale = IN_SCALE[k.note]
    const bg = inScale ? `${COLORS[k.note]}` : 'rgba(30,30,35,0.95)'
    const glow = inScale ? `box-shadow:0 2px 6px ${COLORS[k.note]}66;` : ''
    return `<div style="position:absolute; left:${k.left}; top:0; width:10%; height:60%; background:${bg}; border-radius:0 0 2px 2px; z-index:2; border:0.5px solid rgba(0,0,0,0.3); ${glow}"></div>`
  }).join('')

  return `
    <div style="position:relative; height:100%; display:flex; gap:1px;">
      ${whiteKeys}
      ${blackKeys}
    </div>`
}

export function keyFinderMockupHTML() {

  const bars = NOTES.map((n, i) => {
    const inScale = IN_SCALE[i]
    const color = inScale ? COLORS[i] : 'rgba(255,255,255,0.12)'
    const labelColor = inScale ? COLORS[i] : 'rgba(255,255,255,0.25)'
    const h = HEIGHTS[i]
    const dur = ANIM_DUR[i]
    return `
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end; gap:2px; height:100%;">
        <div style="width:100%; border-radius:2px 2px 0 0; background:${color}; height:${h}%;
          animation: bar-pulse-${(i%6)+1} ${dur}s ease-in-out infinite;
          ${inScale ? `box-shadow: 0 0 6px ${color}66;` : ''}"></div>
        <div style="font-size:5.5px; font-family:ui-monospace,monospace; color:${labelColor}; font-weight:500; line-height:1;">${n}</div>
      </div>`
  }).join('')

  return `
  <div class="iphone iphone-kf">
    <div class="iphone-screen" style="padding:0; display:flex; flex-direction:column; gap:0; overflow:hidden;">

      <!-- Dynamic Island -->
      <div style="display:flex; justify-content:center; padding:10px 0 0; flex-shrink:0;">
        <div style="width:72px; height:22px; background:#000; border-radius:11px;"></div>
      </div>

      <!-- Nav bar -->
      <div style="text-align:center; font-size:13px; font-weight:600; color:white; padding:6px 0 6px; flex-shrink:0; letter-spacing:0.01em;">Key Finder</div>

      <!-- Scrollable content -->
      <div style="flex:1; overflow:hidden; display:flex; flex-direction:column; gap:10px; padding:0 12px; min-height:0;">

        <!-- keyDisplayCard -->
        <div style="background:rgba(255,255,255,0.04); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.07); border-radius:14px; padding:12px 14px 10px; flex-shrink:0;">
          <div style="font-size:7.5px; font-weight:600; color:rgba(255,255,255,0.45); letter-spacing:0.14em; text-transform:uppercase; margin-bottom:6px;">KEY DETECTED</div>
          <div style="display:flex; align-items:flex-start; gap:8px;">
            <div style="font-size:52px; font-weight:900; color:white; line-height:0.9;">C</div>
            <div style="display:flex; flex-direction:column; padding-top:6px; gap:2px;">
              <div style="font-size:16px; font-weight:500; color:rgba(255,255,255,0.75);">Major</div>
              <div style="display:flex; flex-direction:column; gap:0px;">
                <div style="font-size:6.5px; font-weight:600; color:rgba(255,255,255,0.30); letter-spacing:0.1em; text-transform:uppercase;">ALT</div>
                <div style="font-size:11px; font-weight:600; color:rgba(255,255,255,0.50);">A Minor</div>
              </div>
            </div>
          </div>
          <div style="margin-top:8px; height:3px; background:rgba(255,255,255,0.06); border-radius:2px; overflow:hidden;">
            <div style="width:87%; height:100%; background:linear-gradient(90deg, #3C83FF, #5A9BFF); border-radius:2px;"></div>
          </div>
        </div>

        <!-- Piano Keyboard -->
        <div style="flex-shrink:0;">
          <div style="font-size:7.5px; font-weight:600; color:rgba(255,255,255,0.40); letter-spacing:0.14em; text-transform:uppercase; margin-bottom:5px;">SCALE</div>
          <div style="height:40px; border-radius:0 0 6px 6px; overflow:hidden;">
            ${pianoKeyboardHTML()}
          </div>
        </div>

        <!-- chromagramPanel -->
        <div style="flex:1; display:flex; flex-direction:column; min-height:0; background:rgba(255,255,255,0.03); backdrop-filter:blur(12px); border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:10px 10px 6px;">
          <div style="font-size:7.5px; font-weight:600; color:rgba(255,255,255,0.40); letter-spacing:0.14em; text-transform:uppercase; margin-bottom:8px; flex-shrink:0;">CHROMAGRAM</div>
          <div style="flex:1; display:flex; align-items:flex-end; gap:3px; min-height:0;">
            ${bars}
          </div>
        </div>

      </div>

      <!-- Listening indicator -->
      <div style="display:flex; align-items:center; gap:6px; padding:8px 14px 4px; flex-shrink:0;">
        <div style="width:6px; height:6px; border-radius:50%; background:#F24050; box-shadow:0 0 6px #F24050; flex-shrink:0; animation:glow-pulse 2s ease-in-out infinite;"></div>
        <div style="font-size:10px; font-family:ui-monospace,monospace; color:rgba(255,255,255,0.50);">0:07</div>
        <div style="flex:1;"></div>
      </div>

      <!-- bottomBar: Reset + Stop -->
      <div style="display:flex; gap:8px; padding:6px 12px 16px; flex-shrink:0;">
        <div style="flex:1; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:22px; padding:9px; display:flex; align-items:center; justify-content:center; gap:4px; font-size:10px; font-weight:500; color:white;">
          ↺ Reset
        </div>
        <div style="flex:1; background:rgba(242,64,80,0.08); border:1px solid rgba(242,64,80,0.4); border-radius:22px; padding:9px; display:flex; align-items:center; justify-content:center; gap:4px; font-size:10px; font-weight:600; color:#F24050;">
          ■ Stop
        </div>
      </div>

    </div>
  </div>
  `
}
