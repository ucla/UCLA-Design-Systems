document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".ucla-c-tabs");

    for (let i = 0; i < tabs.length; i++) {
        const tabButtons = tabs[i].querySelectorAll(".ucla-c-tablink");
        const tabPanels = tabs[i].querySelectorAll(".ucla-c-tabpanel");

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
            const tabPanel = tabs[i].querySelector(`#${id}-tab`);
            tabPanel.hidden = false;
        };
        tabButtons.forEach((button) =>
            button.addEventListener("click", handleTabClick)
        );
    }
});
