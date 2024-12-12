import React, {useState} from "react";
import Accordion from "./Accordion.jsx";

const Tabs = ({tabs}) => {
    const [activeTab, setActiveTab] = useState(0);

    const faqAbout = [
        {
            question: "Apa itu acara MyPertamina Fair Show 2024?",
            answer: `<p>MyPertamina Fair Show 2024 akan diselenggarakan pada tanggal 21-22 Desember 2024 di Istora Senayan GBK Jakarta. Event ini diselenggarakan  sebagai rangkaian dari MyPertamina Fair 2024. </p>
<p>MyPertamina Fair merupakan persembahan dari PT Pertamina Patra Niaga untuk pelanggan setia MyPertamina yang memiliki poin MyPertamina.</p>
<p>#TinggalTukarAja poin MyPertamina di MyPertamina Fair dengan berbagai penawaran menarik sebelum poin hangus diawal tahun 2025.</p>
`,
        },
        {
            question: "Dimana dan Kapan pelaksanaan MyPertamina Fair Show 2024?",
            answer:
                "MyPertamina Fair Show 2024 akan dilaksanakan di Istora Senayan, GBK, Jakarta pada tanggal 21-22 Desember 2024.",
        },
        {
            question: "Apakah acara MyPertamina Fair Show 2024 berbayar?",
            answer: "Untuk masuk ke acara MyPertamina Fair Show 2024 GRATIS, Pengunjung bisa menikmati Jiffy Bazaar, Jiffy Kitchen, Jiffy Workshop, Jiffy Auto, Jiffy Playground, Jiffy Stage dan MyPertamina Stage. Namun, pada area MyPertamina Stage, Pengunjung WAJIB memiliki tiket konser yang dapat dilakukan dengan penukaran poin di Aplikasi MyPertamina." ,
        },
        {
            question: "Apa saja yang ada di MyPertamina Fair Show 2024?",
            answer: `
<div>
            <p>MyPertamina Fair Show 2024 menawarkan beberapa area yang dapat dikunjungi pengunjung yaitu:</p>
<ol>
  <li>
    <strong>MyPertamina Stage</strong>
    <p>Merupakan konser artis Indonesia. Pengunjung menukarkkan poin MyPertamina menjadi voucher tiket masuk MyPertamina Fair Show 2024.</p>
    <p>Line up MyPertamina Stage:</p>
    <ol type="1">
      <li>Day 1 - 21 Desember 2024: RAN, Tipe-X, Feel Koplo</li>
      <li>Day 2 - 22 Desember 2024: D'Masiv, The Changcuters, Ndarboy</li>
    </ol>
  </li>
  <li>
    <strong>Jiffy Bazaar</strong>
    <p>MyPertamina Fair Show 2024 menyediakan berbagai barang-barang pilihan istimewa. Pengunjung dapat berbelanja menggunakan aplikasi MyPertamina.</p>
  </li>
  <li>
    <strong>Jiffy Kitchen</strong>
    <p>MyPertamina Fair Show 2024 menyediakan berbagai pilihan makanan dan minuman yang istimewa. Pengunjung dapat berbelanja menggunakan aplikasi MyPertamina.</p>
  </li>
  <li>
    <strong>Jiffy Auto</strong>
    <p>MyPertamina Fair Show 2024 menyediakan area bagi pengunjung yang memiliki hobi otomotif. Berbagai jenis dan merek otomotif dapat dilihat.</p>
  </li>
  <li>
    <p>Komunitas mobil akan bergabung di Jiffy Auto. Selain itu, pengunjung dapat bermain Official Simulator MotoGP secara GRATIS. Official Simulator MotoGP merupakan simulator istimewa yang didatangkan khusus bagi pengunjung yang ingin merasakan pengalaman sebagai pembalap MotoGP.</p>
  </li>
  <li>
    <strong>Jiffy Workshop</strong>
    <p>MyPertamina Fair Show 2024 menyediakan berbagai workshop yang menarik dan Pengunjung dapat bergabung pada workshop ini. Pengunjung dapat menukarkkan poin MyPertamina untuk mengikuti kegiatan workshop sesuai jadwal yang tersedia.</p>
  </li>
  <li>
    <strong>Jiffy Playzone</strong>
    <p>MyPertamina Fair Show 2024 menyediakan Jiffy Playzone, Area bermain untuk anak-anak. Pengunjung dapat menukarkkan poin MyPertamina untuk dapat bermain di Jiffy Playzone.</p>
  </li>
</ol>
</div>`,
        },
        {
            question: "Apa saja promo yang ada di MyPertamina Fair Show 2024?",
            answer: `<ol>
  <li>
    <strong>Poin Frenzy</strong>
    <p>MyPertamina Fair Show 2024 menyediakan Program Flash Sale yang akan diadakan pada jam tertentu selama 67 menit dan pengunjung yang berbelanja minimum pembenlanjaan tertentu akan mendapatkan tambahan 67 poin.</p>
  </li>
  <li>
    <strong>Doorprize</strong>
    <p>Program undian langsung yang akan diadakan serta diumumkan langsung pada acara MyPertamina Fair Show 2024 pada waktu yang ditentukan dengan mengumpulkan data pengunjung MyPertamina Fair Show 2024.</p>
  </li>
  <li>
    <strong>Special Bidding</strong>
    <p>Program Bidding yang akan diadakan pada Jiffy Stage dan pada waktu yang ditentukan dengan memperbutkan beberapa item exclusive yang dapat dimiliki Pengunjung dengan poin tertinggi.</p>
  </li>
  <li>
    <strong>Merchandise Exclusive</strong>
    <p>Program tukar poin menjadi merchandise menarik. Pengunjung dapat menukarkan poin menjadi voucher merchandise dan dapat ditukarvkan di local merchandise.</p>
  </li>
  <li>
    <strong>UCollect</strong>
    <p>Program tukar minyak jelantah menjadi poin MyPertamina. Pengunjung dapat membawa minyak jelantah dan menukarkannya tersebut pada UCollect Box yang tersedia di area MyPertamina Fair Show 2024 agar ter-redeem menjadi Poin MyPertamina.</p>
  </li>
</ol>` ,
        },
        {
            question: "Siapa saja Line Up artis di MyPertamina Stage?",
            answer: `<p><b>MyPertamina Fair Show 2024 mempersembahkan Line up Artis:</b></p>
<p><b>Day 1 - 21 Desember 2024</b></p>
<ul>
  <li>RAN</li>
  <li>Tipe EX</li>
  <li>Feel Koplo</li>
</ul>
<p><p>Day 2 - 22 Desember 2024</p></p>
<ul>
  <li>D'Masiv</li>
  <li>The Changcuters</li>
  <li>Ndarboy</li>
</ul>
<p>Informasi lebih lanjut dapat di cek di aplikasi MyPertamina, akun sosial media @mypertamina atau website mypertamina.id</p>` ,
        },
        {
            question: "Dimana jadwal acara MyPertamina Fair Show 2024 dapat dilihat?",
            answer: "Jadwal Show dan aktivitas lainnya dapat di cek di Aplikasi MyPertamina, akun sosial media @mypertamina dan website mypertamina.id",
        },
        {
            question: "Pembayaran di MyPertamina Fair Show 2024 menggunakan apa?",
            answer: "MyPertamina Fair Show 2024 menggunakan aplikasi MyPertamina untuk melakukan seluruh transaksi saat acara berlangsung.",
        },
    ];

    const faqTikets = [
        {
            question: "Dimanakah Tiket MyPertamina Fair Show 2024 dapat ditukarkani?",
            answer:
                "Melalui Aplikasi MyPertamina dan cek Slider Banner MyPertamina Fair Show 2024 dan tukarkan poin MyPertamina menjadi voucher tiket sesuai kategori yang diinginkan atau Kunjungi Akun Instagram @mypertamina dan website mypertamina.id" ,
        },
        {
            question: "Kapan Tiket MyPertamina Fair Show 2024 dapat ditukarkan dengan poin melalui aplikasi MyPertamina?" ,
            answer:
                "Tiket MyPertamina Fair Show 2024 dapat ditukarkan mulai tanggal 4 Desember 2024 hingga 22 Desember 2024 selama ketersediaan Tiket masih ada.",
        },
        {
            question: "Berapa besaran poin yang dibutuhkan untuk mendapatkan tiket MyPertamina Fair Show 2024?",
            answer: `
<p>Tiket Artist Performance yaitu sebagai berikut:</p>
<ul>
  <li>Presale (Daily Pass) Tribune Redeem 10 Poin</li>
  <li>Presale (Daily Pass) Festival Redeem 20 Poin</li>
  <li>Presale (2 Days Pass) Tribune Redeem 20 Poin</li>
  <li>Presale (2 Days Pass) Festival Redeem 40 Poin</li>
  <li>Presale (2 Days Pass) VIP Redeem 80 Poin</li>
  <li>Regular (Daily Pass) Tribune Redeem 20 Poin</li>
  <li>Regular (Daily Pass) Festival Redeem 30 Poin</li>
  <li>Regular (2 Days Pass) Tribune Redeem 30 Poin</li>
  <li>Regular (2 Days Pass) Festival Redeem 50 Poin</li>
  <li>VIP (2 Days Pass) Tribune Redeem 40 Poin</li>
</ul>`,
        },
        {
            question: "Apakah ada batasan usia untuk Tiket MyPertamina Fair Show 2024?",
            answer: "Tidak ada batasan usia, pengunjung berusia diatas 7 tahun WAJIB memiliki Tiket." ,
        },
        {
            question: "Berapa batasan maksimal pembelian Tiket MyPertamina Fair Show 2024?" ,
            answer: "Maksimal pembelian Tiket MyPertamina Fair Show 2024 per transaksi dan per akun sebanyak 4 (empat) Tiket.",
        },
        {
            question: "Apa saja kategori Tiket MyPertamina Fair Show 2024 yang dapat dibeli di MyPertamina?",
            answer: "Kategori Tiket MyPertamina Fair Show 2024 yang diperjualbelikan melalui MyPertamina terbagi menjadi kategori Tribune, Festival dan VIP Tiket.",
        },
        {
            question: "Apakah ada penjualan Tiket On The Spot?",
            answer: "Ya, Penjualan Tiket On The Spot akan dibuka pada tanggal 21 - 22 Desember 2024 di Loket Tiket MyPertamina Fair Show 2024, Istora Senayan dan tetap menggunakan aplikasi MyPertamina dengan harga On The Spot atau berbeda dari harga voucher tiket presale dan Regular." ,

        },
        {
            question: "Berapa harga Tiket On The Spot MyPertamina Fair Show 2024?" ,
            answer: `<ul>
  <li>Daily Pass Tribune Redeem 30 Poin</li>
  <li>Daily Pass Festival Redeem 40 Poin</li>
  <li>2 Days Pass Tribune Redeem 50 Poin</li>
  <li>2 Days Pass Festival Redeem 70 Poin</li>
</ul>` ,
        },
        {
            question: "Apakah ada penjualan Tiket On The Spot?",
            answer: `Hanya melalui aplikasi MyPertamina pada fitur <b>Tukar Poin</b> dan menuju ke voucher Tiket yang tertera pada aplikasi sesuai dengan jenis kategori Tiket. Voucher yang sudah berhasil di redeem dapat ditukar menjadi Tiket pada tanggal acara berlangsung di loket acara, Istora Senayan.

` ,

        },
        {
            question: "Bagaimana cara mengetahui apabila transaksi redeem poin Voucher Tiket MyPertamina Fair Show 2024 telah berhasil?",
            answer: "bila transaksi Iredeem poin menjadi voucher Tiket MyPertamina Fair Show 2024 telah berhasil maka, Pengunjung MyPertamina akan mendapatkan voucher MyPertamina Fair Show 2024 pada menu ‘Voucher Anda’ dan kategori partner.",

        },  {
            question: "Bagaimana jika Voucher tidak muncul pada aplikasi MyPertamina?" ,
            answer: `<p>Pengunjung MyPertamina dapat me-refresh halaman aplikasi MyPertamina atau dapat memeriksa jaringan telepon.<p/><p>apabila voucher masih belum muncul, Pengunjung MyPertamina dapat menghubungi Pertamina Call Center 135 untuk dipandu  lebih lanjut.
<p/>` ,

        },  {
            question: "Apakah Voucher MyPertamina Fair Show 2024 yang telah berhasil di redeem harus ditukarkan menjadi gelang?",
            answer: "Voucher MyPertamina Fair Show 2024 yang telah berhasil ter-redeem WAJIB ditukarkan menjadi Tiket gelang pada tanggal berlangsungnya acara MyPertamina Fair Show 2024 yaitu 21-22 Desember 2024 di loket Tiket Istora Senayan.",

        },  {
            question: "Apakah ada perbedaan Tiket Tribune, Festival dan VIP?" ,
            answer: `<p>Perbedaan terdapat pada benefit yang diterima Pengunjung, berikut adalah tabel benefit per kategori Tiket MyPertamina Fair Show 2024 :</p><img src="https://res.cloudinary.com/dvhv8jwm8/image/upload/f_auto,q_auto/z2qb5sorpgyygewk4m2o">` ,

        },
        {
            question: "Apa perbedaan tiket Daily pass dan 2 Days Pass?",
            answer: `<ol>
                    <li>Pengunjung yang memiliki tiket Daily Pass dapat hadir MyPertamina Fair Show 2024 hanya pada salah satu hari yaitu pada tanggal 21 Desember ATAU 22 Desember 2024.</li>
                    <li>Pengunjung yang memiliki tiket 2 Days Pass dapat hadir MyPertamina Fair Show 2024 2 hari Event berlangsung yaitu pada tanggal 21 Desember DAN 22 Desember 2024.</li>
                    <ol/>`,

        },{
            question: "Apakah Tiket MyPertamina Fair Show 2024  yang sudah dibeli dapat dibatalkan?" ,
            answer: "Semua Tiket yang sudah dibeli tidak dapat dikembalikan dan non-refundable serta tidak dapat dipindah tangankan ke orang lain.",

        },{
            question: "Apakah bisa masuk ke area MyPertamina Fair Show 2024 tanpa tiket?",
            answer: "Pengunjung dapat memasuki area MyPertamina Fair Show 2024 hanya dengan menunjukan aplikasi MyPertamina dan bisa menikmati area jiffy bazaar, jiffy kitchen, jiffy auto dan Jiffy Playground.",

        },
        {
            question: "Apakah bisa masuk ke area konser tanpa tiket?",
            answer: "Pengunjung yang ingin menonton konser WAJIB memiliki tiket dengan menukarkan poin MyPertamina menjadi Voucher tiket MyPertamina Fair Show 2024 sesuai kategori yang diinginkan. Voucher tiket yang telah berhasil ditukar WAJIB ditukar menjadi tiket gelang di loket MyPertamina Fair Show 2024.",

        },{
            question: "Bolehkah memvalidasi sendiri voucher tiket yang telah berhasil ter-redeem?",
            answer: "Voucher tiket WAJIB ditukarkan dan di validasi oleh petugas di loket penukaran tiket. Hanya petugas yang boleh melakukan ‘slide’ atau validasi pada voucher tiket MyPertamina Fair Show 2024.",

        }
    ];

    return (
        <div>
            <div className="flex border-b w-full">
    {tabs.map((tab, index) => (
        <button
            key={index}
            className={`py-2 px-4 w-full ${activeTab === index ? "border-b-2 border-red-500" : ""}`}
            onClick={() => setActiveTab(index)}
        >
            <b>{tab.label}</b>
        </button>
    ))}
</div>
            <div className="p-4">
                {activeTab === 0 ? (<Accordion data={faqAbout}/>) : (<Accordion data={faqTikets}/>)}
            </div>
        </div>
    );
};

export default Tabs;