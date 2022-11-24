import './index.html';
import '../styles/style.css';
import {renderButtons, renderModals, initModalsForApi} from "../js/initDom/initDomElements";
import {runModalsApi} from "../js/api/modalRealisation";

const runApplication = () => {
    renderButtons();
    renderModals();
    initModalsForApi();
    runModalsApi();
}
runApplication();





