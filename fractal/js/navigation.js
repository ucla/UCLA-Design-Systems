"use strict";

document.addEventListener("DOMContentLoaded", function () {
  /**
   * Declare Variables
   */
  const hamburger = document.getElementById("primary-ham");
  const header = document.getElementById("header-wrap");
  const $navPrimaryHasChildren = getAll(".ucla-main-nav__item--has-children");
  const $navPrimaryToggles = getAll(".ucla-main-nav__toggle");
  const searchButton = document.getElementById("search-button");
  const primaryNavSearch = document.getElementById("primary-nav-search");

  /**
   * Event Listeners
   */
  if (hamburger) {
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      if (header.classList.contains("is-open")) {
        hamburger.setAttribute("aria-expanded", "false");
      } else {
        hamburger.setAttribute("aria-expanded", "true");
      }
      header.classList.toggle("is-open");
    });
  }
  if (searchButton) {
    searchButton.addEventListener("click", (e) => {
      e.stopPropagation();
      if (primaryNavSearch.classList.contains("is-open")) {
        searchButton.setAttribute("aria-expanded", "false");
      } else {
        searchButton.setAttribute("aria-expanded", "true");
      }
      primaryNavSearch.classList.toggle("is-open");
    });
  }
  if (primaryNavSearch) {
    primaryNavSearch.addEventListener("focusout", (e) => {
      e.stopPropagation();
      if (primaryNavSearch.contains(e.relatedTarget)) {
        return;
      }
      primaryNavSearch.classList.remove("is-open");
      searchButton.setAttribute("aria-expanded", "false");
    });
  }
  if (document.getElementById("nav-main")) {
    document.addEventListener("click", (e) => {
      if (!document.getElementById("nav-main").contains(e.target)) {
        header.classList.remove("is-open");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Checks for Navigation items with children
  if ($navPrimaryHasChildren.length > 0) {
    $navPrimaryHasChildren.forEach(($el) => {
      // Down Arrow triggers dropdown
      $el.addEventListener("keydown", (e) => {
        e.stopPropagation();
        if (e.keyCode === "ArrowDown" || e.keyCode === 40) {
          $el.classList.add("is-open");
          $el.setAttribute("aria-expanded", "true");
        }
      });

      $el.addEventListener("mouseover", () => {
        $el.setAttribute("aria-expanded", "true");
      });
      $el.addEventListener("mouseout", () => {
        $el.setAttribute("aria-expanded", "false");
      });

      // Hide dropdown when tab out
      $el
        .querySelector(".ucla-main-nav__sublist")
        .addEventListener("focusout", (e) => {
          e.stopPropagation();
          if ($el.contains(e.relatedTarget)) {
            return;
          }
          $el.classList.remove("is-open");
          $el
            .querySelector(".ucla-main-nav__toggle")
            .setAttribute("aria-expanded", "false");
        });
    });
  }

  // Down arrow click triggers dropdown
  if ($navPrimaryToggles.length > 0) {
    $navPrimaryToggles.forEach(($el) => {
      $el.addEventListener("click", (e) => {
        e.stopPropagation();
        if ($el.closest("li").classList.contains("is-open")) {
          $el.setAttribute("aria-expanded", "false");
        } else {
          $el.setAttribute("aria-expanded", "true");
        }
        $el.closest("li").classList.toggle("is-open");
      });
    });
  }

  // Reset Navigation on window resize
  window.addEventListener("resize", () => {
    primaryNavSearch.classList.remove("is-open");
    header.classList.remove("is-open");
    $navPrimaryHasChildren.forEach(($el) => {
      $el.setAttribute("aria-expanded", "false");
      $el.classList.remove("is-open");
    });
    searchButton.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-expanded", "false");
  });

  // Get all selectors
  function getAll(selector) {
    let parent =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : document;

    return Array.prototype.slice.call(parent.querySelectorAll(selector), 0);
  }
});
