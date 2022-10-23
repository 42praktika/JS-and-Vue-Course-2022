const initDom = () => {
    const newsContainer = document.querySelector('.news__container');
    const divElement = document.createElement('div');
    divElement.classList.add('news__news-element');
    const elementOfDate = document.createElement('h5');
    elementOfDate.classList.add('date')
    const textNews = document.createElement('div');
    textNews.classList.add('textNews');
    divElement.append(elementOfDate, textNews);
    newsContainer.prepend(divElement);
}
export default initDom;