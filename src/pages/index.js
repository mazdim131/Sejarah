const content = document.getElementById("content");

function btnSearch() {
  let searchPage = document.getElementById("searchPage");
  valueSearch = searchPage.value.toLowerCase();

if (valueSearch == "tentang") {
    window.location.href = "/src/pages/structure/about.html";
    searchPage.value = "";
  } else if (valueSearch == "panduan") {
    window.location.href = "/src/pages/structure/guide.html";
    searchPage.value = "";
  } else if (valueSearch == "kontak") {
    window.location.href = "/src/pages/structure/contact.html";
  } else if (valueSearch == "beranda") {
    window.location.href = "/index.html";
  } else {
    alert("Halaman tidak tersedia");
    searchPage.value = "";
  }
}

const tempatWisata = [
  {
    name: "Kebun Raya Bogor",
    img: "kebunRaya.jpeg",
    sub: "Jejak Konservasi Bogor",
    interaction: "kebunRayaBogor()",
  },
  {
    name: "Bunker Gumati",
    img: "bunkerGumati.png",
    sub: "Peninggalan Belanda",
    interaction: "bunkerGumati()",
  },
  {
    name: "Batu Dakon",
    img: "batuDakon.jpg",
    sub: "Artefak Batu Kuno",
    interaction: "batuDakon()",
  },
  {
    name: "GPIB Zebaoth",
    img: "gereja.webp",
    sub: 'Dikenal "Gereja Ayam"',
    interaction: "gereja()",
  },
  {
    name: "Overloop Kelder",
    img: "kelder.jpeg",
    sub: "Sisa Infrastruktur Kolonial",
    interaction: "overloopKelder()",
  },
  {
    name: "Makam Pajajaran",
    img: "makamkerajaan.webp",
    sub: "Peninggalan Kerajaan Sunda",
    interaction: "makamPajajaran()",
  },
  {
    name: "Makam Mbah Dalem",
    img: "makamMbahDalem.jpeg",
    sub: "Makam Legendaris",
    interaction: "makamMbahDalem()",
  },
  {
    name: "Stasiun Bogor",
    img: "stasiunBogor.jpg",
    sub: "Peninggalan Transportasi",
    interaction: "stasiunBogor()",
  },
];

function kebunRayaBogor() {
  let detail = document.getElementById("detail");
  window.location.href = "#detail";
  detail.innerHTML = `
        <div class="detail-section">
        <div class="peta-container mb-4">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126819.888210978!2d106.64903599726561!3d-6.631827899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5c412a67abb%3A0x75f23c6b45a37ee5!2sBogor%20Botanical%20Gardens!5e0!3m2!1sen!2sid!4v1776668007198!5m2!1sen!2sid" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
                <p class="deskripsi-texto animate__animated animate__fadeInDown">
        Di balik kerimbunan pepohonan purba dan suasana hening yang menyelimuti area Kebun Raya Bogor, tersembunyi sebuah kawasan konservasi bersejarah yang dahulu merupakan hutan buatan bernama Samida peninggalan era Pajajaran. Situs ini bukan sekadar taman botani biasa, melainkan pusat penelitian tertua di Asia Tenggara yang menghubungkan kita dengan kekayaan hayati serta warisan kolonial masa lalu.        </p>

        <div class="container mt-4 animate__animated animate__fadeInDown">
  <div class="row">
    <div class="col-md-4 mb-3">
      <div class="info-kartu">
  <div class="card-body">
    <h5 class="card-title">Asal Usul</h5>
    <p class="card-text">
      Dahulu merupakan hutan buatan (Samida) yang dibangun oleh Prabu Siliwangi untuk konservasi kayu langka.
      Secara resmi didirikan pada tahun 1817 oleh Caspar Georg Carl Reinwardt dengan nama <code>'s Lands Plantentuin te Buitenzorg'</code>.
    </p>
  </div>
</div>
    </div>
    <div class="col-md-4 mb-3">
      <div class="info-kartu">
  <div class="card-body">
    <h5 class="card-title">Perkembangan</h5>
    <p class="card-text">
      <b>Masa Kerajaan</b>: Sebagai kawasan hutan lindung.<br>
      <b>Masa Kolonial</b>: Pusat penelitian tanaman tropis dan komoditas ekonomi oleh Belanda.<br>
      <b>Era Modern</b>: Menjadi lembaga penelitian botani terkemuka sekaligus destinasi wisata sejarah dan edukasi dunia.
    </p>
  </div>
</div>
    </div>
    <div class="col-md-4 mb-3">
      <div class="info-kartu">
  <div class="card-body">
    <h5 class="card-title">Bukti Sejarah</h5>
    <p class="card-text">
      <b>Arsip</b>: Tercatat dalam sejarah botani internasional sebagai salah satu kebun raya tertua di Asia Tenggara.<br>
      <b>Fisik</b>: Keberadaan Prasasti Reinwardt dan koleksi ribuan jenis tanaman asli dari berbagai belahan dunia.
    </p>
  </div>
</div>
    </div>
  </div>
</div>
<div class="pemisah-garis container-sm"></div>

    <div class="container px-4">
  <div class="row gx-5">
    <div class="col-md-6 mb-4">
      <div class="p-3">
        <h2 class="bagian-judul animate__animated animate__fadeInDown mt-4">Konteks Waktu</h2>
        <p>
          Kebun Raya Bogor memiliki akar sejarah yang sangat panjang, dimulai dari abad ke-15 pada masa Kerajaan Sunda sebagai area Samida. Namun, secara administratif modern, kebun ini diresmikan pada 18 Mei 1817 oleh Pemerintah Hindia Belanda. Penetapan ini menjadikannya sebagai tonggak penting perkembangan ilmu botani dan riset pertanian di Indonesia.
        </p>

      </div>
    </div>
    <div class="col-md-6 mb-4">
      <div class="p-3">
        <h2 class="bagian-judul animate__animated animate__fadeInDown mt-4">Fungsi Awal</h2>
        <p>
          Awalnya, kawasan ini diperuntukkan sebagai hutan buatan untuk keperluan upacara adat dan perlindungan bibit pohon kayu yang berharga. Setelah dikelola oleh Reinwardt, fungsinya beralih menjadi kebun percobaan bagi berbagai tanaman produktif seperti kelapa sawit dan kina, yang nantinya membawa dampak besar bagi ekonomi perkebunan di Indonesia.
        </p>

      </div>
    </div>

    <div class="accordion perluas-item" id="accordionExample" data-bs-theme="dark">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Perkembangan Situs
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Masa Pajajaran: Digunakan sebagai hutan lindung sakral untuk menjaga ekosistem wilayah Bogor.<br>
        Era Reinwardt: Transformasi menjadi institusi penelitian botani yang mengoleksi tanaman dari seluruh nusantara.<br>
        Masa Sekarang: Berfungsi sebagai paru-paru kota, pusat konservasi ex-situ, dan lokasi wisata edukasi utama.<br>
        🏛️ Arsitektur & Lanskap: Penataan taman yang mengikuti estetika Inggris (English Landscape Garden) yang khas dan rapi.<br>
        ⚔️ Peristiwa Penting: Menjadi cikal bakal berdirinya berbagai institusi ilmiah di Indonesia seperti IPB dan Museum Zoologi
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Nilai Sosial & Cerita Rakyat
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
 1. Nilai Sosial: Menjadi ruang publik lintas generasi yang berfungsi sebagai paru-paru kota dan simbol identitas warga Bogor. Selain itu, kawasan ini menjadi pusat edukasi lingkungan bagi pelajar untuk mengenal kekayaan hayati Indonesia.<br>
 2. Legenda Pohon Jodoh: Terdapat dua pohon besar (Pohon Kenari dan Pohon Beringin) yang tumbuh berdampingan sejak tahun 1866. Mitos yang beredar di masyarakat menyebutkan bahwa pasangan yang datang ke sini akan memiliki hubungan yang langgeng.<br>
 3. Aura Mistis Makam Kuno: Adanya Kompleks Makam Kerajaan Pajajaran di dalam area Kebun Raya memberikan nilai sakral. Keberadaan makam tokoh-tokoh seperti Ratu Galuh dan Mbah Jepara menciptakan tradisi ziarah yang masih dilakukan hingga sekarang sebagai bentuk penghormatan kepada leluhur.<br>
 4. Simbol Konservasi Tradisional: Sejarah Samida (hutan buatan) membuktikan bahwa masyarakat Sunda kuno sudah memiliki kesadaran tinggi akan pentingnya menjaga ekosistem dan sumber daya air jauh sebelum konsep kebun raya modern diperkenalkan.        
 </p>
      </div>
    </div>
  </div>
</div>
     
  <a href="https://kebunraya.id" target="_blank" class="tombol-info">Sumber informasi</a>

  </div>
</div>

    `;
}

