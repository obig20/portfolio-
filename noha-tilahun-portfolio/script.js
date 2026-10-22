// 1. Enable Progressive Feature Class for JS
document.documentElement.classList.add('js-enabled');

// 2. Safe Theme Toggle with try/catch Validation
(function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  let currentTheme = 'dark';

  try {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      currentTheme = savedTheme;
    } else {
      currentTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
  } catch (e) {
    console.warn('localStorage read disabled or failed:', e);
  }

  document.documentElement.setAttribute('data-theme', currentTheme);
  if (themeToggleBtn) {
    themeToggleBtn.setAttribute('aria-pressed', currentTheme === 'light' ? 'true' : 'false');

    themeToggleBtn.addEventListener('click', () => {
      const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      themeToggleBtn.setAttribute('aria-pressed', newTheme === 'light' ? 'true' : 'false');

      try {
        localStorage.setItem('theme', newTheme);
      } catch (e) {
        console.warn('localStorage write disabled or failed:', e);
      }
    });
  }
})();

// 3. Scroll Reveal with Safety Fallback & Reduced Motion Support
(function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(el => el.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));

  setTimeout(() => {
    reveals.forEach(el => {
      if (!el.classList.contains('active')) {
        el.classList.add('active');
      }
    });
  }, 1500);
})();
