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

document.addEventListener("DOMContentLoaded", function () {
  // Accordion initialization
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    item
      .querySelector(".accordion-header")
      .addEventListener("click", function () {
        const isActive = item.classList.contains("active");

        // Close all accordion items
        accordionItems.forEach((i) => {
          i.classList.remove("active");
          i.querySelector(".accordion-content").style.maxHeight = 0;
        });

        // Toggle the clicked item
        if (!isActive) {
          item.classList.add("active");
          const accordionContent = item.querySelector(".accordion-content");
          accordionContent.style.maxHeight =
            accordionContent.scrollHeight + "px";
        }
      });
  });

  // // Leaflet map initialization
  // if (document.getElementById("map")) {
  //   var map = L.map("map").setView([20.5937, 78.9629], 5); // Center on India

  //   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //     attribution:
  //       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  //   }).addTo(map);

  //   // Example data points
  //   var locations = [
  //     {
  //       coords: [28.6139, 77.209],
  //       description: "New Delhi: High food insecurity.",
  //     },
  //     {
  //       coords: [19.076, 72.8777],
  //       description: "Mumbai: Moderate food insecurity.",
  //     },
  //     {
  //       coords: [13.0827, 80.2707],
  //       description: "Chennai: Low food insecurity.",
  //     },
  //     {
  //       coords: [22.5726, 88.3639],
  //       description: "Kolkata: High food insecurity.",
  //     },
  //     {
  //       coords: [12.9716, 77.5946],
  //       description: "Bangalore: Moderate food insecurity.",
  //     },
  //   ];

  //   locations.forEach(function (location) {
  //     L.marker(location.coords).addTo(map).bindPopup(location.description);
  //   });
  // }

  // Chart.js initialization for data visualization
  // if (document.getElementById("hungerChart")) {
  //   var ctx = document.getElementById("hungerChart").getContext("2d");
  //   var hungerChart = new Chart(ctx, {
  //     type: "bar",
  //     data: {
  //       labels: ["State 1", "State 2", "State 3", "State 4", "State 5"],
  //       datasets: [
  //         {
  //           label: "Food Insecurity Level",
  //           data: [12, 19, 3, 5, 2],
  //           backgroundColor: "rgba(54, 162, 235, 0.2)",
  //           borderColor: "rgba(54, 162, 235, 1)",
  //           borderWidth: 1,
  //         },
  //       ],
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true,
  //         },
  //       },
  //     },
  //   });
  // }
});
