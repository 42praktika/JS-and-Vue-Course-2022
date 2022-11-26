export const getCatAPI = () => {
    const url = 'https://api.thecatapi.com/v1/images/search';

    const modal__container = document.querySelector('.modal__container');

    const activeWindow = document.createElement('div');
    activeWindow.className = 'activeWindow';
    activeWindow.classList.add('apiWindow');

    const img = document.createElement('img');
    img.classList.add('catAPI');

    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            img.setAttribute('src', data[0].url);
        })
        .catch(() => {
        throw new Error('Something went wrong from CatApi.js');
    });

    modal__container.append(activeWindow);
    activeWindow.append(img);
};
