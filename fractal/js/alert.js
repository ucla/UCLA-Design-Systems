"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const alert = document.querySelectorAll(".ucla-alert .ucla-alert--close");
  console.log(alert);
  for (let i = 0; i < alert.length; i++) {
    // const $alertClose = alert[i].querySelector(".ucla-alert--close");
    // console.log($alertClose);
    alert[i].addEventListener("click", (e) => {
      e.stopPropagation();
      // console.log("clicked");
      e.currentTarget.closest(".ucla-alert").style.display = "none";
    });
  }
});
