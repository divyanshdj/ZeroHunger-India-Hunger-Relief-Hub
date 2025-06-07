// Dynamically load Google Maps API
const script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&callback=initMap`;
script.async = true;
script.defer = true;
document.head.appendChild(script);

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

// Google Maps code
let map;
const markers = [];

const stateDetails = {
  andamanandnicobar: { center: { lat: 11.7401, lng: 92.6586 }, zoom: 8 },
  // ... (rest of your stateDetails object)
};

const locations = {
  all: [
    {
      lat: 28.7041,
      lng: 77.1025,
      name: "Delhi Food Bank",
      details: "Providing meals and resources in Delhi.",
      state: "delhi",
    },
    // ... (rest of your locations array)
  ],
};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 20.5937, lng: 78.9629 }, // Center of India
    zoom: 5,
  });

  addMarkers("all");

  document.getElementById("stateDropdown").addEventListener("change", function () {
    const state = this.value;
    if (state === "all") {
      map.setCenter({ lat: 20.5937, lng: 78.9629 });
      map.setZoom(5);
      addMarkers("all");
    } else {
      const { center, zoom } = stateDetails[state];
      map.setCenter(center);
      map.setZoom(zoom);
      addMarkers(state);
    }
  });
}

function addMarkers(state) {
  markers.forEach((marker) => marker.setMap(null));
  markers.length = 0;

  locations.all.forEach((location) => {
    if (state === "all" || location.state === state) {
      const marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        title: location.name,
      });

      const infowindow = new google.maps.InfoWindow({
        content: `<div class="info-window-content">
                    <h6>${location.name}</h6>
                    <p>${location.details}</p>
                  </div>`,
      });

      marker.addListener("click", () => {
        infowindow.open(map, marker);
      });

      markers.push(marker);
    }
  });
}