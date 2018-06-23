self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
            '/',
            '/sw.js',
            '/css/styles.css',
            '/data/restaurants.json',
            '/js/main.js',
            '/js/restaurant_info.js',
            '/js/dbhelper.js'
            ])
        })
    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    )
})