"use strict";

document.addEventListener("DOMContentLoaded", function () {
  /**
   * Declare Variables
   */
  const hamburger = document.getElementById("primary-ham");
  const header = document.getElementById("header-wrap");
  const $navPrimaryItem = getAll(".ucla-main-nav__item");
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

  if ($navPrimaryItem.length > 0) {
    $navPrimaryItem.forEach($el => {
      $el.addEventListener("keydown", (e) => {
        e.stopPropagation();
        let currentFocusedEl = document.activeElement;
        let navItemHasChildren = $el.classList.contains('ucla-main-nav__item--has-children');
        let previousListItem = currentFocusedEl.closest('.ucla-main-nav__item').previousElementSibling;
        let nextListItem = currentFocusedEl.closest('.ucla-main-nav__item').nextElementSibling;
        if (e.keyCode === "ArrowRight" || e.keyCode === 39) {
          e.preventDefault();
          // check if inside sub-menu
          if (currentFocusedEl.parentElement.parentElement.classList.contains('ucla-main-nav__sublist')) {
            currentFocusedEl.closest('.ucla-main-nav__item--has-children').nextElementSibling.querySelector('.ucla-main-nav__link').focus();
          } else {
            if (nextListItem) {
              nextListItem.querySelector('a').focus();
            } else {
              return;
              // console.log(document.querySelector('.ucla-main-nav').nextElementSibling)
              // document.querySelector('.ucla-main-nav').nextElementSibling.focus();
            }
          }
        }
        if (e.keyCode === "ArrowLeft" || e.keyCode === 37) {
          e.preventDefault();
          if (currentFocusedEl.parentElement.parentElement.classList.contains('ucla-main-nav__sublist')) {
            currentFocusedEl.closest('.ucla-main-nav__item--has-children').previousElementSibling.querySelector('.ucla-main-nav__link').focus();
          } else {
            if (previousListItem) {
              previousListItem.querySelector('a').focus();
            } else {
              return;
              // document.querySelector('.ucla-main-nav').previousElementSibling.focus();
            }
          }
        }
        if (e.keyCode === "ArrowDown" || e.keyCode === 40) {
          e.preventDefault();
          
          // Check if focused on parent
          if (navItemHasChildren) {
            // open and focus first list item
            $el.classList.add("is-open");
            $el.setAttribute("aria-expanded", "true");
            $el.querySelector('.ucla-main-nav__sublist > li > a').focus();
          } else {
            // check if nav item exist
            if (nextListItem) {
                nextListItem.querySelector('.ucla-main-nav__link').focus();
            } else {
              // check if in sublist
              if (currentFocusedEl.parentElement.parentElement.classList.contains('ucla-main-nav__sublist')) {
                if (currentFocusedEl.closest('.ucla-main-nav__item--has-children').nextElementSibling) {
                  currentFocusedEl.closest('.ucla-main-nav__item--has-children').nextElementSibling.querySelector('.ucla-main-nav__link').focus();
                } else {
                  return;
                }
              } else {
                return;
              }
            }
          }
        }
        if (e.keyCode === "ArrowUp" || e.keyCode === 38) {
          e.preventDefault();

          // Check if focused on parent
          if (navItemHasChildren) {
            // check if previous list exist
            if (currentFocusedEl.closest('.ucla-main-nav__item--has-children').previousElementSibling) {
              
              // check if previous list is a parent
              if (currentFocusedEl.closest('.ucla-main-nav__item--has-children').previousElementSibling.classList.contains('ucla-main-nav__item--has-children')) {
                
                // open previous sub menu
                previousListItem.classList.add("is-open");
                previousListItem.setAttribute("aria-expanded", "true");
              
                // focus last child link
                previousListItem.querySelector('.ucla-main-nav__sublist > li:last-of-type > a').focus();
              } else {
                previousListItem.querySelector('.ucla-main-nav__link').focus();
              }
            } else {
              return;
            }
          } else {
            // check if no other list item
            if (previousListItem) {
              previousListItem.querySelector('.ucla-main-nav__link').focus();
            } else {
              // check if in sublist
              if (currentFocusedEl.parentElement.parentElement.classList.contains('ucla-main-nav__sublist')) {

              // close current sub menu
              currentFocusedEl.closest('.ucla-main-nav__item--has-children').classList.remove("is-open");
              currentFocusedEl.closest('.ucla-main-nav__item--has-children').setAttribute("aria-expanded", "false");
              // focus parent link
              currentFocusedEl.closest('.ucla-main-nav__item--has-children').querySelector('.ucla-main-nav__link').focus();
              } else {
                return;
              }
            }
          }
          
        }
      });
    });
  }

  // Checks for Navigation items with children
  if ($navPrimaryHasChildren.length > 0) {
    $navPrimaryHasChildren.forEach(($el) => {
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
          $el.setAttribute("aria-expanded", "false");
        });
    });
  }

  

  // Down caret click triggers dropdown
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
