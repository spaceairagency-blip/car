const CACHE_NAME = 'eid-mubarak-v1';
const ASSETS = [
    './',          // Apnar main HTML file
    'index.html',  // File name jodi index.html hoy
    'Eid Takbeer - Allahu Akbar Kabira (mp3cut.net).mp3',
    'https://fonts.googleapis.com/css2?family=Bungee&family=Poppins:wght@300;400;900&display=swap',
    'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js'
];

// Install Event: File gulo cache-e save kora
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// Fetch Event: Net na thakle cache theke file deya
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});