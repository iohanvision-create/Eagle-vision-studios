/* ============================================================
   HOME PAGE — HERO SECTION
   ============================================================
   Exports:
   - renderHome() → returns HTML string
   ============================================================ */

/**
 * Full-screen cinematic hero section.
 * Background is built entirely from CSS gradients + grain
 * (no external images required).
 */
export function renderHome() {
  return /* html */ `
    <section id="home" aria-label="Eagle Vision Studio — Hero">

      <!-- === Layered cinematic background === -->
      <div class="hero__bg" aria-hidden="true">
        <div class="hero__gradient"></div>   <!-- Warm dark gradient with gold hue -->
        <div class="hero__grid"></div>        <!-- Perspective grid overlay -->
        <div class="hero__vignette"></div>    <!-- Radial vignette -->
        <div class="hero__grain"></div>       <!-- Film grain texture -->
      </div>

      <!-- === Hero content (centered) === -->
      <div class="hero__content">

        <!-- Overline label with decorative bars -->
        <div class="hero__eyebrow" aria-label="Creative Studio — San Francisco Bay Area">
          Creative Studio &nbsp;·&nbsp; San Francisco Bay Area
        </div>

        <!-- Main headline: two lines, second line in gold italic -->
        <h1 class="hero__title">
          We Build
          <span class="accent-line">Visual Presence</span>
        </h1>

        <!-- Supporting subheadline -->
        <p class="hero__subtitle">
          Content creation, film production, website design, photography,
          and brand strategy — built to elevate the brands and moments that matter.
        </p>

        <!-- Call to action buttons -->
        <div class="hero__actions">
          <a href="#contact" class="btn btn--gold">
            Work With Us
            <!-- Arrow icon -->
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.5"
              stroke-linecap="round" stroke-linejoin="round"
              aria-hidden="true" focusable="false">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
          <a href="#portfolio" class="btn btn--outline">
            View Our Work
          </a>
        </div>
      </div>

      <!-- === Scroll indicator === -->
      <div class="hero__scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div class="scroll-hint__line"></div>
      </div>

    </section>
  `;
}
