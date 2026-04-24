/* ============================================================
   NAVBAR COMPONENT
   ============================================================
   Exports:
   - renderNavbar()  → returns HTML string
   - initNavbar()    → wires up all navbar interactions
   ============================================================ */

/**
 * Returns the navbar HTML string.
 * Called once during app render.
 */
export function renderNavbar() {
  return /* html */ `
    <!-- Fixed navigation bar -->
    <nav class="navbar" id="navbar" role="navigation" aria-label="Main navigation">

      <!-- Logo mark + wordmark -->
      <a href="#home" class="navbar__logo" aria-label="Eagle Vision Studio — back to top">
        <div class="logo__mark">
          <img src="public/logo.jpg" alt="Eagle Vision Logo" class="logo__img" draggable="false" />
        </div>
        <div class="logo__text">
          <span class="logo__name">Eagle Vision</span>
          <span class="logo__sub">Studio</span>
        </div>
      </a>

      <!-- Desktop navigation links -->
      <ul class="navbar__nav" role="list">
        <li><a href="#home"      class="nav__link is-active" data-section="home">Home</a></li>
        <li><a href="#about"     class="nav__link"           data-section="about">About</a></li>
        <li><a href="#services"  class="nav__link"           data-section="services">Services</a></li>
        <li><a href="#portfolio" class="nav__link"           data-section="portfolio">Portfolio</a></li>
        <li><a href="#contact"   class="nav__cta">Work With Us</a></li>
      </ul>

      <!-- Mobile hamburger toggle -->
      <button
        class="navbar__hamburger"
        id="hamburger"
        aria-label="Open navigation menu"
        aria-expanded="false"
        aria-controls="mobileMenu"
      >
        <span class="hamburger__bar"></span>
        <span class="hamburger__bar"></span>
        <span class="hamburger__bar"></span>
      </button>
    </nav>

    <!-- Mobile full-screen menu overlay -->
    <div
      class="navbar__mobile"
      id="mobileMenu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <a href="#home"      class="mobile__link">Home</a>
      <a href="#about"     class="mobile__link">About</a>
      <a href="#services"  class="mobile__link">Services</a>
      <a href="#portfolio" class="mobile__link">Portfolio</a>
      <a href="#contact"   class="mobile__link">Contact</a>
    </div>
  `;
}

/**
 * Initializes all navbar behaviors:
 * - Solid background on scroll
 * - Active link highlighting based on scroll position
 * - Mobile menu toggle
 * - Close mobile menu on link click
 */
export function initNavbar() {
  const navbar      = document.getElementById('navbar');
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile__link');

  // Section IDs in order for active detection
  const sections = ['home', 'about', 'services', 'portfolio', 'contact'];

  /* ---------- Scroll: navbar background + active link ---------- */
  function onScroll() {
    // Toggle frosted glass background
    navbar.classList.toggle('is-scrolled', window.scrollY > 50);

    // Find which section is currently in the viewport
    const scrollMid = window.scrollY + window.innerHeight * 0.35;

    sections.forEach(id => {
      const section = document.getElementById(id);
      const link    = document.querySelector(`.nav__link[data-section="${id}"]`);
      if (!section || !link) return;

      const top    = section.offsetTop;
      const bottom = top + section.offsetHeight;
      link.classList.toggle('is-active', scrollMid >= top && scrollMid < bottom);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run once on init

  /* ---------- Mobile menu toggle ---------- */
  function closeMobile() {
    hamburger.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open navigation menu');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    const willOpen = !mobileMenu.classList.contains('is-open');
    if (willOpen) {
      hamburger.classList.add('is-open');
      mobileMenu.classList.add('is-open');
      hamburger.setAttribute('aria-expanded', 'true');
      hamburger.setAttribute('aria-label', 'Close navigation menu');
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      closeMobile();
    }
  });

  // Close when any mobile link is tapped
  mobileLinks.forEach(link => link.addEventListener('click', closeMobile));

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMobile();
    }
  });
}
