// src/navbar.js
export function initNavbar() {
  const navbar = document.getElementById('navbar')
  if (!navbar) return

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled')
    } else {
      navbar.classList.remove('navbar-scrolled')
    }
  }, { passive: true })
}