function bunkerGumati() {
  let detail = document.getElementById("detail");
  window.location.href = "#detail";
  detail.innerHTML = `
        <div class="detail-section">
        <div class="peta-container mb-4">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.1650212235827!2d106.80844147604198!3d-6.626414864779089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c50043bdd56b%3A0xa4ccb72d50455d5e!2sBunker%20Gumati!5e0!3m2!1sid!2sid!4v1777379552209!5m2!1sid!2sid" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

<p class="deskripsi-texto animate__animated animate__fadeInDown">Di balik rimbunnya perbukitan dan suasana hening kawasan Gumati di Bogor, tersembunyi sebuah bunker peninggalan masa pendudukan Jepang yang menjadi saksi bisu Perang Dunia II di Indonesia. Bangunan ini bukan sekadar struktur beton tua, melainkan bagian dari sistem pertahanan militer yang dirancang untuk pengintaian dan perlindungan. Keberadaannya seolah menjadi gerbang masa lalu yang menghubungkan kita dengan situasi perang dan strategi militer pada masa itu. </p>

        <div class="container mt-4 animate__animated animate__fadeInDown">
  <div class="row">
    <div class="col-md-4 mb-3">
      <div class="info-kartu">
  <div class="card-body">
    <h5 class="card-title">Asal Usul</h5>
    <p class="card-text">
 <code>Bunker Gumati</code> dibangun dan digunakan oleh Tentara Jepang sebagai bagian dari sistem pertahanan sekitar tahun 1942–1945.
    </p>
  </div>
</div>
    </div>
    <div class="col-md-4 mb-3">
      <div class="info-kartu">
  <div class="card-body">
    <h5 class="card-title">Perkembangan</h5>
    <p class="card-text">
 1942–1945: Dibangun oleh Jepang<br>
 1945: Ditinggalkan<br>
 Puluhan tahun: Tertutup vegetasi<br>
 Sekarang: Situs eksplorasi sejarah
    </p>
  </div>
</div>
    </div>
    <div class="col-md-4 mb-3">
      <div class="info-kartu">
  <div class="card-body">
    <h5 class="card-title">Bukti Sejarah</h5>
    <p class="card-text">
 Bukti utama keberadaannya: struktur fisik bunker itu sendiri, yang memiliki kemiripan dengan bunker Jepang di berbagai wilayah lain di Indonesia.
    </p>
  </div>
</div>
    </div>
  </div>
</div>
<div class="pemisah-garis container-sm"></div>

    <div class="container px-4">
  <div class="row gx-5">
    <div class="col-md-6 mb-4">
      <div class="p-3">
        <h2 class="bagian-judul animate__animated animate__fadeInDown mt-4">Konteks Waktu</h2>
        <p>Bunker Gumati diperkirakan dibangun pada masa pendudukan Jepang di Indonesia, yaitu sekitar tahun 1942 hingga 1945. Setelah Indonesia merdeka, bunker ini ditinggalkan dan perlahan tertutup oleh vegetasi alam. Dalam perkembangannya, situs ini kembali dikenal oleh masyarakat pada era modern sebagai bagian dari peninggalan sejarah yang masih tersisa.
</p>

      </div>
    </div>
    <div class="col-md-6 mb-4">
      <div class="p-3">
        <h2 class="bagian-judul animate__animated animate__fadeInDown mt-4">Fungsi Awal</h2>
        <p>Pada awalnya, bunker ini digunakan sebagai fasilitas militer yang berfungsi sebagai tempat pertahanan, pos pengintaian, serta perlindungan bagi tentara Jepang. Letaknya yang berada di kawasan perbukitan menjadikannya lokasi strategis untuk memantau pergerakan musuh dan menghindari serangan.</p>

      </div>
    </div>

    <div class="accordion perluas-item" id="accordionExample" data-bs-theme="dark">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Perkembangan Situs
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
 🏛️ Arsitektur / Bentuk Fisik
 Bunker ini memiliki ciri khas bangunan militer Jepang, yaitu menggunakan beton tebal dengan<br>
 ⚔️ Peristiwa Penting
 Meskipun tidak tercatat sebagai lokasi pertempuran besar, bunker ini merupakan bagian dari sistem pertahanan Jepang di wilayah Jawa Barat pada masa Perang Dunia II. Keberadaannya mencerminkan strategi militer Jepang dalam mempertahankan wilayah yang mereka kuasai.<br>

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Nilai Sosial & Cerita Rakyat
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
 Menjadi sarana edukasi sejarah lokal
 Digunakan sebagai tempat eksplorasi (urban exploring)
 Menarik minat wisatawan pecinta sejarah<br>
 📖 Legenda / Cerita Lokal
 Di kalangan masyarakat sekitar, bunker ini sering dikaitkan dengan cerita mistis. Beberapa orang percaya bahwa tempat ini memiliki aura angker atau dijaga oleh makhluk gaib. Cerita-cerita ini berkembang dari pengalaman pengunjung dan menjadi bagian dari daya tarik tersendiri bagi situs ini.</p>
      </div>
    </div>
  </div>
</div>
     
     <a href="https://www.scribd.com/document/475962998/Bunker-Gumati-Bogor" target="_blank" class="tombol-info">Sumber informasi</a>

  </div>
</div>
    `;
}

