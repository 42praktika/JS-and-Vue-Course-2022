/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
const btn = document.getElementsByClassName("btn");

for (let i = 0; i < btn.length; i++) {
  let thisBtn = btn[i];
  thisBtn.addEventListener("click", function () {
    let modal = document.getElementById(this.dataset.modal);
    modal.style.display = "block";
  });
}

const closeBtn = document.getElementsByClassName('close-button');

for (let i = 0; i < closeBtn.length; i++) {
  let thisCloseBtn = closeBtn[i];
  thisCloseBtn.addEventListener('click', function () {
    let modal = document.getElementById(this.dataset.modal);
    modal.style.display = "none";
  });
}

const firstModal = document.getElementById('firstModal');
const secondModal = document.getElementById('secondModal');
const thirdModal = document.getElementById('thirdModal');
const nextBtn = document.getElementsByClassName('next-button');

for (let i = 0; i < nextBtn.length; i++) {
  let thisNextBtn = nextBtn[i];
  thisNextBtn.addEventListener('click', function () {
    if (firstModal.style.display === 'block') {
      firstModal.style.display = 'none';
      secondModal.style.display = 'block';
    } else if (secondModal.style.display === 'block') {
      secondModal.style.display = 'none';
      thirdModal.style.display = 'block';
    } else if (thirdModal.style.display === 'block') {
      thirdModal.style.display = 'none';
      firstModal.style.display = 'block';
    }
  });
} // import WatchJS from "../../../Lessons/06. Naming. App state. Dom updates. MVC/helpers/melanke-watchjs";
//
// const { watch } = WatchJS;
// const app = () =>{
//     const state = {
//         idModal: document.getElementById(this.dataset.modal)
//     }
//         const btn = document.getElementsByClassName("btn");
//         const closeBtn = document.getElementsByClassName('close-button');
//         const firstModal = document.getElementById('firstModal')
//         const secondModal = document.getElementById('secondModal')
//         const thirdModal = document.getElementById('thirdModal')
//         const nextBtn = document.getElementsByClassName('next-button')
//
//     for (let i = 0; i < btn.length; i++) {
//         let thisBtn = btn[i];
//         thisBtn.addEventListener("click", function(){
//             state.idModal.style.display = "block";
//         });
//     }
//
//     for (let i = 0; i < closeBtn.length; i++) {
//         var thisCloseBtn = closeBtn[i];
//         thisCloseBtn.addEventListener('click',function (){
//             state.idModal.style.display="none";
//         })
//     }
//
//     for (let i = 0; i < nextBtn.length; i++) {
//        let  thisNextBtn = nextBtn[i]
//         thisNextBtn.addEventListener('click', function () {
//             if (firstModal.style.display === 'block') {
//                 firstModal.style.display = 'none'
//                 secondModal.style.display = 'block'
//             } else
//             if (secondModal.style.display === 'block') {
//                 secondModal.style.display = 'none'
//                 thirdModal.style.display = 'block'
//             } else
//             if (thirdModal.style.display === 'block') {
//                 thirdModal.style.display = 'none'
//                 firstModal.style.display = 'block'
//             }
//         })
//     }
//
//     watchState(state);
// }
//
// const watchState = (state) => {
//     watch(state,'idModal',()=>{
//         state.idModal.style.display = "block"
//     })
// }
// app();
/******/ })()
;
//# sourceMappingURL=core.bundle.js.map