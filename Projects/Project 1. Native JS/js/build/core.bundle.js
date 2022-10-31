/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
var prostoObject = {
  info1: {
    //НАЗВАНИЯ ПОТОМ СМЕНЮ. И университет
    dataName: "info1"
  },
  info2: {
    dataName: "info2"
  },
  info3: {
    dataName: "info3"
  }
};
var btnContainer = document.querySelector('.buttons');
btnContainer.addEventListener('click', function (event) {
  var buttons = document.querySelector('.buttons');
  buttons.style.display = 'none';
  var modal = document.querySelector('.modal-' + event.target.dataset.type);
  modal.style.display = 'block';
});
/******/ })()
;
//# sourceMappingURL=core.bundle.js.map