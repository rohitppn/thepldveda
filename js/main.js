// Respect prefers-reduced-motion
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Header: transparent at top, white when scrolled
const header = document.querySelector('.site-header');
const onScroll = () => {
  if (!header) return;
  if (window.scrollY > 20) header.classList.add('scrolled');
  else if (!document.body.classList.contains('nav-open')) header.classList.remove('scrolled');
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (navToggle && nav) {
  const closeNav = () => {
    nav.classList.remove('open');
    document.body.classList.remove('nav-open');
    document.body.style.overflow = '';
    navToggle.setAttribute('aria-expanded', 'false');
    if (window.scrollY <= 20) header.classList.remove('scrolled');
  };
  const openNav = () => {
    nav.classList.add('open');
    document.body.classList.add('nav-open');
    document.body.style.overflow = 'hidden';
    navToggle.setAttribute('aria-expanded', 'true');
    header.classList.add('scrolled');
  };
  navToggle.addEventListener('click', () => {
    if (nav.classList.contains('open')) closeNav();
    else openNav();
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
  // Close mobile menu on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('open')) closeNav();
  });
  // Close mobile menu if window resizes back to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 920 && nav.classList.contains('open')) closeNav();
  });
}

// Reveal on scroll — IntersectionObserver
let revealObserver = null;
if (!reducedMotion && 'IntersectionObserver' in window) {
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
} else {
  // Reduced motion or no IO support: show everything immediately
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
}

// Safety net: after 3 seconds, force any unrevealed items visible
// (covers iOS Safari quirks, slow connections, observer misses on tall items)
setTimeout(() => {
  document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in'));
}, 3000);

// Force-reveal anything still hidden when user reaches the bottom of page
window.addEventListener('scroll', () => {
  if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 200) {
    document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in'));
  }
}, { passive: true });

// Set active nav based on current page
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
});
