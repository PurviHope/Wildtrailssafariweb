document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("overlayMenu");

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove("show");
    }
  });
});
//Safari script
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 120;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
//MAP
const pins = document.querySelectorAll(".map-pin");
const popup = document.getElementById("mapPopup");
const popupTitle = document.getElementById("popupTitle");
const popupInfo = document.getElementById("popupInfo");

pins.forEach(pin => {
  pin.addEventListener("click", (e) => {
    popupTitle.innerHTML = pin.dataset.title;
    popupInfo.innerHTML = pin.dataset.info;

    popup.style.display = "block";
    popup.style.top = `calc(${pin.style.top} - 70px)`;
    popup.style.left = `calc(${pin.style.left} + 20px)`;
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("map-pin")) {
    popup.style.display = "none";
  }
});
//Slider Home
document.addEventListener("DOMContentLoaded", function () {

  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".slider-next");

  if (!slides.length || !nextBtn) {
    console.log("Slider elements not found");
    return;
  }

  let current = 0;

  nextBtn.addEventListener("click", function () {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  });

});