function batuDakon() {
  let detail = document.getElementById("detail");
  window.location.href = "#detail";
  detail.innerHTML = `
        <div class="detail-section">
        <div class="peta-container mb-4">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.9811206973086!2d106.69068699016925!3d-6.526453071411663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69cf9aaaaaaaab%3A0xf22ca22bfd0d3d5!2zU2l0dXMgQmF0dSBEYWtvbiDhrp7hrqThrpLhrqXhrp7hrqog4a6Y4a6S4a6lIOGuk-GuiuGup-GulOGuqg!5e0!3m2!1sen!2sid!4v1777551147755!5m2!1sen!2sid" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
<p class="deskripsi-texto animate__animated animate__fadeInDown">Di tengah kawasan hijau dan suasana alami di Bogor, terdapat sebuah peninggalan kuno yang dikenal sebagai Batu Dakon, sebuah batu dengan lubang-lubang kecil di permukaannya yang menyerupai permainan tradisional congklak. Situs ini bukan sekadar batu biasa, melainkan peninggalan masa prasejarah yang menyimpan nilai sejarah, budaya, dan kepercayaan masyarakat pada masa lampau. Keberadaannya menjadi penghubung antara kehidupan manusia modern dengan tradisi dan ritual kuno yang pernah berkembang di wilayah tersebut.</p>

        <div class="container mt-4 animate__animated animate__fadeInDown">
  <div class="row">
    <div class="col-md-4 mb-3">
      <div class="info-kartu">
  <div class="card-body">
    <h5 class="card-title">Asal Usul</h5>
    <p class="card-text">
 Pembuat: Masyarakat prasejarah diperkirakan sebagai pencipta utama objek ini.<br>
 Fungsi: Digunakan untuk aktivitas ritual keagamaan maupun interaksi sosial.
    </p>
  </div>
</div>
    </div>
    <div class="col-md-4 mb-3">
      <div class="info-kartu">
  <div class="card-body">
    <h5 class="card-title">Perkembangan</h5>
    <p class="card-text">
 Megalitikum: Periode awal pembuatan dan penggunaan pertama Batu Dakon.<br>
 Tradisional: Mulai dianggap dan dihormati sebagai benda keramat masyarakat.
    </p>
  </div>
</div>
    </div>
    <div class="col-md-4 mb-3">
      <div class="info-kartu">
  <div class="card-body">
    <h5 class="card-title">Bukti Sejarah</h5>
    <p class="card-text">
 Arsip: Tidak ditemukan prasasti atau bukti tulisan tertulis pada objek.<br>
 Fisik: Pola lubang teknik khusus menunjukkan jejak aktivitas manusia lampau.
    </p>
  </div>
</div>
    </div>
  </div>
</div>
<div class="pemisah-garis container-sm"></div>

    <div class="container px-4">
  <div class="row gx-5">
    <div class="col-md-6 mb-4">
      <div class="p-3">
        <h2 class="bagian-judul animate__animated animate__fadeInDown mt-4">Konteks Waktu</h2>
        <p>Batu Dakon diperkirakan berasal dari masa prasejarah, kemungkinan dari zaman megalitikum (sekitar ribuan tahun yang lalu). Tidak ada catatan tertulis yang pasti mengenai waktu pembuatannya, namun keberadaan batu ini sering dikaitkan dengan budaya manusia purba di Nusantara yang sudah mengenal sistem kepercayaan dan ritual tertentu.</p>

      </div>
    </div>
    <div class="col-md-6 mb-4">
      <div class="p-3">
        <h2 class="bagian-judul animate__animated animate__fadeInDown mt-4">Fungsi Awal</h2>
        <p>Fungsi Batu Dakon masih menjadi perdebatan, namun secara umum diduga digunakan sebagai media ritual, alat perhitungan sederhana, atau bahkan sebagai sarana permainan tradisional. Lubang-lubang pada batu tersebut sering diasosiasikan dengan aktivitas spiritual seperti persembahan atau simbol perhitungan waktu dan musim.
</p>

      </div>
    </div>

    <div class="accordion perluas-item" id="accordionExample" data-bs-theme="dark">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Perkembangan Situs
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
 Masa Prasejarah: Digunakan oleh manusia purba untuk ritual atau aktivitas tertentu<br>
 Masa Tradisional: Dianggap sebagai benda keramat oleh masyarakat<br>
 Era Modern: Menjadi situs sejarah dan objek penelitian<br>
 🏛️ Arsitektur: Batu Dakon memiliki bentuk batu besar dengan permukaan yang dipahat membentuk lubang-lubang kecil menyerupai pola permainan congklak.<br>
 ⚔️ Peristiwa Penting: Keberadaannya menjadi bukti penting perkembangan budaya manusia prasejarah di wilayah Jawa Barat.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Nilai Sosial & Cerita Rakyat
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
 Menjadi bukti kehidupan manusia prasejarah<br>
 Digunakan sebagai objek penelitian arkeologi<br>
 Menjadi bagian dari warisan budaya lokal<br>
 📖 Legenda: Di masyarakat sekitar, Batu Dakon sering dikaitkan dengan cerita mistis atau dianggap sebagai benda keramat. Cerita-cerita ini berkembang secara turun-temurun dan menambah daya tarik budaya dari situs tersebut.</p>
      </div>
    </div>
  </div>
</div>
     
     <a href="https://id.wikipedia.org/wiki/Berkas:Batu_dakon_140101-0106_cia.JPG" target="_blank" class="tombol-info">Sumber informasi</a>

  </div>
</div>
    `;
}

