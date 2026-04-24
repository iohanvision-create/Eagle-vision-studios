/* ============================================================
   PORTFOLIO PAGE SECTION
   ============================================================
   Exports:
   - renderPortfolio() → returns HTML string
   ============================================================ */

/**
 * Portfolio section with an asymmetric 12-column grid.
 * Items use image placeholders — swap the <img> src attributes
 * for real photo/video thumbnails once available.
 *
 * Hover effect: image scale + overlay info fade in + view button.
 */
export function renderPortfolio() {

  /** Portfolio category data */
  const projects = [
    {
      id:    1,
      cat:   'Events',
      title: 'Elevated Moments',
      desc:  'Corporate events, galas, and live experiences captured in full cinematic detail.',
      icon:  iconCalendar(),
      img:   'public/IMG_5054.jpg',
    },
    {
      id:    2,
      cat:   'Branding',
      title: 'Identity by Design',
      desc:  'Visual identity systems and brand campaigns that command presence.',
      icon:  iconTarget(),
      img:   'public/about.PNG',
    },
    {
      id:    3,
      cat:   'Weddings',
      title: 'Forever Frames',
      desc:  'Editorial wedding photography for couples who want timeless, artful imagery.',
      icon:  iconRings(),
      img:   'public/IMG_5061.jpg',
    },
    {
      id:    4,
      cat:   'Quinceañeras',
      title: 'Her Reign Begins',
      desc:  'Vibrant, elegant portraits that honor the beauty of this once-in-a-lifetime celebration.',
      icon:  iconStar(),
      img:   'public/IMG_0873.jpeg',
    },
    {
      id:    5,
      cat:   'Content Shoots',
      title: 'Visual Stories',
      desc:  'High-impact content for social media, advertising, and digital campaigns.',
      icon:  iconCamera(),
      img:   'public/D97A0054.jpeg',
    },
    {
      id:    6,
      cat:   'Websites',
      title: 'Digital Presence',
      desc:  'Premium websites built to convert — clean, fast, and unmistakably on-brand.',
      icon:  iconMonitor(),
      img:   'public/IMG_5060.jpg',
    },
  ];

  const itemsHTML = projects.map(p => /* html */ `
    <article
      class="portfolio__item reveal"
      role="listitem"
      tabindex="0"
      aria-label="${p.cat}: ${p.title}"
    >
      <!-- Image placeholder background (replace with real <img> src) -->
      <div class="portfolio__bg" aria-hidden="true">
        <img
          class="portfolio__img"
          src="${p.img || ''}"
          alt="${p.cat} — ${p.title}"
          loading="lazy"
          onerror="this.style.display='none'"
        />
      </div>

      <!-- Category icon — visible in placeholder state -->
      <div class="portfolio__category-icon" aria-hidden="true">
        ${p.icon}
      </div>

      <!-- View button — appears on hover -->
      <div class="portfolio__play" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="var(--clr-gold)" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round"
          aria-hidden="true" focusable="false">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      </div>

      <!-- Info overlay — slides up on hover -->
      <div class="portfolio__overlay">
        <p class="portfolio__overlay-cat">${p.cat}</p>
        <h3 class="portfolio__overlay-title">${p.title}</h3>
        <p class="portfolio__overlay-desc">${p.desc}</p>
      </div>
    </article>
  `).join('');

  return /* html */ `
    <section id="portfolio" class="section" aria-label="Portfolio — Selected Work">
      <div class="container">

        <!-- Header row: title + filter buttons -->
        <div class="portfolio__header">
          <div>
            <p class="section__label reveal">Our Work</p>
            <h2 class="section__title reveal">
              Selected<br>
              <span>Portfolio</span>
            </h2>
          </div>

          <!-- Category filter tabs -->
          <div class="portfolio__filter reveal" role="group" aria-label="Filter portfolio by category">
            <button class="filter-btn is-active" data-filter="all"          type="button">All</button>
            <button class="filter-btn"            data-filter="events"       type="button">Events</button>
            <button class="filter-btn"            data-filter="branding"     type="button">Branding</button>
            <button class="filter-btn"            data-filter="weddings"     type="button">Weddings</button>
            <button class="filter-btn"            data-filter="quinceaneras" type="button">Quinceañeras</button>
            <button class="filter-btn"            data-filter="content"      type="button">Content</button>
            <button class="filter-btn"            data-filter="websites"     type="button">Websites</button>
          </div>
        </div>

        <!-- Asymmetric masonry-style grid (.stagger = staggered reveal) -->
        <div class="portfolio__grid stagger" role="list">
          ${itemsHTML}
        </div>

      </div>
    </section>
  `;
}

/* ============================================================
   Portfolio Icons (inline SVG)
   ============================================================ */

function iconCalendar() {
  return /* html */ `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8"  y1="2" x2="8"  y2="6"/>
      <line x1="3"  y1="10" x2="21" y2="10"/>
    </svg>`;
}

function iconTarget() {
  return /* html */ `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>`;
}

function iconRings() {
  return /* html */ `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round">
      <circle cx="8"  cy="14" r="5"/>
      <circle cx="16" cy="10" r="5"/>
    </svg>`;
}

function iconStar() {
  return /* html */ `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>`;
}

function iconCamera() {
  return /* html */ `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>`;
}

function iconMonitor() {
  return /* html */ `
    <svg viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8"  y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>`;
}
