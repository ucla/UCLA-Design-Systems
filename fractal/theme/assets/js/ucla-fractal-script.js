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
    textArea.value = svgStr;
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
  e.srcElement.textContent = text;
  setTimeout(function () {
    e.srcElement.textContent = e.srcElement.textContent = changeTextBackTo;
  }, 1500);
}

async function copyMaterialSvg(e) {
  const svg = e.target.closest('svg');
  const s = new XMLSerializer();
  const svgStr = s.serializeToString(svg);
  const changeBackTo = e.target.closest('.ucla-material-button-wrapper').querySelector('.ucla-material-tooltip').textContent;
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(svgStr);
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = svgStr;
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
  e.target.closest('.ucla-material-button-wrapper').querySelector('.ucla-material-tooltip').textContent = 'copied!';
  setTimeout(function () {
    e.target.closest('.ucla-material-button-wrapper').querySelector('.ucla-material-tooltip').textContent = changeBackTo;
  }, 1500);
}

function changeIframe(value) {
  let ext = window.frctl.env === "static" ? ".html" : "";
  let pathArray = window.location.pathname.split("/");
  let relativeUrlArray =
    window.frctl.env === "static"
      ? pathArray.slice(0, 3)
      : pathArray.slice(0, 1);
  let relativeUrl = "";
  for (i = 0; i < relativeUrlArray.length; i++) {
    relativeUrl += `${relativeUrlArray[i]}/`;
  }
  document.getElementById(
    "docIframe"
  ).src = `${relativeUrl}components/preview/${value}${ext}`;
  let codeExamples = document.getElementsByClassName("design-code-examples");
  codeExamples.forEach((example) => {
    example.hidden = true;
  });
  document.getElementById(value).hidden = false;
}