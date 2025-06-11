// Memanggil fungsi registerSW
registerSW(); 

// Fungsi async untuk mendaftarkan Service Worker
async function registerSW() {
  // Mengecek apakah browser mendukung fitur Service Worker
  if ('serviceWorker' in navigator) {
    try {
      // Mendaftarkan file "sw.js" sebagai Service Worker
      const registration = await navigator.serviceWorker.register("sw.js");       
    } catch (error) {
      // Menangkap dan menampilkan error
      showResult("Error while registering: " + error.message);
    }    
  } else {
    // Menampilkan pesan jika Service Worker tidak didukung
    showResult("Service workers API not available");
  }
}

// Fungsi untuk menampilkan pesan
function showResult(text) {
  document.querySelector("output").innerHTML = text;
}