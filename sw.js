// Service Worker untuk PWA UmKla - Website Wisata Umbul Klaten
// File ini mengatur caching dan offline functionality

const CACHE_NAME = "umkla-cache-v1";

// Daftar file yang perlu di-cache untuk akses offline
const urlsToCache = [ 
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
];

// Event Install - Dijalankan saat SW pertama kali diinstall
self.addEventListener("install", async event => {
  // Buka cache dan tambahkan semua file yang diperlukan
  const cache = await caches.open(CACHE_NAME);
  console.log("Service Worker: Menyimpan file ke cache...");
  await cache.addAll(urlsToCache);
});

// Event Fetch - Dijalankan setiap kali browser meminta file
self.addEventListener("fetch", event => {
  event.respondWith(
    // Cek apakah file ada di cache
    caches.match(event.request)
      .then(cachedResponse => {
        // Jika ada di cache, gunakan versi cache
        if (cachedResponse) return cachedResponse;

        // Jika tidak ada, coba ambil dari server
        return fetch(event.request).catch(() => {
          // Jika offline dan request gambar, tampilkan logo default
          if (event.request.destination === 'image') {
            return caches.match('/PWM3SW/images/logoumkla.png');
          }

          // Selain gambar, abaikan error (tidak tampilkan fallback)
          return new Response('', {
            status: 503,
            statusText: 'Offline - resource not available in cache'
          });
        });
      })
  );
});
