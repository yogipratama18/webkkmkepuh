# Panduan KKM Warta — Kelompok 15 Kepuh

Panduan ini untuk kamu, sebagai satu-satunya admin yang akan mengelola dan
mengisi artikel di situs ini.

---

## 1. Struktur File (jangan sampai ada yang hilang)

```
kkm-warta-site/
├── index.html      → Beranda
├── kategori.html    → Halaman per rubrik
├── artikel.html     → Halaman detail artikel
├── cari.html        → Halaman hasil pencarian
├── tentang.html      → Tentang KKM
├── pedoman.html      → Pedoman media siber
├── kirim.html        → Form kirim laporan
├── data.js           → ISI SEMUA ARTIKEL ADA DI SINI (yang paling sering kamu edit)
├── common.js          → Header, footer, navigasi (jarang perlu diubah)
├── styles.css          → Semua tampilan/warna (jarang perlu diubah)
└── logo.png            → Logo KKM 15
```

Semua file **harus** ada dalam satu folder yang sama — jangan dipisah-pisah,
karena saling memanggil satu sama lain.

---

## 2. Hosting Gratis: GitHub Pages

### A. Sekali di Awal (setup)

1. Buat akun di **github.com** (gratis).
2. Klik **New repository** → beri nama misal `kkm15-kepuh` → pilih **Public** → Create.
3. Di halaman repo, klik **Add file → Upload files**, lalu drag semua isi
   folder `kkm-warta-site` (index.html, data.js, styles.css, logo.png, dst) ke sana.
   Klik **Commit changes**.
4. Masuk ke **Settings → Pages** (menu kiri).
5. Pada **Branch**, pilih `main` dan folder `/ (root)` → **Save**.
6. Tunggu 1–2 menit. Situsmu akan aktif di:
   `https://NAMA-AKUNMU.github.io/kkm15-kepuh/`

Selesai — situs sudah online dan gratis selamanya, tanpa perlu perpanjang apa pun.

### B. Alternatif: Netlify (kalau nanti mau domain custom / form beneran aktif)

1. Daftar di **netlify.com** pakai akun GitHub.
2. **Add new site → Import an existing project** → pilih repo `kkm15-kepuh`.
3. Build command dikosongkan saja, publish directory isi `/` → Deploy.
4. Setiap kamu `git push` perubahan ke GitHub, Netlify otomatis update situs.
5. Bonus: aktifkan **Netlify Forms** di form `kirim.html` agar laporan yang
   dikirim orang lain benar-benar masuk ke email kamu (tanpa perlu bikin
   backend sendiri). Kabari saya kalau mau saya bantu setting bagian ini.

---

## 3. Menghidupkan Form "Kirim Laporan" (Laporan Warga Otomatis)

Secara default, form "Kirim Laporan" **belum tersambung ke mana pun** — kalau
belum diatur, mengisi form itu tidak benar-benar mengirim data ke mana pun.

Untuk mengaktifkannya supaya laporan yang masuk otomatis muncul di halaman
**Laporan Warga** (tanpa edit kode setiap kali ada laporan baru), ikuti
panduan terpisah di file **`PANDUAN-LAPORAN-OTOMATIS.md`** — hanya perlu
setup sekali di awal lewat Google Form + Google Sheet, gratis.

## 4. Cara Menambah Artikel Baru — Lewat File Word (Paling Mudah)

Sekarang tersedia halaman **`admin.html`** (buka lewat menu "Unggah Artikel" di
bagian atas situs) yang memungkinkan kamu menambah banyak artikel sekaligus
tanpa sentuh kode sama sekali:

1. Buka `admin.html` di situs kamu, unduh **Template Word** yang tersedia di halaman itu.
2. Isi template tersebut dengan berita kamu — boleh banyak artikel dalam satu
   file, cukup pisahkan tiap artikel dengan baris `===`.
3. Simpan file Word (`.docx`), lalu unggah kembali ke halaman `admin.html`.
4. Sistem akan menampilkan pratinjau semua artikel yang terdeteksi. Kalau ada
   yang bertanda "Perlu Dicek", perbaiki dulu di file Word lalu unggah ulang.
