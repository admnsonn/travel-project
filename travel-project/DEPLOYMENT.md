# Panduan Deploy GreenTrail Travel ke Vercel

## ✅ Persiapan (Sudah Selesai)
- ✓ `vercel.json` dikonfigurasi dengan build command `npm run build`
- ✓ `.vercelignore` membuat build lebih ringan
- ✓ Project sudah siap untuk production build

## 📝 Langkah-Langkah Deploy

### 1. Inisialisasi Git Repository
Jalankan perintah berikut di terminal (pastikan Git sudah terinstall):

```bash
cd "c:\Users\Win11\OneDrive\Dokumen\Proyek Kodingan\travel-project\travel-project"

# Inisialisasi git
git init

# Tambahkan semua file
git add .

# Commit pertama
git commit -m "Initial commit: GreenTrail Travel website"
```

### 2. Push ke GitHub
1. Buka [GitHub.com](https://github.com)
2. Login atau buat akun baru
3. Klik **New Repository**
4. Nama: `travel-project`
5. Pilih **Private** atau **Public**
6. Jangan inisialisasi dengan README (sudah ada)
7. Klik **Create Repository**

Kemudian jalankan:
```bash
git remote add origin https://github.com/[USERNAME]/travel-project.git
git branch -M main
git push -u origin main
```

### 3. Deploy ke Vercel
#### Opsi A: Vercel Dashboard (Recommended)
1. Buka [Vercel.com](https://vercel.com)
2. Login dengan GitHub account
3. Klik **Add New** → **Project**
4. Pilih repository `travel-project`
5. Vercel otomatis mendeteksi:
   - **Framework Preset**: Vite
   - **Build Command**: npm run build
   - **Output Directory**: dist
6. Klik **Deploy**

#### Opsi B: Vercel CLI (Terminal)
```bash
# Install Vercel CLI (jika belum)
npm install -g vercel

# Deploy
vercel --prod
```

## 🔗 Akses Website
Setelah deploy selesai, URL akan seperti:
```
https://travel-project.vercel.app
```

## ⚙️ Konfigurasi Lanjutan (Opsional)

### Custom Domain
1. Di Vercel Dashboard → Project Settings
2. Domains → Add Custom Domain
3. Ikuti instruksi untuk setup DNS

### Environment Variables (jika perlu)
Di Vercel Dashboard → Project Settings → Environment Variables

## 📊 Monitoring
- Vercel Dashboard menampilkan real-time logs
- Setiap push ke GitHub otomatis trigger redeploy

## 🔄 Update Website
Setiap kali update kode:
```bash
git add .
git commit -m "Deskripsi perubahan"
git push origin main
```
Vercel otomatis redeploy dalam hitungan menit!

## ❌ Troubleshooting
Jika build gagal:
1. Cek logs di Vercel Dashboard
2. Pastikan `npm run build` berjalan lokal tanpa error
3. Verifikasi semua dependency tersedia di `package.json`

---
Sudah siap! Deploy sekarang juga 🚀
