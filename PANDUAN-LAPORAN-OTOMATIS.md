# Panduan: Laporan Warga Otomatis (Google Form + Google Sheet)

Fitur ini membuat form "Kirim Laporan" benar-benar berfungsi — laporan yang
masuk otomatis tersimpan, dan begitu kamu tandai "Tayang", **langsung muncul
di situs tanpa perlu edit kode atau upload ulang apa pun.**

Setup ini cuma dilakukan **sekali saja**. Setelah itu, penggunaan sehari-hari
tinggal buka Google Sheet dan ketik "Tayang" di kolom Status.

---

## Langkah 1 — Buat Google Form

1. Buka **forms.google.com** → buat form baru, beri judul misalnya
   "Form Laporan Kegiatan — KKM 15 Kepuh".
2. Tambahkan pertanyaan **persis** seperti daftar ini (nama pertanyaan boleh
   mirip, tidak harus sama persis, karena situs mencocokkan secara fleksibel):

   | Pertanyaan | Tipe |
   |---|---|
   | Nama Pelapor | Jawaban singkat |
   | Kelompok | Jawaban singkat (isi default: Kelompok 15) |
   | Lingkungan | Jawaban singkat |
   | Kategori | Dropdown — isi pilihan: Kabar Desa, Pendidikan, Ekonomi & UMKM, Lingkungan, Kesehatan, Sosial |
   | Judul Laporan | Jawaban singkat |
   | Ringkasan Kegiatan | Paragraf |

3. Semua pertanyaan sebaiknya ditandai **Wajib diisi**.

---

## Langkah 2 — Hubungkan ke Google Sheet

1. Di Google Form, buka tab **Responses (Tanggapan)**.
2. Klik ikon Google Sheets hijau di pojok kanan atas → **Create new spreadsheet** → Create.
3. Sheet baru akan terbuka otomatis, isinya akan terisi sendiri tiap ada yang mengisi form.

---

## Langkah 3 — Tambah Kolom "Status"

1. Di Google Sheet yang baru dibuat, cari sel kosong di kolom paling kanan
   (setelah kolom terakhir hasil form, misalnya kolom H).
2. Ketik **Status** di baris pertama (header) kolom itu.
3. Untuk laporan yang ingin kamu tampilkan di situs, ketik **Tayang** di
   baris laporan tersebut, di kolom Status. Yang belum diisi otomatis tidak
   akan tampil di situs.

---

## Langkah 4 — Bagikan Sheet supaya Bisa Dibaca Situs

1. Klik tombol **Share (Bagikan)** di kanan atas Google Sheet.
2. Ganti akses jadi **"Anyone with the link" → Viewer** (Siapa saja yang
   memiliki tautan → dapat melihat).
3. Klik **Copy link**, lalu simpan dulu tautan itu.

---

## Langkah 5 — Ambil ID Sheet

Dari tautan yang barusan disalin, formatnya seperti ini:

```
https://docs.google.com/spreadsheets/d/1AbCdEfGhIjKlMnOpQrStUvWxYz/edit
                                        └──────────── ini ID-nya ────────────┘
```

Salin bagian di antara `/d/` dan `/edit` — itulah **ID Sheet** kamu.

---

## Langkah 6 — Ambil Kode Embed Google Form

1. Kembali ke Google Form (bukan Sheet), klik tombol **Send (Kirim)** di kanan atas.
2. Pilih ikon **`<>`** (Embed HTML).
3. Akan muncul kode seperti:
   ```html
   <iframe src="https://docs.google.com/forms/d/e/xxxxxxx/viewform?embedded=true" width="640" height="921" ...></iframe>
   ```
4. Salin **hanya bagian di dalam tanda kutip `src="..."`** — itu yang dibutuhkan.

---

## Langkah 7 — Isi `config.js`

Buka file `config.js` di folder situs kamu, isi seperti ini:

```js
const LAPORAN_SHEET_ID = '1AbCdEfGhIjKlMnOpQrStUvWxYz';        // dari Langkah 5
const LAPORAN_SHEET_TAB = 'Form Responses 1';                    // biasanya tidak perlu diubah
const GOOGLE_FORM_EMBED_URL = 'https://docs.google.com/forms/d/e/xxxxxxx/viewform?embedded=true'; // dari Langkah 6
```

Simpan, lalu upload ulang `config.js` ke GitHub (file lain tidak perlu diubah).

---

## Selesai — Cara Pakai Sehari-hari

1. Warga isi form di halaman **Kirim Laporan** di situs kamu.
2. Laporan otomatis masuk ke Google Sheet.
3. Kamu buka Sheet, baca laporan yang masuk, lalu ketik **Tayang** di kolom
   Status untuk yang ingin ditampilkan.
4. Dalam waktu singkat (maksimal ~30 detik, karena ada jeda cache), laporan
   itu **otomatis muncul** di halaman **Laporan Warga** — tanpa kamu perlu
   sentuh kode atau upload ulang apa pun.

---

## Catatan

- Laporan Warga (lewat form ini) dan Artikel resmi (lewat `admin.html` / Word)
  sengaja dipisah. Laporan Warga cocok untuk update singkat dan cepat;
  Artikel resmi cocok untuk liputan yang lebih lengkap dan matang.
- Kalau ingin laporan warga yang bagus "naik kelas" jadi artikel resmi,
  tinggal salin isinya ke template Word dan unggah lewat `admin.html`.
- Format tanggal dan tampilan Timestamp mengikuti default Google Form
  (otomatis), tidak perlu diatur manual.
