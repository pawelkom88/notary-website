const ctaBtn = document.querySelector(".cta-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// open modal
ctaBtn.addEventListener("click", () => {
  modal.classList.toggle("modal-active");
  overlay.classList.add("modal-active");
});

// close modal after clicking on overlay
overlay.addEventListener("click", () => {
  modal.classList.remove("modal-active");
  overlay.classList.remove("modal-active");
});

// close modal using keyboard
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    modal.classList.remove("modal-active");
    overlay.classList.remove("modal-active");
  }
});

// aria expanded after clicking hamburger true