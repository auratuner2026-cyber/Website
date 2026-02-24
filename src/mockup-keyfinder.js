// src/mockup-keyfinder.js
const notes  = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B']
const colors = ['#F24039','#FA6B26','#FAB826','#F2E12E','#8CE640','#33D966','#26D1B8','#1DBFEB','#3C83FF','#7059F2','#B852EB','#EB4DA6']
const anims  = ['bar-1','bar-2','bar-3','bar-4','bar-5','bar-6','bar-1','bar-2','bar-3','bar-4','bar-5','bar-6']
const heights = [30, 15, 70, 20, 85, 90, 45, 75, 60, 55, 20, 40]

export function keyFinderMockupHTML() {
  const bars = notes.map((n, i) => `
    <div class="chroma-bar"
      style="height:${heights[i]}%; background:${colors[i]}; box-shadow: 0 0 6px ${colors[i]}60; animation: bar-pulse-${(i % 6) + 1} ${1.5 + (i * 0.1)}s ease-in-out infinite;">
    </div>
  `).join('')

  const scaleNotes = ['C','D','E','F','G','A','B']

  return `
  <div class="iphone">
    <div class="iphone-screen">
      <div class="iphone-island"></div>

      <!-- Key display -->
      <div style="font-size:38px; font-weight:900; color:white; line-height:1; margin-bottom:2px;">C Major</div>
      <div style="font-size:10px; font-weight:600; color:rgba(255,255,255,0.4); letter-spacing:0.12em; text-transform:uppercase; margin-bottom:14px;">Key Detected · 94%</div>

      <!-- Chromagram -->
      <div class="chroma-grid">
        ${bars}
      </div>

      <!-- Note labels -->
      <div style="display:flex; gap:3px; width:100%; padding:0 4px; margin-top:3px;">
        ${notes.map((n,i) => `<div style="flex:1;text-align:center;font-size:6px;color:${colors[i]};font-weight:600;">${n}</div>`).join('')}
      </div>

      <!-- Scale chips -->
      <div style="margin-top:10px; display:flex; flex-wrap:wrap; gap:4px; justify-content:center;">
        ${scaleNotes.map(n => `
          <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:6px;padding:3px 7px;font-size:9px;color:rgba(255,255,255,0.5);font-weight:500;">${n}</div>
        `).join('')}
      </div>
    </div>
  </div>
  `
}
