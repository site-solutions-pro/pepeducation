(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.main-nav');
  const searchInput = document.querySelector('#searchInput');
  const searchButton = document.querySelector('#searchButton');
  const resultCount = document.querySelector('#resultCount');
  const cards = Array.from(document.querySelectorAll('[data-search]'));

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
        menuButton.setAttribute('aria-label', 'Open navigation');
      }
    });
  }

  const normalize = (value) => value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

  const filterLibrary = () => {
    const term = normalize(searchInput?.value ?? '');
    let visible = 0;

    cards.forEach((card) => {
      const searchableText = normalize(card.getAttribute('data-search') ?? card.textContent ?? '');
      const matches = !term || searchableText.includes(term);
      card.hidden = !matches;
      if (matches) visible += 1;
    });

    if (resultCount) {
      resultCount.textContent = term
        ? `${visible} ${visible === 1 ? 'profile found' : 'profiles found'}`
        : `${cards.length} profiles indexed`;
    }

    document.querySelector('#library')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  searchButton?.addEventListener('click', filterLibrary);
  searchInput?.addEventListener('input', filterLibrary);
  searchInput?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      filterLibrary();
    }
  });
})();