function gereja() {
  let detail = document.getElementById("detail");
  window.location.href = "#detail";
  detail.innerHTML = `
        <div class="detail-section">
        <div class="peta-container mb-4">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.6977360189646!2d106.7943753418765!3d-6.597674053683715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5b8074a3171%3A0x4dde5cd53173306d!2sGPIB%20Zebaoth!5e0!3m2!1sen!2sid!4v1777556572877!5m2!1sen!2sid" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
<p class="deskripsi-texto animate__animated animate__fadeInDown">
  Di balik pagar besi yang kokoh dan naungan pepohonan hijau yang berbatasan langsung dengan rimbunnya Kebun Raya Bogor, berdiri megah sebuah monumen arsitektur kolonial yang dikenal sebagai GPIB Zebaoth. Gereja ini bukan sekadar tempat peribadatan rutin, melainkan saksi bisu perjalanan sejarah Kota Bogor dari era Buitenzorg hingga masa kini yang menyimpan nilai estetika serta sejarah religi yang mendalam.
</p>

  <div class="row animate__animated animate__fadeInDown">
    <div class="col-md-4 mb-3">
      <div class="info-kartu">
  <div class="card-body">
    <h5 class="card-title">Asal Usul</h5>
    <p class="card-text">
 Nama Awal: Dahulu dikenal sebagai <code>Koningin Wilhelmina Kerk</code> saat masa kolonial.<br>
 Fungsi: Dibangun khusus sebagai tempat ibadah bagi warga Eropa di area Bogor.
    </div>
</div>
    </div>
    <div class="col-md-4 mb-3">
      <div class="info-kartu">
  <div class="card-body">
    <h5 class="card-title">Perkembangan</h5>
    <p class="card-text">
 1920: Peletakan batu pertama dan dimulainya konstruksi.<br>
 Pasca-Kolonial: Beralih fungsi menjadi GPIB Zebaoth.<br>
 Sekarang: Berdiri sebagai cagar budaya religi.
    </p>
  </div>
</div>
    </div>
    <div class="col-md-4 mb-3">
      <div class="info-kartu">
  <div class="card-body">
    <h5 class="card-title">Bukti Sejarah</h5>
    <p class="card-text">
 Arsip: Tercatat dalam dokumen sejarah arsitektur kolonial Hindia Belanda.<br>
 Fisik: Menara lonceng dan gaya arsitektur Indische yang masih terjaga asli.
    </p>
  </div>
</div>
    </div>
  </div>
</div>
<div class="pemisah-garis container-sm"></div>

    <div class="container px-4">
  <div class="row gx-5">
    <div class="col-md-6 mb-4">
      <div class="p-3">
        <h2 class="bagian-judul animate__animated animate__fadeInDown mt-4">Konteks Waktu</h2>
        <p>
          GPIB Zebaoth dibangun pada awal abad ke-20, tepatnya mulai tahun 1920. Arsitekturnya mencerminkan gaya kolonial modern yang disesuaikan dengan iklim tropis Bogor. Lokasinya yang sangat strategis di tepi Kebun Raya Bogor menunjukkan betapa pentingnya bangunan ini dalam tata kota masa lalu.
        </p>

      </div>
    </div>
    <div class="col-md-6 mb-4">
      <div class="p-3">
        <h2 class="bagian-judul animate__animated animate__fadeInDown mt-4">Fungsi Awal</h2>
        <p>
      Sejak awal berdiri, gedung ini difungsikan sebagai sarana ibadah umat Protestan. Selain menjadi pusat kegiatan spiritual, Zebaoth juga menjadi simbol kehadiran komunitas Eropa di Bogor pada masa itu, sebelum akhirnya terbuka untuk seluruh jemaat tanpa memandang latar belakang bangsa.
</p>

      </div>
    </div>

    <div class="accordion perluas-item" id="accordionExample" data-bs-theme="dark">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Perkembangan Situs
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
 Masa Kolonial: Digunakan eksklusif oleh pejabat dan keluarga Belanda.<br>
 Masa Transisi: Penamaan ulang dan pengelolaan diserahkan kepada jemaat lokal Indonesia.<br>
 Era Modern: Menjadi pusat ibadah aktif sekaligus objek wisata sejarah religi yang dilindungi.<br>
 🏛️ Arsitektur: Memiliki ciri khas jendela tinggi dan atap curam untuk sirkulasi udara optimal.<br>
 ⚔️ Peristiwa Penting: Menjadi saksi bisu perkembangan Kota Bogor dari era Buitenzorg hingga masa kemerdekaan.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Nilai Sosial & Cerita Rakyat
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
 Menjadi pusat kegiatan spiritual dan keagamaan masyarakat!<br>
 Tempat pernikahan dan acara gereja penting<br>
 Simbol sejarah religi di Bogor<br>
 📖 Cerita: Gereja ini menjadi saksi bisu perjalanan Christianity di Bogor dari masa kolonial hingga kini.
        </p>
      </div>
    </div>
  </div>
</div>
     
  <a href="https://id.wikipedia.org/wiki/GPIB_Zebaoth_Bogor" target="_blank" class="tombol-info">Sumber informasi</a>

  </div>
</div>
    `;
}
function overloopKelder() {
  let detail = document.getElementById("detail");
  window.location.href = "#detail";
  detail.innerHTML = `
        <div class="detail-section">
        <div class="peta-container mb-4">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.0621849987424!2d106.8442773409741!3d-6.490155199083056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c1e3a55a7a85%3A0x5dca479c74e006aa!2sOverloopkelder%20(Pos%202%20Waterleiding%20Batavia)!5e0!3m2!1sid!2sid!4v1777293363406!5m2!1sid!2sid" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
<p class="deskripsi-texto animate__animated animate__fadeInDown">
            Di balik hiruk-pikuk modernitas pusat Kota Bogor, berdiri sebuah tugu batu yang menjulang sunyi namun penuh wibawa, dikenal sebagai Overloop Kelder Obelisk. Situs ini bukan sekadar pilar beton tanpa makna, melainkan sebuah saksi bisu kecanggihan sistem pengairan masa kolonial yang pernah menjadi denyut nadi kehidupan di wilayah ini.
        </p>

        <div class="container mt-4 animate__animated animate__fadeInDown">
  <div class="row">
    <div class="col-md-4 mb-3">
      <div class="info-kartu">
  <div class="card-body">
    <h5 class="card-title">Asal Usul</h5>
    <p class="card-text">
 <code>Overloop</code> : Aliran atau limpahan air.<br>
 <code>Kelder</code> : Ruang bawah tanah / bak penampung.<br>
 <code>Obelisk</code> : Tugu atau penanda.
    </p>
  </div>
</div>
    </div>
    <div class="col-md-4 mb-3">
      <div class="info-kartu">
  <div class="card-body">
    <h5 class="card-title">Perkembangan</h5>
    <p class="card-text">
 1922: Dibangun oleh Belanda<br>
 Masa kolonial: Distribusi air Bogor–Batavia<br>
 2025: Ditetapkan sebagai cagar budaya<br>
 Sekarang: Situs sejarah & edukasi
    </p>
  </div>
</div>
    </div>
    <div class="col-md-4 mb-3">
      <div class="info-kartu">
  <div class="card-body">
    <h5 class="card-title">Bukti Sejarah</h5>
    <p class="card-text">
 Arsip: Tercatat dalam jaringan air Belanda (Leidingnet Buitenzorg).<br>
 Fisik: Bangunan asli tahun 1922 masih berdiri kokoh dan terawat.
    </p>
  </div>
</div>
    </div>
  </div>
</div>
<div class="pemisah-garis container-sm"></div>

    <div class="container px-4">
  <div class="row gx-5">
    <div class="col-md-6 mb-4">
      <div class="p-3">
        <h2 class="bagian-judul animate__animated animate__fadeInDown mt-4">Konteks Waktu</h2>
        <p>Dibangun pada tahun 1922 oleh perusahaan air Belanda (Waterleiding Bedrijf Buitenzorg).
 Berlokasi di kawasan Taman Air Mancur, Sempur, Bogor.</p>

      </div>
    </div>
    <div class="col-md-6 mb-4">
      <div class="p-3">
        <h2 class="bagian-judul animate__animated animate__fadeInDown mt-4">Fungsi Awal</h2>
        <p>Berfungsi sebagai:<br>
 Gardu pembagi air bersih<br>
 Mengalirkan air dari mata air Ciburial (Gunung Salak)<br>
 Distribusi ke Kota Bogor (Buitenzorg) hingga Batavia (Jakarta)</p>

      </div>
    </div>

    <div class="accordion perluas-item" id="accordionExample" data-bs-theme="dark">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Perkembangan Situs
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        🔄 Perubahan Fungsi<br>
 Masa Kolonial: Infrastruktur vital penyedia air bersih<br>
 Setelah kemerdekaan: Tetap digunakan sebagai bagian sistem air<br>
 Sekarang: Ditetapkan sebagai cagar budaya (2025)<br>
 🏛️ Arsitektur: Bangunan kecil berbentuk struktur beton/ruang penampung air dengan elemen tugu (obelisk)<br>
 ⚔️ Peristiwa Penting: 16 Agustus 2025 ditetapkan sebagai cagar budaya oleh Pihak Terkait
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Nilai Sosial & Cerita Rakyat
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
 🏘️ Peran bagi Masyarakat<br>
 Dahulu: Sumber utama air bersih masyarakat & pemerintah kolonial<br>
 Sekarang: Simbol sejarah infrastruktur kota<br>
 📖 Nilai Historis: Bukti nyata teknologi kolonial, menunjukkan pentingnya air sebagai sumber kehidupan.
        </p>
      </div>
    </div>
  </div>
</div>
     
     <a href="https://www.harapanrakyatk.com/2025/10/menilik-sejarah-overloop-kelder-obelisk-bogor/" target="_blank" class="tombol-info">Sumber informasi</a>

  </div>
</div>
    `;
}


