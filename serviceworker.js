self.addEventListener('fetch', async (event) => {
    event.respondWith(
        (async () => {
            const cachedResponse = await caches.match(event.request);
            if (cachedResponse) return cachedResponse;
            return fetch(event.request);
        })()
    );
});
