const guideData = {
    router: {
        title: "Router Bekas ➡️ OpenWrt",
        content: `
            <p>Ubah router pabrikan menjadi router enterprise dengan fitur kustomisasi tanpa batas.</p>
            <h3>Fungsi Terbaik:</h3>
            <ul>
                <li><strong>AdGuard Home / Pi-hole:</strong> Blokir iklan di seluruh jaringan.</li>
                <li><strong>WireGuard VPN:</strong> Amankan koneksi & bypass pemblokiran.</li>
                <li><strong>Load Balancing / Failover:</strong> Gabungkan koneksi WiFi dan Modem 4G.</li>
            </ul>
            <h3>Langkah Eksekusi:</h3>
            <ol>
                <li>Cari tipe detail router di <em>OpenWrt Table of Hardware (ToH)</em>.</li>
                <li>Unduh file firmware factory image (.bin).</li>
                <li>Masuk ke halaman admin bawaan router (contoh: 192.168.1.1).</li>
                <li>Gunakan menu "Firmware Update" dan unggah file OpenWrt.</li>
                <li>Tunggu reboot. IP default baru biasanya menjadi 192.168.1.1.</li>
            </ol>
            <p style="color: #ff7b72; font-weight: bold; margin-top:10px;">[!] DO NOT POWER OFF DURING FLASHING</p>
        `
    },
    stb: {
        title: "STB Bekas ➡️ Armbian / Linux Server",
        content: `
            <p>Set-Top Box (seperti ZTE B860H) adalah mini-PC berbasis ARM yang cuma makan daya 5 Watt.</p>
            <h3>Potensi HomeLab:</h3>
            <ul>
                <li><strong>Docker Host:</strong> Jalankan puluhan kontainer aplikasi tanpa ngelag.</li>
                <li><strong>Home Assistant:</strong> Otomatisasi lampu & colokan pintar seluruh rumah.</li>
                <li><strong>Web Server (Nginx):</strong> Host website ST4NGKUDUT-WEB ini dari rumah.</li>
            </ul>
            <h3>Langkah Eksekusi:</h3>
            <ol>
                <li>Siapkan MicroSD & Card Reader.</li>
                <li>Unduh file image Armbian sesuai chipset STB (biasanya Amlogic).</li>
                <li>Flash (burn) image tersebut ke MicroSD menggunakan BalenaEtcher atau Rufus.</li>
                <li>Colok ke STB. Tahan tombol reset (di lubang AV) lalu nyalakan STB untuk boot dari MicroSD.</li>
                <li>Akses terminal via SSH dari laptop Anda.</li>
            </ol>
        `
    },
    pc: {
        title: "PC Jadul ➡️ Proxmox / NAS",
        content: `
            <p>Tenaga komputasi PC lawas jauh lebih besar. Sangat cocok untuk virtualisasi dan penyimpanan data besar.</p>
            <h3>Potensi HomeLab:</h3>
            <ul>
                <li><strong>Proxmox VE:</strong> Instal banyak OS sekaligus di satu PC (Windows, Ubuntu, pfSense) secara virtual.</li>
                <li><strong>TrueNAS / Nextcloud:</strong> Buat "Google Drive" milik sendiri tanpa batas kuota bulanan.</li>
                <li><strong>Media Server (Plex):</strong> Streaming film bajakan/legal langsung ke TV ruang tamu.</li>
            </ul>
            <h3>Langkah Eksekusi:</h3>
            <ol>
                <li>Siapkan Flashdisk untuk bootable.</li>
                <li>Unduh ISO OS (Proxmox/TrueNAS).</li>
                <li>Flash pakai Rufus.</li>
                <li>Boot PC dari Flashdisk, lalu ikuti panduan instalasinya.</li>
                <li>Lepas monitor dan keyboard. PC kini dikontrol murni lewat IP Address dari laptop lain.</li>
            </ol>
        `
    }
        hp: { 
        title: "HP Android Bekas ➡️ Server & CCTV",
        content: `
            <p>HP jadul dengan layar retak atau touchscreen mati? Jangan dibuang! Prosesor HP Android modern sudah cukup kuat untuk menjalankan server ringan.</p>
            <h3>Potensi HomeLab:</h3>
            <ul>
                <li><strong>IP Camera 24/7:</strong> Ubah jadi CCTV yang bisa dipantau dari luar rumah via internet.</li>
                <li><strong>Linux Server (Termux):</strong> Jalankan Node.js, Python, atau database MySQL langsung dari kantong Anda.</li>
                <li><strong>3D Printer Controller:</strong> Pakai aplikasi Octo4a untuk memantau mesin printer 3D.</li>
            </ul>
            <h3>Langkah Eksekusi:</h3>
            <ol>
                <li>Lakukan <em>Factory Reset</em> agar HP benar-benar bersih dan enteng.</li>
                <li>Untuk CCTV: Instal aplikasi <strong>IP Webcam</strong> dari PlayStore. Setel agar kamera tetap merekam walau layar dikunci.</li>
                <li>Untuk Server: Instal aplikasi <strong>Termux</strong> (disarankan unduh dari F-Droid, jangan PlayStore). Anda kini punya terminal Linux utuh!</li>
            </ol>
            <p style="color: #ff7b72; font-weight: bold; margin-top:10px;">[!] TIPS HARDWARE: Jika dinyalakan 24 jam nonstop dicolok charger, baterai bisa kembung. Disarankan melakukan "Bypass Baterai" (Dummy Battery) menggunakan modul step-down.</p>
        `
    }
};

function openModal(deviceId) {
    const modal = document.getElementById("guideModal");
    const title = document.getElementById("modalTitle");
    const body = document.getElementById("modalBody");

    const data = guideData[deviceId];
    title.innerHTML = data.title;
    body.innerHTML = data.content;

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("guideModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("guideModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
