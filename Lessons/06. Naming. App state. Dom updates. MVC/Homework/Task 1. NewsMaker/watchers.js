import WatchJS from "../../helpers/melanke-watchjs.js";

const { watch } = WatchJS;

const watchState = (state) => {
    watch(state, () => {
        document.querySelector('.date').textContent = state.date;
        document.querySelector('.textNews').textContent = state.text;
    });
};
export default watchState;