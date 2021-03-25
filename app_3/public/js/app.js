if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("../serviceworker.js")
      .then((reg) => console.log("SW Registered " + reg.scope))
      .catch((err) => console.log(`Error: ${err}`));
  });
}
