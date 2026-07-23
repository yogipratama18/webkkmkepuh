/* ============ KKM Warta — shared header / footer / nav ============ */

function navItemsHtml(activePage, activeCategory){
  const items = [
    { href: 'index.html', label: 'Beranda', match: () => activePage === 'index' },
    ...CATEGORIES.map(c => ({
      href: `kategori.html?kategori=${c.slug}`,
      label: c.label,
      match: () => activePage === 'kategori' && activeCategory === c.slug,
    })),
    { href: 'kirim.html', label: 'Kirim Laporan', match: () => activePage === 'kirim' },
  ];
  return items.map(i => `<a href="${i.href}"${i.match() ? ' class="active"' : ''}>${i.label}</a>`).join('');
}

function renderHeader(activePage, activeCategory){
  const el = document.getElementById('site-header');
  if(!el) return;
  el.innerHTML = `
    <div class="utility-bar">
      <div class="wrap">
        <span id="today-date">Jumat, 17 Juli 2026</span>
        <div class="utility-links">
          <a href="tentang.html">Tentang KKM</a>
          <a href="pedoman.html">Pedoman Media Siber</a>
          <a href="laporan-warga.html">Laporan Warga</a>
          <a href="admin.html">Unggah Artikel</a>
          <a href="kirim.html">Kirim Laporan</a>
        </div>
      </div>
    </div>
    <header class="masthead">
      <div class="wrap masthead-inner">
        <a href="index.html" class="logo-row">
          <img class="logo-img" id="site-logo" src="logo.png" alt="Logo KKM" onerror="this.src='data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2248%22 fill=%22%231F4A32%22/%3E%3Cpath d=%22M50 20 C30 30 25 55 40 75 C42 60 48 50 60 44 C48 52 44 62 45 78 C65 72 78 50 68 28 C62 34 55 34 50 20 Z%22 fill=%22%23C6994F%22/%3E%3C/svg%3E'">
          <div>
            <div class="logo">KKM<span class="sub">Warta</span></div>
            <div class="tagline">KKM Kelompok 15 · Kelurahan Kepuh, Ciwandan</div>
          </div>
        </a>
        <nav class="primary-nav" id="primary-nav">
          ${navItemsHtml(activePage, activeCategory)}
        </nav>
        <div class="header-actions">
          <button class="search-btn" id="search-toggle" aria-label="Cari artikel">⌕</button>
          <button class="menu-toggle" id="menu-toggle" aria-label="Buka menu">☰</button>
          <div class="search-panel" id="search-panel">
            <input type="text" id="search-input" placeholder="Cari berita, desa, atau topik...">
            <button id="search-submit">Cari</button>
          </div>
        </div>
      </div>
      <div class="ticker-bar">
        <div class="ticker-label">Terkini</div>
        <div class="ticker-track-wrap">
          <div class="ticker-track" id="ticker-track"></div>
        </div>
      </div>
    </header>
  `;

  const dateEl = document.getElementById('today-date');
  const now = new Date();
  dateEl.textContent = now.toLocaleDateString('id-ID', { weekday:'long', year:'numeric', month:'long', day:'numeric' });

  const ticker = document.getElementById('ticker-track');
  const latest = [...ARTICLES].slice(0, 6);
  const tickerHtml = latest.map(a => `<a href="artikel.html?id=${a.id}"><span>${a.title}</span></a>`).join('');
  ticker.innerHTML = tickerHtml + tickerHtml;

  document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('primary-nav').classList.toggle('open');
  });

  const searchToggle = document.getElementById('search-toggle');
  const searchPanel = document.getElementById('search-panel');
  const searchInput = document.getElementById('search-input');
  searchToggle.addEventListener('click', () => {
    searchPanel.classList.toggle('open');
    if(searchPanel.classList.contains('open')) searchInput.focus();
  });
  function doSearch(){
    const q = searchInput.value.trim();
    if(q) window.location.href = `cari.html?q=${encodeURIComponent(q)}`;
  }
  document.getElementById('search-submit').addEventListener('click', doSearch);
  searchInput.addEventListener('keydown', (e) => { if(e.key === 'Enter') doSearch(); });

  // prefill search box if on cari.html
  const params = new URLSearchParams(window.location.search);
  if(activePage === 'cari' && params.get('q')){
    searchInput.value = params.get('q');
  }
}

