"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelector(".ucla-c-tabs");
    if (tabs) {
        const tabButtons = tabs.querySelectorAll(".ucla-c-tablink");
        const tabPanels = document.querySelectorAll(".ucla-c-tabpanel");

        let handleTabClick = (e) => {
            tabButtons.forEach((button) => {
                button.classList.remove("is-active");
            });
            tabPanels.forEach((panel) => {
                panel.hidden = true;
            });
            tabButtons.forEach((tab) => {
                tab.setAttribute("aria-selected", false);
            });
            e.currentTarget.setAttribute("aria-selected", true);
            e.currentTarget.classList.add("is-active");
            const { id } = e.currentTarget;
            const tabPanel = tabs.querySelector(`#${id}-tab`);
            tabPanel.hidden = false;
        };
        tabButtons.forEach((button) =>
            button.addEventListener("click", handleTabClick)
        );
    }
});
