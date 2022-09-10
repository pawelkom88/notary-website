function innit() {
  const body = document.querySelector("body");
  const ctaBtn = document.querySelector(".cta-btn");
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const closeBtn = document.querySelector(".close");
  const hamburger = document.querySelector(".hamburger");
  const mobileLink = document.querySelectorAll(".mobile__menu-link");
  const contactLink = mobileLink[mobileLink.length - 1];

  // open mobile menu by clicking on hamburger icon
  hamburger.addEventListener("click", () => {
    openMobileMenu();
  });

  // close mobile menu after clicking in contact
  contactLink.addEventListener("click", () => {
    openMobileMenu();
  });

  // open modal
  ctaBtn.addEventListener("click", () => {
    addActiveClasses();
  });

  // close modal after clicking on overlay
  overlay.addEventListener("click", () => {
    removeActiveClasses();
  });

  // close modal after clickingclose button
  closeBtn.addEventListener("click", () => {
    removeActiveClasses();
  });

  // close modal using ESC key
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      removeActiveClasses();
    }
  });

  // close modal ENTER key Enter when button is focused
  closeModalByKey();

  trapFocus();

  //////////////////////////////////////
  ///// functions declarations ///////
  //////////////////////////////////////

  function openMobileMenu() {
    const mobileMenu = document.querySelector(".mobile__menu");
    const lines = document.querySelectorAll(".line");
    
    mobileMenu.classList.toggle("menu-open");
    body.classList.toggle("overflow");

    lines.forEach(line => {
      line.classList.toggle("open");
      line.classList.toggle("hamburger-open");
    });

    if (hamburger.getAttribute("aria-expanded") === "false") {
      hamburger.setAttribute("aria-expanded", true);
    } else {
      hamburger.setAttribute("aria-expanded", false);
    }
  }

  function removeActiveClasses() {
    modal.classList.remove("modal-active");
    overlay.classList.remove("modal-active");
    body.classList.remove("overflow");
  }

  function addActiveClasses() {
    modal.classList.add("modal-active");
    overlay.classList.add("modal-active");
    body.classList.add("overflow");
    closeBtn.focus({preventScroll: true});
  }

  function closeModalByKey() {
    document.addEventListener(
      "focusin",
      () => {
        if (document.activeElement === closeBtn) {
          closeBtn.addEventListener("keydown", e => {
            if (e.key === "Enter") {
              removeActiveClasses();
            }
          });
        }
      },
      true
    );
  }

  function trapFocus() {
    const firstEl = closeBtn;
    const lastEl = document.querySelector(".btn-focus");

    modal.addEventListener("keydown", e => {
      const submitBtn = document.querySelector(".form_btn");
      const isTabPressed = e.key === "Tab";
      const hasFocus = document.activeElement;

      if (!isTabPressed) {
        return;
      }

      if (e.shiftKey) {
        if (hasFocus === firstEl) {
          submitBtn.focus();
          e.preventDefault();
        }
      } else {
        if (hasFocus === lastEl) {
          closeBtn.focus();
          e.preventDefault();
        }
      }
    });
  }
}

innit();