function makamPajajaran() {
  let detail = document.getElementById("detail");
  window.location.href = "#detail";
  detail.innerHTML = `
        <div class="detail-section">
        <div class="peta-container mb-4">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4086997791965!2d106.79747847604155!3d-6.59602056448132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5c69fdcf659%3A0xd8b51461b5d70c32!2sKomplek%20Makam%20Keramat%20Kebun%20Raya%20Bogor!5e0!3m2!1sen!2sid!4v1776780772086!5m2!1sen!2sid" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <p class="deskripsi-texto animate__animated animate__fadeInDown">
            Di balik kerimbunan pepohonan purba dan suasana hening yang menyelimuti area Kebun Raya Bogor, tersembunyi sebuah situs bersejarah yang dikenal sebagai Kompleks Makam Kerajaan Pajajaran. Situs ini bukan sekadar tumpukan batu nisan tua, melainkan sebuah gerbang masa lalu yang menghubungkan kita dengan masa keemasan Kerajaan Sunda.
        </p>

        <div class="container mt-4 animate__animated animate__fadeInDown">
  <div class="row">
    <div class="col-md-4 mb-3">
      <div class="info-kartu">
  <div class="card-body">
    <h5 class="card-title">Asal Usul</h5>
    <p class="card-text">
      Nama "Mbah Dalem" berasal dari:<br>
      "Mbah" → sebutan hormat untuk orang tua/leluhur<br>
      "Dalem" → berarti bangsawan / orang dalam istana
    </p>
  </div>
</div>
    </div>
    <div class="col-md-4 mb-3">
      <div class="info-kartu">
  <div class="card-body">
    <h5 class="card-title">Perkembangan</h5>
    <p class="card-text">
      Abad 15–16: Diduga masa pemakaman<br>
      Setelah Pajajaran runtuh: Terlupakan<br>
      Abad 20: Ditemukan kembali<br>
      Sekarang: Tempat ziarah & situs budaya
    </p>
  </div>
</div>
    </div>
    <div class="col-md-4 mb-3">
      <div class="info-kartu">
  <div class="card-body">
    <h5 class="card-title">Bukti Sejarah</h5>
    <p class="card-text">
      Tidak ditemukan prasasti resmi<br>
      Informasi berasal dari cerita masyarakat dan catatan sejarah lokal terbatas<br>
      Status: Semi-legendaris
    </p>
  </div>
</div>
    </div>
  </div>
</div>
<div class="pemisah-garis container-sm"></div>

    <div class="container px-4">
  <div class="row gx-5">
    <div class="col-md-6 mb-4">
      <div class="p-3">
        <h2 class="bagian-judul animate__animated animate__fadeInDown mt-4">Konteks Waktu</h2>
        <p>Diperkirakan berasal dari masa akhir Kerajaan Pajajaran (± abad ke-15–16).
 Kompleks makam ini ditemukan kembali sekitar tahun 1946 oleh warga setempat.</p>

      </div>
    </div>
    <div class="col-md-6 mb-4">
      <div class="p-3">
        <h2 class="bagian-judul animate__animated animate__fadeInDown mt-4">Fungsi Awal</h2>
        <p>Diduga sebagai:<br>
 Tempat pemakaman tokoh penting kerajaan<br>
 Area sakral/keramat</p>

      </div>
    </div>

    <div class="accordion perluas-item" id="accordionExample" data-bs-theme="dark">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Perkembangan Situs
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Masa Pajajaran: Digunakan sebagai area sakral bagi tokoh kerajaan.<br>
        Pasca Runtuh: Sempat terlupakan dan tertutup vegetasi selama berabad-abad.<br>
        Era Modern: Kini berfungsi sebagai situs sejarah, cagar budaya, dan lokasi ziarah di Bogor.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Nilai Sosial & Cerita Rakyat
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
            Ziarah: Menjadi lokasi refleksi budaya Sunda dan ketenangan batin bagi pengunjung.<br>
            Mitos: Sering dikaitkan dengan keluarga Prabu Siliwangi<br>
            Suasana: Dikenal dengan atmosfer yang hening dan sakral di bawah pepohonan purba.
        </p>
      </div>
    </div>
  </div>
</div>
     
  <a href="https://validnews.id/kultura/jejak-makam-keramat-leluhur-kerajaan-pajajaran-di-kebun-raya-bogor" target="_blank" class="tombol-info">Sumber informasi</a>

  </div>
</div>
    `;
}

