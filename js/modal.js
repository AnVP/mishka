var buy = document.querySelector(".featured__btn");
var popup = document.querySelector(".modal__container");
var close = document.querySelector(".modal__overlay");

buy.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal__show");
  close.classList.add("modal__show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal__show");
  close.classList.remove("modal__show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal__show")) {
      popup.classList.remove("modal__show");
      close.classList.remove("modal__show");
    }
  }
});
