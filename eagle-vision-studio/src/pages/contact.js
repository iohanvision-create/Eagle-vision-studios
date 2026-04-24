/* ============================================================
   CONTACT PAGE SECTION
   ============================================================
   Exports:
   - renderContact()  → returns HTML string
   - initContact()    → wires up form validation & submission
   ============================================================ */

/**
 * Contact section: two-column layout.
 * Left  → headline, body copy, contact info items
 * Right → lead form (Full Name, Email, Phone, City, Service, Message)
 *
 * Form submission logs to console (simulated backend).
 * Replace the console.log block with a real API call.
 */
export function renderContact() {
  return /* html */ `
    <section id="contact" class="section" aria-label="Contact Eagle Vision Studio">
      <div class="container">
        <div class="contact__grid">

          <!-- === Left: info === -->
          <div class="contact__left">

            <p class="section__label reveal">Get In Touch</p>

            <h2 class="section__title reveal">
              Let's Build<br>
              <span>Something Great</span>
            </h2>

            <div class="gold-line reveal"></div>

            <p class="contact__body reveal">
              Ready to elevate your brand, capture your milestones, or launch a
              stunning new website? Tell us about your project and let's create
              something extraordinary together.
            </p>

            <!-- Contact info items -->
            <div class="contact__info reveal">

              <div class="contact__info-item">
                <div class="info-icon" aria-hidden="true">${iconMail()}</div>
                <div>
                  <div class="info-label">Email</div>
                  <div class="info-value">
                    <a href="mailto:Eaglevisionstudio218@gmail.com"
                       style="color:inherit;transition:color 150ms ease"
                       onmouseover="this.style.color='var(--clr-gold)'"
                       onmouseout="this.style.color='inherit'">
                      Eaglevisionstudio218@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div class="contact__info-item">
                <div class="info-icon" aria-hidden="true">${iconPin()}</div>
                <div>
                  <div class="info-label">Location</div>
                  <div class="info-value">San Francisco Bay Area, CA</div>
                </div>
              </div>

              <div class="contact__info-item">
                <div class="info-icon" aria-hidden="true">${iconClock()}</div>
                <div>
                  <div class="info-label">Response Time</div>
                  <div class="info-value">Within 24–48 hours</div>
                </div>
              </div>

            </div>
          </div>

          <!-- === Right: form === -->
          <div class="contact__right reveal">
            <div class="contact__form-wrap">

              <form
                id="contactForm"
                class="contact__form"
                novalidate
                aria-label="Contact form"
              >

                <!-- Full Name + Email -->
                <div class="form-row">
                  <div class="form-group">
                    <label for="cf-name" class="form-label">Full Name <span aria-hidden="true">*</span></label>
                    <input
                      type="text"
                      id="cf-name"
                      name="name"
                      class="form-input"
                      placeholder="Jane Smith"
                      required
                      autocomplete="name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="cf-email" class="form-label">Email Address <span aria-hidden="true">*</span></label>
                    <input
                      type="email"
                      id="cf-email"
                      name="email"
                      class="form-input"
                      placeholder="jane@example.com"
                      required
                      autocomplete="email"
                    />
                  </div>
                </div>

                <!-- Phone + City -->
                <div class="form-row">
                  <div class="form-group">
                    <label for="cf-phone" class="form-label">Phone Number <span aria-hidden="true">*</span></label>
                    <input
                      type="tel"
                      id="cf-phone"
                      name="phone"
                      class="form-input"
                      placeholder="(415) 000-0000"
                      required
                      autocomplete="tel"
                    />
                  </div>
                  <div class="form-group">
                    <label for="cf-city" class="form-label">City <span aria-hidden="true">*</span></label>
                    <input
                      type="text"
                      id="cf-city"
                      name="city"
                      class="form-input"
                      placeholder="San Francisco"
                      required
                      autocomplete="address-level2"
                    />
                  </div>
                </div>

                <!-- Service selector -->
                <div class="form-group">
                  <label for="cf-service" class="form-label">Service Needed</label>
                  <div class="form-select-wrap">
                    <select id="cf-service" name="service" class="form-input form-select">
                      <option value="" disabled selected>Select a service...</option>
                      <option value="content">Content Creation</option>
                      <option value="video">Video Production</option>
                      <option value="website">Website Design</option>
                      <option value="wedding">Wedding Photography</option>
                      <option value="quinceanera">Quinceañera Photography</option>
                      <option value="brand">Brand Positioning</option>
                      <option value="other">Other</option>
                    </select>
                    <span class="form-select-arrow" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2.5"
                        stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </span>
                  </div>
                </div>

                <!-- Project Details / Message -->
                <div class="form-group">
                  <label for="cf-message" class="form-label">Project Details / Message <span aria-hidden="true">*</span></label>
                  <textarea
                    id="cf-message"
                    name="message"
                    class="form-textarea"
                    placeholder="Tell us about your project, vision, goals, and timeline..."
                    required
                  ></textarea>
                </div>

                <!-- Submit -->
                <button type="submit" class="form__submit" id="formSubmit">
                  Send My Inquiry
                </button>

                <!-- WhatsApp -->
                <a
                  href="https://wa.me/16503338515?text=Hi%2C%20I'm%20interested%20in%20your%20services."
                  class="form__whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with us on WhatsApp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
                    aria-hidden="true" focusable="false">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.558 4.123 1.532 5.856L.057 23.887l6.204-1.448A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.887 9.887 0 0 1-5.031-1.378l-.361-.214-3.681.859.899-3.574-.235-.371A9.855 9.855 0 0 1 2.106 12C2.106 6.528 6.528 2.106 12 2.106S21.894 6.528 21.894 12 17.472 21.894 12 21.894z"/>
                  </svg>
                  Chat on WhatsApp
                </a>

                <!-- Success confirmation (hidden until form submits) -->
                <div
                  class="form__success"
                  id="formSuccess"
                  role="status"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  ✦ &nbsp; Message received! We'll be in touch within 24–48 hours.
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

/**
 * Wires up form:
 * - Required field validation (red border highlight)
 * - Simulated async submission (console.log)
 * - Success state + auto-reset
 */
export function initContact() {
  const form    = document.getElementById('contactForm');
  const btn     = document.getElementById('formSubmit');
  const success = document.getElementById('formSuccess');

  if (!form) return; // Section not rendered

  /** Fields that require validation */
  const requiredFields = ['cf-name', 'cf-email', 'cf-phone', 'cf-city', 'cf-message'];

  /* Clear error state when user starts typing */
  requiredFields.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => el.classList.remove('is-error'));
      el.addEventListener('focus', () => el.classList.remove('is-error'));
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    /* --- Collect values --- */
    const name    = document.getElementById('cf-name').value.trim();
    const email   = document.getElementById('cf-email').value.trim();
    const phone   = document.getElementById('cf-phone').value.trim();
    const city    = document.getElementById('cf-city').value.trim();
    const message = document.getElementById('cf-message').value.trim();
    const service = document.getElementById('cf-service').value;

    /* --- Simple validation --- */
    let hasError = false;

    if (!name) {
      document.getElementById('cf-name').classList.add('is-error');
      hasError = true;
    }
    if (!email || !isValidEmail(email)) {
      document.getElementById('cf-email').classList.add('is-error');
      hasError = true;
    }
    if (!phone) {
      document.getElementById('cf-phone').classList.add('is-error');
      hasError = true;
    }
    if (!city) {
      document.getElementById('cf-city').classList.add('is-error');
      hasError = true;
    }
    if (!message) {
      document.getElementById('cf-message').classList.add('is-error');
      hasError = true;
    }

    if (hasError) return;

    /* --- Simulate submission (replace with real API call) --- */
    btn.disabled    = true;
    btn.textContent = 'Sending...';

    // Simulated network delay
    await new Promise(resolve => setTimeout(resolve, 1200));

    // Log the inquiry (backend simulation)
    console.group('📨 Eagle Vision Studio — New Inquiry');
    console.log('Name:',      name);
    console.log('Email:',     email);
    console.log('Phone:',     phone);
    console.log('City:',      city);
    console.log('Service:',   service || 'Not specified');
    console.log('Message:',   message);
    console.log('Timestamp:', new Date().toLocaleString());
    console.groupEnd();

    /* --- Success state --- */
    btn.textContent = 'Sent Successfully!';
    btn.classList.add('is-sent');
    success.classList.add('is-visible');

    /* --- Auto-reset after 5 seconds --- */
    setTimeout(() => {
      form.reset();
      btn.textContent = 'Send My Inquiry';
      btn.classList.remove('is-sent');
      btn.disabled = false;
      success.classList.remove('is-visible');
    }, 5000);
  });
}

/** Basic email format check */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ---------- Contact Info Icons (inline SVG) ---------- */

function iconMail() {
  return /* html */ `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true" focusable="false">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>`;
}

function iconPin() {
  return /* html */ `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true" focusable="false">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>`;
}

function iconClock() {
  return /* html */ `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>`;
}
