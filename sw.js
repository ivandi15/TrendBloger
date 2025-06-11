// Untuk tahap instalasi service worker
self.addEventListener("install", async event => {
  // Membuka (atau membuat) cache bernama "pwa-assets"
  const cache = await caches.open("pwa-assets");

  // Menyimpan seluruh aset
  cache.addAll([
    "app.js",
    "index.html" ,
    "daftar.html",
    "login.html",
    "images/about.png",
    "images/Aku.jpg",
    "images/banner2.png",
    "images/bunker.jpg",
    "images/bunker1.jpg",
    "images/bunker2.jpg",
    "images/images.jpeg",
    "images/kaliurang.jpg",
    "images/kaliurang1.jpg",
    "images/kaliurang2.jpg",
    "images/klangon.jpg",
    "images/klangon1.jpg",
    "images/klangon2.jpg",
    "images/logo.png",
    "images/ngandong1.jpeg",
    "images/pindul.jpg",
    "images/pindul1.jpg",
    "images/pinus.jpg",
    "images/pinus1.jpg"
  ]); 
});
 
// Untuk menangani semua permintaan jaringan (fetch)
self.addEventListener("fetch", event => {
  event.respondWith(
    // Mencocokkan permintaan dengan aset yang sudah disimpan
    caches.match(event.request).then(cachedResponse => {
      // Jika ditemukan di cache, maka ambil dari cache
      // Jika tidak ditemukan, ambil dari jaringan (fetch online)
      return cachedResponse || fetch(event.request);
    })
  )
});