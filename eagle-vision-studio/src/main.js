/* ============================================================
   EAGLE VISION STUDIO — MAIN ENTRY POINT
   ============================================================
   This file:
   1. Imports all component and page renderers
   2. Assembles and injects the full page HTML into #app
   3. Hides the loader once content is ready
   4. Wires up all interactivity:
        - Navbar (scroll + mobile menu)
        - Smooth scroll for anchor links
        - Scroll-reveal animations (IntersectionObserver)
        - Portfolio filter tabs
        - Contact form
   ============================================================ */

/* --- Components --- */
import { renderNavbar, initNavbar } from './components/navbar.js';
import { renderFooter }             from './components/footer.js';

/* --- Page sections --- */
import { renderHome }               from './pages/home.js';
import { renderAbout }              from './pages/about.js';
import { renderServices }           from './pages/services.js';
import { renderPortfolio }          from './pages/portfolio.js';
import { renderContact, initContact } from './pages/contact.js';


/* ============================================================
   RENDER — Assemble full page HTML
   ============================================================ */
function renderApp() {
  const app = document.getElementById('app');

  app.innerHTML = /* html */ `
    ${renderNavbar()}

    <main id="main-content">
      ${renderHome()}
      ${renderAbout()}
      ${renderServices()}
      ${renderPortfolio()}
      ${renderContact()}
    </main>

    ${renderFooter()}
  `;
}


/* ============================================================
   LOADER — Hide after content renders
   ============================================================ */
function hideLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  // Wait for load animations to finish (matches loader__bar animation duration)
  setTimeout(() => {
    loader.classList.add('is-hidden');
  }, 1500);
}


/* ============================================================
   SMOOTH SCROLL — Intercept anchor link clicks
   ============================================================ */
function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const targetId = link.getAttribute('href');
    const target   = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    const navHeight = parseInt(getComputedStyle(document.documentElement)
      .getPropertyValue('--nav-h'), 10) || 80;

    const top = target.getBoundingClientRect().top + window.scrollY - navHeight;

    window.scrollTo({ top, behavior: 'smooth' });
  });
}


/* ============================================================
   SCROLL REVEAL — IntersectionObserver for .reveal elements
   ============================================================ */
function initScrollReveal() {
  const revealSelector = '.reveal, .reveal-left, .reveal-right';
  const elements = document.querySelectorAll(revealSelector);

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Animate once only
        }
      });
    },
    {
      threshold:  0.12,                  // Trigger when 12% visible
      rootMargin: '0px 0px -40px 0px',   // Slight bottom offset
    }
  );

  elements.forEach(el => observer.observe(el));
}


/* ============================================================
   PORTFOLIO FILTER — Visual filter tab toggle
   ============================================================ */
function initPortfolioFilter() {
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all, set on clicked
      buttons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      /*
       * Real filtering logic goes here:
       * const filter = btn.dataset.filter;
       * document.querySelectorAll('.portfolio__item').forEach(item => {
       *   item.style.display = filter === 'all' || item.dataset.cat === filter
       *     ? '' : 'none';
       * });
       */
    });
  });
}


/* ============================================================
   INIT — Main initialization sequence
   ============================================================ */
function init() {
  /* Step 1: Render all HTML into #app */
  renderApp();

  /* Step 2: Hide the loader overlay */
  hideLoader();

  /* Step 3: Initialize component behaviors */
  initNavbar();
  initContact();

  /* Step 4: Initialize page-level interactions */
  initSmoothScroll();
  initPortfolioFilter();

  /*
   * Step 5: Initialize scroll-reveal animations.
   * Wrapped in rAF + small timeout to ensure the DOM has
   * fully painted before the observer starts watching.
   */
  requestAnimationFrame(() => {
    setTimeout(initScrollReveal, 80);
  });
}


/* ============================================================
   BOOT — Run after DOM is ready
   ============================================================ */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  // DOM already ready (script loaded as module with defer)
  init();
}
