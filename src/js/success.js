"use strict";

(function timer() {
  let seconds = 7;
  const timer = setInterval(() => {
    const time = document.querySelector(".timer");
    seconds--;
    time.innerHTML = `Redirect in ${seconds}`;

    if (seconds == 0) {
      document.location.href = "https://sikorskanotary.co.uk";
      clearInterval(timer);
    }
  }, 1000);
})();
