/* All services, contact links, and photos remain available without JavaScript. */
(() => {
  'use strict';
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('#main-menu');
  if (!header || !toggle || !menu) return;
  const mobile = window.matchMedia('(max-width: 850px)');

  function setMenuOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close' : 'Menu';
    header.classList.toggle('menu-open', open);
  }
  function syncMenu() {
    setMenuOpen(false);
    toggle.hidden = !mobile.matches;
  }
  header.classList.add('nav-enhanced');
  syncMenu();
  toggle.addEventListener('click', () => {
    setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!header.contains(event.target)) setMenuOpen(false);
  });
  if (mobile.addEventListener) mobile.addEventListener('change', syncMenu);
  else mobile.addListener(syncMenu);
})();
