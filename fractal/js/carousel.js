"use strict";
let vendor = require("./vendors/splide/splide");
document.addEventListener("DOMContentLoaded", function () {
  let elm = document.getElementsByClassName("ucla-carousel");
  for (let i = 0; i < elm.length; i++) {
    let data = elm[i].dataset;
    let mobilePerPage = data.perPage ? data.perPage : 1;
    let tabletPerPage = data.perPageMd ? data.perPageMd : 2;
    let desktopPerPage = data.perPageLg ? data.perPageLg : 3;
    let showArrows = data.arrows ? data.arrows : false;
    new vendor.Splide(elm[i], {
      classes: {
        pagination: "splide__pagination ucla-carousel__pagination",
        page: "splide__pagination__page ucla-carousel__page",
      },
      perPage: mobilePerPage,
      mediaQuery: "min",
      arrows: showArrows,
      gap: "1.5rem",
      autoHeight: true,
      breakpoints: {
        768: {
          perPage: tabletPerPage,
        },
        960: {
          perPage: desktopPerPage,
        },
      },
    }).mount();
  }
});
