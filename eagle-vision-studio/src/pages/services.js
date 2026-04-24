/* ============================================================
   SERVICES PAGE SECTION
   ============================================================
   Exports:
   - renderServices() → returns HTML string
   ============================================================ */

/**
 * Services section: 6 cards in a responsive grid.
 * Each card has a number watermark, icon, title, description,
 * and a "Learn More" arrow link.
 */
export function renderServices() {

  /** Service data — edit here to update cards */
  const services = [
    {
      num:   '01',
      icon:  iconCamera(),
      title: 'Content Creation',
      desc:  'Strategic content built to stop the scroll and tell your story — from conceptual ideation through final delivery, every asset serves a purpose and drives real engagement.',
    },
    {
      num:   '02',
      icon:  iconFilm(),
      title: 'Video Production',
      desc:  'Cinematic video production that elevates your brand — from punchy short-form reels to full brand films that leave a lasting emotional impression on your audience.',
    },
    {
      num:   '03',
      icon:  iconMonitor(),
      title: 'Website Design',
      desc:  'Premium, conversion-focused websites that reflect the quality of your brand — built to look stunning, load fast, and turn visitors into paying clients.',
    },
    {
      num:   '04',
      icon:  iconRings(),
      title: 'Wedding Photography',
      desc:  'Timeless, editorial wedding photography that captures every emotion and detail of your most important day — beautifully crafted for the couple who wants perfection.',
    },
    {
      num:   '05',
      icon:  iconStar(),
      title: 'Quinceañera Photography',
      desc:  'Elegant and vibrant coverage of your quinceañera — every portrait, moment, and memory captured with the care and artistry this milestone deserves.',
    },
    {
      num:   '06',
      icon:  iconTarget(),
      title: 'Brand Positioning',
      desc:  'We help you define who you are and how the world perceives you — strategy, identity, and messaging that sets your brand apart and commands the room.',
    },
  ];

  const cardsHTML = services.map(s => /* html */ `
    <article class="service-card reveal" role="listitem" tabindex="0">

      <!-- Large watermark number (decorative) -->
      <span class="service-card__num" aria-hidden="true">${s.num}</span>

      <!-- Service icon -->
      <div class="service-card__icon" aria-hidden="true">${s.icon}</div>

      <!-- Title -->
      <h3 class="service-card__title">${s.title}</h3>

      <!-- Description -->
      <p class="service-card__desc">${s.desc}</p>

      <!-- Inline CTA arrow -->
      <span class="service-card__cta" aria-hidden="true">
        Learn More
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2.5"
          stroke-linecap="round" stroke-linejoin="round"
          aria-hidden="true" focusable="false">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </span>

    </article>
  `).join('');

  return /* html */ `
    <section id="services" class="section" aria-label="Our Services">
      <div class="container">

        <!-- Section header (centered) -->
        <div class="services__header">
          <p class="section__label reveal">What We Do</p>
          <h2 class="section__title reveal">
            Services Built for<br>
            <span>Impact &amp; Growth</span>
          </h2>
          <div class="gold-line reveal"></div>
          <p class="about__body reveal" style="color:var(--clr-white-60);font-size:var(--fs-base);">
            We offer end-to-end creative solutions — from strategy to execution —
            designed to help you build a brand, capture your milestones, and grow
            your presence both online and in life.
          </p>
        </div>

        <!-- Cards grid (.stagger triggers staggered reveal delays) -->
        <div class="services__grid stagger" role="list">
          ${cardsHTML}
        </div>

      </div>
    </section>
  `;
}

/* ============================================================
   Service Card Icons (inline SVG, 54×54 viewport)
   ============================================================ */

/** Camera icon for Content Creation */
function iconCamera() {
  return /* html */ `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true" focusable="false">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>`;
}

/** Film strip icon for Video Production */
function iconFilm() {
  return /* html */ `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true" focusable="false">
      <rect x="2" y="2" width="20" height="20" rx="2"/>
      <line x1="7"  y1="2"  x2="7"  y2="22"/>
      <line x1="17" y1="2"  x2="17" y2="22"/>
      <line x1="2"  y1="12" x2="22" y2="12"/>
      <line x1="2"  y1="7"  x2="7"  y2="7"/>
      <line x1="2"  y1="17" x2="7"  y2="17"/>
      <line x1="17" y1="17" x2="22" y2="17"/>
      <line x1="17" y1="7"  x2="22" y2="7"/>
    </svg>`;
}

/** Monitor icon for Website Design */
function iconMonitor() {
  return /* html */ `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true" focusable="false">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8"  y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>`;
}

/** Rings icon for Wedding Photography */
function iconRings() {
  return /* html */ `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true" focusable="false">
      <circle cx="8"  cy="14" r="5"/>
      <circle cx="16" cy="10" r="5"/>
      <path d="M11.5 11.5 C10 13 6 16 6 16" stroke-opacity="0"/>
      <path d="M12.8 11.8 C14 10.5 18 8 18 8" stroke-opacity="0"/>
    </svg>`;
}

/** Star / sparkle icon for Quinceañera Photography */
function iconStar() {
  return /* html */ `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true" focusable="false">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>`;
}

/** Target icon for Brand Positioning */
function iconTarget() {
  return /* html */ `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>`;
}
