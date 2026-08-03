(() => {
  const path = window.location.pathname;
  const locale = path.includes('/pt/') ? 'pt' : path.includes('/es/') ? 'es' : 'en';
  const assetRoot = locale === 'en' ? '' : '../';
  const page = path.endsWith('/') ? 'index.html' : path.split('/').pop();
  const localizedPages = new Set(['index.html','explore.html','library.html','biomarkers.html','comparisons.html','membership.html']);

  if (!document.querySelector('link[data-wellmax-global]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${assetRoot}assets/wellmax.css`;
    link.dataset.wellmaxGlobal = 'true';
    document.head.appendChild(link);
  }

  const copy = {
    en:{nav:'Primary navigation',explore:'Explore',library:'Research Library',biomarkers:'Biomarkers',comparisons:'Comparisons',membership:'Membership',open:'Open navigation',close:'Close navigation',language:'Select language'},
    pt:{nav:'Navegação principal',explore:'Explorar',library:'Biblioteca',biomarkers:'Biomarcadores',comparisons:'Comparações',membership:'Assinatura',open:'Abrir navegação',close:'Fechar navegação',language:'Selecionar idioma'},
    es:{nav:'Navegación principal',explore:'Explorar',library:'Biblioteca',biomarkers:'Biomarcadores',comparisons:'Comparaciones',membership:'Membresía',open:'Abrir navegación',close:'Cerrar navegación',language:'Seleccionar idioma'}
  }[locale];

  const route = (target) => locale === 'en' ? target : `./${target}`;
  const homeRoute = locale === 'en' ? 'index.html' : './';
  const counterpart = localizedPages.has(page) ? (page === 'index.html' ? '' : page) : '';
  const languageHref = {
    en: locale === 'en' ? (counterpart || './') : `../${counterpart}`,
    pt: locale === 'pt' ? (counterpart || './') : locale === 'es' ? `../pt/${counterpart}` : `pt/${counterpart}`,
    es: locale === 'es' ? (counterpart || './') : locale === 'pt' ? `../es/${counterpart}` : `es/${counterpart}`
  };
  const active = (file) => page === file ? ' aria-current="page"' : '';

  const header = document.querySelector('.site-header');
  if (header) {
    header.innerHTML = `<a class="brand" href="${homeRoute}" aria-label="WellMax Education home"><span class="brand-mark">W</span><span>WellMax Education</span></a><nav class="main-nav" aria-label="${copy.nav}"><a href="${route('explore.html')}"${active('explore.html')}>${copy.explore}</a><a href="${route('library.html')}"${active('library.html')}>${copy.library}</a><a href="${route('biomarkers.html')}"${active('biomarkers.html')}>${copy.biomarkers}</a><a href="${route('comparisons.html')}"${active('comparisons.html')}>${copy.comparisons}</a><a href="${route('membership.html')}"${active('membership.html')}>${copy.membership}</a></nav><div class="header-actions"><div class="language-menu" data-language-menu><button class="language-button" type="button" aria-expanded="false" aria-haspopup="true" aria-label="${copy.language}"><svg class="language-globe" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21M12 3C9.6 5.5 8.4 8.5 8.4 12S9.6 18.5 12 21"></path></svg><span>${locale.toUpperCase()}</span><span aria-hidden="true">▾</span></button><div class="language-dropdown" role="menu" hidden><a class="${locale==='en'?'active':''}" href="${languageHref.en}" data-language="en">🇺🇸 English</a><a class="${locale==='pt'?'active':''}" href="${languageHref.pt}" data-language="pt">🇧🇷 Português</a><a class="${locale==='es'?'active':''}" href="${languageHref.es}" data-language="es">🇪🇸 Español</a></div></div><button class="menu-toggle" type="button" aria-label="${copy.open}" aria-expanded="false">☰</button></div>`;
  }

  const menuButton=document.querySelector('.menu-toggle');
  const navigation=document.querySelector('.main-nav');
  menuButton?.addEventListener('click',()=>{const open=navigation.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?copy.close:copy.open);});
  navigation?.addEventListener('click',e=>{if(e.target instanceof HTMLAnchorElement){navigation.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}});

  document.querySelectorAll('[data-language-menu]').forEach(menu=>{const button=menu.querySelector('.language-button');const dropdown=menu.querySelector('.language-dropdown');if(!button||!dropdown)return;const close=()=>{dropdown.hidden=true;button.setAttribute('aria-expanded','false');menu.classList.remove('open');};button.addEventListener('click',e=>{e.stopPropagation();const open=dropdown.hidden;dropdown.hidden=!open;button.setAttribute('aria-expanded',String(open));menu.classList.toggle('open',open);});dropdown.querySelectorAll('[data-language]').forEach(link=>link.addEventListener('click',()=>{try{localStorage.setItem('wellmax-language',link.dataset.language||'en');}catch(_){}close();}));document.addEventListener('click',e=>{if(!menu.contains(e.target))close();});});

  const normalize=v=>v.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
  const search=document.querySelector('#librarySearch');const cards=[...document.querySelectorAll('[data-search]')];const count=document.querySelector('#resultCount');const filters=[...document.querySelectorAll('[data-filter]')];let category='all';
  const apply=()=>{const term=normalize(search?.value||'');let visible=0;cards.forEach(card=>{const show=(!term||normalize(card.dataset.search||card.textContent||'').includes(term))&&(category==='all'||card.dataset.category===category);card.classList.toggle('hidden',!show);if(show)visible++;});if(count)count.textContent=`${visible} ${visible===1?'resultado':'resultados'}`;};filters.forEach(btn=>btn.addEventListener('click',()=>{category=btn.dataset.filter||'all';filters.forEach(x=>x.classList.toggle('active',x===btn));apply();}));search?.addEventListener('input',apply);apply();

  const slides=[...document.querySelectorAll('.highlight-slide')];const dots=[...document.querySelectorAll('[data-carousel-dot]')];let current=0,timer;const show=i=>{if(!slides.length)return;current=(i+slides.length)%slides.length;slides.forEach((s,n)=>{s.hidden=n!==current;s.classList.toggle('active',n===current);});dots.forEach((d,n)=>d.classList.toggle('active',n===current));};const start=()=>{clearInterval(timer);if(slides.length>1)timer=setInterval(()=>show(current+1),6500);};document.querySelector('.carousel-arrow.previous')?.addEventListener('click',()=>{show(current-1);start();});document.querySelector('.carousel-arrow.next')?.addEventListener('click',()=>{show(current+1);start();});dots.forEach((d,n)=>d.addEventListener('click',()=>{show(n);start();}));show(0);start();
})();
