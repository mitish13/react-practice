//firebase imports
importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js");

//3 event: install , fetch , active
// 'this' object refers to ServiceWorker class, creates first time when sw registered into app
const cacheName = "v1";
const cacheAssests = ["/index.html", "/offline.html"];

this.addEventListener("install", (e) => {
  //calls once when sw object created (registered)
  console.log("SW installing...");
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

//By doing this we can provide "offline page"
this.addEventListener("fetch", (e) => {
  //respondWith: prevents browser default beh of fetching
  console.log(`fetch triggered: request: ${e}`);
  e.respondWith(
    caches
      .match(e.request)
      .then(() => {
        return fetch(e.request); //uses network;
      })
      .catch(() => caches.match("offline.html"))
  );
});

console.log(this.caches.keys().then((data) => console.log(data)));
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

//firebase cloud messaging code

firebase.initializeApp({
  apiKey: "AIzaSyCfg4-emg6_lqNfen25TEzHSGA9VSATlXA",
  authDomain: "fcmdemo-89ec1.firebaseapp.com",
  projectId: "fcmdemo-89ec1",
  storageBucket: "fcmdemo-89ec1.appspot.com",
  messagingSenderId: "314749560079",
  appId: "1:314749560079:web:f866bcf3837d49d12b0a7a",
});

firebase.onBackgroundMessage((payload) => {
  console.log(payload, " firebase onBackground called");
});
