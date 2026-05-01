const content = document.getElementById("content");

function btnSearch() {
  let searchPage = document.getElementById("searchPage");
  valueSearch = searchPage.value.toLowerCase();

  if (valueSearch == "tentang") {
    window.location.href = "/src/pages/structure/about.html";
    searchPage.value = "";
  } else if (valueSearch == "panduan") {
    window.location.href = "/src/pages";
    searchPage.value = "";
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
  detail.innerHTML = `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126819.888210978!2d106.64903599726561!3d-6.631827899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5c412a67abb%3A0x75f23c6b45a37ee5!2sBogor%20Botanical%20Gardens!5e0!3m2!1sen!2sid!4v1776668007198!5m2!1sen!2sid" class="container-sm d-flex justify-content-center" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <p class="mt-5 animate__animated animate__fadeInDown container-sm">
            Di balik kerimbunan pepohonan purba dan suasana hening yang menyelimuti area Kebun Raya Bogor, tersembunyi sebuah situs bersejarah yang dikenal sebagai Kompleks Makam Kerajaan Pajajaran. Situs ini bukan sekadar tumpukan batu nisan tua, melainkan sebuah gerbang masa lalu yang menghubungkan kita dengan masa keemasan Kerajaan Sunda. <b>Beberapa tokoh yang terlibat diantaranya:</b>
        </p>

        <div class="container mt-4">
  <div class="row">
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body animate__animated animate__fadeInDown">
    <h5 class="card-title text-white">Ratu Galuh ( <code>istri Prabu Siliwangi</code> )</h5>
    <p class="card-text text-white">Dipercaya sebagai sosok keramat yang menjaga area makam. Keberadaannya sering dikaitkan dengan aura mistis yang kuat dan dihormati oleh peziarah yang mencari ketenangan batin.</p>
    </div>
</div>
    </div>
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body" animate__animated animate__fadeInDown>
    <h5 class="card-title text-white">Mbah Jepara ( <code>panglima</code> )</h5>
    <p class="card-text text-white">Salah satu tokoh pendamping yang dimakamkan di area ini. Namanya kerap disebut sebagai sosok yang memiliki kaitan erat dengan sejarah penyebaran pengaruh atau perlindungan di wilayah tersebut.</p>
    </div>
</div>
    </div>
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body animate__animated animate__fadeInDown">
    <h5 class="card-title text-white">Mbah Baul ( <code>senopati</code> )</h5>
    <p class="card-text text-white">Salah satu tokoh yang sangat dihormati oleh warga sekitar dan pengunjung. Konon, ia memiliki peran penting dalam menjaga tatanan spiritual di kawasan situs.</p>
    </div>
</div>
    </div>
  </div>
</div>
<div class="border-bottom mt-4 container-sm"></div>

    <div class="container px-4 mt-5">
  <div class="row gx-5">
    <div class="col">
      <div class="p-3">
        <h2 class="animate__animated animate__fadeInDown mt-5">Konteks Waktu</h2>
        <p>Diperkirakan berasal dari masa akhir Kerajaan Pajajaran (± abad ke-15–16).
Kompleks makam ini ditemukan kembali sekitar tahun 1946 oleh warga setempat.
Tidak ada bukti kuat bahwa ini adalah makam Prabu Siliwangi.</p>

      </div>
    </div>
    <div class="col">
      <div class="p-3">
        <h2 class="animate__animated animate__fadeInDown mt-5">Fungsi Awal</h2>
        <p>Diduga sebagai:
Tempat pemakaman tokoh penting kerajaan
Area sakral/keramat
Bukan pusat kerajaan, melainkan bagian dari kawasan spiritual.</p>

      </div>
    </div>

    <div class="accordion" id="accordionExample" data-bs-theme="dark">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Perkembangan Situs
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Masa Pajajaran: Digunakan sebagai area sakral bagi tokoh kerajaan.<br>
        Pasca Runtuh: Sempat terlupakan dan tertutup vegetasi hutan selama berabad-abad.<br>
        Era Modern: Kini berfungsi sebagai situs sejarah, cagar budaya, dan lokasi ziarah di Bogor.
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
            Ziarah: Menjadi lokasi refleksi budaya Sunda dan ketenangan batin bagi pengunjung.<br>
            Mitos: Sering dikaitkan dengan keluarga Prabu Siliwangi, meski beliau sendiri dipercaya moksa (tidak dimakamkan di sini).<br>
            Suasana: Dikenal dengan atmosfer yang hening dan sakral di bawah pepohonan purba.
        </p>
      </div>
    </div>
  </div>
</div>
    
  </div>
</div>

    `;
}

function bunkerGumati() {
  let detail = document.getElementById("detail");
  detail.innerHTML = `
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.1650212235827!2d106.80844147604198!3d-6.626414864779089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c50043bdd56b%3A0xa4ccb72d50455d5e!2sBunker%20Gumati!5e0!3m2!1sid!2sid!4v1777379552209!5m2!1sid!2sid" class="container-sm d-flex justify-content-center" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

<p class="mt-5 animate__animated animate__fadeInDown container-sm">Di balik rimbunnya perbukitan dan suasana hening kawasan Gumati di Bogor, tersembunyi sebuah bunker peninggalan masa pendudukan Jepang yang menjadi saksi bisu Perang Dunia II di Indonesia. Bangunan ini bukan sekadar struktur beton tua, melainkan bagian dari sistem pertahanan militer yang dirancang untuk pengintaian dan perlindungan. Keberadaannya seolah menjadi gerbang masa lalu yang menghubungkan kita dengan situasi perang dan strategi militer pada masa itu. </p>

        <div class="container mt-4">
  <div class="row">
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body animate__animated animate__fadeInDown">
    <h5 class="card-title text-white">Asal-Usul ( <code>Bunker Gumati</code> )</h5>
    <p class="card-text text-white">
Tentara Jepang
Merupakan pihak yang membangun dan menggunakan bunker ini sebagai bagian dari sistem pertahanan sekitar tahun 1942–1945.
    </p>
    </div>
</div>
    </div>
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body animate__animated animate__fadeInDown">
    <h5 class="card-title text-white">Timeline ( <code>pembangunan</code> )</h5>
    <p class="card-text text-white">
1942–1945 → Dibangun oleh Jepang
1945 → Ditinggalkan
Puluhan tahun → Tertutup vegetasi
Sekarang → Situs eksplorasi sejarah</p>
    </div>
</div>
    </div>
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body animate__animated animate__fadeInDown">
    <h5 class="card-title text-white">Dokumen/Bukti ( <code>arsip/fisik</code> )</h5>
    <p class="card-text text-white">
Bukti utama keberadaannya: struktur fisik bunker itu sendiri, yang memiliki kemiripan dengan bunker Jepang di berbagai wilayah lain di Indonesia.
    </p>
    </div>
</div>
    </div>
  </div>
</div>
<div class="border-bottom mt-4 container-sm"></div>

    <div class="container px-4 mt-5">
  <div class="row gx-5">
    <div class="col">
      <div class="p-3">
        <h2 class="animate__animated animate__fadeInDown mt-5">Konteks Waktu</h2>
        <p>Bunker Gumati diperkirakan dibangun pada masa pendudukan Jepang di Indonesia, yaitu sekitar tahun 1942 hingga 1945. Setelah Indonesia merdeka, bunker ini ditinggalkan dan perlahan tertutup oleh vegetasi alam. Dalam perkembangannya, situs ini kembali dikenal oleh masyarakat pada era modern sebagai bagian dari peninggalan sejarah yang masih tersisa.
</p>

      </div>
    </div>
    <div class="col">
      <div class="p-3">
        <h2 class="animate__animated animate__fadeInDown mt-5">Fungsi Awal</h2>
        <p>Pada awalnya, bunker ini digunakan sebagai fasilitas militer yang berfungsi sebagai tempat pertahanan, pos pengintaian, serta perlindungan bagi tentara Jepang. Letaknya yang berada di kawasan perbukitan menjadikannya lokasi strategis untuk memantau pergerakan musuh dan menghindari serangan.</p>

      </div>
    </div>

    <div class="accordion" id="accordionExample" data-bs-theme="dark">
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
        Nilai Sosial & Legenda
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
    
  </div>
</div>

    `;
}

function batuDakon() {
  let detail = document.getElementById("detail");
  detail.innerHTML = `
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.9811206973086!2d106.69068699016925!3d-6.526453071411663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69cf9aaaaaaaab%3A0xf22ca22bfd0d3d5!2zU2l0dXMgQmF0dSBEYWtvbiDhrp7hrqThrpLhrqXhrp7hrqog4a6Y4a6S4a6lIOGuk-GuiuGup-GulOGuqg!5e0!3m2!1sen!2sid!4v1777551147755!5m2!1sen!2sid" class="container-sm d-flex justify-content-center" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><p class="mt-5 animate__animated animate__fadeInDown container-sm">
<p class="mt-5 animate__animated animate__fadeInDown container-sm">Di tengah kawasan hijau dan suasana alami di Bogor, terdapat sebuah peninggalan kuno yang dikenal sebagai Batu Dakon, sebuah batu dengan lubang-lubang kecil di permukaannya yang menyerupai permainan tradisional congklak. Situs ini bukan sekadar batu biasa, melainkan peninggalan masa prasejarah yang menyimpan nilai sejarah, budaya, dan kepercayaan masyarakat pada masa lampau. Keberadaannya menjadi penghubung antara kehidupan manusia modern dengan tradisi dan ritual kuno yang pernah berkembang di wilayah tersebut.</p>

        <div class="container mt-4">
  <div class="row">
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body animate__animated animate__fadeInDown">
    <h5 class="card-title text-white">Asal-Usul ( <code>Batu Dakon</code> )</h5>
    <p class="card-text text-white">
Identitas pembuat dan kegunaan awal:
Pembuat: Masyarakat prasejarah diperkirakan sebagai pencipta utama objek ini.
Fungsi: Digunakan untuk aktivitas ritual keagamaan maupun interaksi sosial.</p>
    </div>
</div>
    </div>
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body animate__animated animate__fadeInDown">
    <h5 class="card-title text-white">Timeline ( <code>pembangunan</code> )</h5>
    <p class="card-text text-white">
Evolusi fungsi dari masa ke masa:
Megalitikum: Periode awal pembuatan dan penggunaan pertama Batu Dakon.
Tradisional: Mulai dianggap dan dihormati sebagai benda keramat masyarakat.</p>
    </div>
</div>
    </div>
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body animate__animated animate__fadeInDown">
    <h5 class="card-title text-white">Dokumen/Bukti ( <code>arsip/fisik</code> )</h5>
    <p class="card-text text-white">
Validitas berdasarkan temuan lapangan:
Arsip: Tidak ditemukan prasasti atau bukti tulisan tertulis pada objek.
Fisik: Pola lubang teknik khusus menunjukkan jejak aktivitas manusia lampau.</p>
    </div>
</div>
    </div>
  </div>
</div>
<div class="border-bottom mt-4 container-sm"></div>

    <div class="container px-4 mt-5">
  <div class="row gx-5">
    <div class="col">
      <div class="p-3">
        <h2 class="animate__animated animate__fadeInDown mt-5">Konteks Waktu</h2>
        <p>Batu Dakon diperkirakan berasal dari masa prasejarah, kemungkinan dari zaman megalitikum (sekitar ribuan tahun yang lalu). Tidak ada catatan tertulis yang pasti mengenai waktu pembuatannya, namun keberadaan batu ini sering dikaitkan dengan budaya manusia purba di Nusantara yang sudah mengenal sistem kepercayaan dan ritual tertentu.</p>

      </div>
    </div>
    <div class="col">
      <div class="p-3">
        <h2 class="animate__animated animate__fadeInDown mt-5">Fungsi Awal</h2>
        <p>Fungsi Batu Dakon masih menjadi perdebatan, namun secara umum diduga digunakan sebagai media ritual, alat perhitungan sederhana, atau bahkan sebagai sarana permainan tradisional. Lubang-lubang pada batu tersebut sering diasosiasikan dengan aktivitas spiritual seperti persembahan atau simbol perhitungan waktu dan musim.
</p>

      </div>
    </div>

    <div class="accordion" id="accordionExample" data-bs-theme="dark">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Perkembangan Situs
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
Masa Prasejarah: Digunakan oleh manusia purba untuk ritual atau aktivitas tertentu
Masa Tradisional: Dianggap sebagai benda keramat oleh masyarakat
Era Modern: Menjadi situs sejarah dan objek penelitian<br>
🏛️ Arsitektur / Bentuk Fisik (Paragraf)
Batu Dakon memiliki bentuk batu besar dengan permukaan yang dipahat membentuk lubang-lubang kecil menyerupai pola permainan congklak. Batu ini biasanya tidak mengalami perubahan besar sejak pertama kali ditemukan, sehingga masih mempertahankan bentuk aslinya. Kondisi tersebut menjadikannya memiliki nilai keaslian (heritage) yang tinggi.<br>
⚔️ Peristiwa Penting (Paragraf)
Tidak terdapat catatan peristiwa sejarah besar yang secara langsung terkait dengan Batu Dakon. Namun, keberadaannya menjadi bukti penting perkembangan budaya manusia prasejarah di wilayah Jawa Barat, khususnya dalam hal kepercayaan dan aktivitas sosial masyarakat masa lampau.      </div>
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
Menjadi bukti kehidupan manusia prasejarah
Digunakan sebagai objek penelitian arkeologi
Menjadi bagian dari warisan budaya lokal<br>
📖 Legenda / Cerita Lokal (Paragraf)
Di masyarakat sekitar, Batu Dakon sering dikaitkan dengan cerita mistis atau dianggap sebagai benda keramat. Ada yang percaya bahwa batu ini digunakan untuk ritual persembahan kepada leluhur atau memiliki kekuatan tertentu. Cerita-cerita ini berkembang secara turun-temurun dan menambah daya tarik budaya dari situs tersebut.</p>
      </div>
    </div>
  </div>
</div>
    
  </div>
</div>


    `;
}

function gereja() {
  let detail = document.getElementById("detail");
  detail.innerHTML = `
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.6977360189646!2d106.7943753418765!3d-6.597674053683715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5b8074a3171%3A0x4dde5cd53173306d!2sGPIB%20Zebaoth!5e0!3m2!1sen!2sid!4v1777556572877!5m2!1sen!2sid" class="container-sm d-flex justify-content-center" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        <div class="container mt-4">
<p class="mt-5 animate__animated animate__fadeInDown container-sm">
  Di balik pagar besi yang kokoh dan naungan pepohonan hijau yang berbatasan langsung dengan rimbunnya Kebun Raya Bogor, berdiri megah sebuah monumen arsitektur kolonial yang dikenal sebagai GPIB Zebaoth. Gereja ini bukan sekadar tempat peribadatan rutin, melainkan saksi bisu perjalanan sejarah Kota Bogor dari era Buitenzorg hingga masa kini yang menyimpan nilai estetika serta sejarah religi yang mendalam.
</p>

  <div class="row">
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body animate__animated animate__fadeInDown">
    <h5 class="card-title text-white">Asal-Usul ( <code>GPIB Zebaoth</code> )</h5>
    <p class="card-text text-white">
Sejarah pendirian dan identitas gereja:
Nama Awal: Dahulu dikenal sebagai Koningin Wilhelmina Kerk saat masa kolonial.
Fungsi: Dibangun khusus sebagai tempat ibadah bagi warga Eropa di area Bogor.    </div>
</div>
    </div>
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body animate__animated animate__fadeInDown">
    <h5 class="card-title text-white">Timeline ( <code>pembangunan</code> )</h5>
    <p class="card-text text-white">
1920: Peletakan batu pertama dan dimulainya konstruksi bangunan gereja.
Pasca-Kolonial: Beralih fungsi menjadi GPIB Zebaoth di bawah naungan sinode.
Sekarang: Berdiri sebagai cagar budaya religi di Kebun Raya Bogor.</p>
    </div>
</div>
    </div>
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body animate__animated animate__fadeInDown">
    <h5 class="card-title text-white">Dokumen/Bukti ( <code>arsip/fisik</code> )</h5>
    <p class="card-text text-white">
Validitas berdasarkan temuan lapangan:
Arsip: Tercatat dalam dokumen sejarah arsitektur kolonial Hindia Belanda.
Fisik: Menara lonceng dan gaya arsitektur Indische yang masih terjaga asli.</p>
    </div>
</div>
    </div>
  </div>
</div>
<div class="border-bottom mt-4 container-sm"></div>

    <div class="container px-4 mt-5">
  <div class="row gx-5">
    <div class="col">
      <div class="p-3">
        <h2 class="animate__animated animate__fadeInDown mt-5">Konteks Waktu</h2>
        <p>
          GPIB Zebaoth dibangun pada awal abad ke-20, tepatnya mulai tahun 1920. Arsitekturnya mencerminkan gaya kolonial modern yang disesuaikan dengan iklim tropis Bogor. Lokasinya yang sangat strategis di tepi Kebun Raya Bogor menunjukkan betapa pentingnya bangunan ini dalam tata kota masa lalu.
        </p>

      </div>
    </div>
    <div class="col">
      <div class="p-3">
        <h2 class="animate__animated animate__fadeInDown mt-5">Fungsi Awal</h2>
        <p>
      Sejak awal berdiri, gedung ini difungsikan sebagai sarana ibadah umat Protestan. Selain menjadi pusat kegiatan spiritual, Zebaoth juga menjadi simbol kehadiran komunitas Eropa di Bogor pada masa itu, sebelum akhirnya terbuka untuk seluruh jemaat tanpa memandang latar belakang bangsa.
</p>

      </div>
    </div>

    <div class="accordion" id="accordionExample" data-bs-theme="dark">
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
⚔️ Peristiwa Penting: Menjadi saksi bisu perkembangan Kota Bogor dari era Buitenzorg hingga masa kemerdekaan.    </div>
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
Menjadi bukti kehidupan manusia prasejarah
Digunakan sebagai objek penelitian arkeologi
Menjadi bagian dari warisan budaya lokal<br>
📖 Legenda / Cerita Lokal (Paragraf)
Di masyarakat sekitar, Batu Dakon sering dikaitkan dengan cerita mistis atau dianggap sebagai benda keramat. Ada yang percaya bahwa batu ini digunakan untuk ritual persembahan kepada leluhur atau memiliki kekuatan tertentu. Cerita-cerita ini berkembang secara turun-temurun dan menambah daya tarik budaya dari situs tersebut.</p>
      </div>
    </div>
  </div>
</div>
    
  </div>
</div>

    `;
}

function overloopKelder() {
  let detail = document.getElementById("detail");
  detail.innerHTML = `
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.0621849987424!2d106.8442773409741!3d-6.490155199083056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c1e3a55a7a85%3A0x5dca479c74e006aa!2sOverloopkelder%20(Pos%202%20Waterleiding%20Batavia)!5e0!3m2!1sid!2sid!4v1777293363406!5m2!1sid!2sid" class="container-sm d-flex justify-content-center" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                
<p class="mt-5 animate__animated animate__fadeInDown container-sm">
            Di balik hiruk-pikuk modernitas pusat Kota Bogor, berdiri sebuah tugu batu yang menjulang sunyi namun penuh wibawa, dikenal sebagai Overloop Kelder Obelisk. Situs ini bukan sekadar pilar beton tanpa makna, melainkan sebuah saksi bisu kecanggihan sistem pengairan masa kolonial yang pernah menjadi denyut nadi kehidupan di wilayah ini.
        </p>

        <div class="container mt-4">
  <div class="row">
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body animate__animated animate__fadeInDown">
    <h5 class="card-title text-white">Asal-Usul ( <code>Overloop Kelder Obelisk</code> )</h5>
    <p class="card-text text-white">
Berasal dari istilah bahasa Belanda:
<b>Overloop</b> : Aliran atau limpahan air.
<b>Kelder</b> : Ruang bawah tanah / bak penampung.
<b>Obelisk</b> : Tugu atau penanda.
    </p>
    </div>
</div>
    </div>
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body" animate__animated animate__fadeInDown>
    <h5 class="card-title text-white">Timeline ( <code>pembangunan</code> )</h5>
    <p class="card-text text-white">
    1922 → Dibangun oleh Belanda
Masa kolonial → Distribusi air Bogor–Batavia
Pasca kemerdekaan → Tetap digunakan
2025 → Ditetapkan sebagai cagar budaya
Sekarang → Situs sejarah & edukasi</p>
    </div>
</div>
    </div>
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body animate__animated animate__fadeInDown">
    <h5 class="card-title text-white">Dokumen/Bukti ( <code>arsip/fisik</code> )</h5>
    <p class="card-text text-white">
Validasi sejarah dan struktur:
Arsip: Tercatat dalam jaringan air Belanda (Leidingnet Buitenzorg).
Fisik: Bangunan asli tahun 1922 masih berdiri kokoh dan terawat.
    </p>
    </div>
</div>
    </div>
  </div>
</div>
<div class="border-bottom mt-4 container-sm"></div>

    <div class="container px-4 mt-5">
  <div class="row gx-5">
    <div class="col">
      <div class="p-3">
        <h2 class="animate__animated animate__fadeInDown mt-5">Konteks Waktu</h2>
        <p>Dibangun pada tahun 1922 oleh perusahaan air Belanda (Waterleiding Bedrijf Buitenzorg).
Berlokasi di kawasan Taman Air Mancur, Sempur, Bogor.</p>

      </div>
    </div>
    <div class="col">
      <div class="p-3">
        <h2 class="animate__animated animate__fadeInDown mt-5">Fungsi Awal</h2>
        <p>Berfungsi sebagai:
Gardu pembagi air bersih
Mengalirkan air dari mata air Ciburial (Gunung Salak)
Air didistribusikan ke:
Kota Bogor (Buitenzorg)
Bahkan hingga Batavia (Jakarta)</p>

      </div>
    </div>

    <div class="accordion" id="accordionExample" data-bs-theme="dark">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Perkembangan Situs
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        🔁 Perubahan Fungsi
Masa Kolonial:
Infrastruktur vital penyedia air bersih
Setelah kemerdekaan:
Tetap digunakan sebagai bagian sistem air
Sekarang:
Ditetapkan sebagai cagar budaya (2025)
Simbol sejarah dan edukasi<br>
🏛️ Arsitektur / Bentuk Fisik
Bangunan kecil berbentuk:
Struktur beton/ruang penampung air
Terdapat elemen tugu (obelisk)
Tidak mengalami banyak perubahan:
Masih mempertahankan bentuk asli
Hanya ditambah penanda sebagai situs sejarah<br>
⚔️ Peristiwa Penting
16 Agustus 2025:
Resmi ditetapkan sebagai cagar budaya oleh Pemkot & Pemkab Bogor
Menjadi simbol:
Persatuan Kota & Kabupaten Bogor
Sejarah pelayanan air bersih
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
Sumber utama air bersih masyarakat & pemerintah kolonial
Sekarang:
Simbol sejarah infrastruktur kota
Edukasi tentang sistem air masa lalu.<br>
📖 Nilai Historis
Bukan legenda seperti situs kerajaan, tetapi:
Bukti nyata teknologi kolonial
Menunjukkan pentingnya air sebagai “sumber kehidupan”.<br>
🌏 Status Saat Ini
Menjadi:
Cagar budaya resmi di Bogor
Bagian dari identitas sejarah kota
Masih dikenal sebagai:
👉 Pos Air Mancur / Kelder Air Mancur        </p>
      </div>
    </div>
  </div>
</div>
    
  </div>
</div>

    `;
}

function makamPajajaran() {
  let detail = document.getElementById("detail");
  detail.innerHTML = `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4086997791965!2d106.79747847604155!3d-6.59602056448132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5c69fdcf659%3A0xd8b51461b5d70c32!2sKomplek%20Makam%20Keramat%20Kebun%20Raya%20Bogor!5e0!3m2!1sen!2sid!4v1776780772086!5m2!1sen!2sid" class="container-sm d-flex justify-content-center" width="100%" height="200" style="border:0;" allowfullscreen="" class="animate__animated animate__fadeInDown" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <p class="mt-5 animate__animated animate__fadeInDown container-sm">
            Di balik kerimbunan pepohonan purba dan suasana hening yang menyelimuti area Kebun Raya Bogor, tersembunyi sebuah situs bersejarah yang dikenal sebagai Kompleks Makam Kerajaan Pajajaran. Situs ini bukan sekadar tumpukan batu nisan tua, melainkan sebuah gerbang masa lalu yang menghubungkan kita dengan masa keemasan Kerajaan Sunda. <b>Beberapa tokoh yang terlibat diantaranya:</b>
        </p>

        <div class="container mt-4">
  <div class="row">
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body animate__animated animate__fadeInDown">
    <h5 class="card-title text-white">Asal usul ( <code>Makam Pajajaran</code> )</h5>
    <p class="card-text text-white">
      Nama “Mbah Dalem” berasal dari:
“Mbah” → sebutan hormat untuk orang tua/leluhur
“Dalem” → berarti bangsawan / orang dalam istana / tokoh penting
    </p>
    </div>
</div>
    </div>
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body" animate__animated animate__fadeInDown>
    <h5 class="card-title text-white">Timeline ( <code>Pembangunan</code> )</h5>
    <p class="card-text text-white">
      Abad 15–16 → Diduga masa pemakaman
Setelah Pajajaran runtuh → Terlupakan
Abad 20 → Ditemukan kembali
Sekarang → Tempat ziarah & situs budaya
    </p>
    </div>
</div>
    </div>
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body animate__animated animate__fadeInDown">
    <h5 class="card-title text-white">Dokumen/Bukti ( <code>Fisik/Arsip</code> )</h5>
    <p class="card-text text-white">
      Tidak ditemukan prasasti resmi
Informasi berasal dari:
Cerita masyarakat
Catatan sejarah lokal terbatas
Ini membuat status sejarahnya:
Semi-legendaris (gabungan fakta & tradisi)
    </p>
    </div>
</div>
    </div>
  </div>
</div>
<div class="border-bottom mt-4 container-sm"></div>

    <div class="container px-4 mt-5">
  <div class="row gx-5">
    <div class="col">
      <div class="p-3">
        <h2 class="animate__animated animate__fadeInDown mt-5">Konteks Waktu</h2>
        <p>Diperkirakan berasal dari masa akhir Kerajaan Pajajaran (± abad ke-15–16).
Kompleks makam ini ditemukan kembali sekitar tahun 1946 oleh warga setempat.
Tidak ada bukti kuat bahwa ini adalah makam Prabu Siliwangi.</p>

      </div>
    </div>
    <div class="col">
      <div class="p-3">
        <h2 class="animate__animated animate__fadeInDown mt-5">Fungsi Awal</h2>
        <p>Diduga sebagai:
Tempat pemakaman tokoh penting kerajaan
Area sakral/keramat
Bukan pusat kerajaan, melainkan bagian dari kawasan spiritual.</p>

      </div>
    </div>

    <div class="accordion" id="accordionExample" data-bs-theme="dark">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Perkembangan Situs
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Masa Pajajaran: Digunakan sebagai area sakral bagi tokoh kerajaan.<br>
        Pasca Runtuh: Sempat terlupakan dan tertutup vegetasi hutan selama berabad-abad.<br>
        Era Modern: Kini berfungsi sebagai situs sejarah, cagar budaya, dan lokasi ziarah di Bogor.
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
            Ziarah: Menjadi lokasi refleksi budaya Sunda dan ketenangan batin bagi pengunjung.<br>
            Mitos: Sering dikaitkan dengan keluarga Prabu Siliwangi, meski beliau sendiri dipercaya moksa (tidak dimakamkan di sini).<br>
            Suasana: Dikenal dengan atmosfer yang hening dan sakral di bawah pepohonan purba.
        </p>
      </div>
    </div>
  </div>
</div>
    
  </div>
</div>
`;
}

function makamMbahDalem() {
  let detail = document.getElementById("detail");
  detail.innerHTML = `
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.175824927189!2d106.8049523859294!3d-6.62507024765105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5f90566f659%3A0x45408531f9418522!2sMakam%20Embah%20Dalem%20Batu%20tulis!5e0!3m2!1sid!2sid!4v1777341009830!5m2!1sid!2sid" class="container-sm d-flex justify-content-center" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        <p class="mt-5 animate__animated animate__fadeInDown container-sm">
            Di bawah naungan pepohonan rindang di kawasan Batutulis, berdiri sebuah situs keramat yang menjadi saksi bisu perjalanan spiritual dan sejarah Bogor, yakni Makam Mbah Dalem. Tempat ini bukan sekadar pusara kuno, melainkan sebuah simbol penghormatan kepada leluhur yang dipercaya sebagai sosok ulama sekaligus bangsawan penyebar agama Islam di tanah Pasundan.
            Suasana tenang dan sakral yang menyelimuti area ini seolah membawa kita kembali ke masa di mana kearifan lokal dan nilai-nilai luhur berpadu, menjadikan Makam Mbah Dalem sebagai destinasi religi yang menjaga erat warisan budaya dan spiritualitas masyarakat Bogor hingga saat ini.
        </p>

        <div class="container mt-4">
  <div class="row">
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body animate__animated animate__fadeInDown">
    <h5 class="card-title text-white">Asal usul ( <code>Makam Mbah Dalem</code> )</h5>
    <p class="card-text text-white">
      Mbah Dalem merujuk pada sosok bangsawan sekaligus ulama yang sangat dihormati di tanah Pasundan. Lokasi makam ini berada di kawasan Kebun Raya Bogor, yang dahulu merupakan pusat wilayah Pakuan Pajajaran. Keberadaannya menjadi simbol transisi spiritual dari era kerajaan menuju penyebaran nilai keagamaan yang luhur di wilayah Bogor.
    </p>
    </div>
</div>
    </div>
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body" animate__animated animate__fadeInDown>
    <h5 class="card-title text-white">Timeline ( <code>makam</code> )</h5>
    <p class="card-text text-white">
      Abad 15–16 menjadi masa awal keberadaan situs ini pasca-runtuhnya Pajajaran. Sempat terabaikan selama berabad-abad, situs makam ini ditemukan kembali pada awal abad ke-20. Kini, Makam Mbah Dalem telah ditetapkan sebagai situs cagar budaya sekaligus destinasi ziarah utama yang menjaga napas sejarah tetap hidup di tengah modernitas.
    </p>
    </div>
</div>
    </div>
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body animate__animated animate__fadeInDown">
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

    <div class="container px-4 mt-5">
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
    
  </div>
</div>

    `;
}

function stasiunBogor() {
  let detail = document.getElementById("detail");
  detail.innerHTML = `
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.456424206466!2d106.7814827348877!3d-6.590051499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5b3076ac8cf%3A0xbd4cbea969b264e7!2sstasiun%20bogor%20kota!5e0!3m2!1sid!2sid!4v1777339789819!5m2!1sid!2sid" class="container-sm d-flex justify-content-center" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <p class="mt-5 animate__animated animate__fadeInDown container-sm">
            Berdiri megah di jantung kota dengan arsitektur bergaya Eropa yang masih terjaga, Stasiun Bogor bukan sekadar titik pemberhentian transportasi, melainkan pintu gerbang waktu yang telah menghubungkan ribuan cerita sejak akhir abad ke-19. Bangunan ini bukan hanya deretan peron yang sibuk, melainkan saksi bisu perkembangan peradaban dan denyut nadi mobilitas yang menyatukan Bogor dengan wilayah di sekitarnya.
            Setiap sudut ornamen klasiknya membisikkan narasi tentang masa lalu, menjadikannya sebuah monumen hidup yang terus bernapas di tengah modernitas, mengantarkan kita pada jejak sejarah perkeretaapian yang melegenda.
        </p>

        <div class="container mt-4">
  <div class="row">
    <div class="col">
      <div class="card" style="width: 100%;">
  <div class="card-body animate__animated animate__fadeInDown">
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
  <div class="card-body" animate__animated animate__fadeInDown>
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
  <div class="card-body animate__animated animate__fadeInDown">
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

    <div class="container px-4 mt-5">
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
    
  </div>
</div>

    `;
}

const card = (data) =>
  data.map(
    (item) => `
    <div class="col mb-4">
        <div class="card">
            <div class="card-body bg-dark p-0 d-flex align-items-center rounded-3" style="padding-right: 20px !important;" onclick="${item.interaction || ""}">
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

            <a href="/src/pages/structure/about.html" class="text-white animate__animated animate__fadeInDown" style="margin-top: 150px;">
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

<button type="button" class="btn btn-outline-light" onclick="btnSearch()" style="height: 35px !important; border-radius: 10px !important;">Search</button>

</div>
            <div class="row row-cols-1 row-cols-sm-2 mt-5 row-cols-md-4 animate__animated animate__fadeInDown">
                ${card(tempatWisata)}
            </div>
            <div class="mt-5 p-4 border-top border-secondary text-white">
                <div id="detail" class="animate__animated animate__fadeInDown" style="margin-top: 50px;">
                  
                <button class="btn d-flex justify-content-center mx-auto flex-direction-coloumn" type="button" disabled>
  <span role="status">Pilih salah satu tempat sejarah untuk memunculkan detail sejarah</span>
</button>
                </div>
            </div>
        </section>     
    </div>
    <div class="footer p-3 border-top border-secondary bg-black" style="height: 90px; flex-shrink: 0;"></div>
</div>
`;
