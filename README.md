
# TANDHUR WebApp Series

TANDHUR adalah rangkaian aplikasi berbasis web (SaaS) untuk mendukung sektor pertanian, desa, perikanan, dan analisis spasial. Dikembangkan oleh PT Lumbung Muncul Sejahtera, aplikasi ini memudahkan pencatatan, monitoring, dan analisis data secara real-time dengan dukungan machine learning.

## Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Struktur Folder](#struktur-folder)
- [Instalasi & Menjalankan Project](#instalasi--menjalankan-project)
- [Aplikasi TANDHUR Series](#aplikasi-tandhur-series)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)
- [Kontak](#kontak)

---

## Fitur Utama

- **TANDHURAgriculture**: Monitoring aktivitas pertanian, analisis produktivitas, dan penghubung ke program pendanaan (KUR).
- **TANDHURDesa**: Sistem monitoring desa, pengelolaan data administrasi, dan partisipasi masyarakat.
- **TANDHURFisheries**: Estimasi produksi perikanan, monitoring tambak, dan rekomendasi pakan.
- **TANDHURSpatial**: Analisis data spasial, rekomendasi lokasi, dan integrasi MCDA untuk pengambilan keputusan.

Setiap aplikasi memiliki halaman, komponen, dan fitur spesifik yang dapat diakses melalui sidebar.

---

## Struktur Folder

```
src/
  app/
	 agriculture/           # Halaman & komponen TANDHURAgriculture
	 desa/                  # Halaman & komponen TANDHURDesa
	 fisher/                # Halaman & komponen TANDHURFisheries
	 spatial/               # Halaman & komponen TANDHURSpatial
	 landingpage/           # Halaman utama & hero section
	 tandhur-agriculture/   # Detail aplikasi Agriculture
	 tandhur-desa/          # Detail aplikasi Desa
	 tandhur-fisheries/     # Detail aplikasi Fisheries
	 tandhur-spatial/       # Detail aplikasi Spatial
	 components/layouts/    # Navbar, Sidebar, Footer, Appshell, Whatsapp
  public/
	 AllLogo/               # Logo aplikasi
	 carousel/, desa/, fish/, hero/, logos/, projects/, spatial/
```

---

## Instalasi & Menjalankan Project

1. **Install dependencies:**
	```bash
	npm install
	```
2. **Jalankan server development:**
	```bash
	npm run dev
	```
	Buka [http://localhost:3000](http://localhost:3000) di browser.

3. **Build untuk produksi:**
	```bash
	npm run build
	npm start
	```

---

## Aplikasi TANDHUR Series

- **Agriculture:** `/tandhur-agriculture`
- **Desa:** `/tandhur-desa`
- **Fisheries:** `/tandhur-fisheries`
- **Spatial:** `/tandhur-spatial`

Setiap aplikasi memiliki fitur monitoring, hero section, dan studi kasus implementasi.

---

## Kontribusi

Kontribusi terbuka untuk pengembangan fitur baru, perbaikan bug, dan peningkatan dokumentasi. Silakan buat pull request atau issue di repository.

---

## Lisensi

Lisensi: **Proprietary** (Hubungi PT Lumbung Muncul Sejahtera untuk penggunaan komersial).

---

## Kontak

- Email: marketing@lumbungmuncul.com
- Whatsapp: +62 818-999-771
- Alamat: Jl. Kalireso No.8, Yogyakarta 55582
- Instagram: [@tandhur.id](https://www.instagram.com/tandhur.id/)
- YouTube: [TANDHUR](https://www.youtube.com/watch?v=FWE1epVsX5M)
- TikTok: [@tandhur.id](https://www.tiktok.com/@tandhur.id)

---

