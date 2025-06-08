const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
console.log("API KEY:", apiKey); 
if (!apiKey) {
  document.getElementById('map').innerHTML = '<p>Error: Unable to load map. Please contact support.</p>';
} else {
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

// Swiper initialization
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Locomotive Scroll and Accordion
document.addEventListener("DOMContentLoaded", function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    multiplier: 1,
  });

  scroll.update();

  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    item.querySelector(".accordion-header").addEventListener("click", function () {
      const isActive = item.classList.contains("active");

      accordionItems.forEach((i) => {
        i.classList.remove("active");
        i.querySelector(".accordion-content").style.maxHeight = 0;
      });

      if (!isActive) {
        item.classList.add("active");
        const accordionContent = item.querySelector(".accordion-content");
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      }
    });
  });
});

console.log("ENV:", import.meta.env);
console.log("API KEY:", import.meta.env.VITE_GOOGLE_MAPS_API_KEY);