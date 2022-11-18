const button = document.querySelector("button");
const previewContainer = document.querySelector(".preview-container");

button.addEventListener("click", () => {
  console.clear();

  //DESTRUCTURING BUTTON
  const {
    button: {
      dataset: { clicked },
    },
  } = { button };

  if (clicked === "false") {
    previewContainer.classList.add("preview-container-transform");
    button.classList.add("button-transform");
    button.dataset.clicked = "true";
  } else if (clicked === "true") {
    previewContainer.classList.remove("preview-container-transform");
    button.classList.remove("button-transform");
    button.dataset.clicked = "false";
  }
});
