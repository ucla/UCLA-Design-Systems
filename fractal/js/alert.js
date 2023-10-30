"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const alert = document.querySelectorAll(".ucla-alert .ucla-alert--close");
  for (let i = 0; i < alert.length; i++) {
    alert[i].addEventListener("click", (e) => {
      e.stopPropagation();
      e.currentTarget.closest(".ucla-alert").style.display = "none";
    });
  }
});
