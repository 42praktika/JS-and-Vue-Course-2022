export const changeActive = () => {
    const api = document.querySelector('.activeWindow');

    api.classList.remove('apiWindow');
    api.classList.add('apiWindowActive');
};