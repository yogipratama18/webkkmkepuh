/* ============ KKM Warta — konfigurasi Laporan Warga Otomatis ============ */
/*
  Isi 2 nilai di bawah ini SETELAH kamu membuat Google Form + Google Sheet.
  Panduan lengkap langkah-demi-langkah ada di file: PANDUAN-LAPORAN-OTOMATIS.md

  Selama nilainya masih kosong (''), halaman kirim.html dan laporan-warga.html
  akan menampilkan instruksi setup, bukan error.
*/

// Ambil dari URL Google Sheet kamu:
// https://docs.google.com/spreadsheets/d/ID_SHEET_ADA_DI_SINI/edit
const LAPORAN_SHEET_ID = '';

// Nama tab respons di Google Sheet. Google Forms otomatis menamainya
// "Form Responses 1" (biarkan default ini kalau tidak diganti manual).
const LAPORAN_SHEET_TAB = 'Form Responses 1';

// Dari Google Form: tombol Send (kirim) → ikon embed "<>" → copy alamat
// yang ada di dalam src="..." (bukan seluruh kode iframe-nya, cukup URL-nya saja).
const GOOGLE_FORM_EMBED_URL = '';