function renderFooter(){
  const el = document.getElementById('site-footer');
  if(!el) return;
  const rubrikLinks = CATEGORIES.map(c => `<li><a href="kategori.html?kategori=${c.slug}">${c.label}</a></li>`).join('');
  el.innerHTML = `
    <footer>
      <div class="wrap footer-top">
        <div>
          <a href="index.html" class="footer-logo">
            <img class="logo-img" style="height:38px;width:38px;" src="logo.png" alt="Logo KKM" onerror="this.src='data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2248%22 fill=%22%23C6994F%22/%3E%3Cpath d=%22M50 20 C30 30 25 55 40 75 C42 60 48 50 60 44 C48 52 44 62 45 78 C65 72 78 50 68 28 C62 34 55 34 50 20 Z%22 fill=%22%231F4A32%22/%3E%3C/svg%3E'">
            KKM Warta
          </a>
          <p class="footer-desc">Media dokumentasi resmi KKM Kelompok 15 Universitas Bina Bangsa Tahun 2026 — merekam kerja nyata mahasiswa bersama warga Kelurahan Kepuh, dari gagasan hingga dampak.</p>
          <p class="footer-desc" style="margin-top:12px;">Posko: Lingkungan Karet, Kelurahan Kepuh, Kecamatan Ciwandan, Kota Cilegon, Banten</p>
        </div>
        <div class="footer-col">
          <h5>Rubrik</h5>
          <ul>${rubrikLinks}</ul>
        </div>
        <div class="footer-col">
          <h5>Program</h5>
          <ul>
            <li><a href="tentang.html">Tentang KKM</a></li>
            <li><a href="pedoman.html">Pedoman Media Siber</a></li>
            <li><a href="kirim.html">Kirim Laporan</a></li>
            <li><a href="laporan-warga.html">Laporan Warga</a></li>
            <li><a href="cari.html">Cari Artikel</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Terhubung</h5>
          <ul>
            <li><a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noopener">YouTube</a></li>
            <li><a href="mailto:kkm15kepuh@gmail.com">kkm15kepuh@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div class="wrap footer-bottom">
        <span>© 2026 KKM Warta. Dikelola oleh KKM Kelompok 15 Universitas Bina Bangsa.</span>
        <span>Dibuat dengan Claude</span>
      </div>
    </footer>
  `;
}

function initReveal(){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in-view');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function cardHtml(a){
  return `
    <article class="card reveal">
      <a href="artikel.html?id=${a.id}" class="card-img-wrap">
        <img class="card-img" src="${a.image}" alt="${a.title}">
      </a>
      <div class="card-body">
        <a href="kategori.html?kategori=${a.category}" class="card-tag">${categoryLabel(a.category)}</a>
        <a href="artikel.html?id=${a.id}"><h3 class="card-title">${a.title}</h3></a>
        <p class="card-excerpt">${a.excerpt}</p>
        <div class="card-meta"><span>${a.group}</span><span>${a.date}</span></div>
      </div>
    </article>
  `;
}

function listArticleHtml(a){
  return `
    <article class="list-article reveal">
      <a href="artikel.html?id=${a.id}"><img src="${a.image}" alt="${a.title}"></a>
      <div>
        <a href="kategori.html?kategori=${a.category}" class="card-tag">${categoryLabel(a.category)}</a>
        <a href="artikel.html?id=${a.id}"><h4>${a.title}</h4></a>
        <p>${a.excerpt}</p>
      </div>
    </article>
  `;
}

/** Call at the end of every page after containers exist in DOM. */
function initSite(activePage, activeCategory){
  renderHeader(activePage, activeCategory);
  renderFooter();
  initReveal();
}
