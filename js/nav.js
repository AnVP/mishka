var open = document.querySelector(".page-header__btn");
var menu = document.querySelector(".page-header");

menu.classList.remove("page-header--nojs");
menu.classList.add("page-header--closed");

open.addEventListener("click", function (evt) {
  if (menu.classList.contains("page-header--closed")) {
    evt.preventDefault();
    menu.classList.remove("page-header--closed");
  } else {
      menu.classList.add("page-header--closed");
    }
});
