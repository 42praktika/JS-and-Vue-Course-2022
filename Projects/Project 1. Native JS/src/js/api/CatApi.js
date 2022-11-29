import { MODALS } from "../const/ModalConst";

export const getCatAPI = () => {
    const url = 'https://api.thecatapi.com/v1/images/search'; // url
    const modal__container = document.querySelector('.modal__container'); // root document
    const activeWindow = document.createElement('div'); // class for all documents
    const mainDiv = document.createElement('div'); // container of content windows
    const mainArticleDiv = document.createElement('div'); // article content window
    const mainBodyDiv = document.createElement('div'); // body content window
    const img = document.createElement('img'); // image of cat
    const article = document.createElement('h1'); // article

    activeWindow.className = 'activeWindow';
    activeWindow.classList.add('apiWindow');
    mainDiv.classList.add('windowMainDiv');
    mainArticleDiv.classList.add('windowMainArticleDiv');
    mainBodyDiv.classList.add('windowMainBodyDiv');
    img.classList.add('catAPI');
    article.textContent = MODALS[0].text;

    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            img.setAttribute('src', data[0].url);
        })
        .catch(() => {
        throw new Error('Something went wrong!');
    });

    mainArticleDiv.append(article);
    mainBodyDiv.append(img);
    mainDiv.append(mainArticleDiv, mainBodyDiv);
    activeWindow.append(mainDiv);
    modal__container.append(activeWindow);
};

// Notes:
// 1) Add a button that changes the image (not important)