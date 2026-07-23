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
    id: 'bank-sampah-sukamaju',
    title: 'Bank Sampah Rintisan Mahasiswa KKM Ubah Kebiasaan 3 Lingkungan di Kelurahan Kepuh',
    excerpt: 'Program 45 hari itu kini ditiru dua kelurahan tetangga. Warga menukar sampah terpilah dengan tabungan, sementara omzet pengepul naik hampir dua kali lipat.',
    category: 'kabar-desa',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
    group: 'Kelompok 15',
    village: 'Kelurahan Kepuh',
    date: '17 Jul 2026',
    readTime: '8 menit baca',
    featured: true,
    popular: 1,
    content: [
      'Apa yang dimulai sebagai program kerja sampingan kini menjadi kebiasaan baru bagi warga tiga lingkungan di Kelurahan Kepuh. Bank sampah rintisan mahasiswa KKM Kelompok 15 mencatat lebih dari 600 kilogram sampah terpilah dalam enam pekan pertama beroperasi.',
      'Sistemnya sederhana: warga menimbang sampah yang sudah dipilah di rumah, lalu nilainya dicatat sebagai tabungan yang bisa diambil sewaktu-waktu atau ditukar kebutuhan pokok saat lebaran. Ketua kelompok tani setempat menyebut kebiasaan memilah sampah kini mulai menular ke anak-anak yang diajak orang tuanya menimbang sampah sepulang sekolah.',
      'Dampaknya juga terasa di rantai ekonomi warga. Pengepul sampah keliling yang biasanya hanya mengangkut sampah campur kini mendapat pasokan sampah terpilah dengan harga jual lebih tinggi, membuat omzet mingguan mereka naik hampir dua kali lipat.',
      'Melihat hasil ini, dua kelurahan tetangga sudah mengirim perwakilan untuk belajar langsung sistem pencatatan dan skema tabungan yang dipakai. Mahasiswa KKM berencana menyusun panduan sederhana agar program ini bisa direplikasi tanpa pendampingan langsung.',
    ],
  },
  {
    id: 'kelas-coding-lingkungan-karet',
    title: 'Kelas Coding Dasar untuk Anak Lingkungan Karet Diminati, Kelas Dibuka Dua Kali Sehari',
    excerpt: 'Awalnya hanya diikuti 12 anak, kini kelas coding sore di balai warga harus dibagi dua sesi karena peminat terus bertambah.',
    category: 'pendidikan',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop',
    group: 'Kelompok 15',
    village: 'Lingkungan Karet',
    date: '14 Jul 2026',
    readTime: '5 menit baca',
    popular: 2,
    content: [
      'Balai Lingkungan Karet yang biasanya sepi di sore hari kini ramai oleh suara tawa anak-anak yang belajar logika pemrograman dasar lewat permainan blok visual. Kelas yang digagas mahasiswa KKM jurusan Informatika ini awalnya hanya diikuti 12 anak pada pekan pertama.',
      'Memasuki minggu ketiga, jumlah peserta membengkak hingga harus dibagi menjadi dua sesi: pukul empat sore untuk anak sekolah dasar kelas bawah, dan pukul lima untuk kelas atas. Materi disusun sederhana, dari mengenal urutan perintah hingga membuat animasi sederhana.',
      'Orang tua menyambut baik kegiatan ini karena memberi alternatif kegiatan positif selain bermain gawai tanpa arah. Beberapa bahkan meminta agar materi berlanjut dengan pengenalan mengetik sepuluh jari.',
      'Mahasiswa berencana menyusun modul cetak sederhana agar kegiatan ini bisa dilanjutkan oleh karang taruna lingkungan setelah masa KKM berakhir.',
    ],
  },
  {
    id: 'legalitas-umkm-marketplace',
    title: 'Mahasiswa Bantu Legalitas 15 UMKM, Kini Bisa Jual Lewat Marketplace',
    excerpt: 'Pendampingan pengurusan NIB dan sertifikasi halal membuka jalan bagi pelaku usaha kelurahan untuk naik kelas ke pasar digital.',
    category: 'ekonomi-umkm',
    image: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=1200&auto=format&fit=crop',
    group: 'Kelompok 15',
    village: 'Kelurahan Kepuh',
    date: '13 Jul 2026',
    readTime: '6 menit baca',
    popular: 3,
    content: [
      'Selama ini banyak pelaku usaha rumahan di Kelurahan Kepuh enggan berjualan online karena belum memiliki izin usaha resmi. Mahasiswa KKM Kelompok 15 turun tangan mendampingi proses pengurusan Nomor Induk Berusaha secara daring lewat sistem OSS.',
      'Total 15 pelaku UMKM berhasil didampingi hingga tuntas, mulai dari produsen keripik, kerupuk, hingga kerajinan anyaman bambu. Beberapa di antaranya sekaligus dibantu mengurus sertifikasi halal self-declare untuk produk makanan.',
      'Setelah legalitas rampung, mahasiswa melanjutkan dengan pelatihan singkat membuat akun toko di marketplace, termasuk cara memotret produk dan menulis deskripsi yang menarik pembeli.',
      'Salah satu pelaku usaha keripik singkong mengaku sudah menerima pesanan pertama dari luar kota hanya dalam minggu pertama toko online-nya aktif.',
    ],
  },
  {
    id: 'sumur-resapan-tegalrejo',
    title: 'Sumur Resapan Kolektif Redam Banjir Musiman di Lingkungan Karet',
    excerpt: 'Delapan titik sumur resapan dibangun swadaya bersama warga untuk mengatasi genangan yang tiap musim hujan merendam jalan lingkungan.',
    category: 'lingkungan',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop',
    group: 'Kelompok 15',
    village: 'Lingkungan Karet',
    date: '12 Jul 2026',
    readTime: '5 menit baca',
    popular: 4,
    content: [
      'Setiap musim hujan tiba, ruas jalan utama Lingkungan Karet hampir selalu tergenang akibat drainase yang tak lagi mampu menampung air larian dari lahan di sekitarnya. Mahasiswa KKM Kelompok 15 bersama warga membangun delapan titik sumur resapan di sepanjang jalur genangan.',
      'Pembangunan dilakukan secara gotong royong selama dua pekan, memanfaatkan bahan lokal seperti batu kali dan pipa bekas yang disusun ulang. Setiap sumur resapan dirancang mampu menampung dan meresapkan air hingga ratusan liter sebelum meluap ke jalan.',
      'Hasilnya mulai terlihat pada hujan deras pertama pasca pembangunan, genangan yang biasanya bertahan berjam-jam kini surut dalam waktu singkat.',
      'Warga berencana menambah titik resapan di musim kemarau mendatang agar cakupan penanganan banjir musiman semakin luas.',
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
