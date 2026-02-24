// src/mockup-tuner.js
export function tunerMockupHTML() {
  return `
  <div class="iphone">
    <div class="iphone-screen" style="padding:0; display:flex; flex-direction:column; gap:0;">

      <!-- Dynamic Island -->
      <div style="display:flex; justify-content:center; padding:8px 0 0; flex-shrink:0;">
        <div style="width:72px; height:22px; background:#000; border-radius:11px;"></div>
      </div>

      <!-- Nav bar -->
      <div style="text-align:center; font-size:12px; font-weight:600; color:white; padding:5px 0 4px; flex-shrink:0; letter-spacing:0.01em;">Tuner</div>

      <!-- Preset chips -->
      <div style="display:flex; gap:4px; padding:0 8px 6px; overflow:hidden; flex-shrink:0; align-items:center;">
        <div style="background:rgba(60,131,255,0.85); border:1px solid #3C83FF; border-radius:20px; padding:3px 9px; font-size:7.5px; font-weight:600; color:white; white-space:nowrap; flex-shrink:0;">🎸 Guitar</div>
        <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:20px; padding:3px 9px; font-size:7.5px; font-weight:600; color:rgba(255,255,255,0.6); white-space:nowrap; flex-shrink:0;">🎸 Bass</div>
        <div style="background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); border-radius:20px; padding:3px 9px; font-size:7.5px; font-weight:600; color:rgba(255,255,255,0.6); white-space:nowrap; flex-shrink:0;">🎻 Violin</div>
      </div>

      <!-- Tuner dial (SVG, center = 90,90, dial diameter = 166px) -->
      <div style="flex:1; display:flex; align-items:center; justify-content:center; min-height:0;">
        <svg viewBox="0 0 180 180" width="162" height="162" style="overflow:visible; display:block;">
          <defs>
            <!-- Needle gradient: base (bottom) = green 30%, tip (top) = green 100% -->
            <linearGradient id="ng" x1="90" y1="90" x2="90" y2="27" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#33D966" stop-opacity="0.3"/>
              <stop offset="100%" stop-color="#33D966" stop-opacity="1"/>
            </linearGradient>
          </defs>

          <!-- 1. Border ring -->
          <circle cx="90" cy="90" r="83" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="2"/>

          <!-- 2. Audio level ring (outer, slightly bigger r=89) -->
          <circle cx="90" cy="90" r="89" fill="none"
            stroke="rgba(51,217,102,0.35)" stroke-width="3"
            stroke-dasharray="155 404" stroke-dashoffset="-18"
            stroke-linecap="round" transform="rotate(-90 90 90)"/>

          <!-- 3. Graduation marks: minor ticks at ±15,±30,±45,±60,±75°, major at 0° -->
          <!-- Ticks are lines from y=19 (near edge) downward, rotated around center (90,90) -->
          <line x1="90" y1="19" x2="90" y2="25" stroke="rgba(255,255,255,0.18)" stroke-width="1" transform="rotate(-75 90 90)"/>
          <line x1="90" y1="19" x2="90" y2="25" stroke="rgba(255,255,255,0.18)" stroke-width="1" transform="rotate(-60 90 90)"/>
          <line x1="90" y1="19" x2="90" y2="25" stroke="rgba(255,255,255,0.18)" stroke-width="1" transform="rotate(-45 90 90)"/>
          <line x1="90" y1="19" x2="90" y2="25" stroke="rgba(255,255,255,0.18)" stroke-width="1" transform="rotate(-30 90 90)"/>
          <line x1="90" y1="19" x2="90" y2="25" stroke="rgba(255,255,255,0.18)" stroke-width="1" transform="rotate(-15 90 90)"/>
          <!-- Major center mark (0°, 12 o'clock) — taller, brighter -->
          <line x1="90" y1="19" x2="90" y2="31" stroke="rgba(255,255,255,0.8)" stroke-width="2"/>
          <line x1="90" y1="19" x2="90" y2="25" stroke="rgba(255,255,255,0.18)" stroke-width="1" transform="rotate(15 90 90)"/>
          <line x1="90" y1="19" x2="90" y2="25" stroke="rgba(255,255,255,0.18)" stroke-width="1" transform="rotate(30 90 90)"/>
          <line x1="90" y1="19" x2="90" y2="25" stroke="rgba(255,255,255,0.18)" stroke-width="1" transform="rotate(45 90 90)"/>
          <line x1="90" y1="19" x2="90" y2="25" stroke="rgba(255,255,255,0.18)" stroke-width="1" transform="rotate(60 90 90)"/>
          <line x1="90" y1="19" x2="90" y2="25" stroke="rgba(255,255,255,0.18)" stroke-width="1" transform="rotate(75 90 90)"/>

          <!-- 4. Accuracy arc: centered at 12 o'clock, small arc for ~10 cents deviation -->
          <!-- Arc endpoints at ±14° from top: left=(71.8,19.3), right=(108.2,19.3) -->
          <path d="M 71.8 19.3 A 73 73 0 0 1 108.2 19.3"
            fill="none" stroke="#33D966" stroke-width="3" stroke-linecap="round"/>

          <!-- 5. Animated needle: tapered polygon base at (90,90), tip at (90,27) -->
          <!-- transform-box:fill-box + transform-origin:50% 100% = pivot at base (90,90) -->
          <g style="transform-box:fill-box; transform-origin:50% 100%; animation:needle-swing 3s cubic-bezier(0.45,0.05,0.55,0.95) infinite;">
            <polygon points="89.75,27 88.5,90 91.5,90 90.25,27" fill="url(#ng)"/>
            <circle cx="90" cy="27" r="3.5" fill="#33D966" style="filter:drop-shadow(0 0 5px #33D966);"/>
          </g>

          <!-- 6. Center pivot dot -->
          <circle cx="90" cy="90" r="5" fill="#33D966" style="filter:drop-shadow(0 0 4px #33D966);"/>

          <!-- 7. Glass dome (inner circle, subtle) -->
          <circle cx="90" cy="90" r="59" fill="rgba(255,255,255,0.022)" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>

          <!-- 8. ♭ top-left, ♯ top-right (at y≈-61px from center = y=29 in SVG) -->
          <text x="31" y="35" fill="rgba(255,255,255,0.25)" font-size="11" font-family="Inter,system-ui,sans-serif" font-weight="500">♭</text>
          <text x="145" y="35" fill="rgba(255,255,255,0.25)" font-size="11" font-family="Inter,system-ui,sans-serif" font-weight="500">♯</text>

          <!-- 9. Note name: in lower half (y = center + diameter*0.20 = 90+34=124), font = diameter*0.28 ≈ 48px -->
          <text x="90" y="132" text-anchor="middle" dominant-baseline="middle"
            fill="#33D966" font-size="48" font-weight="900"
            font-family="Inter,system-ui,sans-serif"
            style="filter:drop-shadow(0 0 12px rgba(51,217,102,0.6));">A</text>

          <!-- 10. Hz readout (monospace, silver) -->
          <text x="90" y="148" text-anchor="middle"
            fill="rgba(255,255,255,0.38)" font-size="9"
            font-family="ui-monospace,monospace">440.0 Hz</text>

          <!-- 11. Cents (monospace, green, semibold) -->
          <text x="90" y="160" text-anchor="middle"
            fill="#33D966" font-size="10" font-weight="600"
            font-family="ui-monospace,monospace">± 0 ¢</text>
        </svg>
      </div>

      <!-- Start Tuner button (glass capsule) -->
      <div style="padding:0 14px 16px; flex-shrink:0;">
        <div style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:30px; padding:9px; display:flex; align-items:center; justify-content:center; gap:5px; font-size:10.5px; font-weight:600; color:white;">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="white"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zm-1 13.93A7.003 7.003 0 0 1 5 8H3a9.003 9.003 0 0 0 8 8.94V21H9v2h6v-2h-2v-4.07A9.003 9.003 0 0 0 21 8h-2a7.003 7.003 0 0 1-6 6.93z"/></svg>
          Start Tuner
        </div>
      </div>

    </div>
  </div>
  `
}
