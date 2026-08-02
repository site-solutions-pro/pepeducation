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
      if (event.target instanceof HTMLAnchorElement && !event.target.closest('[data-language-menu]')) {
        navigation.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const languageMenus = Array.from(document.querySelectorAll('[data-language-menu]'));
  languageMenus.forEach((menu) => {
    const button = menu.querySelector('.language-button');
    const dropdown = menu.querySelector('.language-dropdown');
    if (!button || !dropdown) return;

    const closeMenu = () => {
      dropdown.hidden = true;
      button.setAttribute('aria-expanded', 'false');
      menu.classList.remove('open');
    };

    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const willOpen = dropdown.hidden;
      languageMenus.forEach((otherMenu) => {
        if (otherMenu === menu) return;
        const otherButton = otherMenu.querySelector('.language-button');
        const otherDropdown = otherMenu.querySelector('.language-dropdown');
        if (otherButton && otherDropdown) {
          otherDropdown.hidden = true;
          otherButton.setAttribute('aria-expanded', 'false');
          otherMenu.classList.remove('open');
        }
      });
      dropdown.hidden = !willOpen;
      button.setAttribute('aria-expanded', String(willOpen));
      menu.classList.toggle('open', willOpen);
    });

    dropdown.querySelectorAll('[data-language]').forEach((link) => {
      link.addEventListener('click', () => {
        try { window.localStorage.setItem('wellmax-language', link.dataset.language || 'en'); } catch (_) {}
        closeMenu();
      });
    });

    menu.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
        button.focus();
      }
    });

    document.addEventListener('click', (event) => {
      if (!menu.contains(event.target)) closeMenu();
    });
  });

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

  const slides = Array.from(document.querySelectorAll('.highlight-slide'));
  const dots = Array.from(document.querySelectorAll('[data-carousel-dot]'));
  const previous = document.querySelector('.carousel-arrow.previous');
  const next = document.querySelector('.carousel-arrow.next');
  const carousel = document.querySelector('.highlights-carousel');
  let currentSlide = 0;
  let carouselTimer;

  const showSlide = (index) => {
    if (!slides.length) return;
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === currentSlide;
      slide.hidden = !active;
      slide.classList.toggle('active', active);
    });
    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === currentSlide;
      dot.classList.toggle('active', active);
      dot.setAttribute('aria-pressed', String(active));
    });
  };

  const stopCarousel = () => window.clearInterval(carouselTimer);
  const startCarousel = () => {
    stopCarousel();
    if (slides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      carouselTimer = window.setInterval(() => showSlide(currentSlide + 1), 6500);
    }
  };

  previous?.addEventListener('click', () => { showSlide(currentSlide - 1); startCarousel(); });
  next?.addEventListener('click', () => { showSlide(currentSlide + 1); startCarousel(); });
  dots.forEach((dot) => dot.addEventListener('click', () => { showSlide(Number(dot.dataset.carouselDot)); startCarousel(); }));
  carousel?.addEventListener('mouseenter', stopCarousel);
  carousel?.addEventListener('mouseleave', startCarousel);
  carousel?.addEventListener('focusin', stopCarousel);
  carousel?.addEventListener('focusout', startCarousel);
  showSlide(0);
  startCarousel();

  const exploreInput = document.querySelector('#exploreSearch');
  const exploreButton = document.querySelector('#exploreSearchButton');
  const exploreCards = Array.from(document.querySelectorAll('[data-explore]'));
  const exploreCount = document.querySelector('#exploreResultCount');

  const filterExplore = () => {
    const term = normalize(exploreInput?.value ?? '');
    let visible = 0;
    exploreCards.forEach((card) => {
      const value = normalize(card.getAttribute('data-explore') ?? card.textContent ?? '');
      const matches = !term || value.includes(term);
      card.classList.toggle('hidden', !matches);
      if (matches) visible += 1;
    });
    if (exploreCount) exploreCount.textContent = `${visible} ${visible === 1 ? 'area' : 'areas'}`;
  };

  exploreInput?.addEventListener('input', filterExplore);
  exploreButton?.addEventListener('click', filterExplore);
  filterExplore();
})();
