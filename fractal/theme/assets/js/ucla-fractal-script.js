// console.log("fractal script");
// const tabs = document.querySelectorAll(".ucla-docs-tabs");

// for (let i = 0; i < tabs.length; i++) {
//     const tabButtons = tabs[i].querySelectorAll(".ucla-c-tablink");
//     const tabPanels = tabs[i].querySelectorAll(".ucla-c-tabpanel");

//     let handleTabClick = (e) => {
//         tabButtons.forEach((button) => {
//             button.classList.remove("is-active");
//         });
//         tabPanels.forEach((panel) => {
//             panel.hidden = true;
//         });
//         tabButtons.forEach((tab) => {
//             tab.setAttribute("aria-selected", false);
//         });
//         e.currentTarget.setAttribute("aria-selected", true);
//         e.currentTarget.classList.add("is-active");
//         const { id } = e.currentTarget;
//         const tabPanel = tabs[i].querySelector(`#${id}-tab`);
//         tabPanel.hidden = false;
//     };
//     tabButtons.forEach((button) =>
//         button.addEventListener("click", handleTabClick)
//     );
// }

function openTab(e) {
  let tabs = document.querySelectorAll(".ucla-doc-tabs");
  for (let i = 0; i < tabs.length; i++) {
    const tabButtons = tabs[i].querySelectorAll(".ucla-doc-tablink");
    const tabPanels = tabs[i].querySelectorAll(".ucla-doc-tabpanel");

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
    let { id } = e.currentTarget;
    let tabPanel = tabs[i].querySelector(`#tab-${id}`);
    tabPanel.hidden = false;
  }
}
async function copySvg(e, text, changeTextBackTo) {
  let parent = e.target.parentNode.parentNode;
  let svg = parent.querySelector("svg");
  let s = new XMLSerializer();
  let svgStr = s.serializeToString(svg);
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(svgStr);
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = svg;
    textArea.style.position = "absolute";
    textArea.style.opacity = "0";
    document.body.prepend(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
    } catch (error) {
      console.error(error);
    } finally {
      textArea.remove();
    }
  }
  // console.log(e.srcElement.innerText);
  e.srcElement.textContent = text;
  setTimeout(function () {
    e.srcElement.textContent = e.srcElement.textContent = changeTextBackTo;
  }, 1500);
}
