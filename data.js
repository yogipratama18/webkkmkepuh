/* ============ KKM Warta — shared article data ============ */

const CATEGORIES = [
  { slug: 'kabar-desa',    label: 'Kabar Desa' },
  { slug: 'pendidikan',    label: 'Pendidikan' },
  { slug: 'ekonomi-umkm',  label: 'Ekonomi & UMKM' },
  { slug: 'lingkungan',    label: 'Lingkungan' },
  { slug: 'kesehatan',     label: 'Kesehatan' },
  { slug: 'sosial',        label: 'Sosial' },
];

function categoryLabel(slug){
  const c = CATEGORIES.find(c => c.slug === slug);
  return c ? c.label : slug;
}

const ARTICLES = [
  {
    id: 'pelepasan-mahasiswa-kkm-2026',
    title: 'Pelepasan Mahasiswa KKM Universitas Bina Bangsa Tahun 2026',
    excerpt: 'Pelepasan Mahasiswa KKM Universitas Bina Bangsa Tahun 2026',
    category: 'kabar-desa',
    image: 'images/kkm2.JPG',
    group: 'Kelompok 15',
    village: 'Universitas Bina Bangsa',
    date: '13 Jul 2026',
    readTime: '8 menit baca',
    featured: true,
    popular: 1,
    content: [
      `Universitas Bina Bangsa resmi melepas seluruh mahasiswa peserta Kuliah Kerja Mahasiswa (KKM) Tahun 2026 dalam sebuah upacara yang digelar di kampus pada Minggu, 13 Juli 2026, mulai pukul 08.00 WIB. Acara ini menandai dimulainya masa pengabdian mahasiswa di puluhan titik lokasi yang tersebar di wilayah Kota Cilegon, termasuk Kelompok 15 yang akan mengabdi di Kelurahan Kepuh, Kecamatan Ciwandan.
Pihak universitas, melalui perwakilan yang memimpin upacara pelepasan, menyampaikan pesan agar mahasiswa menjaga nama baik almamater selama berada di tengah masyarakat. Mahasiswa diminta untuk bersikap sopan, aktif berkomunikasi dengan perangkat desa maupun kelurahan, serta menjalankan program kerja yang telah dirancang dengan penuh tanggung jawab. Dosen Pembimbing Lapangan (DPL) dari masing-masing kelompok turut hadir mendampingi mahasiswa bimbingannya dalam acara tersebut.
Selain menjadi momen seremonial, pelepasan ini juga berfungsi sebagai pengingat bahwa KKM merupakan wujud nyata dari salah satu pilar Tri Dharma Perguruan Tinggi, yaitu pengabdian kepada masyarakat. Mahasiswa diharapkan dapat menerapkan ilmu yang telah dipelajari di bangku kuliah untuk membantu menyelesaikan persoalan riil yang dihadapi masyarakat di lokasi penempatan masing-masing.
Usai upacara pelepasan, mahasiswa dari setiap kelompok, termasuk Kelompok 15, mempersiapkan diri untuk menuju lokasi pengabdian masing-masing guna mengikuti rangkaian penerimaan resmi oleh pemerintah kecamatan dan kelurahan setempat sebagai langkah awal sebelum memulai program kerja.
`
    ],
  },
  {
    id: 'Penerimaan-mahasiswa-kkm-pemerintah-ciwandan',
    title: 'Penerimaan Mahasiswa KKM oleh Pemerintah Kecamatan Ciwandan',
    excerpt: 'Pemerintah Kecamatan Ciwandan menggelar acara penerimaan mahasiswa Kuliah Kerja Mahasiswa (KKM) Universitas Bina Bangsa Tahun 2026 di Kantor Kecamatan Ciwandan pada Minggu, 13 Juli 2026. Acara ini diikuti oleh puluhan mahasiswa dari berbagai kelompok KKM yang akan ditempatkan di sejumlah kelurahan di wilayah Kecamatan Ciwandan, termasuk Kelompok 15 yang akan bertugas di Kelurahan Kepuh.',
    category: 'kabar-desa',
    image: 'images/kkm1.jpeg',
    group: 'Kelompok 15',
    village: 'Kecamatan Ciwandan',
    date: '13 Jul 2026',
    readTime: '5 menit baca',
    popular: 2,
    content: [
      `Pemerintah Kecamatan Ciwandan menggelar acara penerimaan mahasiswa Kuliah Kerja Mahasiswa (KKM) Universitas Bina Bangsa Tahun 2026 di Kantor Kecamatan Ciwandan pada Minggu, 13 Juli 2026. Acara ini diikuti oleh puluhan mahasiswa dari berbagai kelompok KKM yang akan ditempatkan di sejumlah kelurahan di wilayah Kecamatan Ciwandan, termasuk Kelompok 15 yang akan bertugas di Kelurahan Kepuh.
Dalam sambutannya, Camat Ciwandan menyampaikan apresiasi atas kehadiran mahasiswa KKM di wilayahnya dan berharap kehadiran mereka dapat memberikan kontribusi nyata bagi masyarakat, khususnya dalam bidang pendidikan, kesehatan, ekonomi, serta lingkungan hidup. Camat juga memberikan arahan mengenai karakteristik wilayah Kecamatan Ciwandan serta beberapa isu sosial yang perlu menjadi perhatian mahasiswa selama masa KKM, seperti potensi UMKM lokal dan kondisi infrastruktur di beberapa lingkungan.
Selain arahan dari Camat, mahasiswa juga mendapatkan penjelasan mengenai mekanisme koordinasi antara pihak kecamatan, kelurahan, dan kelompok KKM selama masa pengabdian berlangsung. Mahasiswa diimbau untuk selalu melapor dan berkoordinasi dengan perangkat kecamatan maupun kelurahan apabila menemui kendala di lapangan, agar setiap permasalahan dapat segera ditindaklanjuti.
Acara penerimaan ditutup dengan sesi dokumentasi bersama antara mahasiswa KKM, Dosen Pembimbing Lapangan, dan jajaran Pemerintah Kecamatan Ciwandan. Momen ini menjadi simbol dimulainya secara resmi pelaksanaan KKM Universitas Bina Bangsa Tahun 2026 di wilayah kecamatan tersebut, sekaligus menjadi awal dari rangkaian koordinasi yang akan terus berlangsung selama masa pengabdian.
`
    ],
  },
  {
    id: 'penerimaan-dan-presentasi-program-kerja-kkm-kelompok-15',
    title: 'Penerimaan dan Presentasi Program Kerja KKM Kelompok 15 di Kelurahan Kepuh',
    excerpt: 'Kelompok 15 Universitas Bina Bangsa menghadiri acara penerimaan resmi di Kelurahan Kepuh, Kecamatan Ciwandan, untuk mempresentasikan program kerja mereka.',
    image: 'images/kkm3.jpg',
    group: 'Kelompok 15',
    village: 'Kelurahan Kepuh',
    date: '13 Jul 2026',
    readTime: '6 menit baca',
    popular: 3,
    content: [
      `Kantor Kelurahan Kepuh, Kecamatan Ciwandan, menjadi tuan rumah acara penerimaan resmi mahasiswa Kuliah Kerja Mahasiswa (KKM) Kelompok 15 Universitas Bina Bangsa pada Minggu, 13 Juli 2026. Acara ini dihadiri oleh Lurah Kepuh beserta jajaran perangkat kelurahan, Dosen Pembimbing Lapangan (DPL), serta seluruh anggota Kelompok 15 yang akan menjalani masa pengabdian selama beberapa pekan ke depan di wilayah tersebut.
Sebagai bagian dari acara penerimaan, Kelompok 15 berkesempatan mempresentasikan rancangan program kerja yang telah disusun sebelum masa penerjunan. Presentasi mencakup lima bidang utama, yaitu pendidikan, lingkungan hidup dan ketahanan pangan, kesehatan masyarakat, ekonomi dan UMKM, serta bidang sosial, budaya, dan hukum. Setiap perwakilan bidang menjelaskan tujuan kegiatan, sasaran program, manfaat yang diharapkan bagi warga, serta gambaran waktu pelaksanaan di masing-masing bidang tersebut.
Pihak Kelurahan Kepuh menyambut baik program kerja yang dipaparkan dan memberikan sejumlah masukan agar pelaksanaannya lebih tepat sasaran. Lurah menekankan pentingnya penyesuaian program dengan kondisi riil masyarakat, misalnya potensi UMKM di sekitar Kampung Karet dan kebutuhan pendidikan anak-anak di lingkungan Combong. Masukan ini menjadi dasar bagi Kelompok 15 untuk menyempurnakan rencana kerja sebelum benar-benar dijalankan di lapangan.
Sebagai penutup acara, dilakukan sesi dokumentasi bersama antara mahasiswa KKM, DPL, Lurah, dan perangkat Kelurahan Kepuh. Dokumentasi ini menjadi simbol sinergi dan komitmen bersama antara pihak kampus dan pemerintah kelurahan dalam menyukseskan pelaksanaan KKM Universitas Bina Bangsa Tahun 2026, sekaligus menjadi tanda resmi dimulainya masa kerja Kelompok 15 di Kelurahan Kepuh.
`
    ],
  },
  {
    id: 'sumur-resapan-tegalrejo',
    title: 'Silaturahmi Mahasiswa KKM dalam Acara Aqiqah Warga Kampung Karet',
    excerpt: 'Mahasiswa KKM Kelompok 15 menghadiri acara aqiqah warga Kampung Karet, sekaligus mempererat hubungan dengan masyarakat setempat.',
    category: 'sosial',
    image: 'images/kkm4.jfif',
    group: 'Kelompok 15',
    village: 'Lingkungan Combong',
    date: '14 Jul 2026',
    readTime: '5 menit baca',
    popular: 4,
    content: [
      `Mahasiswa Kuliah Kerja Mahasiswa (KKM) Kelompok 15 Universitas Bina Bangsa menghadiri undangan acara aqiqah yang diselenggarakan oleh salah satu keluarga warga Kampung Karet, Kelurahan Kepuh, pada Senin, 14 Juli 2026. Kehadiran mahasiswa dalam acara ini merupakan bentuk partisipasi awal dalam kegiatan kemasyarakatan sejak resmi berada di lokasi KKM.
Dalam acara tersebut, mahasiswa KKM turut membantu kelancaran jalannya kegiatan sesuai kebutuhan di lokasi, mulai dari membantu penataan tempat, menyambut tamu, hingga membantu proses dokumentasi acara. Selain itu, mahasiswa juga menyampaikan ucapan selamat secara langsung kepada keluarga yang memiliki hajat sebagai bentuk penghormatan terhadap tradisi dan momen penting yang sedang dirayakan warga.
Kehadiran dalam acara adat dan keagamaan seperti aqiqah dinilai penting sebagai langkah awal membangun kedekatan emosional dengan masyarakat. Melalui interaksi langsung semacam ini, mahasiswa KKM Kelompok 15 dapat lebih mengenal karakter dan kebiasaan warga Kampung Karet, yang nantinya akan menjadi bekal berharga dalam merancang serta menjalankan program kerja yang lebih sesuai dengan kebutuhan masyarakat setempat.
`,
    ],
  },
  {
    id: 'posyandu-digital-realtime',
    title: 'Posyandu Digital: Data Tumbuh Kembang Balita Kini Terekam Real Time',
    excerpt: 'Aplikasi pencatatan sederhana bikinan mahasiswa membantu kader posyandu memantau status gizi balita tanpa lagi mengandalkan buku tulis.',
    category: 'kesehatan',
    image: 'images/olahragakkm.jpg.jpeg',
    group: 'Kelompok 15',
    village: 'Kelurahan Kepuh',
    date: '11 Jul 2026',
    readTime: '6 menit baca',
    popular: 5,
    content: [
      'Pencatatan berat dan tinggi badan balita di Posyandu Kelurahan Kepuh selama ini dilakukan manual di buku tulis, membuat kader kesulitan memantau tren pertumbuhan tiap anak dari bulan ke bulan. Mahasiswa KKM jurusan Informatika membuatkan aplikasi pencatatan sederhana berbasis web yang bisa diakses dari ponsel kader.',
      'Setiap data yang dimasukkan langsung terekam dan divisualisasikan sebagai grafik pertumbuhan per anak, memudahkan kader mengenali balita yang butuh perhatian gizi lebih.',
      'Uji coba selama sebulan menunjukkan waktu pencatatan yang tadinya bisa tiga jam kini rampung dalam dua puluh menit, sehingga kader punya lebih banyak waktu untuk edukasi langsung ke orang tua.',
      'Puskesmas kecamatan turut memantau perkembangan sistem ini dengan rencana mereplikasinya ke posyandu-posyandu lain di wilayah kerja mereka.',
    ],
  },
  {
    id: 'kerja-bakti-irigasi',
    title: 'Kerja Bakti Bersihkan 2 KM Saluran Irigasi, Sawah Tak Lagi Kekeringan',
    excerpt: 'Kolaborasi mahasiswa dan kelompok tani berhasil mengembalikan aliran air ke 40 hektare sawah yang sempat mangkrak.',
    category: 'lingkungan',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop',
    group: 'Kelompok 15',
    village: 'Kelurahan Kepuh',
    date: '16 Jul 2026',
    readTime: '4 menit baca',
    content: [
      'Saluran irigasi sepanjang dua kilometer yang menjadi urat nadi sawah di Kelurahan Kepuh sempat tersumbat sedimen dan tumbuhan liar selama bertahun-tahun, membuat sekitar 40 hektare sawah kekurangan pasokan air terutama di musim kemarau.',
      'Mahasiswa KKM Kelompok 15 mengajak kelompok tani setempat menggelar kerja bakti selama tiga akhir pekan berturut-turut untuk membersihkan saluran dari hulu ke hilir.',
      'Begitu aliran air kembali lancar, petani langsung merasakan dampaknya pada jadwal tanam yang sebelumnya sering molor karena menunggu giliran air.',
      'Kelompok tani berencana membentuk jadwal ronda kebersihan saluran rutin agar kondisi ini tidak kembali seperti semula setelah mahasiswa menyelesaikan masa KKM.',
    ],
  },
  {
    id: 'taman-baca-krajan',
    title: 'Taman Baca Lingkungan Karet Kini Punya 300 Judul Buku dari Donasi',
    excerpt: 'Sumbangan dari alumni dan warga kota membuat rak baca yang tadinya kosong kini penuh, kunjungan anak naik tiap sore.',
    category: 'pendidikan',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop',
    group: 'Kelompok 15',
    village: 'Lingkungan Karet',
    date: '15 Jul 2026',
    readTime: '4 menit baca',
    content: [
      'Rak baca di pojok balai Lingkungan Karet yang dulunya nyaris kosong kini berisi lebih dari 300 judul buku, mulai dari cerita bergambar hingga ensiklopedia anak. Semua berkat donasi yang digalang mahasiswa KKM lewat media sosial.',
      'Ajakan donasi buku yang awalnya ditujukan untuk kalangan alumni kampus ternyata juga disambut warga kota yang tidak memiliki hubungan langsung dengan program KKM ini.',
      'Sejak taman baca diramaikan koleksi baru, jumlah kunjungan anak-anak sore hari meningkat signifikan, bahkan beberapa orang tua ikut duduk membaca sambil menunggu anaknya.',
      'Pengurus karang taruna lingkungan akan melanjutkan pengelolaan taman baca ini dengan jadwal buka rutin tiga kali sepekan setelah mahasiswa menyelesaikan program.',
    ],
  },
  {
    id: 'pelatihan-kemasan-keripik',
    title: 'Pelatihan Kemasan Bikin Keripik Singkong Warga Kepuh Tembus Pasar Kota',
    excerpt: 'Desain label baru dan sertifikasi PIRT jadi kunci, penjualan mingguan pelaku usaha naik hingga 60 persen.',
    category: 'ekonomi-umkm',
    image: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=1200&auto=format&fit=crop',
    group: 'Kelompok 15',
    village: 'Kelurahan Kepuh',
    date: '14 Jul 2026',
    readTime: '5 menit baca',
    content: [
      'Keripik singkong buatan salah satu ibu rumah tangga di Kelurahan Kepuh sebenarnya sudah punya rasa yang digemari tetangga sekitar, namun kemasannya masih menggunakan plastik bening polos tanpa label. Mahasiswa KKM Kelompok 15 membantu mendesain ulang kemasan sekaligus mendampingi pengurusan izin PIRT.',
      'Label baru dibuat dengan identitas visual yang konsisten, mencantumkan komposisi, tanggal produksi, dan nomor izin edar agar layak dipajang di rak toko oleh-oleh kota.',
      'Setelah kemasan baru dan izin resmi didapat, pelaku usaha mulai dipercaya menitipkan produknya di sejumlah toko oleh-oleh, mendorong kenaikan penjualan mingguan hingga 60 persen dibanding sebelumnya.',
      'Mahasiswa kini menyusun panduan desain kemasan sederhana agar pelaku UMKM lain di kelurahan bisa meniru langkah serupa secara mandiri.',
    ],
  },
  {
    id: 'kebun-hidroponik-panen',
    title: 'Kebun Hidroponik Percontohan Siap Panen Perdana Pekan Depan',
    excerpt: 'Ditanam di lahan kosong kantor kelurahan, hasil panen rencananya dijual lewat koperasi dan sebagian dibagikan ke posyandu.',
    category: 'ekonomi-umkm',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop',
    group: 'Kelompok 15',
    village: 'Kelurahan Kepuh',
    date: '10 Jul 2026',
    readTime: '4 menit baca',
    content: [
      'Lahan kosong di samping kantor kelurahan yang selama ini ditumbuhi rumput liar disulap mahasiswa KKM menjadi kebun hidroponik percontohan berisi sawi, pakcoy, dan kangkung.',
      'Sistem yang digunakan sengaja dipilih sesederhana mungkin menggunakan pipa paralon dan botol bekas, agar mudah ditiru warga dengan modal terbatas.',
      'Panen perdana yang dijadwalkan pekan depan rencananya sebagian dijual melalui koperasi kelurahan dan sebagian lagi dibagikan gratis ke posyandu untuk mendukung asupan gizi balita.',
      'Kelompok tani muda kelurahan menyatakan tertarik mereplikasi sistem ini di pekarangan rumah masing-masing setelah melihat hasil panen perdana.',
    ],
  },
  {
    id: 'posyandu-aplikasi',
    title: 'Pencatatan Posyandu Beralih ke Aplikasi, Kader Tak Lagi Tulis Manual',
    excerpt: 'Aplikasi sederhana bikinan mahasiswa Informatika mempercepat rekap data dari 3 jam jadi 20 menit tiap posyandu.',
    category: 'kesehatan',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1200&auto=format&fit=crop',
    group: 'Kelompok 15',
    village: 'Kelurahan Kepuh',
    date: '9 Jul 2026',
    readTime: '4 menit baca',
    content: [
      'Kader posyandu di Kelurahan Kepuh kini tidak lagi menghabiskan waktu berjam-jam merekap catatan manual berat dan tinggi badan balita ke buku laporan bulanan.',
      'Aplikasi pencatatan yang dibuat mahasiswa KKM jurusan Informatika memungkinkan data langsung tersimpan begitu ditimbang, lengkap dengan grafik status gizi otomatis.',
      'Waktu rekap yang tadinya memakan hingga tiga jam kini bisa selesai dalam dua puluh menit, memberi kader lebih banyak waktu untuk mendampingi orang tua balita secara langsung.',
      'Pemerintah kelurahan mempertimbangkan mengalokasikan anggaran pemeliharaan aplikasi ini agar tetap berjalan setelah masa KKM mahasiswa berakhir.',
    ],
  },
  {
    id: 'sosialisasi-judi-online',
    title: 'Sosialisasi Anti Judi Online Diikuti 80 Warga, Ada Sesi Curhat Keluarga',
    excerpt: 'Selain edukasi risiko finansial, kegiatan ini membuka ruang konsultasi bagi keluarga yang terdampak.',
    category: 'sosial',
    image: 'https://images.unsplash.com/photo-1591123720164-a4f9d4513c65?q=80&w=1200&auto=format&fit=crop',
    group: 'Kelompok 15',
    village: 'Kelurahan Kepuh',
    date: '8 Jul 2026',
    readTime: '5 menit baca',
    content: [
      'Kantor kelurahan dipadati sekitar 80 warga yang hadir dalam sosialisasi bahaya judi online yang digelar mahasiswa KKM Kelompok 15 bekerja sama dengan perangkat kelurahan.',
      'Materi yang disampaikan tidak hanya seputar risiko finansial, tetapi juga cara mengenali tanda-tanda kecanduan pada anggota keluarga dan langkah awal yang bisa diambil.',
      'Di luar dugaan panitia, sesi tanya jawab berkembang menjadi ruang curhat bagi beberapa warga yang keluarganya terdampak langsung, sehingga panitia membuka sesi konsultasi tambahan secara tertutup.',
      'Perangkat kelurahan berencana menjadikan kegiatan semacam ini sebagai agenda rutin bekerja sama dengan puskesmas untuk pendampingan psikologis lanjutan.',
    ],
  },
  {
    id: 'plang-penunjuk-posko-kepuh',
    title: 'Plang Penunjuk Posko KKM 15 Terpasang di Akses JLS, Warga Kini Mudah Menemukan Lokasi',
    excerpt: 'Bersama karang taruna, mahasiswa memasang papan penunjuk arah dari Jalan Lingkar Selatan menuju posko dan titik kegiatan di Lingkungan Karet.',
    category: 'kabar-desa',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1200&auto=format&fit=crop',
    group: 'Kelompok 15',
    village: 'Kelurahan Kepuh',
    date: '7 Jul 2026',
    readTime: '4 menit baca',
    content: [
      'Akses menuju Lingkungan Karet dari arah Jalan Lingkar Selatan (JLS) selama ini cukup membingungkan bagi warga maupun tamu yang baru pertama kali berkunjung ke posko KKM 15, karena minimnya penanda arah di beberapa persimpangan.',
      'Mahasiswa KKM Kelompok 15 Universitas Bina Bangsa bersama karang taruna setempat memasang plang penunjuk arah di titik-titik strategis, mulai dari persimpangan JLS hingga area posko dan lokasi kegiatan penataan lingkungan.',
      'Selain memudahkan orientasi warga, plang ini juga dipakai untuk menandai titik-titik program kerja penataan lingkungan dan sistem drainase yang sedang berjalan di Kelurahan Kepuh.',
      'Karang taruna berencana melanjutkan pemasangan penanda serupa di gang-gang kecil sekitar Lingkungan Karet agar seluruh area posko lebih mudah diakses ke depannya.',
    ],
  },
];

function getArticleById(id){
  return ARTICLES.find(a => a.id === id) || null;
}

function getArticlesByCategory(slug){
  return ARTICLES.filter(a => a.category === slug);
}

function getRelatedArticles(article, max){
  return ARTICLES.filter(a => a.category === article.category && a.id !== article.id).slice(0, max || 3);
}

function getPopularArticles(max){
  return ARTICLES.filter(a => a.popular).sort((a,b) => a.popular - b.popular).slice(0, max || 4);
}

function searchArticles(query){
  const q = query.trim().toLowerCase();
  if(!q) return [];
  return ARTICLES.filter(a =>
    a.title.toLowerCase().includes(q) ||
    a.excerpt.toLowerCase().includes(q) ||
    categoryLabel(a.category).toLowerCase().includes(q) ||
    a.village.toLowerCase().includes(q)
  );
}
