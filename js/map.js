var contactsMap = document.querySelector(".contacts__map");

contactsMap.classList.add("contacts__map--js");

ymaps.ready(function() {
  var myMap = new ymaps.Map("map" , {
    center: [59.938631, 30.323055],
    zoom: 16
  });
  var myPlacemark = new ymaps.Placemark([59.938631, 30.323055
], {}, {
    iconLayout: "default#image",
    iconImageHref: "../img/icon-map-pin.svg",
    iconImageSize: [66, 101],
    iconImageOffset: [-36, -98]
  });
  myMap.geoObjects.add(myPlacemark);
});
