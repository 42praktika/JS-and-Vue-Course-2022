import './index.html';
import '../styles/style.css';
import {renderButtons, renderModals, initModalsForApi,loader} from "../js/initDom/initDomElements";
import {runModalsApi} from "../api/modalRealisation";

const runApplication = () => {
    renderButtons();
    renderModals();
    initModalsForApi();
    runModalsApi();
    loader();

}
runApplication();





