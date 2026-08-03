(() => {
  const path = window.location.pathname;
  const locale = path.includes('/pt/') ? 'pt' : path.includes('/es/') ? 'es' : 'en';
  const root = locale === 'en' ? '' : '../';

  if (!document.querySelector('link[data-wellmax-global]')) {
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = `${root}assets/wellmax.css`;
    stylesheet.dataset.wellmaxGlobal = 'true';
    document.head.appendChild(stylesheet);
  }

  const text = {
    en: { nav: 'Primary navigation', explore: 'Explore', library: 'Research Library', biomarkers: 'Biomarkers', comparisons: 'Comparisons', membership: 'Membership', open: 'Open navigation', close: 'Close navigation', language: 'Select language' },
    pt: { nav: 'Navegação principal', explore: 'Explorar', library: 'Biblioteca', biomarkers: 'Biomarcadores', comparisons: 'Comparações', membership: 'Assinatura', open: 'Abrir navegação', close: 'Fechar navegação', language: 'Selecionar idioma' },
    es: { nav: 'Navegación principal', explore: 'Explorar', library: 'Biblioteca', biomarkers: 'Biomarcadores', comparisons: 'Comparaciones', membership: 'Membresía', open: 'Abrir navegación', close: 'Cerrar navegación', language: 'Seleccionar idioma' }
  }[locale];

  const currentFile = path.endsWith('/') ? 'index.html' : path.split('/').pop();
  const active = (file) => currentFile === file ? ' aria-current="page"' : '';
  const homeHref = locale === 'en' ? 'index.html' : './';
  const languageHref = {
    en: locale === 'en' ? './' : '../',
    pt: locale === 'pt' ? './' : locale === 'es' ? '../pt/' : 'pt/',
    es: locale === 'es' ? './' : locale === 'pt' ? '../es/' : 'es/'
  };

  const header = document.querySelector('.site-header');
  if (header) {
    header.innerHTML = `
      <a class="brand" href="${homeHref}" aria-label="WellMax Education home"><span class="brand-mark">W</span><span>WellMax Education</span></a>
      <nav class="main-nav" aria-label="${text.nav}">
        <a href="${root}explore.html"${active('explore.html')}>${text.explore}</a>
        <a href="${root}library.html"${active('library.html')}>${text.library}</a>
        <a href="${root}biomarkers.html"${active('biomarkers.html')}>${text.biomarkers}</a>
        <a href="${root}comparisons.html"${active('comparisons.html')}>${text.comparisons}</a>
        <a href="${root}membership.html"${active('membership.html')}>${text.membership}</a>
      </nav>
      <div class="header-actions">
        <div class="language-menu" data-language-menu>
          <button class="language-button" type="button" aria-expanded="false" aria-haspopup="true" aria-label="${text.language}">
            <svg class="language-globe" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21M12 3C9.6 5.5 8.4 8.5 8.4 12S9.6 18.5 12 21"></path></svg>
            <span>${locale.toUpperCase()}</span><span aria-hidden="true">▾</span>
          </button>
          <div class="language-dropdown" role="menu" hidden>
            <a class="${locale === 'en' ? 'active' : ''}" href="${languageHref.en}" data-language="en" role="menuitem">🇺🇸 English</a>
            <a class="${locale === 'pt' ? 'active' : ''}" href="${languageHref.pt}" data-language="pt" role="menuitem">🇧🇷 Português</a>
            <a class="${locale === 'es' ? 'active' : ''}" href="${languageHref.es}" data-language="es" role="menuitem">🇪🇸 Español</a>
          </div>
        </div>
        <button class="menu-toggle" type="button" aria-label="${text.open}" aria-expanded="false">☰</button>
      </div>`;
  }

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.main-nav');
  if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? text.close : text.open);
    });
    navigation.addEventListener('click', (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        navigation.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.querySelectorAll('[data-language-menu]').forEach((menu) => {
    const button = menu.querySelector('.language-button');
    const dropdown = menu.querySelector('.language-dropdown');
    if (!button || !dropdown) return;
    const close = () => {
      dropdown.hidden = true;
      button.setAttribute('aria-expanded', 'false');
      menu.classList.remove('open');
    };
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const open = dropdown.hidden;
      dropdown.hidden = !open;
      button.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('open', open);
    });
    dropdown.querySelectorAll('[data-language]').forEach((link) => link.addEventListener('click', () => {
      try { localStorage.setItem('wellmax-language', link.dataset.language || 'en'); } catch (_) {}
      close();
    }));
    menu.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') { close(); button.focus(); }
    });
    document.addEventListener('click', (event) => { if (!menu.contains(event.target)) close(); });
  });

  const normalize = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  const searchInput = document.querySelector('#librarySearch');
  const resultCount = document.querySelector('#resultCount');
  const cards = [...document.querySelectorAll('[data-search]')];
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  let activeFilter = 'all';
  const applyFilters = () => {
    const term = normalize(searchInput?.value ?? '');
    let visible = 0;
    cards.forEach((card) => {
      const content = normalize(card.getAttribute('data-search') ?? card.textContent ?? '');
      const category = card.getAttribute('data-category') ?? 'all';
      const show = (!term || content.includes(term)) && (activeFilter === 'all' || category === activeFilter);
      card.classList.toggle('hidden', !show);
      if (show) visible += 1;
    });
    if (resultCount) resultCount.textContent = `${visible} ${visible === 1 ? 'result' : 'results'}`;
  };
  filterButtons.forEach((button) => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter || 'all';
    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-pressed', String(isActive));
    });
    applyFilters();
  }));
  searchInput?.addEventListener('input', applyFilters);
  applyFilters();

  const slides = [...document.querySelectorAll('.highlight-slide')];
  const dots = [...document.querySelectorAll('[data-carousel-dot]')];
  const previous = document.querySelector('.carousel-arrow.previous');
  const next = document.querySelector('.carousel-arrow.next');
  const carousel = document.querySelector('.highlights-carousel');
  let currentSlide = 0;
  let timer;
  const showSlide = (index) => {
    if (!slides.length) return;
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => { slide.hidden = i !== currentSlide; slide.classList.toggle('active', i === currentSlide); });
    dots.forEach((dot, i) => { dot.classList.toggle('active', i === currentSlide); dot.setAttribute('aria-pressed', String(i === currentSlide)); });
  };
  const stop = () => clearInterval(timer);
  const start = () => {
    stop();
    if (slides.length > 1 && !matchMedia('(prefers-reduced-motion: reduce)').matches) timer = setInterval(() => showSlide(currentSlide + 1), 6500);
  };
  previous?.addEventListener('click', () => { showSlide(currentSlide - 1); start(); });
  next?.addEventListener('click', () => { showSlide(currentSlide + 1); start(); });
  dots.forEach((dot) => dot.addEventListener('click', () => { showSlide(Number(dot.dataset.carouselDot)); start(); }));
  carousel?.addEventListener('mouseenter', stop);
  carousel?.addEventListener('mouseleave', start);
  carousel?.addEventListener('focusin', stop);
  carousel?.addEventListener('focusout', start);
  showSlide(0);
  start();

  const exploreInput = document.querySelector('#exploreSearch');
  const exploreButton = document.querySelector('#exploreSearchButton');
  const exploreCards = [...document.querySelectorAll('[data-explore]')];
  const exploreCount = document.querySelector('#exploreResultCount');
  const filterExplore = () => {
    const term = normalize(exploreInput?.value ?? '');
    let visible = 0;
    exploreCards.forEach((card) => {
      const show = !term || normalize(card.getAttribute('data-explore') ?? card.textContent ?? '').includes(term);
      card.classList.toggle('hidden', !show);
      if (show) visible += 1;
    });
    if (exploreCount) exploreCount.textContent = `${visible} ${visible === 1 ? 'area' : 'areas'}`;
  };
  exploreInput?.addEventListener('input', filterExplore);
  exploreButton?.addEventListener('click', filterExplore);
  filterExplore();
})();
