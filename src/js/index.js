const ctaBtn = document.querySelector(".cta-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

ctaBtn.addEventListener("click", () => {
  modal.classList.toggle("modal-active");
  overlay.classList.add("modal-active");
});

overlay.addEventListener("click", () => {
  modal.classList.remove("modal-active");
  overlay.classList.remove("modal-active");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal.classList.remove("modal-active");
    overlay.classList.remove("modal-active");
  }
});
