export const kanyeQuotes = () => {
    const content = document.querySelectorAll('.modal-content');

    const container = document.createElement('div');
    container.classList = 'container';
    const quotes = document.createElement('div');
    quotes.classList = 'quotes';
    quotes.style.marginTop = "10%";
    quotes.style.fontFamily = 'Kanye-Font';
    quotes.style.fontSize = '25px';
    const gif = document.createElement('img');
    gif.src = `${'http://media.giphy.com/media/cEYFeDFmXk7JIIyfgcM/giphy.gif'}`;
    gif.style.marginTop = '10px';
    gif.style.height = '230px';
    container.append(quotes);
    container.append(gif);
    container.append('');

    content[2].append(container);

    const API_KANYE = 'https://api.kanye.rest/';

    const fetchAnswer = () => {
        fetch(API_KANYE)
            .then(data => data.json())
            .then(data => showAnswer(data.quote));
    };

    const showAnswer = quote => {
        quotes.innerHTML = `<p>${quote}</p>` + '@Kanye West';
    };

    fetchAnswer();
}