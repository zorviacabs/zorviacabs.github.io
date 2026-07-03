// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => nav.classList.remove('open'))
  );
}

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Quote form -> open WhatsApp with prefilled message
const form = document.getElementById('quoteForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim();
    const phone = (data.get('phone') || '').toString().trim();
    const vehicle = (data.get('vehicle') || '').toString().trim();
    const trip = (data.get('trip') || '').toString().trim();

    const msg =
      `Hi Zorvia Cabs, I would like a fare quote.%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Mobile: ${encodeURIComponent(phone)}%0A` +
      `Vehicle: ${encodeURIComponent(vehicle)}` +
      (trip ? `%0ATrip: ${encodeURIComponent(trip)}` : '');

    window.open(`https://wa.me/919829951375?text=${msg}`, '_blank');
  });
}
