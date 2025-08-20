document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion");
  const buttons = document.querySelectorAll(".menu-btn");
  const webview = document.getElementById("webview");

  // Handle accordion toggle and active state
  accordions.forEach(accordion => {
      accordion.addEventListener("click", () => {
          const panel = accordion.nextElementSibling;

          // Remove active class from all accordions
          accordions.forEach(acc => acc.classList.remove("active"));

          // Jika panel sedang terbuka, tutup dan hapus active
          if (panel.classList.contains("open")) {
              panel.classList.remove("open");
          } else {
              // Tutup semua panel lainnya sebelum membuka yang baru
              document.querySelectorAll(".panel.open").forEach(openPanel => {
                  openPanel.classList.remove("open");
              });

              panel.classList.add("open");
              accordion.classList.add("active"); // Tambahkan active ke accordion yang diklik
          }
      });
  });

  // Handle menu button clicks
  buttons.forEach(button => {
      button.addEventListener("click", () => {
          // Hapus kelas active dari semua tombol
          buttons.forEach(btn => btn.classList.remove("active"));
          // Tambahkan kelas active ke tombol yang diklik
          button.classList.add("active");

          // Update iframe src
          const url = button.getAttribute("data-url");
          if (url) {
              webview.src = url;
          }
      });
  });
});
