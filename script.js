(() => {
  const header = document.querySelector('.site-header');
  const links = document.querySelectorAll('a[href^="#"]');

  const updateHeader = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 10);
  };

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const selector = link.getAttribute('href');
      if (!selector || selector === '#top') return;
      const target = document.querySelector(selector);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
})();
