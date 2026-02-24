// src/mockup-keyfinder.js

const NOTES  = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B']
const COLORS = ['#F24039','#FA6B26','#FAB826','#F2E12E','#8CE640','#33D966','#26D1B8','#1DBFEB','#3C83FF','#7059F2','#B852EB','#EB4DA6']
const IN_SCALE = [true,false,true,false,true,true,false,true,false,true,false,true]
const HEIGHTS  = [88,5,32,8,72,38,6,80,10,28,6,18]
const ANIM_DUR = [5.2,5.8,5.5,6.0,5.0,5.6,6.2,5.3,5.9,5.4,6.4,4.8]

export function keyFinderMockupHTML() {

  // Scale chips — colored circles matching the real app
  const chips = NOTES.map((n, i) => {
    const inScale = IN_SCALE[i]
    const isRoot = i === 0
    const bg = isRoot
      ? COLORS[i]
      : inScale
        ? `${COLORS[i]}30`
        : 'rgba(255,255,255,0.06)'
    const border = isRoot
      ? COLORS[i]
      : inScale
        ? `${COLORS[i]}60`
        : 'rgba(255,255,255,0.10)'
    const color = isRoot ? 'white' : inScale ? COLORS[i] : 'rgba(255,255,255,0.22)'
    const weight = isRoot ? '800' : inScale ? '600' : '400'
    const size = '18px'
    const glow = isRoot ? `box-shadow:0 0 6px ${COLORS[i]}88;` : ''
    return `<div style="width:${size}; height:${size}; border-radius:50%; background:${bg}; border:1px solid ${border}; display:flex; align-items:center; justify-content:center; font-size:6px; font-weight:${weight}; color:${color}; flex-shrink:0; ${glow}">${n}</div>`
  }).join('')

  // Chromagram bars
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
  <style>
    @keyframes bar-pulse-1 { 0%, 100% { height: 30%; } 50% { height: 80%; } }
    @keyframes bar-pulse-2 { 0%, 100% { height: 60%; } 50% { height: 40%; } }
    @keyframes bar-pulse-3 { 0%, 100% { height: 45%; } 50% { height: 90%; } }
    @keyframes bar-pulse-4 { 0%, 100% { height: 70%; } 50% { height: 35%; } }
    @keyframes bar-pulse-5 { 0%, 100% { height: 25%; } 50% { height: 75%; } }
    @keyframes bar-pulse-6 { 0%, 100% { height: 85%; } 50% { height: 50%; } }
  </style>
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
                <div style="font-size:6.5px; font-weight:600; color:rgba(255,255,255,0.30); letter-spacing:0.1em; text-transform:uppercase;">alt</div>
                <div style="font-size:11px; font-weight:600; color:rgba(255,255,255,0.50);">A Minor</div>
              </div>
            </div>
          </div>
          <div style="margin-top:8px; height:3px; background:rgba(255,255,255,0.06); border-radius:2px; overflow:hidden;">
            <div style="width:87%; height:100%; background:linear-gradient(90deg, #3C83FF, #5A9BFF); border-radius:2px;"></div>
          </div>
        </div>

        <!-- Scale Chips -->
        <div style="flex-shrink:0;">
          <div style="font-size:7.5px; font-weight:600; color:rgba(255,255,255,0.40); letter-spacing:0.14em; text-transform:uppercase; margin-bottom:5px;">SCALE</div>
          <div style="display:flex; gap:3px; justify-content:space-between;">
            ${chips}
          </div>
        </div>

        <!-- Chromagram -->
        <div style="flex:1; display:flex; flex-direction:column; min-height:0; background:rgba(255,255,255,0.03); backdrop-filter:blur(12px); border:1px solid rgba(255,255,255,0.06); border-radius:12px; padding:10px 10px 6px;">
          <div style="font-size:7.5px; font-weight:600; color:rgba(255,255,255,0.40); letter-spacing:0.14em; text-transform:uppercase; margin-bottom:8px; flex-shrink:0;">CHROMAGRAM</div>
          <div style="flex:1; display:flex; align-items:flex-end; gap:3px; min-height:0;">
            ${bars}
          </div>
        </div>

      </div>

      <!-- Listening indicator -->
      <div style="display:flex; align-items:center; gap:6px; padding:8px 14px 14px; flex-shrink:0;">
        <div style="width:6px; height:6px; border-radius:50%; background:#F24050; box-shadow:0 0 6px #F24050; flex-shrink:0; animation:glow-pulse 2s ease-in-out infinite;"></div>
        <div style="font-size:10px; font-family:ui-monospace,monospace; color:rgba(255,255,255,0.50);">0:07</div>
        <div style="flex:1; height:3px; background:rgba(255,255,255,0.06); border-radius:2px; overflow:hidden; margin-left:2px;">
          <div style="width:45%; height:100%; background:rgba(60,131,255,0.5); border-radius:2px;"></div>
        </div>
      </div>

    </div>
  </div>
  `
}
