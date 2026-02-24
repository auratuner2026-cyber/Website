// src/mockup-tuner.js
export function tunerMockupHTML() {
  return `
  <div class="iphone">
    <div class="iphone-screen">
      <div class="iphone-island"></div>

      <!-- Tuner arc -->
      <div class="tuner-arc">
        <svg viewBox="0 0 150 75" fill="none">
          <path d="M 10 72 A 65 65 0 0 1 140 72" stroke="rgba(255,255,255,0.08)" stroke-width="4" stroke-linecap="round"/>
          <path d="M 75 72 A 65 65 0 0 1 140 72" stroke="#33D966" stroke-width="4" stroke-linecap="round" opacity="0.6"/>
        </svg>
        <!-- Animated needle -->
        <div class="needle-pivot">
          <div style="width:2px; height:55px; background: linear-gradient(to bottom, #33D966, rgba(51,217,102,0.1)); border-radius:2px; filter: drop-shadow(0 0 4px #33D966);"></div>
          <div style="width:8px; height:8px; border-radius:50%; background:#33D966; margin-left:-3px; box-shadow: 0 0 10px #33D966;"></div>
        </div>
      </div>

      <!-- Note name -->
      <div style="font-size:52px; font-weight:900; color:#33D966; line-height:1; text-shadow: 0 0 20px rgba(51,217,102,0.6);">A</div>
      <div style="font-size:11px; font-weight:500; color:rgba(255,255,255,0.45); margin-top:4px; letter-spacing:0.08em;">IN TUNE</div>

      <!-- Cents / Hz readout -->
      <div style="font-size:12px; font-family:ui-monospace,monospace; color:rgba(255,255,255,0.35); margin-top:8px;">440.0 Hz · +0 ¢</div>

      <!-- Preset chip -->
      <div style="margin-top:auto; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.08); border-radius:20px; padding:4px 12px; font-size:10px; font-weight:600; color:rgba(255,255,255,0.45);">
        Guitar Standard
      </div>
    </div>
  </div>
  `
}
