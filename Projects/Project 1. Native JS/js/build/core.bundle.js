/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
const bodyElement = document.querySelector('body');
const buttons = document.querySelectorAll('.button');
const closeButtons = document.querySelectorAll('.close-modal');
const prevButtons = document.querySelectorAll('.prev-modal');
const nextButtons = document.querySelectorAll('.next-modal');
const TYPES = {
  'ANIME': document.querySelector('div.modal-anime'),
  'ART-AND-DESIGN': document.querySelector('div.modal-art-and-design'),
  'CALENDAR': document.querySelector('div.modal-calendar')
};
buttons.forEach(button => {
  button.addEventListener('click', () => {
    openWindow(button);
  });
});
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.parentElement.style.display = 'none';
    bodyElement.style.backgroundImage = 'url("img/body_background_first.jpg")';
  });
});
prevButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.parentElement.style.display = 'none';
    TYPES[button.getAttribute('data-type')].style.display = 'block';
  });
});
nextButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.parentElement.style.display = 'none';
    TYPES[button.getAttribute('data-type')].style.display = 'block';
  });
});

const openWindow = button => {
  const type = button.getAttribute('data-type');
  TYPES[type].style.display = 'block';
  bodyElement.style.backgroundImage = 'url("img/body_background_second.jpg")';
};
/******/ })()
;
//# sourceMappingURL=core.bundle.js.map