const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  mainNav.classList.toggle('open', !isOpen);
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    mainNav.classList.remove('open');
  });
});

// Sample race-weekend countdown. Update this date when replacing the demo calendar.
const raceWeekend = new Date('2026-10-23T13:00:00-05:00');
const countdownFields = {
  days: document.querySelector('#days'),
  hours: document.querySelector('#hours'),
  minutes: document.querySelector('#minutes'),
};

function updateCountdown() {
  const remaining = Math.max(0, raceWeekend.getTime() - Date.now());
  const totalMinutes = Math.floor(remaining / 60000);
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;

  countdownFields.days.textContent = String(days).padStart(2, '0');
  countdownFields.hours.textContent = String(hours).padStart(2, '0');
  countdownFields.minutes.textContent = String(minutes).padStart(2, '0');
}

updateCountdown();
window.setInterval(updateCountdown, 60_000);
