import { MODALS } from "../const/ModalConst";

export const getRickAndMortyAPI = () => {
    let randomNumber = Math.floor(Math.random() * 43) + 1; // random number for url
    const url = `https://rickandmortyapi.com/api/character/?page=${randomNumber}`; // url
    const modal__container = document.querySelector('.modal__container'); // root document
    const activeWindow = document.createElement('div'); // class for all documents
    const div = document.createElement('div'); // container for split windows
    const img = document.createElement('img'); // image of character
    const ul = document.createElement('ul'); // ul
    const liName = document.createElement('li'); // li
    const liGender = document.createElement('li'); // li
    const liSpecies = document.createElement('li'); // li
    const liStatus = document.createElement('li'); // li
    const liLocation = document.createElement('li'); // li
    const article = document.createElement('h1'); // article
    const mainDiv = document.createElement('div'); // container of content windows
    const mainArticleDiv = document.createElement('div'); // article content window
    const mainBodyDiv = document.createElement('div'); // body content window

    article.textContent = MODALS[2].text;
    activeWindow.className = 'activeWindow';
    activeWindow.classList.add('apiWindow');
    div.classList.add('rickAndMortyWindow');
    mainDiv.classList.add('windowMainDiv');
    mainArticleDiv.classList.add('windowMainArticleDiv');
    mainBodyDiv.classList.add('windowMainBodyDiv');

    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            let randomCharacterNumber = Math.floor(Math.random() * 21); // random character number
            img.setAttribute('src', data.results[randomCharacterNumber].image);
            liName.textContent = 'Name: ' + data.results[randomCharacterNumber].name;
            liGender.textContent = 'Gender: ' + data.results[randomCharacterNumber].gender;
            liSpecies.textContent = 'Species: ' + data.results[randomCharacterNumber].species;
            liStatus.textContent = 'Status: ' + data.results[randomCharacterNumber].status;
            liLocation.textContent = 'Location: ' + data.results[randomCharacterNumber].location.name;
        })
        .catch(() => {
            throw new Error('Something went wrong!');
        });

    ul.append(liName, liGender, liSpecies, liStatus, liLocation);
    div.append(img, ul);
    mainBodyDiv.append(div);
    mainArticleDiv.append(article);
    mainDiv.append(mainArticleDiv, mainBodyDiv);
    activeWindow.append(mainDiv);
    modal__container.append(activeWindow);
};

// Notes:
// 1) Add a button that changes the character (not important)
// 2) Add more information about the character (not important)
// 3) Work out an error that sometimes occurs (important) (I can’t understand what the error is)