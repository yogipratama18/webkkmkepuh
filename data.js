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
    category: 'kabar-desa',
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
    id: 'Silaturahmi-mahasiswa-kkm-aqiqah-warga-lingkungan-combong',
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
    id: 'Peresmian-pembangunan-jembatan-beton-di-lingkungan-cikandet-jintung',
    title: 'Peresmian Pembangunan Jembatan Beton di Lingkungan Cikandet Jantung',
    excerpt: 'Aplikasi pencatatan sederhana bikinan mahasiswa membantu kader posyandu memantau status gizi balita tanpa lagi mengandalkan buku tulis.',
    category: 'lingkungan',
    image: 'images/kkm5.jpg',
    group: 'Kelompok 15',
    village: 'Cikandet Jintung',
    date: '14 Jul 2026',
    readTime: '6 menit baca',
    popular: 5,
    content: [
      `Warga Lingkungan Cikandet Jantung, Kelurahan Kepuh, Kecamatan Ciwandan, menggelar acara peresmian pembangunan jembatan beton pada Senin, 14 Juli 2026. Pembangunan jembatan ini merupakan salah satu proyek infrastruktur yang telah lama dinantikan warga guna mempermudah akses transportasi antarwilayah di lingkungan tersebut, terutama pada musim hujan ketika jalur lama kerap sulit dilalui.
Mahasiswa Kuliah Kerja Mahasiswa (KKM) Kelompok 15 Universitas Bina Bangsa turut diundang dan hadir dalam acara peresmian tersebut sebagai bagian dari upaya membangun kedekatan dengan warga di lingkungan penempatan. Kehadiran mahasiswa dalam acara-acara pembangunan seperti ini juga menjadi kesempatan untuk memahami langsung kondisi infrastruktur dan kebutuhan masyarakat di Lingkungan Cikandet Jantung.
Jembatan beton yang diresmikan diharapkan dapat meningkatkan konektivitas antarwilayah, mempermudah aktivitas ekonomi warga, serta menunjang mobilitas anak-anak sekolah dan kegiatan sehari-hari lainnya. Pembangunan ini merupakan hasil kolaborasi antara pemerintah kelurahan, tokoh masyarakat, dan swadaya warga setempat.
Peresmian jembatan turut diisi dengan sesi dokumentasi dan sambutan singkat dari tokoh masyarakat setempat. Kehadiran mahasiswa KKM dalam momen ini menjadi bentuk dukungan moral terhadap upaya pembangunan yang dilakukan masyarakat secara mandiri, sekaligus memperkuat hubungan silaturahmi antara mahasiswa dan warga Lingkungan Cikandet Jantung sejak awal masa pengabdian.
`,
    ],
  },
  {
    id: 'Rapat-persiapan-peringatan-hut-ri-ke-81-dan-turnamen-bola-voli-di-kelurahan-kepuh',
    title: 'Rapat Persiapan Peringatan HUT RI ke-81 dan Turnamen Bola Voli di Kelurahan Kepuh',
    excerpt: 'Kolaborasi mahasiswa dan kelompok tani berhasil mengembalikan aliran air ke 40 hektare sawah yang sempat mangkrak.',
    category: 'kabar-desa',
    image: 'images/kkm6.jpg',
    group: 'Kelompok 15',
    village: 'Kelurahan Kepuh',
    date: '14 Jul 2026',
    readTime: '4 menit baca',
    content: [
      `Pemerintah Kelurahan Kepuh bersama tokoh masyarakat, panitia pelaksana, dan berbagai unsur terkait menggelar rapat persiapan kegiatan rutin tahunan dalam rangka memperingati Hari Ulang Tahun (HUT) Kemerdekaan Republik Indonesia ke-81 pada Senin, 14 Juli 2026. Mahasiswa Kuliah Kerja Mahasiswa (KKM) Kelompok 15 Universitas Bina Bangsa turut diundang untuk mengikuti rapat tersebut sebagai bagian dari koordinasi kegiatan kemasyarakatan di wilayah penempatan.
Salah satu agenda utama yang dibahas dalam rapat adalah rencana penyelenggaraan turnamen bola voli sebagai kegiatan unggulan dalam rangkaian peringatan HUT RI. Turnamen ini direncanakan diikuti oleh sekitar 40 tim dari berbagai lingkungan, dengan total kebutuhan anggaran diperkirakan mencapai Rp65.000.000. Sumber pendanaan diharapkan berasal dari kontribusi sekitar 30 perusahaan lokal yang beroperasi di sekitar wilayah Kelurahan Kepuh.
Dalam rapat juga terungkap adanya kendala pendanaan yang dihadapi panitia. Dijelaskan bahwa sejak masa pandemi COVID-19 hingga saat ini, dukungan dari sektor industri terhadap kegiatan kemasyarakatan mengalami penurunan signifikan, sehingga diperlukan upaya bersama dan strategi penggalangan dana yang lebih kreatif agar kebutuhan anggaran kegiatan dapat terpenuhi tanpa membebani masyarakat.
Panitia menyampaikan bahwa proposal kegiatan akan direvisi dan disempurnakan sebelum diajukan kepada calon sponsor. Pertandingan bola voli dijadwalkan mulai berlangsung pada Rabu, 15 Juli 2026, setelah waktu Zuhur, sementara acara puncak dan seremoni penutupan akan dilaksanakan pada akhir rangkaian kegiatan peringatan HUT RI.
Selain membahas turnamen, rapat juga menyinggung rencana jangka panjang mengenai pembinaan olahraga bola voli di Kelurahan Kepuh melalui pembentukan kelompok pembinaan bagi atlet senior. Diharapkan turnamen ini tidak hanya menjadi ajang olahraga dan mempererat tali silaturahmi antarwarga, tetapi juga memberikan dampak ekonomi positif bagi pelaku Usaha Mikro, Kecil, dan Menengah (UMKM) yang berjualan di sekitar lokasi pertandingan.
`,
    ],
  },
  {
    id: 'Program-kerja-kkm-kelompok-15',
    title: 'Evaluasi dan Persiapan Pelaksanaan Program Kerja KKM Kelompok 15',
    excerpt: 'Evaluasi program kerja KKM Kelompok 15 dan persiapan pelaksanaan kegiatan di wilayah penempatan.',
    category: 'pendidikan',
    image: 'images/kkm7.jpg',
    group: 'Kelompok 15',
    village: 'Posko KKM Lingkungan Karet',
    date: '15 Jul 2026',
    readTime: '4 menit baca',
    content: [
      `Seluruh anggota Kuliah Kerja Mahasiswa (KKM) Kelompok 15 Universitas Bina Bangsa menggelar rapat internal di Posko KKM, Kelurahan Kepuh, pada Selasa, 15 Juli 2026, mulai pukul 15.00 WIB. Rapat ini digelar untuk mengevaluasi hasil observasi lapangan yang telah dilakukan sejak hari-hari awal penempatan, sekaligus membahas perkembangan persiapan program kerja dari masing-masing divisi.
Dalam forum tersebut, setiap divisi memaparkan rencana kegiatan yang akan dilaksanakan selama masa KKM beserta usulan waktu pelaksanaannya. Penjadwalan disusun secara cermat agar tidak berbenturan dengan agenda resmi kelurahan maupun kegiatan-kegiatan masyarakat yang sudah berjalan, seperti kegiatan keagamaan, sosial, dan olahraga di lingkungan sekitar.
Rapat turut mengevaluasi kesiapan teknis dari setiap program kerja, meliputi kebutuhan perlengkapan, kelengkapan administrasi, hingga koordinasi dengan instansi atau pihak eksternal yang akan diajak bekerja sama dalam pelaksanaan kegiatan, seperti sekolah, Posyandu, dan pelaku UMKM setempat. Selain itu, dibahas pula pembagian anggota yang akan mewakili kelompok dalam berbagai undangan kegiatan dari pihak Kelurahan Kepuh.
Sebagai hasil akhir rapat, disepakati jadwal sementara pelaksanaan setiap program kerja, dan setiap divisi diminta untuk segera menyelesaikan persiapan teknis masing-masing agar kegiatan dapat berjalan sesuai rencana. Ketua kelompok turut mengingatkan seluruh anggota untuk senantiasa menjaga kekompakan, kedisiplinan, komunikasi, serta tanggung jawab dalam menjalankan setiap program kerja selama masa pengabdian di Kelurahan Kepuh.
`,
    ],
  },
  {
    id: 'Partisipasi-kkm-kelompok-15-turnamen-bola-voli',
    title: 'Partisipasi KKM Kelompok 15 dalam Turnamen Bola Voli HUT RI ke-81',
    excerpt: 'Desain label baru dan sertifikasi PIRT jadi kunci, penjualan mingguan pelaku usaha naik hingga 60 persen.',
    category: 'sosial',
    image: 'images/kkm8.jpg',
    group: 'Kelompok 15',
    village: 'Kelurahan Kepuh',
    date: '16 Jul 2026',
    readTime: '5 menit baca',
    content: [
      `Kuliah Kerja Mahasiswa (KKM) Kelompok 15 Universitas Bina Bangsa menerima undangan resmi dari pihak Kelurahan Kepuh untuk berpartisipasi dalam kegiatan turnamen bola voli yang diselenggarakan sebagai rangkaian peringatan Hari Ulang Tahun Kemerdekaan Republik Indonesia ke-81. Undangan tersebut disampaikan pada sore hari Selasa, 15 Juli 2026, sebagai bentuk keterlibatan mahasiswa dalam agenda besar masyarakat di lingkungan penempatan.
Turnamen bola voli ini merupakan salah satu kegiatan unggulan yang telah dipersiapkan panitia sejak beberapa hari sebelumnya, dengan target keikutsertaan sekitar 40 tim dari berbagai lingkungan di Kelurahan Kepuh. Keterlibatan mahasiswa KKM dalam kegiatan ini diharapkan dapat membantu kelancaran teknis penyelenggaraan, mulai dari dukungan tenaga hingga dokumentasi kegiatan.
Seluruh anggota KKM Kelompok 15 turut hadir dan berpartisipasi aktif dalam kegiatan tersebut sebagai bentuk dukungan nyata terhadap agenda masyarakat sekaligus mempererat hubungan silaturahmi dengan perangkat kelurahan, panitia pelaksana, dan warga Kelurahan Kepuh secara luas.
Kehadiran mahasiswa dalam turnamen ini menjadi salah satu wujud komitmen KKM Kelompok 15 untuk senantiasa terlibat aktif dalam berbagai agenda masyarakat selama masa pengabdian, sekaligus menunjukkan bahwa program KKM tidak hanya berfokus pada program kerja formal, tetapi juga pada partisipasi sosial dalam kehidupan bermasyarakat sehari-hari.
`,
    ],
  },
  {
    id: 'sowan-dan-sosialisasi-program-kerja-kkm-ke-lingkungan-combong-walikukun-dan-kampung-karet',
    title: 'Sowan dan Sosialisasi Program Kerja KKM ke Lingkungan Combong, Walikukun, dan Kampung Karet',
    excerpt: 'Kegiatan sosialisasi di tiga lingkungan sekitar Kelurahan Kepuh.',
    category: 'sosial',
    image: 'images/kkm9.jpg',
    group: 'Kelompok 15',
    village: 'Combong, Walikukun, Kampung Karet',
    date: '16 Jul 2026',
    readTime: '10 menit baca',
    content: [
      `Kuliah Kerja Mahasiswa (KKM) Kelompok 15 Universitas Bina Bangsa melaksanakan kegiatan sowan atau silaturahmi ke tiga lingkungan sekaligus, yaitu Lingkungan Combong, Walikukun, dan Kampung Karet di Kelurahan Kepuh, pada Rabu malam, 16 Juli 2026, mulai pukul 20.00 WIB. Kegiatan ini dilakukan sebagai bentuk perkenalan resmi mahasiswa kepada Ketua RT, tokoh masyarakat, tokoh pemuda, dan tokoh pemudi di masing-masing lingkungan.
Dalam kunjungan tersebut, mahasiswa menyampaikan maksud dan tujuan pelaksanaan KKM Kelompok 15 di Kelurahan Kepuh, sekaligus memaparkan garis besar rencana program kerja yang telah disusun. Penyampaian ini bertujuan agar masyarakat memahami arah kegiatan mahasiswa selama masa pengabdian dan diharapkan dapat memberikan dukungan penuh terhadap pelaksanaannya.
Diskusi mendalam turut dilakukan bersama tokoh masyarakat di Lingkungan Combong mengenai penyesuaian program kerja dengan kebutuhan dan kondisi riil warga setempat. Sejumlah masukan konkret disampaikan, di antaranya usulan dari perwakilan pemuda agar program kerja bidang pendidikan berupa kegiatan literasi anak dilaksanakan tiga kali dalam seminggu, menyesuaikan jadwal belajar anak-anak agar kegiatan dapat berjalan lebih efektif.
Selain bidang pendidikan, perwakilan pemuda dan pemudi juga memberikan usulan kepada bidang UMKM untuk mengadakan pelatihan pembuatan kerajinan berupa piring dari lidi daun kelapa, sebagai salah satu program yang dinilai memiliki nilai ekonomi sekaligus memanfaatkan potensi lokal yang melimpah di wilayah tersebut. Untuk pelaksanaan program pendidikan, koordinasi dengan pihak sekolah di Lingkungan Combong akan dilakukan melalui Ibu Wiwin, seorang guru setempat yang bersedia menjadi penghubung antara mahasiswa KKM dan pihak sekolah.
Sebagai penutup kegiatan sowan, tokoh masyarakat menyampaikan pesan penting agar setiap permasalahan yang mungkin timbul selama pelaksanaan KKM diselesaikan terlebih dahulu secara musyawarah di tingkat kelompok dan lingkungan. Apabila permasalahan belum dapat diselesaikan di tingkat tersebut, barulah dikoordinasikan lebih lanjut dengan pihak Kelurahan Kepuh. Pertemuan ditutup dengan harapan agar seluruh program kerja KKM Kelompok 15 dapat terlaksana dengan baik melalui kerja sama yang erat antara mahasiswa dan masyarakat.
`,
    ],
  },
  {
    id: 'gotong-royong-membersihkan-tiga-masjid-di-kelurahan-kepuh',
    title: 'Gotong Royong Membersihkan Tiga Masjid di Kelurahan Kepuh',
    excerpt: 'Mahasiswa KKM Kelompok 15 turut serta dalam gotong royong membersihkan tiga masjid di Kelurahan Kepuh.',
    category: 'lingkungan',
    image: 'images/kkm10.jpg',
    group: 'Kelompok 15',
    village: 'Kampung Karet',
    date: '17 Jul 2026',
    readTime: '4 menit baca',
    content: [
       `Seluruh anggota Kuliah Kerja Mahasiswa (KKM) Kelompok 15 Universitas Bina Bangsa mengikuti kegiatan gotong royong membersihkan tiga masjid yang tersebar di wilayah Kelurahan Kepuh, Kecamatan Ciwandan, pada Kamis, 17 Juli 2026, mulai pukul 09.00 WIB. Kegiatan ini digelar bersama warga setempat sebagai bentuk kepedulian terhadap kebersihan dan kenyamanan tempat ibadah di lingkungan Kampung Karet dan sekitarnya.
Rangkaian kegiatan meliputi penyapuan lantai, pengepelan, pembersihan kaca jendela, mimbar, rak Al-Qur'an, serta area tempat wudu di setiap masjid yang dikunjungi. Selain bagian dalam masjid, halaman dan lingkungan sekitar juga dibersihkan dari sampah, daun kering, serta rumput liar yang mulai tumbuh tidak beraturan, sehingga suasana masjid menjadi lebih rapi dan nyaman digunakan untuk beribadah.
Anggota KKM bersama warga setempat membagi tugas secara merata agar seluruh area dapat dibersihkan secara menyeluruh dan pekerjaan dapat selesai tepat waktu. Pembagian kerja ini mencerminkan semangat kolaborasi antara mahasiswa dan masyarakat dalam menjaga fasilitas umum yang menjadi pusat kegiatan keagamaan warga.
Kegiatan gotong royong ini mendapat sambutan positif dari pengurus Dewan Kemakmuran Masjid (DKM) serta masyarakat sekitar, karena dinilai membantu meringankan beban perawatan rutin masjid. Melalui kegiatan ini, hubungan antara mahasiswa KKM dan warga Kelurahan Kepuh semakin erat, sekaligus diharapkan dapat menumbuhkan kesadaran masyarakat untuk terus menjaga kebersihan tempat ibadah secara berkelanjutan di masa mendatang.
`,
    ],
  },
  {
    id: 'senam-pagi-bersama-masyarakat',
    title: 'Senam Pagi Bersama Masyarakat di Lapangan Voli Kampung Karet',
    excerpt: 'Mahasiswa KKM Kelompok 15 mengadakan kegiatan senam pagi bersama masyarakat di lapangan voli Kampung Karet.',
    category: 'kesehatan',
    image: 'images/kkm11.jpg',
    group: 'Kelompok 15',
    village: 'Kampung Karet',
    date: '18 Jul 2026',
    readTime: '5 menit baca',
    content: [
      `Kuliah Kerja Mahasiswa (KKM) Kelompok 15 Universitas Bina Bangsa menggelar kegiatan senam pagi bersama masyarakat di Lapangan Voli Kampung Karet, Kelurahan Kepuh, pada Jumat, 18 Juli 2026, mulai pukul 07.00 WIB. Kegiatan ini merupakan salah satu program kerja bidang kesehatan yang bertujuan meningkatkan pola hidup sehat warga sekaligus mempererat silaturahmi antara mahasiswa dan masyarakat setempat.
Rangkaian kegiatan senam diawali dengan gerakan pemanasan untuk mempersiapkan tubuh peserta, dilanjutkan dengan senam inti yang diikuti oleh masyarakat, mulai dari anak-anak, remaja, hingga ibu-ibu rumah tangga, dengan antusiasme yang tinggi. Kegiatan kemudian ditutup dengan gerakan pendinginan (cooling down) agar kondisi tubuh peserta kembali normal setelah beraktivitas fisik.
Selepas senam, mahasiswa KKM bersama masyarakat melakukan sesi dokumentasi serta pembuatan konten sebagai bentuk publikasi kegiatan, baik untuk keperluan laporan KKM maupun untuk media sosial kelompok. Dokumentasi ini juga menjadi sarana untuk memperkenalkan program-program KKM Kelompok 15 kepada khalayak yang lebih luas.
Sebagai penutup rangkaian kegiatan, dilaksanakan sesi makan buah bersama sebagai bentuk kampanye hidup sehat dan menjaga asupan gizi masyarakat. Kegiatan ini diharapkan dapat menjadi kebiasaan positif yang terus dilanjutkan oleh warga Kampung Karet secara mandiri, bahkan setelah masa KKM Kelompok 15 berakhir.
`,
    ],
  },
  {
    id: 'Kegiatan Literasi Anak oleh KKM Kelompok 15 di Kampung Karet',
    title: 'Kegiatan Literasi Anak oleh KKM Kelompok 15 di Kampung Karet',
    excerpt: 'Mahasiswa KKM Kelompok 15 mengadakan kegiatan literasi anak di Kampung Karet.',
    category: 'pendidikan',
    image: 'images/kkm12.jpg',
    group: 'Kelompok 15',
    village: 'Kampung Karet',
    date: '18 Jul 2026',
    readTime: '4 menit baca',
    content: [
      `Kuliah Kerja Mahasiswa (KKM) Kelompok 15 Universitas Bina Bangsa menyelenggarakan kegiatan literasi anak di Kampung Karet, Kelurahan Kepuh, pada siang hari Jumat, 18 Juli 2026. Kegiatan ini merupakan salah satu program kerja unggulan bidang pendidikan yang dirancang untuk meningkatkan minat belajar anak-anak di lingkungan tersebut melalui pendekatan yang menyenangkan dan interaktif.
Kegiatan diawali dengan sesi perkenalan, di mana setiap anak diminta menyebutkan nama serta cita-cita yang ingin mereka raih di masa depan. Sesi ini dirancang khusus untuk melatih keberanian berbicara di depan umum sekaligus menumbuhkan rasa percaya diri anak-anak sejak usia dini.
Selanjutnya, kegiatan literasi diisi dengan berbagai metode pembelajaran, mulai dari belajar menghitung, belajar sambil bernyanyi, hingga permainan tebak-tebakan edukatif yang dikemas secara interaktif. Metode ini dipilih agar anak-anak tidak merasa bosan dan tetap antusias mengikuti seluruh rangkaian kegiatan hingga selesai.
Seluruh momen kegiatan literasi didokumentasikan melalui foto dan video bersama anak-anak sebagai bentuk publikasi kegiatan sekaligus kenang-kenangan pelaksanaan KKM. Bidang Pendidikan turut merencanakan agar kegiatan literasi semacam ini dapat dilaksanakan secara rutin selama masa KKM, sebagai bagian dari upaya jangka panjang meningkatkan mutu pendidikan anak-anak di Kelurahan Kepuh.
`,
    ],
  },
  {
    id: 'literasi-dan-kreativitas-kkm-kelompok-15-di-sd-cipaot',
    title: 'Literasi dan Kreativitas KKM Kelompok 15 di SD Cipaot: Membangun Generasi Kreatif dan Peduli Lingkungan',
    excerpt: 'Mahasiswa KKM Kelompok 15 mengadakan kegiatan literasi dan kreativitas di SD Cipaot, Kampung Karet, untuk membangun generasi kreatif dan peduli lingkungan.',
    category: 'pendidikan',
    image: 'images/kkm13.jpg',
    group: 'Kelompok 15',
    village: 'Kampung Cipaot',
    date: '21 Jul 2026',
    readTime: '4 menit baca',
    content: [
      `SD Cipaot, Kelurahan Kepuh, Kecamatan Ciwandan, menjadi lokasi pelaksanaan Program Kerja Bidang Pendidikan bertema "Literasi dan Kreativitas" yang digelar oleh KKM Kelompok 15 Universitas Bina Bangsa pada Selasa, 21 Juli 2026. Kegiatan yang berlangsung mulai pukul 08.00 WIB ini diikuti dengan antusias oleh para siswa dari berbagai tingkatan kelas. Program ini dirancang untuk mengembangkan kemampuan literasi, kreativitas, serta kepedulian lingkungan sejak dini melalui berbagai aktivitas yang interaktif dan menyenangkan.
Kegiatan diawali dengan pembukaan dan perkenalan mahasiswa KKM kepada para siswa, dilanjutkan dengan penyampaian tujuan pelaksanaan program. Suasana hangat dan penuh semangat terlihat saat mahasiswa menyapa para siswa yang telah berkumpul dengan penuh rasa ingin tahu. Program ini menjadi salah satu bentuk pengabdian mahasiswa di bidang pendidikan yang diharapkan dapat memberikan pengalaman belajar yang berbeda dan bermakna bagi anak-anak SD Cipaot.
Di kelas II SD, mahasiswa KKM mengajak siswa mengikuti kegiatan kreativitas membuat bunga matahari menggunakan kertas yang telah disiapkan. Anak-anak diberikan kebebasan untuk menghias dan menyusun hasil karyanya sesuai dengan imajinasi masing-masing. Kegiatan ini bertujuan melatih keterampilan motorik halus, mengembangkan imajinasi, serta membangun rasa percaya diri anak melalui hasil karya yang mereka buat sendiri. Para siswa terlihat sangat gembira dan bersemangat saat menggunting, menempel, dan menghias bunga matahari kreasi mereka.
Setelah sesi kreativitas selesai, mahasiswa KKM mengadakan permainan edukatif berupa tebak-tebakan dan kuis seputar Pancasila serta berhitung sederhana. Metode ini dipilih untuk membuat proses pembelajaran lebih menarik dan tidak membosankan. Siswa yang berhasil menjawab pertanyaan dengan benar diberikan hadiah sebagai bentuk apresiasi dan motivasi agar lebih semangat dalam belajar. Antusiasme siswa terlihat dari tingginya partisipasi mereka dalam menjawab setiap pertanyaan yang diajukan.
Kegiatan dilanjutkan dengan pembuatan kolase dari bahan daur ulang seperti kertas bekas dan bahan lain yang masih dapat dimanfaatkan. Masing-masing kelas mulai dari kelas II hingga kelas VI mengirimkan lima orang perwakilan untuk berkumpul di satu ruangan. Melalui kegiatan ini, siswa diajak untuk meningkatkan kreativitas sekaligus menumbuhkan kepedulian terhadap lingkungan dengan memanfaatkan barang bekas menjadi karya seni yang bernilai. Mahasiswa KKM memberikan pendampingan selama proses pembuatan sehingga suasana belajar berlangsung aktif, menyenangkan, dan interaktif.
Seluruh siswa mengikuti kegiatan dengan pemahaman dan keterampilan yang baik dalam menyelesaikan hasil kolase. Kegiatan ditutup dengan sesi dokumentasi dan foto bersama antara mahasiswa KKM, guru, dan para siswa sebagai bentuk dokumentasi pelaksanaan Program Kerja Bidang Pendidikan yang telah berjalan sukses.
Pada pukul 13.00 WIB, KKM Kelompok 13, 14, dan 15 berkumpul di Posko KKM Kelompok 15 bersama Dosen Pembimbing Lapangan (DPL) untuk melaksanakan rapat evaluasi mingguan. Dalam rapat tersebut, masing-masing kelompok memaparkan perkembangan program kerja yang telah dilaksanakan selama satu minggu, menyampaikan capaian kegiatan, kendala yang dihadapi di lapangan, serta berdiskusi mengenai solusi dan strategi agar pelaksanaan program kerja selanjutnya dapat berjalan lebih optimal. Rapat evaluasi ditutup dengan arahan dan masukan dari DPL agar seluruh kelompok KKM tetap menjaga komunikasi, kerja sama tim, serta meningkatkan kualitas pelaksanaan program kerja yang akan datang.
Kegiatan Literasi dan Kreativitas di SD Cipaot ini menjadi bukti nyata kontribusi mahasiswa KKM Kelompok 15 dalam memajukan dunia pendidikan di Kelurahan Kepuh. Dengan semangat berbagi dan menginspirasi, mereka berharap kegiatan serupa dapat terus dilaksanakan untuk mencetak generasi muda yang kreatif, cerdas, dan peduli terhadap lingkungan.`,
    ],
  },
  {
    id: 'Pelaksanaan-Program-Literasi-dan-Kreativitas-KKM-Kelompok-15-di-PAUD-Hikmatul-Ulum',
    title: 'Pelaksanaan Program Literasi dan Kreativitas KKM Kelompok 15 di PAUD Hikmatul Ulum',
    excerpt: 'Mahasiswa KKM Kelompok 15 mengadakan kegiatan literasi anak di PAUD Hikmatul Ulum.',
    category: 'pendidikan',
    image: 'images/kkm14.jpg',
    group: 'Kelompok 15',
    village: 'Kampung Cipaot',
    date: '18 Jul 2026',
    readTime: '4 menit baca',
    content: [
      `Mahasiswa Kuliah Kerja Mahasiswa (KKM) Kelompok 15 Universitas Bina Bangsa melaksanakan Program Kerja Bidang Pendidikan di PAUD Hikmatul Ulum, Kelurahan Kepuh, Kecamatan Ciwandan, pada Rabu, 22 Juli 2026. Kegiatan ini mengusung tema “Literasi dan Kreativitas” dengan tujuan meningkatkan semangat belajar, kreativitas, serta kemampuan motorik anak-anak sejak usia dini.
Kegiatan diawali dengan perkenalan seluruh anggota KKM kepada peserta didik agar tercipta suasana belajar yang akrab dan menyenangkan. Sebelum memasuki materi utama, mahasiswa mengajak anak-anak mengikuti permainan tebak-tebakan dan tanya jawab sederhana. Anak-anak yang berani menjawab pertanyaan diberikan hadiah sebagai bentuk apresiasi untuk meningkatkan rasa percaya diri dan motivasi belajar.
Pada kegiatan inti, peserta didik belajar mengenal anggota tubuh melalui media gambar. Setiap anak diberikan lembar kerja yang berisi gambar anggota tubuh, kemudian diminta menggunting dan mencocokkan bagian-bagian tubuh pada posisi yang benar. Melalui aktivitas tersebut, anak-anak dilatih untuk mengenal anggota tubuh, meningkatkan konsentrasi, serta mengembangkan kemampuan motorik halus dan koordinasi mata dengan tangan. Seluruh kegiatan berlangsung dengan antusias didampingi oleh mahasiswa KKM hingga setiap peserta mampu menyelesaikan tugasnya dengan baik.
Pada sore harinya, kegiatan dilanjutkan dengan pelaksanaan Les Sore di Posko KKM Kelompok 15 yang mengangkat tema “Diriku”. Anak-anak diajak membuat karya kreatif dengan menghias gambar wajah menggunakan potongan kertas berwarna sebagai rambut, kemudian melengkapi gambar dengan mata, hidung, dan mulut sesuai imajinasi masing-masing. Setelah selesai, setiap peserta menuliskan nama pada hasil karyanya sebagai bagian dari pengenalan identitas diri.
Sebagai penutup, mahasiswa KKM kembali mengadakan permainan tebak-tebakan edukatif yang disambut antusias oleh seluruh peserta. Anak-anak yang berhasil menjawab pertanyaan memperoleh hadiah sebagai bentuk penghargaan sekaligus motivasi agar semakin semangat dalam belajar. Kegiatan ini diharapkan dapat memberikan pengalaman belajar yang menyenangkan serta mempererat hubungan antara mahasiswa KKM dengan masyarakat, khususnya peserta didik di PAUD Hikmatul Ulum.`,
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
