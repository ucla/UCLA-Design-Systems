"use strict";

document.addEventListener("DOMContentLoaded", function () {
    /**
     * Declare Variables
     */
    const hamburger = document.getElementById("primary-ham");
    const header = document.getElementById("header-wrap");
    const $navPrimaryHasChildren = getAll(".nav-primary__link--has-children");
    const $subNavPrimaryToggles = getAll(".nav-primary__toggle");
    const searchButton = document.getElementById("search-button");
    const primaryNavSearch = document.getElementById("primary-nav-search");

    /**
     * Event Listeners
     */
    hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        header.classList.toggle("is-open");
    });
    searchButton.addEventListener("click", (e) => {
        e.stopPropagation();
        primaryNavSearch.classList.toggle("is-open");
    });
    primaryNavSearch.addEventListener("focusout", (e) => {
        e.stopPropagation();
        if (primaryNavSearch.contains(e.relatedTarget)) {
            return;
        }
        primaryNavSearch.classList.remove("is-open");
    });
    document.addEventListener("click", (e) => {
        if (!document.getElementById("nav-main").contains(e.target)) {
            header.classList.remove("is-open");
        }
    });

    // Checks for Navigation items with children
    if ($navPrimaryHasChildren.length > 0) {
        $navPrimaryHasChildren.forEach(($el) => {
            // Down Arrow triggers dropdown
            $el.addEventListener("keydown", (e) => {
                e.stopPropagation();
                if (e.keyCode === "ArrowDown" || e.keyCode === 40) {
                    $el.classList.add("is-open");
                }
            });

            // Hide dropdown when tab out
            $el.querySelector(".nav-primary__sublist").addEventListener(
                "focusout",
                (e) => {
                    e.stopPropagation();
                    if ($el.contains(e.relatedTarget)) {
                        return;
                    }
                    $el.classList.remove("is-open");
                }
            );
        });
    }

    // Down arrow click triggers dropdown
    if ($subNavPrimaryToggles.length > 0) {
        $subNavPrimaryToggles.forEach(($el) => {
            $el.addEventListener("click", (e) => {
                e.stopPropagation();
                $el.closest("li").classList.toggle("is-open");
            });
        });
    }

    // Get all selectors
    function getAll(selector) {
        let parent =
            arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : document;

        return Array.prototype.slice.call(parent.querySelectorAll(selector), 0);
    }
});
