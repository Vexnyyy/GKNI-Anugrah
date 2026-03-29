console.log("JS connect");
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

  next.addEventListener("click", () => {
    slider.scrollBy({ left: 270, behavior: "smooth" });
  });

  prev.addEventListener("click", () => {
    slider.scrollBy({ left: -270, behavior: "smooth" });
  });
});

function toggleMenu() {
  document.querySelector(".menu").classList.toggle("active");
}