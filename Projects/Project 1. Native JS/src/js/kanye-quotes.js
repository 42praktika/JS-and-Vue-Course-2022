import { setKanyeData } from './apis/setData.js';

export const kanyeQuotes = () => {
    const content = document.querySelectorAll('.modal-content');

    const container = document.createElement('div');
    container.classList = 'container';
    const quotes = document.createElement('div');
    quotes.classList = 'quotes';
    const gif = document.createElement('img');
    gif.src = `${'http://media.giphy.com/media/cEYFeDFmXk7JIIyfgcM/giphy.gif'}`;
    gif.style.marginTop = '10px';
    gif.style.height = '230px';
    setKanyeData();
    container.append(quotes);
    container.append(gif);
    container.append('');

    content[2].append(container);
};