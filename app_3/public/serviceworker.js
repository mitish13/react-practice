//3 event: install , fetch , active
// 'this' object refers to ServiceWorker class, creates first time when sw registered into app
const cacheName = "v1";
const cacheAssests = ["index.html", "offline.html"];

console.log(this);

this.addEventListener("install", (e) => {
  //calls once when sw object created (registered)

  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("cache opened");

        return cache.addAll(cacheAssests);
      })
      .catch((err) => console.log(err))
  );
});

this.addEventListener("fetch", (e) => {
  //will not called implicitly
  //respondWith: prevents browser default beh of fetching
  console.log(`fetch triggered: request: ${e}`);
  e.respondWith(
    caches
      .match(e.request)
      .then(() => {
        return fetch(e.request);
      })
      .catch(() => caches.match("offline.html"))
  );
});

this.addEventListener("active", (e) => {
  //active will try to active serviceworker
  console.log("active event triggered");

  const cacheList = [];
  cacheList.push(cacheName);

  e.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheList.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
