import './style.css'
import { initNavbar } from './navbar.js'
import { tunerMockupHTML } from './mockup-tuner.js'
import { keyFinderMockupHTML } from './mockup-keyfinder.js'

initNavbar()

// Inject iPhone mockups into their placeholder divs
const tunerEl = document.getElementById('tuner-mockup')
if (tunerEl) tunerEl.innerHTML = tunerMockupHTML()

const keyfinderEl = document.getElementById('keyfinder-mockup')
if (keyfinderEl) keyfinderEl.innerHTML = keyFinderMockupHTML()
