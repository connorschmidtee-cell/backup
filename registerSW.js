if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    // Scope stays /backup/ so this worker cannot control Daybook, Notes, or the other apps.
    navigator.serviceWorker.register("/backup/sw.js", { scope: "/backup/" }).catch(function () {});
  });
}