function makamMbahDalem() {
  let detail = document.getElementById("detail");
  window.location.href = "#detail";
  detail.innerHTML = `
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.175824927189!2d106.8049523859294!3d-6.62507024765105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5f90566f659%3A0x45408531f9418522!2sMakam%20Embah%20Dalem%20Batu%20tulis!5e0!3m2!1sid!2sid!4v1777341009830!5m2!1sid!2sid" class="container-sm d-flex justify-content-center" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        <p class="mt-5 animate__animated animate__fadeInDown container-sm">
            Di bawah naungan pepohonan rindang di kawasan Batutulis, berdiri sebuah situs keramat yang menjadi saksi bisu perjalanan spiritual dan sejarah Bogor, yakni Makam Mbah Dalem. Tempat ini bukan sekadar pusara kuno, melainkan sebuah simbol penghormatan kepada leluhur yang dipercaya sebagai sosok ulama sekaligus bangsawan penyebar agama Islam di tanah Pasundan.
            Suasana tenang dan sakral yang menyelimuti area ini seolah membawa kita kembali ke masa di mana kearifan lokal dan nilai-nilai luhur berpadu, menjadikan Makam Mbah Dalem sebagai destinasi religi yang menjaga erat warisan budaya dan spiritualitas masyarakat Bogor hingga saat ini.
        </p>

        <div class="container mt-4 animate__animated animate__fadeInDown">
  <div class="row">
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body">
    <h5 class="card-title text-white">Asal usul ( <code>Makam Mbah Dalem</code> )</h5>
    <p class="card-text text-white">
      Mbah Dalem merujuk pada sosok bangsawan sekaligus ulama yang sangat dihormati di tanah Pasundan. Lokasi makam ini berada di kawasan Kebun Raya Bogor, yang dahulu merupakan pusat wilayah Pakuan Pajajaran. Keberadaannya menjadi simbol transisi spiritual dari era kerajaan menuju penyebaran nilai keagamaan yang luhur di wilayah Bogor.
    </p>
    </div>
</div>
    </div>
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body">
    <h5 class="card-title text-white">Timeline ( <code>makam</code> )</h5>
    <p class="card-text text-white">
      Abad 15–16 menjadi masa awal keberadaan situs ini pasca-runtuhnya Pajajaran. Sempat terabaikan selama berabad-abad, situs makam ini ditemukan kembali pada awal abad ke-20. Kini, Makam Mbah Dalem telah ditetapkan sebagai situs cagar budaya sekaligus destinasi ziarah utama yang menjaga napas sejarah tetap hidup di tengah modernitas.
    </p>
    </div>
</div>
    </div>
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body">
    <h5 class="card-title text-white">Dokumen bukti ( <code>fisik/arsip</code> )</h5>
    <p class="card-text text-white">
      Keberadaan situs ini didasarkan pada bukti fisik berupa nisan kuno dan struktur makam tradisional. Meski tidak ditemukan prasasti tertulis secara resmi, narasi sejarahnya terjaga melalui tradisi lisan masyarakat dan catatan lokal yang terbatas. Hal ini menjadikan status sejarahnya bersifat semi-legendaris, perpaduan antara fakta fisik dan lisan.
    </p>
    </div>
</div>
    </div>
  </div>
</div>
<div class="border-bottom mt-4 container-sm"></div>

    <div class="container px-4">
  <div class="row gx-5">
    <div class="col">
      <div class="p-3">
        <h2 class="animate__animated animate__fadeInDown mt-5">Konteks Waktu</h2>
        <p>
          Diperkirakan berasal dari masa akhir Kerajaan Pajajaran (sekitar abad ke-15–16).
Tidak ada catatan tertulis pasti tentang waktu pemakaman.
Makam ini lebih dikenal melalui:
Tradisi lisan masyarakat
Cerita turun-temurun
        </p>

      </div>
    </div>
    <div class="col">
      <div class="p-3">
        <h2 class="animate__animated animate__fadeInDown mt-5">Fungsi Awal</h2>
        <p>
Diduga sebagai:
Tempat pemakaman tokoh penting (bangsawan/penasehat/spiritual)
Area sakral untuk penghormatan leluhur
Bukan bangunan publik, tetapi kawasan privat dan spiritual.
        </p>

      </div>
    </div>

    <div class="accordion" id="accordionExample" data-bs-theme="dark">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Perkembangan Bangunan
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
🔁 Perubahan Fungsi
Masa Pajajaran:
Tempat pemakaman tokoh penting
Setelah kerajaan runtuh:
Terbengkalai dan tertutup alam
Masa modern:
Ditemukan kembali dan dikenal sebagai makam keramat
Sekarang:
Tempat ziarah
Situs budaya lokal di dalam Kebun Raya<br>
🏛️ Arsitektur / Bentuk Fisik
Ciri fisik:
Makam sederhana dari tanah/batu
Tidak megah seperti makam kerajaan besar
Lingkungan:
Dikelilingi pepohonan besar
Suasana tenang dan sakral
Beberapa bagian:
Sudah dirapikan
Namun tetap mempertahankan bentuk asli (heritage)<br>
⚔️ Peristiwa Penting
Penemuan kembali oleh masyarakat lokal (sekitar abad ke-20)
Menjadi bagian dari cerita sejarah lokal Bogor
Tidak ada peristiwa besar nasional, tetapi penting secara budaya lokal
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Nilai Sosial & Legenda
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
🏘️ Peran bagi Masyarakat
Dahulu:
Tempat penghormatan tokoh penting
Sekarang:
Tempat ziarah dan doa
Simbol hubungan masyarakat dengan sejarah leluhur<br>
📖 Legenda / Mitologi
Mbah Dalem dipercaya:
Memiliki kekuatan spiritual tinggi
Menjadi penjaga kawasan tersebut
Banyak pengunjung datang untuk:
Berdoa
Mencari ketenangan batin
Cerita ini berkembang dari tradisi lisan masyarakat Sunda<br>
🌏 Status Saat Ini
Berfungsi sebagai:
Situs ziarah lokal
Bagian dari sejarah tersembunyi di Bogor
Tidak terlalu terkenal secara nasional, tetapi penting secara budaya
        </p>
      </div>
    </div>
  </div>
</div>
    
  <p class="mt-5">Sumber informasi <a href="https://rri.co.id/bogor/wisata/675922/mbah-dalem-sosok-legendaris-dan-makamnya-yang-penuh-misteri" target="_blank">Lihat disini</a></p>

  </div>
</div>

    `;
}

