import './style.css'
import { initNavbar } from './navbar.js'
import { tunerMockupHTML } from './mockup-tuner.js'
import { keyFinderMockupHTML } from './mockup-keyfinder.js'
import { initScrollAnimations } from './animations.js'

initNavbar()

// Inject iPhone mockups
const tunerEl = document.getElementById('tuner-mockup')
if (tunerEl) tunerEl.innerHTML = tunerMockupHTML()

const keyfinderEl = document.getElementById('keyfinder-mockup')
if (keyfinderEl) keyfinderEl.innerHTML = keyFinderMockupHTML()

// Init scroll animations after DOM is ready
// (mockups are injected synchronously above, so section-reveal elements exist)
initScrollAnimations()
