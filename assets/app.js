(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.main-nav');

  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    navigation.addEventListener('click', (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        navigation.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const searchInput = document.querySelector('#librarySearch');
  const resultCount = document.querySelector('#resultCount');
  const cards = Array.from(document.querySelectorAll('[data-search]'));
  const filterButtons = Array.from(document.querySelectorAll('[data-filter]'));
  let activeFilter = 'all';

  const normalize = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

  const applyFilters = () => {
    const term = normalize(searchInput?.value ?? '');
    let visible = 0;
    cards.forEach((card) => {
      const searchableText = normalize(card.getAttribute('data-search') ?? card.textContent ?? '');
      const category = card.getAttribute('data-category') ?? 'all';
      const matchesTerm = !term || searchableText.includes(term);
      const matchesCategory = activeFilter === 'all' || category === activeFilter;
      const matches = matchesTerm && matchesCategory;
      card.classList.toggle('hidden', !matches);
      if (matches) visible += 1;
    });
    if (resultCount) resultCount.textContent = `${visible} ${visible === 1 ? 'result' : 'results'}`;
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter || 'all';
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      applyFilters();
    });
  });

  searchInput?.addEventListener('input', applyFilters);
  applyFilters();
})();