function stasiunBogor() {
  let detail = document.getElementById("detail");
  window.location.href = "#detail";
  detail.innerHTML = `
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.456424206466!2d106.7814827348877!3d-6.590051499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5b3076ac8cf%3A0xbd4cbea969b264e7!2sstasiun%20bogor%20kota!5e0!3m2!1sid!2sid!4v1777339789819!5m2!1sid!2sid" class="container-sm d-flex justify-content-center" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <p class="mt-5 animate__animated animate__fadeInDown container-sm">
            Berdiri megah di jantung kota dengan arsitektur bergaya Eropa yang masih terjaga, Stasiun Bogor bukan sekadar titik pemberhentian transportasi, melainkan pintu gerbang waktu yang telah menghubungkan ribuan cerita sejak akhir abad ke-19. Bangunan ini bukan hanya deretan peron yang sibuk, melainkan saksi bisu perkembangan peradaban dan denyut nadi mobilitas yang menyatukan Bogor dengan wilayah di sekitarnya.
            Setiap sudut ornamen klasiknya membisikkan narasi tentang masa lalu, menjadikannya sebuah monumen hidup yang terus bernapas di tengah modernitas, mengantarkan kita pada jejak sejarah perkeretaapian yang melegenda.
        </p>

        <div class="container mt-4 animate__animated animate__fadeInDown">
  <div class="row">
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body">
    <h5 class="card-title text-white">Asal usul ( <code>stasiun bogor kota</code> )</h5>
    <p class="card-text text-white">
    Nama Stasiun Bogor berasal dari kota Bogor.<br>
Pada masa kolonial Belanda, kota Bogor dikenal sebagai Buitenzorg (artinya: “tanpa kekhawatiran”).<br>
Stasiun ini pada zaman dahulu dikenal sebagai Stasiun Buitenzorg.</p>
    </div>
</div>
    </div>
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body">
    <h5 class="card-title text-white">Timeline ( <code>pembangunan</code> )</h5>
    <p class="card-text text-white">
      1873 → Stasiun dibangun
Masa Kolonial → Pusat logistik & transportasi hasil bumi
1945 → Digunakan setelah kemerdekaan Indonesia
2000-an → Modernisasi & KRL Commuter Line
Sekarang → Stasiun tersibuk & pusat mobilitas
    </p>
    </div>
</div>
    </div>
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body">
    <h5 class="card-title text-white">Dokumen bukti ( <code>fisik/arsip</code> )</h5>
    <p class="card-text text-white">
      Berbicara tentang bukti sejarah tentang stasiun bogor pada zaman belanda terdapat
      arsip kolonial Belanda tentang jalur kereta Batavia–Buitenzorg,
Foto-foto lama stasiun, dan 
Catatan perusahaan kereta api Belanda
    </p>
    </div>
</div>
    </div>
  </div>
</div>

<div class="border-bottom mt-4 container-sm"></div>

    <div class="container px-4">
  <div class="row gx-5">
    <div class="col">
      <div class="p-3">
        <h2 class="animate__animated animate__fadeInDown mt-5">Konteks Waktu</h2>
        <p>
          Dibangun pada tahun 1873 oleh perusahaan kereta api Belanda.
Merupakan bagian dari jalur Batavia (Jakarta) – Buitenzorg (Bogor).
Termasuk salah satu stasiun tertua di Indonesia.
        </p>

      </div>
    </div>
    <div class="col">
      <div class="p-3">
        <h2 class="animate__animated animate__fadeInDown mt-5">Fungsi Awal</h2>
        <p>
          Awalnya digunakan untuk:
Mengangkut hasil bumi (kopi, teh, dll.)
Mendukung aktivitas perkebunan kolonial
Transportasi pejabat Belanda dari Batavia ke Buitenzorg
        </p>

      </div>
    </div>

    <div class="accordion" id="accordionExample" data-bs-theme="dark">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Perkembangan Bangunan
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        🔁 Perubahan Fungsi
Masa Kolonial:
Pusat logistik dan transportasi barang
Masa Kemerdekaan:
Digunakan untuk transportasi umum masyarakat
Masa Sekarang:
Stasiun utama KRL Commuter Line
Pusat mobilitas pekerja Jabodetabek<br>
🏛️ Arsitektur / Bentuk Fisik
Dulu:
Bergaya arsitektur kolonial Belanda
Bangunan sederhana dengan atap tinggi
Sekarang:
Sudah mengalami renovasi modern
Namun beberapa bagian lama masih dipertahankan (heritage)
Perpaduan:<br>
👉 Bangunan lama + fasilitas modern<br>
⚔️ Peristiwa Penting
Menjadi bagian penting dalam perkembangan transportasi di Jawa Barat.
Digunakan selama masa kolonial, Jepang, hingga kemerdekaan.
Berperan dalam mobilitas masyarakat saat urbanisasi besar-besaran ke Jakarta.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Nilai Sosial & Legenda
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
            🏘️ Peran bagi Masyarakat
Dahulu:
Mendukung ekonomi perkebunan dan kolonial
Sekarang:
Transportasi utama pekerja dan pelajar
Penghubung Bogor–Jakarta
Menggerakkan ekonomi lokal (UMKM, pedagang, dll.)<br>
📖 Legenda / Cerita
Tidak banyak legenda seperti situs kerajaan, tapi:
Stasiun ini jadi saksi perubahan zaman dari kolonial → modern
Banyak cerita kehidupan urban (komuter, pedagang, dll.)<br>
🌏 Status Saat Ini
Menjadi:
Salah satu stasiun tersibuk di Indonesia
Ikon transportasi di Bogor
Bagian penting dari sistem KRL Jabodetabek
        </p>
      </div>
    </div>
  </div>
</div>
    
  <p class="mt-5">Sumber informasi <a href="https://id.wikipedia.org/wiki/Stasiun_Bogor" target="_blank">Lihat disini</a></p>

  </div>
</div>
    `;
}

