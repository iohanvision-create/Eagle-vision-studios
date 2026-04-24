/* ============================================================
   ABOUT PAGE SECTION
   ============================================================
   Exports:
   - renderAbout() → returns HTML string
   ============================================================ */

/**
 * Two-column about section:
 * Left  → Story copy, founder intro, quote, CTA
 * Right → Founder image placeholder + Stats bar
 */
export function renderAbout() {
  return /* html */ `
    <section id="about" class="section" aria-label="About Eagle Vision Studio">
      <div class="container">
        <div class="about__grid">

          <!-- === Left column: story text === -->
          <div class="about__left">
            <p class="section__label reveal">Our Story</p>

            <h2 class="section__title reveal">
              Built to Create.<br>
              <span>Driven to Elevate.</span>
            </h2>

            <div class="gold-line reveal"></div>

            <p class="about__body reveal">
              <strong>Eagle Vision Studio</strong> is a premium creative agency rooted in the
              <strong>San Francisco Bay Area</strong> — built by a visionary creator who understands
              what it truly means to compete in today's visual-first world.
            </p>

            <p class="about__body reveal">
              We specialize in helping <strong>brands, entrepreneurs, and businesses</strong>
              build the visual presence they need to grow — through compelling content,
              professional film production, stunning web design, and strategic brand
              positioning that commands attention and converts audiences into loyal customers.
            </p>

            <p class="about__body reveal">
              From <strong>wedding photography</strong> and <strong>quinceañera portraits</strong>
              to full-scale <strong>website builds</strong> and <strong>brand campaigns</strong>,
              every project we touch is crafted with intention, precision, and heart.
            </p>

            <blockquote class="about__quote reveal">
              "Every great brand starts with a vision. We make sure the world sees yours."
            </blockquote>

            <a href="#contact" class="btn btn--gold reveal">
              Start a Conversation
            </a>
          </div>

          <!-- === Right column: founder image + stats === -->
          <div class="about__right">

            <!-- Founder image placeholder -->
            <div class="about__founder reveal">
              <div class="about__founder-img">

                <img src="public/founder.jpg" alt="Creative Director &amp; Founder" class="about__founder-photo" />

                <!-- Corner bracket decorations -->
                <div class="frame-corner frame-corner--tl" aria-hidden="true"></div>
                <div class="frame-corner frame-corner--tr" aria-hidden="true"></div>
                <div class="frame-corner frame-corner--bl" aria-hidden="true"></div>
                <div class="frame-corner frame-corner--br" aria-hidden="true"></div>

              </div>

              <!-- Caption below image -->
              <div class="about__founder-caption">
<span class="founder-caption__location">
                  ${iconPin()}
                  San Francisco Bay Area, CA
                </span>
              </div>
            </div>

            <!-- Key metrics bar -->
            <div class="about__stats reveal">
              <div class="stat">
                <div class="stat__number">50+</div>
                <div class="stat__label">Projects</div>
              </div>
              <div class="stat">
                <div class="stat__number">30+</div>
                <div class="stat__label">Clients</div>
              </div>
              <div class="stat">
                <div class="stat__number">100%</div>
                <div class="stat__label">Satisfaction</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  `;
}

/* ---------- Icons (inline SVG) ---------- */


function iconPin() {
  return /* html */ `
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true" focusable="false">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>`;
}
