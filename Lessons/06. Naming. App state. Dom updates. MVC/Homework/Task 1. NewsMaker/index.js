import app from './app.js';

/*const setNewsMaker = () => {
    const classNewsContainer = document.querySelector('.news__container')
    const buttonAddNews = document.querySelector('.btn-primary')
    const input = document.querySelector('input');

    buttonAddNews.addEventListener('click', () => {
        const Div = document.createElement('div')
        Div.className = 'news__news-element'
        classNewsContainer.append(Div)

        const H5 = document.createElement('h5');
        const divForNews = document.createElement('div')
        const d = new Date();
        let text = d.toLocaleString();

        Div.append(H5)
        H5.append(text)
        Div.append(divForNews)
        divForNews.append(input.value)
        input.value = ''
    });
}*/
const setNewsMaker = () => {
    app();
}

export default setNewsMaker;