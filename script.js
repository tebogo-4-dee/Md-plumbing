// Mobile hamburger nav toggle
const header = document.getElementById('site-header');
const hamburger = document.getElementById('hamburger-btn');

hamburger.addEventListener('click', () => {
  const isOpen = header.classList.toggle('nav-open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.mobile-panel a').forEach(link => {
  link.addEventListener('click', () => {
    header.classList.remove('nav-open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});
