const init = () => {
    const classNewsContainer = document.querySelector('.news__container')
    const Div = document.createElement('div')
    Div.className = 'news__news-element';
    const H5 = document.createElement('h5');
    const divForNews = document.createElement('div')
    divForNews.className = 'divForNews'
    Div.append(H5, divForNews)
    classNewsContainer.prepend(Div)
}
export default init;