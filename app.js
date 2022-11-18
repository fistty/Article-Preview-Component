const button = document.querySelector("button");
const mobilePreview = document.querySelector(".preview-container");
const desktopPreview = document.querySelector(".desktop-preview-container");

button.addEventListener("click", () => {
  console.clear();

  //DESTRUCTURING button.dataset.clicked
  const {
    button: {
      dataset: { clicked },
    },
  } = { button };

  if (window.innerWidth < 865) {
    if (clicked === "false") {
      mobilePreview.classList.add("preview-container-transform");
      button.classList.add("button-transform");
      button.dataset.clicked = "true";
    } else if (clicked === "true") {
      mobilePreview.classList.remove("preview-container-transform");
      button.classList.remove("button-transform");
      button.dataset.clicked = "false";
    }
  }

  if (window.innerWidth > 865) {
    if (clicked === "false") {
      desktopPreview.classList.add("desktop-preview-container-transform");
      button.classList.add("button-transform");
      button.dataset.clicked = "true";
    } else if (clicked === "true") {
      desktopPreview.classList.remove("desktop-preview-container-transform");
      button.classList.remove("button-transform");
      button.dataset.clicked = "false";
    }
  }
});
