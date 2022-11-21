import './index.html';
import '../styles/style.css';
import {renderButtons, renderModals} from "../js/initDom/initDomElements";
import {randomCatsModalApi, fetchHandler,clickOfCat} from "../api/modal1";


renderButtons();
renderModals();
randomCatsModalApi();
fetchHandler();
clickOfCat();





