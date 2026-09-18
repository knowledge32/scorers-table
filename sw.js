/* Scorer's Table service worker.
   The whole app is one HTML file with its fonts already inside it, so there is
   very little to keep: the page, its manifest and its icons. Cache them on
   install and serve from cache first, which is what lets iOS run this with no
   signal at all once it has been added to the home screen.

   Your seasons are NOT in here. They live in the browser's own storage on your
   device, and a cache update never touches them. */

const VERSION = "v3";
const CACHE = "scorers-table-" + VERSION;
const SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;

  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => {
      /* Serve instantly from cache, then quietly refresh it for next time. */
      const live = fetch(req).then(res => {
        if (res && res.status === 200 && res.type === "basic") {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => null);

      if (hit) return hit;
      return live.then(res => res || caches.match("./index.html"));
    })
  );
});
