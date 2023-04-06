"use strict";

document.addEventListener("DOMContentLoaded", function () {
    // let isOpen = null;
    // const toggleVisibilityClass = (e) => e.classList.toggle("is-open");

    // const handleDropdownMenu = (e) => {
    //     console.log("isOpen", isOpen);
    //     const clickedItem = e.closest("li");
    //     toggleVisibilityClass(clickedItem);
    //     if (!isOpen) {
    //         isOpen = clickedItem;
    //     } else if (isOpen == clickedItem) {
    //         isOpen = null;
    //     } else {
    //         toggleVisibilityClass(isOpen);
    //         isOpen = clickedItem;
    //     }
    // };

    // const handleClick = (e) => {
    //     console.log("target", e.target);
    //     if (
    //         e.target.className.includes("nav-primary__toggle") ||
    //         e.target.className.includes("nav-primary__search-desktop-button")
    //     ) {
    //         handleDropdownMenu(e.target);
    //     } else if (
    //         e.target.classList.contains("nav-primary__search-field") ||
    //         e.target.classList.contains("nav-primary__search-block-form") ||
    //         e.target.classList.contains("nav-primary__search-submit")
    //     ) {
    //         return null;
    //     } else if (isOpen) {
    //         toggleVisibilityClass(isOpen);
    //         isOpen = null;
    //     }
    // };
    // document.addEventListener("click", handleClick);

    const hamburger = document.getElementById("primary-ham");
    const header = document.getElementById("header-wrap");
    const $subNavPrimaryToggles = getAll(".nav-primary__toggle");
    hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        header.classList.toggle("is-open");
    });
    document.addEventListener("click", () => {
        if (header.classList.contains("is-open")) {
            header.classList.remove("is-open");
        }
    });
    if ($subNavPrimaryToggles.length > 0) {
        $subNavPrimaryToggles.forEach(($el) => {
            $el.addEventListener("click", (e) => {
                e.stopPropagation();
                $el.closest("li").classList.toggle("is-open");
            });
        });
    }
    function getAll(selector) {
        let parent =
            arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : document;

        return Array.prototype.slice.call(parent.querySelectorAll(selector), 0);
    }
});
