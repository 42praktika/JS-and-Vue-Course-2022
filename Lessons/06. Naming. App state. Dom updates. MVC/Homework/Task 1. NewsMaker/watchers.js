import WatchJS from "../../helpers/melanke-watchjs.js";

const { watch } = WatchJS;

const watchState = (state) => {
    watch(state, () => {
        document.querySelector('h5').textContent = state.date;
        document.querySelector('.divForNews').textContent = state.text
    });
}
export default watchState;