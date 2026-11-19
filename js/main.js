(() => {
  const body = document.body;

  // ----- Modal -----
  const modal = document.querySelector('[data-modal]');
  const openModal = () => {
    modal.classList.add('is-open');
    body.classList.add('is-locked');
  };
  const closeModal = () => {
    modal.classList.remove('is-open');
    body.classList.remove('is-locked');
  };

  document.querySelectorAll('[data-modal-open]').forEach(btn => btn.addEventListener('click', openModal));
  document.querySelectorAll('[data-modal-close]').forEach(btn => btn.addEventListener('click', closeModal));
  modal?.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  // ----- Mobile menu -----
  const menu = document.querySelector('[data-menu]');
  const openMenu = () => {
    menu.classList.add('is-open');
    body.classList.add('is-locked');
  };
  const closeMenu = () => {
    menu.classList.remove('is-open');
    body.classList.remove('is-locked');
  };

  document.querySelectorAll('[data-menu-open]').forEach(btn => btn.addEventListener('click', openMenu));
  document.querySelectorAll('[data-menu-close]').forEach(btn => btn.addEventListener('click', closeMenu));

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (e.matches) closeMenu();
  });

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    closeModal();
    closeMenu();
  });

  // ----- Portfolio filters -----
  const filterButtons = document.querySelectorAll('[data-filter]');
  const projects = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn =>
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      filterButtons.forEach(b => b.classList.toggle('active', b === btn));
      projects.forEach(card => {
        const visible = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('is-hidden', !visible);
      });
    }),
  );
})();
