/* Cataclysmic – main.js */

// Mobile nav
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.querySelector('.site-nav');
  const close  = document.querySelector('.nav-close');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  });

  if (close) {
    close.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  }

  // Close on link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