5. Kalau semua sudah bertanda "Siap", klik **Unduh data.js** — file baru akan
   otomatis berisi artikel lama ditambah artikel barumu.
6. Ganti file `data.js` di folder situs kamu (lokal maupun di GitHub) dengan
   file yang baru diunduh ini, lalu commit seperti biasa.

Cara ini paling cocok kalau kamu ingin menulis banyak berita sekaligus di
Word tanpa harus mengetik format kode.

## 5. Cara Menambah Artikel Baru — Edit Langsung di Kode (Alternatif)

Kalau cuma menambah satu-dua artikel dan lebih suka langsung edit kode, semua
artikel disimpan sebagai daftar di file **`data.js`**, di dalam array
`ARTICLES`. Untuk menambah berita baru:

1. Buka `data.js` (langsung di GitHub, klik ikon pensil ✏️ untuk edit online —
   tidak perlu aplikasi apa pun).
2. Copy salah satu blok artikel yang sudah ada sebagai contoh, lalu tempel di
   bagian **paling atas** array `ARTICLES` (supaya muncul sebagai berita terbaru).
3. Ganti isinya sesuai template di bawah ini.
4. Klik **Commit changes**. Tunggu ±1 menit, artikel baru langsung tayang.

### Template artikel baru (copy-paste lalu edit)

```js
{
  id: 'judul-singkat-tanpa-spasi',        // dipakai di URL, huruf kecil, pisah pakai tanda -
  title: 'Judul Lengkap Berita Kamu di Sini',
  excerpt: 'Ringkasan singkat 1-2 kalimat yang muncul di kartu berita.',
  category: 'lingkungan',                  // pilih salah satu, lihat daftar kategori di bawah
  image: 'images/nama-foto.jpg',           // lihat bagian 4 soal foto
  group: 'Kelompok 15',
  village: 'Kelurahan Kepuh',
  date: '18 Jul 2026',
  readTime: '5 menit baca',
  content: [
    'Paragraf pembuka yang menjelaskan kegiatan secara umum.',
    'Paragraf kedua, bisa jelaskan prosesnya.',
    'Paragraf ketiga, jelaskan hasil atau dampaknya.',
  ],
},
```

Daftar `category` yang valid (harus sama persis, huruf kecil):
`kabar-desa`, `pendidikan`, `ekonomi-umkm`, `lingkungan`, `kesehatan`, `sosial`

Kalau ingin artikel ini jadi **berita utama di beranda**, tambahkan baris:
```js
featured: true,
```
(hanya boleh satu artikel yang `featured: true` dalam satu waktu — hapus dari
artikel lama saat menambah yang baru)

---

## 6. Menambah Foto Asli (bukan foto contoh dari internet)

Saat ini semua foto di situs masih pakai foto contoh dari Unsplash. Untuk
pakai foto asli kegiatan kalian:

1. Buat folder baru bernama `images` di dalam repo GitHub kamu (Add file →
   Create new file → ketik `images/.gitkeep` untuk membuat foldernya, atau
   langsung upload foto ke situ).
2. Upload foto kegiatan ke folder `images/` itu (nama file sebaiknya tanpa
   spasi, contoh: `kerja-bakti-drainase.jpg`).
3. Di `data.js`, ganti nilai `image:` artikel terkait menjadi:
   `image: 'images/kerja-bakti-drainase.jpg'`

---

## 7. Checklist Cepat Setiap Menambah Artikel

- [ ] `id` unik, belum dipakai artikel lain
- [ ] `category` salah satu dari 6 kategori yang valid
- [ ] Foto sudah diupload ke folder `images/` (kalau pakai foto asli)
- [ ] Commit changes di GitHub
- [ ] Cek situs setelah ±1 menit, artikel sudah muncul

---

Kalau suatu saat kelompok berikutnya ingin banyak orang bisa ikut upload
tanpa sentuh kode, kabari saya — bisa dibuatkan versi dengan Google
Form + Sheet atau CMS dengan halaman admin.
