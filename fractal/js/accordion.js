"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const accordion = document.querySelectorAll(".accordion");

    for (let i = 0; i < accordion.length; i++) {
        const $accordionButtons = accordion[i].querySelectorAll(
            ".accordion__heading-button"
        );
        const $accordionItems =
            accordion[i].querySelectorAll(".accordion-item");
        if ($accordionButtons.length > 0) {
            $accordionButtons.forEach(($el) => {
                $el.addEventListener("click", (e) => {
                    e.stopPropagation();

                    // Checks if clicked element is current element
                    if (
                        e.currentTarget
                            .closest(".accordion-item")
                            .classList.contains("is-open")
                    ) {
                        e.currentTarget
                            .closest(".accordion-item")
                            .classList.toggle("is-open");
                        e.currentTarget.setAttribute("aria-expanded", "false");
                        return;
                    } else {
                        e.currentTarget.setAttribute("aria-expanded", "true");
                    }
                    // Checks if accordion is multi select
                    if (!accordion[i].classList.contains("is-multiselect")) {
                        $accordionItems.forEach((item) => {
                            if (item.classList.contains("is-open")) {
                                item.classList.remove("is-open");
                                item.querySelector(
                                    ".accordion__heading-button[aria-expanded]"
                                ).setAttribute("aria-expanded", "false");
                            }
                        });
                    }
                    $el.closest(".accordion-item").classList.toggle("is-open");
                });
            });
        }
    }
});
