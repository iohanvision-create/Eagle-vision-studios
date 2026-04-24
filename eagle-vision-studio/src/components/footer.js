/* ============================================================
   FOOTER COMPONENT
   ============================================================
   Exports:
   - renderFooter() → returns HTML string
   ============================================================ */

/**
 * Returns the footer HTML string.
 */
export function renderFooter() {
  return /* html */ `
    <footer class="footer" role="contentinfo">
      <div class="container">

        <!-- Four-column grid: brand | nav | services | contact -->
        <div class="footer__grid">

          <!-- Brand Column -->
          <div class="footer__brand">
            <div class="navbar__logo" aria-label="Eagle Vision Studio">
              <div class="logo__mark">
                <img src="public/logo.jpg" alt="Eagle Vision Logo" class="logo__img" draggable="false" />
              </div>
              <div class="logo__text">
                <span class="logo__name">Eagle Vision</span>
                <span class="logo__sub">Studio</span>
              </div>
            </div>
            <p class="footer__tagline">
              Premium creative services — from media production and brand strategy to
              website design and photography — rooted in the San Francisco Bay Area.
            </p>

            <!-- Social media icons -->
            <div class="footer__social" aria-label="Follow us on social media">
              <a href="https://www.instagram.com/eagle_vision_studios" class="social-icon" aria-label="Follow us on Instagram" target="_blank" rel="noopener noreferrer">
                ${svgInstagram()}
              </a>
            </div>
          </div>

          <!-- Navigation Column -->
          <div>
            <h3 class="footer__col-title">Navigation</h3>
            <ul class="footer__links" role="list">
              <li><a href="#home"      class="footer__link">Home</a></li>
              <li><a href="#about"     class="footer__link">About</a></li>
              <li><a href="#services"  class="footer__link">Services</a></li>
              <li><a href="#portfolio" class="footer__link">Portfolio</a></li>
              <li><a href="#contact"   class="footer__link">Contact</a></li>
            </ul>
          </div>

          <!-- Services Column -->
          <div>
            <h3 class="footer__col-title">Services</h3>
            <ul class="footer__links" role="list">
              <li><a href="#services" class="footer__link">Content Creation</a></li>
              <li><a href="#services" class="footer__link">Video Production</a></li>
              <li><a href="#services" class="footer__link">Website Design</a></li>
              <li><a href="#services" class="footer__link">Wedding Photography</a></li>
              <li><a href="#services" class="footer__link">Quinceañera Photography</a></li>
              <li><a href="#services" class="footer__link">Brand Positioning</a></li>
            </ul>
          </div>

          <!-- Contact Column -->
          <div>
            <h3 class="footer__col-title">Get In Touch</h3>
            <ul class="footer__links" role="list">
              <li><span class="footer__link">San Francisco Bay Area, CA</span></li>
              <li>
                <a href="mailto:Eaglevisionstudio218@gmail.com" class="footer__link">
                  Eaglevisionstudio218@gmail.com
                </a>
              </li>
              <li><a href="#contact" class="footer__link">Start a Project →</a></li>
            </ul>
          </div>

        </div>

        <!-- Bottom copyright bar -->
        <div class="footer__bottom">
          <p class="footer__copy">
            &copy; 2026 <span>Eagle Vision Studio</span>. All rights reserved.
          </p>
          <nav class="footer__legal" aria-label="Legal links">
            <a href="#" class="footer__legal-link">Privacy Policy</a>
            <a href="#" class="footer__legal-link">Terms of Service</a>
          </nav>
        </div>

      </div>
    </footer>
  `;
}

/* ---------- Inline SVG Icons ---------- */

function svgInstagram() {
  return /* html */ `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round" aria-hidden="true" focusable="false">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>`;
}

