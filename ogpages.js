/* ============================================================
   build-og-pages.js
   ------------------------------------------------------------
   Tugas file ini SATU saja: membaca semua artikel di data.js,
   lalu membuatkan "kartu nama" HTML kecil per artikel di dalam
   folder og/ — supaya WhatsApp, Facebook, dll bisa menampilkan
   thumbnail foto & judul yang benar saat link artikel dibagikan.

   CARA PAKAI:
   1. Ganti nilai SITE_BASE_URL di bawah ini dengan alamat situs
      kamu yang sebenarnya (setelah di-hosting), TANPA garis miring
      di akhir. Contoh: 'https://namamu.github.io/kkm15-kepuh'
   2. Jalankan lewat terminal:  node build-og-pages.js
   3. Folder og/ akan muncul/terupdate otomatis, isinya 1 file
      per artikel.
   4. Jalankan ulang script ini SETIAP KALI kamu menambah atau
      mengubah artikel di data.js (lewat admin.html atau manual),
      supaya kartu nama-nya ikut ter-update.
   ============================================================ */

const fs = require('fs');
const path = require('path');

// LANGKAH 1 — ganti ini dengan alamat situs kamu yang sebenarnya
const SITE_BASE_URL = 'https://github.com/yogipratama18/webkkmkepuh.git ';

// --- Baca data.js dan ambil variabel ARTICLES dari dalamnya ---
const dataJsPath = path.join(__dirname, 'data.js');
const code = fs.readFileSync(dataJsPath, 'utf8');
const sandbox = {};
new Function('exports', code + '\nexports.ARTICLES = ARTICLES;')(sandbox);
const ARTICLES = sandbox.ARTICLES;

// --- Siapkan folder output ---
const outDir = path.join(__dirname, 'og');
if(!fs.existsSync(outDir)) fs.mkdirSync(outDir);

function absoluteUrl(imgPath){
  if(/^https?:\/\//i.test(imgPath)) return imgPath; // sudah alamat lengkap
  return `${SITE_BASE_URL}/${imgPath.replace(/^\//, '')}`;
}

function escapeAttr(str){
  return (str || '').replace(/"/g, '&quot;');
}

let count = 0;
ARTICLES.forEach(a => {
  const targetUrl = `${SITE_BASE_URL}/artikel.html?id=${a.id}`;
  const imageUrl = absoluteUrl(a.image);

  const html = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>${escapeAttr(a.title)}</title>

<!-- Meta tag ini yang dibaca WhatsApp/Facebook untuk thumbnail -->
<meta property="og:type" content="article">
<meta property="og:title" content="${escapeAttr(a.title)}">
<meta property="og:description" content="${escapeAttr(a.excerpt)}">
<meta property="og:image" content="${imageUrl}">
<meta property="og:url" content="${targetUrl}">
<meta name="twitter:card" content="summary_large_image">

<!-- Alihkan otomatis ke halaman artikel yang sebenarnya -->
<meta http-equiv="refresh" content="0; url=${targetUrl}">
<script>window.location.replace(${JSON.stringify(targetUrl)});</script>
</head>
<body>
  <p>Mengalihkan ke artikel... Kalau tidak otomatis, <a href="${targetUrl}">klik di sini</a>.</p>
</body>
</html>
`;

  fs.writeFileSync(path.join(outDir, `${a.id}.html`), html);
  count++;
});

console.log(`Selesai! ${count} halaman preview dibuat di folder og/`);
console.log(`Jangan lupa upload folder og/ ini juga ke GitHub bersama file lainnya.`);