const card = (data) =>
  data
    .map(
      (item) => `
    <div class="col mb-4i">
        <div class="card">
            <div class="card-body p-0 d-flex align-items-center rounded-3" style="padding-right: 20px !important;" onclick="${item.interaction || ""}">
                <img src="/src/assets/images/${item.img}" alt="${item.name}" style=" width: 100px; height: 100px; object-fit: cover;">
                <span><h4 class="mt-1 ms-5 text-white">${item.name}</h4> <p class="text-white ms-5">${item.sub}</p></span>
                <i class="bi bi-list text-white ms-auto" style="font-size: 20px;"></i>
            </div>
        </div>
    </div>
`,
    )
    .join("");

content.innerHTML = `
<div class="container-fluid vh-100 d-flex flex-column p-0 overflow-hidden">
    <div class="d-flex flex-grow-1 overflow-hidden">
        <div class="mini-sidebar d-flex flex-column align-items-center py-3 border-end border-secondary text-white" style="width: 70px; flex-shrink: 0;">

        <a href="/index.html" style="margin-top: 10px;">
        <button href="/index.html" class="btn btn-sm btn-dark rounded-circle text-white animate__animated animate__fadeInDown">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" class="text-white animated_animated animate_fadeInDown bi bi-house-fill" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
</svg>              
</button>
</a>

            <a href="/src/pages/structure/about.html" class="text-white animate__animated animate__fadeInDown" style="margin-top: 40px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
</svg>

<a href="/src/pages/structure/guide.html" class="text-white animate__animated animate__fadeInDown">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-book-fill" viewBox="0 0 16 16" style="margin-top: 40px;">
  <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
</svg>
</a>

<a href="/src/pages/structure/contact.html" class="text-white animate__animated animate__fadeInDown">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16" style="margin-top: 40px;">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>
</a>
            </a>
        </div>
        <section class="w-100 p-4 overflow-auto">
            <div class="d-flex gap-3 searchPage mx-auto justify-content-center animate__animated animate__fadeInDown">
              <input type="text" id="searchPage" placeholder="Search page">

<button type="button" class="btn btn-search" onclick="btnSearch()" style="height: 35px !important; border-radius: 10px !important;">Search</button>

</div>
            <div class="row row-cols-1 row-cols-sm-2 mt-5 row-cols-md-4 animate__animated animate__fadeInDown">
                ${card(tempatWisata)}
            </div>
            <div class="mt-5 p-4 border-top border-secondary text-white" id="detail">
                <div style="margin-top: 50px;">
        <div class="container text-center animate__animated animate__fadeInDown welcome-section">
            <h2 class="text-white mb-4">Selamat Datang di Sejarahub</h2>
            <p class="mb-4">Jelajahi kekayaan sejarah dan warisan budaya Bogor melalui koleksi tempat-place bersejarah yang telah kami rangkum untuk Anda.</p>
            
            <div class="row mt-5">
                <div class="col-md-4 mb-3">
                    <div class="feature-card p-4">
                        <i class="bi bi-map-fill" style="font-size: 40px;"></i>
                        <h5 class="mt-3 text-white">8 Lokasi Bersejarah</h5>
                        <p class="small">Koleksi tempat sejarah dari era Pajajaran hingga kolonial</p>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="feature-card p-4">
                        <i class="bi bi-book-fill" style="font-size: 40px;"></i>
                        <h5 class="mt-3 text-white">Cerita & Legenda</h5>
                        <p class="small">Ketahui asal-usul dan kisah di balik setiap situs</p>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="feature-card p-4">
                        <i class="bi bi-geo-alt-fill" style="font-size: 40px;"></i>
                        <h5 class="mt-3 text-white">Peta Interaktif</h5>
                        <p class="small">Lihat lokasi dan navigasi ke setiap tempat</p>
                    </div>
                </div>
            </div>
            
            <p class="mt-5 text-white-50">Klik pada kartu tempat di atas untuk melihat detail lengkap</p>
        </div>
                </div>
            </div>
        </section>     
    </div>
</div>
`;
