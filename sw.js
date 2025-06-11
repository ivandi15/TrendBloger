
self.addEventListener("install", async event => {
  const cache = await caches.open("pwa-assets");
  // it stores all resources on first SW install
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
 
self.addEventListener("fetch", event => {
   event.respondWith(
     caches.match(event.request).then(cachedResponse => {
	   // It can update the cache to serve updated content on the next request
         return cachedResponse || fetch(event.request);
     }
   )
  )
});

