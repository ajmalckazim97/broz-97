document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

const swiper = new Swiper('.swiper', {
  slidesPerView: 2, // ✅ show only 2 cards by default
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    768: { slidesPerView: 2 }, // tablets
    1024: { slidesPerView: 3 }, // laptops
    1440: { slidesPerView: 4 }, // large screens
  },
});