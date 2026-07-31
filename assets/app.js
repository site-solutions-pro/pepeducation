(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.main-nav');
  const searchInput = document.querySelector('#searchInput');
  const searchButton = document.querySelector('#searchButton');
  const resultCount = document.querySelector('#resultCount');
  const cards = Array.from(document.querySelectorAll('[data-search]'));
  const audienceButtons = Array.from(document.querySelectorAll('[data-audience-select]'));
  const audienceCards = Array.from(document.querySelectorAll('[data-audience-card]'));
  const summary = document.querySelector('#audienceSummary');
  const profileTitle = document.querySelector('#profileTitle');
  const profileDescription = document.querySelector('#profileDescription');
  const profileTags = document.querySelector('#profileTags');
  const toolList = document.querySelector('#toolList');

  const profiles = {
    beginner: {
      summary: 'Clear foundations, practical priorities and essential safety context.',
      title: 'Begin with the core health foundations',
      description: 'Explore sleep, nutrition, movement and biomarkers before moving into emerging compounds.',
      tags: ['Foundations', 'Glossary', 'Safety context', 'Plain language'],
      tools: ['Protein target', 'Zone 2', 'BMI', 'Health glossary']
    },
    intermediate: {
      summary: 'Mechanisms, biomarker links and structured evidence comparisons.',
      title: 'Connect mechanisms to measurable outcomes',
      description: 'Move from foundational concepts into receptors, pathways, biomarkers and study interpretation.',
      tags: ['Mechanisms', 'Biomarkers', 'Comparisons', 'Study design'],
      tools: ['Evidence comparator', 'Biomarker map', 'Receptor index', 'Study glossary']
    },
    athlete: {
      summary: 'Performance, recovery and body-composition science with anti-doping context.',
      title: 'Prioritize performance, recovery and resilience',
      description: 'Explore training adaptation, aerobic capacity, recovery metrics, body composition and sport-safety context.',
      tags: ['Recovery', 'VO2 max', 'Body composition', 'Anti-doping'],
      tools: ['Zone 2', 'Training load', 'Protein target', 'Recovery checklist']
    },
    professional: {
      summary: 'Primary sources, endpoints, adverse events and regulatory context.',
      title: 'Review the evidence with clinical structure',
      description: 'Navigate trial phases, populations, endpoints, limitations, adverse events and regulatory status.',
      tags: ['Primary sources', 'Endpoints', 'Safety', 'Regulatory status'],
      tools: ['Trial finder', 'Evidence table', 'Adverse-event map', 'Reference export']
    }
  };

  const publishedProfiles = {
    tirzepatide: 'peptides/tirzepatide.html',
    semaglutide: 'peptides/semaglutide.html'
  };

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

  const renderItems = (element, items) => {
    if (!element) return;
    element.innerHTML = items.map((item) => `<span>${item}</span>`).join('');
  };

  const setAudience = (name) => {
    const profile = profiles[name] || profiles.beginner;
    document.body.dataset.audience = name;
    localStorage.setItem('pepeducation-audience', name);
    audienceButtons.forEach((button) => {
      const active = button.dataset.audienceSelect === name;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    audienceCards.forEach((card) => card.classList.toggle('active', card.dataset.audienceCard === name));
    if (summary) summary.textContent = profile.summary;
    if (profileTitle) profileTitle.textContent = profile.title;
    if (profileDescription) profileDescription.textContent = profile.description;
    renderItems(profileTags, profile.tags);
    renderItems(toolList, profile.tools);
  };

  audienceButtons.forEach((button) => button.addEventListener('click', () => setAudience(button.dataset.audienceSelect)));
  setAudience(localStorage.getItem('pepeducation-audience') || document.body.dataset.audience || 'beginner');

  cards.forEach((card) => {
    if (card instanceof HTMLAnchorElement) return;
    const name = card.querySelector('h3')?.textContent?.trim().toLowerCase();
    const target = name ? publishedProfiles[name] : null;
    if (!target) return;
    card.classList.add('is-published');
    card.tabIndex = 0;
    card.setAttribute('role', 'link');
    card.setAttribute('aria-label', `Open ${name} profile`);
    const status = card.querySelector('small');
    if (status) status.textContent = 'Open profile →';
    const openProfile = () => window.location.assign(target);
    card.addEventListener('click', openProfile);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openProfile();
      }
    });
  });

  const normalize = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  const filterLibrary = () => {
    const term = normalize(searchInput?.value ?? '');
    let visible = 0;
    cards.forEach((card) => {
      const searchableText = normalize(card.getAttribute('data-search') ?? card.textContent ?? '');
      const matches = !term || searchableText.includes(term);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    if (resultCount) resultCount.textContent = term ? `${visible} ${visible === 1 ? 'profile found' : 'profiles found'}` : `${cards.length} profiles indexed`;
    if (term) document.querySelector('#library')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
