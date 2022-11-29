import startModal1 from "@/Modal1";
import startModal2 from "@/Modal2";
import startModal3 from "@/Modal3";

const MODAL_WINDOWS = {
    'modal-1': {
        domElement: document.querySelector('.modal-1'),
        function: startModal1
    },
    'modal-2': {
        domElement: document.querySelector('.modal-2'),
        function: startModal2
    },
    'modal-3': {
        domElement: document.querySelector('.modal-3'),
        function: startModal3
    }
};

export default MODAL_WINDOWS;